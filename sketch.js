const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

/*

1. create an Engine
2. connect to the world
3. update or run the engine

4. create an object
5. add to the world along with connection
6. draw the object
    a. rectangle-->rect()
    b. circle --> ellipse() -oval

array = [[1,2],b,c]
json = {
    a:
        {
            x:300,
            y:400
        },
    b:4,
    c:5
}

student = {
    name : Rajeev,
    grade: 06 th,
    school: NPS
}

key- value pair
*/

var engine,world,object;

function setup(){
    createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    // Engine.run(engine);

ground = new Ground(300,500,600,20);
    
box1= new Box(300,100,50,50)
box2= new Box(300,100,50,50)
box3= new Box(300,100,50,50)
box4= new Box(300,100,50,50)
box5= new Box(300,100,50,50)

ball= new Ball(100,300,40)
chain= new Chain(ball.body,{x:100,y:50})

}
function draw(){
    background(0,255,255);
    Engine.update(engine);
    ground.show();
    box1.show();
    box2.show();
    box3.show();
    box4.show();
    box5.show();

    ball.show();
    chain.show();
    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}