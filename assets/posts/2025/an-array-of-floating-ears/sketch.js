function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(34, 34, 34, 30);
    fill(255);
    stroke(255);
    textSize(64);
    text('ear', random(width), random(height));
}