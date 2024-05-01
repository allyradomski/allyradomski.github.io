---
year: 3
title: Expressive Data
assetdir: /assets/journal/2024-4-26-expressive-data
---

# Introduction

Many of my past projects have been about my own journey and experiences. Such as the poetry from Extended Reality which is quite introspective, to Imagined Environments and Audiovisual which explores how nature has been powerful to my own development. I want to explore in the same vein. For my research proposal for year 4, I proposed researching on how public spaces can inspire play.

For this project, I am going to be capturing location data from one or more places that mean something to me.

# Development
## Data Logger
We have to capture our own data for this project, unlike Data Visualisation which can be datasets collected elsewhere. Using an Arduino is a way to capture data to an SD card, in CSV form. Thinking about what nature and spaces means to me could be the lighting, the ambient sound or bird song, the colours, the walked paths, the air quality.

I can also capture data other ways, such as apps on my phone that make use of inbuilt technology like microphone, GPS, orientation, ...
## Desired outcomes
Since this is going to be a nature based project, I want it to be a non-electrical output. This could be a data informed sculpture, using things such as axidraw, 3D printer.
The reason I want it to be non-electrical is I want to try something different foremost, and I want to sort of put my headspace in the outside. I like using elements from the inspiration in the process of my output.
## Capturing data
I installed an app called GPS Logger which tracks data such as latitude, longitude, altitude, and outputs it to either CSV, GPX, KML. I am going to probably use CSV as I am familiar with it and how to manipulate it.

I went on a walk to the botanics with my friend and captured data from there which I am going to be use for test data. I also captured location data from a walk back to my house from a friends.

