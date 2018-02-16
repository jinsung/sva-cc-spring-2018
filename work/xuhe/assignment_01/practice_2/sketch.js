
var circleX=0;
var circley=201;
var circleSize=180;
var trans=255;
var r=0;
var b=0;
var circleySpeed=1
var time=0;


function setup(){
  createCanvas(500,500);
  

}

function draw(){
  background(r,50,b);
  r= map(mouseX,0,400,0,250);
  b= map(mouseY,0,400,0,250);




// random


  //line
  stroke(255);
  line(135,220,103,250);

  //big circle
  noStroke();
  fill(250,50,50,trans);
  if(mouseX>250&&mouseX<500){
      trans=trans-5;
      circleSize=circleSize+1;
    }else if(mouseX<250&&mouseX>0){
      trans=trans+5;
      circleSize=circleSize-1;
    }
    ellipse(250,250,circleSize,circleSize,trans);
    fill(250,250,50,trans);
    ellipse(115,290,circleSize/8,circleSize/8,trans);




    //small circle

    fill(250,250,50,trans);
    ellipse(115,290,15,15);

    fill(r,50,b);
    r= map(mouseX,0,400,0,100);
    b= map(mouseY,0,400,0,150);
    ellipse(115,mouseX,15,15);
    circley=circley+circleySpeed;
    if(circley>0&&circley<290){
      circleySpeed=circley*-1;
    }

    //for(circley;circley>200;circley=circley+1){
      //fill(250,250,50,trans);
      //ellipse(115,circley,15,15);



  }
