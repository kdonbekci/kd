const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: true,
    unique: true
  },
  visits: {
    type: [Date]
  },
  company: {
    type: String
  },
  picture: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;