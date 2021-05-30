'use strict'

const fetch = require('node-fetch')
const config = require('../config/constants')

async function getUserInfoByUserName(req, res) {
    try {
        const response = await fetch(`${config.CONSTANTS.githubBaseUrl}/users/${req.query.username}`)
        if (response.status == 200) {
            const gitRes = await response.json()
            res.status(200).send({ message: 'successfully login', error: '', data: gitRes })
        } else {
            res.status(400).send({ message: "", error: "" })
        }
    } catch (error) {
        res.status(400).send({ message: "", error })
    }
}

module.exports = {
    getUserInfoByUserName
}