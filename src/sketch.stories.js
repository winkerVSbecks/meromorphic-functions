import canvasSketch from 'canvas-sketch';
import Random from 'canvas-sketch-util/random';
import { sketch, settings } from './sketch';

export default {
  title: 'Sketches/Meromorphic Functions',
  argTypes: {
    a0x: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    a0y: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    a1x: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    a1y: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    a2x: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    a2y: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    a3x: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    a3y: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    b0x: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    b0y: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    b1x: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    b1y: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    b2x: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    b2y: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    b3x: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    b3y: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
  },
};

let manager;

export const Sketch = (args) => {
  const canvas = document.createElement('canvas');

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
    },
  }).then((m) => {
    manager = m;
  });

  return canvas;
};

Sketch.args = {
  a0x: Random.range(-1, 1),
  a0y: Random.range(-1, 1),
  a1x: Random.range(-1, 1),
  a1y: Random.range(-1, 1),
  a2x: Random.range(-1, 1),
  a2y: Random.range(-1, 1),
  a3x: Random.range(-1, 1),
  a3y: Random.range(-1, 1),
  b0x: Random.range(-1, 1),
  b0y: Random.range(-1, 1),
  b1x: Random.range(-1, 1),
  b1y: Random.range(-1, 1),
  b2x: Random.range(-1, 1),
  b2y: Random.range(-1, 1),
  b3x: Random.range(-1, 1),
  b3y: Random.range(-1, 1),
};
