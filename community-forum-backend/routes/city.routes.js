// city.routes.js
const express = require('express');
const router = express.Router();
const cityController = require('../controllers/city.controller');

router.post('/', cityController.createCity);
router.get('/', cityController.getAllCities);

module.exports = router;