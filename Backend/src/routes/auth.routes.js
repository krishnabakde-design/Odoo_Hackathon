const express = require('express');
const router = express.Router();

const { adminSignup, login } = require('../controllers/auth.controller');

// Admin-only signup
router.post('/signup', adminSignup);

// Shared login (Admin + Employee)
router.post('/login', login);

module.exports = router;
