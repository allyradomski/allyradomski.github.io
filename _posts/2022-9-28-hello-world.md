---
layout: journalpost
title: Hello World
categories: year2
---

Hello World Project

<!-- - Location Data
> Downloading Google Maps Location Data
> Parsing JSON data
> Filtering with Python to dates after arriving in glasgow
> Adding to a csv file, consisiting of time, lat, and lon
> Reading it into javascript and visualising with points and lines (using k-d tree)

![location data from google]({{ site.baseurl }}/images/journal/year2/hello-world/data.png)
Test, aaaaaaaa
![parsed and simplified data]({{ site.baseurl }}/images/journal/year2/hello-world/data2.png)
Test 2, bbbbbbb -->
<!-- 
- Radial
> Making circles every 1km with 100m circles
> Adding meter markings

- Face Data
> Turning selfie background transparent
> Making it 1080x1080 and greyscale
> Reading the image pixel by pixel and placing a point randomly depending on brightness of pixel (ignoring transparent)
> Connections determined by brightness
> Dotting random spots outside

- Video
> During development outputted the images
> Linking them all together in a video
> Creating audio that matches it


TEST TEST -->

The brief is to create a 'Data Selfie' using data that is particular and personal to you. I struggled with ideas for which data to use, thinking about what data has already been collected, or what data I could collect. 

I had ideas such as:
* Activity on phone, divided into app categories
* Blood test results over time
* My mood throughout the week

Since I only had a few days to finish this project, I needed a big enough data set to show variation. I decided on using the location data Google collects from us.

![Figure A]({{ site.baseurl }}/images/journal/year2/hello-world/data.png)
![Figure B]({{ site.baseurl }}/images/journal/year2/hello-world/data2.png)

I downloaded my location data in the form of a JSON file, resulting in a file over 500mb, location history dating back to 2016. The structure of this file is shown above in *Figure A*. I parsed this data using Python, converted the dates to Unix time to make it easier to deal with later, and then wrote to a csv file as shown in *Figure B*. This contained the time, longitude and latitude. 

There was a lot of data I didn't want from the original file such as whether my battery is charing, which platform my phone is, etc. This could be fun to play around with in the future. 

I created a [p5.js](https://p5js.org) project and loaded the csv file. I experimented plotting the data all the way from 2016, but since a lot of the data is confined to my home and trips to places, it wasn't that interesting.

After this, I decided to filter all the data to be after I arrived in Glasgow (10/09/22) in Python and then write to a csv again.

---

![Figure 1]({{ site.baseurl }}/images/journal/year2/hello-world/progress-1.jpg)
![Figure 2]({{ site.baseurl }}/images/journal/year2/hello-world/progress-2.jpg)
![Figure 3]({{ site.baseurl }}/images/journal/year2/hello-world/progress-3.jpg)
![Figure 4]({{ site.baseurl }}/images/journal/year2/hello-world/progress-5.jpg)

*Figure 1* above shows me loading the location data from the simplified csv file and plotting the points using the longitude (x) and latitude (y). We can see there's a lot of points in some areas, and other areas are quite sparse. This is due to how long I have spent time there. I can tell the points are accurate as I can recognise the streets I've been along lots.

*Figure 2* above shows me experimenting with these points by linking up nearby ones. I used a [k-d Tree Javascript library](https://github.com/ubilabs/kd-tree-javascript) to efficiently search for nearby points and then draw lines between them. I didn't need to necessarily do this for these points as the project is a standalone image so optimisation doesn't really matter, but it did help speed along the progress of the art.

I like how 'webby' and interesting the resulting shape is. It's ambiguous to what it is, but also detailed enough to be able to point out locations from it.

In *Figure 3* above, I continued to experiment with this idea. I had the idea to put circles behind it so that the distances between each point is more clear. The circles here don't currently represent any specific distances.

Continuing with that idea, *Figure 4* above shows the accurate scaling with the circles, with each step being 100 meters. For every kilometer, I made the line thicker and added two small labels, '1 KM and 2 KM'.

I did the scaling by providing a radius of 2.5km and calculating where the points should be using the fact that:
* 1° Longitude = 87.8701824 km
* 1° Latitude = 111.044736 km

The horizontal line in the center goes from west to east. I added this to have some 'latching on' for the orientation.

I am really liking the progress of how it is looking. It reminds me of submarine radar systems and it feels quite alien (like when first coming to Glasgow!).

---

![Figure 5]({{ site.baseurl }}/images/journal/year2/hello-world/progress-6.jpg)
![Figure 6]({{ site.baseurl }}/images/journal/year2/hello-world/progress-7.jpg)

I thought about adding an actual selfie but keeping with the theme. In *Figure 5* above, I experiment with this. I first got a photo and removed the background and then turned it into greyscale. I then looped over every pixel in the canvas and placing a point if:
1. It isn't a fully transparent pixel
2. A randomly generated value from 0.0 - 1.0 is below the pixel colour (0.0 - 1.0) multiplied by some value. 

I then used a similar method from before to connect each point to each other. The output does resemble the outline of myself but is very ambigious and unclear. I wanted it to be more clear.

In *Figure 6* above, I made my image more clear by creating more points. This time I also randomly created points outside of my face. I then connected the points together again, but this time the brighter pixels have more connections. I like the result but feel that it feels quite empty around other parts.

---

![Figure 7]({{ site.baseurl }}/images/journal/year2/hello-world/selfie.jpg)

*Figure 7* above shows the **final** image of this project. I made it so more random points outside my head are added, this fills the space and adds to the 'webbyness' of it all. For a final touch, I added my name to the bottom along with the university and the course name.

---

I am very happy with how this project turned out. The data I used is personal to me. The data shows my 2 week exploration of Glasgow so far as I'm settling into my new home and the pride I have in my ability to express my gender identity.

I am a fan of how I included some diagrammatic aspects like adding labels to show distance and circles to show distance. 

---

Work in progress


<!-- Libraries used:\
Ubilabs - k-d Tree JavaScript Library - [https://github.com/ubilabs/kd-tree-javascript](https://github.com/ubilabs/kd-tree-javascript)\
p5.js - [https://p5js.org](https://p5js.org)\
Font used: Matthew Welch - Secret Code - [https://www.dafont.com/secret-code.font](https://www.dafont.com/secret-code.font) -->
