const { default: mongoose } = require('mongoose');

let validateEmail = (email) => {
  return email.includes('@');
};

let user = new mongoose.Schema({
  Name: {
    type: String,
    require: true,
    trim: true,
  },
  Email: {
    type: String,
    require: true,
    trim: true,
    validate: [validateEmail, 'Invalid email format'],
  },
  Password: {
    type: Number,
    require: true,
    trim: true,
    minlength: 6,
  },
});

module.exports = mongoose.model('user', user);
