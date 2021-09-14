const { User_Game_Biodata } = require('../../models');

const { validationResult } = require("express-validator");

exports.createUserGameBiodata = (req, res) => {
    // menangkap req.body
    const {firstName, lastName, dateOfBirth, noHp, profession, country, bio, userGameId } = req.body;
    const image = req.file.path;

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

    if(!req.file) {
        return res.status(422).json({
            status: 'failed',
            message: 'image must be uploaded!',
            data: null,
            errors: errors.array(),
        });
    }

    User_Game_Biodata.create({
        firstName,
        lastName,
        dateOfBirth,
        noHp,
        profession,
        country,
        image,
        bio,
        userGameId
    })
    .then(user => {
        res.status(201).json({
            status: 'success',
            message: `user Biodata with name ${firstName} ${lastName} has been created`,
            data: user,
        });
    });
}

exports.getAllUserGameBiodata = (req, res) => {
    User_Game_Biodata.findAll()
        .then(user => {
            res.status(200).json({
                status: "success",
                message: 'get all data users game success',
                data: user,
            });
        });
}

exports.getDetailUserGameBiodata = (req, res) => {
    User_Game_Biodata.findOne({where: { id: req.params.id }})
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
}

exports.updateUserGameBiodata = (req, res) => {
    // menangkap req.body
    const {firstName, lastName, dateOfBirth, noHp, profession, country, bio, userGameId } = req.body;
    const image = req.file.path;

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

    if(!req.file) {
        return res.status(422).json({
            status: 'failed',
            message: 'image must be uploaded!',
            data: null,
            errors: errors.array(),
        });
    }

    // proses update
        User_Game_Biodata.update({
            firstName,
            lastName,
            dateOfBirth,
            noHp,
            profession,
            country,
            image,
            bio,
            userGameId
        }, {
            where: { id: req.params.id }
        })
        .then(result => {
            const updateUsers = User_Game_Biodata.findOne({
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
                    message: `Data with the name ${firstName} ${lastName} has been updated in database!`,
                    data: user,
                });
            });
        });
}

exports.deleteUserGameBiodata = (req, res) => {
    User_Game_Biodata.destroy({
        where: { id: req.params.id }
    })
    .then(result => {
        const updateUsers = User_Game_Biodata.findAll()
        .then(user => {
            res.status(200).json({
                status: 'success',
                message: `Data with the id ${req.params.id} has been deleted!`,
                data: user,
            });
        });
    });
}