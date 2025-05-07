let container = document.getElementById("processing");
function setup() {

    let cnv = createCanvas(container.offsetWidth, container.offsetHeight);
    cnv.parent("processing");

}


function draw() {
    background(34, 34, 34);
    fill(255);
    stroke(255);
    textSize(64);
    text("ear", random(width), random(height));
}


function windowResized() {
    resizeCanvas(container.clientWidth, container.clientHeight);
}

window.onload = function() {
    if (parent) {
        var oHead = document.getElementsByTagName("head")[0];
        var arrStyleSheets = parent.document.getElementsByTagName("style");
        for (var i = 0; i < arrStyleSheets.length; i++)
            oHead.appendChild(arrStyleSheets[i].cloneNode(true));
    }
}