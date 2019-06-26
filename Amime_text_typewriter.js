var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

var text = 'Circle';
var i = 0;
var pause = 100;
function type() {
  i++
  c.clearRect(0, 0, canvas.width, canvas.height);
  letter = text.substr(0, i);
  c.strokeStyle = 'rgba(249, 216, 88)';
  c.font = '70px Didot';
  c.textAlign = 'center';
  c.strokeText(letter ,canvas.width / 2, canvas.height / 2);
  if (i<= text.length) {
    setTimeout(type, pause);
  }
}

type()
