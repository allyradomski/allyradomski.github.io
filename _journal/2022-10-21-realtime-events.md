---
layout: post
year: 2
title: Realtime Events
assetdir: /assets/journal/2022-10-21-realtime-events
---


### Introduction

For this project we are using Unity which is a popular game engine that can also be used for more than just games! It provides a diverse palette to create basically whatever you want. In this project, the task is to create a **dynamic environment** in which the user can interact with it using both **realtime visuals** and **dynamic audio**.

---

### Research

For the project, I had to think of something that wasn't too ambitious but also can also smoothly incorporate triggers and dynamic audio. I decided to go with a PS1-look with a surreal environment. I have played a few games with this exact style that I show below in my mindmap.


<figure class="figure">
    <img src="{{ page.assetdir }}/mindmap.jpg" class="figure-img img-fluid" alt="Mindmap">
    <figcaption class="figure-caption">Mindmap</figcaption>
</figure>


<!-- ![Mindmap]({{ page.assetdir }}/mindmap.jpg) -->

I created this mindmap whilst researching for the project.


#### Fig 1

A while back I purchased Fatum Betula on Switch and enjoyed every aspect of it, from the surreal dream-like environments to the soundtrack. The game utilises a low-poly style reminiscent of the PS1 era. Throughout the game you solve puzzles similar to that of a point-and-click game whilst travelling through lots of different liminal spaces. It feels unknowingly familiar.. like something you'd experience in a fever dream.

*Fig 1.1*, *Fig 1.2* & *Fig 1.3* show screenshots of the game in different areas.

*Fig 1.31* below is a video of the scene from *Fig 1.3*, I am interested in how the water scrolls on the wall. These sorts of effects have been utilised for ages, dating as far back as The Legend of Zelda: Ocarina of Time on the Nintendo 64. Simple yet very effective.

 <video width="100%" height="auto" title="Fig 1.31" controls>
    <source src="{{ page.assetdir }}/water.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>


#### Fig 2

I've also played a game called Stars Die which is familiar to Fatum Betula in the style and the overall feelings throughout the game. It's about an island covered in fleshy growth that scientists are researching.

*Fig 2.1* & *Fig 2.2* show screenshots of the game in different areas.


#### Fig 3

I keep coming back to Zdzisław Beksiński's work and would enjoy doing a deep dive into it sometime. His work is called dystopian surrealism. His paintings often depict a bleak desolate future, mixing architecture with gruesome organic looking materials and illogical scenary.

* In *Fig 3.1*, a peculiar tree stands, branching on one axis seemingly alone on a strange plain. It's hard to find words for it, it just feels like nothing ever seen before in person. The tree feels divine, something of importance, beauty maybe we don't understand. 

* In *Fig 3.2*, there's a cathedral either made or covered in a strange organic structure of strands. It heavily reminds of me a close up shot of the iris (*Fig 3.21*) by [Suren Manvelyan](https://www.surenmanvelyan.com/eyes/your-beautiful-eyes/?occur=1&cover=0&album=5). The feelings this invokes is emptyness, a relic of a time far gone.

<figure class="figure">
    <img src="{{ page.assetdir }}/eye.png" class="figure-img img-fluid" alt="Fig 3.21 - Suren Manvelyan / Zdzisław Beksiński">
    <figcaption class="figure-caption">Fig 3.21 - Suren Manvelyan / Zdzisław Beksiński</figcaption>
</figure>

<!-- ![Fig 3.21 - Suren Manvelyan / Zdzisław Beksiński]({{ page.assetdir }}/eye.png) -->


#### Fig 4

Similarly to the work of Zdzisław and Eric (Stars Die), The War Of The Worlds features something called the red weed. This red weed spreads across the earth, blanketing previously lush countryside with a red fleshy organic structure. I really like the music associated with this growth, composed by Jeff Wayne on his musical interpretation of The War Of The Worlds.

*Fig 4.1* & *Fig 4.2* are both album art for Jeff's musical album.

---

### Development

