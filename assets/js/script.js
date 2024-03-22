const searchButton = document.getElementById("search-button");

//function to get weather data from API url.
function getWeatherFromAPI() {
   const cityInput = document.getElementById("search-bar").value;
   const apiKey = "777c5cbaff1a8d260ade05ddf516e40f";
   const queryURL = "https://api.openweathermap.org/data/2.5/forecast?"

//If search button is clicked with no input in search bar, prompt the user and stop running code.
    if (!cityInput) {
    alert("Please enter a city");
    return;
  }

   const weatherApiURL = `${queryURL}q=${cityInput}&appid=${apiKey}`;            
   console.log(weatherApiURL);

//Fetch call to API url.
    fetch(weatherApiURL)
    .then(function (response) {
      if (!response.ok) {
        throw new Error ("Error with Network Response");
      }
      return response.json();  

//If data response is okay, fun the displayCurrentForcast function.
      })
    .then(data => {
      displayCurrentForecast(data);
    })

      .catch(function (error) {
       console.error("Error fetching weather forecast data:", error);
       alert("Unable to fetch weather forecast data. Please try again.");
      }); 
      
      
      function displayCurrentForecast() {

            const searchedCity = document.getElementById("currentCity");
            const currentForecastInfo = document.getElementById("currentWeatherDetails");
            const forecastIcon = document.getElementById("iconDisplay");
          
            currentForecastInfo.innerHTML = '';

//If error code 404 is present, display message in currentForecastInfo div.            
            if (data.cod === '404') {
              currentForecastInfo.innerHTML = `<p>${data.message}</p>`
            } else {
//else, collect the following data from the response object and store into variables.              
                    const cityName = data.name
                    const temperature = Math.round(data.main.temp - 273.15);
                    const windSpeed = data.wind.speed
                    const humidity = data.main.humidity
                    const iconCode = data.weather[0].icon;
                    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

//Variables for holding HMTL elements that should be created to display the previously collected data.
                    const cityNameHTML = 
                    `<h3 id= "cityNameDisplay">${cityName}<h3>`;
     
     
                    const currentForecastHTML =
                    `<p id="tempDisplay">${temperature}℃<p>
                     <p id ="windSpeedDisplay">${windSpeed} mps<p>
                     <p id ="humidityDisplay">${humidity}%<p>`;

                    searchedCity.innerHTML = cityNameHTML;
                    currentForecastInfo.innerHTML = currentForecastHTML;
                    forecastIcon.src = iconURL;
                    forecastIcon.alt = description;

//Run the showImage function in order to display weather icon.                    
                    showImage();  
                  }  
                    function showImage () {
                    const weatherIcon = document.getElementById("iconDisplay");
                    weatherIcon.style.display = 'block'
                    }     
          

      }


}     
       
          
          
          


          
                 
  
            


