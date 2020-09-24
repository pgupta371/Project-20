var car, wall;
var speed, weight;
var clouds, cloudsGroup;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "black";
  wall = createSprite(1500,200,30,height/2);
  wall.shapeColor = color(80,80,80);

  speed = random(55,90);
  weight = random(400,1500);

  cloudsGroup = new Group();
}

function draw() {
  background(color(20,200,200)); 
  
  car.velocityX = speed;

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509
    if( deformation > 180){
      car.shapeColor = color(255,0,0);
    }
    if( deformation < 180 &&  deformation > 100){
      car.shapeColor = color(230,230,0);
    }
    if( deformation < 100){
      car.shapeColor = color(0,255,0);
    }
  }


  spawnClouds();
  drawSprites();
}

function spawnClouds() {
  if (frameCount % 20 === 0) {
    var cloud = createSprite(width-20,height-200,40,30);
    cloud.shapeColor = "white";
    cloud.y = Math.round(random(10,100));
    cloud.velocityX = -7;
    
     //assign lifetime to the variable
    cloud.lifetime = (width/cloud.velocityX);
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
}


