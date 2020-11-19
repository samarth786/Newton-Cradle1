class Paper{
    constructor(x, y, width, height){

        var options={
            'restitution': 1 ,
            'density' : 1 ,
            'friction' : 1,
            'isStatic' : false,
            'slop': 1,
            'inertia': Infinity

        }
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;

this.image = loadImage("download.png");
World.add(world, this.body);
    }
 display (){
    strokeWeight(0);
   var pos = this.body.position; 
   imageMode(CENTER);
   image(this.image, pos.x,pos.y, this.width +8, this.height +8);

      
      
}
 }
