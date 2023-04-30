const addColorButton = document.querySelector('#addColor');
const colorListContainer = document.querySelector('.color-list-container');
const colorMap = new Map();

const displayColors = () => {
  colorMap.forEach((div) => {
    const colorContainer = document.createElement('div');
    const colorNameInput = document.createElement('input');
    colorNameInput.placeholder = 'color name';
    colorContainer.appendChild(colorNameInput);
    const colorValueInput = document.createElement('input');
    colorValueInput.placeholder = 'color value';
    colorContainer.appendChild(colorValueInput);
    colorListContainer.appendChild(colorContainer);

    /* colorNameInput.addEventListener('change', (event) => {
      const name = event.target.value;
      colorMap.set(name, 'test value');
    }); */
  });
};

const addColor = (_colorName, _colorValue) => {
  const colorName = _colorName ?? '';
  const colorValue = _colorValue ?? '';
  colorMap.set(colorName, colorValue);
  console.log(colorMap);
  displayColors();
};

addColorButton.addEventListener('click', () => addColor());
