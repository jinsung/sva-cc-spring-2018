var charObjs=[];
var myString= "Hello World!"
var xPos = 0;
var charSize=15;


function setup(){
  createCanvas(500,500);
  textFont('Courier');
  // size var need to be global var size=15;
  for (var i=0;i<myString.length;i++){
    var char=myString[i];
    charObjs[i] = new movingChar(char,
                                xPos,
                                height/2,
                                charSize,
                                0.1,
                                0);
                                xPos+=charSize;

   }
}

function draw(){
  background(250);
  for(var i=0;i< charObjs.length; i++){
    charObjs[i].move();
    charObjs[i].display();
    // call function move and siaplay to draw a ball object
  }
}

function keyPressed(){
  var newChar= new movingChar( key,xPos,height/2,charSize,0.1,0);
  charObjs.push(newChar);
  xPos +=charSize;

}
