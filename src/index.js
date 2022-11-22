import './styles.css';

const body = document.querySelector('body');
const card = document.createElement('div');
card.class = 'card';
const weather = document.createElement('div');
weather.class = 'weather';
const location = document.createElement('div');
location.class = 'location';
const bottomContainer = document.createElement('div');
bottomContainer.class = 'bottomContainer';
const temperature = document.createElement('div');
temperature.class = 'temperature';
const detailList = document.createElement('ul');
const feelsLike = document.createElement('li');
feelsLike.class = 'feelsLike';
feelsLike.textContent = "Feels Like: ";
const wind = document.createElement('li');
wind.class = 'wind';
wind.textContent = "Wind: ";
const humidity = document.createElement('li');
humidity.class = 'humidity';
humidity.textContent = 'Humidity: ';

const container = document.createElement('div');
const form = document.createElement('form');
const input = document.createElement('input');
const submit = document.createElement('button');

input.id = 'userInput';
input.required = true;
submit.setAttribute('type','submit');
submit.textContent = "Submit";

form.append(input,submit);

detailList.append(feelsLike, wind, humidity);
bottomContainer.append(temperature, detailList);
card.append(weather, location, bottomContainer);
container.append(card, form);
body.append(container);







async function Get(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=124eb25af2ad57b2fe50b9feb0fd0050', {mode: 'cors'})
    const cityData = await response.json();
    console.log(cityData.main.temp);
}

Get();