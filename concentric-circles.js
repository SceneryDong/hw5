function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 20; i <= 390; i = i + 10) {
    noFill()
    ellipse(200,200,i);
  }
}
