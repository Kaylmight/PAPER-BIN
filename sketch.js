
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var screenHeight = 660;
var screenWidth = 800;

function preload()
{
	
}

function setup() {

	
	createCanvas(screenWidth, screenHeight);


	engine = Engine.create();
	world = engine.world;
	ground = new Box(screenWidth/2, screenHeight, screenWidth, 20, {isStatic:true})
	binBottom = new Box(650, 645, 100, 10)
	binRight = new Box(695, 600, 10, 100)
	binLeft = new Box(600, 600, 10, 100)
	paper = new Paper(100, 100, 20, 20)

	

	
	//Create the Bodies Here.
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  binBottom.display();
  binRight.display();
  binLeft.display();
  paper.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){


		var targetAngle = Matter.Vector.angle(paper.body.position, {x:650, y:screenHeight-100});
		var force = 20;

		var forceVector = {
			x: cos(targetAngle) * force, 
			y: sin(targetAngle) * force
		  };

		Matter.Body.applyForce(paper.body, paper.body.position, forceVector)
		//console.log('Abdulah: ' + paper.body.position.x + " " + paper.body.position.y);
	}
}



