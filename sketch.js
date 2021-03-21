//Create variables here
var dog, happydog;
var database;
var foodS;
var foodStock;

function preload()
{
  DogImg1 = loadImage("Dog.png");
  DogImg2 = loadImage("happydog.png");
}

function setup() {
  createCanvas(800, 550);

  database = firebase.database();
  
  Dog = createSprite(475,250,50,50);
  Dog.addImage(DogImg1);
  Dog.scale = 0.2;
  
  foodStock = database.ref("food");
  foodStock.on("value",readStock);

}


function draw() {
  background("magenta");
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    Dog.addImage(happydog.png)
  }

  drawSprites();
  fill("purple");
  noStroke();
  textSize(30);
  text("food Remaining: " + foodS,50,265);
  //add styles here

  textSize(40);
  text("Press up arrow to feed the Dog",100,405);

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  } else {
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}