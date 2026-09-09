---
title: "Building a Low-Cost Seismic Sensor, Part 2: Let's Start Cooking the Hardware"
description: "A look at the ingredients behind my homemade seismic sensor, from the Raspberry Pi and ADC board to the three geophones listening for ground motion."
date: 2026-09-09 00:00:00 +0000
category: Research life
tags: [seismic sensor, Raspberry Pi, ADS1256, geophones, electronics, hardware]
published: true
---

In the first part, I talked about how I went from blinking an LED to wanting to build my own small seismic sensor. Now it is time to talk about the ingredients.

Honestly, building a sensor is a little like cooking. You gather your ingredients, follow a recipe more or less, make a bit of a mess, and discover that some things do not work the way you expected. Then, after enough experimenting, you suddenly see that first little signal appear. That is the moment when the pile of components in front of you begins to feel like something real.

The first major ingredient in my system is a Raspberry Pi 4 Model B with 4 GB of RAM. To be honest, the amount of RAM is not the most important part of this project. It could probably work with a Raspberry Pi 3, and of course a Pi 5 would also be an option. But because I eventually want to run a web interface on the system, I thought that starting with 4 GB would give me a little more room to develop it.

Prices are what they are, so I did not see a reason to choose the newest and most expensive model. The Pi 4 seemed like a sensible balance between cost, performance, and what I hope to build later. For now, it will act as the brain of the sensor, running the software, collecting the measurements, and eventually making the data easier to view and manage.

The second ingredient is the analog-to-digital converter, or ADC. I am using the Waveshare High-Precision AD/DA Board, which is based on the ADS1256 chip. It offers 24-bit resolution and eight input channels. I first noticed this board in a similar project on GitHub, and it seemed like a reasonable place to start.

The role of the ADC is important because the Raspberry Pi cannot directly understand the analog signals produced by the geophones. The board sits between them and translates those small electrical signals into digital values that the Pi can record and process. There may be better boards that I can experiment with in the future, but for now, this one gives me what I need to get the system working.

The main ingredients, however, are the geophones. I have three 4.5 Hz geophones: two horizontal and one vertical. I chose 4.5 Hz models because, compared with the more common 10 Hz geophones, they are more sensitive to lower-frequency motion. That does not mean they are perfect for every low-frequency measurement, but for a starter project in this price range, they are a solid choice.

Their orientation matters too. The ground does not move only up and down. It also moves from side to side in different directions. To capture that motion, I use one vertical geophone and two horizontal geophones positioned at 90 degrees to each other. Together, they provide the three basic components of motion: X, Y, and Z.

Then there are all the smaller ingredients: wires, connectors, solder, and plenty of careful assembly. This is not the glamorous part of the project, but it matters just as much as the larger components. One loose connection or a poor solder joint can make the entire system behave strangely, or stop it from working altogether.

So that is my current ingredient list: a Raspberry Pi as the brain, an ADC board as the translator, and three geophones as the ears listening for movement in the ground.

With the ingredients ready, the next step is to put everything together. In the next part, I will talk about how I connected these components and the first steps I took to bring the sensor back to life.
