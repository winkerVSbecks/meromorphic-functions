import { useEffect } from '@storybook/client-api';
import canvasSketch from 'canvas-sketch';
import Random from 'canvas-sketch-util/random';
import { sketch, settings } from './sketch';
import { sketch as animatedSketch } from './animated-sketch';
import colors, { rawColors, toGlsl } from './colors';

export default {
  title: 'Sketches/Meromorphic Functions',
  argTypes: {
    animationType: {
      options: [
        'flippedRandomOnCircle',
        'randomOnCircle',
        'circle',
        'lissajous',
        'noise',
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
    a0x: {
      control: {
        type: 'range',
        min: -5,
        max: 5,
        step: 0.1,
      },
      table: {
        category: 'Points',
        subcategory: 'a0',
      },
    },
    a0y: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'a0',
      },
    },
    a1x: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'a1',
      },
    },
    a1y: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'a1',
      },
    },
    a2x: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'a2',
      },
    },
    a2y: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'a2',
      },
    },
    a3x: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'a3',
      },
    },
    a3y: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'a3',
      },
    },
    b0x: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'b0',
      },
    },
    b0y: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'b0',
      },
    },
    b1x: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'b1',
      },
    },
    b1y: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'b1',
      },
    },
    b2x: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'b2',
      },
    },
    b2y: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'b2',
      },
    },
    b3x: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'b3',
      },
    },
    b3y: {
      control: { type: 'range', min: -5, max: 5, step: 0.1 },
      table: {
        category: 'Points',
        subcategory: 'b3',
      },
    },
  },
};

let manager;

export const Static = (args) => {
  useEffect(() => {
    const canvas = document.getElementById('sketch');

    if (manager) {
      manager.unload();
    }

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
        colorMode: args.colorMode,
      },
    }).then((m) => {
      manager = m;
    });
  });

  return `
  <div>
    <canvas id="sketch"></canvas>
    <p style="margin-bottom: 0;">Press <kbd><kbd class="key">cmd</kbd> + <kbd class="key">s</kbd></kbd> to export save the image</p>
  </div>`;
};
Static.args = {
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

export const Animated = (args) => {
  useEffect(() => {
    const canvas = document.getElementById('sketch');

    if (manager) {
      manager.unload();
    }

    if (args.animationType) {
      canvasSketch(animatedSketch, {
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
          colorMode: args.colorMode,
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
    <p style="margin-bottom: 0;">Press <kbd><kbd class="key">cmd</kbd> + <kbd class="key">s</kbd></kbd> to export save the image</p>
  </div>`;
};
Animated.args = {
  animationType: 'flippedRandomOnCircle',
  ...Static.args,
};
