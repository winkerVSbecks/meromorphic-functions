import createShader from 'canvas-sketch-util/shader';
import { vert, frag } from './shader';
import flippedRandomOnCircle from './animations/flipped-random-on-circle';
import circle from './animations/circle';
import lissajous from './animations/lissajous';
import noise from './animations/noise';
import randomOnCircle from './animations/random-on-circle';

const animations = {
  flippedRandomOnCircle,
  circle,
  lissajous,
  noise,
  randomOnCircle,
};

export const settings = {
  dimensions: [1080, 1080],
  context: 'webgl2',
  animate: true,
  duration: 12,
};

export const sketch = ({ gl, width, height, settings }) => {
  const { color1, color2, color3, color4 } = settings.args;
  const animationType = settings.args.animationType;

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
      u_time: ({ playhead }) => playhead,
      ...animations[animationType],
    },
  });
};
