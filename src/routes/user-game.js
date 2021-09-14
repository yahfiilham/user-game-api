const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const { createUserGame, getAllUserGame, getUserGame, updateUserGame, deleteUserGame } = require('../controllers/user-game');

// CREATE data user-game
router.post('/user-game', [
    body('username').notEmpty().withMessage('username cannot be empty'),
    body('email').isEmail().withMessage('email format does not match'),
    body('password').notEmpty().withMessage('password cannot be empty').isLength({ min: 8 }).withMessage('password has at least 8 characters'),
], createUserGame);

// READ all data user-game
router.get('/user-game', getAllUserGame);

// READ detail data user-game
router.get('/user-game/:id', getUserGame);

// UPDATE data user-game
router.put('/user-game/:id', [
    body('username').notEmpty().withMessage('username cannot be empty'),
    body('email').isEmail().withMessage('email format does not match'),
    body('password').notEmpty().withMessage('password cannot be empty').isLength({ min: 8 }).withMessage('password has at least 8 characters'),
], updateUserGame);

router.delete('/user-game/:id', deleteUserGame)

module.exports = router;