---
year: 4
title: Exploration into an idea
description: Semester 1 / Week 10 - 11
assetdir: /assets/studio/explorationkinect
cover: /assets/studio/explorationkinect/cover.jpg
---

I have been exploring into the idea of having a "living room" that reacts to human movement within it. I want the room to retreat in nervousness. This could encourage people to stay still within the room. It could also react to the number of people within the room. An extreme idea of this is reacting to any human presence at all, requiring you to mask yourself with a blanket or something to get close to it. 

The idea of this came from thinking about anthropocentrism within nature and the idea that we won't experience how other creatures experience fully as this world doesn't revolve around us. Bird watchers are careful and become one with the environment as to not disturb it. 

<img src="{{ page.assetdir }}/map.jpg" class="col-6">

Here is the idea related to the sound aspect of it. I wanted to be able to play a rich sound environment but considering technical restrictions. I am not sure but I suspect Pure Data may be a good way to play sound files and compile them back into a sound environment when exported from Ableton as "stems". I am inspired by how games seamlessly change their music depending on the environment. Although in older games, this is done by midi and small samples.

## Learning Pure Data

Below is a video recording of my experiment in Pure Data. I made two tracks in Ableton and exported them as audio files. They are read in and the volume is controlled with a physical MIDI controller with CC knobs. I am able to change things with CC and can further extend this to control stuff automatically using Processing and a Virtual MIDI instrument. That is the idea. 

The audio files are looped and can be played in with more than 2 channels, which can allow for surround speakers if I wanted them.

Further experimentation will confirm if there are any issues with lots of audio files being played and looped at the same time.

<div class="row" style="padding: 10px;">
<video class="col-6" style="filter: drop-shadow(0px 0px 7px rgb(0, 0, 0));" width="100%" height="auto" title="Pd recording" controls>
    <source src="{{ page.assetdir }}/pdrecording.mp4" type="video/mp4">
</video>
</div>
<br>

This is another quite patch I did, this time adding a sort of heart beat and breathing sound and sample from Soundsnap of a Pine cone being ripped up and put it through a granulator and other effects in Ableton. I attached these to be controlled by CC again and I gradually change values to try to sort of simulate a creature changing mood and getting stressed.

<div class="row" style="padding: 10px;">
<video class="col-6" style="filter: drop-shadow(0px 0px 7px rgb(198, 137, 170));" width="100%" height="auto" title="Pd recording 2" controls>
    <source src="{{ page.assetdir }}/pdrecording2.mp4" type="video/mp4">
</video>
</div>
<br>

## Kinect experiment

Using the small PC I have, I installed all the libraries and applications I needed. Not without some issue, I had to install a wifi driver and enable sound from BIOS (took me hours to figure that out) to get it to work.

This is a small sketch I made in Processing, which attempts to track people and add their movement to an agitator value, which grows with movement. The test seemed to be able to change the CC values in Pure Data fine enough.
<div class="row" style="padding: 10px;">
<video class="col-6" style="filter: drop-shadow(0px 0px 7px rgb(106, 193, 255));" width="100%" height="auto" title="Kinect recording" controls>
    <source src="{{ page.assetdir }}/kinectrecording.mp4" type="video/mp4">
</video>
</div>

<br>

### Further experiments

I attempted to make a more robust program to detect movement without the use of the skeletons. I realise the skeletons aren't necessarily needed if all I want to detect is movement. I made this sketch to visualise how it could work. The depth of the cubes are determined with the movement seen within that part of the kinect. The bar represents the overall average of movement. The blue ball could represent agitation.

<div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            depthmovement.pde
        </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
        <pre><code class="language-java">import kinect4WinSDK.Kinect;
import peasy.PeasyCam;

static final int SCAN_WIDTH = 56;
static final int SCAN_HEIGHT = 42;

int boxSize;

float[][] depthMatrix;

float[][] movementMatrix;
float movementOverall = 0.0;
Kinect kinect;
PeasyCam cam;

void setup() {
  size(640, 480, P3D);
  
  cam = new PeasyCam(this, 400);
  kinect = new Kinect(this);
  rectMode(CENTER);
  
  boxSize = int(kinect.WIDTH / 56.0);
  depthMatrix = new float[SCAN_WIDTH][SCAN_HEIGHT];
  for (int i = 0; i < SCAN_WIDTH; i++) {
    for (int j = 0; j < SCAN_HEIGHT; j++) {
      depthMatrix[i][j] = 0.0;
    }
  }
  movementMatrix = new float[SCAN_WIDTH][SCAN_HEIGHT];
  for (int i = 0; i < SCAN_WIDTH; i++) {
    for (int j = 0; j < SCAN_HEIGHT; j++) {
      movementMatrix[i][j] = 0.0;
    }
  }
}

void a() {
  PImage depthMap = kinect.GetDepth();
  for (int i = 0; i < SCAN_WIDTH; i++) {
    int xPosition = int(map(i, -1, SCAN_WIDTH + 1, 0, kinect.WIDTH));
    for (int j = 0; j < SCAN_HEIGHT; j++) {
      int yPosition = int(map(j, -1, SCAN_HEIGHT + 1, 0, kinect.HEIGHT));
      
      float newDepth = lerp(depthMatrix[i][j], brightness(depthMap.get(xPosition, yPosition)), 0.1);
      
      movementMatrix[i][j] = constrain(movementMatrix[i][j] + abs(map(depthMatrix[i][j] - newDepth, 0, 255, 0, 1)), 0, 1);
      depthMatrix[i][j] = newDepth;
      
      fill(depthMatrix[i][j], 0, 0);
 
      push();
      translate(xPosition, yPosition, -movementMatrix[i][j] * 250);
      box(boxSize);
      pop();
    }
  }
}

void updateMovementMatrix() {
  for (int i = 0; i < SCAN_WIDTH; i++) {
    for (int j = 0; j < SCAN_HEIGHT; j++) {
      movementMatrix[i][j] -= 0.001;
      if (movementMatrix[i][j] < 0) {
        movementMatrix[i][j] = 0;
      }
    }
  }
}

void getMovementOverall() {
  float total = 0.0;
  
  for (int i = 0; i < SCAN_WIDTH; i++) {
    for (int j = 0; j < SCAN_HEIGHT; j++) {
      total += movementMatrix[i][j];
    }
  }
  
  total = total / (SCAN_WIDTH * SCAN_HEIGHT);
  movementOverall = lerp(movementOverall, total, 0.1);
  push();
  fill(0, total * 255, 0);
  translate(kinect.WIDTH + boxSize * 2, kinect.HEIGHT - boxSize - total * kinect.HEIGHT * 0.5, 0);
  box(boxSize, total * kinect.HEIGHT, boxSize);
  pop();
  
  push();
  translate(kinect.WIDTH + boxSize * 12, kinect.HEIGHT * 0.5 - boxSize, 0);
  fill(0, 0, movementOverall * 255);
  sphere(movementOverall * 8 * boxSize);
  pop();
}

void draw() {
  background(255);
  translate(-width * 0.5, - height * 0.5);

  a();
  updateMovementMatrix();
  getMovementOverall();
}
</code></pre>
</div>
</div>
</div>
<br>
<div class="row" style="padding: 10px;">
<video class="col-6" style="filter: drop-shadow(0px 0px 7px rgb(255, 0, 0));" width="100%" height="auto" title="Kinect test movement processing" controls>
    <source src="{{ page.assetdir }}/processingkinecttest.mp4" type="video/mp4">
</video>
</div>
