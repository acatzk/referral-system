const router = require('express').Router()
const {
  auth, 
  login, 
  checkRole, 
  registration, 
  serializeUser 
} = require('./../utils/Auth')

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
router.get('/profile', auth, checkRole(['user']), async (req, res) => {
  return res.json(serializeUser(req.user))
})

// User protected route
router.get('/user-protected', auth, checkRole(['user']), async (req, res) => {
  return res.json('I am protected User')
})

// Admin protected route
router.get('/admin-protected', auth, checkRole(['admin']), async (req, res) => {
  return res.json('I am protected Admin')
})

// Super Admin protected route
router.get('/super-admin-protected', auth, checkRole(['superadmin']), async (req, res) => {
  return res.json('I am protected Super Admin')
})

module.exports = router