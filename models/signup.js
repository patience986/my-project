const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const SignupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  branch: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  }
});

// Plugin passport-local-mongoose to handle password hashing and authentication
SignupSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('Signup', SignupSchema);
