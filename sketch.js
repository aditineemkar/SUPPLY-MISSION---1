var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options;
var zombies, zombiesimg;
var land, landimg;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png");
	zombiesimg=loadImage("zombies.gif");
	landimg = loadImage("land.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	zombies = createSprite(180,600);
	zombies.addImage(zombiesimg);
	zombies.scale=0.2;
	

	packageSprite=createSprite(width/2, 80, 10,10,options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Blue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

//   if (keyCode === DOWN_ARROW) {
// 	Matter.world.setStatic(packageBody, false)
//   }
  drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
   		Matter.Body.setStatic(packageBody,false)
	   
	 }
   }



