---
year: 3
title: Spatial Audio
assetdir: /assets/journal/2024-02-09-spatial-audio
---

# Idea

My idea for this project was to capture motion and then translate that into spatial audio. I was thinking of capturing the movement using a webcam above and then using difference tracking to apply different Control Change properties to an Ableton patch. 

I will be exploring [Envelop for Live](https://envelop.us/page/software), a Max For Live toolset that lets me explore spatial audio using numerous tools. I will be using Ableton Suite 10.

Here is a little diagram of my idea.

<figure class="figure col-12">
    <img src="{{ page.assetdir }}/flow.jpg" class="figure-img img-fluid" alt="Diagram">
    <figcaption class="figure-caption">Diagram</figcaption>
</figure>

# Equipment

- MOTU UltraLite-mk5
    - Allows 8 output channels to 8 speakers   
- 4x PreSonus Eris E3.5 Speakers
    - 4 pairs of 2 for 8 speakers

# Hardware setup

After a bit of a faff and lots of wires, I connected up all speakers to the MOTU, with each channel consecutive after each other. 

<figure class="figure col-12">
    <img src="{{ page.assetdir }}/setup.jpg" class="figure-img img-fluid" alt="Octagonal speaker setup">
    <figcaption class="figure-caption">Octagonal speaker setup</figcaption>
</figure>

# Software setup

## Audio MIDI Setup
Using in-built software Audio MIDI Setup, I was able to configure the MOTU to use octagonal setup. It was confusing at first matching the different channels to each other.
## CueMix 5
Using the MOTU, channels 3, 4, 9 and 10 appeared the be muted. This was a problem said by Neil. I managed to download the correct software (CueMix 5) to unmute these channels. It was then back to normal.

<figure class="figure col-12">
    <img src="{{ page.assetdir }}/cuemix.png" class="figure-img img-fluid" alt="CueMix 5">
    <figcaption class="figure-caption">CueMix 5</figcaption>
</figure>
