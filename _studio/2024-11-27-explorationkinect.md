---
year: 4
title: Exploration into an idea
description: 📷
assetdir: /assets/studio/explorationkinect
cover: /assets/studio/explorationkinect/map.jpg
---

I have been exploring into the idea of having a "living room" that reacts to human movement within it. I want the room to retreat in nervousness. This could encourage people to stay still within the room. It could also react to the number of people within the room. An extreme idea of this is reacting to any human presence at all, requiring you to mask yourself with a blanket or something to get close to it. 

The idea of this came from thinking about anthropocentrism within nature and the idea that we won't experience how other creatures experience fully as this world doesn't revolve around us. Bird watchers are careful and become one with the environment as to not disturb it. 

<img src="{{ page.cover }}" class="col-12">

Here is the idea related to the sound aspect of it. I wanted to be able to play a rich sound environment but considering technical restrictions. I am not sure but I suspect Pure Data may be a good way to play sound files and compile them back into a sound environment when exported from Ableton as "stems". I am inspired by how games seamlessly change their music depending on the environment. Although in older games, this is done by midi and small samples.

## Learning Pure Data

Below is a video recording of my experiment in Pure Data. I made two tracks in Ableton and exported them as audio files. They are read in and the volume is controlled with a physical MIDI controller with CC knobs. I am able to change things with CC and can further extend this to control stuff automatically using Processing and a Virtual MIDI instrument. That is the idea. 

The audio files are looped and can be played in with more than 2 channels, which can allow for surround speakers if I wanted them.

Further experimentation will confirm if there are any issues with lots of audio files being played and looped at the same time.

<div class="row" style="border-style: dotted; border-color: black; border-width: 5px; padding: 10px;">
<video class="col-12" width="100%" height="auto" title="Pd recording" controls>
    <source src="{{ page.assetdir }}/pdrecording.mp4" type="video/mp4">
</video>
</div>
<br>