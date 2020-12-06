var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,b1,b2,b3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	b1Sprite=createSprite(300, height-90, 20,100);
	b1Sprite.shapeColor=color("red")

	b2Sprite=createSprite(width/2, height-50, 200,20);
	b2Sprite.shapeColor=color("red")

	b3Sprite=createSprite(500, height-90, 20,100);
	b3Sprite.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	b1 = Bodies.rectangle(300, 600,  20,100 , {isStatic:true} );
    World.add(world, b1);
	 
	b2 = Bodies.rectangle(width/2, 630, 200,20 , {isStatic:true} );
	World.add(world, b2);
	 
    b3 = Bodies.rectangle(500, 600,  20,100 , {isStatic:true} );
 	World.add(world, b3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
    
  }
}



