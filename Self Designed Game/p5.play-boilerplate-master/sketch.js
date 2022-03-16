var BackG,BackImg; 
var rocket,rocketImg;
var ufoImg,ufo;
var rock,rockImg,rockGroup;
var blast,blastImg;
var edges;
var gameOverImg ;
var fireBall,fireBallImg;

function preload (){
  BackImg = loadImage("images/space.png");
  rocketImg = loadImage("images/rocket.png");
  ufoImg = loadImage("images/ufo.png");
  rockImg = loadImage("images/rock1.png");
  blastImg = loadAnimation("images/blast.png")
  gameOverImg = loadAnimation("images/g1.jpg", "images/g2.jpg","images/g3.jpg", 
  "images/g4.jpg","images/g5.jpg", "images/g6.jpg", "images/g7.jpg", "images/g8.jpg",
  "images/g9.jpg", "images/g10.jpg");
  fireBallImg = loadImage("images/fireBall.png");
}
function setup() {
 createCanvas(800,400);

 BackG = createSprite(400,200,100,100);
 BackG.addImage(BackImg);
 BackG.addAnimation("xyz",gameOverImg);


 rocket = createSprite(100,200,100,100);
 rocket.addImage(rocketImg);
 rocket.addAnimation("abc",blastImg);  
 rocket.scale = 0.2 ;
 rocket.debug = true;
 rocket.setCollider("rectangle",0,0,200,200)

 ufo = createSprite(700,200,100,100);
 ufo.addImage(ufoImg);
 ufo.scale = 0.2;
 
 rockGroup = new Group();

 //blast = createSprite(700,200,100,100);
 //blast.scale = 0.5;
  //createSprite(400, 200, 50, 50);

 fireBall = createSprite(rocket.x,rocket.y,100,100);
 fireBall.addImage(fireBallImg);
 fireBall.scale = 0.1;
 
 
 //fireBall.velocityX = 2;


}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  spawnObstacles();

 edges = createEdgeSprites()
 rocket.collide(edges);


  fill("red")
 text(mouseX + "," + mouseY,100,100);

 //rocket.x = mouseX;
 //rocket.y = mouseY;

 if(keyDown("UP_ARROW")){
   rocket.velocityY = -2
 }
 if(keyDown("DOWN_ARROW")){
  rocket.velocityY = 2
}
if(keyDown("RIGHT_ARROW")){
  rocket.velocityX = 2
}
if(keyDown("LEFT_ARROW")){
  rocket.velocityX = -2}

  if(rocket.isTouching(rockGroup)){
    rocket.changeAnimation("abc",blastImg);
    //console.log("abc");
    rocket.setVelocity(0,0);
    //gameOverImg = createAnimation(400,200,100,100);
    BackG.changeAnimation("xyz",gameOverImg);
    
    

  }
}


function spawnObstacles() {
  if(frameCount % 150 === 0) {
    rock = createSprite(850,200,100,100);
 rock.addImage(rockImg);
 rock.scale = 0.2;
 rock.velocityX = -4
 rock.debug = true;
 rock.setCollider("rectangle",0,0,200,200)

 rock.y = Math.round(random(80,120));
 rockGroup.add(rock);
 //rock.scale = 0.1;
  }}