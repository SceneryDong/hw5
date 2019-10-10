function setup() {
  createCanvas(560, 400);
}

function draw() {
  background(255);
  for (var i = 20; i <=80; i = i + 20) {
    noFill()
   rectMode(CENTER)
    rect(80,200,i,i)
    
    for (var t=80; t<500; t=t+100){
      rect(t,200,i,i)
    }
  }
}
