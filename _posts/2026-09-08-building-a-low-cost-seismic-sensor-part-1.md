---
title: "Building a Low-Cost Seismic Sensor, Part 1: From a Blinking LED to Ground Motion"
description: "How a simple Arduino experiment grew into a homemade Raspberry Pi-based seismic sensor, and why I am bringing the project back to life."
date: 2026-09-08 09:00:00 +0000
category: Research life
tags: [seismic sensor, Arduino, Raspberry Pi, geophones, programming, electronics]
published: true
---

I think it all started during my undergraduate years.

I had always been interested in programming, but not only the kind where you sit behind a laptop and print something on a screen. What fascinated me most was discovering that code could control something in the real world: turning on a light, reading data from a sensor, or making something physical happen.

At some point during my bachelor's degree, I took an electronics course where I was introduced to Arduino. My first projects were incredibly simple. I was just turning an LED on and off. From the outside, it probably looked a little silly. It was only a tiny blinking light. But for me, that LED was the beginning of something much bigger.

Once I saw code interacting with the physical world, more ideas started appearing.

One of the first small projects I built for myself was a room temperature and humidity logger. It was supposed to be a quick experiment, but it ended up running for much longer than I expected. In fact, it is still quietly doing its job, sitting in the corner without complaint.

Because my background is in earthquake and structural engineering, I have always been curious about measuring motion and vibration. Professional instruments, however, are expensive. So I bought an inexpensive MEMS sensor and started experimenting.

It was not a professional instrument by any means, but it opened a new door for me. It showed me that even with limited equipment, I could begin exploring the same physical phenomena I studied in engineering, only now through something I had built myself.

Then life became busy. Work, studies, and limited access to better components slowed everything down. The interest was still there, but the time and resources were not.

That changed when I moved to China.

Components were easier to find and much more affordable, and that old excitement returned. For the first time in a while, I felt that I could build something I had wanted to try for years: a seismic monitoring system inspired by the Raspberry Shake, but made in my own way.

I came across a similar project on GitHub, and that gave me the final push. I ordered the parts and got to work. The system would use a Raspberry Pi 4 Model B, a 24-bit analog-to-digital converter, and three 4.5 Hz geophones, with two positioned horizontally and one vertically.

Unlike an accelerometer, a geophone measures ground velocity. That makes it a fascinating instrument for observing vibration and ground motion.

I assembled the system, got it running, tested the code, and began collecting data. Then, as often happens with personal projects, it started gathering dust.

For about a year, it simply sat there. Not because I had stopped caring about it, but because life happened.

Recently, though, I started thinking about it again. Why not turn it back on? Why not continue developing it? And this time, why not document the entire process?

That is why I am starting this series of blog posts.

This will not be a dry academic series filled with equations and datasheets, at least not for now. I want to tell it as a story: how my interest in programming for hardware slowly took me from a blinking LED to building a small homemade seismic sensor.

My goal is to improve the system step by step. Right now, it is based on geophones and a Raspberry Pi, but I also want to add a higher-quality accelerometer soon. Ideally, it could eventually become a low-cost, expandable, and perhaps even open-source hardware platform.

For now, this is the beginning: from blinking an LED, to measuring the temperature of my room, to experimenting with motion sensors, and now to reviving a seismic sensor that has been sitting in the corner, waiting to be brought back to life.

Let's see where it goes this time, and whether it turns into something real or ends up collecting dust again.
