class Link{
    constructor(bodyA,bodyB){
        this.link = Constraint.create({
            bodyA:bodyA.body.bodies[bodyA.body.bodies.length-2],
            bodyB:bodyB,
            length:25,
            stiffness:0.1
        })
        World.add(world,this.link)
    }
    break()
    { 
        World.remove(world,this.link)
      this.link = null;
    }
}