

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
  
}



function setup() {
  createCanvas(displayWidth -20 ,displayHeight-30);
  
  //creating background
  background = createSprite(0,0,displayWidth,displayHeight);
  background.addImage(backgroundImage);
  background.scale = 5;
  
  // creating bow to shoot arrow
  bow = createSprite(  displayWidth/2+20  ,  displayHeight/2-30  ,50,50);
  bow.addImage(bowImage); 
  bow.scale = 2;
  
  redB= new Group()
  pinkB= new Group()
  blueB= new Group()
  greenB= new Group()
  arrowGroup= new Group()
  
   score = 0  
 
  
}

function draw() {

  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }



  }


if(arrowGroup.isTouching(redB)){
  redB.destroyEach()
  arrowGroup.destroyEach()
  score=score+1
  }
  
  if(arrowGroup.isTouching(greenB)){
  greenB.destroyEach()
  arrowGroup.destroyEach()
  score=score+2
  }
  
  if(arrowGroup.isTouching(blueB)){
  blueB.destroyEach()
  arrowGroup.destroyEach()
  score=score+3
  }
  
  if(arrowGroup.isTouching(pinkB)){
  pinkB.destroyEach()
  arrowGroup.destroyEach()
  score=score+4
  

}

camera.position.x = arrowGroup.x;
camera.position.y = displayHeight/2;
  
  
  
  drawSprites();
    text("Score: "+ score,  displayWidth/2 ,  50  );
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.2;
  redB.add(red)
  return red
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.2;
  blueB.add(blue)
  return blue;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.2;
  greenB.add(green)
  return green;   
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 2;
  pinkB.add(pink)
  return pink;
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(  displayWidth/2  ,  displayHeight/2  ,60, 10);
  arrow.addImage(arrowImage);
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 7000;
  arrow.scale = 0.6;  
  arrowGroup.add(arrow)
   
}


