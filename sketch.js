const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, hero, fly, block;
var bgImg;

function preload() {
  bgImg = loadImage("sprites/Background.png");
}

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,450,800,20);

  hero = new Hero(200,300,200,100);

  swing = new Fly(hero.body,{x:290,y:200});

  monster = new Monster(700,200,150,150);

  block1 = new Block(580,300,30,30);
  block2 = new Block(580,300,30,30);
  block3 = new Block(580,300,30,30);
  block4 = new Block(580,300,30,30);
  block5 = new Block(580,300,30,30);

  block6 = new Block(540,240,30,30);
  block7 = new Block(540,240,30,30);
  block8 = new Block(540,240,30,30);
  block9 = new Block(540,240,30,30);
  block10 = new Block(540,240,30,30);
  block11 = new Block(540,240,30,30);
  block12 = new Block(540,240,30,30);
  block13 = new Block(540,240,30,30);

  block14 = new Block(500,200,30,30);
  block15 = new Block(500,200,30,30);
  block16 = new Block(500,200,30,30);
  block17 = new Block(500,200,30,30);
  block18 = new Block(500,200,30,30);
  block19 = new Block(500,200,30,30);

  block20 = new Block(460,150,30,30);
  block21 = new Block(460,150,30,30);
  block22 = new Block(460,150,30,30);
  block23 = new Block(460,150,30,30);
  block24 = new Block(460,150,30,30);
  block25 = new Block(460,150,30,30);
  block26 = new Block(460,150,30,30);

  Engine.run(engine);
}

function draw() {
  background(bgImg);

  ground.display();

  hero.display();

  swing.display();

  monster.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();

  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

}

function mouseDragged(){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}