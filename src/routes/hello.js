const express = require('express');
const router = express.Router();

const { getHello } = require('../controllers/hello');

router.get('/', getHello);


module.exports = router;