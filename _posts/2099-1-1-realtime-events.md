---
layout: journalpost
title: Realtime Events
categories: year2
---

---
### Introduction

For this project we are using Unity which is a popular game engine that can also be used for more than just games! It provides a diverse palette to create basically whatever you want. In this project, the task is to create a **dynamic environment** in which the user can interact with it using both realtime visuals and dynamic audio.

### Research

I had the idea to use procedural audio for the environment, this can be done by using Open Sound Control (OSC). This allows me to connect applications and use realtime sound to control things in other applications, and also to control sound from another application. I am going to use VCV Rack 2 for this since it is free. VCV Rack 2 is a software modular synthesizer that lets us use a bunch of sound modules for free to create music, such as procedural ambient music.

For the visual side of it, I want it to feel like a location that is soothing but also uncanny. I thought about how I could create this in a few weeks, and decided to go for a low poly retro look.

![Mindmap]({{ site.baseurl }}/images/journal/year2/realtime-events/mindmap.jpg)

I created this mindmap whilst researching for the project.

#### Fig 1

A while back I purchased Fatum Betula on Switch and enjoyed every aspect of it, from the surreal dream-like environments to the soundtrack. The game utilises a low-poly style reminiscent of the PS1 era. Throughout the game you solve puzzles similar to that of a point-and-click game whilst travelling through lots of different liminal spaces. It feels unknowingly familiar.. like something you'd experience in a fever dream.

*Fig 1.1*, *Fig 1.2* & *Fig 1.3* show screenshots of the game in different areas.

*Fig 1.31* below is a video of the scene from *Fig 1.3*, I am interested in how the water scrolls on the wall. These sorts of effects have been utilised for ages, dating as far back as The Legend of Zelda: Ocarina of Time on the Nintendo 64. Simple yet very effective.

 <video width="100%" height="auto" title="Fig 1.31" controls>
    <source src="{{ site.baseurl }}/images/journal/year2/realtime-events/water.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<!-- * Fig 1.1 - This location is of a traditional Japanese (?) house surrounded by water, with a cherry blossom tree next to it. This place just feels odd and wrong but it's very intriquing. It's soothing but feels like I am being watched.

* Fig 1.2 - This one is of a church in autumn surrounded by trees. It makes me question "why is it here?", "who built it?", "why is it so isolated?".

* Fig 1.3 - This is during the start of the game in a corridor with water flowing down the walls. An unsettling godly creature appears that asks you to water an ethereal tree that has roots in limbo. 
A more in-depth look into how the textures work, as shown in *Fig 1.31* below, shows that it's comprised of repeating scrolling water texture and caustics on top of wall texture.  -->

<!-- ![Fig 1.31 - Video of Fig 1.3]({{ site.baseurl }}/images/journal/year2/realtime-events/water.mp4) -->

#### Fig 2

I've also played a game called Stars Die which is familiar to Fatum Betula in the style and the overall feelings throughout the game. It's about an island covered in fleshy growth that scientists are researching.

*Fig 2.1* & *Fig 2.2* show screenshots of the game in different areas.

#### Fig 3

I keep coming back to Zdzisław Beksiński's work and would enjoy doing a deep dive into it sometime. His work is called dystopian surrealism. His paintings often depict a bleak desolate future, mixing architecture with gruesome organic looking materials and illogical scenary.

* In *Fig 3.1*, a peculiar tree stands, branching on one axis seemingly alone on a strange plain. It's hard to find words for it, it just feels like nothing ever seen before in person. The tree feels divine, something of importance, beauty maybe we don't understand. 

* In *Fig 3.2*, there's a cathedral either made or covered in a strange organic structure of strands. It heavily reminds of me a close up shot of the iris (*Fig 3.21*) by [Suren Manvelyan](https://www.surenmanvelyan.com/eyes/your-beautiful-eyes/?occur=1&cover=0&album=5). The feelings this invokes is emptyness, a relic of a time far gone.

![Fig 3.21 - Suren Manvelyan / Zdzisław Beksiński]({{ site.baseurl }}/images/journal/year2/realtime-events/eye.png)

#### Fig 4

Similarly to the work of Zdzisław and Eric (Stars Die), The War Of The Worlds features something called the red weed. This red weed spreads across the earth, blanketing previously lush countryside with a red fleshy organic structure. I really like the music associated with this growth, composed by Jeff Wayne on his musical interpretation of The War Of The Worlds.

*Fig 4.1* & *Fig 4.2* are both album art for Jeff's musical album.

---

### Development

The first step in my project was to achieve a low resolution look. I did this by following [this](https://www.youtube.com/watch?v=Sru8XDwxC3I) tutorial by Thomas Friday. This worked perfectly except that Unity went through a few layout changes since! The resolution I decided to go with is 256×224 with a standard 4:3 aspect ratio.

![Low res test with cube and skybox]({{ site.baseurl }}/images/journal/year2/realtime-events/lowres.jpg)

After this I experimented with Shader Graph and created a shader that lets me create scrolling textures. This let me mimic the scrolling water textures seen in old games. For this I used numerous aids and my limited experience with shaders already.

![Shader Graph for scrolling textures]({{ site.baseurl }}/images/journal/year2/realtime-events/shadergraph.png)

To bring the water to life, I used [freesound.org](https://freesound.org) to find a water sound. 
The textures I used for the water are from an old 1994 texture pack disc that I found [here](https://archive.org/details/bakku-no-oni-blue/blue_disc.png) on Archive.org. I also used the skybox from Big Boo's Haunt from Super Mario 64.

<video width="100%" height="auto" title="River of blood with sound and skybox" controls>
    <source src="{{ site.baseurl }}/images/journal/year2/realtime-events/bloodwater.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

I decided to change how everything is shown by following [this](https://www.youtube.com/watch?v=_nxJ8olekBY) tutorial by Comp-3 Interactive.

<video width="100%" height="auto" title="Improved" controls>
    <source src="{{ site.baseurl }}/images/journal/year2/realtime-events/progress.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>








