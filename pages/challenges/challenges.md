---
layout: page
title: Challenge List
permalink: /challenges/
---

This page contains all of the challenges which you can complete over the course
of this event.

<div class="item-container">
  {% for challenge in site.data.challenges %}
    <div class="challenge-container">
      <br><a class="challenge-button" href="{{ challenge.link }}">{{ challenge.name }}</a><br>
    </div>
  {% endfor %}
</div>