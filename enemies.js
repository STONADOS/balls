class enemy{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(random(30, 1400), random(30, 600), 40, options);
        this.radius = 40;
        // World.add(world, this.body)
    }
display(){
    var pos = this.body.position;
    ellipseMode(CENTER);
    fill("red");
    ellipse(pos.x, pos.y, this.radius);
}
}