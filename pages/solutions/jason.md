---
layout: page
title: The Name is Jason
permalink: /solutions/jason
hide: true
---

For this challenge we gave you what is called a .json file. This is a way of
storing data in 'key-value pairs'.

The 'characters' section of the file tells you which characters are used to
make the answer, and the 'order' section tells you where each of these
characters can be found. For example, *first* maps to *six*, and the character
that *six* maps to is *B*. You can continue this process to obtain the
solution.

Another method would be to create the file yourself, and then solve the
challenge with a little bit of code. In Python this can be done with the
following code:

```python
import json

with open('challenge.json', 'r') as f:
    dict = json.load(f)

order = dict['order']
charset = dict['characters']

solutionLength = len(dict['order'])

solution = ''

for char in order:
    solution += charset[order[char]]

print(solution)
```

Whichever way you choose to solve it, you will end up with the solution of:
**BOND_SOUNDS_BETTER**. 