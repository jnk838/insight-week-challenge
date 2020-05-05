---
layout: page
title: Call Me
permalink: /challenges/call-me
hide: true
---

I was trying to log into my telephone banking when I got suspicious that
somebody was listening in on my phone line. I entered the wrong PIN code on
purpose.

What PIN code did the attackers receive?

![alt text][dialfreq]

[dialfreq]: /assets/img/dialfreq.png "Dial Frequency"

---

<div class="wrap-collapsible">
  <input id="collapsible" class="toggle" type="checkbox">
  <label for="collapsible" class="lbl-toggle">Hint</label>
  <div class="collapsible-content">
    <div class="content-inner">
      <p>
        Look into DTMF.
      </p>
    </div>
  </div>
</div>

---

The words that make up the solution to this challenge are the spelled out form
of numbers.

<form>
    <label for="answer">Answer:</label><br>
    <input type="text" id="submission" name="submission"><br><br>
    <input type="submit" value="Submit" onclick="javascript:checkAnswer('call-me', document.getElementById('submission').value)">
</form>
