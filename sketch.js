var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

feed = createButton("FEED THE DOG")
feed.position(600,95)
feed.mousePressed(addFood)

addFoods = createButton("Add Food")
addFoods.position(715,95)
addFoods.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock
function readFoodstock(){
food

}

//function to update food stock 
function updateFoodstock(){
dog.addImage(happyDog);

if(foodObj.getFoodStock()<=0){
foodObj.updateFoodStock(foodObj.getFoodStock()*0);
}else{
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
}
}

//function to add food in stock
function addFood(){
foods ++ ;
database.ref('/')  .update({
  Food:foods
})

}



