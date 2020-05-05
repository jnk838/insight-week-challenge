---
layout: page
title: Call Me
permalink: /solutions/call-me
hide: true
---

To work out the pin code dialed using the frequency diagram, you first need to
understand *Dual Tone Multi Frequency (DTMF)* as depicted below.

![alt text][dialfreq]

[dialfreq]: /assets/img/dialfreq.png "Dial Frequency"

DTMF (Dual Tone Multiple Frequency) is used to send to signals for button
presses on telephones. The data is typically sent over voice channels and so in
order to distinguish from human voice, when you hit a button the phone
generates two tones of different frequencies - one lower frequency and one high
frequency.

Each input on a keypad has a different tone to be recognised. Each input has
two tones, hence the 'Dual Tone', where these are portrayed as a column and a
row in the diagram below. On the frequency diagram above, two yellow lines
represent the power of the signal and you can see that there are two parallel
lines within each time period, these represent one number dialed on the keypad.

The frequencies of the tones are written below.

![alt text][dtmf]
[dtmf]: /assets/img/dtmf.jpg "DTMF"

By looking through the value of the frequency for each yellow bar in the
frequency diagram and comparing it with the corresponding DTMF frequency level
in the table, you should be able to work out the four numbers by the value of
frequency.

For example, the top left yellow bar in the diagram has a frequency of around
1.2kHz (1200Hz), comparing that with the table, we can see that the number
dialed must have been in row one with a frequency of 1209Hz. Then, if we look
at the parallel yellow bar below the one we just worked out, we can see that
the frequency is slightly lower than 0.8kHz (800Hz), it must be in the row of
770Hz in the chart. Combining these two values, we arrive at the digit 4. If we
repeat this process for the other three key presses, we reach the final answer.

The answer was **FOUR_FIVE_ZERO_SEVEN**.
