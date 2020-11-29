---
layout: page
title: Welcome
permalink: /solutions/welcome
hide: true
---

The challenge involved decoding the following string:
`V0VMQ09NRV9UT19USEVfQ0hBTExFTkdFUw==`.

At first you may not know what type of encoding this is, but a tell-tale sign
is the **=** at the end. This means that the string has been encoded using an
algorithm called Base64. Not every Base64 string ends with '=', but many will.

Now that we know what the string is, we can decode it. To do this, head over to
[CyberChef](https://gchq.github.io/CyberChef/){:target="_blank"} (or another similar site) and
paste the string into the input box. Now if you look on the left side of the
site, you will see a bar with a list of operations. Dragging the operation
named 'From Base64' into the *Recipe* section in the middle will result in the
input string being decoded.

This gives you the answer to the challenge - **WELCOME_TO_THE_CHALLENGES**.