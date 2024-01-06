const { default: mongoose } = require('mongoose');

let validateEmail = (email) => {
  return email.includes('@');
};

let post = new mongoose.Schema({
  Title: {
    type: String,
    require: true,
    trim: true,
  },
  Body: {
    type: String,
    require: true,
    trim: true,
  },
  Created_By: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  Active: {
    type: Boolean,
    require: true,
    trim: true,
    default: true,
  },
  Geo_location:{
      latitude: {
        type: Number,
        required: true
      },
      longitude: {
        type: Number,
        required: true
    
    }
  }
});

module.exports = mongoose.model('post', post);
