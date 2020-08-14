var fixed;
var moving; 


function setup() {
  createCanvas(800,400);
 fixed= createSprite(400, 200, 50, 30);
 fixed.shapeColor="red";
 moving =createSprite(400,300,50,30);
 moving.shapeColor="green";
 fixed1= createSprite(200, 100, 50, 30);
 fixed1.shapeColor="red"
 moving1 =createSprite(700,100,50,30)
 moving1.shapeColor="green"
fixed1.velocityX=2;
moving1.velocityX=-3;

}

function draw() {
  background(255,255,255);  
  moving.y=mouseY;
  moving.x=mouseX;
 bounceOff(fixed1,moving1);
  if ( isTouching(fixed,moving))
  {
    moving.shapeColor="blue";
    fixed.shapeColor="yellow";
  }
  else 
  {
    moving.shapeColor="green"
    fixed.shapeColor="red"
  }
  drawSprites();
}

