const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    unique: true
  },
  _id: String,
  url: {
    type: String,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date
  },
  owner: {
    type: String,
    required: true
  },
  languages:{
    type: [Object]
  },
  topics: {
    type: [String]
  },
  report: {
    type: String,
    default:'## Oops \n\n I have not created a report for this project yet.'
  }, 
  fallbackToReadme: {
    type: Boolean,
    default: true
  },
  readme: {
    type: String,
    default:'## Geez \n\n No README as well, this is embarassing. Probably something is broken. Please let me know via email!'
  }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;