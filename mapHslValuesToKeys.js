const mapper = (hslColors) => {
  const values = Object.values(hslColors);

  let rawHueArray = [];
  let rawSaturationArray = [];
  let rawLightArray = [];

  values.forEach((values) => {
    const hue = values[0];
    const saturation = values[1];
    const light = values[2];

    rawHueArray.push(hue);
    rawSaturationArray.push(saturation);
    rawLightArray.push(light);
  });

  rawHueArray.sort((a, b) => a - b);
  rawSaturationArray.sort((a, b) => a - b);
  rawLightArray.sort((a, b) => a - b);

  const hueSet = new Set(rawHueArray.sort((a, b) => a - b));
  const saturationSet = new Set(rawSaturationArray.sort((a, b) => a - b));
  const lightSet = new Set(rawLightArray.sort((a, b) => a - b));

  const hueMap = new Map([...hueSet].map((value, index) => [index, value]));
  const saturationMap = new Map(
    [...saturationSet].map((value, index) => [index, value])
  );
  const lightMap = new Map([...lightSet].map((value, index) => [index, value]));

  return {
    hueMap,
    saturationMap,
    lightMap,
  };
};

export default mapper;
