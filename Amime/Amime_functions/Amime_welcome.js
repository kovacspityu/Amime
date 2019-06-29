var _text = 'AMIME';
var i = 0;
var pause = 300;
function welcome_() {
  i++
  c.clearRect(0, 0, canvas.width, canvas.height);
  letter = _text.substr(0, i);
  c.strokeStyle = 'white';
  c.font = '200px Times';
  c.textAlign = 'center';
  c.strokeText(letter ,canvas.width / 2, canvas.height / 2+50);
  if (i<= _text.length) {
    setTimeout(welcome_, pause);
  }
}

var k = 0;
var dk = 0.005;
var text = 'AMIME';
function welcome__() {
  _welcome_ = requestAnimationFrame(welcome__);
  c.fillStyle = 'rgba(225, 225, 225, '+s+')';
  c.font = '200px Times';
  c.textAlign = 'center';
  c.fillText(text ,canvas.width / 2, canvas.height / 2+50);
  if (s > 1) {
    cancelAnimationFrame(_welcome_);
  }
  s = s + ds
}
function welcome() {
  welcome_();
  setTimeout(welcome__, 2000);
}
