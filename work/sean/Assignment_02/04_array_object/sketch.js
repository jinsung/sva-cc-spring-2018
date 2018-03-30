var ball = [];
var hr
var sc
var mn

function setup() {
  createCanvas(500, 500);
  hr = hour();
  sc = second();
  mn = minute();

  // creates circle for hours
  for (var hourBall = 0; hourBall < hr; hourBall++){
    var ii = hourBall * 0.1;
    ball[hourBall] = new hrBall(
      random(width),
      random(height),
      50,
      ii,
      ii,
      random(0,1)
    );
  }


  // creates circle for minute
  for (var minuteBall = 0; minuteBall < mn; minuteBall++){
    var ii = minuteBall * 0.1;
    ball[minuteBall] = new mnBall(
      random(width),
      random(height),
      50,
      ii,
      ii,
      0,
    );
  }

  /*
  for (var secondBall = 0; secondBall < mn; secondBall++){
    var ii = secondBall * 0.1;
    ball[secondBall] = new mnBall(
      random(width),
      random(height),
      50,
      ii,
      ii,
      0,
    );
  }
  */

}

function draw() {
  background(200);
  updateTime();

  fill(255,0,0);
  text('Hour: ' + hr + ampm, 20, 40);
  fill(0);
  text('Minute: ' + mn, 20, 70);
  fill(255);
  var intS = parseInt(sc);
  text('Second: ' + intS, 20, 100);

  for (var hourBall = 0; hourBall < hr; hourBall++){
    ball[hourBall].move();
    ball[hourBall].display();
    ball[hourBall].bounce();
  }

  for (var minuteBall = 0; minuteBall < mn; minuteBall++){
    ball[minuteBall].move();
    ball[minuteBall].display();
    ball[minuteBall].bounce();
  }

  /*
  for (var secondBall = 0; secondBall < sc; secondBall++){
    ball[secondBall].move();
    ball[secondBall].display();
    ball[secondBall].bounce();
  }
  */
}



function updateTime () {
  hr = hour();
  if (hr > 12) {
    hr = hr - 12;
    ampm = "PM"
  } else {
    ampm = "AM"
  }

  hr = hour();
  mn = minute();
  sc = second();

  var secondDiff = sc - second();
  sc = sc - secondDiff * 0.1;

}
