const searchButton = document.getElementById("search-button");

function getWeatherFromAPI() {
   const cityInput = document.getElementById("search-bar").value;
   const apiKey = "777c5cbaff1a8d260ade05ddf516e40f";

    if (!cityInput) {
    alert("Please enter a city");
    return;
  }

  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

}
