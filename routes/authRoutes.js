'use strict'

const authRoutes = require('express').Router()
const authController = require('../controllers/auth')

authRoutes.post('/login', authController.login)

module.exports = authRoutes
