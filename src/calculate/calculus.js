import * as Math from "mathjs";
Math.import(require("mathjs-simple-integral"));
export function fn(f, k) {
  var funcion = [];
  for (var i = -50; i <= 50; i += 0.1) {
    funcion.push({ x: i, y: Math.eval(f, { x: i, k: k }) });
  }
  return funcion;
}
export function integral(f, k) {
  var int = Math.integral(f, "x");
  var integral = [];

  for (var i = -50; i <= 50; i += 0.1) {
    integral.push({ x: i, y: Math.eval(int.toString(), { x: i, k: k }) });
  }
  return integral;
}
export function euler(f, h, k, x0, y0) {
  var x = [];
  var y = [];

  x[0] = parseFloat(x0) || 0;
  y[0] = parseFloat(y0) || 0;
  var points = [];

  var step = parseFloat(h);
  var n = 4 / step;
  var aux;
  points.push({ x: x[0], y: y[0] });
  for (var i = 0; i < n; i++) {
    aux = Math.eval(f, { y: y[i], x: x[i], k: k });
    x[i + 1] = x[i] + step;
    y[i + 1] = y[i] + step * aux;
    points.push({ x: x[i + 1], y: y[i + 1] });
  }

  points.reverse();
  var pointsNeg = [];
  for (i = 0; i < n; i++) {
    aux = Math.eval(f, { y: y[i], x: x[i], k: k });
    x[i + 1] = x[i] - step;
    y[i + 1] = y[i] - step * aux;
    pointsNeg.push({ x: x[i + 1], y: y[i + 1] });
  }
  points = points.concat(pointsNeg);

  return points;
}

export function euler_improved(f, h, k, x0, y0) {
  var x, y, m1, m2;
  var step = parseFloat(h);
  var n = 4 / step;

  //Initial conditions

  x = parseFloat(x0) || 0;
  y = parseFloat(y0) || 0;

  var points = [];
  for (var i = 0; i <= n; i++) {
    points.push({ x: x, y: y });
    m1 = Math.eval(f, { x: x, y: y, k: k });
    m2 = Math.eval(f, { x: x + step, y: y + step * m1, k: k });
    x += step;
    y += h * 0.5 * (m1 + m2);
  }

  x = parseFloat(x0) || 0;
  y = parseFloat(y0) || 0;
  var pointsNeg = [];
  for (i = 0; i <= n; i++) {
    m1 = Math.eval(f, { x: x, y: y, k: k });
    m2 = Math.eval(f, { x: x - h, y: y - h * m1, k: k });
    x -= step;
    y -= h * 0.5 * (m1 + m2);
    pointsNeg.push({ x: x, y: y });
  }

  points.reverse();
  points = points.concat(pointsNeg);

  return points;
}

export function runge_kutta(f, h, k, x0, y0) {
  var x, y;
  x = parseFloat(x0) || 0;
  y = parseFloat(y0) || 0;
  var k1, k2, k3, k4;
  var step = parseFloat(h);
  var n = 4 / step;
  var points = [];

  for (var i = 0; i <= n; i++) {
    points.push({ x: x, y: y });
    k1 = step * Math.eval(f, { x: x, y: y, k: k });
    k2 = step * Math.eval(f, { x: x + step / 2, y: y + k1 / 2, k: k });
    k3 = step * Math.eval(f, { x: x + step / 2, y: y + k2 / 2, k: k });
    k4 = step * Math.eval(f, { x: x + step / 2, y: y + k3, k:k });

    y = y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
    x = x + step;
  }

  x = parseFloat(x0) || 0;
  y = parseFloat(y0) || 0;
  var pointsNeg = [];
  for (i = 0; i <= n; i++) {
    pointsNeg.push({ x: x, y: y });
    k1 = step * Math.eval(f, { x: x, y: y, k: k });
    k2 = step * Math.eval(f, { x: x - step / 2, y: y - k1 / 2, k: k });
    k3 = step * Math.eval(f, { x: x - step / 2, y: y - k2 / 2, k: k });
    k4 = step * Math.eval(f, { x: x - step / 2, y: y - k3, k: k });

    y = y - (k1 + 2 * k2 + 2 * k3 + k4) / 6;
    x = x - step;
  }
  points.reverse();
  points = points.concat(pointsNeg);
  return points;
}
