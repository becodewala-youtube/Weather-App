const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

const apiKey = 'your_openweathermap_api_key';

searchBtn.addEventListener('click', () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${'API_ID'}&units=metric`)
    .then(response => response.json())
    .then(data => {
      cityName.textContent = data.name;
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      temperature.textContent = `${data.main.temp}°C`;
      description.textContent = data.weather[0].description;
    })
    .catch(() => {
      cityName.textContent = 'City not found';
      weatherIcon.src = '';
      temperature.textContent = '';
      description.textContent = '';
    });
});
