# Color Abstracter

This tool aims to abstract colors from a color palette.

## Justification

As a developer, we often get color palettes in code like rgb and #hex. I personally find much practical to work with hsl. This tool aims to help with that.

## How it works

Let's say we get a color palette like this:

primary-color : #ADD8E6;  
secondary-color : #FDB0C0;
accent : #ee0000;

We can abstract the colors like this:

```
primary-color : hsl(0, 0, 0);
secondary-color : hsl(1, 1, 1);
accent : hsl(3, 1, 0);
```

This allows us to write scss like this:

```
$hue1 : 12;
$hue2 : 34;
$hue3 : 56;

$light1 : 12;
$light2 : 34;

$saturation1 : 12;
$saturation2 : 34;

```

Which at the end result in

```
primary-color : hsl($hue1, $saturation1, $light1);
secondary-color : hsl($hue2, $saturation2, $light2);
accent : hsl($hue3, $saturation1, $light1);

```

This allows us:

- **to work with colors in a more flexible way** since we are not any longer bounded to fixed values
- **to have a better understanding of the color palette** by seing the common values and their relations
- **to use the same base values access more variations of the colors** by combining the same base values in every possible way, so we don't only have

```

primary-color : hsl($hue1, $saturation1, $light1);

```

but also

```
primary-color-saturated : hsl($hue1, $saturation2, $light1);
primary-color-light : hsl($hue1, $saturation1, $light2);
primary-color-saturated-light : hsl($hue1, $saturation2, $light2);

```

## Not quite there yet

This tool is still in development, and it is only kind-of-ready for use. Kind of. So you can introduce values in testValues.js and run

`node main.js`

in the terminal.

The program will output abstract values on the computer.

## Further versions

- linking js to html so values can be inputed and outputted in the browser
- opacity implementation
- give the user the possibility to give names to the abstracted values
- maybe offer it as a package that can run locally

_When this actually will happen is a good question. Feel free to participate._