//GeoAPI controller
const GeoAPI = require('../models/GeoAPI.model');
const axios = require('axios');
const { response } = require('express');



const getGeoData = async (req, res) => {
    try {
        const response = await axios.get(`https://geocode.xyz/${req.params.address}?json=1`);
        const data = response.data;
        const geoData = new GeoAPI({
            latitude: data.latt,
            longitude: data.longt,
            address: data.standard.city
        });
        await geoData.save();
        res.json(geoData);
    } catch (err) {
        res.status(400).send(err);
    }
}

const getGeoDataById = async (req, res) => {
    try {
        const geoData = await GeoAPI.findById(req.params.id);
        res.json(geoData);
    } catch (err) {
        res.status(400).send(err);
    }
}

const getAllGeoData = async (req, res) => {
    try {
        const geoData = await GeoAPI.find();
        res.json(geoData);
    } catch (err) {
        res.status(400).send(err);
    }
}

const updateGeoData = async (req, res) => { 
    try {
        const response = await axios.get(`https://geocode.xyz/${req.body.address}?json=1`);
        const data = response.data;
        const geoData = {
            latitude: data.latt,
            longitude: data.longt,
            address: data.standard.city
        };
        await GeoAPI.findByIdAndUpdate(req.params.id, geoData);
        res.json(geoData);
    } catch (err) {
        res.status(400).send(err);
    }
}

const deleteGeoData = async (req, res) => {
    try {
        await GeoAPI.findByIdAndDelete(req.params.id);
        res.json('Geo data deleted');
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = { getGeoData, getGeoDataById, getAllGeoData, updateGeoData, deleteGeoData };