## Using Blender Geometry nodes
I found this Blender addon called [Blender Spreadsheet Importer](https://github.com/simonbroggi/blender_spreadsheet_import) which lets me import CSV into Blender to be held in the mesh properties. 

I followed the example on the Github page to read data from the file to create a collection of points based on lat and lon.

<figure class="figure col-12">
    <img src="{{ page.assetdir }}/blender.png" class="figure-img img-fluid" alt="Reading CSV in geonodes and creating points ">
    <figcaption class="figure-caption">Reading CSV in geonodes and creating points </figcaption>
</figure>

It works! I can read in CSV captured by the GPS Logger app and create geometry in Blender. This is a procedural way of modelling that doesn't need code.

### Creating a model

I created a model using the data and varied the curve width through it. I gave it a wet meaty texture. The shape gave me the idea of sort of intestine or another organ. Though, I think the idea of an organ(y) sculpture does fit. It's my journey through nature. It's quite intimate to describe myself as a human that is ultimately like any other animal beneath the skin as meat experiencing joy in places.

<figure class="figure col-12">
    <img src="{{ page.assetdir }}/blender2.png" class="figure-img img-fluid" alt="Comparison of GPX data visualiser and geometry">
    <figcaption class="figure-caption">Comparison of GPX data visualiser and geometry</figcaption>
</figure>

Going further into this intestinal idea, I explored it further by creating what a model could look like. A plot of my data into a model on a sort of curvy blobby plate shape. This could be created with clay using a mold, and then fired and painted. 

<figure class="figure col-12">
    <img src="{{ page.assetdir }}/blender3.png" class="figure-img img-fluid" alt="A mockup of what model could be">
    <figcaption class="figure-caption">A mockup of what model could be</figcaption>
</figure>

I created an animation of this model of "blobs" moving through the curve. This was done in geonodes too. I don't think I'll pursue the animation further but it was interesting to make.
<figure class="figure col-12">
    <img src="{{ page.assetdir }}/blendergif.gif" class="figure-img img-fluid" alt="Animation of model">
    <figcaption class="figure-caption">Animation of model</figcaption>
</figure>

## Using new data

I will be capturing data from lochwinnoch, I also want to capture things analogy like moss, rocks and sand.

I wanted to use clay and then to be fired and painted, but that cannot be done in the time frame. I went and asked at the Stow casting workshop about it. I will have to use clay that can airdry. I chose the DAS clay which I bought from The Works.


<div class="row">
<figure class="figure col-12">
    <img src="{{ page.assetdir }}/blender4.png" class="figure-img img-fluid" alt="Model of new data">
    <figcaption class="figure-caption">Model of new data</figcaption>
</figure>

<figure class="figure col-4">
    <img src="{{ page.assetdir }}/print1.jpg" class="figure-img img-fluid" alt="Printing process">
    <figcaption class="figure-caption">Printing process</figcaption>
</figure>

<figure class="figure col-4">
    <img src="{{ page.assetdir }}/print2.jpg" class="figure-img img-fluid" alt="Print">
    <figcaption class="figure-caption">Print</figcaption>
</figure>

<figure class="figure col-4">
    <img src="{{ page.assetdir }}/imprint.jpg" class="figure-img img-fluid" alt="Pressing it down into clay">
    <figcaption class="figure-caption">Pressing it down into clay</figcaption>
</figure>

</div>

I used the new data I collected to create a model based on previous experiments, I then printed it out using PrusaSlicer on the Original Prusa i3 MK3S.

I attempted to press it down into the clay, it sort of worked! Though I cannot do my idea of filling it with water since this is air dry clay and would go soft if I wasn't fully covering with sealant.

## Pressing a print into clay

I had the idea to press the print into clay and use it as a channel for water. Sort of like my journey.
I created the inverse of the print using two models and the boolean modifier and another object to cut it in half.
<figure class="figure col-12">
    <img src="{{ page.assetdir }}/blender5.png" class="figure-img img-fluid" alt="Blender">
    <figcaption class="figure-caption">Blender</figcaption>
</figure>

I printed this model, it was a semi-success. It had a hole in one of the parts (I think a modelling issue from me) and the filament was very flakey in the dips.

I printed it again with painted on supports with the areas I needed. This added an extra hour, from 2 hours to 3.

<figure class="figure col-12">
    <img src="{{ page.assetdir }}/prusa.png" class="figure-img img-fluid" alt="GCode with added supports">
    <figcaption class="figure-caption">GCode with added supports</figcaption>
</figure>

<figure class="figure col-12">
    <img src="{{ page.assetdir }}/print3.jpg" class="figure-img img-fluid" alt="Print">
    <figcaption class="figure-caption">Left: Print with supports - Right: No supports and other way up</figcaption>
</figure>

## Sculpture

Using the materials I collected I created the sculpture, deciding carefully what to put in each area. For example, the feather is where I saw birds, the lichen is nex to where I found it. The stones from the lochside were scattered where the loch would be.

It was very peaceful creating the sculpture, it felt satisfying like I was building a little world.

<figure class="figure col-12">
    <img src="{{ page.assetdir }}/sculpture.jpg" class="figure-img img-fluid" alt="Wet">
    <figcaption class="figure-caption">Wet</figcaption>
</figure>

<figure class="figure col-12">
    <img src="{{ page.assetdir }}/sculpture2.jpg" class="figure-img img-fluid" alt="Dry">
    <figcaption class="figure-caption">Dry</figcaption>
</figure>

One issue though is that the print either isn't completely flat, so water comes out, and or there's a leak in it somewhere.

# Output

Captured with studio DSLR with a subtle filter using lighroom. I filtered through many photos to get the best ones.

<figure class="figure col-12">
    <img src="{{ page.assetdir }}/ExpressiveDataLow-1.jpg" class="figure-img img-fluid" alt="Overview">
    <figcaption class="figure-caption">Overview</figcaption>
</figure>

<figure class="figure col-12">
    <img src="{{ page.assetdir }}/ExpressiveDataLow-2.jpg" class="figure-img img-fluid" alt="Top-down">
    <figcaption class="figure-caption">Top-down</figcaption>
</figure>

<figure class="figure col-12">
    <img src="{{ page.assetdir }}/ExpressiveDataLow-3.jpg" class="figure-img img-fluid" alt="Close-up">
    <figcaption class="figure-caption">Close-up</figcaption>
</figure>

# Conclusion

In conclusion I am happy with the outcome. I'd have liked to have done my original plan with paint and a fired model which can contain water, but this alternate wasn't bad. It was suggested in the review the print and the clay don't really go together, I think the colours do go together, and it could be interpreted as my life in an artificial world exploring the natural world. But I do see that, I did intend for the print to be filled too.


