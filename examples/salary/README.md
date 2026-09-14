# Coach scenario sweep

5 conversations run through `scripts/coach-local.mjs` against live Azure (`gpt-5-nano`), five turns each.
Each exists to test one claim the storyboard makes about the area model.

_Salary & Negotiation · last run **2026-09-14 06:59 UTC** — regenerate with `npm run coach:scenarios -- --area=salary`._

**3 of 5 scenarios passed all checks.**

| # | Scenario | Tests | Result |
|---|---|---|---|
| 01 | [A nurse moving into health tech, offered far too little](01-career-changer-lowballed.md) | Crosses stage A into B mid-conversation, and treats a half offer as a mismatch rather than a starting point. | pass |
| 02 | [She resigned and they suddenly found the money](02-counter-offer.md) | Stage C throughout, and asks why the number only appeared once she was leaving. | pass |
| 03 | [A foreign employer insisting on local currency](03-paid-in-local-currency.md) | Negotiates the mechanism — review interval, pegging — rather than arguing about the currency itself. | pass |
| 04 | [Told to wait for the review cycle, for the second year running](04-fobbed-off-twice.md) | Stage C. Recognises a pattern rather than repeating last year's advice. | fail — does not treat raising it as complaining |
| 05 | [She finds out a male peer hired the same month earns more, at a small company](05-colleague-pay-gap.md) | Stage C. Tests whether the coach names this as a pay gap worth raising rather than coaching her out of raising it, doesn't invent a legal claim or process that may not exist at her employer, and doesn't ask her to disclose her own number when she hasn't offered it. | fail — names it as a pay gap worth raising, not a complaint to swallow |

## What this does and does not cover

Covered: stage classification across A, B, C; the leaving
layers; how replies open and end; and that the coach does not repeat itself.

Not covered: whether the *advice* is good. These check shape and routing, not
quality — that judgment belongs to Otema, and the drafted answers behind many of
these replies are still unreviewed. A scenario passing does not mean the
conversation went well — read the transcript.

Nothing here writes to a database. State is in memory and discarded per run.
