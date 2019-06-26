function arrow_static() {

  c.fillStyle = 'rgba(105, 172, 205, 1)';
  c.beginPath();
  c.moveTo(canvas.width-20, canvas.height/2);
  c.lineTo(canvas.width-20,canvas.height/2+20);
  c.lineTo(canvas.width+3, canvas.height/2);
  c.lineTo(canvas.width-20, canvas.height/2-20);
  c.closePath();
  c.fill();

  c.fillStyle = 'rgba(105, 172, 205, 1)';
  c.beginPath();
  c.moveTo(20, canvas.height/2);
  c.lineTo(20,canvas.height/2+20);
  c.lineTo(-3, canvas.height/2);
  c.lineTo(20, canvas.height/2-20);
  c.closePath();
  c.fill();

  c.fillStyle = 'rgba(105, 172, 205, 1)';
  c.beginPath();
  c.moveTo(canvas.width/2, canvas.height-20);
  c.lineTo(canvas.width/2+20,canvas.height-20);
  c.lineTo(canvas.width/2, canvas.height+3);
  c.lineTo(canvas.width/2-20, canvas.height-20);
  c.closePath();
  c.fill();

  c.fillStyle = 'rgba(105, 172, 205, 1)';
  c.beginPath();
  c.moveTo(canvas.width/2, 20);
  c.lineTo(canvas.width/2+20, 20);
  c.lineTo(canvas.width/2, -3);
  c.lineTo(canvas.width/2-20, 20);
  c.closePath();
  c.fill();
}
