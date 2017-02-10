var myImg;

function preload() {
  myImg = loadImage("image/sfondo.jpg");
}


function setup() {
   	createCanvas(windowWidth, windowHeight); 
}

function draw() {
    
    var h = hour();
    var m = minute();
    var s = second();

    myImg.filter("threshold", 0.4);
    backgroundImage(myImg);
        
    textFont('Arvo');
    fill(0);
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(height/30);
    
    if (s >= 0 && s <= 9) {
        text("0" + s, width/2 * 1.4,height/2 * 0.5);
    } else{
        text(s,width/2* 1.4,height/2 * 0.5)
    }
    textStyle(BOLD);
    textSize(height/15);
    if (m >= 0 && m <= 9) {
        text("0" + m, width/3* 1.5,height/2 * 0.6);
    } else{
        text(m,width/3* 1.5,height/2 * 0.6)
    }
    textStyle(ITALIC);
    textSize(height/8);
    if (h >= 0 && h <= 9) {
        text("0" + h, width/12* 2.5,height/2 * 0.6);
    } else{
        text(h,width/12* 2.5,height/2 * 0.6)
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function backgroundImage(img) {
    var x = 0;
    var y = 0;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;
    
    
    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch,  x, y, w, h);
}
