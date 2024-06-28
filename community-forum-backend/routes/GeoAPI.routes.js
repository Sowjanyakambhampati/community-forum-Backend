// GeoAPI routes
const express = require('express');
const router = express.Router();
const GeoAPIController = require('../controllers/GeoAPI.controller');

router.get('/geoData', GeoAPIController.getAllGeoData);

router.get('/geoData/:id', GeoAPIController.getGeoDataById);

router.post('/geoData', GeoAPIController.getGeoData);

router.put('/geoData/:id', GeoAPIController.updateGeoData);

router.delete('/geoData/:id', GeoAPIController.deleteGeoData);

module.exports = router;

