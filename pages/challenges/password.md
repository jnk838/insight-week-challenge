---
layout: page
title: Password
permalink: /challenges/password
hide: true
---

I managed to set my password to be *password*, but then the system changed
their rules. It is now impossible to get the system to accept my password.

See if you can manage to get my very important data back.

Click [here](https://PasswordIsPassword.jac0bwilson.repl.run) to attempt to
get into my computer.

Here is the code that runs the program:

```python
import os

print("Welcome to my very secure computer!")
print("To be able to login, you'll need a password.")

userPass = str(input("Please enter your password: "))

if "password" in userPass:
  userPass = userPass.replace("password","")

if userPass == "password":
  print("Password is correct, welcome back.")
  print("The token for this challenge is:", os.getenv("TOKEN"))
else:
  print("Password is not correct, try again.")
```

---