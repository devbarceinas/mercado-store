require('dotenv').config()
const { app_config } = require('./config')
const app = require('./app')

const initApp = (paramaterConfig) => {
  try {
    const port = paramaterConfig.port
    app.listen(port, () => console.log(`Listen on ${port}`))
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
}

initApp(app_config)
