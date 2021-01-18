var canvas, backgroundImage;

var gameState = 0;
var babyCount;
var allBabies;
var distance = 0;
var database;

var form, baby, game;

var babies, baby1, baby2, baby3;
var obstacle1, obstacle2, obstacle3;
var track;
var obstaclesGroup;

//var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  //car4_img = loadImage("../images/car4.png");
  //ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(babyCount === 3){
    game.update(1);
    
  }
  if(gameState === 1){
    clear();
    game.play();
    /* if(frameCount % 500 === 0) {
      var obstacle = createSprite(600,-50);
      obstacle.x = Math.round(random(375,775));
      obstacle.addImage(car1_img);
      obstacle.velocityY = 0;
  } */
  }

  if(gameState === 2){
    game.end();
  }


}

/* function spawnObstacles() {
  console.log("TO spawn")
  if(frameCount % 500 === 0) {
    var obstacle = createSprite(600,);
    //obstacle.debug = true;
    obstacle.velocityY = 0;
    
    //generate random obstacles
    //var rand = Math.round(random(1,6));
    /* switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
     */
    //assign scale and lifetime to the obstacle   
    //obstacle.addImage(car1_img);        
    //obstacle.scale = 0.5;
    //obstacle.lifetime = 300;
    //add each obstacle to the group
    //obstaclesGroup.add(obstacle);
  //}
//} 