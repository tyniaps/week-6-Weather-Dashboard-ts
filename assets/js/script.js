const searchButton = document.getElementById("search-button");

function getWeatherFromAPI() {
   const cityInput = document.getElementById("search-bar").value;
   const apiKey = "777c5cbaff1a8d260ade05ddf516e40f";

    if (!cityInput) {
    alert("Please enter a city");
    return;
  }

  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

    fetch(queryURL)
    .then(response => response.json())
    .then(data => {
     displayCurrentForecast(data);
    })
    .catch(error => {
    console.error("Error fetching weather forecast data:", error);
    alert("Error fetching weather forecast data, please try again");
    });

    function displayCurrentForecast(data) {
        const searchedCity = document.getElementById("currentCity");
        const currentForecastInfo = document.getElementById("currentWeatherDetails");
        const forecastIcon = document.getElementById("iconDisplay");
       
        currentForecastInfo.innerHTML = '';

        if(data.error) {
            alert("There seems to be a problem, please try again");
        } else {
       
            const cityName = data.name
            const temperature = Math.round(data.main.temp - 273.15);
            const windSpeed = data.wind.speed
            const humidity = data.main.humidity
            const iconCode = data.weather[0].icon;
            const iconURL = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

}

            const cityNameHTML = 
           `<h3 id= "cityNameDisplay">${cityName}<h3>`
     
     
            const currentForecastHTML =
           `<p id="tempDisplay">${temperature}℃<p>
            <p id ="windSpeedDisplay">${windSpeed} mps<p>
            <p id ="humidityDisplay">${humidity}%<p>`;

            searchedCity.innerHTML = cityNameHTML;
            currentForecastInfo.innerHTML = currentForecastHTML;
            forecastIcon.src = iconURL;
            forecastIcon.alt = description;


