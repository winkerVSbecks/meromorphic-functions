import Random from 'canvas-sketch-util/random';
import Color from 'canvas-sketch-util/color';
const { generateRandomColorRamp } = require('fettepalette/dist/index.cjs');

const clrs = generateRandomColorRamp({
  total: 9,
  centerHue: 289.2, // Random.range(240, 300),
  hueCycle: 0.5,
  curveMethod: 'lamé',
  curveAccent: 0.2,
  offsetTint: 0.251,
  offsetShade: 0.01,
  tintShadeHueShift: 0.0,
  offsetCurveModTint: 0.03,
  offsetCurveModShade: 0.03,
  minSaturationLight: [0, 0],
  maxSaturationLight: [1, 1],
});

const hsl = (c) =>
  Color.parse(`hsl(${c[0]}, ${c[1] * 100}%, ${c[2] * 100}%)`).hex;
export const rawColors = clrs.all.map(hsl);

const glslColors = rawColors.map((c) => Color.parse(c).rgb.map((v) => v / 255));

export const toGlsl = (c) => Color.parse(c).rgb.map((v) => v / 255);

export default [
  Random.pick(rawColors),
  Random.pick(rawColors),
  Random.pick(rawColors),
  Random.pick(rawColors),
];
