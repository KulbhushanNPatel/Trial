var player;
var target;
var obs1;
var obs2;
var edges;

function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(1300, 900);
  player = createSprite(40 ,550, 30, 30);
  target = createSprite(560,40,30,30);
  obs1 = createSprite(300,120,100,20);
  obs1.velocityX = 5;
  obs2 = createSprite(300,320,100,20);
  obs2.velocityX = -5

  target.shapeColor = "blue"
  obs2.shapeColor = "red"
  obs1.shapeColor = "red"

  edges = createEdgeSprites();

}

function draw() {
  background("black");
  obs1.bounceOff(edges[1]);
  obs1.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  player.bounceOff(edges[0]);  
  player.bounceOff(edges[1]);  
  player.bounceOff(edges[2]);  
  player.bounceOff(edges[3]);  
  
  if(keyDown("up")){
    player.y=player.y-3;
  }
  if(keyDown("down")){
    player.y=player.y+3;
  }
  if(keyDown('left')){
    player.x = player.x-3;
  }
  if(keyDown("right")){
    player.x = player.x+3;
  }
  if(player.isTouching(target)){
    text("YOU WIN",500,500);
  }
  if(player.isTouching(obs1)){
    obs1.velocityX=0;
    text("YOU LOSE",500,500);
  }
  if(player.isTouching(obs2)){
    obs2.velocityX=0;
    text("YOU LOSE",500,500);
  }
  drawSprites()
  

}
