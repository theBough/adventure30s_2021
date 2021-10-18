let p;
let w = [];
let room = 1;
function setup() {
  createCanvas(400, 400);
  p = new Player(200, 200, 10, 10, "red");
  roomOne();
}
function draw() {
  background(0);
  p.display();
  p.update();
  for (i = 0; i < w.length; i++) {
    w[i].display();
  } //end loop
  checkChangeScreen();
}
function checkChangeScreen(){
  if(p.x + p.w > width){
    p.x = 0;
    whereTo("r");
  }
}

function whereTo(whatDirection) {
  w = [];
  if (room == 1) {
    switch (whatDirection) {
      case "u":
        
        break;
      case "d":
        
        break;
      case "l":
        
        break;
      case "r":
        roomTwo();
        break;
    } //end switch
  } //end if
} //end whereTo
