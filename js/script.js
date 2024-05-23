// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict";

// Function to fetch weather data from OpenWeatherMap API
async function getWeather() {
  const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
  const city = 'YOUR_CITY'; // Replace 'YOUR_CITY' with the desired city name
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    // Extract relevant weather data
    const weatherDescription = data.weather[0].description;
    const weatherIconCode = data.weather[0].icon;
    const temperatureKelvin = data.main.temp;

    // Update HTML elements with weather data
    document.getElementById("weather-description").textContent = weatherDescription;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/10d@2x${weatherIconCode}.png`;
    document.getElementById("temperature").textContent = `Temperature: ${temperatureKelvin} K`;

  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Initial call to fetch weather data when the page loads
getWeather();
