---
layout: journalpost
title: Design Domain Part 2
categories: year2
assetdir: /assets/posts/2023-3-13-design-domain-2
---


# Introduction

This journal entry is a continuation of [Design Domain Part 1]({{ site.baseurl }}/year2/design-domain-1-copy), in which I start creating the idea I proposed and prototyped.

---

# Development
## Designing the housing
### Fusion 360
Designing and creating the housing was the first thing I felt I needed to do in this project. Unlike the prototype, I wanted to hide the components, to keep it all self-contained. The idea is to have a platform to put objects on, without it being that obvious that a weighing scale is being used.

I used Fusion 360 to put together a design for the housing, and then experimenting with animating inside Fusion 360. I liked the idea of making a little construction animation and thought it'd be a nice new skill to try learn. Although the animation is quite janky.

![Janky animation of design in Fusion 360]({{ page.assetdir }}/anim.mp4)

### Laser cut file

I decided to use [Boxes.py](https://www.festi.info/boxes.py/) to create the housing for this project. I had used this previously in Control. I had to decide on a material first, so decided on 6mm thick laser ply wood. This is quite thick and sturdy. The preset I used from Boxes.py was ABox. 

* Blue = cut
* Green = deep engrave
* Red = light engrave

![Laser cut file 1]({{ page.assetdir }}/case6mmlaserply-1.png)

![Laser cut file 2]({{ page.assetdir }}/case6mmlaserply-2.png)

* Box sides w/ patterns
* Plate connecting to box inside w/ two holes for screws
* Plate to connect to scale w/ two holes for screws
* Plate to sit on top of scale w/ pattern
* 4x squares to glue to sitting plate
* Irregular octagon adornment
* Little inner plate to connect arduino to
* Extra hearts


I altered the generated file from Boxes.py to move the notches for the base of the box to the middle, where the scale will be mounted. I then created the remaining pieces, making sure to make the plates slightly smaller so they had wiggle room as touching the edges will affect scale readings.

The reason I added lots of hearts was because I had plenty of free space on the wood and didn't want to waste it, figuring I could do something with the hearts.

### Constructing the housing
I sent the laser cut files to the 3D Making workshop to have the wood cut which went smoothly. Although after receiving the wood, I realized I made a mistake by leaving a line in the file that cut a bit of wood in half, nothing glue won't fix though. I also messed up the engraving on the top plate as I missed a line.

But overall I was happy with the result, and seeing it come together into an actual 3D housing, from idea to reality, did excite me.

![Glueing the box together]({{ page.assetdir }}/gluing.jpg)

![Constructed box]({{ page.assetdir }}/constructed.jpg)

### Finalising the housing

I had numerous ideas of how to decorate the housing, to make it less "lasercutty". One idea was to cover it in stuff in nature, like moss and grass and pebbles. Although, I hadn't much time left and wouldn't know how to make it not look like it's been rolled around in dirt. 

I ended up spray painting the housing black, I found the spray paint in the IxD studio's lockers, which are available to all. I used masking tape to mask off the components I installed inside. It would have been more sensible to paint it before-hand, but I didn't, and the masking tape was effective.

![Spray painting the box]({{ page.assetdir }}/spray-painting.jpg)

## Selecting the objects
I struggled with time on this project, so I used the objects I had lying around. 

* Bag of rocks I collected from a beach
* Two strawberry Smint cans - (recent addiction fueled by Nic)
* CMY cube I received as a gift
* Gold spray painted biscuit that has a chomp taken out of it
* The sculpture I made with the printed hearts

These are quite a unique selection of objects.

## Software and hardware
### Arduino
Using [example code from Whadda](https://github.com/WhaddaMakers/Electronic-scale-load-cell-sensor) I used an arduino to read the values from the scale load sensor. The arduino code printed the result to the serial port, which could then be read by Processing, the software I used to control everything. 

![Code for the Arduino]({{ page.assetdir }}/arduino-code.png)

### Processing

![Code for Processing]({{ page.assetdir }}/processing.png)

---

# Final display of the work

The finished display was displayed on a shelf in the studio, with two speakers for the sound. I also spray painted wood with golden speckles for the backing of the housing. I felt this was very effective. The objects could be switched out and different sounds would be played which represented how I saw these objects and what I felt they would sound like and the emotions they'd radiate.

![Display of project]({{ page.assetdir }}/display.jpg)






