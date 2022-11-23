const express = require('express')
const bodyParser = require('body-parser')
const request = require('./routes/api')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', request)

module.exports = app
