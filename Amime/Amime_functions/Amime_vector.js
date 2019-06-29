//------------------------------------------------------------------------------
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function vector(x, y, x_final, y_final) {

  var x = x;
  var y = y;
  var x_final = x_final;
  var y_final = y_final;
  const slope = (y_final - y)/(x_final - x);
  const perp = -1/slope
  const j = (20/Math.sqrt(1+(Math.pow(slope, 2))));
  const k = (20/Math.sqrt(1+(Math.pow(perp, 2))));

  c.beginPath();
  c.strokeStyle = 'rgba(187, 120, 215, 1)';
  c.lineWidth = 5;
  c.moveTo(x, y);
  c.lineTo(x_final, y_final);
  c.closePath();
  c.stroke();

  c.beginPath();
  c.fillStyle = 'rgba(187, 120, 215, 1)';
  c.moveTo(x_final-j, y_final-(slope*j));
  c.lineTo(x_final+k, y_final+(perp*k));
  c.lineTo(x_final, y_final);
  c.lineTo(x_final-k, y_final-(perp*k));
  c.closePath();
  c.fill();
}
