const express = require('express')
const router = express.Router();

const User = require('../models/user');
const Animal = require('../models/animal');
const Training = require('../models/training-log');

// Getting User
router.get('/admin/users', async (req, res) => {
    try {
      const users = await User.find()
      res.json(users)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
})
  
// Creating User
router.post('/user', async (req, res) => {
const user = new User({
    _id: req.body._id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    profilePicture: req.body.profilePicture,
})
try {
    const newUser = await user.save()
    res.status(200).json(newUser)
} catch (err) {
    res.status(400).json({ message: err.message })
}
})

// Getting Animal
router.get('/admin/animals', async (req, res) => {
    try {
      const animals = await Animal.find()
      res.json(animals)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
})
  
// Creating Animal
router.post('/animal', async (req, res) => {
const animal = new Animal({
    _id: req.body._id,
    name: req.body.name,
    hoursTrained: req.body.hoursTrained,
    owner: req.body.owner,
    dateOfBirth: req.body.dateOfBirth,
    profilePicture: req.body.profilePicture,
})
try {
    const newAnimal = await animal.save()
    res.status(200).json(newAnimal)
} catch (err) {
    res.status(400).json({ message: err.message })
}
})

// Getting Training Log
router.get('/admin/training', async (req, res) => {
    try {
      const trainings = await Training.find()
      res.json(trainings)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
})
  
// Creating Training Log
router.post('/training', async (req, res) => {
const training = new Training({
    _id: req.body._id,
    date: req.body.date,
    description: req.body.description,
    hours: req.body.hours,
    animal: req.body.animal,
    user: req.body.user,
    profilePicture: req.body.profilePicture,
})
try {
    const newTraining = await training.save()
    res.status(200).json(newTraining)
} catch (err) {
    res.status(400).json({ message: err.message })
}
})

module.exports = router