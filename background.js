var id = "background";

function setup() {
  let clientHeight = document.getElementById(id).clientHeight;
  let clientWidth = document.getElementById(id).clientWidth;
  var canvas = createCanvas(clientWidth, clientHeight);
  canvas.parent(id);
  
  noFill();
}

function windowResized() {
  let clientHeight = document.getElementById(id).clientHeight;
  let clientWidth = document.getElementById(id).clientWidth;
  
  resizeCanvas(clientWidth, clientHeight);
}
function draw() {
  clear();
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY);
  //background(0, 200);
}
