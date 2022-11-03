---
layout: journalpost
title: Data Visualisation
categories: year2
---

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

![Miro board for converting cell values to useful values]({{ site.baseurl }}/images/journal/year2/data-visualisation/miro_plan.jpg)

#### Visualising the data

I began development by reading all the rows and trying to plot these orbits in 3d space.

![Development images]({{ site.baseurl }}/images/journal/year2/data-visualisation/development-1.png)
![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/development-2.png)
![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/development-3.png)
![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/development-4.png)

I was struggling with orbits not matching up with other visualisers other people made online. I mainly used[SatelliteXplorer](https://geoxc-apps.bd.esri.com/space/satellite-explorer/), below shows an image of comparison between mine and theirs. It matches up quite well but there's a few inconsistencies.

![Comparison of my sketch to SatelliteXplorer]({{ site.baseurl }}/images/journal/year2/data-visualisation/comparison.png)

#### Breaking down the issue

It was overwhelming to spot the problem with all the orbits showing. I simplified things by adding a equatorial plane and a line showing up so that I could orientate myself and identify the issues.

![Breaking the problem down]({{ site.baseurl }}/images/journal/year2/data-visualisation/breaking_down_problem.png)

After more investigation, it seemed a few of the orbits on SatelliteXplorer were actually inconsistent with the expected orbits. The one I spotted initially was INMARSAT 6-F1, it was meant to be Geostationary but the SatelliteXplorer showed it as not. I learnt this [here](https://www.n2yo.com/satellite/?s=50319). This seemed to match up with the values I expected. I also changed some signs in my code and also neatened it up to help me.

![Sketch code]({{ site.baseurl }}/images/journal/year2/data-visualisation/code.png)

#### Changing to 2D

I decided to change from 3D to 2D. This is so I can more clearly visualize the data and so it'll work better as a printed PDF. I feel I'll also have more creative input in 2D as it'll be simpler and more achievable within the time limit.


![Progress]({{ site.baseurl }}/images/journal/year2/data-visualisation/progress1.jpg)
![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/progress2.jpg)
![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/progress3.jpg)

![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/progress4.jpg)
![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/progress5.jpg)
![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/progress6.jpg)

![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/progress7.jpg)
![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/progress8.jpg)
![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/progress9.jpg)

![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/progress10.jpg)

![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/progress11.png)
![-]({{ site.baseurl }}/images/journal/year2/data-visualisation/progress12.png)


### Final

![Overview]({{ site.baseurl }}/images/journal/year2/data-visualisation/final_with_labels.jpg)

![Final image]({{ site.baseurl }}/images/journal/year2/data-visualisation/final.png)














