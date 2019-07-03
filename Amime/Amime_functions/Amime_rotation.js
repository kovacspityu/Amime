function rotation() {
  var dθ = Math.PI/180;
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.translate(canvas.width/2, canvas.height/2);
  c.rotate(dθ);
  c.translate(-canvas.width/2, -canvas.height/2);
  grid(m, n);
  plane();
}
