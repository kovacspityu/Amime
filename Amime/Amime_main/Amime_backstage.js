//------------------------------------------------------------------------------
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var x_ = 0;
var y_ = 0;
var dx_ = 18;
var dy_ = 5;

function plane_y() {
  var _planey_ = requestAnimationFrame(plane_y);

  c.beginPath();
  c.moveTo(canvas.width / 2, 0);
  c.lineTo(canvas.width / 2, y_);
  c.lineWidth = 5;
  c.strokeStyle = 'rgba(105, 172, 205, 1)';
  c.stroke();

  if (y_ > canvas.height) {
    cancelAnimationFrame(_planey_)
  }

  y_ += dy_;
}

function plane_x() {
  var _planex_ = requestAnimationFrame(plane_x);
  c.beginPath();
  c.moveTo(0, canvas.height / 2);
  c.lineTo(x_, canvas.height / 2);
  c.lineWidth = 5;
  c.strokeStyle = 'rgba(105, 172, 205, 1)';
  c.stroke();

  if (x_ > canvas.width) {
    cancelAnimationFrame(_planex_);
}

  x_ += dx_;
}

function plane_animation() {
  plane_y()
  plane_x()
}

//------------------------------------------------------------------------------

var m = 16;
var n = 8;
var x = 0;
var y = 0;
var dx = 18;
var dy = 10;

function grid_y() {
  var _gridy_ = requestAnimationFrame(grid_y);

  for (var i = 0; i < canvas.width; i = i + canvas.width / m) {
    if (i > 0) {
      c.beginPath();
      c.moveTo(i, 0);
      c.lineTo(i, y);
      c.lineWidth = 3;
      c.strokeStyle = 'rgba(225, 225, 225, 1)';
      c.stroke();
    }
  }

  if (y > canvas.height) {
    cancelAnimationFrame(_gridy_);
  }

  y += dy;
}


function grid_x() {
  var _gridx_ = requestAnimationFrame(grid_x);
  for (var i = 0; i < canvas.height; i = i + canvas.height / n) {
    if (i > 0) {
      c.beginPath();
      c.moveTo(0, i);
      c.lineTo(x, i);
      c.lineWidth = 3;
      c.strokeStyle = 'rgba(225, 225, 225, 1)';
      c.stroke();
    }
  }

  if (x > canvas.width) {
    cancelAnimationFrame(_gridx_);
  }

  x += dx;
}

function grid_animation() {
  grid_x()
  grid_y()
}

//------------------------------------------------------------------------------

var s = 0;
var ds = 0.01;
function arrow() {

  var _arrow_ = requestAnimationFrame(arrow);

  c.fillStyle = 'rgba(105, 172, 205, '+s+')';
  c.beginPath();
  c.moveTo(canvas.width-20, canvas.height/2);
  c.lineTo(canvas.width-20,canvas.height/2+20);
  c.lineTo(canvas.width+3, canvas.height/2);
  c.lineTo(canvas.width-20, canvas.height/2-20);
  c.closePath();
  c.fill();

  c.fillStyle = 'rgba(105, 172, 205, '+s+')';
  c.beginPath();
  c.moveTo(20, canvas.height/2);
  c.lineTo(20,canvas.height/2+20);
  c.lineTo(-3, canvas.height/2);
  c.lineTo(20, canvas.height/2-20);
  c.closePath();
  c.fill();

  c.fillStyle = 'rgba(105, 172, 205, '+s+')';
  c.beginPath();
  c.moveTo(canvas.width/2, canvas.height-20);
  c.lineTo(canvas.width/2+20,canvas.height-20);
  c.lineTo(canvas.width/2, canvas.height+3);
  c.lineTo(canvas.width/2-20, canvas.height-20);
  c.closePath();
  c.fill();

  c.fillStyle = 'rgba(105, 172, 205, '+s+')';
  c.beginPath();
  c.moveTo(canvas.width/2, 20);
  c.lineTo(canvas.width/2+20, 20);
  c.lineTo(canvas.width/2, -3);
  c.lineTo(canvas.width/2-20, 20);
  c.closePath();
  c.fill();

  if (s >= 1) {
    cancelAnimationFrame(_arrow_);
  }

  s = s + ds;
}

//------------------------------------------------------------------------------

var theta = 0
var d_theta = Math.PI / 180

