var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var s = 0
var ds = 0.005
var text = 'Circle'
function fade_in() {
  requestAnimationFrame(fade_in)
  c.fillStyle = 'rgba(249, 216, 88, '+s+')';
  c.font = '70px Didot';
  c.textAlign = 'center';
  c.fillText(text, canvas.width/2, 70);
  if (s > 1) {
    ds = 0
  }
  s = s + ds
}

fade_in();
