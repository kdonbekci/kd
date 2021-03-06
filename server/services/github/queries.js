// const queries = {
//     "getRepos": "{ viewer { repositories(affiliations: [OWNER], privacy: PUBLIC, first: 100, isFork: false, orderBy: {field: CREATED_AT, direction: DESC}) { nodes { object(expression: \"master:REPORT.md\") { ... on Blob { text } } name id url updatedAt repositoryTopics(first: 10) { edges { node { topic { name } } } } createdAt owner { login } languages(first: 100, orderBy: {field: SIZE, direction: DESC}) { edges { size node { name color } } } } } } }",
// }

const queries = {
    "getRepos": `{ viewer { repositories(affiliations: [OWNER], privacy: PUBLIC, first: 100, isFork: false, orderBy: {field: CREATED_AT, direction: DESC}) { nodes { first: object(expression: "master:REPORT.md") { ... on Blob { text } } second: object(expression: "master:README.md") { ... on Blob { text } } name id url updatedAt repositoryTopics(first: 10) { edges { node { topic { name } } } } createdAt owner { login } languages(first: 100, orderBy: {field: SIZE, direction: DESC}) { edges { size node { name color } } } } } } }`
}
module.exports = queries;