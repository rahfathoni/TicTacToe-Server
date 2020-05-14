const express = require('express');
const router = express.Router()
const Controller = require('../controllers/controller');

router.post('/user', Controller.createUser);

module.exports = router
