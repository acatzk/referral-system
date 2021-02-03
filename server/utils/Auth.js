const bcrypt = require('bcryptjs')
const User = require('./../models/User')

/**
 * @DESC To register the user
 * (ADMIN, SUPER_ADMIN, USER) 
 */
const userRegistration = async (userDetails, role, res) => {
  try {
    // validate username
    let usernameNotTaken = await(validateUsername(userDetails.username))
    if (usernameNotTaken) {
      return res.status(400).json({
        message: `Username is already taken.`,
        success: false
      })
    }

    // validate email
    let emailNotRegistered = await(validateEmail(userDetails, email))
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
      message: `Unable to create your account. \n ${err}`,
      success: false
    })
  }
}

const validateUsername = username => {
  let user = User.findOne({ username })
  return user ? false : true
}

const validateEmail = email => {
  let user = User.findOne({ email })
  return user ? false : true
}

module.exports = { userRegistration }