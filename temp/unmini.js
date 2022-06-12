let colour_options = [
    {n: "Rainbow", c: ["#750787", "#004dff", "#008024", "#ffec08", "#ff8c00", "#e40204"]},
    {n: "Progress", c: ["#5bcefb", "#f5a9b8", "#ffffff", "#7a00ab", "#ffd900", "#232323", "#905304", "#750787", "#004dff", "#008024", "#ffec08", "#ff8c00", "#e40204"]},
    {n: "Lesbian", c: ["#a20162", "#d161a3", "#ffffff", "#fd9856", "#d42c00"]},
    {n: "Gay", c: ["#01a4d5", "#54b9ff", "#ffffff", "#62d391", "#01a242"]},
    {n: "Bi", c: ["#ce026d", "#954d90", "#0036a3"]},
    {n: "Trans", c: ["#5bcefb", "#f5a9b8", "#ffffff"]},
    {n: "Aromantic", c: ["#232323", "#aaaaaa", "#ffffff", "#a8d47a", "#3ca63f"]},
    {n: "Asexual", c: ["#810181", "#ffffff", "#a4a4a4", "#232323"]},
    {n: "Intersex", c: ["#7a00ab", "#ffd900"]},
    {n: "Non-binary", c: ["#2c2c2c", "#9c59d1", "#fcfcfc", "#fdf435"]},
    {n: "Pansexual", c: ["#1bb3ff", "#ffd900", "#ff1b8e"]},
    {n: "Agender", c: ["#baf585", "#bbbbbb", "#232323", "#ffffff"]},
    {n: "Bigender", c: ["#c57aa4", "#eda7ce", "#d5c8e8", "ffffff", "#9bc8e9", "#6d83d3"]},
    {n: "Demisexual", c: ["#232323", "#6f0072", "#d3d3d3", "#ffffff"]},
    {n: "Genderfluid", c: ["#303bbe", "#282828", "#c012d7", "#f5f5f5", "#ff76a4"]},
    {n: "Genderqueer", c: ["#48821d", "#ffffff", "#b67fdd"]},
    {n: "Polysexual", c: ["#1c8eee", "#09ce66", "#ee1cb2"]},
    {n: "Omnisexual", c: ["#869df1", "#6159f3", "#230044", "#f250b6", "#f294c3"]},
    {n: "Demiromantic", c: ["#232323", "#f2f2f2", "#d3d3d3", "#369d3f"]},
    {n: "Aro-ace", c: ["#1e3553", "#5ca6d3", "#f2f2f2", "#e0c204", "#d88503"]},
    {n: "Abrosexual", c: ["#ce4068", "#db8ead", "#f2f2f3", "#a9d8be", "#6dc088"]},
    {n: "Demigirl", c: ["#ffffff", "#ffadca", "#c2c3c2", "#7f7f80"]},
    {n: "Demiboy", c: ["#98d9e9", "#ffffff", "#c2c3c2", "#7f7f80"]},
    {n: "Deminonbinary", c: ["#eef26d", "#ffffff", "#c2c3c2", "#7f7f80"]},
    {n: "Pangender", c: ["#feffff", "#feebfc", "#fdddcd", "#fef799"]},
    {n: "Trigender", c: ["#67d968", "#9581ff", "#fd95c4"]},
    {n: "RAIIIIINBOWWWWW", c: ["#ffffff"]}
];

let colour;
let grid_size_options = [8, 10, 12, 18, 30];
let grid_size = 10;
let max_cell_height = 2;
let max_cell_width = 8;
let max_cell_aspect = 3;

let capture_time;
let not_captured = true;


let grid_bools = [];
let grid_cell_order = [];
let cells = [];

let my_shader;
let pg;

let info_showing = false;

// let capturer;

// let capture = true;

function preload() {
    my_shader = loadShader("shader.vert", "shader.frag");
}

function setup() {
    createCanvas(windowHeight, windowHeight, WEBGL);
    //createCanvas(1080, 1080, WEBGL);
    //pixelDensity(2);
    pg = createGraphics(4320, 4320);
    pg.pixelDensity(1);
    pg.noStroke();
    init_values();
    init_cells();

    // capturer = new CCapture( { format: "png" } );
    //capturer.start();
}

function windowResized() {
    resizeCanvas(windowHeight, windowHeight);
}

function doubleClicked() {
    if (info_showing) {
        info_showing = false;
        document.getElementById("info").style.visibility = "hidden";
    } else {
        info_showing = true;
        document.getElementById("info").style.visibility = "visible";
    }
}

