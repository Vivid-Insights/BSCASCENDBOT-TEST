# BSC-programme mentor hasn't responded in three weeks; scared asking for a new one reflects badly on her

_Run 2026-09-14 06:59 UTC · 5 turns · gpt-5-nano via Azure_

**What this tests.** Probes a mentor who has gone quiet/unresponsive (not a chemistry mismatch, so distinct from the S3a switching branch as drafted) combined with self-doubt about whether requesting a different mentor makes her look bad — checking whether the coach either handles the ghosting practically or, per the storyboard's own leaving table ('self-doubt about deserving a mentor's time becomes the main subject' -> Confidence), acknowledges the self-doubt rather than just cycling mentorship advice at it.

## Transcript

```
BSC Coach — local area harness
  Area 4 · Mentorship · live via gpt-5-nano
  Type freely. 'state' to inspect, 'quit' to stop.

  you > so my mentor from the bsc program hasn't responded in like 3 weeks
  [stage B — Mentor from the BSC program is unresponsive for 3 weeks; needs guidance within ongoing mentor relationship.]
  → enterDiscussionArea(4 · Mentorship)
  [no new facts about her — note left alone, no call made]
  [sentence cap fired — the model wrote a rundown]
  [drew on S3a, S6, S3 — 2 Otema, 1 drafted]
  [voice only: S4, S4a, S5]

Botema
  That’s tough—and it’s real. Mentors go quiet sometimes, but three weeks is
  too long to leave on its own. Does that feel like something you could try
  right now?

  you > idk if I should just wait or say something, feels awkward
  [stage B — The user is asking how to approach a quiet mentor and needs concrete outreach options within the ongoing mentorship.]
  [no new facts about her — note left alone, no call made]
  [validating opener dropped — she described herself, not something done to her]
  [repeated advice removed]
  [drew on S4a, S5, S4 — 2 Otema, 1 drafted]
  [voice only: S3a, S6, S3]

Botema
  The mentor’s silence isn’t about you, and a quick check-in can reset the
  tempo. I’d draft something light and concrete: “Hi [Name], I hope you’re
  well. I’ve been making progress on [X], and I’d value your quick read on [Y]
  if you have 10 minutes this week. ” If you want, I can tailor it to your
  exact project and tone.

  you > would it look bad on me if I asked for a different mentor
  [stage B — The user is asking about continuing in an ongoing mentor relationship within the BSC program and whether it’s okay to request a different mentor.]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [repeated advice removed]
  [second question dropped — one per reply]
  [sentence cap fired — the model wrote a rundown]
  [drew on S3a, S6, S4a — 1 Otema, 2 drafted]
  [voice only: S4, S3, S5]

Botema
  I would always recommend handling it transparently, not ghosting. If a quick
  check-in with your current mentor doesn’t move things, it’s absolutely
  acceptable to ask for a different mentor—better to align early than stay in
  a misfit pairing. Does that feel like a plan you could run with?

  you > we only had like two sessions total before this happened
  [stage B — The user has an existing mentor but only two sessions so far and is seeking guidance on how to handle long silences or switching mentors.]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [repeated-opener guard fired — a reused opening clause was dropped]
  [repeated advice removed]
  [drew on S3a, S3, S6 — 2 Otema, 1 drafted]
  [voice only: S4a, S5, S4]

Botema
  With only two sessions, you’re not obliged to wait in silence. I would still
  ping with a clear note asking for a schedule or to connect with another
  mentor if silence continues. If there’s no response after that, request a
  swap through the program so you don’t fall behind your goals.

  you > what do I even say if I do reach out to switch
  [stage B — User asked for exact what to say when reaching out to switch mentors; still in B stage (has a mentor in program) and seeking strategies for using relationship and possibly change mentors.]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [repeated advice removed]
  [second question dropped — one per reply]
  [sentence cap fired — the model wrote a rundown]
  [drew on S3a, S3, S6 — 2 Otema, 1 drafted]
  [voice only: S4, S4a, S5]

Botema
  Here’s a concise, direct option you can tailor: Hi [Name], I’ve appreciated
  our brief time so far, but I’m finding I need guidance in [X] and a pairing
  with a mentor who has strengths in [Y]. Could you advise on the process to
  switch mentors or connect me with someone who fits better with my goals?
  Does that fit the tone you want?

  you > quit

  ── state ─────────────────────────────────────────────
  active_area     4 · Mentorship
  covered_stages  B
  touched_facets  S3, S3a, S4, S4a, S5, S6
  closed_areas    —
  role/location   — / —

  Nothing was written to any database.
```

## Checks

- PASS — classified stage B (existing mentorship relationship)
- PASS — draws on S3 or S3a (sessions / switching)
- PASS — gives a concrete next step for the silence itself, not just switching
- PASS — most replies still end on a question
- PASS — no two replies open the same way
- PASS — no reply mostly restates the one before it

---

_Generated by `npm run coach:scenarios` against live Azure. Regenerate after changing prompts or content._
