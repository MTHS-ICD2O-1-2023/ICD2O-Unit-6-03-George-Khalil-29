// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict";

// Function to fetch weather data from OpenWeatherMap API
async function getWeather() {
  const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
  const city = 'London'; // Replace 'YOUR_CITY' with the desired city name
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Initial call to fetch weather data when the page loads
getWeather();
