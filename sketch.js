var image1, Birthday;

function preload(){
Birthday.loadImage("image1.png");
}


function setup() {
  createCanvas(1400,1000);
 image1 =  createSprite(400, 200, 50, 50);
 image1.addImage("Birthday");
}

function draw() {
  background("black");  
  drawSprites();
}