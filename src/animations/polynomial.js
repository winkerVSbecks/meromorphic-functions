const PolynomialRegression = require('ml-regression-polynomial').default;
const Random = require('canvas-sketch-util/random');

const animatePoint = (point, playhead) => {
  const d = Math.sin(playhead * Math.PI) * 2;
  return [point[0] + d, point[1] + d];
};

const randomPoint = () => [Random.range(-1, 1), Random.range(-1, 1)];

const [a0, a1, a2, a3, b0, b1, b2, b3] = getPoints();

export default {
  u_a0: ({ playhead }) => animatePoint(a0, playhead),
  u_a1: ({ playhead }) => animatePoint(a1, playhead),
  u_a2: ({ playhead }) => animatePoint(a2, playhead),
  u_a3: ({ playhead }) => animatePoint(a3, playhead),
  u_b0: ({ playhead }) => animatePoint(b0, playhead),
  u_b1: ({ playhead }) => animatePoint(b1, playhead),
  u_b2: ({ playhead }) => animatePoint(b2, playhead),
  u_b3: ({ playhead }) => animatePoint(b3, playhead),
};

function coefficients() {
  const points = new Array(4).fill(0).map(randomPoint);
  const x = points.map((p) => p[0]);
  const y = points.map((p) => p[1]);

  const regression = new PolynomialRegression(x, y, 3);

  return regression.coefficients;
}

function getPoints() {
  const ax = coefficients();
  const ay = Random.chance() ? coefficients() : ax;

  const a0 = [ax[0], ay[0]];
  const a1 = [ax[1], ay[1]];
  const a2 = [ax[2], ay[2]];
  const a3 = [ax[3], ay[3]];

  const bx = coefficients();
  const by = coefficients();

  const b0 = [bx[0], by[0]];
  const b1 = [bx[1], by[1]];
  const b2 = [bx[2], by[2]];
  const b3 = [bx[3], by[3]];

  return [a0, a1, a2, a3, b0, b1, b2, b3];
}
