// const userSchema = require('./user');
// const animalSchema = require('./animal');

const mongoose = require('mongoose')

const trainingSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true
  },
  animal: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Animal',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Training', trainingSchema)