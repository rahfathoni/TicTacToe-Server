const express = require('express');
const router = express.Router()
const Controller = require('../controllers/controller');

router.post('/users', Controller.createUser);

module.exports = router
