import { celsiusKeFahrenheit } from './logika.js';

const input = document.querySelector('#celsius');
const button = document.querySelector('#convertButton');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
    const celsius = Number(input.value);

    if (input.value.trim() === '' || Number.isNaN(celsius)) {
        result.textContent = 'Masukkan angka Celsius yang valid.';
        return;
    }

    const fahrenheit = celsiusKeFahrenheit(celsius);
    result.textContent = `${celsius} °C = ${fahrenheit} °F`;
});