function dot(x, y) {
  var x = x;
  var y = y;
  c.beginPath();
  c.fillStyle = 'rgba(187, 120, 215, 1)';
  c.arc(x, y, 8, 0, Math.PI * 2);
  c.closePath();
  c.fill();
}
