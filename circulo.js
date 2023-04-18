class Circulo{
  constructor(xC,yC,r){
      this.xC = xC;
      this.yC = yC;
      this.r = r;
  }

  draw() {
    let x = this.r;
    let y = 0;
    let dif = 0;
  
    while (x >= y) {
      point(this.xC + x, this.yC + y);
      point(this.xC + y, this.yC + x);
      point(this.xC - y, this.yC + x);
      point(this.xC - x, this.yC + y);
      point(this.xC - x, this.yC - y);
      point(this.xC - y, this.yC - x);
      point(this.xC + y, this.yC - x);
      point(this.xC + x, this.yC - y);
  
      if (dif <= 0) {
        y++;
        dif += 2 * y + 1;
      } else {
        x--;
        dif -= 2 * x + 1;
      }
    }
  }
}    