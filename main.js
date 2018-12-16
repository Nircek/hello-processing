var Width = 640;
var Height = 480;
var zoom = 1/256;
var factor=1024;
var Size = 5; // radius of cursor
var yg = 1/32;
var ylimspeed = 8;
var xspeed = 1/2048;
var s = 1024;
var ss = 4;
var yspeed, off;
function restart() {
  stroke('red');
  strokeWeight(2);
  let s = min(Height,Width)/4;
  ellipse(Width/2,Height/2,s,s);
  strokeWeight(1);
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
  for(let y=0;y<Height;++y)
    if(round((off+y)/ss)*ss%s) {
      let loff = zoom*(off+y); // local off
      if(loff<0)continue;
      let r = 1/loff/xspeed; // radius ala size
      let c = map(noise(loff), 0, 1, r, width-r); // center
      line(-1, y, c-r, y);
      line(c+r, y, Width, y);
      if(y==mouseY)
        if(abs(mouseX-c)>r)
	        restart();
    }
}
