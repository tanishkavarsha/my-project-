var happyplant, happyplantImg, sadplant, sadplantImg;
var ground, invisibleGround, groundImage;


var  plasticbottle, plasticbottleImg;
var banana, bananaImg;

var score;

function preload(){
  groundImage= loadImage("ground.png");
  happyplantImg = loadImage("Happy plant.png");
  sadplantImg = loadImage("sad plant.png");
  bananaImg = loadImage("banana.png");
  plasticbottleImg = loadImage("wow.png");
  }

  function setup(){
    createCanvas(700,400);

ground=createSprite(200,200);
ground.addImage(groundImage);
ground.velocityX = 4;
happyplant=createSprite(600,200)
happyplant.addImage(happyplantImg)
happyplant.scale=0.3
  }

  function draw(){
    if(ground.x > 400 ){
      ground.x = height/2;
    }
    if(keyDown("space")&& happyplant.y > 50){
      happyplant.velocityY = -12
    }
    bottlo()
    banaos() 
    
    

    invisibleGround = createSprite(200,300,1000,10);
  invisibleGround.visible = false;
   
  happyplant.velocityY = happyplant.velocityY + 0.8

  happyplant.collide(invisibleGround);

  var select_sprites = Math.round(random(1,3));
if (frameCount % 80 ==0 ) {
if (select_sprites == 1){
  banaos();
}
else if (select_sprites == 2){
  bottlo();
}
}
    drawSprites();
  }

  function banaos() {
    var banana = createSprite(0,Math.round(random(20, 370)), 10, 10);
    banana.addImage(bananaImg);
    banana.velocityX = 3;
    banana.lifetime = 150;
    banana.scale = 1
   }
  
   function bottlo() {
    var bottles = createSprite(0,Math.round(random(20, 370)), 10, 10);
    bottles.addImage(plasticbottleImg);
    bottles.velocityX = 3;
    bottles.lifetime = 150;
    bottles.scale = 0.1
   }
  
  