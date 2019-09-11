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
  }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;