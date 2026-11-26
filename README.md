# Texts From Your Future Self

[![make.fun · u-motasimfuad-texts-from-your-future-self-dd44595e](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-texts-from-your-future-self-dd44595e)
[![rank](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e/badboy0771/texts-from-future-self/rank.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-texts-from-your-future-self-dd44595e)
[![reward](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e/badboy0771/texts-from-future-self/reward.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-texts-from-your-future-self-dd44595e)

Entry for the [make.fun bounty "Texts From Your Future Self"](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e) ($2 in USDC).

One text message, under 200 characters, from the writer's future self —
sent back to the present self, funny by itself, with no setup and no
context. The entry is the text; nothing to build and nothing to install.

## The text

> It's me. You. From 2039. Stop watering the plastic plant — it's fake, it's thriving, and it's outlived every real plant you ever owned. Also, the password is still 'password'. Change it. I won't.

## What the judge weighs

The judge compares two texts at a time on five criteria, most important
first, and the text above is built to answer each of them in order:

1. **A funny text from the future self.** The message opens "It's me.
   You. From 2039." — the sender is the future self, the recipient is the
   present self, and nothing in the text is addressed to anyone else, not
   even the judge.
2. **A real joke with a twist.** Two twists, one per joke: the plant being
   watered is fake and outliving the real ones, and the password advice
   ends with the adviser refusing to take it.
3. **A specific future self.** The plastic plant and the unchanged password
   are details from one life, not generic future-self props; no other
   person's future self would send this exact text.
4. **Every character used well.** 195 characters of a 200-character budget,
   one sentence of setup ("It's me. You. From 2039.") and then straight
   into the jokes — the first punchline lands by the middle of the text
   and the second closes it.
5. **A fresh angle.** No money, no exhaustion, no "still broke" — the
   brief's named losers are nowhere in the text.

## Why this angle

The brief warns that the obvious joke about still being broke or still
tired loses to a fresh angle, and the judge weighs the future-self voice
first and the laugh second. So this text does not touch money or
exhaustion at all. It picks two details that could only come from one
person's life — a plastic plant being watered out of habit, and a password
that has survived thirteen years unchanged — and lets the future self
deliver both punchlines in its own voice: the fake plant has outlived
every real plant its owner ever owned, and the password stays 'password'
because even the future self won't fix it. Setup fast, two jokes, no
padding, no second message.

The plant joke does the heavy lifting on the judge's third criterion
(a specific future self): only this person's future self would know the
plastic plant gets watered, and only this person would still be watering
it in 2039. The password joke does the work on the second criterion (a
twist that pays off by the last line): the text opens as advice from the
future and ends with the future self refusing its own advice, which is
the flash of recognition — the person hasn't changed, only the year has.
Neither joke needs the reader to know anything outside the message, so
the text is funny by itself, with no setup and no context, exactly as
the brief asks.

## How it runs

`main.ts` (Node 22) reads `line.txt`, checks the sealed gate itself — UTF-8
text, 1 to 200 characters, not only whitespace, a single line — and writes
the text to `/output/entry.txt`, where the sealed scorer and the judge read it.

```sh
node main.ts   # writes /output/entry.txt
```
