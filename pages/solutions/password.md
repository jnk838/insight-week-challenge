---
layout: page
title: Password
permalink: /solutions/password
hide: true
---

For this challenge you were provided with an interactive piece of code. This
code removed the string *'password'* from every input you provide. It would be
removed regardless of the case of the letters that you could try. To solve the
challenge you had to use this to your advantage.

This could be be done by including the banned string within itself. The
password that you needed to provide was *'password'*, but just entering that
will make the system think tha you didn't even type anything. An example of an
input that will be accepted is *'passpasswordword'*. This works as the code
will remove 'password' from the middle of the string, and then this will leave
the newly formed string as being 'password', which will then be accepted.

Upon entering an accepted password, you will be given the solution to this
challenge: **WOW_ITS_MY_VERY_IMPORTANT_DATA**.