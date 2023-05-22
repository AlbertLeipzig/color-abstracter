/* IMPORTS */
import colorCodeToHsl from './convertSingleColor.js';
import mapper from './mapHslValuesToKeys.js';
// import convertColorArrayToHslValues from './colorArrayToHslMap.js';

/* DEFINE DOM ELEMENTS */
const addColorButton = document.querySelector('#addColor');
const extractMapButton = document.querySelector('#extractColorMap');
const colorListContainer = document.querySelector('.color-list-container');
const colorMap = new Map();
/* colorMap.set(); */

const displayColors = () => {
  colorListContainer.innerHTML = '';
  colorMap.forEach((colorValue, colorName) => {
    const colorContainer = document.createElement('div');
    const colorNameInput = document.createElement('p');
    colorNameInput.classList.add('color-name');
    colorNameInput.innerText = `color name : ${colorName}`;
    colorContainer.appendChild(colorNameInput);
    const rawValueInput = document.createElement('p');
    rawValueInput.innerText = `raw value : ${colorValue}`;
    rawValueInput.classList.add('color-name');
    colorContainer.appendChild(rawValueInput);
    const processedColorValue = document.createElement('p');
    processedColorValue.classList.add('color-name');
    /*  processedColorValue.innerText = `processed value : ${colorCodeToHsl(
      colorValue
    )}`; */
    colorContainer.appendChild(processedColorValue);
    colorContainer.classList.add('single-color-container');
    colorListContainer.appendChild(colorContainer);
    colorListContainer.classList.add('color-list-container');
  });
};

/* ADD THE INPUT COLOR TO THE COLOR ARRAY */

const addColor = () => {
  const colorNameInput = prompt('Enter color name');
  const processedColorValue = prompt('Enter color value (in RGB / HEX or HSL)');
  colorMap.set(colorNameInput, processedColorValue);
  displayColors();
};

addColorButton.addEventListener('click', addColor);

/* EXTRACT THE VALUES FROM THE COLOR ARRAY */

const extractColorMap = () => {
  const mappedColors = mapper(colorMap);
  console.log('mapped Colors : ', mappedColors);
};

extractMapButton.addEventListener('click', () => {
  extractColorMap();
});
