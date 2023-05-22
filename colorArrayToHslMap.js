function mapColorToValues(color, hueMap, saturationMap, lightMap) {
  const [h, s, l] = color;

  let formattedColor = [];

  for (const [key, mapValue] of hueMap.entries()) {
    if (mapValue === h) {
      formattedColor.push(key);
    }
  }

  for (const [key, mapValue] of saturationMap.entries()) {
    if (mapValue === s) {
      formattedColor.push(key);
    }
  }

  for (const [key, mapValue] of lightMap.entries()) {
    if (mapValue === l) {
      formattedColor.push(key);
    }
  }
  
  return formattedColor;
}

const colorArrayToHslMap = (colorArray, hueMap, saturationMap, lightMap) => {
  const formattedColor = {};

  Object.entries(colorArray).forEach(([colorName, colorValues]) => {
    const singleFormattedColor = mapColorToValues(
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
