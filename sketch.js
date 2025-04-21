//step 1. dclare an object;
let myCars = [];


function setup() {
  createCanvas(800,600);
  //for (let i = 0; i <50; i++){
  //  myCars[i] = new Car(color(random(255), random(0,255), random(0,255)), random(width),random(height), random(0,10), random(360), random(10));
//  }
}

function draw(){
  background(255); 
  for(let j = 0; j<myCars.length; j++){
  myCars[j].drive();
    myCars[j].display();
    myCars[j].flip();
}
}

function mousePressed(){
  let i = new
  Car(color(random(255), random(255), random(255)), mouseX,mouseY,1,random(360));
  myCars.push(i);
}