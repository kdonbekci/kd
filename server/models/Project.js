const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  _id: {
    type: String
  },
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
    type: [Object],
    // _id: {
    //   id:false
    // }
  },
  topics: {
    type: [String]
  }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;