# Mid-transition, unsure if it's uncertainty or her own capability, and scared about money

_Run 2026-09-14 12:54 UTC · 5 turns · gpt-5-nano via Azure_

**What this tests.** Draws on S5, then keeps S5a's self-doubt-vs-uncertainty distinction and S5b's money question as two separate things rather than folding them into one generic 'transition is hard' answer.

## Transcript

```
BSC Coach — local area harness
  Area 5 · Wellbeing & Balance · live via gpt-5-nano
  Type freely. 'state' to inspect, 'quit' to stop.

  you > I'm in the middle of a career transition into tech and my mental health is kind of suffering
  [stage A — User is in the middle of a career transition and mentions mental health strain, which places the message in Wellbeing & Balance - stage A (transition/learning with wellbeing concerns).]
  → enterDiscussionArea(5 · Wellbeing & Balance)
  [validating opener dropped — she described herself, not something done to her]
  [reply promised content it didn't contain the guards — regenerating the reply]
  [sentence cap fired — the model wrote a rundown]
  [drew on S5, S2, S5b — 2 Otema, 1 drafted]
  [voice only: S3a, S3, S5a, S4]

Botema
  I’d start by protecting sleep, building a tiny daily routine, and reducing
  cognitive load (one small project, one social check-in, one boundary you can
  hold). If you can, lean on a mentor or peer in our network for quick, honest
  check-ins. What part of the transition is weighing you down the most right
  now?

  you > honestly it's not just uncertainty, I don't know if I'm actually good enough to pull this off
  [stage A — User is in a tech transition and expresses self-doubt about capability, which is a wellbeing concern appropriate for stage A.]
  [no new facts about her — note left alone, no call made]
  [validating opener dropped — she described herself, not something done to her]
  [repeated advice removed]
  [sentence cap fired — the model wrote a rundown]
  [drew on S5a, S5, S4 — 2 Otema, 1 drafted]
  [voice only: S3a, S5b, S3, S2]

Botema
  I’d bet you’re carrying a lot of self-doubt while you’re still gathering
  evidence of what you can do in this field. Let’s anchor it in small,
  verifiable wins. What would a tiny, finishable project look like for you
  this week?

  you > and on top of that I'm scared I'll run out of money before I find something
  [stage A — User is in a career transition (Wellbeing & Balance area) and now expresses financial anxiety that impacts wellbeing; adds a new constraint related to money.]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [validating opener dropped — she described herself, not something done to her]
  [repeated advice removed]
  [drew on S5a, S5b, S5 — 1 Otema, 2 drafted]
  [voice only: S3, S2, S3a, S4]

Botema
  I’d always recommend a quick runway check and a safe, short-term stopgap
  that won’t derail your transition—part-time work, freelancing one tiny task,
  or a brief contract that fits your learning pace. What would be a safe
  interim option you could start in the next two weeks?

  you > how many months should I even be planning for
  [stage A — User is in a career transition and asked about planning horizon; remains within wellbeing & balance.]
  [no new facts about her — note left alone, no call made]
  [repeated advice removed]
  [second question dropped — one per reply]
  [drew on S5b, S5a, S3a — 0 Otema, 3 drafted]
  [voice only: S4, S5, S2, S3]

Botema
  I can’t give a exact number without your numbers, but here’s a quick way to
  think about it: list your essential monthly costs, divide your current
  runway by those costs to get months you can cover, and add a safety buffer
  (2–3 months) for the transition itself. In practice, many people aim for 6–9
  months of covered expenses with a buffer, but you’ll adjust to your numbers
  and risk tolerance. What are your current essential monthly costs?

  you > what should I actually be doing day to day right now
  [stage A — User asked for concrete day-to-day actions during a career transition, which fits stage A.]
  [no new facts about her — note left alone, no call made]
  [repeated advice removed]
  [reply promised content it didn't contain the guards — regenerating the reply]
  [drew on S5b, S5a, S3 — 1 Otema, 2 drafted]
  [voice only: S5, S3a, S2, S4]

Botema
  Doable day-to-day: one focused hour on a tiny project you can finish this
  week (document it with a couple of lines and a screenshot), 15 minutes
  logging your wins and what you learned, and a 15-minute touchpoint with a
  mentor or peer. Protect sleep, set a firm boundary (no work after a chosen
  time), and schedule a 15-minute micro-learning slot each day. What would you
  start with today?

  you > quit

  ── state ─────────────────────────────────────────────
  active_area     5 · Wellbeing & Balance
  covered_stages  A
  touched_facets  S2, S3, S3a, S4, S5, S5a, S5b
  closed_areas    —
  role/location   — / —
  where she is    She is a professional in a mid-career transition, in the process of moving into tech, with recent concerns about mental health, uncertainty about fit, and money anxiety.
  trying to do    She wants to establish credibility in tech and secure work, aiming to prove her capabilities through small, verifiable wins while stabilizing finances; her barriers include self-doubt, financial runway, and the need to balance mental health with a demanding transition; she has suggested focusing on tiny, finishable projects and seeking quick, honest check-ins from mentors or peers.

  Nothing was written to any database.
```

## Checks

- PASS — stays in stage A throughout
- PASS — draws on S5 and (S5a or S5b)
- PASS — addresses money/runway directly
- PASS — doesn't just repeat the previous turn's advice
- PASS — most replies still end on a question
- PASS — no two replies open the same way

---

_Generated by `npm run coach:scenarios` against live Azure. Regenerate after changing prompts or content._
