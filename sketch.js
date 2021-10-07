//global variable
var box;

function setup() {
  createCanvas(600, 400);

  box = createSprite(290, 150, 40, 100);
}

function draw() {
  background(220);

  drawSprites();
}