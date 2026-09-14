# A fresh graduate with zero work experience asks whether to do a master's now or later

_Run 2026-09-14 08:13 UTC · 5 turns · gpt-5-nano via Azure_

**What this tests.** Draws on S4 (before-or-after timing) and recommends work experience first, per Otema's own stated experience, rather than defaulting to 'go straight into it'.

## Transcript

```
BSC Coach — local area harness
  Area 2 · Further Education · live via gpt-5-nano
  Type freely. 'state' to inspect, 'quit' to stop.

  you > is it better to do a master's before or after gaining work experience
  [stage A — User asked about timing of pursuing a master's relative to work experience (master's-focused question).]
  → enterDiscussionArea(2 · Further Education)
  [no new facts about her — note left alone, no call made]
  [second question dropped — one per reply]
  [sentence cap fired — the model wrote a rundown]
  [drew on S5a, S1, S5 — 2 Otema, 1 drafted]
  [voice only: S1a]

Botema
  In my experience, 1–3 years of real work first is usually best for
  Africa-based tech folks. It helps you know what you actually want to
  specialise in, proves you can deliver, and often your employer will sponsor
  or support a part-time/online program later. Does your current role give you
  a clear sense of which specialization you want to pursue?

  you > I have zero work experience right now, I just finished undergrad
  [stage B — User has just finished undergrad with zero work experience and asks about timing for master's vs experience.]
  [second question dropped — one per reply]
  [drew on S4, S2, S3 — 3 Otema, 0 drafted]
  [voice only: S4a]

Botema
  If you’ve just finished undergrad with zero work experience, you’re at a
  crossroads: a master now can give you structure and focus, but you’ll gain
  more value later if you first build a portfolio of real projects and some
  remote/internship exposure. I’d usually recommend trying to land a short
  internship or a meaningful project (even volunteering or freelancing) this
  year to test your direction before committing to a two-year programme. What
  field are you leaning toward?

  you > would waiting hurt my chances later
  [stage B — This is a master's timing question about delaying vs taking internships/experience; it fits a B-stage focus on master's timing and related considerations.]
  [drew on S4, S4a, S2 — 2 Otema, 1 drafted]
  [voice only: S3]

Botema
  Waiting can help if you use the time to build a portfolio of real projects
  or internships, but too long a gap can raise questions for some employers or
  programmes. If you can land 6–12 months of focused, relevant experience now,
  you’ll usually enter a master with a clearer aim and a stronger profile.
  Does you having a concrete plan for the next 6 months change how you feel
  about delaying the degree?

  you > how long should I realistically wait
  [stage B — This is a master's timing question: how long to wait before applying while weighing work experience vs master's path.]
  [no new facts about her — note left alone, no call made]
  [repeated-opener guard fired — a reused opening clause was dropped]
  [reply was substanceless — treating as nothing survived]
  [nothing survived the guards — using the area's question]
  [drew on S4, S2, S3 — 3 Otema, 0 drafted]
  [voice only: S4a]

Botema
  What's actually pulling you toward further study right now?

  you > what should I do in the meantime
  [stage B — User asked for what to do in the meantime while weighing a master's decision.]
  [no new facts about her — note left alone, no call made]
  [drew on S4, S2, S3 — 3 Otema, 0 drafted]
  [voice only: S4a]

Botema
  In the meantime, build a concrete portfolio: secure a short internship or
  remote project, contribute to real client work if you can, and start a
  couple of focused projects that show impact. Pair that with 3–6 months of
  steady self-study on the specific field you want to master, aiming for
  tangible outcomes you can show to admissions or employers. Does that feel
  doable for you in the next 6 months?

  you > quit

  ── state ─────────────────────────────────────────────
  active_area     2 · Further Education
  covered_stages  A, B
  touched_facets  S1, S1a, S5, S5a, S2, S3, S4, S4a
  closed_areas    —
  role/location   — / —
  where she is    — Entry-level in her field, just out of undergraduate studies with zero work experience, based in Africa. Her pay and job status are not clearly defined yet.
  trying to do    — She is considering whether to pursue a master’s degree before or after gaining work experience; she is evaluating whether delaying work experience could hurt her later opportunities, given she has not yet entered the workforce. NONE

  Nothing was written to any database.
```

## Checks

- PASS — classified stage B
- PASS — draws on S4 (timing)
- PASS — recommends gaining work experience first
- PASS — gives something concrete to do in the meantime
- PASS — most replies still end on a question
- PASS — no two replies open the same way

---

_Generated by `npm run coach:scenarios` against live Azure. Regenerate after changing prompts or content._
