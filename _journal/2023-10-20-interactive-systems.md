---
layout: post
year: 3
title: Interactive Systems
assetdir: /assets/journal/2023-10-20-interactive-systems
---

<a href="https://drive.google.com/drive/u/2/folders/1yfkDxwHoQVOTG7OngF9sId_RTwL4aRF_">2023 Y3 Drive Link</a>

## Overview

* Pickpocket Eyes
  * Paul is working on this, eyes that follow users with a kinect.
* Tickets
  * A large projected looping video sequence mapped on to hanging surfaces
  * Media player, After Effects/TouchDesigner, Non-interactive
  * Display of a range of different tickets from Glasgow Central, old to new. Possibly follow a route on a map like the Indiana Jones plane travel sequence, showing possible destinations from back then.
* Platform Objects
  * "A projection of typographical and animated treatment to spotlight and explain details about the object you choose to feature (eg. suitcases, Avery scales, etc.). We will generate a simple and elegant re-useable temple we can use on as many objects as you want to feature. This will involve projection mapping on to the platform and sequencing of media"
  * Projection, After Effects/TouchDesigner, Media player looping video, Non-interactive
* Ghost Objects
  * Simple Pepper’s Ghost box presenting short looping animated 3D objects (eg. wireframe of train as proposed, or details of parts)
  * 3D software rendered sequences (Cinema 4D, Maya, Blender), Video media playback on loop, Non-interactive
* Ghost People
  * Projected actors in character, life-size, to be placed in 2/3 positions in the space as proposed
  * Actors probable to be both people that work there
  * Video media playback on controlled loop
  * ***Possibly*** *proximity-based interactive via Arduino PIR sensor input with live computer*
* Light Information
  * Simple Perspex sheets with laser-engraved text and edge lighter which act as captions and labels throughout the space.
  * Static internally-lit externally-powered artefacts, Non-interactive
  * Needs parts building like stand with wire through it and laser engraved perspex sheets.

We created WhatsApp group chats to communicate through each sub-project.

## Platform Objects

<img src="{{ page.assetdir }}/Mock up.png" class="col-12 figure-img img-fluid" alt="Figjam image">

<img src="{{ page.assetdir }}/Testing font styles.png" class="col-12 figure-img img-fluid" alt="Figjam image">

<img src="{{ page.assetdir }}/Testing circle.png" class="col-12 figure-img img-fluid" alt="Figjam image">

<img src="{{ page.assetdir }}/Questions.png" class="col-12 figure-img img-fluid" alt="Figjam image">

<img src="{{ page.assetdir }}/Photos of station.png" class="col-12 figure-img img-fluid" alt="Figjam image">

## Pickpocket Eyes

I was asked to help on this project. The computer being used is a small standalone windows computer that can run the processing sketch.

### Development

<div class="row gy-4">
  <video class="col-6" width="100%" height="auto" title="Program test" controls>
      <source src="{{ page.assetdir }}/Test Video.mp4" type="video/mp4">
      Your browser does not support the video tag.
  </video>
  <div class="col-6">
  I created this program that uses the Kinect4WinSDK to track new users that appear on the screen and their x-coordinate. This was created independant from the main program to be able to be linked in with it.

  I used the example code provided with the library and fixed an issue with it not removing disappearing users. I used the important bits (didn't need to store the skeleton of each user, only the changing x-position) into libraries.
  </div>
  <div class="col-8">
  The attractor for the eyes (the part that attracts people to take part in it) says "Beware Pickpockets" like in the station in the past. I used images of recreations of the sign and edited them to be higher quality and purely white. 
  </div>
  <figure class="figure col-4">
    <img src="{{ page.assetdir }}/sign.jpg" class="figure-img img-fluid" alt="Pickpocket Beware Graphic">
    <figcaption class="figure-caption">Pickpocket Beware Graphic</figcaption>
  </figure>
  <figure class="figure col-4">
    <img src="{{ page.assetdir }}/Loop.png" class="figure-img img-fluid" alt="Sequence Loop">
    <figcaption class="figure-caption">Sequence Loop</figcaption>
  </figure>
  <div class="col-8">
  I worked with Paul on the sequence of the installation. It is split into 3 different statuses.
  
  <ul>
    <li>
      <b>Attractor</b>
      <p>
      Part of the sequence to attract users to use the installation and present when no one else is present.

      It will have the old "Beware Pickpockets" sign.

      When a user enters the kinects view, the main loop is executed.
      </p>
    </li>
    <li>
      <b>Main</b>
      <p>
      The attractor text will fade out into a screen with just the eyes that follow the users horizontal position.
      A maximum number of eyes will be shown with no overlap between them.

      If no user is present for a determined amount of time, the outro loop is executed.
      </p>
    </li>
    <li>
      <b>Outro</b>
      <p>
      Part of loop between Main and the Attractor. The eyes fade out here and after that is done the Attractor loop is executed with the text fading in.
      </p>
    </li>
  </ul>

  One <b>bug</b> encountered during testing was what happens if a user enters during the outro sequence. What happens is they do not get added to the user list. What should happen is they are added and the Attractor is skipped.
  </div>
  
</div>

