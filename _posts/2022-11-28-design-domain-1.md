---
layout: journalpost
title: Design Domain Part 1
categories: year2
---

---

### Introduction

The theme for Design Domain this year is Materiality. I’ll interpret this in context to Interaction Design and will research and conceptualize ideas of what I want to achieve in this project.

---

### First thoughts

My first thoughts for Materiality was exploring what senses objects and materials invoke, such as touch, scent, sight and sound. Perhaps how sound gets muffled by walls or how it travels through water. Or maybe how soft a cushion is compared to a concrete floor. I need to be able to give the project an Interaction Design spin, somehow digitize it but also have it there in front of you, not just on a screen. For example, using a projector could give a real object a different surface using say, generative shaders. Or maybe I could create procedural audio for different objects which can be swapped out in front of a camera, to give a voice to the silent objects based on the overall feeling they give off. Materialising senses that otherwise don’t exist, using the material properties that come from an object? I could represent numerous different materials in Processing using different properties like their density, how brittle it is, and maybe it’s melting point.

I do like the idea of giving sound to silent objects depending on the properties of the material it’s made from. This could be achieved by using a camera and some sort of distinction in visuals to detect which object is currently there.

---

### Research

#### Kiki & Bouba

Giving a sound to something that doesn’t have sound is subjective. Not everyone is going to agree on what it would sound like if it made a sound.. but often people do feel the same way about it. I remember watching Tom Scott’s [video](https://youtu.be/1TDIAObsqcs) on the Bouba/kiki effect, in which people are given two shapes and two names, and they match the name to the shape. 

![Kiki? Bouba?]({{ site.baseurl }}/images/journal/year2/design-domain-1/kiki-bouba.svg)

Most people gave the left spikey shape the name Kiki, even across the world in different cultures. This is a similar idea of what I want to do, giving sound to a static silent shape. I want the sounds to be relatable.

#### Synaesthesia 

Synaesthesia is when you experience a sense through another, such as hearing sounds when looking at an object, or feeling touch through sight. I do not experience this myself, but it does relate to my project in that I want to represent object properties, whether that be the texture, look, or weight, through sound.

---

### Development

#### How I will detect the objects

I need to know which objects are currently 'in-view'. I could use image recognition with a camera, maybe by reading text on the object or image classification. Another idea I had was using a weighing scale, and since a static object's weight doesn't change, it will be known which object is on it.

#### Components

I made a small map of the components I felt would be crucial in pursuing this project. Obviously whn developing it, more will arise, but this is a base on what to think on.

![Map of components of projet]({{ site.baseurl }}/images/journal/year2/design-domain-1/components.png)

#### Experimenting with OCR

I wanted to see how viable reading text through the camera in real-time would be. For this, I used Processing and a library called Tess4J, which is based on Tesseract. There was a lot of fiddling and learning how to use something called Maven, but I made it work in the end. The text detection worked.. sometimes.. it wasn’t reliable! Maybe I needed to do better post-processing on the image before reading it, or maybe it’s just made for reading uniform documents. I just knew this wouldn’t be suitable.

![Screenshot of experiment with Tess4J]({{ site.baseurl }}/images/journal/year2/design-domain-1/ocr.png)

#### Arduino weighing scale

Knowing that there's arduino kits in the studio, I researched and found this [article](https://www.instructables.com/How-to-Build-Arduino-Weighing-Scales/) on how to make a weighing scale. After speaking with Cat about this more, I ordered a load cell sensor with bundled HX711 converter from Pimoroni [here](https://shop.pimoroni.com/products/electronic-scale-load-cell-sensor?variant=39365450432595).

I did a simple test to make sure it was working using Whadda's github page [manual](https://github.com/WhaddaMakers/Electronic-scale-load-cell-sensor) and it was a success, the values changed depending on how much pressure I was applying to the device.

#### 3D Workshop

I went to the 3D workshop in the Reid to get some wood laser cut and some metal tubes made.









