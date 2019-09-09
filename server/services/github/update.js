require('dotenv').config({ path: '../../../.env' });
const fs = require('fs');
const queries = JSON.parse(fs.readFileSync('queries.json', 'utf8'));
const { graphql } = require("@octokit/graphql");
const githubAPI = graphql.defaults({
    headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`
    }
});
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect(`mongodb://localhost:${process.env.MONGO_PORT}/${process.env.DB_NAME}`, {useNewUrlParser: true});
let Project = require('../../models/Project');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection
    .once('open', () => {
        getAllRepos()
            .then(repos => {
                console.info('Fetched repos from GitHub');
                return updateDatabse(repos);
            })
            .then((projects) => {
                console.info('Updated MongoDB');
                mongoose.connection.close();
            })
            .catch(err => {
                console.error(err);
                mongoose.connection.close();
            })
    })
    .on('error', err => console.error('MongoDB error:', err));

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
        return repos_parsed;
    });

const updateDatabse = (repos) => {
    promises = []
    repos.forEach(project => {
        query = {_id: project._id};
        promises.push(Project.findOneAndUpdate(query, project, {upsert:true}));
    });
    return Promise.all(promises)
}