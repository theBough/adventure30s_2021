let haveSword = false;
function Sword(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.show = true;

  this.display = function () {
    if (this.show) {
      fill(200);
      rect(this.x, this.y, this.w, this.h);
      swordCollision();
    } //end if
  }; //end display

  function swordCollision() {
    if (
      p.y < s.y &&
      p.y + p.h > s.y + s.h &&
      p.x + p.w > s.x &&
      p.x + p.w < s.x + s.w &&
      !haveSword &&
      room == 1
    ) {
      haveSword = true;
    } //end if
    if (haveSword) {
      s.x = p.x + p.w;
      s.y = p.y + p.h / 2;
    }//end if
  }//end SwordCollision
} //end Sword
