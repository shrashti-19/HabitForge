const express = require('express');
const router = express.Router()
const {createHabit} = require('../controllers/habitController');

router.post('/create',createHabit);
module.exports = router;