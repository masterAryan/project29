const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground;
var box0,box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11,box12;
var box13,box14,box15,box16,box17;
var box18,box19,box20,box21;
var box22,box23,box24; 
var box25,box26;
var box27;
var box29, box30, box31 , box32,box33 ,box34 , box35, box36 ,box37,box38 ,box39 ,box4, box41 ,box42,box43 ,box44 ,box45,box46 ,box47 ,box48 ,box49 ,box50 ,box51,box51 ,box52 ,box53,box54 ,box55;
 var box56;
 var slingShot;
 var score = 0;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(490,410,240,10);
  ground1 = new Ground(900,500,250,10);

  

  box56 = new polygon(200,200,50,50);
  slingShot = new SlingShot(box56.body,{x:200, y:50});
  
  box0 = new Box(400,390,30,30);
  box1 = new Box(430,390,30,30);
  box2 = new Box(460,390,30,30);
  box3 = new Box(490,390,30,30);
  box4 = new Box(520,390,30,30);
  box5 = new Box(550,390,30,30);
  box6 = new Box(580,390,30,30);
  
  box7 = new Box(415,350,30,30);
  box8 = new Box(445,350,30,30);
  box9 = new Box(475,350,30,30);
  box10 = new Box(505,350,30,30);
  box11 = new Box(535,350,30,30);
  box12 = new Box(565,350,30,30);
 
 box13 = new Box(430,310,30,30);
 box14 = new Box(460,310,30,30);
 box15 = new Box(490,310,30,30);
 box16 = new Box(520,310,30,30);
 box17 = new Box(550,310,30,30);

 box18 = new Box(445,290,30,30);
 box19 = new Box(475,290,30,30);
 box20 = new Box(505,290,30,30);
 box21 = new Box(535,290,30,30);

 box22 = new Box(460,250,30,30);
 box23 = new Box(490,250,30,30);
 box24 = new Box(520,250,30,30);

 box25 = new Box(475,220,30,30);
 box26 = new Box(505,220,30,30);

 box27 = new Box(490,190,30,30);

 box28 = new Box(810,480,30,30);
 box29 = new Box(840,480,30,30);
 box30 = new Box(870,480,30,30);
 box31 = new Box(900,480,30,30);
 box32 = new Box(930,480,30,30);
 box33 = new Box(960,480,30,30);
 box34 = new Box(990,480,30,30);
 
 box35 = new Box(825,450,30,30);
 box36 = new Box(855,450,30,30);
 box37 = new Box(885,450,30,30);
 box38 = new Box(915,450,30,30);
 box39 = new Box(945,450,30,30);
 box40 = new Box(975,450,30,30);

  box41 = new Box(840,420,30,30);
  box42 = new Box(870,420,30,30);
  box43 = new Box(900,420,30,30);
  box44 = new Box(930,420,30,30);
  box45 = new Box(960,420,30,30);

  box46 = new Box(855,390,30,30);
  box47 = new Box(885,390,30,30);
  box48 = new Box(915,390,30,30);
  box49 = new Box(945,390,30,30);

  box50 = new Box(870,360,30,30);
  box51 = new Box(900,360,30,30);
  box52 = new Box(930,360,30,30);

  box53 = new Box(885,330,30,30);
  box54 = new Box(915,330,30,30);

  box55 = new Box(900,300,30,30);
}

function draw() {
  background(25,103,208);
  Engine.update(engine);  
  ground.display();
  ground1.display();

  box0.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();
  box51.display();
  box52.display();
  box53.display();
  box54.display();
  box55.display();
  box56.display();
 slingShot.display();
  drawSprites();
  text("SCORE:"+ score,750,40);
}
function mouseDragged(){
  //var b = box56;
       Matter.Body.setPosition(box56.body, {x: mouseX , y: mouseY});
 
}
function mouseReleased(){
  //var sling = slingShot;
   slingShot.fly();
}
