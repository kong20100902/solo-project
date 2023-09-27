const express = require('express');
const soloProjectController = require('../controllers/soloProjectController');

const router = express.Router();

router.post('/createuser', soloProjectController.createUser, (req, res) => res.status(200).json('create user done'));

module.exports = router;
