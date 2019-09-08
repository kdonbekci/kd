const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  logins: {
    type: [Date],
    default: [Date.now]
  },
  company: {
    type: String,
    default: null
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;