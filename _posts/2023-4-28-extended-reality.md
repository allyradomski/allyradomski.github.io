---
layout: journalpost
title: Extended Reality (XR)
categories: year2
toc: true
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

![Sketch of my idea showing connectivity between headset and camera]({{ site.baseurl }}/images/journal/year2/extended-reality/drawing-1.jpeg)

I am my thoughts, so writing could appear throughout showing these thoughts in a rather unclear and abstract way so maybe they could relate to them. Maybe the user could interact with these by looking at them, which could then influence the scene.

Here's a little mockup of my idea. Only problem with this concept is the requirement of an external camera.

<video title="Mockup of my idea" controls>
  <source src="{{ site.baseurl }}/images/journal/year2/extended-reality/Final.mp4" type="video/mp4">
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

![Creating a hole]({{ site.baseurl }}/images/journal/year2/extended-reality/ideaar-1.jpg)
![Adding textures]({{ site.baseurl }}/images/journal/year2/extended-reality/ideaar-2.jpg)
![Transition to URP]({{ site.baseurl }}/images/journal/year2/extended-reality/ideaar-3.jpg)

## Idea 4 - Portals

In the tutorial I discussed ideas with Neil and ultimately I decided on doing AR. We discussed the idea of creating a portal that can take the user between reality and virtual reality. I started work on this.

