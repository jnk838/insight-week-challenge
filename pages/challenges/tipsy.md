---
layout: page
title: A Bit Tipsy
permalink: /challenges/tipsy
hide: true
---

What on earth is going on here?

![alt text][dialfreq]

[dialfreq]: /assets/img/tilt.png "Look from a different perspective"

<!-- Answer = Hello World -->

---

<form>
    <label for="answer">Answer:</label><br>
    <input type="text" id="submission" name="submission"><br><br>
    <input type="submit" value="Submit" onclick="javascript:checkAnswer('tipsy', document.getElementById('submission').value)">
</form>