---
layout: page
title: Rubik's
permalink: /solutions/rubik
hide: true
---

This was a little trickier. The given cipher, `cmenfyzgsvtfzyngsvaemc`, was a
difficult one to crack, so the hint here was very helpful. By performing some
simple maths, as directed by the hint, it was revealed that every letter in the
provided instruction needed to be replaced by the one before it in the
alphabet. The correct input could be found by using a site such as
[CyberChef](https://gchq.github.io/CyberChef/ "A tool by GCHQ"){:target="_blank"} and solving the
rotation cipher using a value of either *-1* or *25* to it, you'd get the
following input:

`bldmexyfruseyxmfruzdlb`

Once you open the [link](https://ruwix.com/online-puzzle-simulators/ "Rubik's cube simulator"){:target="_blank"}
to the Rubik's cube website and type the code above into the website, the
Rubik's cube rotates in the corresponding directions due to the inputs entered.
Once you have applied these moves, the colours that make up the top corner
(nearest to the camera) are **YELLOW_GREEN_RED**. This is the answer to the
question.