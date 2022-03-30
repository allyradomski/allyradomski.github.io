// const LAT = 27.54115;
// const LON = 30.861591;
//const WEATHERID = "61ebd99f83498da4353dbbfbb0e081f9";
const MAPID = "8O69TZ38bBaGeARwj3meqnCgyVRcRmlvYP5O0aDcNN8";
let lat = 53.005742;
let lon = -1.294706;
//let weatherURL;
let mapURL;

let effectShader;
let errorShader;

//let locationData;

let currentTime = 12000;
let lastTime = 0;
let loopCount = 0;
let lastLoop = -1;

let timeSinceStart = 0;
let startTime = 0;

let connection = false;
let loopConnection = false;

let mapImage = [];

let font;
//let weatherData = [];

// Sounds
// let noise;
// let noiseEnv;
// let osc;
// let oscEnv;
// let player;

let time;
let kick;
let decay;
let decayCount = 12;
let sub;

function handleTime() {
  timeSinceStart = millis() - startTime;
  loopCount = floor(timeSinceStart / 12000);
}

function preload() {
  effectShader = loadShader("shaders/shader.vert", "shaders/shader.frag");
  errorShader = loadShader("shaders/error.vert", "shaders/error.frag");
  startTime = millis();

  font = loadFont("font.ttf");
  //locationData = loadStrings("locations.txt");

  //updateData();

}

function updateData() {
  // Random Lat and Lon from text file (https://api.3geonames.org/randomland.UK.json)
  // let locationArr = split(locationData[floor(random(locationData.length))], ",");
  // lat = locationArr[0];
  // lon = locationArr[1];

  // API Urls
  let ran = 0;//random(-1, 1);
  lat = random(54.880546, 55.075594);
  lon = random(-1.747448, -1.421657);
  //weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + str(lat + ran) + "&lon=" + str(lon + ran) + "&appid=" + WEATHERID + "&units=metric";
  mapURL = "https://image.maps.ls.hereapi.com/mia/1.6/mapview?c=" + str(lat + ran) + "%2C" + str(lon + ran) + "&t=1&w=720&h=445&z=" + int(15) + "&apiKey=" + MAPID + "&nodot";

  // httpGet(weatherURL, 'json', false, result => {
  //   weatherData[1] = result;
  //   connection = true;
  // }, result => {
  //   connection = false; // Failed to get data
  // });

  mapImage[1] = loadImage(mapURL, result => {
    mapImage[0] = mapImage[1].get(0, 0, 720, 405); // Cropping text from bottom
    connection = true;
  }, result => {
    connection = false; // Failed to get data
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  document.body.style.overflow = "hidden";
  pixelDensity(1);

  const gl = canvas.getContext('webgl');
  gl.disable(gl.DEPTH_TEST);

  frameRate(60);
  strokeWeight(16);

  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(height / 16);
  fill(255, 0, 0);

  Tone.Transport.bpm.value = 120;


  // Initalise Sounds
  kick = new Tone.Sampler({
  	urls: {
  		A4: "kick.wav",
  	},
  	baseUrl: "sounds/"
  }).toDestination();
  decay = new Tone.Sampler({
  	urls: {
  		A4: "decay.wav",
  	},
  	baseUrl: "sounds/"
  }).toDestination();
  sub = new Tone.Sampler({
    urls: {
      A4: "sub.wav",
    },
    baseUrl: "sounds/"
  }).toDestination();

  Tone.Transport.scheduleRepeat(time => {
    if (loopConnection == true) {
      kick.triggerAttackRelease(noise(time * 0.1) * 100 + 200, 2);
    }
    //kick.triggerAttackRelease(noise(time * 0.1) * 100 + 200, 2);
  }, 2);
}

function draw() {
  handleTime();
  translate(-width / 2, -height / 2);

  let u_time = (timeSinceStart % 12000 / 12000);

  effectShader.setUniform("u_time", u_time);
  effectShader.setUniform("u_resolution", [width, height]);
  effectShader.setUniform("u_add", random(1)); // Value to alter noise
  effectShader.setUniform("u_mirror", u_time);

  errorShader.setUniform("u_time", u_time);
  errorShader.setUniform("u_resolution", [width, height]);
  errorShader.setUniform("u_add", random(1)); // Value to alter noise


  if (lastLoop != loopCount) {
    lastLoop = loopCount;

    if (connection == true) {
      loopConnection = true;
      decay.triggerAttackRelease(noise(timeSinceStart * 0.001) * 100 + 320, 12);
      sub.triggerAttackRelease(noise(timeSinceStart * 0.001) * 100 + 320, 12);

      Tone.Transport.start();

      effectShader.setUniform("u_modulo", random(100));
      effectShader.setUniform("u_texture", mapImage[0]);
      print("bam");
      print(mapImage);

      //weatherData[0] = weatherData[1];
    } else {
      loopConnection = false;
    }

    updateData();
  }

  if (!loopConnection || mapImage[0] === undefined) {
    shader(errorShader);
    //print("??");
  } else {
    shader(effectShader);
  }
  fill(255);
  rect(0, 0, width, height);

  resetShader();
  fill(255);

  if (loopConnection == false || mapImage[0] === undefined) {
    text("no signal", width / 2, height / 2);
  }
  //rect(0, 0, width, height);

  //fill(255, 0, 0);

  //print(connection);
  //print(mapImage);

}
