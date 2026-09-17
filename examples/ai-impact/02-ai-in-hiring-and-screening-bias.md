# Worried an AI screening tool will filter her out or be biased against her

_Run 2026-09-17 11:24 UTC · 4 turns · gpt-5-nano via Azure_

**What this tests.** Draws on G4 for the general hiring-process question, then G8 once the worry turns specifically to bias against her background — gives a concrete mitigation (a human seeing her work directly) rather than just reassurance.

## Transcript

```
BSC Coach — local area harness
  Area 10 · AI & the Future of Tech Work · live via gpt-5-nano
  Type freely. 'state' to inspect, 'quit' to stop.

  you > how is AI actually changing the hiring process for tech jobs
  [stage B — The user asked about current AI-driven changes in hiring, which fits the B area (AI-in-hiring, tools, screening).]
  → enterDiscussionArea(10 · AI & the Future of Tech Work)
  [no new facts about her — note left alone, no call made]
  [second question dropped — one per reply]
  [sentence cap fired — the model wrote a rundown]
  [drew on G4, G5a, G6a — 0 Otema, 3 drafted]
  [voice only: G6, G5, G9, G8]

Botema
  AI is changing hiring by handling more of the screening and early
  assessment, with tools like ChatGPT or Copilot powering take-home tests,
  code reviews, and résumé screening. The emphasis is shifting toward system
  design, real-world judging of your work, and the ability to explain
  trade-offs, not just writing code from memory. Does that align with what
  you’re already seeing in your pipeline?

  you > is my CV going to just get filtered out by some AI tool before a human even sees it
  [stage B — The user asks about automated CV screening and its practical impact on whether a resume gets seen by a human, which is a B-stage topic about how hiring AI is used today.]
  [no new facts about her — note left alone, no call made]
  [repeated advice removed]
  [second question dropped — one per reply]
  [sentence cap fired — the model wrote a rundown]
  [drew on G4, G3, G5 — 0 Otema, 3 drafted]
  [voice only: G7, G5a, G8, G9]

Botema
  Short answer: yes, many teams now use AI/ATS screening first, but a human
  usually reviews resumes that pass the filter. A lot of it comes down to
  keywords, formatting, and how clearly you show impact. Does that align with
  what you’re seeing in the roles you’re targeting?

  you > I'm worried it'll be biased against me because of my background, is that a real risk
  [stage B — User asked about bias risk in AI-driven hiring, which affects the job-search/hiring process.]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [repeated advice removed]
  [drew on G8, G4, G6 — 0 Otema, 3 drafted]
  [voice only: G3, G5, G7, G9]

Botema
  Yes, that’s real and well documented. AI screening can reflect biases in
  data and how resumes are parsed, which can hurt candidates with
  non-traditional backgrounds or names; you’re not imagining it. My guidance:
  pair your CV with a strong, easily skimmable portfolio or project link, use
  clear impact-focused bullets, and use referrals or direct outreach so a real
  person reviews your work too.

  you > what can I actually do about that
  [classification missing/invalid stage "undefined" — retrying at 4000 tokens]
  [stage B — User asked for concrete steps to counter AI bias in hiring, keeping the discussion in AI & hiring strategies (stage B).]
  [nothing recorded about her yet — writing the note anyway before it ages out]
  [repeated advice removed]
  [drew on G8, G4, G7 — 0 Otema, 3 drafted]
  [voice only: G9, G3, G5, G5a]

Botema
  Here’s what I would do, straight, with Africa-market pragmatism: build a
  portfolio that shows impact (not just code), with one clear project per
  domain, including the problem, your approach, and measurable outcomes; host
  it with a simple, shareable link in your CV and apply using referrals so a
  human reviews your work. Pair that with targeted resume bullets that mirror
  each job’s description and push for direct outreach to recruiters or mentors
  who can vouch for you. Does that feel doable given your current network and
  the kinds of projects you can showcase next?

  you > quit

  ── state ─────────────────────────────────────────────
  active_area     10 · AI & the Future of Tech Work
  covered_stages  B
  touched_facets  G3, G4, G5, G5a, G6, G6a, G7, G8, G9
  closed_areas    —
  role/location   — / —
  where she is    She is a software engineer, details about her exact role and pay or location are not provided, so NONE for specifics, but she has been discussing AI-driven screening and its biases in hiring.
  trying to do    She wants to move through AI screening toward human-reviewed consideration by showcasing impact-focused work and a strong portfolio, but faces risk of biased screening and non-traditional background penalties; she has started pairing CV with portfolio, using clear bullets, and pursuing referrals to ensure direct human review, and she asks what concrete steps she can take to mitigate bias and improve her chances.

  Nothing was written to any database.
```

## Checks

- PASS — reaches stage B
- PASS — draws on G4 and G8
- PASS — names a concrete mitigation, not just reassurance
- PASS — most replies still end on a question
- PASS — no two replies open the same way

---

_Generated by `npm run coach:scenarios` against live Azure. Regenerate after changing prompts or content._
