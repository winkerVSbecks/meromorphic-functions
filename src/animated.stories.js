import { useEffect } from '@storybook/client-api';
import canvasSketch from 'canvas-sketch';
import { sketch, settings } from './animated-sketch';
import colors, { rawColors, toGlsl } from './colors';

export default {
  title: 'Generator',
  argTypes: {
    width: {
      control: { type: 'number' },
      table: { category: 'Dimensions' },
    },
    height: {
      control: { type: 'number' },
      table: { category: 'Dimensions' },
    },
    animationType: {
      options: [
        'flippedRandomOnCircle',
        'randomOnCircle',
        'circle',
        'lissajous',
        'noise',
        'cubic',
        'polynomial',
      ],
      control: {
        type: 'select',
      },
      table: { category: 'Animation' },
    },
    colorMode: {
      options: [0, 1, 2, 3, 4],
      control: {
        type: 'select',
        labels: { 0: 'pal', 1: 'blend', 2: 'ntsc', 3: 'soft', 4: 'tangent' },
      },
      table: { category: 'Colors' },
    },
    color1: {
      control: { type: 'color', presetColors: rawColors },
      table: { category: 'Colors' },
    },
    color2: {
      control: { type: 'color', presetColors: rawColors },
      table: { category: 'Colors' },
    },
    color3: {
      control: { type: 'color', presetColors: rawColors },
      table: { category: 'Colors' },
    },
    color4: {
      control: { type: 'color', presetColors: rawColors },
      table: { category: 'Colors' },
    },
  },
};

let manager;

export const Animated = (args) => {
  useEffect(() => {
    const canvas = document.getElementById('sketch');

    if (manager) {
      manager.unload();
    }

    if (args.animationType) {
      canvasSketch(sketch, {
        ...settings,
        dimensions: [args.width, args.height],
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
          colorMode: args.colorMode || 3,
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
Animated.args = {
  width: 1080,
  height: 1080,
  animationType: 'flippedRandomOnCircle',
  colorMode: 3,
  color1: colors[0],
  color2: colors[1],
  color3: colors[2],
  color4: colors[3],
};
