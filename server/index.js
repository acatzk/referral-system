const cors = require('cors')
const exp = require('express')
const bp = require('body-parser')
const passport = require('passport')
const { connect } = require('mongoose')
const { success, error } = require('consola')

// Bring in the app constants
const { DB, PORT } = require('./config')

// Initialize the application
const app = exp()

// Middlewares
app.use(cors())
app.use(bp.json())
app.use(passport.initialize())

require('./middlewares/passport')(passport)

// User route middleware
app.use('/api/auth', require('./routes/users'))

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