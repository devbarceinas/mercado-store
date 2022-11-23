const axios = require('axios')
const { app_config } = require('../config')

const API_MLA = app_config.host || ''

const instance = axios.create({
  baseUrl: API_MLA,
  headers: {
    'Content-Type': 'application/json'
  }
})

module.exports = instance
