'use strict'

require('dotenv').config()
const express = require('express') // Web framework
const bodyParser = require('body-parser') // To parse request body
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const routes = require('./routes/index')
require('./routes/index')


const app = express()
const PORT = process.env.PORT || 8081

app.use(express.static(path.join(__dirname + '/public')))
app.use(express.static('public'))

// Parse application/json and console the logging
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});


app.use('/auth', routes.authRoutes)
app.use('/user', routes.userRoutes)
app.use('/github', routes.githubRoutes)

const server = app.listen(PORT, () => {
    console.log(`The server is up and running at PORT ${PORT}`)
})