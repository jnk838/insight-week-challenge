---
layout: page
title: Challenge List
permalink: /challenges/
---

This page contains all of the challenges which you can complete over the course
of Insight Week.

The answers to all of the challenges will usually be words separated by
underscores. The case of letters in your answers is **very important**, you
must provide your solutions using only **uppercase** letters.

Example: **THIS_IS_AN_EXAMPLE**.

If a challenge requires an answer that does not fit this format then it will be
clearly indicated in the page for that challenge.

Make sure to submit your final answers on the provided [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSdY8CXp1X3GdxRZ8Y8O1Jx5MhLP4eAHbUx_IoBjEGxIM2LD6w/viewform),
otherwise you won't earn any points!
**The deadline for submissions is 8pm on Sunday (24/05/20).**

Challenges are grouped by their difficulty, but all of them are worth the same
amount of points!

---

## Easy:

<div class="item-container">
  {% for challenge in site.data.challenges %}
    {% if challenge.difficulty == 1 %}
      <div class="challenge-container">
        <br><a class="challenge-button" href="{{ challenge.link }}">{{ challenge.name }}</a>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Medium:

<div class="item-container">
  {% for challenge in site.data.challenges %}
    {% if challenge.difficulty == 2 %}
      <div class="challenge-container">
        <br><a class="challenge-button" href="{{ challenge.link }}">{{ challenge.name }}</a>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Hard:

<div class="item-container">
  {% for challenge in site.data.challenges %}
    {% if challenge.difficulty == 3 %}
      <div class="challenge-container">
        <br><a class="challenge-button" href="{{ challenge.link }}">{{ challenge.name }}</a>
      </div>
    {% endif %}
  {% endfor %}
</div>