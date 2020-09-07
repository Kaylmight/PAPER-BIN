
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 660);


	engine = Engine.create();
	world = engine.world;
	box1 = new Box(width/2, 660, 800, 20, {isStatic:true})
	box2 = new Box(650, 645, 100, 10)
	box3 = new Box(695, 600, 10, 100)
	box4 = new Box(600, 600, 10, 100)
	paper = new Paper(100, 100, 20, 20)

	

	
	//Create the Bodies Here.
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  paper.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.apllyForce(paper.body, paper.body.position, {x:650, y:210})
		
	}
}



