const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var back;

var paperBall, floor, bin, bin2, bin3, slingshot, ball, enemy1, mouse;

var num = 0

var gamestate =  "on sling";
// function preload(){
    // back = loadImage("sprites/school.png");
// }

function setup() {
    createCanvas(displayWidth-20, disllayHeight-20);

    engine = Engine.create();
    world = engine.world;

    // bin = new Boxs(1000, 590, 150, 150);

    // paperBall = new Ball(100, 100);

    // bin2 = new Box(905, 585, 10, 150);

    // bin3 = new Box(1095, 585, 10, 150);

    // floor = new Ground(displayWi, 690, 14000, 50);

    mouse = new Mouse(300, 320, 50 , 50);
    lava = new Lava(displayWidth/2, 670, 1400, 70);
    invi = new invis();
    floor = new Ground(displayWidth/2, 610, 1400, 35);
    ball = new Ball(displayWidth/2, 350, 55);
    enemy1 = new enemy();
    slingshot = new SlingShot(mouse.body, ball.body);



}

function draw() {
    background("black");
    // drawSprites();
    Engine.update(engine);
    lava.display();
    floor.display();
    ball.display();
    enemy1.display();
    // slingshot.show();
    mouse.display();


//     fill("black");
//     stroke("blue");
//     strokeWeight(4);
//     textSize(30);
//     text("Use A, D, W and S or UP, DOWN, RIGHT and LEFT keys to throw the freaking waste in the bin !!", 30, 60);
//     text("Press S to start the game", 100, 100)



//     paperBall.display();

//     floor.display();

//     bin.display();

//     // bin2.display();
//     // bin3.display();
    
//     
}

// }


// function keyPressed(){
//     if (keyCode == 68 || keyCode == 39) {
//         Body.applyForce(ball.body, ball.body.position, {x:800, y:0});
//     }
    // if (keyCode == 65 || keyCode == 37) {
    //     // Body.applyForce(ball.body, ball.body.position, {x:-800, y:0});'
    //     // ball.body.position = mouseX;
    //     slingshot.attach(ball.body)
    // }
    // if (keyCode == 87 || keyCode == 38) {
    //     slingshot.fly();
    // }
    // if (keyCode == 40) {
    //     Body.applyForce(ball.body, ball.body.position, {x:0, y:800});
    // }
    // if (keyCode == 83 ){
        // slingshot = new SlingShot(mouse.body, ball.body);
    // }
// }
function mouseDragged(){
    if (gamestate== "on sling" ){
    Body.setPosition(ball.body, {x:mouseX, y:mouseY});
    }
    if (gamestate == "launched"){
        slingshot.attach(ball.body)
        Body.setPosition(mouse.body, {x:mouseX, y:mouseY});
        gamestate = "on sling";
    }
}

function mouseReleased(){
    if (gamestate == "on sling")
    slingshot.fly();
    gamestate = "launched";
}



