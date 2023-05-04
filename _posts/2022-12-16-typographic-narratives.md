---
layout: journalpost
title: Typographic Narratives
categories: year2
assetdir: /assets/posts/2022-12-16-typographic-narratives
---


### Introduction

Typography is the art of arranging type. Type is either a physical block with a character etched into it, or the way characters are represented in digital form.

The aim of this project is to create typographic art with an interaction design twist, not just using standard methods.

I have played around with manipulating character glyphes in p5.js before using opentype.js so I am a little familiar, but I am excited to delve into this.

---

### Processing

I used Geomerative in Processing to create a few different outputs. It took a while to get a grasp of Geomerative, but eventually I learnt how to split a string of font glyphs into an array of points that I could manipulate. I used the method getCurveLength and getPoint with the RCommand object to able to have futher detail in the outline. 

Initially I chose the word "FUCKKKK" because it was one of the first that popped into my head. I felt I could somehow represent this exclamation of fustration or anger with Processing by making it morph and stretch and repeat in a weird glitchy seeming manner.

![Drooping effect with threshold filter]({{ page.assetdir }}/white-processing.png)

![Frame of monochromatic version of effect]({{ page.assetdir }}/grey-processing.png)

I changed it to "FUUUCK" as that's how you'd say it if extending it. Below is an experiment with it being red.

![Red version of final effect]({{ page.assetdir }}/red-processing.png)

Below is the final animated version.

<div style="padding:141.41% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/778276489?h=904d90e81b&loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

---

### After Effects Project 1

After the tutorial with Gillian, I felt I had a small grasp of the software and wanted to explore it more. Using the song Foot Chamber by Soap&Skin, I attempted to visualize this song using typography and video.

The video was taken in slow-motion on a train whilst on a trip. I really liked the scenery and the parallax of all the layers of the view. I wanted to include the town as I felt it fit into the song, it felt quite remote, but in a gorgeous place. I feel the song is sad but pretty.

Soap&Skin made some music for the Netflix series Dark, in which the intro has lots of mirrored imagery. I explored the way in which I could mirror my video, and also not make it feel too stale.

Below is the final video. Due to compression and the grain, it doesn't look exactly like my original.

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/779060150?h=1d008341c5&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

---

### After Effects Project 2

I wanted to further explore After Effects, especially expressions further. I hadn't really any idea going into this, but developed ideas the more I experimented with it.

1. The first thing I did was create a generative wave path using expressions and 1 dimensional perlin noise. After this, I could then make multiple objects follow this path, and then stacked them to make it multi-layered. I used expression controls to control this wave and modulated a couple of them using the sine function in expressions.

2. After, I created a text sequence using a bubbly font. I decided to alter the kerning individually per letter so that each one touched the next. I wanted the text to be able to flow fully left to right. I made the text white so that I can only show the waves on the white sections.

3. I used an effect to change the waves from the previous orange to a nice pink. On the text, I used the stencil alpha mode to show the waves only on the text. This also lets the letters be transparent when there's empty space on the wave.

4. After this, I had the idea of putting it on a billboard. I decided to split the image up into individual "pixels". To do this, I used the repeater twice to create the grid. I made use of expression controls again to let me fine-tune it and make changes easily if I wanted to. I first pixelised it using the mosaic effect and then used the stencil alpha mode again to only show the image on the squares.

5. Finally, I used the corner-pin effect to put it on an empty billboard I found online, and then added a glow so that it adds to the effect, espeically with it being in the night. 

![1]({{ page.assetdir }}/step-1.png)
![2]({{ page.assetdir }}/step-2.png)
![3]({{ page.assetdir }}/step-3.png)

![4]({{ page.assetdir }}/step-4.png)
![5]({{ page.assetdir }}/step-5.png)

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/780338136?h=8aa6ef8add&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

---

### Arduino Ultrasonic

For my next project, I wanted it to be able to be interacted with and not be on a computer screen. After discussing ideas with Paul, I decided to try make use of an arduino with ultrasonic sensor, and a projector. The ultrasonic sensor is used to detect the distance of the object in front of it. 

I used Processing with the Keystone library to map the projection onto a square. I also used the Serial library to receive the distance from the Arduno, and Geomerative to manipulate the text.

The text keeps the same relative size in your eyes, so it feels it is keeping the same distance from you and moving away, even though it isn't. I also made the text 'decay' as it got smaller. I chose the word decay as I felt it fit it perfectly.

<iframe src="https://player.vimeo.com/video/784811491?h=2ebe7fd20e&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

Here is a little bonus project :)

<video width="100%" height="auto" title="Mario 64 shifting portait" controls>
    <source src="{{ page.assetdir }}/mario.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

---

### Conclusion

Overall I am quite happy with this project. I explored typography and other technologies in 4 different short projects. I explored the Geomerative library with Processing to experiment on how to manipulate the actual text characters. I explored After Effects for the first time, and felt I picked it up quite quickly, although I suspect I've barely scratched the surface. I also explored further with the Arduino, using an Ultrasonic sensor to sense distance. In this project I also experimented with Projection mapping for the first time.

Although, looking back, I feel I should have explored the letter forms and the details of type and how it's created. As said by Paul, the kerning on the letters on my first After Effects project are not great. They're inconsistent.





