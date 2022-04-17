import { useEffect } from '@storybook/client-api';
import canvasSketch from 'canvas-sketch';
import Random from 'canvas-sketch-util/random';
import { sketch, settings } from './animated-sketch';
import colors, { rawColors, toGlsl } from './colors';

export default {
  title: 'MotionTypes',
  argTypes: {
    colorMode: {
      options: [0, 1, 2, 3, 4],
      control: {
        type: 'select',
        labels: { 0: 'pal', 1: 'blend', 2: 'ntsc', 3: 'soft', 4: 'tangent' },
      },
      // table: { category: 'Colors' },
    },
    color1: {
      control: { type: 'color', presetColors: rawColors },
      // table: { category: 'Colors' },
    },
    color2: {
      control: { type: 'color', presetColors: rawColors },
      // table: { category: 'Colors' },
    },
    color3: {
      control: { type: 'color', presetColors: rawColors },
      // table: { category: 'Colors' },
    },
    color4: {
      control: { type: 'color', presetColors: rawColors },
      // table: { category: 'Colors' },
    },
    animationType: { control: false, table: { disable: true } },
    a0x: { control: false, table: { disable: true } },
    a0y: { control: false, table: { disable: true } },
    a1x: { control: false, table: { disable: true } },
    a1y: { control: false, table: { disable: true } },
    a2x: { control: false, table: { disable: true } },
    a2y: { control: false, table: { disable: true } },
    a3x: { control: false, table: { disable: true } },
    a3y: { control: false, table: { disable: true } },
    b0x: { control: false, table: { disable: true } },
    b0y: { control: false, table: { disable: true } },
    b1x: { control: false, table: { disable: true } },
    b1y: { control: false, table: { disable: true } },
    b2x: { control: false, table: { disable: true } },
    b2y: { control: false, table: { disable: true } },
    b3x: { control: false, table: { disable: true } },
    b3y: { control: false, table: { disable: true } },
  },
};

let manager;

const AnimatedTemplate = (args) => {
  useEffect(() => {
    const canvas = document.getElementById('sketch');

    if (manager) {
      manager.unload();
    }

    if (args.animationType) {
      canvasSketch(sketch, {
        ...settings,
        canvas,
        args: {
          a0: [args.a0x, args.a0y],
          a1: [args.a1x, args.a1y],
          a2: [args.a2x, args.a2y],
          a3: [args.a3x, args.a3y],
          b0: [args.b0x, args.b0y],
          b1: [args.b1x, args.b1y],
          b2: [args.b2x, args.b2y],
          b3: [args.b3x, args.b3y],
          color1: toGlsl(args.color1),
          color2: toGlsl(args.color2),
          color3: toGlsl(args.color3),
          color4: toGlsl(args.color4),
          colorMode: args.colorMode || 0,
          animationType: args.animationType,
        },
      }).then((m) => {
        manager = m;
      });
    }
  });

  return `
  <div>
    <canvas id="sketch"></canvas>
    <p style="margin-bottom: 0;">
      <kbd><kbd class="key">cmd</kbd> + <kbd class="key">s</kbd></kbd> to export the image
    </p>
    <p style="margin-bottom: 0;">
      <kbd><kbd class="key">cmd</kbd> + <kbd class="key">shift</kbd> + <kbd class="key">s</kbd></kbd> to export image sequence of the animation
    </p>
  </div>`;
};

const AnimatedArgs = {
  animationType: 'flippedRandomOnCircle',
  colorMode: 0,
  color1: colors[0],
  color2: colors[1],
  color3: colors[2],
  color4: colors[3],
  a0x: Random.range(-5, 5),
  a0y: Random.range(-5, 5),
  a1x: Random.range(-5, 5),
  a1y: Random.range(-5, 5),
  a2x: Random.range(-5, 5),
  a2y: Random.range(-5, 5),
  a3x: Random.range(-5, 5),
  a3y: Random.range(-5, 5),
  b0x: Random.range(-5, 5),
  b0y: Random.range(-5, 5),
  b1x: Random.range(-5, 5),
  b1y: Random.range(-5, 5),
  b2x: Random.range(-5, 5),
  b2y: Random.range(-5, 5),
  b3x: Random.range(-5, 5),
  b3y: Random.range(-5, 5),
};

export const FlippedRandomOnCircle = AnimatedTemplate.bind();
FlippedRandomOnCircle.args = {
  ...AnimatedArgs,
  animationType: 'flippedRandomOnCircle',
};

export const Circle = AnimatedTemplate.bind();
Circle.args = {
  ...AnimatedArgs,
  animationType: 'circle',
};

export const RandomOnCircle = AnimatedTemplate.bind();
RandomOnCircle.args = {
  ...AnimatedArgs,
  animationType: 'randomOnCircle',
};

export const Lissajous = AnimatedTemplate.bind();
Lissajous.args = {
  ...AnimatedArgs,
  animationType: 'lissajous',
};

export const Noise = AnimatedTemplate.bind();
Noise.args = {
  ...AnimatedArgs,
  animationType: 'noise',
};

export const Cubic = AnimatedTemplate.bind();
Cubic.args = {
  ...AnimatedArgs,
  animationType: 'cubic',
};

export const Polynomial = AnimatedTemplate.bind();
Polynomial.args = {
  ...AnimatedArgs,
  colorMode: 3,
  animationType: 'polynomial',
};
