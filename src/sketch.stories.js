import { useEffect } from '@storybook/client-api';
import canvasSketch from 'canvas-sketch';
import Random from 'canvas-sketch-util/random';
import { sketch, settings } from './sketch';
import colors, { rawColors, toGlsl } from './colors';

export default {
  title: 'Sketches/Meromorphic Functions',
  argTypes: {
    color1: { control: { type: 'color', presetColors: rawColors } },
    color2: { control: { type: 'color', presetColors: rawColors } },
    color3: { control: { type: 'color', presetColors: rawColors } },
    color4: { control: { type: 'color', presetColors: rawColors } },
    a0x: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    a0y: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    a1x: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    a1y: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    a2x: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    a2y: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    a3x: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    a3y: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    b0x: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    b0y: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    b1x: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    b1y: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    b2x: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    b2y: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    b3x: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
    b3y: { control: { type: 'range', min: -5, max: 5, step: 0.1 } },
  },
};

let manager;

export const Sketch = (args) => {
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
      },
    }).then((m) => {
      manager = m;
    });
  });

  return `
  <div>
    <canvas id="sketch"></canvas>
    <p style="margin-bottom: 0;">Press <kbd><kbd class="key">cmd</kbd>+<kbd class="key">s</kbd></kbd> to export save the image</p>
  </div>`;
};

Sketch.args = {
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
