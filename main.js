var Width = 640;
var Height = 480;
var zoom = 1/256;
var factor=1024;
var Size = 5; // radius of cursor
var yg = 1/32;
var ylimspeed = 8;
var xspeed = 1/2048;
var yspeed, off;
function restart() {
  yspeed = 1;
  off = 2/(Width*xspeed*zoom)-Height;
}

function setup() {
  createCanvas(Width, Height);
  noiseSeed(random(1024*1024));
  restart();
}

function draw() {
  clear();
  stroke('red');
  ellipse(mouseX,mouseY,Size,Size);
  stroke('black');
  off += yspeed;
  yspeed += yspeed>ylimspeed?0:yg;
  for(let y=0;y<Height;++y) {
    let loff = zoom*(off+y); // local off
    if(loff<0)continue;
    let r = 1/loff/xspeed; // radius ala size
    let c = map(noise(loff), 0, 1, r, width-r); // center
    line(-1, y, c-r, y);
    line(c+r, y, Width, y);
  }
}
