function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  angleMode(DEGREES)
  rectMode(CENTER)
}

let Xrotation = 0
let Yrotation=0
let Zrotation = 0
let movement = false
let stop = true

function draw() {
  orbitControl();
  rotateX(Xrotation)
  rotateY(Yrotation)
  rotateZ(Zrotation)
  if (key == "p" && keyIsPressed) {
    if (stop) {
      stop = false
    } else {
      stop = true
    }
  }

  if (key == "p" && movement == false){
    movement = true
  }

  if (movement == true && keyIsPressed && stop == false) {
    movement = false

  }
  // if(movement == false && key == 'p'){
  //   movement = true
  // }

  if (movement == true && stop == false) {
    roll()
  }

  background("black");
  //drawStrivePlane(min(width, height)/2-50, 200, 100, 150)
  push()
  translate(0,0,100)
  square(0,0,200)
  translate(0,0,1)
  fill("red")
  circle(0,0,40)
  pop()
  push()
  translate(0,0,-100)
  square(0,0,200)
  translate(0,0,-1)
  fill("red")
  circle(0,40,40)
  circle(0,-40,40)
  pop()

  push()
  rotateX(90)
  translate(0,0,100)
  square(0,0,200)
  translate(0,0,1)
  fill('red')
  circle(-40,40,40)
  circle(0,0,40)
  circle(40,-40,40)
  pop()

  push()
  rotateX(90)
  translate(0,0,-100)
  square(0,0,200)
  fill('red')
  translate(0,0,-1)
  circle(-40,40,40)
  circle(-40,-40,40)
  circle(40,40,40)
  circle(40,-40,40)
  pop()


  push()
  rotateY(90)
  translate(0,0,100)
  square(0,0,200)
    fill('red')
  translate(0,0,1)
  circle(-40,40,40)
  circle(-40,-40,40)
  circle(40,40,40)
  circle(40,-40,40)
  circle(0,0,40)
  pop()
  push()
  rotateY(90)
  translate(0,0,-100)
  square(0,0,200)
  fill('red')
  translate(0,0,-1)
  circle(-50,50,40)
  circle(-50,-50,40)
  circle(50,50,40)
  circle(50,-50,40)
  circle(0,50,40)
  circle(0,-50,40)
  pop()
  //rotateX, rotateY, rotateZ
}





function drawStrivePlane(size, red, green, blue) {
    push();
    stroke(red, green, blue);
    drawOrigin(10);

    stroke(255);
    strokeWeight(2);
    fill(red, green, blue);
    drawXAxis(size, size / 30);
    drawYAxis(size, size / 30);
    drawZAxis(size, size / 30);

    fill(red, green, blue, 35);
    noStroke();
    plane(2 * size, 2 * size);
    rotateX(90);
    plane(2 * size, 2 * size);
    rotateY(90);
    plane(2 * size, 2 * size);
    pop();
  }

  function drawOrigin(size) {
    strokeWeight(size);
    point(0, 0, 0);
  }

  function drawZAxis(length, size) {
    //highlight 3rd point
    line(0, 0, 0, 0, 0, length);

    push();
    translate(0, 0, length);
    textSize(20);
    rotateX(90);
    noStroke();
    cone(size, 2 * size);
    pop();
  }

  function drawYAxis(length, size) {
    line(0, 0, 0, 0, length, 0);

    push();
    translate(0, length, 0);
    noStroke();
    cone(size, 2 * size);
    pop();
  }

  function drawXAxis(length, size) {
    line(0, 0, 0, length, 0, 0);

    push();
    translate(length, 0, 0);
    rotateZ(-90);
    noStroke();
    cone(size, 2 * size);
    pop();
  }

function roll(){
  sX = random(0,360)
  sY = random(0,360)
  sZ = random(0,360)

  Xrotation -= sX
  Yrotation -= sZ
  Zrotation -= sZ
}
