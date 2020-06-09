'use strict';
const randomLink = 'https://dog.ceo/api/breeds/image/random/';


function getDogImage(numberAdded) {
  fetch(randomLink + numberAdded)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.dog-picture').html(
    responseJson.message.map(message => `<img src="${message}" >`)
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const numberAdded = $('#number-of-dogs').val();
    getDogImage(numberAdded);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});