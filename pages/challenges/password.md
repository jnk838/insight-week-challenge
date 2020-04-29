---
layout: page
title: Password
permalink: /challenges/password
hide: true
---

I managed to set my password to be '`password`', but then the system changed
their rules. It is now impossible to get the system to accept my password.

As everyone should know, having a password of simply '`password`' is extremely
insecure, so the people in charge of the IT system decided to add the word to a
list of banned words for including in passwords.

You'll find the answer to this challenge if you manage to log into my account
by getting around this filtering system! Click [here](https://PasswordIsPassword.jac0bwilson.repl.run)
to attempt to get into my account.

---
<form>
    <label for="answer">Answer:</label><br>
    <input type="text" id="submission" name="submission"><br><br>
    <input type="submit" value="Submit" onclick="javascript:checkAnswer('password', document.getElementById('submission').value)">
</form>
