function generate(){
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.className = 'container';
    const card = document.createElement('div');
    card.className = 'card';
    const weather = document.createElement('div');
    weather.className = 'weather';
    weather.textContent = "Cloudy";
    const location = document.createElement('div');
    location.className = 'location';
    location.textContent = "London"
    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'bottomContainer';
    const topContainer = document.createElement('div');
    topContainer.className = 'topContainer';
    const temperature = document.createElement('div');
    temperature.className = 'temperature';
    temperature.textContent = "66 F";
    const detailList = document.createElement('ul');
    const feelsLike = document.createElement('li');
    feelsLike.className = 'feelsLike';
    feelsLike.textContent = '70 F';
    feelsLike.textContent = "Feels Like: ";
    const wind = document.createElement('li');
    wind.className = 'wind';
    wind.textContent = "Wind: ";
    wind.textContent = '28 mph'
    const humidity = document.createElement('li');
    humidity.className = 'humidity';
    humidity.textContent = 'Humidity: ';
    humidity.textContent = '69%';
    const form = document.createElement('form');
    const input = document.createElement('input');
    const submit = document.createElement('button');
    const leftContainer = document.createElement('div');
    leftContainer.className = 'leftContainer';
    input.id = 'userInput';
    input.required = true;
    submit.setAttribute('type','submit');
    submit.textContent = "Submit";
    form.append(input,submit);
    detailList.append(feelsLike, wind, humidity);
    bottomContainer.append(temperature, detailList);
    topContainer.append(weather, location)
    leftContainer.append(topContainer, bottomContainer)
    card.append(leftContainer);
    container.append(card, form);
    body.append(container);
};

export {generate};