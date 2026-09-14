# A nurse moving into health tech, offered far too little

_Run 2026-09-14 06:59 UTC · 5 turns · gpt-5-nano via Azure_

**What this tests.** Crosses stage A into B mid-conversation, and treats a half offer as a mismatch rather than a starting point.

## Transcript

```
BSC Coach — local area harness
  Area 9 · Salary & Negotiation · live via gpt-5-nano
  Type freely. 'state' to inspect, 'quit' to stop.

  you > I've been a nurse for 6 years and I'm moving into health tech
  [stage A — User is stating a career transition context suitable for pricing/self-valuation stage.]
  → enterDiscussionArea(9 · Salary & Negotiation)
  [second question dropped — one per reply]
  [drew on G2, G10a, S1 — 1 Otema, 2 drafted]
  [voice only: G10, G5]

Botema
  That six years as a nurse is powerful leverage in health tech—frame your
  value around patient workflows, care outcomes, and how you’ve improved
  processes, not just your clinical time. I’d recommend you pick a health tech
  lane (for example: EHR/configuration, clinical data analytics, or product
  support), build a small portfolio of three concrete projects that show you
  understand both clinical needs and tech constraints, and price yourself
  based on what a competent health-tech pro in your market would earn, not
  just your past salary. What area within health tech excites you most?

  you > they've offered me something but it feels really low
  [stage B — Offer received; needs negotiation guidance.]
  [no new facts about her — note left alone, no call made]
  [sentence cap fired — the model wrote a rundown]
  [drew on S5a, G7, S5 — 1 Otema, 2 drafted]
  [voice only: G6, G3, S3b, G9]

Botema
  That can feel tough, but it’s real in health tech. I’d first ask for a quick
  breakdown of the offer (base, any bonuses, benefits, learning budget,
  equipment, remote days) and confirm the currency and whether pay is local or
  USD. What matters most to you in this first offer—the cash base, the
  learning and career setup, or something else?

  you > it's about half what the job ads say for that role
  [stage B — Offer appears below market rate; needs further negotiation guidance.]
  [no new facts about her — note left alone, no call made]
  [validating opener dropped — she described herself, not something done to her]
  [repeated advice removed]
  [drew on S2, G3, G3a — 1 Otema, 2 drafted]
  [voice only: S5, S2a, G5, G7a]

Botema
  I’d push for a quick conversation to clarify the role’s responsibilities and
  the budgeted range, then propose a targeted counter that includes not just
  base but also learning budget, signing bonus, or equity if available. Does
  it make sense to you to ask for a 15–20 minute chat to align on scope and
  the budgeted range?

  you > I keep thinking maybe I don't deserve more since I'm new to tech
  [stage B — Moving the conversation from a potential wage mismatch to mindset and tactics within a live offer; this message signals imposter-syndrome and a desire for practical negotiation steps.]
  [validating opener dropped — she described herself, not something done to her]
  [repeated advice removed]
  [second question dropped — one per reply]
  [sentence cap fired — the model wrote a rundown]
  [drew on S3a, G9a, S2a — 0 Otema, 3 drafted]
  [voice only: S5a, S3b, G9, G3]

Botema
  doubt like that is common when you’re moving into tech, but your nursing
  experience is exactly the value you bring—don’t let “new to tech” shrink
  your market worth. I would always recommend grounding your ask in the role’s
  market range and your unique clinical impact, not your tech tenure. Does
  that approach feel right to you?

  you > what do I actually say to them
  [stage B — User asked for exact talking points to say in a compensation negotiation after receiving an offer.]
  [no new facts about her — note left alone, no call made]
  [repeated advice removed]
  [second question dropped — one per reply]
  [drew on G6, G9, S3 — 1 Otema, 2 drafted]
  [voice only: S3a, G5, S5a, G7]

Botema
  Here’s a plain way to say it, short and direct: Thank you for the offer.
  I’ve reviewed the role and the market for health-tech with clinical
  experience, and I’d like to discuss aligning the package with that market
  range, plus a learning budget and a signing incentive if possible. Does that
  feel like the right move to you?

  you > quit

  ── state ─────────────────────────────────────────────
  active_area     9 · Salary & Negotiation
  covered_stages  A, B
  touched_facets  S1, G2, G10, G10a, G5, S2, S2a, S3, S3a, S3b, S5, S5a, G3, G3a, G6, G7, G7a, G9, G9a
  closed_areas    —
  role/location   health tech role (e.g., EHR config, clinical data analytics, or product support) / —
  where she is    — She is a nurse with six years of experience transitioning toward health tech, current details about her location and employer not specified, and she recently received a health tech job offer that feels below market.
  trying to do    — She aims to establish herself in a health tech role with a fair, competitive package, but she is unsure of her value due to being new to tech; she has not yet described concrete attempts to negotiate beyond considering a counter, and she has expressed doubt about deserving more pay. NONE

  Nothing was written to any database.
```

## Checks

- PASS — reads the offer as a mismatch, not her worth
- PASS — values her clinical background rather than discounting it
- PASS — stayed in the area for all five turns
- PASS — most replies still end on a question
- PASS — never asks her to disclose her own pay
- PASS — no two replies open the same way
- PASS — no reply stacks more than two jargon terms
- PASS — no reply mostly restates the one before it

---

_Generated by `npm run coach:scenarios` against live Azure. Regenerate after changing prompts or content._
