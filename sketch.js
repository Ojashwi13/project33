var boy, boyImg;
var backgroundImg;

function preload(){
  boyImg = loadImage("snowboy.png");
  backgroundImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  boy = createSprite(400,200,50,50);
  boy.addImage(boyImg);
  boy.scale = 0.35;
}

function draw() {
  background(backgroundImg);
  // background.velocityX = -4;
   
  //infinite ground
  // if (ground.x < 0) {
  //   ground.x = ground.width / 2;
  // } //make the trex jump

  if (keyDown("space") && boy.y >= 161.5) {
    boy.velocityY = -10;
  }  
  boy.velocityY = boy.velocityY + 0.5;
  drawSprites();
}