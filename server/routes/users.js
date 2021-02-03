const router = require('express').Router()
const { userRegistration } = require('./../utils/Auth')

// User registration route
router.post('/register-user', async (req, res) => {
  await userRegistration(req.body, 'user', res)
})

// Admin registration route
router.post('/register-admin', async (req, res) => {
  await userRegistration(req.body, 'admin', res)
})

// Super admin registration route
router.post('/register-super-admin', async (req, res) => {
  await userRegistration(req.body, 'superadmin', res)
})

module.exports = router