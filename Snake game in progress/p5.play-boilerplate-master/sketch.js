function setup() {
  createCanvas(800,400);
  //create the snake and food. Add array later too

  //Bodies = [];
  food = createSprite(random(3, 797), random(3, 397), 40, 40);
  food.shapeColor="red";
  snake = createSprite(200, 200, 45, 45);
  snake.shapeColor="green";
  //set gameMode and score.Add reset function also
  score = 0;
  gameMode = "PLAY";

  //create edges of the area
  topedge = createSprite(400, 0, 800, 20);
  bottomedge= createSprite(400, 400, 800, 20);
  leftedge= createSprite(0, 200, 20, 400);
  rightedge= createSprite(800, 200, 20, 400);
}

function draw() {
  background("white");

// move the snake. Make as smooth as possible
  if(keyCode == 39) {
    snake.velocityX = 5;
    snake.velocityY = 0;
  }
  if(keyCode == 37) {
    snake.velocityX = -5;
    snake.velocityY = 0;
  }
  if(keyCode == 38) {
    snake.velocityY = - 5;
    snake.velocityX = 0;
  }
  if(keyCode == 40) {
    snake.velocityY = 5;
    snake.velocityX = 0;
  }

  //call the functions
  isTouching(snake, food);
  collide(snake, topedge);
  collide(snake, bottomedge);
  collide(snake, leftedge);
  collide(snake, rightedge);

  // check the gamemode and add score
  if(gameMode == "PLAY") {
  text("Your Score is "+ score, 400, 100);
  }

  drawSprites();
}
//touch the food and send the food to random location
function isTouching(obj1, obj2) {
  if (obj2.x-obj1.x < obj1.width/2 + obj2.width/2
    && obj1.x-obj2.x < obj1.width/2 + obj2.width/2 
    && obj2.y-obj1.y < obj1.height/2 + obj2.height/2 
    && obj1.y-obj2.y < obj1.height/2 + obj2.height/2 ) {
    obj2.x = random(1, 800);
    obj2.y = random(1, 400);
    score = score + 1;
    //add array increase for snake body here also
  } 
}
//collide with the edges
function collide(obj1, obj2) {
  if (obj1.x - obj2.x < obj1.width/2 + obj2.width/2 
    && obj2.x - obj1.x < obj1.width/2 + obj2.width/2 
    && obj1.y - obj2.y < obj1.height/2 + obj2.height/2 
    && obj2.y - obj1.y < obj1.height/2 + obj2.height/2) {
    obj1.velocityX = 0;
    obj1.velocityY = 0;
    gameMode = "LOSE";
    text("YOU LOSE!!", 400, 100);
    score = 0;
  }
}
