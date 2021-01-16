
var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 100);
  movingRect=createSprite(100, 200, 100, 50);
  fixedRect.shapeColor="cyan";
  movingRect.shapeColor="cyan";
}

function draw() {
  background(0,0,55);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2
    && movingRect.x -fixedRect.x< fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y< fixedRect.height/2+movingRect.height/2
    ){
    fixedRect.shapeColor="black";
    movingRect.shapeColor="black";
  }else{
    fixedRect.shapeColor="cyan";
    movingRect.shapeColor="cyan";
  }

  drawSprites();
}