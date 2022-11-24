import './styles.css';
import {generate} from './generate.js';
import {get} from './getAPI.js';
import {change} from './changeDom.js';

generate();

const form = document.querySelector('form');
const input = document.getElementById('userInput');
form.addEventListener('submit', async e => {
    e.preventDefault();
    let cityData1 = await get(input.value);
    change(cityData1);
    
})







