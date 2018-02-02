var myRandomNumX;
var myRandomNumY;

var myRandomNumR;

function setup(){

createCanvas(500,500);




}

function draw(){
background(2,200,165);


myRandomNumX=random(width);
myRandomNumY=random(height);
myRandomNumR=random(255);

fill(myRandomNumR,0,0);

ellipse(myRandomNumX,myRandomNumY,20,20);
//ellipse(myRandomNumY,width/2,20,20);



}
