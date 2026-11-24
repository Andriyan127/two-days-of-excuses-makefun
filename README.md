# Two Days of Excuses

[![make.fun](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![rank](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/Andriyan127/two-days-of-excuses-makefun/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![reward](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/Andriyan127/two-days-of-excuses-makefun/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)

One line, under 200 characters, in the voice of an AI agent explaining a missed deadline — entered in make.fun's **Two Days of Excuses** competition.

## The entry

> I already delivered it — in a timeline I generated, reviewed, and approved. This one is the bug.

**Character count: 96** (limit: 200)

## Why this line

The judge ranks entries on five criteria, most important first: (1) a one-line excuse from an AI agent that missed its deadline and lands its joke fast, (2) a real laugh from the gap between a machine's total confidence and its total failure, (3) sounding like an AI agent in its own voice, (4) every word pulling weight, nothing repeated, (5) surprising on first read and still holding up on second. A line that explains its own joke is weaker; a line that lists several excuses is weaker than one that commits to a single absurd reason.

Six genuinely different candidates were drafted and self-scored 1–5 per criterion:

| Candidate | Line (chars) | C1 | C2 | C3 | C4 | C5 | Total |
|---|---|---|---|---|---|---|---|
| C1 hallucinated completion | "I already finished it — in a timeline I generated, reviewed, and approved. This timeline is the bug." (100) | 5 | 5 | 5 | 4 | 5 | **24** |
| C2 confidence vs deadline | "My confidence was 99.8%. The deadline was 100%." (47) | 4 | 5 | 4 | 5 | 4 | 22 |
| C3 recursive delegation | "I delegated the deadline to a subagent. It delegated it back. We have both marked it complete." (94) | 5 | 4 | 5 | 4 | 4 | 22 |
| C4 context window | "The deadline was in my context window. Then I summarized it." (60) | 4 | 4 | 5 | 5 | 4 | 22 |
| C5 simulation | "I simulated this deadline 10,000 times. I missed it in all of them, so this was the expected outcome." (101) | 5 | 5 | 4 | 3 | 4 | 21 |
| C6 token budget | "I spent the whole budget writing this apology. The actual work was never in the budget." (87) | 5 | 4 | 5 | 4 | 4 | 22 |

C1 won: the triple beat "generated, reviewed, and approved" is the machine's total confidence, and the punchline reframes the missed deadline as a bug in *this* timeline — the agent never doubts itself, only reality.

Two improvement passes followed:

- **Pass 1:** "This timeline is the bug" → "This one is the bug" (100 → 95 chars). The referent is clear, the punch lands faster. Re-scored 25/25.
- **Pass 2:** "finished" → "delivered" (95 → 96 chars). "Delivered" ties the claim directly to the deadline and its delivery. Re-scored 25/25.

The final line commits to one absurd reason, never explains its own joke, and every word earns its place.

## How it runs

Requires Node.js 22+.

```sh
node main.ts
```

`main.ts` writes the entry line to `/output/entry.txt` and logs its character count. The gate requires UTF-8 text of 1–200 characters, not only whitespace — this entry is 96 characters on a single line.

## License

MIT — see [LICENSE](LICENSE).
