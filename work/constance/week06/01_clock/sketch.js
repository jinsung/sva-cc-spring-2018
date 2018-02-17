var h;
var m;
var s;
var ampm;



function setup(){
  createCanvas(500,500);
  s=second();
}

function draw(){
  background(171,0,255);
  //you have to call the functions that you have made in the draw loop
  updateTime();
  displayClockBar();
  displayClockInText();


}


function displayClockInText(){
  //this is what you want it to say on the screen
  textFont('Futura')
  fill(0,255,26);
  textSize(100);
  textStyle(ITALIC);
  text('Hour: '+h+ampm,10,height/4);
  fill(0,255,222);
  textSize(75);
  textStyle(NORMAL);
  text('Minute: '+m,10,height/2);
  fill(240,255,25);
  textSize(50);
  textStyle(BOLD);
  text('Second: '+s,10,height*0.75);

}

function displayClockBar(){
    var barHeight=height/2*0.333;
    var hourBarWidth=map(h,0,12,0,width);
    var secondBarWidth=map(s,0,60,0,width);
    var minuteBarWidth=map(m,0,60,0,width);
    noStroke();
    fill(240,255,25);
    rect(0,height*0.75,secondBarWidth,barHeight);
    fill(0,255,26);
    rect(0,height/4,hourBarWidth,barHeight);
    fill(0,255,222);
    rect(0,height/2,minuteBarWidth,barHeight);



  }




function updateTime(){
  h=hour();
  //this is to make it not 24 hour
  if(h>12){
    ampm='pm';
    h=h-12;
  }else{
    ampm='am';

  }

  m=minute();
  var secondDiff=s-second();
  s=s-secondDiff*0.1;

}
