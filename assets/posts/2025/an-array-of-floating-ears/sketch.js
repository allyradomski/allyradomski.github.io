const numCols = 36;
let numRows;

let container = document.getElementById("processing");
function setup() {
    
    let cnv = createCanvas(container.offsetWidth, container.offsetHeight);

    numRows = (container.offsetHeight / container.offsetWidth) * numCols;

    cnv.parent("processing");
    noiseSeed(1234);
}


function draw() {
    background(34, 34, 34);
    // fill(255);
    // stroke(255);
    // textSize(64);
    // text("ear", random(width), random(height));

    fill(255);
    noStroke();
    rectMode(CENTER);
    let maxWidth = (width / numCols);
    for (let i = 0; i < numCols; i++) {
        for (let j = 0; j < numRows; j++) {
            let blipChoice = noise(map(i, 0, numCols, 0, 1) * 10, map(j, 0, numRows, 0, 1) * 10, millis() * 0.00001);
            if (blipChoice > 0.5 && blipChoice < 0.505) {
                noFill();
                stroke(255, sin(map(blipChoice, 0.5, 0.505, 0, Math.PI)) * 255);
                circle(map(i + 0.5, 0, numCols, 0, width), map(j + 0.5, 0, numRows, 0, height), maxWidth * 0.5);
                continue;
            }
            fill(255);
            noStroke();
            let visible = noise(map(i, 0, numCols, 0, 1) * 3, map(j, 0, numRows, 0, 1) * 3, 2525252525);
            if (visible < 0.6) continue;
            let shapeChoice = noise(map(i, 0, numCols, 0, 1) * 3, map(j, 0, numRows, 0, 1) * 3, 999999);
            

            let val = noise(
                map(i, 0, numCols, 0, 1) * 3,
                map(j, 0, numRows, 0, 1) * 3,
                millis() * 0.0005,
            )


            if (shapeChoice < 0.5) {
                square(map(i + 0.5, 0, numCols, 0, width), map(j + 0.5, 0, numRows, 0, height), maxWidth * val);
            } else {
                circle(map(i + 0.5, 0, numCols, 0, width), map(j + 0.5, 0, numRows, 0, height), maxWidth * val);
            }
            //square(map(i + 0.5, 0, numCols, 0, width), map(j + 0.5, 0, numRows, 0, height), maxWidth * val);
            
        }
    }
}

function windowResized() {
    resizeCanvas(container.clientWidth, container.clientHeight);
}

// window.onload = function() {
//     if (parent) {
//         var oHead = document.getElementsByTagName("head")[0];
//         var arrStyleSheets = parent.document.getElementsByTagName("style");
//         for (var i = 0; i < arrStyleSheets.length; i++)
//             oHead.appendChild(arrStyleSheets[i].cloneNode(true));
//     }
// }