By watching a [tutorial on stencil buffers](https://www.youtube.com/watch?v=EzM8LGzMjmc) and using depth masks, I managed to create a semi working portal effect.

![Portal prototype in Unity]({{ site.baseurl }}/images/journal/year2/extended-reality/portal.mp4)

## Exploration Conclusion

I felt AR would broaden my skillset instead of doing just VR. Mixing real life and virtuality would be a fun challenge. I really wanted to express myself in this like I said, so I have decided to do my project on an AR Zine that has 6 different poems that I've written as a way to vent my emotions. I plan to give 6 pages (out of 8) in the zine to sort of bring this to life in more than just words.

# Development

## Note
**I wanted to quickly note that this learning journal isn't necessarily the chronological order in which I created the project. When working on this project, I worked on the zine, sounds, art and scene setup in parallel, together.**

## Research

I wanted to extend into the paper of the zine, a more handcrafted approach with a feeling more distant to pure digitalness.

I gathered some games together that show the general feeling I want to achieve. I grew up with LittleBigPlanet which entirely feels like a scene handcrafted throughout. Don't Starve feels like a spooky pop-up book, almost like Haunted House by Jan Pieńkowski, a book I remember admiring the imagery from. The Unfinished Swan using paint to splash and guide the player on a linear story throughout, I distinctly remembering playing it and loving it when it released on PS+ in 2015.

![Games with wanted feeling]({{ site.baseurl }}/images/journal/year2/extended-reality/research1.png)

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

![Quick mock zine]({{ site.baseurl }}/images/journal/year2/extended-reality/mockzine.png)

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

![Scan of drawings]({{ site.baseurl }}/images/journal/year2/extended-reality/scan1.jpeg)

After drawing the textures, I opened them in photoshop and perspective warped it to make sure that the grid lines were aligned to the x and y axis. I then cropped each one into it's own file and applied the threshold filter to make it pure black and white. When needed, I made the white fully transparent (for the door and window and person).

![Door]({{ site.baseurl }}/images/journal/year2/extended-reality/Door.png)
![Floor]({{ site.baseurl }}/images/journal/year2/extended-reality/Floor.png)
![Wall]({{ site.baseurl }}/images/journal/year2/extended-reality/Wall.png)
![Window]({{ site.baseurl }}/images/journal/year2/extended-reality/Window.png)

### Applying the textures

![Textures within the scene]({{ site.baseurl }}/images/journal/year2/extended-reality/progress1.jpg)

I think it's really effective! One improvement could be the lighting, so that it mimics the other lighting in the camera. There is something called lighting estimation that you can do, which I tried to no luck, but I might try explore that later.

## Creating second scene

Next I created the second scene for my poem Ghost. I didn't encounter any issues, it was just a case of creating all the textures on paper and importing them and creating the scene.

### Custom font

I used a site called [Calligraphr](https://www.calligraphr.com/en/) to convert my handwriting into a font. I then imported this font into Unity and used TextMeshPro to place the text around the scene.

### Images
![Created scene]({{ site.baseurl }}/images/journal/year2/extended-reality/animated.gif)

![APK loaded onto phone]({{ site.baseurl }}/images/journal/year2/extended-reality/secondscene-1.jpg)
![-]({{ site.baseurl }}/images/journal/year2/extended-reality/secondscene-2.jpg)

## Creating the third scene

The poem for this page is Repetition, although I'm not fully sure if it counts as a poem. I wanted to show time passing, and the scariness and wackyness of it. I decided to create a clock.

![Clock in action]({{ site.baseurl }}/images/journal/year2/extended-reality/clock.gif)

All the lines are inside the clock, except the last which is below. The 4 lines behind the hands are the 4 seasons. Winter is the jagged one, like my emotions during it. The smooth wavy one is summer, like a calming crashing of the waves, peaceful. Spring is just straight, it's decent! Autumn is the decent into winter.

## Zine progress

![Zine progress]({{ site.baseurl }}/images/journal/year2/extended-reality/zine.png)

A lot of revisits have been made to each aspect so far of the zine. I decided to remove the writing from the Ghost poem scene as it was difficult to read. I am content with keeping it on the page.

### Image markers

The image markers all do have meaning, maybe not to anyone else, but it does to me. The image marker for ghost is the last photo taken with the person it talks about, but you wouldn't know if you don't know. Created in Processing.

The image marker for Blanket of Discomfort is my crying eye. I tend to take a photo occasionally when crying thinking it could come in handy for a project, so there that is. It was created in Processing too.

The marker for Repetiton may be rather morbid, I told Processing to place 7677 circles, the total number of days since my birth when creating it. Though again you wouldn't know that, but yeah. 21 squares too.

The markers for Full Emptiness are apart of the page background, thought it'd be fitting for the name. Empty markers! The emptiness gets filled!

## Fourth scene!

![Two sub scenes]({{ site.baseurl }}/images/journal/year2/extended-reality/fourthscene.png)

### Floor boards

I am very proud of the seamless floor boards. I drew 16 rectangles and put them together in pairs. I then put them in a square and cut edges off at random and placed them at the opposite side to make it tile.

## Texture work

Lots of textures been made shown below, not all might be used.
![Finder window of all drawn and edited textures]({{ site.baseurl }}/images/journal/year2/extended-reality/texturefinder.png)

### Animated textures

A question might be asked that why some textures are animated and some aren't. The general gist is that animated textures should draw your attention to them. But it could also be that I just wanted to animate them because I wanted to.

## Revisiting the first scene

I am not happy with this scene now, as compared to the other two, it's not up to standard. It's difficult to see the scene from the top down, so I have made the decision to rotate it. Here is an quick image of me changing it.

![Rotating it]({{ site.baseurl }}/images/journal/year2/extended-reality/revisit.png)

I am not happy, this will not do. my eye in the image marker should play a part. Maybe this dungeon can be inside my pupil. 

### Creating a depth mask from an image
I posterized my eye and selected my pupil and auto traced it to svg. Using Fusion 360 I created a 3d object mask to apply my depth mask to.

![Illustrator]({{ site.baseurl }}/images/journal/year2/extended-reality/eye1.png)
![Fusion 360]({{ site.baseurl }}/images/journal/year2/extended-reality/eye2.png)
![Unity]({{ site.baseurl }}/images/journal/year2/extended-reality/eye3.png)

![In the eye]({{ site.baseurl }}/images/journal/year2/extended-reality/poem1revisit.jpg)

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

![Mask heart]({{ site.baseurl }}/images/journal/year2/extended-reality/heart.png)

### Twirls

I experimented in Photoshop with the twirl filter. This is how I'm going to make my whirl pool.

![Pre-twirl]({{ site.baseurl }}/images/journal/year2/extended-reality/twirl.png)
![Post-twirl]({{ site.baseurl }}/images/journal/year2/extended-reality/twirl2.png)

I'll draw the "star" on paper, import it, twirl it, and then add falling colours in Processing.

![Drawn star on paper and scanned in]({{ site.baseurl }}/images/journal/year2/extended-reality/twirl3.png)
![Applied threshold effect and removed background, then twirled]({{ site.baseurl }}/images/journal/year2/extended-reality/twirl4.png)

![Effect working]({{ site.baseurl }}/images/journal/year2/extended-reality/twirl.gif)

---

# Conclusion

<div style="padding:45% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/821746331?h=00c46a06db&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

![Front Cover]({{ site.baseurl }}/images/journal/year2/extended-reality/Pages/Front Cover.png)
![Page 1]({{ site.baseurl }}/images/journal/year2/extended-reality/Pages/Page 1.png)
![Page 2]({{ site.baseurl }}/images/journal/year2/extended-reality/Pages/Page 2.png)
![Page 3]({{ site.baseurl }}/images/journal/year2/extended-reality/Pages/Page 3.png)

![Page 4]({{ site.baseurl }}/images/journal/year2/extended-reality/Pages/Page 4.png)
![Page 5]({{ site.baseurl }}/images/journal/year2/extended-reality/Pages/Page 5.png)
![Page 6]({{ site.baseurl }}/images/journal/year2/extended-reality/Pages/Page 6.png)
![Back Cover]({{ site.baseurl }}/images/journal/year2/extended-reality/Pages/Back Cover.png)

Download - [AR Zine APK](https://drive.google.com/file/d/1H6WKzz0ZxLyDsyS67lO50nwZkYrRgcvT/view?usp=share_link)

I'm very happy with the outcome of this project. I felt I challenged myself to do something very different and artistic, and my main goal of expressing myself more was successful.

## Exhibiting the zine

For open share I decided to work further on this and prepare it for exhibition.

[Open Share journal]({{ site.baseurl }}/year2/openshare)