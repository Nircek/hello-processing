var Width = 640;
var Height = 480;
var step = 0.005;
var off = -Height*step*0.5;
var factor=1024;
function setup() {
  createCanvas(Width, Height);
  noiseSeed(random(1024*1024));
}

function draw() {
  clear();
  off += step;
  for(let y=0;y<Height;++y) {
    let loff = off+step*y; // local off
    if(loff<0)continue;
    let c = noise(loff); // center
    let r = factor/loff; // radius ala size
    line(0, y, Width*c-r, y);
    line(Width*c+r, y, Width, y);
  }
}
