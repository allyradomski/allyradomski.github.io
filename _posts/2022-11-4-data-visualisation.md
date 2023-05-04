---
layout: journalpost
title: Data Visualisation
categories: year2
assetdir: /assets/posts/2022-11-4-data-visualisation
---


### Introduction

The aim of this project is to create a static image in Processing to visualize some downloaded data. This data will be in the form of a csv and be accessed locally. The image needs to convey what the data is telling us.

### Research

The first step in this project is figuring out what data to use. I want the data to have lots of columns so there's plenty to experiment on. I also need to be interested in the data. I am thinking about what is personal to me. Some ideas are:

* Data on transgender people
* Data on mental health

I tried to find data on transgender stats (population, openness, quality-of-life..) but there hasn't been much research I can find in which I can download data. The data I have found is rather small so wouldn't be good for creating a data-driven piece.

I also felt that maybe isn't the best idea to work with mental health as that would be quite depressing.

#### Satellites

I've decided to go with satellite data as it sounds quite exciting to work on! I found a site called Celestrak which has all the data of active satellites currently orbiting the earth. 

---

### Development

#### Sourcing CSV file

I used [this](https://www.youtube.com/watch?v=2gAYqtmNJx8) video by NSSI to learn about the key orbital elements.

To start with, I copied the table from Celestrak [here](https://celestrak.org/NORAD/elements/table.php?GROUP=active&FORMAT=tle) but I shortly learnt this isn't the way to go. The issues were the rounding of numbers and the lack of other values like the ones used for the orientation which are Right ascension of the ascending node and the argument of perimeter.

After learning this, I then got the direct CSV file from [here](https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=csv) from Celestrak. I used the video above and numerous sites such as Wikipedia to get the formulas to convert the values from the CSV into more useful ones. I used Miro for this.

![Miro board for converting cell values to useful values]({{ page.assetdir }}/miro_plan.jpg)

#### Visualising the data

I began development by reading all the rows and trying to plot these orbits in 3d space.

![Development images]({{ page.assetdir }}/development-1.png)
![-]({{ page.assetdir }}/development-2.png)
![-]({{ page.assetdir }}/development-3.png)
![-]({{ page.assetdir }}/development-4.png)

I was struggling with orbits not matching up with other visualisers other people made online. I mainly used[SatelliteXplorer](https://geoxc-apps.bd.esri.com/space/satellite-explorer/), below shows an image of comparison between mine and theirs. It matches up quite well but there's a few inconsistencies.

![Comparison of my sketch to SatelliteXplorer]({{ page.assetdir }}/comparison.png)

#### Breaking down the issue

It was overwhelming to spot the problem with all the orbits showing. I simplified things by adding a equatorial plane and a line showing up so that I could orientate myself and identify the issues.

![Breaking the problem down]({{ page.assetdir }}/breaking_down_problem.png)

After more investigation, it seemed a few of the orbits on SatelliteXplorer were actually inconsistent with the expected orbits. The one I spotted initially was INMARSAT 6-F1, it was meant to be Geostationary but the SatelliteXplorer showed it as not. I learnt this [here](https://www.n2yo.com/satellite/?s=50319). This seemed to match up with the values I expected. I also changed some signs in my code and also neatened it up to help me.

![Sketch code]({{ page.assetdir }}/code.png)

#### Changing to 2D

I decided to change from 3D to 2D. This is so I can more clearly visualize the data and so it'll work better as a printed PDF. I feel I'll also have more creative input in 2D as it'll be simpler and more achievable within the time limit.


![Gridding the orbits]({{ page.assetdir }}/progress1.jpg)
![Experimenting with sizing]({{ page.assetdir }}/progress2.jpg)

#### Playing around with different sized cells

I felt the bigger orbits couldn't be shown well if stuck to the same cell size. So I made the cell bigger depending on the orbit size. The way I did this was with a 2d boolean array, and choosing an orbit from an array of unused orbits until one worked by checking the booleans. Then filling the area after with true boolean.

![Picking at random leading to duplicates]({{ page.assetdir }}/progress3.jpg)
![-]({{ page.assetdir }}/progress4.jpg)
![Feeling too busy]({{ page.assetdir }}/progress5.jpg)
![This feels about right]({{ page.assetdir }}/progress6.jpg)


#### Adding NORAD ID information to the orbit

I wanted people to be able to know which the interesting orbits were, which are usually the larger ones as that allows for larger eccentricity. The way I did this was by giving the NORAD ID number, which can be searched to find the exact satellite shown. I didn't want to use numbers though as I felt that would ruin it. I was also inspired by the Voyager 1 Golden Record, which aims to provide information to intelligent beings that don't understand our systems on Earth. Even though aliens wouldn't know what a NORAD ID is, I still liked the idea.

I played around with drawing designs, first being something other than base-10, but I felt too confused and that it'd be too hard to understand anyway. I finally decided to go with base-10 but simply assigning an symbol to numbers 0 - 9 instead. 

![Trying to represent numbers not in base-10]({{ page.assetdir }}/number_design-1.jpg)
![Using base-10 and creating characters with primitive shapes]({{ page.assetdir }}/number_design-2.jpg)

#### Trying to implement the designs by importing the SVGs

I designed the designs in Illustrator and tried to import it into Processing to draw it, but I was having too many problems. First, horizontal and vertical lines were not being drawn. I think because it has a bounding width or height of 0? I tried fixing this by drawing the icon as a whole at once with a box, but I couldn't figure out how to get rid of the box, as without it, the sizing for each one was on the bounding size and not the document size.

![Missing lines]({{ page.assetdir }}/progress7.jpg)
![-]({{ page.assetdir }}/progress8.jpg)
![Problem with the boxes]({{ page.assetdir }}/progress9.jpg)

#### Trying again

I changed the design to get rid of the vertical and horizontal lines to use diagonal ones instead. At first, it appeared to work, but, for some weird reason, a lot of them were lacking elements? I couldn't make sense of it.

![Near fix..]({{ page.assetdir }}/progress10.jpg)

#### Implementing it manually

I eventually figured out the way to do it which was implementing it manually with code without importing anything. This didn't take too long, but would have been preferable for the other way to work.

I also added symbols to the left to show the date range, 1964 - 2022, the possible ranges of the satellites. I also ranged the colours throughout this, with the darkest on the (1)964 and the lightest on the 202(2). This means the date of the satellite can be shown with just colour :)

For clarity, I added a key to the right hand side to show what each symbol meant, by going from 0 - 9, showing the progression of the symbol.

![Adding dates to the left]({{ page.assetdir }}/progress11.png)
![Adding key to the right]({{ page.assetdir }}/progress12.png)


### Final

![Overview of elements of image]({{ page.assetdir }}/final_with_labels.jpg)


![Final image]({{ page.assetdir }}/final.png)

### Conclusion

Overall I am quite happy with how this turned out and see it as a success! I felt the data set I used was plenty enough to make an interesting visualization, and that I managed to match the visualization feel to the actual data, which is space and satellites. I enjoy that I managed to convey lots of information without numbers or words. I created symbols that represent numbers in a simple and primitive way. The graphic in the bottom right is also a simple graphic to represent that we are looking at the Earth, as it's a cross on the circle (planet) from the semi-circle (the sun). It could be cool to use a CNC router machine to cut the shapes out on a material, and maybe put a back light behind it! Or go further with the primitive feeling and apply it to slate. There are many different ways it could be displayed, even just a poster.

I am not the happiest with the colours, I felt I should have made the colour range much larger so that the difference between old satellites can be seen easier. Another thing I'd try and fix if I had more time and knowledge would be fixing the curves in the SVG file, so that curves are curved and not just point to point. This way the graphic would be perfect at every scale. One last thing I would have done would be to ensure that the orbits have longitude 0° pointing down. I had lots of confusion with how to orientate them properly using something called vernal equinox direction.

















