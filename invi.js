class invis{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(700, 618, 1400, 5, options);
        this.width = 1400;
        this.height = 25;
        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pox.x, pos.y, this.width, this.height);
}
}