const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

const { createUserGameBiodata, getAllUserGameBiodata, getDetailUserGameBiodata, updateUserGameBiodata, deleteUserGameBiodata } = require('../controllers/user-game-biodata');

// CREATE data user game biodata
router.post('/user-game/biodata', [
    body('firstName').notEmpty().withMessage('firstName cannot be empty'),
    body('lastName').notEmpty().withMessage('lastName cannot be empty'),
    body('dateOfBirth').notEmpty().withMessage('dateOfBirth cannot be empty'),
    body('noHp').notEmpty().withMessage('noHp cannot be empty'),
    body('profession').notEmpty().withMessage('profession cannot be empty'),
    body('country').notEmpty().withMessage('country cannot be empty'),
    body('bio').notEmpty().withMessage('bio cannot be empty'),
    body('userGameId').notEmpty().withMessage('userGameId cannot be empty'),
    
], createUserGameBiodata);

// READ all data user game biodata
router.get('/user-game/biodata', getAllUserGameBiodata);

// READ detail data user game biodata
router.get('/user-game/biodata/:id', getDetailUserGameBiodata);

// UPDATE data user-game-biodata
router.put('/user-game/biodata/:id', [
    body('firstName').notEmpty().withMessage('firstName cannot be empty'),
    body('lastName').notEmpty().withMessage('lastName cannot be empty'),
    body('dateOfBirth').notEmpty().withMessage('dateOfBirth cannot be empty'),
    body('noHp').notEmpty().withMessage('noHp cannot be empty'),
    body('profession').notEmpty().withMessage('profession cannot be empty'),
    body('country').notEmpty().withMessage('country cannot be empty'),
    body('bio').notEmpty().withMessage('bio cannot be empty'),
    body('userGameId').notEmpty().withMessage('userGameId cannot be empty'),
    
], updateUserGameBiodata);

// DELETE data user-game-biodata
router.delete('/user-game/biodata/:id', deleteUserGameBiodata);


module.exports = router;