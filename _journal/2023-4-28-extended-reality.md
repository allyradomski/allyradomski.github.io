---
layout: post
year: 2
title: Extended Reality (XR)
assetdir: /assets/journal/2023-4-28-extended-reality
---


# Introduction

The brief for this project is to use Unity to achieve **AR** or **VR**. 
* AR (Augmented Reality) augments our reality with digital visuals. 
* VR (Virtual Reality) is a digital simulated reality experienced by a user, it replaces our reality. 
* XR (Extended Reality) emcompasses these both.

# Exploring different ideas 

Since Realtime Events went well for me, I am confident with this project and want to push myself. 

In my previous projects, I feel I haven't expressed myself in them, that it's lacking a part of me and has really no personal meaning. I want to express myself in this project. Of course art doesn't need deep meaning, but I want it to have meaning to me at least, with the ability for others to interpret however they want to perhaps.

After talking to people about **creative writing** and wanting to start dabbling in it for a while, I think that no time is better than now to explore it in this project. I want to use writing to express myself. One worry I do have about this project is not wanting to come across as pretentious or to forcefully have deep meaning.

Expressing myself could be done exploring various things.

* Gender dysphoria
* OCD & Anxiety
* Depression
* Lonelyness
* Numbness
* Lack of direction

All these are quite negative, but I often long for a way to express myself and don't know how. Struggling to even understand myself sometimes.

Something else to note is to make it so it isn't a linear experience. People should be able to hop in and out at any time and still experience what I want them to.

## Idea 1 - Mixing realities
I had a thought it'd be interesting to mix a virtual reality with our physical reality.

My thought is to be able to view part of the reality we live in within VR. My idea is to put the VR headset on, but a camera will stream feed into Unity so that you can see the world in the headset, but then to augment that further.

<figure class="figure">
  <img src="{{ page.assetdir }}/drawing-1.jpeg" class="figure-img img-fluid" alt="Sketch of my idea showing connectivity between headset and camera">
  <figcaption class="figure-caption">Sketch of my idea showing connectivity between headset and camera</figcaption>
</figure>

<!-- ![Sketch of my idea showing connectivity between headset and camera]({{ page.assetdir }}/drawing-1.jpeg) -->

I am my thoughts, so writing could appear throughout showing these thoughts in a rather unclear and abstract way so maybe they could relate to them. Maybe the user could interact with these by looking at them, which could then influence the scene.

Here's a little mockup of my idea. Only problem with this concept is the requirement of an external camera.

<video width="100%" height="auto" title="Mockup of my idea" controls>
    <source src="{{ page.assetdir }}/Final.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

## Idea 2 - Exploring liminal spaces in someway

Liminal means occuying a position on both sides of a boundary, liminal spaces being a space that feels it has a place in our physical reality, yet feeling dream-like and uncanny.

I've been intrigued with liminal spaces recently having watched:

