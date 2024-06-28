const mongoose = require('mongoose');


const GeoAPISchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});


const GeoAPI = mongoose.model('GeoAPI', GeoAPISchema);


module.exports = GeoAPI;