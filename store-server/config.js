const config = {
  app_config: {
    host: process.env.API_URL,
    port: process.env.APP_PORT,
    author_name: process.env.AUTHOR_NAME,
    author_lastname: process.env.AUTHOR_LASTNAME,
  }
}

module.exports = config
