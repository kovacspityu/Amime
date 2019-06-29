var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var s = 0;
var ds = 5;
function Text_flyin() {
  requestAnimationFrame(Text_flyin);
  c.fillStyle = 'rgba(249, 216, 88)';
  c.font = '70px Didot';
  c.textAlign = 'center';
  c.scale
  c.fillText('Circle', s, 70);
  if (s > canvas.width / 2) {
    ds = 0
  }
  s = s + ds
}
Text_flyin()
