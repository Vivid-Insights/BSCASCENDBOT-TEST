# Wants to break in with no industry experience and no idea what to build

_Run 2026-09-16 11:53 UTC · 5 turns · gpt-5-nano via Azure_

**What this tests.** Draws on S3, then S3a once she reveals she has no starting idea at all — gives a concrete, small starting heuristic rather than repeating the general 'build something real' advice she's already stuck on.

## Transcript

```
BSC Coach — local area harness
  Area 7 · Job Search & Applications · live via gpt-5-nano
  Type freely. 'state' to inspect, 'quit' to stop.

  you > how do I get a tech job without any prior industry experience
  [stage B — User asked for entry into tech with no prior industry experience; it's a strategy/area-B question.]
  → enterDiscussionArea(7 · Job Search & Applications)
  [no new facts about her — note left alone, no call made]
  [second question dropped — one per reply]
  [drew on S3, G2, S2 — 2 Otema, 1 drafted]
  [voice only: S3a, S2b, G3, S3b]

Botema
  I would always recommend you prove you can ship by building a real project
  for a local business or NGO, even a small tool, so you have a concrete
  reference and something to point to in interviews. Then back that up with
  visible output (GitHub/portfolio) and targeted networking—talk to people
  doing the work you want and ask for small opportunities or Fellowships that
  welcome career switchers. What problem would you start with first?

  you > I don't really know what I'd even build though, nothing comes to mind
  [stage B — User is asking for project ideas to build to demonstrate ability without industry experience; this moves the conversation into strategy (B) subtopic.]
  [no new facts about her — note left alone, no call made]
  [repeated advice removed]
  [numbered rundown flattened — it was a list]
  [reply promised content it didn't contain the guards — regenerating the reply]
  [reply was substanceless — treating as nothing survived]
  [nothing survived the guards — using the area's question]
  [sentence cap fired — the model wrote a rundown]
  [drew on S3, S3a, S3b — 1 Otema, 2 drafted]
  [voice only: S2a, S2b, S2, G1]

Botema
  Where are you at with the job search right now?

  you > does it need to be something impressive
  [stage B — User asked whether the project needs to be impressive, which affects guidance on building a starter project and proving capability for no-experience job search.]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [sentence cap fired — the model wrote a rundown]
  [drew on S3, S2a, S3a — 1 Otema, 2 drafted]
  [voice only: G3, S3b, S2b, G1]

Botema
  No, it doesn’t have to be impressive. It just has to exist, be yours, and
  show you can ship something real. Does that feel like a good starting point?

  you > I'm also working full-time so I don't have much free time for this
  [stage B — Time constraint requires quick, low-effort, high-visibility project ideas and a lightweight plan]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [sentence cap fired — the model wrote a rundown]
  [drew on S3, S3b, S3a — 1 Otema, 2 drafted]
  [voice only: S2b, G3, S2a, G1]

Botema
  Totally get the time squeeze. Start with one tiny, real problem you can fix
  in a weekend or two evenings a month. What’s one small daily task you’d love
  to cut down or automate this month?

  you > what's realistic for me to actually finish
  [stage B — The user is asking for a realistic, time-bounded project plan given working full-time, which is a strategic step in Job Search & Applications.]
  [repeated advice removed]
  [numbered rundown flattened — it was a list]
  [sentence cap fired — the model wrote a rundown]
  [drew on S3b, S3, S3a — 1 Otema, 2 drafted]
  [voice only: S2a, S2b, G3, G1]

Botema
  Realistic means something you can finish in a weekend or two evenings a
  month, given your full-time job. Aim for a small, self-contained project
  (not a big system) that shows a real outcome. Which area or problem would
  you actually care to solve in the next couple of weeks?

  you > quit

  ── state ─────────────────────────────────────────────
  active_area     7 · Job Search & Applications
  covered_stages  B
  touched_facets  S2, S2a, S2b, S3, S3a, S3b, G1, G2, G3
  closed_areas    —
  role/location   — / —
  where she is    — A software landscape beginner with full-time work, exploring a transition into tech but lacking industry experience. No concrete role or compensation details have been shared yet, and there is no stated location.
  trying to do    — Wants to land a tech job by demonstrating ability to ship via a small, self-made project to show practical skill. She is balancing full-time work and a side project, struggling to identify a starting project or idea, seeking accessible paths that fit limited free time. NONE

  Nothing was written to any database.
```

## Checks

- PASS — reaches stage B at some point
- PASS — draws on S3, S3a, or S3b
- PASS — gives a small, concrete starting point, not just 'build something real'
- PASS — most replies still end on a question
- PASS — no two replies open the same way

---

_Generated by `npm run coach:scenarios` against live Azure. Regenerate after changing prompts or content._
