'use strict'


async function login(req, res) {
    try {
        console.log('login')
        res.status(200).send({ message: 'successfully login', error: '' })
    } catch (error) {
        res.status(400).send({ message: "", error })
    }
}

module.exports = {
    login
}