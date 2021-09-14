const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

const { createUserGameHistory, getAllUserGameHistory, getUserGameHistory, updateUserGameHistory, deleteUserGameHistory } = require('../controllers/user-game-history');

// CREATE data user-game-history
router.post('/user-game/history', [
    body('totalMatch').notEmpty().withMessage('total match cannot be empty'),
    body('matchWon').notEmpty().withMessage('match won cannot be empty'),
    body('points').notEmpty().withMessage('points cannot be empty'),
    body('userGameId').notEmpty().withMessage('user game id cannot be empty'),
    
], createUserGameHistory);

// READ all data user-game-history
router.get('/user-game/history', getAllUserGameHistory);

// READ detail data user-game-history
router.get('/user-game/history/:id', getUserGameHistory);

// UPDATE data user-game-history
router.put('/user-game/history/:id', [
    body('totalMatch').notEmpty().withMessage('total match cannot be empty'),
    body('matchWon').notEmpty().withMessage('match won cannot be empty'),
    body('points').notEmpty().withMessage('points cannot be empty'),
    body('userGameId').notEmpty().withMessage('user game id cannot be empty'),
    
], updateUserGameHistory);

// DELETE data user-game-history
router.delete('/user-game/history/:id', deleteUserGameHistory);

module.exports = router;