function preload() {
  soundFormats("mp3");
  mySound = loadSound("hi.mp3");
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 400, 400, 400)

}
var x = 10
var ballSpeed = 2
var ballColor = 10
var rate = 1

function draw() {
  background(370, 0.1);
  noStroke()
  ballColor = x
  fill(ballColor, 400, 400)
  ellipse(x, 200, 30)
  x = x + ballSpeed

  if (x >= width) {
    ballSpeed = ballSpeed * -1
     mySound.play()
  }
  if (x <= 0) {
    ballSpeed = ballSpeed * -1
    mySound.pause()
  }
}
