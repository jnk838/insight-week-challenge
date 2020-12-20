---
layout: challenge
title: Password
permalink: /challenges/password
hide: true
challenge: password
hint: Perhaps the filtering system can be used to your advantage?
---
Cyber security has become a hot topic in recent years and rightly so. Hackers are hungry for data, they have very sophisticated measures to try and break into your accounts and extract information. 

I managed to set my password to be '`password`', but then the system changed
their rules. It is now impossible to get the system to accept my password.

As everyone should know, having a password of simply '`password`' is extremely
insecure, so the people in charge of the IT system decided to add the word to a
list of banned words for including in passwords.

If you look at the table below, you can see how long it would take a program to find your password if it were using Brute Force. This is when the hacker will attempt to breach your account by trying lots of different passwords using a script to do so. These are stored in a word file and tried in order of how likely they are to be your password.

![image][img2]

[img2]: /assets/img/table.png "Brute Force"

You'll find the answer to this challenge if you manage to log into my account
by getting around this filtering system! 

**Click [here](https://repl.it/@jnk838/passwordChallenge#main.py){:target="_blank"} to attempt to get into my account.**

Just to clarify, the filtering system will always
remove the string "password" from your input.