const userController = require('./../controllers/userController');
const express = require('express');

const router = express.Router();


router
.route('/')
.get(userController.getAllUsers)
.post(userController.createUser);

router
.route('/:id')
.get(userController.getUser)
.delete(userController.deleteUser)
.patch(userController.updateuser);

module.exports = router;