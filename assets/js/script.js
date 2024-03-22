const searchButton = document.getElementById("search-button");

function getWeatherFromAPI() {
   const cityInput = document.getElementById("search-bar").value;
   const apiKey = "777c5cbaff1a8d260ade05ddf516e40f";
   const queryURL = "https://api.openweathermap.org/data/2.5/forecast?"

    if (!cityInput) {
    alert("Please enter a city");
    return;
  }

   const weatherApiURL = `${queryURL}q=${cityInput}&appid=${apiKey}`;            
   console.log(weatherApiURL);

    fetch(weatherApiURL)
    .then(function (response) {
      if (!response.ok) {
        throw new Error ("Error with Network Response");
      }
      return response.json();  
      
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

            if (data.cod === '404') {
              currentForecastInfo.innerHTML = `<p>${data.message}</p>`
            } else {
                    const cityName = data.name
                    const temperature = Math.round(data.main.temp - 273.15);
                    const windSpeed = data.wind.speed
                    const humidity = data.main.humidity
                    const iconCode = data.weather[0].icon;
                    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;


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
           
                    showImage();  
                  }  
                    
                  

                    function showImage () {
                    const weatherIcon = document.getElementById("iconDisplay");
                    weatherIcon.style.display = 'block'
                    }     
          

      }


}     
       
          
          
          


          
                 
  
            


