# Coach scenario sweep

5 conversations run through `scripts/coach-local.mjs` against live Azure (`gpt-5-nano`), five turns each.
Each exists to test one claim the storyboard makes about the area model.

_Interview Preparation · last run **2026-09-17 09:07 UTC** — regenerate with `npm run coach:scenarios -- --area=interview-prep`._

**5 of 5 scenarios passed all checks.**

| # | Scenario | Tests | Result |
|---|---|---|---|
| 01 | [Preparing for a technical interview, then asking about the opening pitch](01-general-prep-and-the-pitch.md) | Draws on S1, then G8 once she asks about the 'tell me about yourself' opener — treating it as a distinct skill from S1's own technical-fundamentals framing, not folded into the same advice. | pass |
| 02 | [Has a take-home test for a data analyst role, not a live technical round](02-take-home-assessment-and-non-swe-track.md) | Draws on G9 and G10 together — treats the take-home format correctly (no live audience to narrate to) and correctly identifies that data/analytics prep looks different from software-engineering coding practice, rather than defaulting to LeetCode-style advice. | pass |
| 03 | [Senior engineering interview, prepping system design and researching the company](03-system-design-and-company-research.md) | Draws on G1 and G3 as genuinely separate facets — technical depth prep versus company/culture research — without collapsing one into the other. | pass |
| 04 | [Remote interview coming up, but internet is genuinely unreliable](04-remote-setup-and-connectivity-constraint.md) | Draws on G4, then G4a once she reveals the constraint isn't fixable by testing — gives contingency planning (backup, disclosure to interviewer) rather than just repeating 'test your setup.' | pass |
| 05 | [Racing heart and can't focus at work, and it's not just this interview anymore](05-racing-heart-that-isnt-just-about-the-interview.md) | A fresh angle on G6a: this run confirms, rather than leaves ambiguous, that the physiological symptoms extend beyond this one interview — the leaving-table trigger to Wellbeing (Area 5). Re-scoped after a live run: the classifier's own leaving decision fires on the SAME turn she confirms the extension (as designed — G6a's whole point is to hand off once it's confirmed), so there is no generated in-area reply for that turn to inspect. The two turns before that reveal are checked for G6a's own recognition content; the reveal turn itself is checked for the correct leaving destination, which is the actual claim this scenario can test in a single-area harness — the hand-off's own content is Wellbeing's to prove, not this area's. | pass |

## What this does and does not cover

Covered: stage classification across A, B; the leaving
layers; how replies open and end; and that the coach does not repeat itself.

Not covered: whether the *advice* is good. These check shape and routing, not
quality — that judgment belongs to Otema, and the drafted answers behind many of
these replies are still unreviewed. A scenario passing does not mean the
conversation went well — read the transcript.

Nothing here writes to a database. State is in memory and discarded per run.
