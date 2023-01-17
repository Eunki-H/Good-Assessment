// const User = require('./user');

const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  hoursTrained: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Animal', animalSchema)
