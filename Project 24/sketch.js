
var paperObject;
var box1, box2, box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paperObject = new Paper(200, 100, 30);
	
	box1 = new Dustbin(400, 680, 15, 130);
	box2 = new Dustbin(580, 680, 15, 130);
	box3 = new Dustbin(490, 680, 130, 15);

	ground = new Ground(width/2, 700, width, 30);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  //paperObject.keyPressed();

  box1.display();
  box2.display();
  box3.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.paper, paperObject.paper.position, {x : 85, y: -85});
	}
}




