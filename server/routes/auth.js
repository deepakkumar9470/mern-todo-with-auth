const express = require('express');
const router = express.Router();

// Importing controllers 
const authController = require('../controllers/authControllers');

// Importing middleware to check users authentication
const auth = require('../middleware/auth');

const Authenticate = require('../middleware/authenticate');

// Routes 
router.post('/register', authController.signup);
router.post('/login', authController.login);
router.get('/users',auth, authController.get_user);
router.get('/logout', authController.logout);

module.exports = router;