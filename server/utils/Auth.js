const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { SECRET } = require('./../config')
const User = require('./../models/User')

/**
 * @DESC To register the user
 * (ADMIN, SUPER_ADMIN, USER) 
 */
const registration = async (userDetails, role, res) => {
  try {
    // validate username
    let usernameNotTaken = await(validateUsername(userDetails.username))
    if (!usernameNotTaken) {
      return res.status(400).json({
        message: `Username is already taken.`,
        success: false
      })
    }

    // validate email
    let emailNotRegistered = await(validateEmail(userDetails.email))
    if (!emailNotRegistered) {
      return res.status(400).json({
        message: `Email is already taken.`,
        success: false
      })
    }

    // Hashed password
    const password = await bcrypt.hash(userDetails.password, 12)

    // create a new user
    const newUser = new User({
      ...userDetails,
      password,
      role
    })

    // save new user
    await newUser.save()
    return res.status(201).json({
      message: `Hurry!! Successfully registered.`,
      success: true
    })

  } catch (err) {
    return res.status(500).json({
      message: `Unable to create your account. ${err}`,
      success: false
    })
  }
}

/**
 * @DESC To login user 
 * authentication role base
 * (ADMIN, SUPER_ADMIN, USER) 
 */
const login = async (credentials, role, res) => {
  let { username, password } = credentials
  
  // check if username is in the database
  const user = await User.findOne({ username })
  if (!user) {
    return res.status(404).json({
      message: `Username is not found. Invalid login credentials. `,
      success: false
    })
  }

  // check role login authentication
  if (user.role !== role) {
    return res.status(403).json({
      message: `Please make sure you are logging in from the right portal.`,
      success: false
    })
  }

  // check for the password
  let isMatch = await bcrypt.compare(password, user.password)
  if (isMatch) {
    // define payload for token
    let payload = {
      user_id: user._id,
      role: user.role,
      username: user.username,
      email: user.email
    }
    // expiration
    let expiration_date = { expiresIn: '7 days' }

    // add paylood, secret and expiration date to get the jwt token
    let token = jwt.sign(payload, SECRET, expiration_date)

    let result = {
      ...payload,
      token: `Bearer ${token}`
    }

    return res.status(200).json({
      ...result,
      message: `Hurry! You are now logged in.`,
      success: true
    })

  } else {
    return res.status(403).json({
      message: `Incorrect password.`,
      success: false
    })
  }
}

const validateUsername = async username => {
  let user = await User.findOne({ username })
  return user ? false : true
}

const validateEmail = async email => {
  let user = await User.findOne({ email })
  return user ? false : true
}

module.exports = { login, registration }