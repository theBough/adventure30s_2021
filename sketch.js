let p;
function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,"red");
}

function draw() {
  background(225);
  p.display();
  p.update();
  
}
