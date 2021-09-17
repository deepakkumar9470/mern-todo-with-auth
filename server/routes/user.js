const express = require('express');


const {addUser} = require('../controllers/userController');

const router = express.Router();

const userController = require('../controllers/userController');


router.get('/', userController.getUsers);
router.post('/add', addUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.editUser);
router.delete('/:id', userController.deleteUser);

module.exports =  router;