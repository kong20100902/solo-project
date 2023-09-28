const express = require('express');
const soloProjectController = require('../controllers/soloProjectController');

const router = express.Router();

router.post('/createuser', soloProjectController.createUser, (req, res) => res.status(200).json('create user done'));

router.get('/getuser', soloProjectController.getUser, soloProjectController.startSession, soloProjectController.setUseridCookie, (req, res) => res.status(200).json(res.locals.user));

router.get('/getSession', soloProjectController.hasSession, (req, res) => res.status(200).json(res.locals.user));

module.exports = router;