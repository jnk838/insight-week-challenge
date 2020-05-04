---
layout: page
title: Silly String
permalink: /solutions/silly-string
hide: true
---

The challenge page gave a long string of emoji characters:
`🎉🎊🎉🎉🎊🎊🎉🎉🎉🎊🎉🎉🎊🎊🎊🎊🎉🎊🎉🎉🎊🎊🎊🎊🎉🎊🎉🎉🎊🎉🎊🎊🎉🎊🎉🎊🎉🎉🎊🎊🎉🎊🎉🎊🎊🎊🎊🎊🎉🎊🎉🎉🎊🎊🎉🎉🎉🎊🎉🎉🎊🎉🎉🎊🎉🎊🎉🎉🎊🎉🎊🎊🎉🎊🎉🎉🎉🎊🎉🎊🎉🎊🎉🎊🎊🎊🎊🎊🎉🎊🎉🎉🎉🎉🎊🎉🎉🎊🎉🎉🎊🎉🎉🎊🎉🎊🎉🎉🎊🎊🎊🎉🎉🎊🎉🎉🎉🎉🎉🎊🎉🎊🎉🎊🎉🎉🎊🎉🎉🎊🎉🎊🎊🎉🎉🎊🎉🎊🎉🎊🎊🎊🎊🎊🎉🎊🎉🎊🎉🎊🎉🎉🎉🎊🎉🎉🎊🎊🎊🎊🎉🎊🎉🎊🎊🎊🎊🎊🎉🎊🎉🎉🎊🎊🎉🎊🎉🎊🎉🎉🎉🎊🎉🎊`

Looking at this string, you can see that there are only two different
characters that are used. What else uses only two characters? That's right,
binary. If we swap 🎊 for 1 and 🎉 for 0, we get the following:
`0100110001001111010011110100101101010011010111110100110001001001010010110100010101011111010000100100100101001110010000010101001001011001010111110101010001001111010111110100110101000101`.

By converting this binary string back to plain text, we find the challenge
answer: **LOOKS_LIKE_BINARY_TO_ME**.

All of this can be done using [CyberChef](https://gchq.github.io/CyberChef/) by
using the following steps.

![Answer][answer]

[answer]: /assets/img/silly-string-solution.png