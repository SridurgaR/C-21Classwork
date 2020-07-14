var fixedRectangle, movingRectangle
var gameRectangle

function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(400,200,50,50);
  fixedRectangle.shapeColor = "red";
  fixedRectangle.debug = true;
  movingRectangle = createSprite(200,150,60,40);
  movingRectangle.shapeColor = "red";
  movingRectangle.debug = true;
  gameRectangle = createSprite(150,350,35,60);
  gameRectangle.shapeColor = "red";
  gameRectangle.debug = true;
}

function draw() {
  background(0,0,0); 

movingRectangle.x = mouseX;
movingRectangle.y = mouseY;

console.log(movingRectangle.x - fixedRectangle.x);
console.log(movingRectangle.width / 2 + fixedRectangle.width / 2);

if(isTouching(movingRectangle, fixedRectangle)){
movingRectangle.shapeColor = "blue";
fixedRectangle.shapeColor = "blue";
}
else{
movingRectangle.shapeColor = "red";
fixedRectangle.shapeColor = "red";
}
if(isTouching(movingRectangle, gameRectangle)){
  gameRectangle.shapeColor = "yellow";
}
else{
  gameRectangle.shapeColor = "red";
}
  drawSprites();

}


