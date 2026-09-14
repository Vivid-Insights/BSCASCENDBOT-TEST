# Set boundaries at work but manager keeps messaging after hours anyway

_Run 2026-09-14 12:54 UTC · 5 turns · gpt-5-nano via Azure_

**What this tests.** Draws on S1, then S1a once she reports the boundary wasn't respected — and does not just repeat S1's own 'most well-run teams respect that' assumption back at her after she's already said hers doesn't.

## Transcript

```
BSC Coach — local area harness
  Area 5 · Wellbeing & Balance · live via gpt-5-nano
  Type freely. 'state' to inspect, 'quit' to stop.

  you > how do I set healthy boundaries in a demanding tech job
  [stage B — User has a current demanding tech job and asked for boundary-setting strategies, which fits Wellbeing & Balance Stage B.]
  → enterDiscussionArea(5 · Wellbeing & Balance)
  [no new facts about her — note left alone, no call made]
  [drew on S1, S2, S4 — 3 Otema, 0 drafted]
  [voice only: G1, G2, S1a, S2a]

Botema
  You set explicit hours, communicate them clearly, and protect that time as
  non-negotiable—mute non-urgent notifications outside it and treat being
  “always on” as a choice you make, not a default. In my experience, name the
  pattern to your manager: “I’m not available after X; if something urgent
  comes up, we’ll triage first thing tomorrow.” Does that feel like something
  you could start with this week?

  you > I actually told my manager my working hours already
  [stage B — User has already stated current working hours with manager; the new input confirms boundary progress but stays within Wellbeing & Balance, not leaving.]
  [no new facts about her — note left alone, no call made]
  [repeated advice removed]
  [drew on S1, S1a, S2a — 1 Otema, 2 drafted]
  [voice only: S3a, G2, S4, G1]

Botema
  Good. If you’ve already stated your hours, your next move is to harden the
  pattern, not the policy. Try a simple triage protocol you can share once:
  “If it’s after hours and truly urgent, please flag in the ticket with
  ‘urgent after-hours’ so we triage first thing tomorrow.” Pair that with a
  quick after-hours reply template you use only when something truly urgent
  lands.

  you > they still message me at night expecting a quick reply anyway
  [stage B — The user is in a current job and their boundary issue involves coworkers' behaviors after hours.]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [repeated advice removed]
  [drew on S1, S1a, G1 — 1 Otema, 2 drafted]
  [voice only: S2a, S3a, S4, G2]

Botema
  That’s real—the pattern is exactly what you’re trying to change. Do this:
  (1) use a one-line triage rule you can repeat in every after-hours message:
  “Urgent after-hours = tag the ticket as urgent after-hours; we triage first
  thing tomorrow.” (2) mute non-urgent messages outside your hours and set a
  15-minute daily triage window for urgent issues only, with a clear
  escalation path if it repeats.

  you > this has happened multiple times since I said something
  [stage B — Repeated after-hours messages indicate the boundary-setting is not being respected; this adds urgency to enforce triage protocol and communication discipline.]
  [no new facts about her — note left alone, no call made]
  [drew on S1, S1a, G2 — 1 Otema, 2 drafted]
  [voice only: S3a, S2a, S2, S4]

Botema
  That repetition after you’ve stated hours isn’t on you — it’s a pattern your
  manager should address. I’d recommend you send a brief escalation with a
  concrete request for a formal after-hours SLA and a log of
  tonight/after-hours messages, plus your triage rule, and ask for a quick
  check-in to agree on it. Do you want me to draft that one-page message you
  can send today?

  you > should I just keep pushing or is it not worth it at this place
  [stage B — User asks for guidance on whether to keep pushing for boundary changes in a demanding current job; this is a wellbeing/balance decision about continuing in the same environment.]
  [no new facts about her — note left alone, no call made]
  [second question dropped — one per reply]
  [drew on S1, S1a, S3a — 1 Otema, 2 drafted]
  [voice only: G2, S2a, S2, S4]

Botema
  If they’ve ignored clear boundaries after you’ve raised them, you’re not
  failing—you’re testing the culture, and that’s a signal to escalate or to
  re-evaluate. I would push for a formal after-hours SLA, a documented triage
  process, and a defined review date; if there’s no measurable change by then,
  you should seriously consider moving to a place that respects boundaries and
  values your time. Does that feel doable within your current role?

  you > quit

  ── state ─────────────────────────────────────────────
  active_area     5 · Wellbeing & Balance
  covered_stages  B
  touched_facets  S1, S1a, S2, S2a, S3a, S4, G1, G2
  closed_areas    —
  role/location   — / —
  where she is    — A software engineer in a demanding tech environment, currently navigating after-hours expectations and unclear urgency signals. She has communicated working hours previously, but colleagues still message at night expecting quick replies.
  trying to do    — She wants to establish reliable after-hours boundaries and a clear triage process that actually reduces after-hours work. She has tried stating hours and suggesting an urgent-after-hours flag, but it hasn’t stopped nighttime messages; she is seeking a concrete, repeatable protocol and accountability to enforce it. NONE

  Nothing was written to any database.
```

## Checks

- PASS — classified stage B throughout
- PASS — draws on S1 or S1a
- PASS — doesn't just reassert that teams usually respect a stated boundary once she's said hers doesn't
- PASS — treats persisting and reconsidering the environment as both legitimate
- PASS — most replies still end on a question
- PASS — no two replies open the same way

---

_Generated by `npm run coach:scenarios` against live Azure. Regenerate after changing prompts or content._
