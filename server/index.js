const cors = require('cors')
const exp = require('express')
const bp = require('body-parser')
const { connect } = require('mongoose')
const { success, error } = require('consola')

// Bring in the app constants
const { DB, PORT, SECRET } = require('./config')

// Initialize the application
const app = exp()

const startApp = async () => {
  try {

    // Connection with DB
    await connect(DB, { useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true })
    success({ message: `Connected with database: ${DB}`, badge: true })
    
    // Application Server
    app.listen(PORT, () => success({ message: `Server started on PORT: ${PORT}`, badge: true }))

  } catch (err) {
    error({ message: `Unable to connect with database: ${err}`, badge: true })
  }
}

// Call function
startApp()