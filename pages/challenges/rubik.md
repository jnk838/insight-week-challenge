---
layout: page
title: Rubik's
permalink: /challenges/rubik
hide: true
---

What happens if you play the following moves on a Rubik's cube?

`cmenfyzgsvtfzyngsvaemc`

But wait, it can't be that simple can it? Of course not! The sequence above has
been encoded using a Caesar Cipher!

[Click here to open the Rubik's cube solver](https://ruwix.com/online-puzzle-simulators/ "I Might Help You").
 
What colours make up the top corner (nearest to the camera) that is generated?

---

<div class="wrap-collapsible">
  <input id="collapsible" class="toggle" type="checkbox">
  <label for="collapsible" class="lbl-toggle">Hint</label>
  <div class="collapsible-content">
    <div class="content-inner">
      <p>
        Shift by ((108+(119*28)-10)/343)+15.
      </p>
    </div>
  </div>
</div>

---

The token is the top corner nearest you. Your token should be in the format of LEFTCOLOUR_TOPCOLOUR_RIGHTCOLOUR

<form>
    <label for="answer">Answer:</label><br>
    <input type="text" id="submission" name="submission"><br><br>
    <input type="submit" value="Submit" onclick="javascript:checkAnswer('rubik', document.getElementById('submission').value)">
</form>
