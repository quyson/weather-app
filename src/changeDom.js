function change(cityData){
    const weather = document.querySelector('.weather');
    weather.textContent = (cityData.weather[0].description);
    const location = document.querySelector('.location');
    location.textContent = (cityData.name);
    const temperature = document.querySelector('.temperature');
    temperature.textContent = (cityData.main.temp);
    const feelsLike = document.querySelector('.feelsLike');
    feelsLike.textContent = `Feels Like: ${cityData.main.feels_like}`;
    const humidity = document.querySelector('.humidity');
    humidity.textContent = `Humidity: ${cityData.main.humidity}`;
    const wind = document.querySelector('.wind');
    wind.textContent = `Wind: ${cityData.wind.speed}`;

}

export {change};