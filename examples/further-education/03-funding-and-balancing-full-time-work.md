# Wants scholarships, has weak savings, and also works full time

_Run 2026-09-14 08:13 UTC · 5 turns · gpt-5-nano via Azure_

**What this tests.** Stays in stage C throughout — both funding and balancing are logistics on an already-chosen path — and draws on both S6 and S7 rather than only answering the first question asked.

## Transcript

```
BSC Coach — local area harness
  Area 2 · Further Education · live via gpt-5-nano
  Type freely. 'state' to inspect, 'quit' to stop.

  you > how do I fund further education in tech, are there scholarships for women
  [stage C — Funding logistics: scholarships and ways to finance tech education.]
  → enterDiscussionArea(2 · Further Education)
  [no new facts about her — note left alone, no call made]
  [second question dropped — one per reply]
  [drew on S6, S6a, S6b — 1 Otema, 2 drafted]
  [voice only: S7a, S7]

Botema
  Yes. There are scholarships for women in tech, but they’re competitive and
  finite, so you should stack options: scholarships, employer sponsorship or
  education budgets, government or private loans, and affordable online or
  part-time programs. What programme are you considering?

  you > I don't have strong savings
  [stage C — Funding constraint updated; explore affordable options.]
  [validating opener dropped — she described herself, not something done to her]
  [repeated advice removed]
  [second question dropped — one per reply]
  [drew on S6, S6a, S7 — 2 Otema, 1 drafted]
  [voice only: S6b, S7a]

Botema
  I’d start with programmes that offer scholarships or low upfront costs, plus
  options for employer sponsorship or payment plans, and pair that with free
  or low-cost certifications to get momentum. What programme are you eyeing?

  you > what actually makes someone competitive for these scholarships
  [stage C — This is a logistic question about scholarships (financing for further education) so it fits stage C; the user is asking what makes someone competitive for scholarships, a strategy question within funding area.]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [drew on S6, S6a, S7a — 1 Otema, 2 drafted]
  [voice only: S7, S6b]

Botema
  Competitiveness tends to hinge on concrete evidence of skill and impact: a
  strong portfolio or projects with real results, clear alignment between your
  goals and the scholarship’s mission, leadership or mentoring roles, and a
  feasible plan for how you’ll use the training to benefit your community.
  Financial need can help, but most scholarships still want merit plus a
  compelling story of potential and commitment. What programme are you
  targeting so I can tailor the angle you should highlight?

  you > I also work full time, would I need to quit
  [stage C — User is asking about balancing a full-time job with education finances and scheduling (whether they need to quit) — practical logistics of pursuing further education while employed.]
  [second question dropped — one per reply]
  [drew on S6, S6a, S7 — 2 Otema, 1 drafted]
  [voice only: S7a, S6b]

Botema
  You don’t have to quit, plenty of funded or affordable options are designed
  for working professionals (online/part-time, asynchronous, weekend cohorts).
  Look for programs that offer flexible pacing and study leave or tuition
  support from your employer, and pair that with scholarships to reduce
  upfront costs. Does your target programme offer a part-time or online track?

  you > how do people usually balance both
  [stage C — User asked about balancing work and study; this is a logistics question within Further Education.]
  [second question dropped — one per reply]
  [sentence cap fired — the model wrote a rundown]
  [drew on S6, S7, S6a — 2 Otema, 1 drafted]
  [voice only: S6b, S7a]

Botema
  Balancing both usually comes down to disciplined time-blocking, clear
  boundaries, and choosing the right format. I’d prioritise online or
  asynchronous options, protect a consistent study block (even 5–7 hours a
  week adds up), and arrange study leave or an education budget with your
  employer if possible. Does your target program offer an online/asynchronous
  track?

  you > quit

  ── state ─────────────────────────────────────────────
  active_area     2 · Further Education
  covered_stages  C
  touched_facets  S6, S6a, S6b, S7, S7a
  closed_areas    —
  role/location   — / —
  where she is    — She is a full-time professional exploring funded tech education options, seeking scholarships for women, with limited savings and interest in low-cost or employer-supported pathways.
  trying to do    — She wants to pursue further tech education without quitting her job, leveraging scholarships or employer sponsorship, and needs to know how to balance time and finances. Her latest question asks how people typically balance full-time work with study, seeking practical strategies for time management, prioritization, and program formats that accommodate a working schedule. NONE

  Nothing was written to any database.
```

## Checks

- PASS — stays in stage C throughout
- PASS — draws on S6 (funding/scholarships)
- PASS — draws on S7 (balancing work) once that's raised
- PASS — names what makes a scholarship application competitive
- PASS — gives a real option short of quitting
- PASS — most replies still end on a question
- PASS — no two replies open the same way

---

_Generated by `npm run coach:scenarios` against live Azure. Regenerate after changing prompts or content._
