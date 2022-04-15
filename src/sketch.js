import { lerpArray } from 'canvas-sketch-util/math';
import Random from 'canvas-sketch-util/random';
import createShader from 'canvas-sketch-util/shader';
import colors from './colors';
import { vert, frag } from './shader';

export const settings = {
  dimensions: [1080, 1080],
  context: 'webgl2',
  animate: true,
  duration: 12,
};

export const sketch = ({ gl, width, height, settings }) => {
  const { args } = settings;

  const animatePoint = (pt, playhead) =>
    lerpArray(pt[0], pt[1], Math.sin(playhead * Math.PI));

  // const [a0, a1, a2, a3, b0, b1, b2, b3] = flippedRandomOnCircle(); // randomOnCircle();
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

      u_a0: ({ playhead }) => a0, // animatePoint(a0, playhead),
      u_a1: ({ playhead }) => a1, // animatePoint(a1, playhead),
      u_a2: ({ playhead }) => a2, // animatePoint(a2, playhead),
      u_a3: ({ playhead }) => a3, // animatePoint(a3, playhead),
      u_b0: ({ playhead }) => b0, // animatePoint(b0, playhead),
      u_b1: ({ playhead }) => b1, // animatePoint(b1, playhead),
      u_b2: ({ playhead }) => b2, // animatePoint(b2, playhead),
      u_b3: ({ playhead }) => b3, // animatePoint(b3, playhead),

      u_time: ({ playhead }) => playhead,
    },
  });
};

function flippedRandomOnCircle() {
  const randomPoint = () => Random.onCircle(1);

  const a0 = [randomPoint(), randomPoint()];
  const a1 = [randomPoint(), randomPoint()];
  const a2 = [randomPoint(), randomPoint()];
  const a3 = [randomPoint(), randomPoint()];

  const b0 = [a0[1], a0[0]];
  const b1 = [a1[1], a1[0]];
  const b2 = [a2[1], a2[0]];
  const b3 = [a3[1], a3[0]];

  return [a0, a1, a2, a3, b0, b1, b2, b3];
}
