---
title: Experiments with light
description: Semester 1 / Week 3 - 4
assetdir: /assets/studio/experiments
cover: /assets/studio/experiments/cover.jpg
---

I want to experiment with DMX lighting and how it works. I know lighting is an important aspect of installation environments. 

## DMX + Processing + Ableton
I borrowed a DMX light and a USB ENTTEC adapter from the studio and played around with how it works. I made a Processing sketch that control the light with a nice system I made. I can send commands that can lerp between colours throughout a specified “life time” with any easing/curve I want. I also made it so multiple of these can be sent and overlapped, with the colours being mixed into one output on the light. For example, a pulsing light linked to a midi note can be played whilst another command is running a gradual change from one colour to another.

<div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            DMX.pde
        </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
        <pre><code class="language-java">import themidibus.*;
import dmxP512.*;
import processing.serial.*;

MidiBus bus;
DmxP512 dmxOutput;

String dmxPort = "/dev/tty.usbserial-EN268160";
int dmxBaudrate = 115000;

void setup() {
  size(100, 100);
  setupSources();
  MidiBus.list();
  bus = new MidiBus(new java.lang.Object(), "Virtual MIDI", "Virtual MIDI");
  dmxOutput = new DmxP512(this, 5, false);
  dmxOutput.setupDmxPro(dmxPort, dmxBaudrate);
  dmxOutput.set(0, 0);
  
}

void draw() {
  
  frameRate(abs(sin(millis() / 4000.0 * TWO_PI)) * 200 + 20);
  updateLights();
  updateSources();
  if (frameCount % 60 == 0) {
    Light newLight = new Light(200, 1, color(255, 0, 0), color(0, 0, 0), 0);
    bus.sendNoteOn(0, 32, 127); // Send a Midi noteOn
  }
  
  if (frameCount % 15 == 0 && frameCount % 30 == 0) {
    Light newLight = new Light(30, 1, color(0, 0, 0), color(100, 100, 100), 0);
    bus.sendNoteOn(1, 32, 127); // Send a Midi noteOn
  }
  
  if (frameCount % 240 == 0) {
    Light newLight = new Light(4000, 1, color(50, 0, 0), color(50, 50, 0), 0);
  }
}

void noteOn(int channel, int pitch, int velocity) {
  println(channel);
}</code></pre>
        </div>
    </div>
    </div>
    <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Light.pde
        </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body"><pre><code class="language-java">ArrayList&lt;Light&gt; lights = new ArrayList&lt;Light&gt;();

final int lightSources = 1;

ArrayList&lt;ArrayList&lt;Light&gt;&gt; sources = new ArrayList&lt;&gt;(); 

void setupSources() {
  for (int i = 0; i &lt; lightSources; i++) {
    sources.add(new ArrayList&lt;Light&gt;());
  }
}

class Light {
  int born, lifeTime, curveType, sourceNumber;
  color startColour, endColour;
  color currentColour;
  
  Light(int lifeTime, int curveType, color startColour, color endColour, int sourceNumber) {
    this.lifeTime = lifeTime;
    this.curveType = curveType;
    this.sourceNumber = sourceNumber;
    
    this.born = millis();
    
    this.startColour = startColour;
    this.endColour = endColour;
    
    lights.add(this);
    sources.get(sourceNumber).add(this);
  }
  
  boolean update() {
    int elapsed = millis() - this.born;
    if (elapsed > this.lifeTime) {
      return false;
    }
    float percent = 0;
    if (curveType == 1) {
      percent = easeInSine(elapsed / float(lifeTime));
    }
    this.currentColour = lerpColor(startColour, endColour, percent);
    
    return true;
  }
}

float easeInSine(float number) {
  return 1 - cos((number * PI) / 2);
}

void updateLights() {
  for (int i = 0; i < lights.size(); i++) {
    Light currentLight = lights.get(i);
    if (currentLight.update() == false) {
      sources.get(currentLight.sourceNumber).remove(currentLight);
      lights.remove(i);
      i--;
    }
  }
}

void updateSources() {
  for (int i = 0; i < lightSources; i++) {
    int red = 0;
    int green = 0;
    int blue = 0;
    
    for (int j = 0; j < sources.get(i).size(); j++) {
      Light currentLight = sources.get(i).get(j);
      color currentColour = currentLight.currentColour;
      red += red(currentColour);
      green += green(currentColour);
      blue += blue(currentColour);
    }
    red = constrain(red, 0, 255);
    green = constrain(green, 0, 255);
    blue = constrain(blue, 0, 255);
    
    dmxOutput.set(4 * i + 2, new int[]{red, green, blue, 255});
  }
}</code></pre>
</div>
    </div>
</div>


