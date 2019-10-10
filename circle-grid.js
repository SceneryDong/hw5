function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  for (var i = 20; i < 400; i = i + 20) {
    ellipse(i,20,15);
    for (var t=20; t<400; t=t+20){
      ellipse (i, t, 15)
    }
  }
}
