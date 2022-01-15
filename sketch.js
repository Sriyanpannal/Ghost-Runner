var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  doorsGroup = new Group();
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.4;

}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

  if(keyDown("left_arrow")){
   ghost.x=ghost.x-3;
  }

  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  }

  if(doorsGroup.isTouching(ghost)){
    ghost.velocityY=0;
    tower.velocityY=0;
    doorsGroup.setVelocityYEach(0);
  }

   spawnDoors();
    drawSprites();
}

function spawnDoors() {

if(frameCount% 240 === 0) {
door = createSprite(200,-50);
door.addImage(doorImg);
door.velocityY = 1;
door.x = Math.round(random(120,400));
doorsGroup.add(door);
}

}
