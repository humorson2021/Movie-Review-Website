import React from 'react';

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
   
  fetch('https://imdb-api.com/en/API/Title/k_1234567/tt1832382', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));