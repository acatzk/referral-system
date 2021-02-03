const router = require('express').Router()
const { auth, login, registration } = require('./../utils/Auth')

// User registration route
router.post('/register-user', async (req, res) => {
  await registration(req.body, 'user', res)
})

// Admin registration route
router.post('/register-admin', async (req, res) => {
  await registration(req.body, 'admin', res)
})

// Super admin registration route
router.post('/register-super-admin', async (req, res) => {
  await registration(req.body, 'superadmin', res)
})

// User login route
router.post('/login-user', async (req, res) => {
  await login(req.body, 'user', res)
})

// Admin login route
router.post('/login-admin', async (req, res) => {
  await login(req.body, 'admin', res)
})

// Superadmin login route
router.post('/login-super-admin', async (req, res) => {
  await login(req.body, 'superadmin', res)
})


// Profile route
router.get('/profile', auth, async (req, res) => {
  return res.json("Hello baby")
})

module.exports = router