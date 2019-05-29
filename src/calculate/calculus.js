import * as Math from "mathjs";
Math.import(require("mathjs-simple-integral"));
export function euler(f, h, k, x0, y0) {
  var x = [];
  var y = [];

  x[0] = parseFloat(x0) || 0;
  y[0] = parseFloat(y0) || 0;
  var points = [];

  var step = parseFloat(h);
  var n = 4 / step;

  points.push({ x: x[0], y: y[0] });
  for (var i = 0; i < n; i++) {
    x[i + 1] = x[i] + step;
    y[i + 1] = y[i] + step * Math.eval(f, { y: y[i], x: x[i], k: k });
    points.push({ x: x[i + 1], y: y[i + 1] });
  }

  points.reverse();
  var pointsNeg = [];
  for (i = 0; i < n; i++) {
    x[i + 1] = x[i] - step;
    y[i + 1] = y[i] - step * Math.eval(f, { y: y[i], x: x[i], k: k });
    pointsNeg.push({ x: x[i + 1], y: y[i + 1] });
  }
  points = points.concat(pointsNeg);

  var int = Math.integral(f, "x");
  var funcion = [];
  var integral = [];

    for (i = -10; i <= 10; i += 0.5) {
      funcion.push({ x: i, y: Math.eval(f, { x: i, k: k }) });
      integral.push({ x: i, y: Math.eval(int.toString(), { x: i, k: k }) });
    }
  console.log(points);
  var result = {
    p: points,
    f: funcion,
    i: integral
  };
  return result;
}
