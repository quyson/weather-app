async function get(userInput){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userinput}&APPID=124eb25af2ad57b2fe50b9feb0fd0050`, {mode: 'cors'})
    const cityData = await response.json();
    return cityData
}

export {get};
