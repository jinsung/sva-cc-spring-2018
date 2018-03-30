var sx = 0
var sy = 0;
var mx = 0
var my = 0;
var hx = 0
var hy = 0;
var angleS = 0.0;
var angleM = 0.0;
var angleH = 0.0;
var randomColor;
var myRandomSize;

function setup() {
    createCanvas(500, 500);

}

function draw() {
    background(0, 78, 154);
    translate(width / 2, height / 2);
    fill(249, 205, 225);
    strokeWeight(2);
    noStroke(0);
    ellipse(0, 0, 420, 420);


    angleS = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
    angleM = map(minute(), 0, 60, 0, TWO_PI) - HALF_PI;
    angleH = map(hour(), 0, 24, 0, TWO_PI * 2) - HALF_PI;

    sx = cos(angleS) * 165;
    sy = sin(angleS) * 165;
    mx = cos(angleM) * 120;
    my = sin(angleM) * 120;
    hx = cos(angleH) * 30;
    hy = sin(angleH) * 30;

    noStroke();
    textFont("Opensans");

    textSize(28);
    fill(color(220, 36, 105));
    text(second(), sx, sy);

    textSize(36);
    fill(color(109, 86, 244));
    text(minute(), mx, my);

    textSize(80);
    fill(color(0, 78, 154));
    text(hour(), hx, hy);

}
