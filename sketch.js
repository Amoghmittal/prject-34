//Create variables here
  var dog,happyDog,database,foodstock,foodS
var dogImg,happyDogImg








function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250)
  dog.addImage("dog",dogImg)
  dog.addImage("happydog",happyDogImg)
  dog.scale=0.3
database=firebase.database()
foodstock=database.ref("Food")
foodstock.on("value",readstock)

}

function draw() {  
background(46,139,87)
  drawSprites();

  if(keyWentDown(UP_ARROW)){
writestock(foodS)
dog.changeImage("happydog",happyDogImg)
  }
  //add styles here
textSize(20)
fill("white")
stroke("black")
text("food:"+foodS,200,100)
}

function readstock(data){
  foodS=data.val()
}


function writestock(x){
  if(x<=0){
    x=0;
}else{
  x=x-1
}
database.ref("/").update({
  Food:x
})
}
