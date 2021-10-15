let speed = 5;

function Player(x,y,w,h,col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.show = true;
  
  this.display = function(){
    fill(col);
    rect(this.x, this.y, this.w, this.h);    
  }//end display
  
  this.update = function(){
    if(keyIsDown(RIGHT_ARROW)){
      this.x += speed;
    }
  }//end update
}//end player
