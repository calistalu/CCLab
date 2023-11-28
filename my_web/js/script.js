let xPosition = 200;
let yPosition = 100;
let xSpeed = 5;
let ySpeed = 5;


function setup() {
  //creatCanvas will create a <canvas> element and insert it to the html file
  let canvas = createCanvas(400, 400); 
  // .id() function will assign an ID to the canvas element
  canvas.id('myp5');
  
  // .parent() function will find the existing element in html with id p5container, and then attach the canvas inside that element.
  canvas.parent('p5container');
}

function draw() {
  background(220);

  circle(xPosition, yPosition, 50);
  // linear motion. position = position + speed, for both x and y
  yPosition = yPosition + ySpeed;
  xPosition = xPosition + xSpeed;
  
 // bouncing ball 
  if(xPosition >width || xPosition <0 ){
    xSpeed = xSpeed * -1; //reverse direction 
    fill(random(255), random(255), random(255));
  }
  if(yPosition >height || yPosition <0){
    ySpeed = ySpeed * -1; //reverse direction 
    fill(random(255), random(255), random(255));
  }
  
  if(mouseIsPressed){
    xPosition = mouseX;
    yPosition = mouseY;
  }
  
}