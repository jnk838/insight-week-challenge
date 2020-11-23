---
layout: page
title: Challenge List
permalink: /challenges/
---

This page contains all of the challenges which you can complete over the course
of the competition.

The answers to all of the challenges will usually be words separated by
underscores. The case of letters in your answers is **very important**, you
must provide your solutions using only **UPPERCASE** letters.

Example: **THIS_IS_AN_EXAMPLE**.

If a challenge requires an answer that does not fit this format then it will be
clearly indicated in the page for that challenge.

Make sure to submit your final answers on the provided [Google Form](https://forms.gle/RaV2nNM6jQM2UAoo9){:target="_blank"},
otherwise you won't earn any points! Only respond to the Google Form once at the end of the allotted time, you can only submit your answers <strong>once</strong> so make sure you enter as many as you can and make sure they are correct by using the boxes in each challenge. Make sure you submit your solutions <strong>before your time is up</strong> otherwise you won't score any points!

Challenges are grouped by their difficulty:
<li> <strong>BRONZE</strong> = 50 POINTS </li>
<li> <strong>SILVER</strong> = 150 POINTS  </li>
<li> <strong>GOLD</strong> = 300 POINTS  </li>
<li> <strong>PLATINUM</strong> = 500 POINTS   </li>

---

## Bronze:

<div class="item-container">
  {% for challenge in site.data.challenges %}
    {% if challenge.difficulty == 1 %}
      <div class="challenge-container">
        <br><a class="challenge-button" href="{{ challenge.link }}">{{ challenge.name }}</a>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Silver:

<div class="item-container">
  {% for challenge in site.data.challenges %}
    {% if challenge.difficulty == 2 %}
      <div class="challenge-container">
        <br><a class="challenge-button" href="{{ challenge.link }}">{{ challenge.name }}</a>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Gold:

<div class="item-container">
  {% for challenge in site.data.challenges %}
    {% if challenge.difficulty == 3 %}
      <div class="challenge-container">
        <br><a class="challenge-button" href="{{ challenge.link }}">{{ challenge.name }}</a>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Platinum:

<div class="item-container">
  {% for challenge in site.data.challenges %}
    {% if challenge.difficulty == 4 %}
      <div class="challenge-container">
        <br><a class="challenge-button" href="{{ challenge.link }}">{{ challenge.name }}</a>
      </div>
    {% endif %}
  {% endfor %}
</div>