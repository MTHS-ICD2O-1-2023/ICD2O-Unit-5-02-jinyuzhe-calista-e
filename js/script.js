// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: Apr 2024
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber)

/**
 * This function displays the slider value.
 */

const number = document.getElementById('radio').checked

function myButtonClicked() {
  alwaysOnButtonChecked = document.getElementById('on-check').checked

  if (alwaysOnButtonChecked == true) {
    document.getElementById("positive-number").innerHTML =
    "<p>Value is: </p>" + randomNumber
  } else {
    randomNumber2 = (-1 * randomNumber)
    document.getElementById("negative-number").innerHTML =
    "<p>Value is: </p>" + randomNumber2
  }
}
