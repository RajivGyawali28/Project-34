class Fly{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length:120
        }
        this.swing = Constraint.create(options);
        World.add(world,this.swing);
    }

    display(){
        var pointA = this.swing.bodyA.position;
        var pointB = this.swing.pointB;
        push();
        strokeWeight(0)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}