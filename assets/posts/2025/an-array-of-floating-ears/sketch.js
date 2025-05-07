const numCols = 36;
let numRows;

let container = document.getElementById("processing");
function setup() {

    let cnv = createCanvas(container.offsetWidth, container.offsetHeight);

    numRows = (container.offsetHeight / container.offsetWidth) * numCols;

    cnv.parent("processing");

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
            let val1 = noise(map(i, 0, numCols, 0, 1) * 3, map(j, 0, numRows, 0, 1) * 3);

            let val = noise(
                map(i, 0, numCols, 0, 1) * 3,
                map(j, 0, numRows, 0, 1) * 3,
                millis() * 0.0005,
            )


            
            square(map(i + 0.5, 0, numCols, 0, width), map(j + 0.5, 0, numRows, 0, height), maxWidth * val);
            
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