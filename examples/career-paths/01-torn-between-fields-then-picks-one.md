# Doesn't know enough about any field to compare them, then settles on data science

_Run 2026-09-14 07:38 UTC · 5 turns · gpt-5-nano via Azure_

**What this tests.** Stays in stage A while no field is named, reaches stage B once data science is picked, and doesn't let 'no technical background' derail the roadmap once she's named a field.

## Transcript

```
BSC Coach — local area harness
  Area 3 · Career Paths & Roadmaps · live via gpt-5-nano
  Type freely. 'state' to inspect, 'quit' to stop.

  you > I don't really know enough about any of these fields to know which one I'd even be good at or enjoy
  [stage A — User is at the very start of the career path decision process and is uncertain about which field to pursue; needs exploration guidance.]
  → enterDiscussionArea(3 · Career Paths & Roadmaps)
  [no new facts about her — note left alone, no call made]
  [second question dropped — one per reply]
  [drew on G1, S8, S8a — 1 Otema, 2 drafted]
  [voice only: G1a]

Botema
  You’re not alone—lots of women start not knowing which field fits, and that
  curiosity is a good sign. My go-to is to test a few tiny hands-on bites: a
  one-day tutorial to build a webpage, a one-day data-cleaning task, or a
  quick Figma design sprint to sketch a screen. Which of those sounds like
  something you could try this week?

  you > I guess data science sounds interesting but I've never tried it
  [stage B — User named data science as a field to explore and hasn't tried it yet; wants to test interest through tiny bites.]
  [no new facts about her — note left alone, no call made]
  [sentence cap fired — the model wrote a rundown]
  [drew on S2, S5a, S5 — 2 Otema, 1 drafted]
  [voice only: S4a, S4, S6, S1]

Botema
  Data science is a solid place to start, and it’s good you’re feeling drawn
  to it. I’d start with a tiny, concrete bite this week: pull a small CSV
  (even something like a public dataset about local traffic or weather), load
  it with Python and pandas, and compute a couple of simple stats and a quick
  chart. Sound doable for you this week?

  you > okay I want to actually pursue data science then
  [stage B — User has chosen to pursue data science, moving from exploration to commitment in a specific field.]
  [repeated advice removed]
  [sentence cap fired — the model wrote a rundown]
  [drew on S1, S3, S6 — 3 Otema, 0 drafted]
  [voice only: S4, S5, S4a, S7]

Botema
  Love that. Let’s anchor it with a concrete first week and a clear path. Does
  that feel doable with your current laptop and internet access, and is there
  a local dataset you’d be excited to start with (e.g., health, education,
  traffic)?

  you > I don't have a technical background though
  [stage B — User stated lack of technical background, affecting approach to data science roadmap.]
  [sentence cap fired — the model wrote a rundown]
  [drew on S2, S4, S4a — 2 Otema, 1 drafted]
  [voice only: S1, S5, S7, S6]

Botema
  That’s a common starting point—and totally doable with a clear ladder. I’d
  start with the basics you can do with zero setup: Excel/Sheets for data
  hygiene, then a tiny bridge into SQL, then Python (in Colab so you don’t
  need to install anything). What would you prefer to begin with this week: a
  quick SQL intro and a mini query, or a Colab pandas mini-task on a public
  dataset?

  you > so what's actually the roadmap for me
  [stage B — User asked for a concrete, field-specific roadmap for pursuing data science within the data science path.]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [repeated advice removed]
  [numbered rundown flattened — it was a list]
  [sentence cap fired — the model wrote a rundown]
  [drew on S2, S1, S7 — 3 Otema, 0 drafted]
  [voice only: S6, S4a, S3, S5]

Botema
  Here’s a straight, doable ladder that fits a zero-setup start and African
  realities. Weeks 0–1: Excel/Sheets data hygiene and simple queries. Outcome:
  you can clean data, do basic filters, and describe what you’re looking at.

  you > quit

  ── state ─────────────────────────────────────────────
  active_area     3 · Career Paths & Roadmaps
  covered_stages  A, B
  touched_facets  S8, S8a, G1, G1a, S1, S2, S3, S4, S4a, S5, S5a, S6, S7
  closed_areas    —
  role/location   — / —
  where she is    — She is a non-technical learner exploring career options, currently considering data science but without a technical background; her last stated step was evaluating a beginner-friendly ladder from Excel to SQL to Python, and discussing whether to start with SQL or a Colab pandas task.
  trying to do    — She aims to pursue data science by building foundational skills through a guided, zero-setup learning path; barriers include not having a technical background and needing a clear, realistic roadmap; she has asked for a concrete, step-by-step plan outlining the sequence of skills, resources, and checkpoints to reach a beginner-to-competent level.

  Nothing was written to any database.
```

## Checks

- PASS — classified stage A on the opening message
- PASS — reaches stage B once data science is named
- PASS — draws on S2 (data/ML roadmap) once the field is named
- PASS — gives a concrete starting step despite no technical background
- PASS — most replies still end on a question
- PASS — no two replies open the same way
- PASS — no reply mostly restates the one before it

---

_Generated by `npm run coach:scenarios` against live Azure. Regenerate after changing prompts or content._
