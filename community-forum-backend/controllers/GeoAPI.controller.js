// controllers/GeoAPI.controller.js
const geocodeAddress = require('../utils/geocode');

class GeoAPIController {
  async getGeoData(req, res) {
    const { address } = req.body;
    
    try {
      const location = await geocodeAddress(address);
      res.status(200).json(location);
    } catch (error) {
      res.status(500).json({ error: 'Geocoding failed', message: error.message });
    }
  }
 

}



module.exports = new GeoAPIController();
