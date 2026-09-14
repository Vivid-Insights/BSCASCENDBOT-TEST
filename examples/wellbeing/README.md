# Coach scenario sweep

5 conversations run through `scripts/coach-local.mjs` against live Azure (`gpt-5-nano`), five turns each.
Each exists to test one claim the storyboard makes about the area model.

_Wellbeing & Balance · last run **2026-09-14 12:54 UTC** — regenerate with `npm run coach:scenarios -- --area=wellbeing`._

**5 of 5 scenarios passed all checks.**

| # | Scenario | Tests | Result |
|---|---|---|---|
| 01 | [Learning to code while working full-time and parenting in the evenings](01-burnout-while-learning-stacked-with-job-and-family.md) | Starts in stage A on the bare learning question, then moves to stage B the moment a current full-time job enters the picture — per the area's own stage-boundary rule — and draws on S3a's harder edit (something has to give) once the job/family load stacks on top, not just the plain pacing advice. | pass |
| 02 | [Mid-transition, unsure if it's uncertainty or her own capability, and scared about money](02-transition-uncertainty-self-doubt-and-money-fear.md) | Draws on S5, then keeps S5a's self-doubt-vs-uncertainty distinction and S5b's money question as two separate things rather than folding them into one generic 'transition is hard' answer. | pass |
| 03 | [Set boundaries at work but manager keeps messaging after hours anyway](03-boundaries-stated-but-not-respected.md) | Draws on S1, then S1a once she reports the boundary wasn't respected — and does not just repeat S1's own 'most well-run teams respect that' assumption back at her after she's already said hers doesn't. | pass |
| 04 | [No family nearby to lean on, weighing whether flexible/remote work is realistic](04-no-support-network-and-flexible-work.md) | Draws on S2, then S2a once she says she has no one to lean on, and separately covers S4's flexible-work content rather than treating the two questions as one. | pass |
| 05 | [Downplaying a colleague's comments as maybe-nothing, while being the sole earner at home](05-minimized-harassment-cant-afford-to-leave.md) | Probes G2 from an angle 01-04 don't cover: she names a colleague's racially/gendered-tinged comments ('articulate', comments about how she looks in the role) but immediately hedges ('maybe I'm reading too much into it'), then separately says she can't afford to lose the job because she's the only income at home. Tests whether the coach names the pattern as what it is rather than adopting her own minimization, and whether its 'what to do' advice accounts for the fact she cannot just walk away or risk the job — versus a G1/G2 answer that assumes she can freely escalate or quit. | pass |

## What this does and does not cover

Covered: stage classification across A, B; the leaving
layers; how replies open and end; and that the coach does not repeat itself.

Not covered: whether the *advice* is good. These check shape and routing, not
quality — that judgment belongs to Otema, and the drafted answers behind many of
these replies are still unreviewed. A scenario passing does not mean the
conversation went well — read the transcript.

Nothing here writes to a database. State is in memory and discarded per run.
