const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton")

let cityName = [];

const APIkey = "8a80624085152b2b83175925bacc2328";
const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`;