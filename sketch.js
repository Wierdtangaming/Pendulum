const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var platform;
var count;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,390,400,20);
    platform = new Ground(200,40,100,15);
    circle = new Circle(50,50,50,50);


    chain =  new Chain(platform.body,circle.body);

    count = 0;

}

function draw(){
    background(176,0,200);
    push();
    fill("white")
    stroke("Black");
    strokeWeight(2);
    text("Press A to swing from left side",125,350)
        
    text("Press D to swing from right side",125,375)
    pop();
    chain.display();
    ground.display();
    platform.display();
    circle.display();
    Engine.update(engine); 


}