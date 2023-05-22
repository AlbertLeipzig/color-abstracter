import { rawColors } from './testValues.js';
import colorCodeToHsl from './convertSingleColor.js';
import mapper from './mapHslValuesToKeys.js';
import colorArrayToHslMap from './colorArrayToHslMap.js';

// a function converts every single color to hsl and stores it in an array

const convertColorArrayToHslValues = (colorArray) => {
  let hslArray = [];

  Object.entries(colorArray).forEach(([key, color]) => {
    const _color = colorCodeToHsl(color);
    hslArray[key] = _color;
  });
  return hslArray;
};

const hslArray = convertColorArrayToHslValues(rawColors);


// a function takes every hsl value, orders them, passes them thru sets and returns a map for each

const map = mapper(hslArray);

const hueMap = map.hueMap;
const saturationMap = map.saturationMap;
const lightMap = map.lightMap;

console.log("HUE MAP :", hueMap);
console.log("SAT MAP :", saturationMap);
console.log("LIGHT MAP :", lightMap);

// a function that takes every value from the original array and changes it to the hueMap, saturationMap and lightMap

colorArrayToHslMap(hslArray, hueMap, saturationMap, lightMap);

const values = colorArrayToHslMap(hslArray, hueMap, saturationMap, lightMap);

console.log(values)

// console.log(rawColors);
