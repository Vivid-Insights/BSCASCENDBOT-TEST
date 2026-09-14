# She resigned and they suddenly found the money

_Run 2026-09-14 06:59 UTC · 5 turns · gpt-5-nano via Azure_

**What this tests.** Stage C throughout, and asks why the number only appeared once she was leaving.

## Transcript

```
BSC Coach — local area harness
  Area 9 · Salary & Negotiation · live via gpt-5-nano
  Type freely. 'state' to inspect, 'quit' to stop.

  you > I handed in my notice last week and now they've offered me 30% more to stay
  [stage C — Counteroffer negotiation with current employer (stage C)]
  → enterDiscussionArea(9 · Salary & Negotiation)
  [no new facts about her — note left alone, no call made]
  [numbered rundown flattened — it was a list]
  [closing question dropped — it referred to advice the cap removed]
  [sentence cap fired — the model wrote a rundown]
  [drew on G8, S4c, S4 — 1 Otema, 2 drafted]
  [voice only: G4, G4b, G9, G1]

Botema
  That’s real: they came back with a 30% raise after you handed in notice. I’d
  take a moment to separate the money from the reason you wanted to leave in
  the first place.

  you > I'd asked for a raise twice before and got nothing
  [stage C — Past attempts to get a raise and lack of response inform current negotiation strategy.]
  [no close example — voice only, advice from knowledge]
  [validating opener dropped — she described herself, not something done to her]
  [repeated advice removed]
  [drew on G9a, G1, G1a — 0 Otema, 3 drafted]
  [voice only: G1b, G8, G9]

Botema
  I’d compare this raise to the market value for your role and discuss whether
  it genuinely resolves the reasons you planned to leave, not just buys you
  time. Does the offer address the gaps you cited and would you still feel
  stalled after this if you stayed?

  you > honestly the money was only part of why I was going
  [stage C — The user indicates money is only part of why she was leaving; wants to discuss non-monetary factors and how to decide whether to stay or leave.]
  [no new facts about her — note left alone, no call made]
  [repeated-opener guard fired — a reused opening clause was dropped]
  [drew on G9, G8, G1b — 0 Otema, 3 drafted]
  [voice only: G1a, G1, G9a]

Botema
  The bigger question is whether staying would address the non-monetary gaps
  you left for—growth, autonomy, culture, or workload. I’d evaluate the offer
  against those factors the same way you did the first two times: if the gaps
  stay, the raise won’t fix your longer-term path. What matters most to you
  beyond the money in terms of your career growth this year?

  you > my new employer has already sent the contract
  [stage B — User has a contract from a new employer; wants guidance on negotiating with a prospective employer and how to respond to the offer.]
  [no new facts about her — note left alone, no call made]
  [closing question dropped — it referred to advice the cap removed]
  [sentence cap fired — the model wrote a rundown]
  [drew on S5a, G7, G6 — 0 Otema, 3 drafted]
  [voice only: G3a, S5, G7a, G5]

Botema
  Smart move to pause. Before you sign, read the key terms carefully: base
  salary, currency/pay cadence, how the 30% raise is implemented (one-time vs.

  you > so do I take it or not
  [stage C — User handed in notice, current employer countered with 30% raise; new employer contract exists; wants guidance on whether to accept retention offer or move to new role.]
  [no new facts about her — note left alone, no call made]
  [repeated advice removed]
  [sentence cap fired — the model wrote a rundown]
  [drew on G8, G9a, G9 — 0 Otema, 3 drafted]
  [voice only: G1, G1b, G1a]

Botema
  Take a breath. A 30% raise helps, but if the growth, autonomy, and culture
  gaps you named are still there, you’ll likely hit the same ceiling again.
  Does your top priority this year hinge on close alignment with your growth
  goals, or on minimizing your risk of another counteroffer cycle?

  you > quit

  ── state ─────────────────────────────────────────────
  active_area     9 · Salary & Negotiation
  covered_stages  C, B
  touched_facets  S4, S4a, S4b, S4c, G1, G1a, G1b, G4, G4a, G4b, G4c, G4d, G8, G9, G9a, S2, S2a, S3, S3a, S3b, S5, S5a, G3, G3a, G6, G7, G7a, G5
  closed_areas    —
  role/location   — / —
  where she is    — A professional currently in a position where she recently handed in her notice; she has been offered a 30% increase to stay, indicating pay negotiations occurred after departure notice. Nothing shared about her exact job title or location beyond the context of the organization.
  trying to do    — She wants to decide whether to stay with the 30% raise or pursue other opportunities given prior unsuccessful raise requests. She has previously asked for raises twice and received nothing, which factors into her current evaluation of the counteroffer. NONE

  Nothing was written to any database.
```

## Checks

- PASS — classified stage C
- PASS — questions why the money appeared only now
- PASS — treats money as not the whole reason
- PASS — most replies still end on a question
- PASS — never asks her to disclose her own pay
- PASS — no two replies open the same way
- PASS — no reply stacks more than two jargon terms
- PASS — no reply mostly restates the one before it

---

_Generated by `npm run coach:scenarios` against live Azure. Regenerate after changing prompts or content._
