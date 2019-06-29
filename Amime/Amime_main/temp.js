var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var img = document.getElementById('fma');
c.drawImage(img, 0, 0, 300, (230/960)*300);
