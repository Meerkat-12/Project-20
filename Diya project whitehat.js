var tom, jerry, garden, tomMovingR, tomMovingL, jerryCaught, tomSitting, jerryMovingL, jerryMovingR;
function preload() {
    tom = loadImage("cat1.png") ;
    tomMovingR = loadImage("cat2.png");
    tomMovingL = loadImage("cat3.png");
    jerry = loadImage("mouse1.png");
    garden = loadImage("garden.png");
    jerryCaught = loadImage("mouse3.png");
    jerryMovingL = loadImage("mouse2.png");
    jerryMovingR = loadImage("mouse4.png");
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(200,200,20,20);
    tom.addImage("cat1.png");
    tom.scale = 0.03;

    jerry= createSprite(300,200,20,20);
    jerry.addImage("mouse1.png");
    jerry.scale = 0.03;

    tomMovingL = createSprite(200,200,20,20);
    tomMovingL.addImage("cat2.png");
    tomMovingL.scale = 0.03;
    
    tomMovingR = createSprite(200,200,20,20);
    tomMovingR.addImage("cat3.png");
    tomMovingR.scale = 0.03;

    jerryCaught = createSprite(300,200,20,20);
    jerryCaught.addImage("mouse3.png");
    jerryCaught.scale = 0.03;
    
    jerryMovingL = createSprite(300,200,20,20);
    jerryMovingL.addImage("mouse2.png");
    jerryMovingL.scale = 0.03;

    jerryMovingR = createSprite(300,200,20,20);
    jerryMovingR.addImage("mouse41.png");
    jerryMovingR.scale = 0.03;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown("Left_Arrow")){
        tomMovingL.addImage("cat2.png");
        tom.velocityX = -2;
    }

    if(keyDown("Right_Arrow"))
{
    tomMovingR.addImage("cat3.png");
    tomMovingR.velocityX = -2;
}   

    if(tom.isTouching(jerry)){
        jerryCaught.addImage("mouse3.png");
        tomSitting.addImage("cat4.png");
        tom.setVelocityX=0;
    }

    if(keyDown("up_arrow")){
        jerryMovingR.addImage("mouse4.png");
        jerryMovingR.velocityX = -2;

    }

    if(keyDown("down_arrow")){
        jerryMovingL.addImage("mouse2.png");
        jerryMovingL.velocityX=2;
    }

 drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
