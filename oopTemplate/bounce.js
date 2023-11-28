class BounceBall {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 3;
    this.xSpd = random(-2,2);
    this.ySpd = random(-2,2);
    this.color = color(255);
  }

  changeSize(size){
    this.dia = size;
  }

  changeColor(r,g,b){
    this.color = color(r,g,b);
  }

  move(){
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
    
  slowDown(){
    this.xSpd *= 0.995
    this.ySpd *= 0.995
  }

  speedUp(){
    this.xSpd *= 1.05
    this.ySpd *= 1.05
  }

  collisionDetect(other){
    this.color=color(255)
    let d = dist(this.x,this.y,other.x,other.y);
    if(d<this.dia/2+other.dia/2){
      this.color = color(255,0,0)
    }
  }
  
  link(allObejcts){
    this.color=color(255);
    for (let i=0; i<allObejcts.length; i++){
      let p = allObejcts[i];
      if (p != this){
        let d = dist(this.x,this.y,p.x,p.y);
        let maxlength=200;
        let alpha=map(d,0,maxlength,255,0)
        if(d<maxlength){
          stroke(255,alpha);
          line(this.x,this.y,p.x,p.y);

        }
      }
      
    }
  }

  bounce(){
    if (this.x > width || this.x < 0){
      this.xSpd = -this.xSpd;
    }

    if (this.y>height || this.y < 0) {
      this.ySpd = -this.ySpd;
    }
  }

  attractTo(targetX,targetY){
    let accelX = (targetX-this.x) * 0.05;
    let accelY = (targetY-this.y) * 0.05;

  }

  
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    fill(this.color);
    circle(0, 0, this.dia);
    pop();
  }

}
