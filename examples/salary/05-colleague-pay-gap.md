# She finds out a male peer hired the same month earns more, at a small company

_Run 2026-09-14 06:59 UTC · 5 turns · gpt-5-nano via Azure_

**What this tests.** Stage C. Tests whether the coach names this as a pay gap worth raising rather than coaching her out of raising it, doesn't invent a legal claim or process that may not exist at her employer, and doesn't ask her to disclose her own number when she hasn't offered it.

## Transcript

```
BSC Coach — local area harness
  Area 9 · Salary & Negotiation · live via gpt-5-nano
  Type freely. 'state' to inspect, 'quit' to stop.

  you > so i just found out kwame who does basically the same job as me earns way more than i do
  [stage C — User discovered coworker with similar role earns more; wants to navigate pay negotiation with employer.]
  → enterDiscussionArea(9 · Salary & Negotiation)
  [no new facts about her — note left alone, no call made]
  [validating opener dropped — she described herself, not something done to her]
  [drew on G1, G9a, G1a — 0 Otema, 3 drafted]
  [voice only: G9, S4, G8, S4a]

Botema
  Start from your own role and impact, not his; gather 2–3 local market
  references for the same scope, and go to your manager to talk about aligning
  your salary with the market for your role. How have you documented your own
  scope and impact so far for this conversation?

  you > i only know because he mentioned a figure from his payslip without realising, i havent told anyone i know
  [stage A — User discovered a colleague earning more and is considering how to respond within salary negotiation area]
  [repeated advice removed]
  [drew on G10, G2, G5 — 0 Otema, 3 drafted]
  [voice only: G10a, S1]

Botema
  That’s real data to act on, not a feeling. Since you only know his figure,
  your next move is to document your own scope and impact now, collect 2–3
  local market references for the same role, and then request a formal chat to
  align your pay with market value for your level. How would you describe your
  current scope and impact in 2–3 bullet points for this conversation?

  you > im scared if i bring it up they'll just say im being difficult, it's a really small company
  [stage C — classify the message as stage C (current employee negotiating) moving from awareness to action]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [validating opener dropped — she described herself, not something done to her]
  [repeated advice removed]
  [drew on G4a, G9, G4d — 0 Otema, 3 drafted]
  [voice only: G4, G4c, S4, S4a]

Botema
  The way you frame it matters: present it as a business decision, not a
  personal request, tied to market value and your specific impact, and propose
  a clear path (scope review, a market check, and a follow-up date). What is
  one concrete impact you can cite in the meeting that clearly shows your
  value and aligns with market needs?

  you > he's not even more senior than me we literally started the same month
  [stage C — User is negotiating a raise due to pay disparity with a peer in the same role; move to Confidence stage to prepare how to frame the conversation with the manager.]
  [no new facts about her — note left alone, no call made]
  [repeated-opener guard fired — a reused opening clause was dropped]
  [repeated advice removed]
  [drew on G4b, G8, G1a — 0 Otema, 3 drafted]
  [voice only: G9a, S4c, S4a, S4b]

Botema
  In our markets, pay isn’t always tied to seniority or tenure, even when
  roles start at the same time. Focus on market value for the actual job you
  perform and your measurable impact, not on his title or tenure.

  you > how do i even start this without it blowing up in my face
  [stage C — User asks for how to start a salary discussion safely in current job situation.]
  [repeated advice removed]
  [drew on G1a, G1, G1b — 0 Otema, 3 drafted]
  [voice only: G8, G9, G9a]

Botema
  I hear you—small company, real risk. Opening line you can rehearse: “I’d
  like to align my compensation with the market for my role based on my scope
  and impact, and map out any gaps we should fix.” Then walk through your
  bullets, offer a clear path (scope review, market check, follow-up in two
  weeks), and end by asking for the next steps. What one concrete impact will
  you lead with in that chat?

  you > quit

  ── state ─────────────────────────────────────────────
  active_area     9 · Salary & Negotiation
  covered_stages  C, A
  touched_facets  S4, S4a, S4b, S4c, G1, G1a, G1b, G4, G4a, G4b, G4c, G4d, G8, G9, G9a, S1, G2, G10, G10a, G5
  closed_areas    —
  role/location   — / —
  where she is    — She is a professional in a small company, currently earning pay that she expects to benchmark against market references; she has not shared a specific figure publicly and is cautious about discussing compensation.
  trying to do    — She wants to align her pay with market value for her role, despite fears of being perceived as difficult in a small environment; she has not yet disclosed her scope or collected external references, and her next step is to document her impact, gather 2–3 local market references, and request a formal conversation with her manager. She is now seeking a cautious approach to initiating the conversation without triggering a negative reaction, aiming to frame the discussion around business value and measurable impact rather than personal comparison.

  Nothing was written to any database.
```

## Checks

- **FAIL** — names it as a pay gap worth raising, not a complaint to swallow
- PASS — does not tell her to drop it or stay quiet
- PASS — does not invent a formal legal process or law
- PASS — classified stage C
- PASS — most replies still end on a question
- PASS — never asks her to disclose her own pay
- PASS — no two replies open the same way
- PASS — no reply stacks more than two jargon terms
- PASS — no reply mostly restates the one before it

---

_Generated by `npm run coach:scenarios` against live Azure. Regenerate after changing prompts or content._
