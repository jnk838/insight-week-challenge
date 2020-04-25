---
layout: page
title: Call Me
permalink: /challenges/call-me
hide: true
---

I realised that someone had a keylistener on my phone, so dialed the wrong pin.
What is the pin number that was dialed?

![alt text][dialfreq]

[dialfreq]: /assets/img/dialfreq.png "Dial Frequency"

<!-- Answer - FOUR_FIVE_ZERO_SEVEN -->

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
