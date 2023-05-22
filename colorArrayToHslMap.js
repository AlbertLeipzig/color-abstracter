const singleColorToHsl = (entry, hueMap, saturationMap, lightMap) => {
  const formattedColor = new Map();

  /* console.log('key: ', key);
  console.log('value: ', value); */
  const color = entry
  return color;
};

const colorArrayToHslMap = (colorArray, hueMap, saturationMap, lightMap) => {
  const formattedColor = {};

  Object.entries(colorArray).forEach(([colorName, colorValues]) => {
    const singleFormattedColor = singleColorToHsl(
      colorValues,
      hueMap,
      saturationMap,
      lightMap
    );
    formattedColor[colorName] = singleFormattedColor;
  });

  return formattedColor;
};

export default colorArrayToHslMap;
