'use strict'

const githubRoutes = require('express').Router()
const githubController = require('../controllers/github')

githubRoutes.get('/getfollowersbyusername', githubController.getFollowersByUsername)
githubRoutes.get('/getfollowingbyusername', githubController.getFollowingByUsername)
githubRoutes.get('/getallrepos', githubController.getAllRepos)

module.exports = githubRoutes
