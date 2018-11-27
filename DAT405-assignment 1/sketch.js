var angle;
var pos;
var squareSize;
var tWidth = 600;
var tHeight = 900;
var canvas;
var colours = ['orchid','orange', 'yellow', 'black','purple','red', 'blue', 'green']
var i = 0;

function setup() {
  squareSize = random(10, 100);
  canvas = createCanvas(tWidth, tHeight);
  canvas.parent('myContainer');
  angle = 0;
  pos = p5.Vector.fromAngle(0);
  setRadius();
}

//Sets radius dynamically according to the width of the canvas
function setRadius() {
  var m = min(tWidth, tHeight);
  var radius = m/2-squareSize*0.6;
  pos.setMag(radius);
}

//Draws the individual rectangles
function drawRect(pos) {
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  rect(-squareSize/2, -squareSize/2, squareSize, squareSize);
  pop();
}

//Draws the 5 squares with the selected colour in the array and positions in the center
function draw() {
  translate(tWidth/2, tHeight/2);
  fill(colours[i]);
  drawRect(p5.Vector.mult(pos.rotate(TWO_PI/5), sin(angle)));
  drawRect(p5.Vector.mult(pos.rotate(TWO_PI/5), sin(angle)));
  drawRect(p5.Vector.mult(pos.rotate(TWO_PI/5), sin(angle)));
  drawRect(p5.Vector.mult(pos.rotate(TWO_PI/5), sin(angle)));
  drawRect(p5.Vector.mult(pos.rotate(TWO_PI/5), sin(angle)));

//Maps the mouse movement in the x axes to be the angle value
  angle += map(mouseX, 0, width, 0.025, 0.1);

  pos.rotate(sin(angle)/40);
}

//Previous colour in the array
function prevItem() {
  if (i === 0) {
    i = colours.length;
  }
  i = i - 1;
  return colours[i];
}

//When the the left and right arrow keys are pressed it moves to the next colour
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    prevItem();
  }
  if (keyCode === RIGHT_ARROW) {
    nextItem();
  }
}

//Clears the canvas when mouse is pressed
function mousePressed() {

    clear();
  }

  //Next colour in the array
function nextItem() {
    i = i + 1;
    i = i % colours.length;
    return colours[i];
  }
