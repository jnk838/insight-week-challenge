---
layout: page
title: Password
permalink: /solutions/password
hide: true
---

For this challenge you were provided with an interactive piece of code. To make
sure you couldn't find the solution just by looking at the code, I had to host
the code that handled the processing externally. This code removed the string
*'password'* from every input you provide. It would be removed regardless of
the case of the letters that you could try. For those that are interested, here
is the backend code:

```py
import os, re

def check(request):
    request_json = request.get_json()

    if request_json and 'password' in request_json:
        userPass = request_json['password']
        print("Entry: ", userPass)

        userPass = re.sub(r'(P|p)(A|a)(S|s)(S|s)(W|w)(O|o)(R|r)(D|d)', '', userPass)
        
        if userPass == "password":
            return str(os.getenv("TOKEN"))

    return 'wrong'
```

To solve the challenge you had to use this filtering to your advantage. This
could be be done by including the banned string within itself. The password
that you needed to provide was *'password'*, but that input will be reduced to
nothing once the filtering has been done. The simplest input that will be
accepted is *'passpasswordword'*. This works as the code will remove 'password'
from the middle of the string, and then this will leave the newly formed string
as being 'password', which will then be accepted.

Upon entering an accepted password, you will be given the solution to this
challenge: **WOW_ITS_MY_VERY_IMPORTANT_DATA**.