const shuffle_arr = (array) => {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(fxrand() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}

const init_values = () => {
    grid_size = grid_size_options[floor(fxrand() * grid_size_options.length)];
    max_cell_height = ceil(fxrand() * grid_size * 0.75) + 1;
    max_cell_width = ceil(fxrand() * grid_size * 0.25) + 1;
    max_cell_aspect = 1 + 0.25 * floor(fxrand() * 16);
    capture_time = floor(fxrand() * 4000);
    if (fxrand() < 0.01) {
        colour = colour_options.length - 1;
    } else if (fxrand() < 0.7) {
        colour = floor(fxrand() * (colour_options.length - 1))
    } else {
        colour = floor(fxrand() * 2);
    }

    window.$fxhashFeatures = {
        "Flag": colour_options[colour].n,
    }

    document.getElementById("title").innerHTML = colour_options[colour].n;
    document.getElementById("flag").src = "flags/" + colour_options[colour].n + ".svg";
    //document.getElementById("desc").innerHTML = pride_info[colour].i;
}

const init_cells = () => {
    grid_bools = [];
    grid_cell_order = [];
    cells = [];

    for (let i = 0; i < grid_size; i++) {
        grid_bools[i] = [];
        for (let j = 0; j < grid_size; j++) {
            grid_bools[i][j] = false;
            grid_cell_order.push([i, j]);
        }
    }
    grid_cell_order = shuffle_arr(grid_cell_order);

    for (let i = 0; i < grid_size * grid_size; i++) {
        let x = grid_cell_order[i][0];
        let y = grid_cell_order[i][1];

        if (grid_bools[x][y] == true) { continue; } // if already occupied, skip

        let cell_height = 1;
        for (j = y + 1; j < constrain(y + max_cell_height, y, grid_size); j++) { // scanning down 
            if (grid_bools[x][j] == true) { break; }
            cell_height ++;
        }

        let cell_width = 1;
        for (let j = x + 1; j < constrain(x + max_cell_width, x, grid_size); j++) { // scanning right
            if (((j - x + 1) / cell_height) > max_cell_aspect) { break; }
            let clear = true;
            for (let k = y; k < y + cell_height; k++) { //  scanning down
                if (grid_bools[j][k] == true) {
                    clear = false;
                    break;
                }
            }
            if (clear == false) { break; }

            cell_width ++;
        }

        for (let j = x; j < x + cell_width; j++) { // setting all cells to occupied
            for (let k = y; k < y + cell_height; k++) {
                grid_bools[j][k] = true;
            }
        }

        cells.push({
            x: x, 
            y: y, 
            w: cell_width, 
            h: cell_height,
            c: color(colour_options[colour].c[floor(fxrand() * colour_options[colour].c.length)]),
        });
    }

    // let choices = [];
    // for (let i = 0; i < cells.length; i++) {
    //     choices[i] = i;
    // }
    // let num_cells_fill = cells.length;//constrain(floor(cells.length / 2), 1, cells.length);

    // for (let i = 0; i < num_cells_fill; i++) {
    //     let ran_index = floor(fxrand() * choices.length);
    //     cells[choices[ran_index]].c = color(colour_options[colour].c[floor(fxrand() * colour_options[colour].c.length)]);
    //     choices.splice(ran_index, 1);
    // }

}

function keyPressed() {
    if (keyCode == "73") {
        let str = ""
        str += colour_options[colour].n + " Flag";
        str += "\n💙💜💛💚🧡🤎🤍";
        str += "\nCreated by Ally Radomski";
        str += "\nallyradomski.art";
        str += "\n---------";
        str += "\nMade with p5js ❤️";
        alert(str);
    }
    return false;
}

function draw() {
    // if (frameCount == 1 && capture) {
    //     capturer.start();
    // }
    pg.background(0);
    let t = frameCount / 240.0;
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        
        let b = (pg.sin((t + (cell.x + cell.w / 2.0) / float(grid_size)) * pg.TWO_PI) + 1) / 2.0 * 40 + 20;
        let square_size = (pg.height - b * 2) / grid_size;

        let x = round(cell.x * square_size) + b;
        let y = round(cell.y * square_size) + b;
        let w = round(cell.w * square_size);
        let h = round(cell.h * square_size);

        pg.fill(cell.c);
        //draw_rect(x + b, y + b, w - b * 2, h - b * 2, c);
        pg.rect(x + b, y + b, w - b * 2, h - b * 2);
    }

    if (colour_options[colour].n == "RAIIIIINBOWWWWW") {
        my_shader.setUniform("u_gay", true);
    } else {
        my_shader.setUniform("u_gay", false);
    }
    my_shader.setUniform("u_texture", pg);
    my_shader.setUniform("u_resolution", [height * displayDensity(), height * displayDensity()]);
    my_shader.setUniform("u_time", millis() / 4000.0);

    shader(my_shader);
    fill(0);
    translate(-height * 0.5, -height * 0.5);
    rect(0, 0, height, height);
    // background(200);
    //image(pg, 0, 0, width, height);
    // fill(200);
    // square(0, 0, 100)
    //save(pg);
    //noLoop();
    if (not_captured && millis() >= capture_time) {
        fxpreview();
        not_captured = false;
    }

    // if (capture) {
    //     if (frameCount > 241*2*2) {
    //         capturer.stop();
    //         capturer.save();
    //         noLoop();
    //     } else {
    //         capturer.capture(canvas);
    //     }
    // }
}

