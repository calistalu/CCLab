// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 30; // Decide the initial number of particles.

let particles = [];
let specialBall;

let button;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasWrapper");

  specialBall = new BounceBall(random(width), random(height));
  specialBall.changeColor(255,0,0);
  specialBall.changeSize(40);

  button = createButton('click me');
  button.position(0,0);
  button.mousePressed(changeStyle);

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new BounceBall(random(width), random(height));
  }
}

function draw() {
  background(50);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.bounce();
    p.display();
    p.slowDown();
    if (mouseIsPressed){
      p.speedUp();
    }
    p.collisionDetect(particles)
    p.link(particles)
  }


  specialBall.move();
  specialBall.bounce();
  specialBall.display();  
  specialBall.changeColor(255,255,0);
  specialBall.changeSize(35)
}

function changeStyle(){
  for (let i=0; i<particles.length; i++){
    let p=particles[i];
    p.link(particles)
  }
}


