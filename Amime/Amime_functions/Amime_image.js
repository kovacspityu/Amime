// first import the image in html with hidden = true
function image(id,x, y, w, h) {
  var id = id;
  var x= x;
  var y = y;
  var w = w;
  var h = h;
  var img = document.getElementById(id);
  c.drawImage(img, x- (w / 2), y- (h / 2), w, h);
}
