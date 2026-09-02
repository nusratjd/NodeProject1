const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/users', userController.createUser);

router.put('/users', userController.updateUser);

router.delete('/users', userController.deleteUser);

router.get('/users/:id', userController.getUserById);

module.exports = router;