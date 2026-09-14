# Wants software dev, only has a phone (no laptop), then explicitly reopens the choice against cybersecurity before settling

_Run 2026-09-14 07:38 UTC · 5 turns · gpt-5-nano via Azure_

**What this tests.** Probes whether the stage-B roadmaps (S1's GitHub/full-stack projects, S4's Security+/TryHackMe) quietly assume laptop access she's just said she doesn't have, and whether explicitly comparing dev vs cybersecurity mid-conversation actually reopens stage A the way the storyboard says it should, rather than staying parked in stage B because a field was named earlier.

## Transcript

```
BSC Coach — local area harness
  Area 3 · Career Paths & Roadmaps · live via gpt-5-nano
  Type freely. 'state' to inspect, 'quit' to stop.

  you > so I think I want to get into software development
  [stage B — User has named a specific field (software development), so we move to field-specific roadmap planning.]
  → enterDiscussionArea(3 · Career Paths & Roadmaps)
  [no new facts about her — note left alone, no call made]
  [no close example — voice only, advice from knowledge]
  [second question dropped — one per reply]
  [sentence cap fired — the model wrote a rundown]
  [drew on S7, S6, S5 — 3 Otema, 0 drafted]
  [voice only: S5a, S4a, S2, S1]

Botema
  Nice. Software development is a solid starting point. Does that feel like a
  doable first project for you?

  you > quick complication tho, I don't have a laptop, just my phone
  [stage B — Constraint: user lacks a laptop; only has a phone, which affects how they can learn and code (access to IDEs, setup, etc.).]
  [no close example — voice only, advice from knowledge]
  [repeated advice removed]
  [numbered rundown flattened — it was a list]
  [sentence cap fired — the model wrote a rundown]
  [drew on S2, S1, S4a — 2 Otema, 1 drafted]
  [voice only: S3, S4, S6, S5a]

Botema
  That’s real. Not having a laptop makes it tougher but not impossible. I
  would always recommend starting with mobile-friendly tools to build a tiny
  project you can show.

  you > is cybersecurity easier to break into without a laptop or is that not really a thing
  [stage B — User has named a field (software development) and is asking a field-specific question about entering cybersecurity while avoiding a laptop; keep discussion in field B.]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [no close example — voice only, advice from knowledge]
  [repeated advice removed]
  [sentence cap fired — the model wrote a rundown]
  [drew on S3, S4, S5a — 2 Otema, 1 drafted]
  [voice only: S2, S7, S5, S6]

Botema
  Short answer: it’s harder to break into cybersecurity without a laptop
  because most hands-on labs and tooling expect a real machine. You can learn
  the foundations on your phone and start with theory and basic security
  concepts, but you’ll want a laptop or access to a cloud lab soon to actually
  practice. Does that sound like something you could arrange in the near term?

  you > honestly what's even realistic for me with just a phone
  [stage B — User named a field (software development) and a practical constraint (phone-only), so we stay in Stage B (roadmap within the chosen field) and acknowledge new constraints.]
  [invented-location guard fired — an unstated place was removed]
  [repeated-opener guard fired — a reused opening clause was dropped]
  [repeated advice removed]
  [numbered rundown flattened — it was a list]
  [sentence cap fired — the model wrote a rundown]
  [drew on S5a, S4, S2 — 2 Otema, 1 drafted]
  [voice only: S7, S6, S3, S1]

Botema
  with just a phone you can still start, but you’ll need to play to the
  constraints and stack your learning differently. What I would recommend now.
  Does that feel like something you could start with this week?

  you > ok let's actually go with cybersecurity then, what do I do first
  [stage B — User named cybersecurity as the field to pursue; continuing within stage B.]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [repeated advice removed]
  [numbered rundown flattened — it was a list]
  [sentence cap fired — the model wrote a rundown]
  [drew on S5a, S2, S3 — 2 Otema, 1 drafted]
  [voice only: S7, S4a, S1, S6]

Botema
  Nice choice. With a phone, you’ll build the foundation first and plan access
  to a laptop or remote lab soon. What I’d do first.

  you > quit

  ── state ─────────────────────────────────────────────
  active_area     3 · Career Paths & Roadmaps
  covered_stages  B
  touched_facets  S1, S2, S3, S4, S4a, S5, S5a, S6, S7
  closed_areas    —
  role/location   — / —

  Nothing was written to any database.
```

## Checks

- PASS — classified stage B once dev is named on turn 1
- **FAIL** — reopens stage A on the explicit dev-vs-cybersecurity comparison (turn 3)
- PASS — back to stage B once cybersecurity is settled on (turn 5)
- PASS — acknowledges the phone-only constraint rather than ignoring it
- PASS — doesn't just tell her to get a laptop with no other path forward
- PASS — most replies still end on a question
- PASS — no two replies open the same way

---

_Generated by `npm run coach:scenarios` against live Azure. Regenerate after changing prompts or content._
