---
layout: page
title: Rubix
permalink: /challenges/rubix
hide: true
---

#### What happens if you play the following moves on a Rubix cube?
##### The moves have been shifted.

CMENFYZGSVTFZYNGSVAEMC

[Click here to open the rubix cube solver](https://ruwix.com/online-puzzle-simulators/ "I Might Help You")
 
##### What is the top corner, nearest you, that is generated?

<!-- Answer - YELLOW_GREEN_RED -->
<!-- BLDMEXYFRUSEYXMFRUZDLB -->

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
    <input type="submit" value="Submit" onclick="javascript:checkAnswer('rubix', document.getElementById('submission').value)">
</form>
