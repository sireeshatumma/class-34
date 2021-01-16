class Ball{ 
        
    constructor(x,y,r){
        this.body=Bodies.circle(x,y,r);
        World.add(world,this.body);
        this.diameter=2*r;
        
    }
    show(){
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.diameter,this.diameter);
    }
}