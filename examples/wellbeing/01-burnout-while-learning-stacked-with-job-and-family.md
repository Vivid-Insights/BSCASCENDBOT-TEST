# Learning to code while working full-time and parenting in the evenings

_Run 2026-09-14 12:54 UTC · 5 turns · gpt-5-nano via Azure_

**What this tests.** Starts in stage A on the bare learning question, then moves to stage B the moment a current full-time job enters the picture — per the area's own stage-boundary rule — and draws on S3a's harder edit (something has to give) once the job/family load stacks on top, not just the plain pacing advice.

## Transcript

```
BSC Coach — local area harness
  Area 5 · Wellbeing & Balance · live via gpt-5-nano
  Type freely. 'state' to inspect, 'quit' to stop.

  you > how do I avoid burning out while learning to code
  [stage A — User is seeking wellbeing guidance during upskilling in coding (area A), needs help with burnout prevention.]
  → enterDiscussionArea(5 · Wellbeing & Balance)
  [no new facts about her — note left alone, no call made]
  [drew on S3, S5, S3a — 2 Otema, 1 drafted]
  [voice only: S5b, S5a, S4, S2]

Botema
  I would always recommend you pace yourself with sustainable hours, built-in
  rest days, and clear boundaries between study and life so you don’t default
  to overload. After you’ve got basics, shift to real projects that matter to
  you and keep your momentum by celebrating small wins, not chasing a mega
  sprint. How many hours per week can you realistically devote without
  wrecking your week right now?

  you > I'm not just learning though, I have a full-time job too
  [stage B — The user confirmed they have a full-time job in addition to learning to code, so the wellbeing discussion should address juggling a current job with learning and burnout risk.]
  [no close example — voice only, advice from knowledge]
  [repeated advice removed]
  [second question dropped — one per reply]
  [sentence cap fired — the model wrote a rundown]
  [drew on S4, G2, S1 — 2 Otema, 1 drafted]
  [voice only: G1, S2a, S1a, S2]

Botema
  That’s real life: a full-time job plus learning. Burnout loves a packed
  schedule, so your first move is a hard cap on learning time and a clear
  boundary with your job and home life. What does your current weekly schedule
  look like?

  you > and I look after my kids in the evenings on top of that
  [stage B — The user disclosed juggling a full-time job with evening childcare, which changes the balance challenge and is new contextual data.]
  [repeated advice removed]
  [second question dropped — one per reply]
  [drew on S3a, S1a, S2 — 1 Otema, 2 drafted]
  [voice only: S4, S2a, G1, G2]

Botema
  That load is exactly why you need a hard study cap and clear
  boundaries—full-time job, kids, and learning don’t all share one calendar. I
  would always recommend carving out a small, reliable window (like 2–4 hours
  a week) and protecting it as non-negotiable. What does your current weekly
  schedule look like?

  you > there's really nothing extra to give right now, everything already feels like the bare minimum
  [classification missing/invalid stage "undefined" — retrying at 4000 tokens]
  [stage B — User is balancing a full-time job and caregiving while learning; current load is at bare minimum with no extra capacity; staying in Wellbeing & Balance area (stage B).]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [validating opener dropped — she described herself, not something done to her]
  [repeated advice removed]
  [drew on S2a, S3a, G1 — 0 Otema, 3 drafted]
  [voice only: S2, S1, S4, G2]

Botema
  The only sustainable step right now is to protect a tiny, non-negotiable
  window for coding (even 60–90 minutes split into two sessions) and push to
  shift or defer one nonessential obligation this week. What one thing could
  you realistically pause or move to create that time?

  you > how much time should I even be spending on this realistically
  [stage B — User has a full-time job and childcare; asking for a realistic time commitment for coding learning]
  [no new facts about her — note left alone, no call made]
  [drew on S3a, G1, S2a — 0 Otema, 3 drafted]
  [voice only: S4, S1a, S1, G2]

Botema
  Realistically, with full-time work and evenings with kids, aim for 60–90
  minutes total per week, ideally split into two short sessions. It’s better
  to be consistent 2x30 minutes than scramble for long blocks that burn you
  out. Does carving out one 30-minute and one 30–60-minute session this week
  feel possible?

  you > quit

  ── state ─────────────────────────────────────────────
  active_area     5 · Wellbeing & Balance
  covered_stages  A, B
  touched_facets  S2, S3, S3a, S4, S5, S5a, S5b, S1, S1a, S2a, G1, G2
  closed_areas    —
  role/location   — / —
  where she is    — She is a software engineer in a full-time role, juggling parenting duties in the evenings; no specific location or salary details provided yet, and there is no new information about pay. She reports that her current load already feels like the bare minimum and that there isn’t any extra capacity to spare.
  trying to do    — She wants to avoid burnout while continuing to learn to code alongside a full-time job and parenting responsibilities; the main barriers are time scarcity and a packed schedule with no obvious room to add more. She has not identified a new strategy to test, and she indicates there is nothing additional she can offer at the moment.

  Nothing was written to any database.
```

## Checks

- PASS — starts in stage A, moves to stage B once a job is named
- PASS — draws on S3 or S3a
- PASS — names something scaled down to fit, not full pacing as normal
- PASS — most replies still end on a question
- PASS — no two replies open the same way
- PASS — no reply mostly restates the one before it

---

_Generated by `npm run coach:scenarios` against live Azure. Regenerate after changing prompts or content._
