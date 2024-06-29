const express = require('express');
const router = express.Router();
const GeoAPIController = require('../controllers/GeoAPI.controller');

// creating route for  geocoding address
router.post('/geoData', GeoAPIController.getGeoData);

module.exports = router;
