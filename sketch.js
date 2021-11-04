let p;
let w = [];
let room = 1;
let e;
let s;
function setup() {
  createCanvas(400, 400);
  p = new Player(200, 200, 10, 10, "blue");
  e = new Enemy(200,200,30,30,"red");
  s = new Sword(300,300,10,2);
  roomOne();
}
function draw() {
  background(0);
  p.display();
  p.update();
  e.display();
  e.update();
  s.display();
  for (i = 0; i < w.length; i++) {
    w[i].display();
  } //end loop
  checkChangeScreen();
  checkForCollission();
}
function checkChangeScreen(){
  //this checks if we have gone off the screen to the right
  if(p.x + p.w > width){
    p.x = 0;
    whereTo("r");
  }
  
  //this checks if we have gone off to the left.
  if(p.x < 0){
    p.x = width - p.w;
    whereTo("l");
  }
  //this checks if we have gone off  the top.
  if(p.y < 0){
    p.y = height - p.h;
    whereTo("u");
  }
  //this checks if we have gone off  the bottom.
  if(p.y + p.h > height){
    p.y =0;
    whereTo("d");
  }
}

function whereTo(whatDirection) {
  w = [];
  if (room == 1) {
    switch (whatDirection) {
      case "u":
        roomThree();
        break;
      case "d":
        
        break;
      case "l":
        
        break;
      case "r":
        roomTwo();
        break;
    } //end switch
  } else if (room == 2) {
    switch (whatDirection) {
      case "u":
        
        break;
      case "d":
        
        break;
      case "l":
        roomOne();
        break;
      case "r":
       
        break;
    } //end switch
  }else if (room == 3) {
    switch (whatDirection) {
      case "u":
        
        break;
      case "d":
        roomOne();
        break;
      case "l":
        
        break;
      case "r":
        roomTwo();
        break;
    } //end switch
  } //end if
} //end whereTo

function checkForCollission() {
  for (var i = 0; i < w.length; i++) {

    //check if we hit the left of any wall
    if (p.y <= w[i].y + w[i].h && p.y + p.h >= w[i].y && p.x <= w[i].x + w[i].w && p.x >= w[i].x) {
      p.x += 5
    }

    //check if we hit the right of any wall
    if (p.y <= w[i].y + w[i].h && p.y + p.h >= w[i].y && p.x + p.w >= w[i].x && p.x <= w[i].x + w[i].w) {
      p.x -= 5
    }


    if (p.x <= w[i].x + w[i].w && p.x + p.w >= w[i].x && p.y <= w[i].y + w[i].h && p.y >= w[i].y) {
      p.y += 5;
    }

    //check if we hit the top of any wall
    if (p.x <= w[i].x + w[i].w && p.x + p.w >= w[i].x && p.y + p.h >= w[i].y && p.y <= w[i].y + w[i].h) {
      p.y -= 5;
    }

  }
}
