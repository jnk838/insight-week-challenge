---
layout: page
title: Rubik's
permalink: /challenges/rubik
hide: true
---

#### What happens if you play the following moves on a Rubik's cube?
##### The moves have been shifted.

cmenfyzgsvtfzyngsvaemc

[Click here to open the rubik's cube solver](https://ruwix.com/online-puzzle-simulators/ "I Might Help You")
 
##### What is the top corner, nearest you, that is generated?

<!-- Answer - YELLOW_GREEN_RED -->
<!-- bldmexyfruseyxmfruzdlb -->

---

<div class="wrap-collapsible">
  <input id="collapsible" class="toggle" type="checkbox">
  <label for="collapsible" class="lbl-toggle">Hint</label>
  <div class="collapsible-content">
    <div class="content-inner">
      <p>
        Shift by ((108+(119*28)-10)/343)+17
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
