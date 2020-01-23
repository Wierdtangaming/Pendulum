class Chain {
    constructor (bd_A,bd_B) 
    {
        var options = {
            bodyA : bd_A, 
            bodyB : bd_B,
            length : 75,
            stiffness: 0.0047
        }
          this.chain = Constraint.create(options);
          World.add(world,this.chain);

     }
     display() {
         var pointA = this.chain.bodyA.position;
         var pointB = this.chain.bodyB.position;
         push();
         stroke("white");
         strokeWeight(5);
         line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
     }
}