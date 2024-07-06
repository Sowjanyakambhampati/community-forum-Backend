const dotenv = require('dotenv');
const express = require('express');
const axios = require('axios');

dotenv.config();

async function geocodeAddress(lat, log) {
  try {
    // if (!address) {
    //   throw new Error('Address is required');
    // }

    // if (!process.env.API_KEY) {
    //   throw new Error('API_KEY is required');
    // }

    if (process.env.NODE_ENV === 'test') {
      return { lat: 0, lng: 0 }; // Return dummy data for testing
    }

    const apiKey = process.env.API_KEY; // Retrieve the API key from environment variable
    console.log("Address::" + lat + log);

    const url = `https://maps.googleapis.com/maps/api/geocode?lat=${lat}&lng=${log}&key=AIzaSyDlI0rjqyb4QaMqwbkKxunIhmZ4ZdBzFMY`;

    console.log("Address - URL::" + url);
    const response = await axios.get(url);
    console.log("Location Sowji::" + location);
    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      console.log("Location Sowji::" + location);
      return location; // { lat: ..., lng: ... }
    } else {
      throw new Error('Geocoding failed');
    }
  } catch (error) {
    console.error('Error geocoding address:', error);
    throw error;
  }
}

module.exports = geocodeAddress;
