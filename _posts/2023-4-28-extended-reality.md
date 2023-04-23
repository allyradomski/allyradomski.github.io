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