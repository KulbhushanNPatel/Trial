var x, edges, y;


function setup() {
  createCanvas(600,600);
  x = createSprite(150, 450, 100, 100);
  x.shapeColor = 'cyan';
  edges = createEdgeSprites()
  y = createSprite(200, 200, 100, 100);

}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW)){
     x.velocityX = 3;
  }
  if (keyIsDown(LEFT_ARROW)){
     x.velocityX = -3;
  }
  if (keyIsDown(UP_ARROW)){
     x.velocityY = - 3;
  }
  if (keyIsDown(DOWN_ARROW)){
     x.velocityY = 3;
  }

  y.collide(x);

  x.bounceOff(edges[0])
  x.bounceOff(edges[1])
  x.bounceOff(edges[2])
  x.bounceOff(edges[3])
  y.bounceOff(edges[0])
  y.bounceOff(edges[1])
  y.bounceOff(edges[2])
  y.bounceOff(edges[3])

  

  drawSprites();
}




