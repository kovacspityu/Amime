var canvas = document.getElementById('c1');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c1 = canvas.getContext('2d');
c1.beginPath();
c1.strokeStyle = 'red';
c1.lineWidth = 6;
c1.arcTo(100, 100, 100, 300, 100*Math.sin(Math.PI/24));
c1.stroke();
