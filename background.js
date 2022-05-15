var id = "background";

var bubbles = [];
var bubbleSize = 0.1;

function setup() {
  let clientHeight = document.getElementById(id).clientHeight;
  let clientWidth = document.getElementById(id).clientWidth;
  var canvas = createCanvas(clientWidth, clientHeight);
  canvas.parent(id);
  frameRate(24);
  fill(200, 30);
  noStroke();
  
  for (i = 0; i < 20; i++) {
    bubbles.push([random(1), random(1), random(TWO_PI)]);
  }
}

function windowResized() {
  let clientHeight = document.getElementById(id).clientHeight;
  let clientWidth = document.getElementById(id).clientWidth;
  
  resizeCanvas(clientWidth, clientHeight);
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function draw() {
  clear();
  
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i][0] += 0.001 * sin(bubbles[i][2]);
    bubbles[i][1] += 0.001 * cos(bubbles[i][2]);
    bubbles[i][0] = mod(bubbles[i][0], 1);
    bubbles[i][1] = mod(bubbles[i][1], 1);
    
    if (bubbles[i][1] < bubbleSize * 0.5) {
      circle((bubbles[i][0]) * width, (bubbles[i][1] + 1) * height, width * bubbleSize);
    } else if (bubbles[i][1] > 1 - bubbleSize * 0.5) {
      circle((bubbles[i][0]) * width, (bubbles[i][1] - 1) * height, width * bubbleSize);
    } else if (bubbles[i][0] < bubbleSize * 0.5) {
      circle((bubbles[i][0] + 1) * width, (bubbles[i][1]) * height, width * bubbleSize);
    } else if (bubbles[i][0] > 1 - bubbleSize * 0.5) {
      circle((bubbles[i][0] - 1) * width, (bubbles[i][1]) * height, width * bubbleSize);
    }
    circle((bubbles[i][0]) * width, (bubbles[i][1]) * height, width * bubbleSize);
  }
}
