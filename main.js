var off = 0.0;
var step = 0.01;
var width = 640;
var height = 480;
function setup() {
  createCanvas(width, height);
  noiseSeed(random(1024*1024));
}

function draw() {
  clear();
  off += step;
  y=0;
  line(0, y, width*noise(off+2)-(64/off), y);
  line(width*noise(off+2)+(64/off),y, width, y);
}
