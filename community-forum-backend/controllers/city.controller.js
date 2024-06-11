// city.controller.js
const City = require('../models/City.model');

class CityController {
  // Create a new city
  async createCity(req, res) {
    try {
      const city = new City(req.body);
      await city.save();
      res.status(201).send(city);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // Get all cities
  async getAllCities(req, res) {
    try {
      const cities = await City.find({});
      res.send(cities);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new CityController();