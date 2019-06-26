function grid(x, y) {
  for (var i = 0; i < canvas.width; i = i + canvas.width / x) {
    if (i > 0) {
      c.beginPath();
      c.moveTo(i, 0);
      c.lineTo(i, canvas.height);
      c.lineWidth = 4;
      c.strokeStyle = 'rgba(225, 225, 225, 1)';
      c.stroke();
    }
  }
    for (var i = 0; i < canvas.height; i = i + canvas.height / y) {
      if (i > 0) {
        c.beginPath();
        c.moveTo(0, i);
        c.lineTo(canvas.width, i);
        c.lineWidth = 4;
        c.strokeStyle = 'rgba(225, 225, 225, 1)';
        c.stroke();
      }
    }
  }
