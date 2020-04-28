---
layout: page
title: Look Closely
permalink: /challenges/look-closely
hide: true
---

![image][img]

[img]: /assets/img/look-closely.png "Challenge image"

---

<div class="wrap-collapsible">
  <input id="collapsible" class="toggle" type="checkbox">
  <label for="collapsible" class="lbl-toggle">Hint</label>
  <div class="collapsible-content">
    <div class="content-inner">
      <p>
        Look inside the image...
      </p>
    </div>
  </div>
</div>

---

<form>
    <label for="answer">Answer:</label><br>
    <input type="text" id="submission" name="submission"><br><br>
    <input type="submit" value="Submit" onclick="javascript:checkAnswer('look-closely', document.getElementById('submission').value)">
</form>
