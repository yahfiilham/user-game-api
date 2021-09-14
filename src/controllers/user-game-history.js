const { User_Game_History } = require('../../models');

const { validationResult } = require("express-validator");

exports.createUserGameHistory = (req, res) => {
    // menangkap req.body
    const {totalMatch, matchWon, points, userGameId } = req.body;

    // validasi input user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 'failed',
            message: 'Invalid input value!',
            data: null,
            errors: errors.array(),
        });
    }

    User_Game_History.create({
        totalMatch,
        matchWon,
        points,
        userGameId
    })
        .then(user => {
            res.status(201).json({
                status: 'success',
                message: `data with user game id ${userGameId} has been created`,
                data: user,
            });
        });
}

exports.getAllUserGameHistory = (req, res) => {
        User_Game_History.findAll()
        .then(user => {
            res.status(200).json({
                status: "success",
                message: 'get all data users game history success',
                data: user,
            });
        });
    }

exports.getUserGameHistory = (req, res) => {
    User_Game_History.findOne({where: { id: req.params.id }})
        .then(user => {
            if (user) {
                res.status(200).json({
                    status: 'success',
                    message: `data with id ${req.params.id} has been found!`,
                    data: user,
                });
            } else {
                res.status(404).json({
                    status: 'failed',
                    message: `Data with the id ${req.params.id} not found!`,
                    data: null,
                });
            }
        });
};

exports.updateUserGameHistory = (req, res) => {
    // menangkap req.body
    const {totalMatch, matchWon, points, userGameId } = req.body;

    // validasi input user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 'failed',
            message: 'Invalid input value!',
            data: null,
            errors: errors.array(),
        });
    }

    // proses update
        User_Game_History.update({
            totalMatch,
            matchWon,
            points,
            userGameId
        }, {
            where: { id: req.params.id }
        })
        .then(result => {
            const updateUsers = User_Game_History.findOne({
                where: { id: req.params.id }
            })
            .then(user => {
                if (!user) {
                    res.status(404).json({
                        status: 'failed',
                        message: `Data with the id ${req.params.id} not found!`,
                        data: null,
                    })
                }
    
                res.status(201).json({
                    status: 'success',
                    message: `Data with the user game id ${userGameId} has been updated in database!`,
                    data: user,
                });
            });
        });
}

exports.deleteUserGameHistory = (req, res) => {
    User_Game_History.destroy({
        where: { id: req.params.id }
    })
    .then(result => {
        const updateUsers = User_Game_History.findAll()
        .then(user => {
            res.status(200).json({
                status: 'success',
                message: `Data with the id ${req.params.id} has been deleted!`,
                data: user,
            });
        });
    });
}