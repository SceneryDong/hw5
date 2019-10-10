function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);
  for (var i = 5; i <= 390; i = i + 5) {
    line(i, 0, i, 2*i);
  }
}
