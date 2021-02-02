const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin', 'superadmin']
  }
}, { timestamps: true })

module.exports = model('users', UserSchema)