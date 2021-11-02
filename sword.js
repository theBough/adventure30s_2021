function Sword(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.show = true;
  
  this.display = function(){
    if(this.show){
      fill(200);
      rect(this.x, this.y, this.w, this.h);
    }//end if
  }//end display
}//end Sword
