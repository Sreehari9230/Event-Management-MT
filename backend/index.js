require('dotenv').config();

const config = require('./config.json')
const mongoose = require('mongoose')

mongoose.connect(config.connectionString)

const express = require("express")
const cors = require("cors")
const app = express()

const jwt = require('jsonwebtoken')
const { authenticateToken } = require('./utilities')

app.use(
    cors({
        origin: '*'
    })
)

app.get('/',(req,res) => {
    res.json({ data: 'hello'})
});

// Create Account
app.post('/create-account', async (req, res) => {

    const { fullName, enmail, password } = 
})


app.listen(8000)

module.exports = app