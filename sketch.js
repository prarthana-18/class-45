var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var girl,girlimg;

function preload(){
  girlimg=loadImage("ïmages/111.png");
}
function setup() {
  createCanvas(800,400);
 
  
  var wall1=createSprite(10,80,100,20);
  wall1.shapeColor='brown';
  var wall2=createSprite(90,1,20,90);
  wall2.shapeColor='brown';
  var wall3=createSprite(142,16,100,20);
  wall3.shapeColor='brown';
  var wall4=createSprite(110,114,20,90);
  wall4.shapeColor='brown';
  var wall5=createSprite(150,100,80,20);
  wall5.shapeColor='brown';
  var wall6=createSprite(280,60,100,20);
  wall6.shapeColor='brown';
  var wall7=createSprite(330,60,20,100);
  wall7.shapeColor='brown';
  var wall8=createSprite(250,150,100,20);
  wall8.shapeColor='brown';
  var wall9=createSprite(370,210,20,150);
  wall9.shapeColor='brown';
  var wall10=createSprite(150,250,20,100);
  wall10.shapeColor='brown';
  var wall11=createSprite(40,190,50,20);
  wall11.shapeColor='brown';
  var wall12=createSprite(40,230,20,70);
  wall12.shapeColor='brown';
  var wall13 = createSprite(40,270,200,20);
  wall13.shapeColor='brown';
  var wall14= createSprite(70,360,20,100);
  wall14.shapeColor='brown';
  var wall15= createSprite(240,210,20,100);
  wall15.shapeColor='brown';
  var wall16=createSprite(250,300,90,20);
  wall16.shapeColor='brown';
  var wall17=createSprite(310,350,20,90);
  wall17.shapeColor='brown';
  var wall18=createSprite(170,360,80,20);
  wall18.shapeColor='brown';
  var wall19=createSprite(360,390,50,20);
  wall19.shapeColor='brown';

 girl=createSprite(5,75,10,10);
girl.addImage("1",girlimg);
}

function draw() {
  background(255,255,255);  
  
  drawSprites();
}