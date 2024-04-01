const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

// ------------------ USERS ------------------
router.get('/user/login', userController.login);

router.get('/users', userController.getUsers)

router.post('/new/user', userController.newUser)

module.exports = router;