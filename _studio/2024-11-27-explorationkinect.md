---
year: 4
title: Exploration into an idea
description: Semester 1 / Week 10 - 11
assetdir: /assets/studio/explorationkinect
cover: /assets/studio/explorationkinect/cover.jpg
---

I have been exploring into the idea of having a "living room" that reacts to human movement within it. I want the room to retreat in nervousness. This could encourage people to stay still within the room. It could also react to the number of people within the room. An extreme idea of this is reacting to any human presence at all, requiring you to mask yourself with a blanket or something to get close to it. 

The idea of this came from thinking about anthropocentrism within nature and the idea that we won't experience how other creatures experience fully as this world doesn't revolve around us. Bird watchers are careful and become one with the environment as to not disturb it. 

<img src="{{ page.cover }}" class="col-6">

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
<div class="row" style="padding: 10px;">
<video class="col-6" style="filter: drop-shadow(0px 0px 7px rgb(255, 0, 0));" width="100%" height="auto" title="Kinect test movement processing" controls>
    <source src="{{ page.assetdir }}/processingkinecttest.mp4" type="video/mp4">
</video>
</div>
