var PLAY = 1;
var gameState = PLAY;
var helicopterIMG, chopper, packageSprite, packageIMG;
var packageBody,ground
const Engine = Matter.Engine;;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg;
var stopper;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
	bg = loadImage("bg.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();

	world = engine.world;

	left = createSprite(300, 610, 20, 100);
	left1 = Bodies.rectangle(300, 610, 20, 100, { isStatic: true });
	World.add(world, left1);
	left.shapeColor = "red";

	right = createSprite(500, 610, 20, 100)
	right1 = Bodies.rectangle(500, 610, 20, 100, { isStatic: true });
	World.add(world, right1);
	right.shapeColor = "red";

	base = createSprite(410, 650, 200, 20)
	base1 = Bodies.rectangle(410, 650, 200, 20, { isStatic: true });
	World.add(world, base1);
	base.shapeColor = "red";

	stopper = createSprite(width/2 + 120, 200, 10, 100);
	stopper.visible = false;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2
	packageSprite.visible = false;2

	chopper=createSprite(width-810, 200, 10,10);
	chopper.addImage(helicopterIMG)
	chopper.scale = 0.6
	chopper.velocityX = 15;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(bg);

	if (gameState === PLAY) {
		packageSprite.x = chopper.x
		if (chopper.isTouching(stopper)) {
			packageSprite.visible = true;
			chopper.velocityX = 0;
			keyPressed();
		}


	}
	left.x = left1.position.x;
	left.y = left1.position.y

	right.x = right1.position.x;
	right.y = right1.position.y

	base.x = base1.position.x;
	base.y = base1.position.y

	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
	drawSprites();
}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody, false);

    
  }
}



