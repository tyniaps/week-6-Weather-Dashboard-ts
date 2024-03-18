const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button")

   

const APIkey = "8a80624085152b2b83175925bacc2328";
// const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`;

const cityDetails = () => {
   const cityName = searchBar.value.trim();
   if(!cityName)
   return;
}

searchButton.addEventListener('click', cityDetails);
