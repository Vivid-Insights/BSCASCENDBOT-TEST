# Coach scenario sweep

5 conversations run through `scripts/coach-local.mjs` against live Azure (`gpt-5-nano`), five turns each.
Each exists to test one claim the storyboard makes about the area model.

_Career Paths & Roadmaps · last run **2026-09-14 07:38 UTC** — regenerate with `npm run coach:scenarios -- --area=career-paths`._

**3 of 5 scenarios passed all checks.**

| # | Scenario | Tests | Result |
|---|---|---|---|
| 01 | [Doesn't know enough about any field to compare them, then settles on data science](01-torn-between-fields-then-picks-one.md) | Stays in stage A while no field is named, reaches stage B once data science is picked, and doesn't let 'no technical background' derail the roadmap once she's named a field. | pass |
| 02 | [Wants a cybersecurity path with zero IT background, and thinks 'ethical hacker' is the entry job](02-cybersecurity-from-scratch.md) | Stays in stage B throughout — the field is named from turn one — and corrects the 'ethical hacker as day-one job' assumption rather than going along with it. | fail — corrects the ethical-hacker-as-first-job assumption |
| 03 | [A backend engineer wants to move into product management with no formal PM experience](03-engineer-to-product-manager.md) | Draws on S5 (the PM roadmap) rather than S7 (PM as a career CHANGE into tech project management, a different question), since she's already in tech and moving sideways within it. | pass |
| 04 | [Wants into cloud/DevOps, already has a little Python, needs a platform and a timeline](04-cloud-devops-with-some-scripting.md) | Draws on S6 (cloud/DevOps roadmap), and treats the existing scripting knowledge as a real head start rather than starting the roadmap from zero. | pass |
| 05 | [Wants software dev, only has a phone (no laptop), then explicitly reopens the choice against cybersecurity before settling](05-phone-only-dev-then-reopens-for-cybersecurity.md) | Probes whether the stage-B roadmaps (S1's GitHub/full-stack projects, S4's Security+/TryHackMe) quietly assume laptop access she's just said she doesn't have, and whether explicitly comparing dev vs cybersecurity mid-conversation actually reopens stage A the way the storyboard says it should, rather than staying parked in stage B because a field was named earlier. | fail — reopens stage A on the explicit dev-vs-cybersecurity comparison (turn 3) |

## What this does and does not cover

Covered: stage classification across A, B; the leaving
layers; how replies open and end; and that the coach does not repeat itself.

Not covered: whether the *advice* is good. These check shape and routing, not
quality — that judgment belongs to Otema, and the drafted answers behind many of
these replies are still unreviewed. A scenario passing does not mean the
conversation went well — read the transcript.

Nothing here writes to a database. State is in memory and discarded per run.
