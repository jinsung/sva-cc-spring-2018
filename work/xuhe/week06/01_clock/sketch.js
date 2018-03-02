//declare the valuable
var h;
var m;
var s;
var secondDiff;


function setup(){
  createCanvas(500,500);
  // since we use s as a numver, we need to declare at the first place
  s=second();


}

function draw(){
  background(0,0,250);
  // call the ation in draw becuase it changes all the time
  updateTime();
  displayClockBar();
  displayClockInText();



}


function displayClockInText(){
  textStyle(BOLD);
  textSize(29);
  textStyle(NORMAL);
  fill(250);
  textFont('Georgia');
  text('Hour: '+h, 10,100);
  fill(250,150);
  text('Min: '+m, 10,150);
  fill(250,100.);
  text('Second: '+s,10,200);
}


function displayClockBar(){
  noStroke();
  var barHeight=height/2*0.2;
  var hourBarWidth= map(h,0,12,0,width);
  rect(0,210,hourBarWidth, barHeight);

  var minuteBarWidth=map(m,0,60,0,width);
  rect(0,290,minuteBarWidth, barHeight);

  var secondBarWidth= map(s,0,60,0,width);
  rect(0,370,secondBarWidth,barHeight);


}




function updateTime(){
//assign the value
  h=hour();
  if(h>12){
   h=h-12;
  }
  m=minute();
  secondDiff=s-second();
  s=s-secondDiff*0.1;
  // s here(the number) need to be defined




}
