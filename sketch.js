//creating all the variables
var path, pathImage
var runner,runningAnimation

//creating the variables that I will add later
var bomb
var coin
var powerade

function preload(){
  //pre-load images

  //loading a running animation for the runner
  runningAnimation = loadAnimation("Runner-1.png","Runner-2.png");

  //loading an image for the path
  pathImage = loadImage("path.png");
}

function setup(){
  
  //creating the canvas
  createCanvas(400,400);

  //creating the pathway
  path = createSprite(190,200);
  path.addImage("pathway",pathImage);
  path.scale = 1.4;
  //setting a volocity for the moving pathway
  path.velocityY = 4;

  //creating the runner sprite
  runner = createSprite(200,325);
  runner.addAnimation("running", runningAnimation);
  runner.scale = 0.1

}

function draw() {

  //creating an if condition to make sure the pathway resets
  if(path.y > 400){
    path.y = height/2;
  }

  //making it so when you move your mouse the runner moves as well
  runner.x = World.mouseX;

  //drawSprites function
  drawSprites();

}
