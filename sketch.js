var bg;
//var background;

function preload(){
 bgImg = loadImage("images/iss.png");
 sleepImg = loadImage("sleep.png");
 brushImg = loadImage("brush.png");
 gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
 eatImg = loadAnimation("eat1.png","eat2.png");
 drinkImg = loadAnimation("drink1.png","drink2.png");
 moveImg = loadAnimation("move.png","move1.png");


}


function setup() {
  createCanvas(400, 400);
 
 background1 = createSprite(200,200,40,40);
 background1.addImage(bgImg);
 background1.scale = 0.5;

 
}

function draw() {
  background(220);
  
  
  
  
  drawSprites();
}