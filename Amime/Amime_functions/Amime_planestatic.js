function plane() {
  c.beginPath();
  c.moveTo(canvas.width / 2, 0);
  c.lineTo(canvas.width / 2, canvas.height);
  c.lineWidth = 5;
  c.strokeStyle = 'rgba(105, 172, 205, 1)';
  c.stroke();
  c.beginPath();
  c.moveTo(0, canvas.height / 2);
  c.lineTo(canvas.width, canvas.height / 2);
  c.lineWidth = 5;
  c.strokeStyle = 'rgba(105, 172, 205, 1)';
  c.stroke();
}
