const express = require('express')
const router = express.Router()
const userController = require('../Controllers/users.controller')
const verifyToken = require('../Middlewares/verifyToken')


// login user
router.post('/login', userController.Loginuser)

// Register user
router.post('/register', userController.RegisterUser)

// get user profile
router.get('/profile', verifyToken, userController.getUserProfile)
// Update user profile

module.exports = router
