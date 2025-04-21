class Car {
  constructor(tempC, tempXpos, tempYpos, tempXspeed, tempDegree) {
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos; 
    this.xspeed = tempXspeed;
    this.degree = tempDegree;
  }
  display(){
    push();
    stroke(0);
    fill(this.c);
    translate(this.xpos,this.ypos);
    rotate(radians(this.degree));
    rectMode(CENTER);
    rect(0,0,20,10);
    pop();
  }
  drive() {
    this.xpos = this.xpos + this.xspeed;
    if(this.xpos > height) {
      this.xpos = 0;
    }
  }
  flip(){
    this.degree++;
  }
}