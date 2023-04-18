let c1;
let c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  c1 = new Circulo(width/2 - 50, height/2 - 50, 50);
  c2 = new Circulo(mouseX, mouseY, 50);

  stroke(0,0,255);
  c1.draw();
  stroke(255,0,0);
  c2.draw();

}