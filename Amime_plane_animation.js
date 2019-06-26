var x_ = 0;
var y_ = 0;
var dx_ = 18;
var dy_ = 5;

function plane_y() {
  var _planey_ = requestAnimationFrame(plane_y);

  c.beginPath();
  c.moveTo(canvas.width / 2, 0);
  c.lineTo(canvas.width / 2, y_);
  c.lineWidth = 5;
  c.strokeStyle = 'rgba(105, 172, 205, 1)';
  c.stroke();

  if (y_ > canvas.height) {
    cancelAnimationFrame(_planey_)
  }

  y_ += dy_;
}

function plane_x() {
  var _planex_ = requestAnimationFrame(plane_x);
  c.beginPath();
  c.moveTo(0, canvas.height / 2);
  c.lineTo(x_, canvas.height / 2);
  c.lineWidth = 5;
  c.strokeStyle = 'rgba(105, 172, 205, 1)';
  c.stroke();

  if (x_ > canvas.width) {
    cancelAnimationFrame(_planex_);
}

  x_ += dx_;
}

function plane_animation() {
  plane_y()
  plane_x()
}
