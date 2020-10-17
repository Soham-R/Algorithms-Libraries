
var movingRect, fixedRect, box1,box2;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 50, 50);
  fixedRect = createSprite(600, 200, 50, 50);


box1 =  createSprite(300,300,50,50);
box2 =  createSprite(400,300,50,50);

  movingRect.debug = true;
  fixedRect.debug = true;

  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";

  box1.velocityX = 3
  

 box2.velocityX = -3
  
}

function draw() {
  background(200); 
  //box1.x = mouseX;
  //box1.y = mouseY;



 if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
 }else{
   movingRect.shapeColor = "blue";
   fixedRect.shapeColor = "blue";
 }

 if(isTouching(box1,box2)){
  box1.shapeColor = "red";
    box2.shapeColor = "red";
 }else{
   box1.shapeColor = "blue";
   box2.shapeColor = "blue";
 
 
 

  }
  
  bounceOff(box1,box2);
  drawSprites();
}

