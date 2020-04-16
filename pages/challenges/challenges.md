---
layout: page
title: Challenge List
permalink: /challenges/
---

This page contains all of the challenges which you can complete over the course
of this event.

To be able to submit your responses, please click the button below.

<div style="margin-top: 16px">
    <br><a id="home-button" href="http://35.246.49.218:8000/" target="_blank">To the Challenges!</a><br>
</div>
<br>

Challenges are grouped by their difficulty.

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