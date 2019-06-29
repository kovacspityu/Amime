var theta = 0
var d_theta = Math.PI / 180

function circle_animation1() {
  _circle1_ = requestAnimationFrame(circle_animation1);
  c.beginPath(); // prevents to object to join
  c.arc(canvas.width/2, canvas.height/2, 100, 0, theta, false);
  c.strokeStyle = 'rgba(157, 189, 127, 1)';
  c.lineWidth = '4';
  c.stroke();
  if (theta > 2 * Math.PI) {
    cancelAnimationFrame(_circle1_);
  }
  theta = theta + 2*d_theta;
}