The first step in the development was downgrading the look to a PS1 style game! I followed [Comp-3 Interactive's video](https://www.youtube.com/watch?v=_nxJ8olekBY) tutorial on this.

I experimented a lot with Shader Graph, which lets you create shaders visually, with nodes, in real-time. I wanted to do this to create the water for the experience. I was inspired by [Jaspar's video](https://www.youtube.com/watch?v=8rCRsOLiO7k) on the topic of scrolling textures in Super Mario Galaxy 2. Although I ended up doing it differently, the concept is similar. I overlayed two different textures that travel in different directions to create water. I sourced these textures from an old 1994 texture pack called [Bakku No Oni Blue](https://archive.org/details/bakku-no-oni-blue/blue_disc.png). It's a collection of blue textures.

The combination of old textures and simple techniques adds to the PS1-retroness. They had more limitations in that era and required to use cheap techniques to give the visuals.

<!-- ![Shader Graph for scrolling textures]({{ page.assetdir }}/shadergraph.png) -->

<figure class="figure">
    <img src="{{ page.assetdir }}/shadergraph.png" class="figure-img img-fluid" alt="Shader Graph for scrolling textures">
    <figcaption class="figure-caption">Shader Graph for scrolling textures</figcaption>
</figure>

Above shows the shader I finally settled on. It takes two input textures with numerous different properties, such as colour, speed and tiling. 


#### Playing around with Fusion 360

At first I was creating my scene using primitive objects inside Unity after planning a design on paper, but my peers suggested to use Fusion 360 which is a 3D modelling software. I haven't used Fusion 360 before, and have used very little of alternative software like Blender. The software feels quite intuitive as I picked it up fairly quickly.

<div class="row">
    <figure class="figure col-6 col-lg-3">
        <img src="{{ page.assetdir }}/design_1.jpg" class="figure-img img-fluid" alt="Initial Design">
        <figcaption class="figure-caption">Initial Design</figcaption>
    </figure>
    <figure class="figure col-6 col-lg-3">
        <img src="{{ page.assetdir }}/unity_design.jpg" class="figure-img img-fluid" alt="Attempt model it in Unity">
        <figcaption class="figure-caption">Attempt model it in Unity</figcaption>
    </figure>
    <figure class="figure col-6 col-lg-3">
        <img src="{{ page.assetdir }}/fusion360_1.jpg" class="figure-img img-fluid" alt="Modelling it in Fusion 360">
        <figcaption class="figure-caption">Modelling it in Fusion 360</figcaption>
    </figure>
    <figure class="figure col-6 col-lg-3">
        <img src="{{ page.assetdir }}/fusion360_2.jpg" class="figure-img img-fluid" alt="-">
        <figcaption class="figure-caption">-</figcaption>
    </figure>
</div>

<!-- ![Initial Design]({{ page.assetdir }}/design_1.jpg)
![Attempt model it in Unity]({{ page.assetdir }}/unity_design.jpg)
![Modelling it in Fusion 360]({{ page.assetdir }}/fusion360_1.jpg)
![-]({{ page.assetdir }}/fusion360_2.jpg) -->

After importing it into Unity and messing around with it, I decided that this wasn't the design I wanted to go for. It wasn't a waste of time at all though, as it helped me learn lots about how to create in Fusion 360!


#### Finalised scene

I think it was around midnight I started to create my final scene. I seem to work well in the night-time and get lots of things done. Using my knowledge I learnt from my first attempt I started to put together a scene. I decided to keep adding things until I built up a structure I was happy with. Like how a child draws whatever comes to their mind as they do it, I created the scene this way. This way I am confident I achieved the dream-like, uncanny, weird feeling of the place.

<div class="row">
    <figure class="figure col-6 col-lg-3">
        <img src="{{ page.assetdir }}/fusion360_3.jpg" class="figure-img img-fluid" alt="Modelling the scene in Fusion 360">
        <figcaption class="figure-caption">Modelling the scene in Fusion 360</figcaption>
    </figure>
    <figure class="figure col-6 col-lg-3">
        <img src="{{ page.assetdir }}/fusion360_4.jpg" class="figure-img img-fluid" alt="-">
        <figcaption class="figure-caption">-</figcaption>
    </figure>
</div>
<!-- ![Modelling the scene in Fusion 360]({{ page.assetdir }}/fusion360_3.jpg)
![-]({{ page.assetdir }}/fusion360_4.jpg) -->


#### Importing into Unity

After modelling it, I exported it and imported it into Unity. I wanted to use the scrolling shader I made before for water, so decided to see what it'd feel and look like on the dome. I liked the way it looked. I went further with this and added blue Moroccan tiling as it felt like it suited the peacefulness of the water trickling down the wall.


<video width="100%" height="auto" title="Adding textures to the lower dome" controls>
    <source src="{{ page.assetdir }}/scene_recording_1.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

After, I went upwards and added textures to the upper room. I decided to use metal grating as I wanted the player to be able to see the water. I was also inspired by Super Mario 64's Tick Tock Clock level to add this.

<video width="100%" height="auto" title="Upper level" controls>
    <source src="{{ page.assetdir }}/scene_recording_2.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>


#### Creating triggers

I wanted the player to be able to travel up to the second floor through the tube, so I made a lift! I did this by creating a trigger location attached to the lift, and two empty objects indicating where the start and stop of the platform is. When entering the trigger, I made a counter count up to 1, and vice versa when stepping out. Then I used this value to move the platform by using a lerp function. I used an In-Out-Cubic easing function which I found [here](https://gist.github.com/cjddmut/d789b9eb78216998e95c) on GitHub. This makes the environment feel much more dynamic than just using a linear lerp.

<video width="100%" height="auto" title="Lift that moves using lerp and easings" controls>
    <source src="{{ page.assetdir }}/scene_recording_3.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>


#### Adding dynamic audio

For sounds, I used [freesound.org](https://freesound.org) which has thousands of free to use sounds. Quite a lot of sounds from Minecraft are sourced from here. 

To start with I added sound of water to the scrolling textures. I really like how it works with the textures, it feels like it's all tied together. For the lift I added a low sci-fi sounding hum that changes in pitch throughout the lifts journey as this adds more a sense of speed in the middle of the lift.

I also added lots of doors to the scene, as I like how retro doors look in video games. 

<video width="100%" height="auto" title="Scene with interaction and sound" controls>
    <source src="{{ page.assetdir }}/scene_recording_4.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>


#### Manipulating properties over time

Next, I added rain using Unity's particle system, along with the sound of rain hitting metal to match it. I also added a texture of my eye above, so that you know you're being watched! When entering the trigger, numerous different properties change:

* Field of View of the camera
* Colour of the water textures
* Colour of the rain
* The pitch of the audio

I did struggle with changing material properties as it changes it in the assets and not the instance, so it carries over after stopping playing. I managed to fix this in the end though using help of internet.

The way I interpret this is the eye is crying blood, which fills the water with blood. The camera zooms out to heighten your awareness, and the audio pitching down shows something is changing and wrong.

I am really happy with how this is developing as it feels like a location that has character and is telling a sort of ambiguous story. It feels quite surreal.

<video width="100%" height="auto" title="Properties changing with a trigger" controls>
    <source src="{{ page.assetdir }}/scene_recording_5.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>


#### More development

I wanted the doors to do something, so I made them come together and spin around above the players head. I feel this is quite unexpected, but not at all out of place for the scene. The eye comes down as the doors spin, drawing your attention to the center, the pupil. I used a falling Shepard tone as the eye approaches to convey a sense of dread. After a few seconds, I teleport the player to a new place where they are surrounded by eyes in all directions. The sequence so far feels all connected.

<video width="100%" height="auto" title="Adding more animation to the scene" controls>
    <source src="{{ page.assetdir }}/scene_recording_6.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>


#### Finalisation of the project

In the final room I added a 'biblically accurate angel' to the scene along with horrible static sound. I feel this completes this room. It's unescapable and always being watched (going with the eye theme). I used a billboarding effect on the eye so that it always faces the camera, similar to that of the trees from Super Mario 64.

<!-- !['Biblically Accurate Angel' :)]({{ page.assetdir }}/eye_unity.png) -->
<figure class="figure">
    <img src="{{ page.assetdir }}/eye_unity.png" class="figure-img img-fluid" alt="Biblically Accurate Angel">
    <figcaption class="figure-caption">Biblically Accurate Angel</figcaption>
</figure>

I also added a few more doors to the scene as one side was lacking with them.

---

### Final Video

<div style="padding:62.5% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/759977908?h=c261d13586&color=ffffff&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

---

### Conclusion

I am very happy with how this project turned out. I feel I definitely achieved the retro look and surreal aspect I initially set out to achieve. The project has two interactions, one the lift, and the next the triggering of the main sequence in this room. When creating this sequence, my default was to do it fully by scripting, but now I realise I could have done it with in-built animation tools, though the doors are probably easier to achieve by scripting. I feel this added to the feeling of the retro style as developers wouldn't have had the tools we have today. I am also proud of how I used the simple water technique to make good looking water, just as older games would have done.

I feel the soundscape I built using free sounds captured and added immensely to the project, because without these sounds, the project would be a lot more dull. The mix of the water stream, rain hitting the metal, and the Shepard tone of the eye combined with the rain turning to blood and the doors spinning above the head bringing your focus to the eye envelopes you in the experience. Then the final creature/angel looking at you for eternity.

As for what I would do differently, I would have made sure all the models had a lower polycount to more represent the limitations of the time. I would have created the sequence to be longer and added more to the calm water trickling down the walls as I feel it gets to the 'bad' stuff too quickly. I would have also added more triggers that occur during your time in the environment.

In conclusion, I feel I definitely achieved the aim of creating a dynamic environment that can be interacted with using a series of triggered events, utilising both realtime visuals and dynamic audio.


---











