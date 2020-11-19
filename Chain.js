class Sling{
    constructor(body1, body2, offsetX, offsetY){
    this.offsetX =offsetX
    this.offsetY =offsetY

        var options = {
            bodyA: body1,
            bodyB : body2,
            pointB :{x:this.offsetX, y:this.offsetY},
            length : 200       
           }
        this.rope = Constraint.create(options);
       
       
        World.add(world, this.rope);
    }

    display(){
     
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(3);    
       var An1X =pointA.x
       var An1Y =pointA.y

        var An2X =pointB.x+this.offsetX
        var An2Y =pointB.y+this.offsetY
        
        line(An1X, An1Y, An2X, An2Y);
    
}


}