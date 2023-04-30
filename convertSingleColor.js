// convert single color code to rgb

const hexToRgb = (hex) => {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  const color = rgbToHsl(rgbColor);
  return color;
};

// convert single color code to hsl

const rgbToHsl = (rgb) => {
  const values = rgb
    .substring(4, rgb.length - 1)
    .split(',')
    .map((value) => parseInt(value));
  const r = values[0] / 255;
  const g = values[1] / 255;
  const b = values[2] / 255;

  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply s and l by 100 to get percentages
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
};

const colorCodeToHsl = (value) => {
  const firstLetter = value.slice(0, 1);
  if (firstLetter === 'r') {
    return rgbToHsl(value);
  } else if (firstLetter === '#') {
    return hexToRgb(value);
  } else if (firstLetter === 'h') {
    return value;
  } else {
    return "something's fishy";
  }
};

export default colorCodeToHsl;
