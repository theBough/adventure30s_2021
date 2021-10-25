let enemyXspeed = 3;
let enemyYspeed = 3;

function Enemy(x,y,w,h,col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.show = true;
  
  this.display = function(){
    if( room == 2){
      fill(col);
      rect(this.x, this.y, this.w, this.h); 
    }
       
  }//end display
  
  this.update = function(){
    this.x += enemyXspeed;
    this.y += enemyYspeed;
    if(this.x > p.x){
      enemyXspeed = -3;
    }else{
      enemyXspeed = 3;
    }
    if(this.y > p.y){
      enemyYspeed = -3;
    }else{
      enemyYspeed = 3;
    }
   
  }//end update
}//end player