I connected Processing to Ableton using the "IAC Driver" in Mac's Audio MIDI Setup. I had difficulties making Ableton react to messages received by Processing. I knew it was working because the "MIDI Track In Indicator" at the top right of Ableton was flashing showing it received. I had to restart my computer for it work. I think this is an Ableton issue.

In Ableton, I simply set up a couple of instruments with it receiving midi from "Virtual MIDI", referenced in the code, this is what I labelled the IAC Driver. It worked effectively!

<!-- <img src="{{ page.assetdir }}/virtualmidi.png" class="col-12"> -->

<div class="row" style="padding: 10px;">
<video class="col-6" style="filter: drop-shadow(0px 0px 7px red);" width="100%" height="auto" title="Light experiment" controls>
    <source src="{{ page.assetdir }}/lightexperiment.mp4" type="video/mp4">
</video>
</div>

Next to explore is adding another light and seeing if the system I made in mind for multiple lights will work. I am not sure how addressing works with multiple lights but we’ll see.

## DMX Pro + Processing + Ableton

I borrowed another DMX light that can pan around and rotate upwards. This is quite powerful and it seems magical for your code to move it! Though, a problem with this light is that I cannot do custom RGB colours, they are set to discrete options. I experimented with it and connected it to VCV Rack (I tried Ableton but it wasn’t having it, I figured VCV Rack is just as good for quick tests!).

<div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            dmxpro3.pde
        </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
        <pre><code class="language-java">import dmxP512.*;
import processing.serial.*;
import themidibus.*;

DmxP512 dmxOutput;
MidiBus bus;

String dmxPort = "/dev/tty.usbserial-EN268160";
int dmxBaudrate = 115000;

int time = 500;
void setup() {
  
  size(100, 100);
  noiseDetail(3, 0.5);
  
  MidiBus.list();
  bus = new MidiBus(new java.lang.Object(), -1, "Virtual MIDI");
  
  dmxOutput = new DmxP512(this, 128, false);
  dmxOutput.setupDmxPro(dmxPort, dmxBaudrate);
  
  dmxOutput.set(7, 0); // close shutter
  dmxOutput.set(8, 0); // set dimmer 0
  
  dmxOutput.set(1, 0); // set rotation
  dmxOutput.set(2, 0); // set inclination
  dmxOutput.set(5, 0); // set speed

  dmxOutput.set(9, 10);
  dmxOutput.set(9, 99);
  dmxOutput.set(10, 191);
  dmxOutput.set(12,0);
  dmxOutput.set(14, 15);
  dmxOutput.set(6, 32);
  
  frameRate(60);
}

float rotateValue = 0;
void draw() {
  
  float noise1 = noise(millis() * 0.001);
  float noise2 = noise(millis() * 0.001, 100);
  
  int cc1 = floor(map(noise1, 0, 1, 0, 127));
  int cc2 = floor(map(noise2, 0, 1, 0, 127));
  
  rotateValue += pow(noise2, 4) * QUARTER_PI * 0.5;

  bus.sendControllerChange(2, 1, cc2);
  bus.sendControllerChange(2, 2, cc2);
  dmxOutput.set(14, floor(map(noise2, 0, 1, 0, 239))); // prism
  if (noise2 < 0.5) {
    dmxOutput.set(14, 0);
    dmxOutput.set(12, 127);
  } else {
    dmxOutput.set(14, floor(map(noise2, 0.5, 1, 16, 239))); // prism
    dmxOutput.set(12, 0);
  }
  dmxOutput.set(8, floor(map(noise2, 0, 1, 0, 255))); // brightness
  dmxOutput.set(10, floor(map(noise1, 0, 1, 128, 255))); // gobo rotate
  
  dmxOutput.set(1, int(sin(frameCount / float(time) * TWO_PI) * 85 + 85)); // rotation
  dmxOutput.set(2, int(cos(frameCount / float(time) * TWO_PI) * 20 + 127)); // inclination
  
  dmxOutput.set(7, 8); // open shutter 
}</code></pre>
        </div>
    </div>
    </div>
</div>

The DMX Pro has a lot of options that can be addressed, such as rotation, inclination, speed, brightness and numerous different gobo options. This was shown all in the instruction manual for the light. 
<div class="row" style="padding: 10px;">
<video class="col-6" style="filter: drop-shadow(0px 0px 7px lime);" width="100%" height="auto" title="Light experiment 2" controls>
    <source src="{{ page.assetdir }}/lightexperiment2.mp4" type="video/mp4">
</video>
</div>
<br>

## Thoughts

I enjoyed experimenting with the lights and find it quite simple how they are controlled with Processing. During my exploration of the lights, I was also exploring into my essay on sound. This made me realise I want to focus more on sound for now. The DMX Pro isn't suitable for what I want to achieve overall, it doesn't offer nuance to colours. The first DMX light could be useful, but I want to carefully think about how I want to use them.




