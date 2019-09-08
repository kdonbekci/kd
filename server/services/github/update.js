require('dotenv').config({ path: '../../../.env' });
const fs = require('fs');
const mongoose = require('mongoose');
const Project = require('../../models/Project');

const queries = JSON.parse(fs.readFileSync('queries.json', 'utf8'));
const { graphql } = require("@octokit/graphql");
const githubAPI = graphql.defaults({
    headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`
    }
});


mongoose.connection.openUri(`mongodb://localhost:${process.env.MONGO_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true })
    .once('open', () => {
        getAllRepos()
            .then(repos => {
                return updateDatabse(repos);
            })
            .then(() => {
                mongoose.disconnect()
            })
            .catch(err => {
                console.error(err)
                mongoose.disconnect()
            })
    })
    .on('error', err => console.error('MongoDB error:', err));
// "repositoryTopics": {
//     "edges": [
//       {
//         "node": {
//           "topic": {
//             "name": "scraper"
//           }
//         }
//       },

const getAllRepos = async () => githubAPI(queries.getAllRepos)
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
            repo.topics = topics
            repo.languages = languages;
            repos_parsed.push(repo);
        });
        return repos_parsed;
    });


const updateDatabse = async (repos) => {
    // console.log(repos[0])
    let test = new Project(repos[0]);
    test.save()
    .then(element => {
        console.log(element)
        console.log('aa')
    })
    .catch(err => console.error(err))

};