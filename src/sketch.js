import createShader from 'canvas-sketch-util/shader';
import { vert, frag } from './shader';

export const settings = {
  context: 'webgl2',
  animate: true,
  duration: 12,
};

export const sketch = ({ gl, width, height, settings }) => {
  const { a0, a1, a2, a3, b0, b1, b2, b3 } = settings.args;
  const { color1, color2, color3, color4 } = settings.args;

  return createShader({
    clearColor: '#fff',
    gl,
    vert,
    frag,
    uniforms: {
      u_resolution: [width, height],
      u_colorMode: settings.args.colorMode,
      u_col_1: color1,
      u_col_2: color2,
      u_col_3: color3,
      u_col_4: color4,

      u_a0: a0,
      u_a1: a1,
      u_a2: a2,
      u_a3: a3,
      u_b0: b0,
      u_b1: b1,
      u_b2: b2,
      u_b3: b3,

      u_time: ({ playhead }) => playhead,
    },
  });
};
