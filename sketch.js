let p;
let w =[];
function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,"red");
  w.push(new Wall(0,0,400,10,"green"));
  w.push(new Wall(0,390,400,10,"green"))
}

function draw() {
  background(0);
  p.display();
  p.update();
  for(i=0 ; i < w.length ; i++){
    w[i].display();  
  }//end loop
  
  
}
