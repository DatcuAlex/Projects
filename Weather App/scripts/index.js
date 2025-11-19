document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("cityInput");
    const searchButton = document.getElementById("searchButton");
    const weatherCard = document.getElementById("weatherCard");
    const cityName = document.getElementById("cityName");
    const favoriteButton = document.getElementById("favoriteButton");
    const favoritesSection = document.getElementById("favoritesSection");
    const favoritesList = document.getElementById("favoritesList");
    const weatherDescription = document.getElementById("weatherDescription");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("windSpeed");
    const forecastContainer = document.getElementById("forecastContainer");
  
    const weatherApiKey = "1f5fe576ab5c7d01b776564067d519a1";
   
    const pexelsApiKey = "lYCzp90AfHBDBmoEMZAfvG0tHiJlfX0XByuOx6d4jnvV61d1KQcA7noI";
  
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    function updateFavoritesList() {
      favoritesList.innerHTML = "";
      if (favorites.length === 0) {
        favoritesSection.classList.add("hidden");
        return;
      }
      favoritesSection.classList.remove("hidden");
  
      favorites.forEach((favorite) => {
        const li = document.createElement("li");
        li.textContent = favorite;
        li.addEventListener("click", () => {
          cityInput.value = favorite;
          updateWeather(favorite);
        });
        favoritesList.appendChild(li);
      });
    }
  
    favoriteButton.addEventListener("click", () => {
      const city = cityName.textContent;
      if (!city || favorites.includes(city)) {
        alert(`${city} is already in favorites!`);
        return;
      }
      favorites.push(city);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      updateFavoritesList();
    });
  
    async function searchCity() {
      const city = cityInput.value.trim();
      if (!city) {
        alert("Please enter a city name.");
        return;
      }
      updateWeather(city);
    }
  
    async function updateWeather(city) {
      try {
        weatherCard.classList.add("hidden");
        forecastContainer.innerHTML = ""; 
  
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`
        );
        const weatherData = await weatherResponse.json();
  
        cityName.textContent = weatherData.name;
        weatherDescription.textContent = weatherData.weather[0].description;
        temperature.textContent = weatherData.main.temp;
        humidity.textContent = weatherData.main.humidity;
        windSpeed.textContent = weatherData.wind.speed;
  
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=metric`
        );
        const forecastData = await forecastResponse.json();
  
        forecastData.list.forEach((entry, index) => {
          if (index % 8 === 0) {
            const forecastItem = document.createElement("div");
            forecastItem.classList.add("forecast-item");
            forecastItem.innerHTML = `
              <p><strong>${new Date(entry.dt_txt).toLocaleDateString()}</strong></p>
              <p>${entry.weather[0].description}</p>
              <p>${entry.main.temp}°C</p>
            `;
            forecastContainer.appendChild(forecastItem);
          }
        });
  
        updateBackgroundImage(city, weatherData.weather[0].description);
        weatherCard.classList.remove("hidden");
      } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Could not fetch weather data. Please try again.");
      }
    }
  
    async function updateBackgroundImage(city, weatherDescription) {
      const query = `${city} ${weatherDescription}`;
      const url = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;
  
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: pexelsApiKey,
          },
        });
        const data = await response.json();
  
        if (data.photos && data.photos.length > 0) {
          const imageUrl = data.photos[0].src.original;
          document.body.style.backgroundImage = `url('${imageUrl}')`;
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";
        } else {
          console.log("No images found. Setting default background.");
          document.body.style.backgroundImage = "url('assets/default_background.jpg')";
        }
      } catch (error) {
        console.error("Error fetching image from Pexels:", error);
        document.body.style.backgroundImage = "url('assets/default_background.jpg')";
      }
    }
  
    cityInput.addEventListener("focus", () => {
      if (cityInput.value.trim() === "" && favorites.length > 0) {
        updateFavoritesList();
      }
    });
  
    searchButton.addEventListener("click", searchCity);
    updateFavoritesList();
  });
  