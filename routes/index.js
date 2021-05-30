const express = require('express')

const authRoutes = require('./authRoutes')
const userRoutes = require('./userRoutes')
const githubRoutes = require('./githubRoutes')

module.exports = {
    authRoutes,
    userRoutes,
    githubRoutes
}
