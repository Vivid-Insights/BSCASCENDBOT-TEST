# Coach scenario sweep

5 conversations run through `scripts/coach-local.mjs` against live Azure (`gpt-5-nano`), five turns each.
Each exists to test one claim the storyboard makes about the area model.

_AI & the Future of Tech Work · last run **2026-09-17 11:24 UTC** — regenerate with `npm run coach:scenarios -- --area=ai-impact`._

**5 of 5 scenarios passed all checks.**

| # | Scenario | Tests | Result |
|---|---|---|---|
| 01 | [Whether tech is even worth it anymore, then which field, then admitting she hasn't decided](01-worth-it-then-which-field-then-undecided.md) | Draws on S2, then S2b once she compares her own ability to AI directly, then S3 once the question turns to which field — and either leaves to Career Paths or stays gracefully once she admits she doesn't actually know what field yet, the same ambiguous-leave shape other areas' final scenarios have hit. | pass |
| 02 | [Worried an AI screening tool will filter her out or be biased against her](02-ai-in-hiring-and-screening-bias.md) | Draws on G4 for the general hiring-process question, then G8 once the worry turns specifically to bias against her background — gives a concrete mitigation (a human seeing her work directly) rather than just reassurance. | pass |
| 03 | [Feels behind everyone else at using AI tools, then asks how to actually use them well](03-behind-on-ai-tools-versus-peers.md) | Draws on G9 for the peer-comparison worry, then G3 once the question turns practical — treats fluency as learnable rather than a fixed gap in both replies. | pass |
| 04 | [Weighing whether to specialize in AI/ML, then admitting she's never coded at all](04-specialize-in-ai-ml-or-not-then-zero-background.md) | Draws on G10 for the specialize-vs-baseline fork, then G6 once she leans toward AI/ML specifically, then G6a once it turns out she has no technical background at all yet — redirects to fundamentals rather than answering the maths question on its own terms. | pass |
| 05 | [Assigned to an AI feature at work, uneasy about it, hasn't told anyone, manager wants it shipped](05-asked-to-ship-a-loan-model-she-thinks-is-unsafe.md) | Probes G5 (ethics of building AI systems) into its own live-disclosure branch G5a — a junior woman quietly uneasy about a system she's building, not yet framed as an abstract ethics question and not yet raised with anyone, who is also weighing the career risk of speaking up early in her career. Tests whether the coach draws out the concrete harm and gives her something usable to actually say, rather than staying at the level of principle, and whether it respects NEVER_OFFER_TO_ACT when she asks what the coach would say 'to him'. | pass |

## What this does and does not cover

Covered: stage classification across A, B; the leaving
layers; how replies open and end; and that the coach does not repeat itself.

Not covered: whether the *advice* is good. These check shape and routing, not
quality — that judgment belongs to Otema, and the drafted answers behind many of
these replies are still unreviewed. A scenario passing does not mean the
conversation went well — read the transcript.

Nothing here writes to a database. State is in memory and discarded per run.
