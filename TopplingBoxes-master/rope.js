class Rope {
    constructor(bodyA, bodyB, xOffset){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:xOffset,y:0}
        }
        this.chain = Matter.Constraint.create(options);
        this.xOffset = xOffset
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x = this.xOffset,pointB.y);
    }
}