const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg;

flag=0

function preload()
{
    bg= loadImage("sprites/bg.jpg")

}
function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(200,350,70,70);
    box2 = new Box(300,350,70,70);
    box3 = new Box(400,350,70,70);

    pig1 = new Pig(1000, 350);


    chain1 = new SlingShot(box1.body,box2.body);


    chain2 = new SlingShot(box2.body,box3.body);
}
function draw()
{
    background(bg);
    
    Engine.update(engine);
  
    box1.display();
    box2.display();
    box3.display();

    pig1.display();

    ground.display(); 

    chain1.display()
    chain2.display()
    
    fill("red");
    textSize(30);
  


    var collision = Matter.SAT.collides(box3.body,pig1.body);

    if(collision.collided)
    {
        flag = 1;
    }

    if(flag===1)
    {
      text("CRASH",520,140)  
    }



}
function keyPressed()
{
    if(keyCode===RIGHT_ARROW)
    {
        console.log("key pressed");
        Matter.Body.applyForce(box3.body,{x:box3.body.position.x,y:box3.body.position.y}
            ,{x:1500,y:0})
    }
}