function circle_animation1() {
  _circle1_ = requestAnimationFrame(circle_animation1);
  c.beginPath(); // prevents to object to join
  c.arc(canvas.width/2, canvas.height/2, 100, 0, theta, false);
  c.strokeStyle = 'rgba(157, 189, 127, 1)';
  c.lineWidth = '4';
  c.stroke();
  if (theta > 2 * Math.PI) {
    cancelAnimationFrame(_circle1_);
  }
  theta = theta + 2*d_theta;
}

//------------------------------------------------------------------------------
function cartesian() {
  grid_animation();
  plane_animation();
  arrow();
}

//------------------------------------------------------------------------------

function dot(x, y) {
  var x = x;
  var y = y;
  c.beginPath();
  c.fillStyle = 'rgba(187, 120, 215, 1)';
  c.arc(x, y, 8, 0, Math.PI * 2);
  c.closePath();
  c.fill();
}

//------------------------------------------------------------------------------

function clear() {
  c.clearRect(0, 0, canvas.width, canvas.height);
}

//------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------

function cartesian_static() {
  plane();
  grid();
  arrow_static();
}

//------------------------------------------------------------------------------

function moving_dot(x, y, x_, y_) {
  _dot_ = requestAnimationFrame(dot);
  var x = x;
  var y = y;
  var x_ = x_;
  var y_ = y_;
  c.beginPath();
  c.fillStyle = 'rgba(187, 120, 215, 1)';
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.arc(x, y, 8, 0, Math.PI * 2);
  if (x_ >= y_) {
    if (x >= x_) {
      cancelAnimationFrame(_dot_);
    }
  } else {
    if (y >= y_) {
      cancelAnimationFrame(_dot_);
    }
  }
  c.closePath();
  c.fill();
  x += 5;
  y += 5;
}

//------------------------------------------------------------------------------

function vector(x, y, x_final, y_final) {
  //may contain some positional errpor so change x,y or x_, y_ to rectify
  var x = x;
  var y = y;
  var x_final = x_final;
  var y_final = y_final;
  const slope = (y_final - y)/(x_final - x);
  const perp = -1/slope
  const j = (20/Math.sqrt(1+(Math.pow(slope, 2))));
  const k = (20/Math.sqrt(1+(Math.pow(perp, 2))));

  c.beginPath();
  c.strokeStyle = 'rgba(187, 120, 215, 1)';
  c.lineWidth = 5;
  c.moveTo(x, y);
  c.lineTo(x_final, y_final);
  c.closePath();
  c.stroke();

  c.beginPath();
  c.fillStyle = 'rgba(187, 120, 215, 1)';
  c.moveTo(x_final-j, y_final-(slope*j));
  c.lineTo(x_final+k, y_final+(perp*k));
  c.lineTo(x_final, y_final);
  c.lineTo(x_final-k, y_final-(perp*k));
  c.closePath();
  c.fill();
}

//------------------------------------------------------------------------------

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
  if (i <= _text.length) {
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
  setTimeout('welcome__()', 2000);
}
//------------------------------------------------------------------------------

// first import the image in html with hidden = true
function image(id,x, y, w, h) {
  var id = id;
  var x= x;
  var y = y;
  var w = w;
  var h = h;
  var img = document.getElementById(id);
  c.beginPath();
  c.rect(x- (w / 2), y- (h / 2), w, h);
  c.fillStyle= 'rgba(0, 0, 0, 0.8)';
  c.closePath();
  c.fill();
  c.drawImage(img, x- (w / 2), y- (h / 2), w, h);
}


//------------------------------------------------------------------------------

function scene(function_, time) {
  var time = time;
  var function_ = function_;
  return setTimeout(function_, time);
}
//-----------No function except backstage after this line-----------------------
//-----------No function except backstage after this line-----------------------
//-----------No function except backstage after this line-----------------------

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//All objects here for e.g. vector
var _R2 = 'cartesian()';
var static_cartesian = 'cartesian_static()';
var circle_1 = 'circle_animation1()';
//------------------------------------------------------------------------------
//Timing of all the scenes
scene_0 = 0;
scene_ = 4000;
scene_1 = 4000;
//------------------------------------------------------------------------------
function backstage() {
  welcome();
  scene('clear()', scene_);
  scene(_R2, scene_1);
  scene(circle_1, scene_1);
  scene('image("c_eqn", 300, 300, 300, 244/1036*300)', scene_1+4000);
}

backstage();
