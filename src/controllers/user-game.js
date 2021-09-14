const { User_Game, User_Game_Biodata, User_Game_History } = require('../../models');

const { validationResult } = require("express-validator");
const bcrypt = require('bcrypt');

exports.createUserGame = (req, res) => {
    // menangkap req.body
    const {username, password, email } = req.body;

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

    bcrypt.hash(password, 10, function(err, hash) {
        // Store hash in your password DB.
        User_Game.create({
            username,
            password: hash,
            email,
        })
        .then(user => {
            res.status(201).json({
                status: 'success',
                message: `user with username ${username} has been created`,
                data: user,
            });
        });
    });
}

exports.getAllUserGame = (req, res) => {
        User_Game.findAll({
            include: [
                {
                    model: User_Game_Biodata,
                    as: 'userGameBiodata',
                },
                {
                    model: User_Game_History,
                    as: 'userGameHistory',
                }
            ]})
        .then(user => {
            res.status(200).json({
                status: "success",
                message: 'get all data users game success',
                data: user,
            });
        });
    }

exports.getUserGame = (req, res) => {
    User_Game.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: User_Game_Biodata,
                    as: 'userGameBiodata',
                },
                {
                    model: User_Game_History,
                    as: 'userGameHistory',
                }
            ]
        })
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

exports.updateUserGame = (req, res) => {
    // menangkap req.body
    const { username, password, email } = req.body;

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
    bcrypt.hash(password, 10, function(err, hash) {
        User_Game.update({
            username,
            password: hash,
            email,
        }, {
            where: { id: req.params.id }
        })
        .then(result => {
            const updateUsers = User_Game.findOne({
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
                    message: `Data with the username ${username} has been updated in database!`,
                    data: user,
                });
            });
        });
    });
}

exports.deleteUserGame = (req, res) => {
    User_Game.destroy({
        where: { id: req.params.id }
    })
    .then(result => {
        const updateUsers = User_Game.findAll()
        .then(user => {
            res.status(200).json({
                status: 'success',
                message: `Data with the id ${req.params.id} has been deleted!`,
                data: user,
            });
        });
    });
}