class Ball{
    constructor(x, y){
        var options = { 
            restitution:0.4, 
            density:1.2
        }
        var r = Math.round(50);
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        // this.image = loadImage("sprites/paper.png");
        this.trajectory = [];
        World.add(world, this.body)
    }    
display(){
    var pos = this.body.position;
    ellipseMode(CENTER);    
    fill("lightblue");
    ellipse(pos.x, pos.y, this.radius, this.radius);

}
    
}
