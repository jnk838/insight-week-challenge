---
layout: page
title: Hidden
permalink: /solutions/hidden
hide: true
---

The challenge page showed a black rectangle and not very much else. To find the
answer you had to view the code which creates that web page. The best way to do
this (on Google Chrome at least) is right clicking on the black rectangle, and
then clicking on 'Inspect Element'. This will highlight the HTML code that
creates the specific part of the site.

In this case, the code that makes up the element is:

```html
<svg width="300" height="50">
    <text x="0" y="15" fill="black">TOLD_YOU_IT_WAS_HERE</text>
    <rect width="250" height="20" style="fill:rgb(0,0,0);stroke-with=3;stroke:rgb(0,0,0)" x="0" y="0" />
</svg>
```

As you can see, the item is an SVG image. It is made up of the answer, and the
black rectangle which sits over the top of it.

The answer to this challenge is: **TOLD_YOU_IT_WAS_HERE**.