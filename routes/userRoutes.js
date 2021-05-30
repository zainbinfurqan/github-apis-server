'use strict'

const authRoutes = require('express').Router()
const userController = require('../controllers/user')

authRoutes.get('/getuserbyusername', userController.getUserInfoByUserName)

module.exports = authRoutes
