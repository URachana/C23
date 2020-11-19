const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body =Matter.Body;

var myEngine, myWorld;
var ground1, box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    
    
    ground1 = new Ground(200,380,400,20);
    
    box1 = new Box(200,300,40,40);
    box2 = new Box(240,100,50,80);
   

    console.log(box2.body.angle);
    console.log(ground1);
}

function draw(){
    background(0);
    Engine.update(myEngine);
    

   

    box1.display();
    box2.display();
    ground1.show();

   
}