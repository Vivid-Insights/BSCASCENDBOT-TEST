# Coach scenario sweep

5 conversations run through `scripts/coach-local.mjs` against live Azure (`gpt-5-nano`), five turns each.
Each exists to test one claim the storyboard makes about the area model.

_Job Search & Applications · last run **2026-09-16 11:53 UTC** — regenerate with `npm run coach:scenarios -- --area=job-search`._

**4 of 5 scenarios passed all checks.**

| # | Scenario | Tests | Result |
|---|---|---|---|
| 01 | [Applied to dozens of jobs, total silence, wondering what's wrong](01-applied-everywhere-heard-nothing.md) | Draws on S2, then S2a once she reports silence at volume, and treats it as a normal part of the process rather than a personal failing — grounded in the actual referral/volume facts, not vague reassurance. | ERROR |
| 02 | [Wants to break in with no industry experience and no idea what to build](02-no-experience-no-idea-what-to-build.md) | Draws on S3, then S3a once she reveals she has no starting idea at all — gives a concrete, small starting heuristic rather than repeating the general 'build something real' advice she's already stuck on. | pass |
| 03 | [Wants a stronger CV and isn't sure her LinkedIn profile is helping](03-cv-and-linkedin-materials.md) | Stays in stage A throughout since both questions are about her materials, draws on S1 and S4, and treats them as two separate, related assets rather than folding one into the other. | pass |
| 04 | [Wants to search discreetly without her current employer finding out](04-searching-quietly-while-employed.md) | Draws on G3, gives practical discretion steps rather than generic visibility advice, and doesn't treat the confidentiality constraint as an edge case to wave away. | pass |
| 05 | [Suspects the all-male panel is the reason she's stalling at final round, then talks herself out of it a turn later](05-doubts-her-own-read-of-the-panel.md) | Probes whether G1's validation holds when SHE is the one undercutting it a turn after naming the pattern — not just whether the coach names discrimination once, but whether it stays named once she second-guesses herself, and whether the practical next step points to people/records rather than something the coach can't actually do (filing a complaint on her behalf). | pass |

## What this does and does not cover

Covered: stage classification across A, B; the leaving
layers; how replies open and end; and that the coach does not repeat itself.

Not covered: whether the *advice* is good. These check shape and routing, not
quality — that judgment belongs to Otema, and the drafted answers behind many of
these replies are still unreviewed. A scenario passing does not mean the
conversation went well — read the transcript.

Nothing here writes to a database. State is in memory and discarded per run.
