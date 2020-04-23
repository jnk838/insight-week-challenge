---
layout: page
title: Call Me
permalink: /challenges/call-me-HINT
hide: true
---

I realised that someone had a keylistener on my phone, so dialed the wrong pin.
What is the pin number that was dialed?

![alt text][dialfreq]

[dialfreq]: /assets/img/dialfreq.png "Dial Frequency"

---

###### Hint: DTMF

<!-- Answer = 4507 -->

---

<form>
    <label for="answer">Answer:</label><br>
    <input type="text" id="submission" name="submission"><br><br>
    <input type="submit" value="Submit" onclick="javascript:checkAnswer('call-me', document.getElementById('submission').value)">
</form>