class Chain{
    constructor(body1,point1){
// bodyA , bodyB
// pointA, pointB


        var options={
            bodyA:body1,
            pointB:point1,
            length:200,
            stiffness:0.04
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    show(){
        // line(x1,y1,x2,y2)

        var p1=this.chain.bodyA.position;
        var p2= this.chain.pointB;

        line(p1.x,p1.y,p2.x,p2.y);
    }
}