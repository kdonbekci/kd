const fs = require('fs');
const path = require('path');
const queries = JSON.parse(fs.readFileSync(path.join(__dirname, 'queries.json'), 'utf8'));
const { graphql } = require("@octokit/graphql");

const mongoose = require('mongoose');
if (!module.parent) {
    require('dotenv').config({ path: '../../../.env' });
    console.log('Script github/update.js is being run independently.')
    mongoose.set('useFindAndModify', false);
    mongoose.connect(`mongodb://localhost:${process.env.MONGO_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true });
    mongoose.connection
        .once('open', () => {
            updateRepos()
                .then(() => {
                    mongoose.connection.close();
                })
                .catch(err => {
                    console.error(err);
                    mongoose.connection.close();
                })
        })
        .on('error', err => console.error('MongoDB error:', err));
}

const githubAPI = graphql.defaults({
    headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`
    }
});

let Project = require('../../models/Project');

const getAllRepos = () => githubAPI(queries.getAllRepos)
    .then(res => { return res.viewer.repositories.nodes; })
    .then(repos => {
        let repos_parsed = [];
        repos.forEach(repo => {
            let languages = [];
            let topics = [];
            repo.owner = repo.owner.login;
            repo._id = repo.id;
            repo.languages.edges.forEach(language => {
                language = { size: language.size, name: language.node.name, color: language.node.color };
                languages.push(language);
            });
            if (repo.repositoryTopics.edges.length != 0) {
                repo.repositoryTopics.edges.forEach(topic => topics.push(topic.node.topic.name));
            }
            delete repo.repositoryTopics;
            delete repo.id;
            repo.topics = topics;
            repo.languages = languages;
            repos_parsed.push(repo);
        });
        console.info('(1/2) Fetched repos from GitHub');
        return repos_parsed;
    });

const updateDatabse = (repos) => {
    promises = []
    repos.forEach(project => {
        query = { _id: project._id };
        promises.push(Project.findOneAndUpdate(query, project, { upsert: true }));
    });
    return Promise.all(promises)
}

const updateRepos = () => {
    console.info('Began updating the projects...')
    return getAllRepos()
        .then(updateDatabse)
        .then(repos => {
            console.info('(2/2) Updated the projects on MongoDB.');
            return;
        })
        .catch(err => {
            throw err;
        });
}

module.exports = updateRepos