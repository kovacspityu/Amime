var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function image(image_path, id_) {
  var id_ = id_;
  var image_path = image_path;
  var img_tag = document.createElement('img');
  img_tag.setAttribute('src', image_path);
  img_tag.setAttribute('hidden', true);
  img_tag.setAttribute('id', id_);
  document.body.appendChild(img_tag);
}
image('./fma.png', 'fma')
var img = document.getElementById('fma');
c.drawImage(img, 0, 0, 300, (230/960)*300);
