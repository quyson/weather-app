import './styles.css';
import {generate} from './generate.js';
import {get} from './getAPI.js';

generate();

const form = document.querySelector('form');
const input = document.getElementById('userInput');
form.addEventListener('submit', e => {
    get(input.value);
    console.log(input.value);
})







