var m = 16;
var n = 8;
var x = 0;
var y = 0;
var dx = 18;
var dy = 5;

function grid_y() {
  var _gridy_ = requestAnimationFrame(grid_y);

  for (var i = 0; i < canvas.width; i = i + canvas.width / m) {
    if (i > 0) {
      c.beginPath();
      c.moveTo(i, 0);
      c.lineTo(i, y);
      c.lineWidth = 3;
      c.strokeStyle = 'rgba(225, 225, 225, 1)';
      c.stroke();
    }
  }

  if (y > canvas.height) {
    cancelAnimationFrame(_gridy_);
  }

  y += dy;
}


function grid_x() {
  var _gridx_ = requestAnimationFrame(grid_x);
  for (var i = 0; i < canvas.height; i = i + canvas.height / n) {
    if (i > 0) {
      c.beginPath();
      c.moveTo(0, i);
      c.lineTo(x, i);
      c.lineWidth = 3;
      c.strokeStyle = 'rgba(225, 225, 225, 1)';
      c.stroke();
    }
  }

  if (x > canvas.width) {
    cancelAnimationFrame(_gridx_);
  }

  x += dx;
}

function grid_animation() {
  grid_x()
  grid_y()
}
