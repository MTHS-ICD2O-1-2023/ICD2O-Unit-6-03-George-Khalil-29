// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"
  
async function getTemperature() {
  try {
    const resultJSON = await fetch("https://cat-fact.herokuapp.com/facts")
    const jsonData = await resultJSON.json()
    //console.log(jsonData)
    const kelvinToCelsius = (kelvin) => kelvin - 273.15;
    document.getElementById('result').innerHTML = kelvinToCelsius
    const firstDataSet = jsonData[0]
    const textDataSet = firstDataSet.text
    console.log(textDataSet)
  } catch (error) {
    console.error(error)
  }
}