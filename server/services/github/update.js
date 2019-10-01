const path = require('path');
const queries = require('./queries');
const { graphql } = require("@octokit/graphql");

const mongoose = require('mongoose');
if (!module.parent) {
    require('dotenv').config({ path: path.join(__dirname, '../../.env.production') });
    console.log('Script github/update.js is being run independently.')
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.connection.openUri(`mongodb://${process.env.MONGO_ID}:${process.env.MONGO_SECRET}@localhost:${process.env.MONGO_PORT}/${process.env.DB_NAME}?authSource=admin`, 
    { useNewUrlParser: true, useUnifiedTopology: true,})
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

const getAllRepos = () => githubAPI(queries.getRepos)
    .then(res => { return res.viewer.repositories.nodes; })
    .then(repos => {
        let repos_parsed = [];
        repos.forEach(repo => {
            let languages = [];
            let topics = [];
            let report;
            let readme;
            if (repo.owner.login != 'kdonbekci') {
                return;
            }
            // console.log(repo);
            if (repo.first) {
                report = repo.first.text;
                if (report) {
                    repo.report = report;
                    repo.fallbackToReadme = false;
                }
            }
            if (repo.second) {
                readme = repo.second.text;
                if (readme) {
                    repo.readme = readme;
                }
            }
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
            delete repo.object;
            repo.topics = topics;
            repo.languages = languages;
            repos_parsed.push(repo);
        });
        console.info(`(1/2) Fetched ${repos_parsed.length} repos from GitHub`);
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

const updateRepos = async () => {
    console.info('Began updating the projects...');
    let repos = await getAllRepos();
    await mongoose.connection.db.dropCollection('projects');
    repos = await updateDatabse(repos);
    console.info('(2/2) Updated the projects on MongoDB.');
    return;
}

module.exports = updateRepos