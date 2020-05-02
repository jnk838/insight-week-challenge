---
layout: page
title: The Name is Jason
permalink: /challenges/jason
hide: true
---

Okay, I lied. This is what's called a **json** file. Decipher the contents, and
the answer will be yours.

```json
{
    "order": {
        "first": "six",
        "second": "seven",
        "third": "nine",
        "fourth": "one",
        "fifth": "three",
        "sixth": "ten",
        "seventh": "seven",
        "eighth": "four",
        "ninth": "nine",
        "tenth": "one",
        "eleventh": "ten",
        "twelfth": "three",
        "thirteenth": "six",
        "fourteenth": "five",
        "fifteenth": "eight",
        "sixteenth": "eight",
        "seventeenth": "five",
        "eighteenth": "two"
    },

    "characters": {
        "one": "D",
        "two": "R",
        "three": "_",
        "four": "U",
        "five": "E",
        "six": "B",
        "seven": "O",
        "eight": "T",
        "nine": "N",
        "ten": "S"
    }
}
```

---

<form>
    <label for="answer">Answer:</label><br>
    <input type="text" id="submission" name="submission"><br><br>
    <input type="submit" value="Submit" onclick="javascript:checkAnswer('jason', document.getElementById('submission').value)">
</form>
