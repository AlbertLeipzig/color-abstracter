const mapper = (hslColors, hueMap, saturationMap, lightMap) => {
  const colors = { ...hslColors };
  function getKeyByValue(object, value) {
    return [...object.entries()].find(([key, val]) => val === value)?.[0];
  }

  for (const [colorKey, colorValue] of Object.entries(colors)) {
    const hueKey = getKeyByValue(hueMap, colorValue[0]);
    const saturationKey = getKeyByValue(saturationMap, colorValue[1]);
    const lightKey = getKeyByValue(lightMap, colorValue[2]);

    if (hueKey) {
      colors[colorKey][0] = hueKey;
    }

    if (saturationKey) {
      colors[colorKey][1] = saturationKey;
    }

    if (lightKey) {
      colors[colorKey][2] = lightKey;
    }
  }

  return colors;
};

export default mapper;
