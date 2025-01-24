---
title: Experiments with sound and light
description: Semester 1 / Week 3 - 4
assetdir: /assets/studio/experiments
cover: /assets/studio/experiments/cover.jpg
---


## Ableton experiment
I used an old recording I made whilst in the Lake District and used a grandulator on it with a midi controller with CC knobs, then cutting the “performance” up and abstracting the parts I liked. I made a short audio file, just an experiment.

<div class="row" style="padding: 10px;">
<audio controls src="{{ page.assetdir }}/experiment.mp3"></audio>
</div>
<br>

## 25:31:12 hours in my bedroom
I haven’t the energy to go out and I often find myself stuck in my bedroom, which ultimately isn’t a place I feel completely at home in. I decided to record the audio over a span of 24 hours, inspired by the “Environmental Sound Matter” essay by López. I wanted to hear what a “floating ear” above my bed headboard would hear. Complete with snoring, singing, creaky door hinges, cars outside my window. I haven’t got around to it, but I planned to abstract the sounds at parts and manipulate them into something entirely different that resonates with an emotion I am trying to represent. I had struggled with acting “normal” while being observed by this microphone, which I dont think is possible unless I set it up and then somehow completely forget it.

## 32:65 minutes of a spot in Pollock park
On a need for air and time to think, I walked to a spot in Pollock park where the rays were shining through the trees. I wanted to capture the sound matter of the location whilst I was writing and thinking. At first, I felt the pressure of being observed, I had a particularly runny nose that day and I didn’t want to sniffle as that would be heard, but I eventually gave in. It’s natural.

<br>
## DMX Lighting

I borrowed a DMX light and a USB ENTTEC adapter and played around with how it works. I made a Processing sketch that control the light with a nice system I made. I can send commands that can lerp between colours throughout a specified “life time” with any easing/curve I want. I also made it so multiple of these can be sent and overlapped, with the colours being mixed into one output on the light. For example, a pulsing light linked to a midi note can be played whilst another command is running a gradual change from one colour to another. Next to explore is adding another light and seeing if the system I made in mind for multiple lights will work. I am not sure how addressing works with multiple lights but we’ll see.



<div class="row" style="padding: 10px;">
<video class="col-6" style="filter: drop-shadow(0px 0px 7px red);" width="100%" height="auto" title="Light experiment" controls>
    <source src="{{ page.assetdir }}/lightexperiment.mp4" type="video/mp4">
</video>


<video class="col-6" style="filter: drop-shadow(0px 0px 7px lime);" width="100%" height="auto" title="Light experiment 2" controls>
    <source src="{{ page.assetdir }}/lightexperiment2.mp4" type="video/mp4">
</video>
</div>
<br>

I borrowed another DMX light that can pan around and rotate upwards. Though, a problem with this light is that I cannot do custom RGB colours, they are set to discrete options. I experimented with it and connected it to VCV Rack 2 (I tried Ableton but it wasn’t having it!).


<!-- <div class="row" style="background-color: #cfc68a; border-style: groove; border-color: #636f69; border-width: 5px; padding: 10px;">
<div style="background-color: #cfc68a; color: #636f69; padding: 10px; text-align: center;margin: auto; text-align: justify;" class="col-6">
    "I want to create an artwork that envelops the viewer in a hopeful but melancholic environment that explores the relationship between digital objects, mental health and the natural world. I intend to explore connection of our minds to the world and the way I romanticise things I feel I am an alien to."

    <br>
    <br>
    This is the summary of my initial studio project proposal. I find it important to remind myself of this.
</div>


<img src="{{ page.cover }}" class="col-6">
</div> -->
