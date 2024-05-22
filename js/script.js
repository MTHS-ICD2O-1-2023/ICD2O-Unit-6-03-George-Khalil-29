// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: May 2024
// This file contains the JS functions for index.html

/**
 * Get API info.
*/
// code from: https://www.youtube.com/watch?v=670f71LTWpM

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("api-image").innerHTML =
    '<img src="' + 
      jsonData.url + 
      '" alt="API image" class="center" ' +
      '>'
    if (jsonData.artist_url != "none") {
      document.getElementById("image-artist").innerHTML =
      "<p>Artist: " +
      '<a href="' +
      jsonData.artist_url +
      '">' +
      jsonData.artist +
      "</a>"
  } else {
    document.getElementById("image-artist").innerHTML = "<p>Artist: unknown</p>"
  }
  } catch (err) {
    console.log(err)
  }
}

getImage("https://api.catboys.com/img")