* [Liminal Spaces (Exploring an Altered Reality)](https://www.youtube.com/watch?v=N63pQGhvK4M) - Solar Sands
* [Found Footage (nothing happens)](https://www.youtube.com/watch?v=sBheepejVTs) - Lazy Posy
* [Liminal Spaces and Your Memories](https://www.youtube.com/watch?v=QKe_iiaK5JE) - Captain KRB

Thinking back on dreams I've had do remind me of liminal spaces. A space between reality and sleep.

## Idea 3 - AR Zines

Having talked to my friend about making zines, it made me realize that I could make my own zine and use AR to bring it to life.

<div class="row">
    <figure class="figure col-4">
        <img src="{{ page.assetdir }}/ideaar-1.jpg" class="figure-img img-fluid" alt="Creating a hole">
        <figcaption class="figure-caption">Creating a hole</figcaption>
    </figure>
    <figure class="figure col-4">
        <img src="{{ page.assetdir }}/ideaar-2.jpg" class="figure-img img-fluid" alt="Adding textures">
        <figcaption class="figure-caption">Adding textures</figcaption>
    </figure>
    <figure class="figure col-4">
        <img src="{{ page.assetdir }}/ideaar-3.jpg" class="figure-img img-fluid" alt="Transition to URP">
        <figcaption class="figure-caption">Transition to URP</figcaption>
    </figure>
</div>

<!-- ![Creating a hole]({{ page.assetdir }}/ideaar-1.jpg)
![Adding textures]({{ page.assetdir }}/ideaar-2.jpg)
![Transition to URP]({{ page.assetdir }}/ideaar-3.jpg) -->

## Idea 4 - Portals

In the tutorial I discussed ideas with Neil and ultimately I decided on doing AR. We discussed the idea of creating a portal that can take the user between reality and virtual reality. I started work on this.

By watching a [tutorial on stencil buffers](https://www.youtube.com/watch?v=EzM8LGzMjmc) and using depth masks, I managed to create a semi working portal effect.

<video width="100%" height="auto" title="Portal prototype in Unity" controls>
    <source src="{{ page.assetdir }}/portal.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<!-- ![Portal prototype in Unity]({{ page.assetdir }}/portal.mp4) -->

## Exploration Conclusion

I felt AR would broaden my skillset instead of doing just VR. Mixing real life and virtuality would be a fun challenge. I really wanted to express myself in this like I said, so I have decided to do my project on an AR Zine that has 6 different poems that I've written as a way to vent my emotions. I plan to give 6 pages (out of 8) in the zine to sort of bring this to life in more than just words.

# Development

## Note
**I wanted to quickly note that this learning journal isn't necessarily the chronological order in which I created the project. When working on this project, I worked on the zine, sounds, art and scene setup in parallel, together.**

## Research

I wanted to extend into the paper of the zine, a more handcrafted approach with a feeling more distant to pure digitalness.

I gathered some games together that show the general feeling I want to achieve. I grew up with LittleBigPlanet which entirely feels like a scene handcrafted throughout. Don't Starve feels like a spooky pop-up book, almost like Haunted House by Jan Pieńkowski, a book I remember admiring the imagery from. The Unfinished Swan using paint to splash and guide the player on a linear story throughout, I distinctly remembering playing it and loving it when it released on PS+ in 2015.

<figure class="figure">
  <img src="{{ page.assetdir }}/research1.png" class="figure-img img-fluid" alt="Games with wanted feeling">
  <figcaption class="figure-caption">Games with wanted feeling</figcaption>
</figure>

<!-- ![Games with wanted feeling]({{ page.assetdir }}/research1.png) -->

The other games I found have the same artistic energy I want to give off. They just feel so pure and lots of heart gone into it, which is important to show poems with a lot of my heart in.

## Setting up Unity project

The first thing I needed to do was set up my project in Unity. I used the URP with AR Foundation and ARCore as a basis for my project. 

I did encounter a few initial problems, but managed to solve them:

* APK not building due to problematic keystore  - solution was to delete the debug keystore file within the .android in my user directory.
* App crashing on load - Change setting from Mono to IL2CPP.
* Background being black, no camera feed - solution was to add the AR Background Renderer Feature to the Universal Renderer Data.

## Creating placeholder markers in zine template

I used an application called [ARMaker](https://shawnlehner.github.io/ARMaker/) to quickly make tracking images with many tracking points. I created 6 of them and imported them into Unity, adding them to an XR Reference Image Library object.

I then used illustrator to put 6 markers on an A3 size image document, ignoring the front cover and back cover.

<figure class="figure">
  <img src="{{ page.assetdir }}/mockzine.png" class="figure-img img-fluid" alt="Quick mock zine">
  <figcaption class="figure-caption">Quick mock zine</figcaption>
</figure>

<!-- ![Quick mock zine]({{ page.assetdir }}/mockzine.png) -->

## The Poems

### Ghost

>Left, up the stairs, and to the right.
>
>That's where you hide.
>
>You sit there on your bed. I can't see your face.
>
>Did you die?
>
>Please speak to me, please speak to me, please..
>
>What happened?
>
>I don't understand.
>
>Was your warm love,
>
>Your gentle touch,
>
>The glint in your eyes,
>
>And the happiness we had..
>
>Was it all a lie?

This poem was written while thinking about my ex partner that ghosted me, and the long lasting impact it has today. It doesn't impact me much in the conscious mind anymore, they do subconsciously and in dreams.

### Full Emptiness

>Spread out, limbs contorted, she lay on the floor.
>
>It was stable and knew its purpose. She needed that.
>
>Her eyes looked up, not at the ceiling, but beyond.
>
>A gaze upon a full emptiness. Too familiar a space.
>
>Seeing nothing, but feeling everything: she sought clarity.
>
>She never found it. She isn't sure she ever will.

When writing this, I felt the need to vent feelings, but these feelings weren't really assigned to any thought or event. I tried to describe this feeling of a full emptiness.

### A Blanket of Discomfort

>A heavy aura of discomfort blankets my being.
>
>It's all encompassing, unescapable. Will it ever lighten?
>
>Time feels still, that the chime will never be sung. But it does, yet the pain isn't done.
>
>My mind is a prison, I am shackled to the walls.
>
>Promises from an open door, but I only get visitors from ashore. 

The feeling of unescapable sorrow that you cannot really express to anyone else. It feels as if it goes on forever and ever when it is present.

### Insatiable Bliss

>When you're around, my doubts runaway.
>
>Your company: the definition of bliss. Everything is fine.
>
>We hug goodbye with a duration I can never accept.
>
>I am alone now, the pleasure fades into the unrecollectable abyss.
>
>Your presence feels infinitely short and your absence infinitely long. 
>
>Merely a parasite, I long for you to come back.

I wrote this as I felt whenever I had moments I had been longing for, the time it goes away it feels like it never even happened. It feels impossible to cherish the precious times.

### Repetition

>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, Summer, Autumn, Winter
>
>Spring, I wonder what's next.

I wrote this when being upset about how fast time passes and the feeling of having achieved nothing.

## Creating the first scene
### The textures
After playing around with ideas in my head, I felt it would be nice to "extend the paper" with textures that look hand drawn. Best way to do this is to draw them on paper I guessed.

I realized grid paper was the right way for this, as I needed to keep them all the correct size relative to each other when applying them, as differences in pen widths would be confusing.

<figure class="figure">
  <img src="{{ page.assetdir }}/scan1.jpeg" class="figure-img img-fluid" alt="Scan of drawings">
  <figcaption class="figure-caption">Scan of drawings</figcaption>
</figure>

After drawing the textures, I opened them in photoshop and perspective warped it to make sure that the grid lines were aligned to the x and y axis. I then cropped each one into it's own file and applied the threshold filter to make it pure black and white. When needed, I made the white fully transparent (for the door and window and person).

<div class="row">
    <figure class="figure col-6 col-lg-3">
        <img src="{{ page.assetdir }}/Door.png" class="figure-img img-fluid" alt="Door">
        <figcaption class="figure-caption">Door</figcaption>
    </figure>
    <figure class="figure col-6 col-lg-3">
        <img src="{{ page.assetdir }}/Floor.png" class="figure-img img-fluid" alt="Floor">
        <figcaption class="figure-caption">Floor</figcaption>
    </figure>
    <figure class="figure col-6 col-lg-3">
        <img src="{{ page.assetdir }}/Wall.png" class="figure-img img-fluid" alt="Wall">
        <figcaption class="figure-caption">Wall</figcaption>
    </figure>
    <figure class="figure col-6 col-lg-3">
        <img src="{{ page.assetdir }}/Window.png" class="figure-img img-fluid" alt="Window">
        <figcaption class="figure-caption">Window</figcaption>
    </figure>
</div>

<!-- ![Door]({{ page.assetdir }}/Door.png)
![Floor]({{ page.assetdir }}/Floor.png)
![Wall]({{ page.assetdir }}/Wall.png)
![Window]({{ page.assetdir }}/Window.png) -->

### Applying the textures

<figure class="figure">
  <img src="{{ page.assetdir }}/progress1.jpg" class="figure-img img-fluid" alt="Textures within the scene">
  <figcaption class="figure-caption">Textures within the scene</figcaption>
</figure>
<!-- ![Textures within the scene]({{ page.assetdir }}/progress1.jpg) -->

I think it's really effective! One improvement could be the lighting, so that it mimics the other lighting in the camera. There is something called lighting estimation that you can do, which I tried to no luck, but I might try explore that later.

## Creating second scene

Next I created the second scene for my poem Ghost. I didn't encounter any issues, it was just a case of creating all the textures on paper and importing them and creating the scene.

### Custom font

I used a site called [Calligraphr](https://www.calligraphr.com/en/) to convert my handwriting into a font. I then imported this font into Unity and used TextMeshPro to place the text around the scene.

### Images

<figure class="figure">
  <img src="{{ page.assetdir }}/animated.gif" class="figure-img img-fluid" alt="Created scene">
  <figcaption class="figure-caption">Created scene</figcaption>
</figure>

<!-- ![Created scene]({{ page.assetdir }}/animated.gif) -->
<div class="row">
    <figure class="figure col-6">
        <img src="{{ page.assetdir }}/secondscene-1.jpg" class="figure-img img-fluid" alt="APK loaded onto phone">
        <figcaption class="figure-caption">APK loaded onto phone</figcaption>
    </figure>
    <figure class="figure col-6">
        <img src="{{ page.assetdir }}/secondscene-2.jpg" class="figure-img img-fluid" alt="APK loaded onto phone">
        <figcaption class="figure-caption"></figcaption>
    </figure>
</div>

<!-- ![APK loaded onto phone]({{ page.assetdir }}/secondscene-1.jpg)
![-]({{ page.assetdir }}/secondscene-2.jpg) -->

## Creating the third scene

The poem for this page is Repetition, although I'm not fully sure if it counts as a poem. I wanted to show time passing, and the scariness and wackyness of it. I decided to create a clock.

<figure class="figure">
  <img src="{{ page.assetdir }}/clock.gif" class="figure-img img-fluid" alt="Clock in action">
  <figcaption class="figure-caption">Clock in action</figcaption>
</figure>

<!-- ![Clock in action]({{ page.assetdir }}/clock.gif) -->

All the lines are inside the clock, except the last which is below. The 4 lines behind the hands are the 4 seasons. Winter is the jagged one, like my emotions during it. The smooth wavy one is summer, like a calming crashing of the waves, peaceful. Spring is just straight, it's decent! Autumn is the decent into winter.

## Zine progress

<figure class="figure">
  <img src="{{ page.assetdir }}/zine.png" class="figure-img img-fluid" alt="Zine progress">
  <figcaption class="figure-caption">Zine progress</figcaption>
</figure>

<!-- ![Zine progress]({{ page.assetdir }}/zine.png) -->

A lot of revisits have been made to each aspect so far of the zine. I decided to remove the writing from the Ghost poem scene as it was difficult to read. I am content with keeping it on the page.

### Image markers

The image markers all do have meaning, maybe not to anyone else, but it does to me. The image marker for ghost is the last photo taken with the person it talks about, but you wouldn't know if you don't know. Created in Processing.

The image marker for Blanket of Discomfort is my crying eye. I tend to take a photo occasionally when crying thinking it could come in handy for a project, so there that is. It was created in Processing too.

The marker for Repetiton may be rather morbid, I told Processing to place 7677 circles, the total number of days since my birth when creating it. Though again you wouldn't know that, but yeah. 21 squares too.

The markers for Full Emptiness are apart of the page background, thought it'd be fitting for the name. Empty markers! The emptiness gets filled!

## Fourth scene!

<figure class="figure">
  <img src="{{ page.assetdir }}/fourthscene.png" class="figure-img img-fluid" alt="Two sub scenes">
  <figcaption class="figure-caption">Two sub scenes</figcaption>
</figure>

<!-- ![Two sub scenes]({{ page.assetdir }}/fourthscene.png) -->

### Floor boards

I am very proud of the seamless floor boards. I drew 16 rectangles and put them together in pairs. I then put them in a square and cut edges off at random and placed them at the opposite side to make it tile.

## Texture work

Lots of textures been made shown below, not all might be used.

<figure class="figure">
  <img src="{{ page.assetdir }}/texturefinder.png" class="figure-img img-fluid" alt="Finder window of all drawn and edited textures">
  <figcaption class="figure-caption">Finder window of all drawn and edited textures</figcaption>
</figure>

<!-- ![Finder window of all drawn and edited textures]({{ page.assetdir }}/texturefinder.png) -->

### Animated textures

A question might be asked that why some textures are animated and some aren't. The general gist is that animated textures should draw your attention to them. But it could also be that I just wanted to animate them because I wanted to.

## Revisiting the first scene

I am not happy with this scene now, as compared to the other two, it's not up to standard. It's difficult to see the scene from the top down, so I have made the decision to rotate it. Here is an quick image of me changing it.

<!-- ![Rotating it]({{ page.assetdir }}/revisit.png) -->

<figure class="figure">
  <img src="{{ page.assetdir }}/revisit.png" class="figure-img img-fluid" alt="Rotating it">
  <figcaption class="figure-caption">Rotating it</figcaption>
</figure>

I am not happy, this will not do. my eye in the image marker should play a part. Maybe this dungeon can be inside my pupil. 

### Creating a depth mask from an image
I posterized my eye and selected my pupil and auto traced it to svg. Using Fusion 360 I created a 3d object mask to apply my depth mask to.

<div class="row">
    <figure class="figure col-4">
        <img src="{{ page.assetdir }}/eye1.png" class="figure-img img-fluid" alt="Illustrator">
        <figcaption class="figure-caption">Illustrator</figcaption>
    </figure>
    <figure class="figure col-4">
        <img src="{{ page.assetdir }}/eye2.png" class="figure-img img-fluid" alt="Fusion 360">
        <figcaption class="figure-caption">Fusion 360</figcaption>
    </figure>
    <figure class="figure col-4">
        <img src="{{ page.assetdir }}/eye3.png" class="figure-img img-fluid" alt="Unity">
        <figcaption class="figure-caption">Unity</figcaption>
    </figure>
</div>

<!-- ![Illustrator]({{ page.assetdir }}/eye1.png)
![Fusion 360]({{ page.assetdir }}/eye2.png)
![Unity]({{ page.assetdir }}/eye3.png) -->

<figure class="figure col-4">
  <img src="{{ page.assetdir }}/poem1revisit.jpg" class="figure-img img-fluid" alt="In the eye">
  <figcaption class="figure-caption">In the eye</figcaption>
</figure>

<!-- ![In the eye]({{ page.assetdir }}/poem1revisit.jpg) -->

I'm much happier already with this. I've debated whether to invert the colours on the unity scene here. I'll have a further think.

## Thoughts for the final two pages

The one poem I haven't represented yet is Insatiable bliss, and I'm wondering whether to either have this on a two page spread, or on 1 page with another poem at the end. 

I'm against a 6th poem as I haven't really got anything else finished for it and I don't want to pressure myself into making a poem.

Another idea is to not have a poem on the last page, instead having a trigger that does something differently. Perhaps one that plays sounds, maybe sounds that make me feel safe like rain on a tent, or the songs of local birds at home.

### Creative block

I'm struggling to find anyway to find a way to visualize Insatiable Bliss. It's more a feeling. I suppose sound could try evoke this feeling.

After speaking fellow students about my final poem, Kieron said maybe could do colours getting sucked away into a whirlpool type thing. And I really liked that idea.

## Final page

I drew a heart and did the same process as before and imported it into Unity.

![Mask heart]({{ page.assetdir }}/heart.png)

### Twirls

I experimented in Photoshop with the twirl filter. This is how I'm going to make my whirl pool.

<div class="row">
    <figure class="figure col-6">
        <img src="{{ page.assetdir }}/twirl.png" class="figure-img img-fluid" alt="Pre-twirl">
        <figcaption class="figure-caption">Pre-twirl</figcaption>
    </figure>
    <figure class="figure col-6">
        <img src="{{ page.assetdir }}/twirl2.png" class="figure-img img-fluid" alt="Post-twirl">
        <figcaption class="figure-caption">Post-twirl</figcaption>
    </figure>
</div>

<!-- ![Pre-twirl]({{ page.assetdir }}/twirl.png)
![Post-twirl]({{ page.assetdir }}/twirl2.png) -->

I'll draw the "star" on paper, import it, twirl it, and then add falling colours in Processing.

<div class="row">
    <figure class="figure col-6">
        <img src="{{ page.assetdir }}/twirl3.png" class="figure-img img-fluid" alt="Drawn star on paper and scanned in">
        <figcaption class="figure-caption">Drawn star on paper and scanned in</figcaption>
    </figure>
    <figure class="figure col-6">
        <img src="{{ page.assetdir }}/twirl4.png" class="figure-img img-fluid" alt="Applied threshold effect and removed background, then twirled">
        <figcaption class="figure-caption">Applied threshold effect and removed background, then twirled</figcaption>
    </figure>
</div>

<!-- ![Drawn star on paper and scanned in]({{ page.assetdir }}/twirl3.png)
![Applied threshold effect and removed background, then twirled]({{ page.assetdir }}/twirl4.png) -->
<figure class="figure col-6">
  <img src="{{ page.assetdir }}/twirl.gif" class="figure-img img-fluid" alt="Effect working">
  <figcaption class="figure-caption">Effect working</figcaption>
</figure>

<!-- ![Effect working]({{ page.assetdir }}/twirl.gif) -->

---

# Conclusion

<div style="padding:45% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/821746331?h=00c46a06db&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

<div class="row">
    <figure class="figure col-3">
        <img src="{{ page.assetdir }}/Pages/Front Cover.png" class="figure-img img-fluid" alt="Front Cover">
        <figcaption class="figure-caption">Front Cover</figcaption>
    </figure>
    <figure class="figure col-3">
        <img src="{{ page.assetdir }}/Pages/Page 1.png" class="figure-img img-fluid" alt="Page 1">
        <figcaption class="figure-caption">Page 1</figcaption>
    </figure>
    <figure class="figure col-3">
        <img src="{{ page.assetdir }}/Pages/Page 2.png" class="figure-img img-fluid" alt="Page 2">
        <figcaption class="figure-caption">Page 2</figcaption>
    </figure>
    <figure class="figure col-3">
        <img src="{{ page.assetdir }}/Pages/Page 3.png" class="figure-img img-fluid" alt="Page 3">
        <figcaption class="figure-caption">Page 3</figcaption>
    </figure>
    <figure class="figure col-3">
        <img src="{{ page.assetdir }}/Pages/Page 4.png" class="figure-img img-fluid" alt="Page 4">
        <figcaption class="figure-caption">Page 4</figcaption>
    </figure>
    <figure class="figure col-3">
        <img src="{{ page.assetdir }}/Pages/Page 5.png" class="figure-img img-fluid" alt="Page 5">
        <figcaption class="figure-caption">Page 5</figcaption>
    </figure>
    <figure class="figure col-3">
        <img src="{{ page.assetdir }}/Pages/Page 6.png" class="figure-img img-fluid" alt="Page 6">
        <figcaption class="figure-caption">Page 6</figcaption>
    </figure>
    <figure class="figure col-3">
        <img src="{{ page.assetdir }}/Pages/Back Cover.png" class="figure-img img-fluid" alt="Back Cover">
        <figcaption class="figure-caption">Back Cover</figcaption>
    </figure>
</div>

<!-- ![Front Cover]({{ page.assetdir }}/Pages/Front Cover.png)
![Page 1]({{ page.assetdir }}/Pages/Page 1.png)
![Page 2]({{ page.assetdir }}/Pages/Page 2.png)
![Page 3]({{ page.assetdir }}/Pages/Page 3.png)

![Page 4]({{ page.assetdir }}/Pages/Page 4.png)
![Page 5]({{ page.assetdir }}/Pages/Page 5.png)
![Page 6]({{ page.assetdir }}/Pages/Page 6.png)
![Back Cover]({{ page.assetdir }}/Pages/Back Cover.png) -->

Download - [AR Zine APK](https://drive.google.com/file/d/1H6WKzz0ZxLyDsyS67lO50nwZkYrRgcvT/view?usp=share_link)

I'm very happy with the outcome of this project. I felt I challenged myself to do something very different and artistic, and my main goal of expressing myself more was successful.

## Exhibiting the zine

For open share I decided to work further on this and prepare it for exhibition.

[Open Share journal]({{ site.baseurl }}/journal/2023-5-5-openshare/)