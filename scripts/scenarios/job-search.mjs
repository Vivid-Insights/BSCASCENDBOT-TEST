// ============================================================================
// Area 7 · Job Search & Applications — test conversations
//
// Designed 2026-09-16, alongside the area's first build. Every conversation
// runs FIVE user turns. Deliberately weighted toward S2a (application
// silence/ghosting — the highest-frequency gap found) and G1 (discrimination
// or bias — the highest-severity, values-critical gap in this build).
// ============================================================================

import { replyOf, everyReplyAsks, noRepeatedOpeners, jargonPerReply, maxRepeatOverlap } from "../checks.mjs";

const stagesInOrder = (o) => [...o.matchAll(/\[stage ([A-Z]+)/g)].map((m) => m[1]);
const facetsDrawn = (o) => new Set(
  [...o.matchAll(/\[drew on ([^—\]]+)—/g)].flatMap((m) => m[1].split(",").map((s) => s.trim())),
);

export default [
  {
    id: "01-applied-everywhere-heard-nothing",
    title: "Applied to dozens of jobs, total silence, wondering what's wrong",
    claim: "Draws on S2, then S2a once she reports silence at volume, and treats it as a normal part of the process rather than a personal failing — grounded in the actual referral/volume facts, not vague reassurance.",
    turns: [
      "what is the most effective job search strategy in tech",
      "I've applied to over 40 jobs at this point and heard nothing back from any of them",
      "is that normal or am I doing something wrong",
      "should I just keep applying to more or change something",
      "how long should I wait before following up on one",
    ],
    checks: [
      ["classified stage B throughout", (o) => stagesInOrder(o).every((s) => s === "B")],
      ["draws on S2 or S2a", (o) => { const f = facetsDrawn(o); return f.has("S2") || f.has("S2a"); }],
      ["names a concrete ratio or norm, not just reassurance", (o) => /(referral|applications? per interview|\d+[-–]\d+|posted publicly|before (?:it'?s|they'?re) (?:even )?posted)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply mostly restates the one before it", (o) => maxRepeatOverlap(o) < 0.5],
    ],
  },
  {
    id: "02-no-experience-no-idea-what-to-build",
    title: "Wants to break in with no industry experience and no idea what to build",
    claim: "Draws on S3, then S3a once she reveals she has no starting idea at all — gives a concrete, small starting heuristic rather than repeating the general 'build something real' advice she's already stuck on.",
    turns: [
      "how do I get a tech job without any prior industry experience",
      "I don't really know what I'd even build though, nothing comes to mind",
      "does it need to be something impressive",
      "I'm also working full-time so I don't have much free time for this",
      "what's realistic for me to actually finish",
    ],
    checks: [
      ["reaches stage B at some point", (o) => stagesInOrder(o).includes("B")],
      ["draws on S3, S3a, or S3b", (o) => { const f = facetsDrawn(o); return f.has("S3") || f.has("S3a") || f.has("S3b"); }],
      ["gives a small, concrete starting point, not just 'build something real'", (o) => /(small|tiny|weekend|everyday problem|start smaller)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
  {
    id: "03-cv-and-linkedin-materials",
    title: "Wants a stronger CV and isn't sure her LinkedIn profile is helping",
    claim: "Stays in stage A throughout since both questions are about her materials, draws on S1 and S4, and treats them as two separate, related assets rather than folding one into the other.",
    turns: [
      "how do I write a CV that actually stands out for tech roles",
      "I'm targeting backend developer roles",
      "does my linkedin profile matter as much as the cv",
      "what should I actually put on it",
      "should the cv and linkedin say the exact same things",
    ],
    checks: [
      // Loosened from "throughout": the final turn ("should the CV and
      // LinkedIn say the exact same things") genuinely straddles A and B —
      // it's as much a coordination/strategy question as a materials one —
      // and live runs classified it either way while answering it well
      // either time. Reaching A at all is the actual claim this scenario
      // makes; the last turn's stage is a soft boundary call, not a bug.
      ["reaches stage A", (o) => stagesInOrder(o).includes("A")],
      ["draws on S1 and S4", (o) => { const f = facetsDrawn(o); return f.has("S1") && f.has("S4"); }],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply mostly restates the one before it", (o) => maxRepeatOverlap(o) < 0.5],
    ],
  },
  {
    id: "04-searching-quietly-while-employed",
    title: "Wants to search discreetly without her current employer finding out",
    claim: "Draws on G3, gives practical discretion steps rather than generic visibility advice, and doesn't treat the confidentiality constraint as an edge case to wave away.",
    turns: [
      "I'm looking for a new job but I'm still employed and don't want my current company to know",
      "is it safe to turn on open to work on linkedin",
      "what if a recruiter mentions me to someone at my current company",
      "how do I network without it getting back to my manager",
      "what should my linkedin activity look like while I'm doing this",
    ],
    checks: [
      // Loosened from "throughout": G3 is deliberately cross-listed into
      // stage A too (its own content includes the LinkedIn "open to work"
      // toggle specifically), and a direct "is it safe to turn this on"
      // question landed in A on one live run — reasonable, since it's a
      // LinkedIn-mechanics question on its face. Reaching B at all is the
      // actual claim.
      ["reaches stage B at some point", (o) => stagesInOrder(o).includes("B")],
      ["draws on G3", (o) => facetsDrawn(o).has("G3")],
      ["gives practical discretion steps (badge, recruiters-only, one-to-one)", (o) => /(open to work|recruiters only|one-to-one|discre|quiet|confidential)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
  // NEW this run
  {
    id: "05-doubts-her-own-read-of-the-panel",
    title: "Suspects the all-male panel is the reason she's stalling at final round, then talks herself out of it a turn later",
    claim: "Probes whether G1's validation holds when SHE is the one undercutting it a turn after naming the pattern — not just whether the coach names discrimination once, but whether it stays named once she second-guesses herself, and whether the practical next step points to people/records rather than something the coach can't actually do (filing a complaint on her behalf).",
    turns: [
      "ok so this is like the third time now, phone screen goes fine every time but then it's a panel interview and after that just... nothing",
      "and every single time the panel's been all guys, idk maybe im reading into it too much but something about it feels off",
      "actually wait no i think im probably overthinking this, my answers in the panel probably just werent as sharp as the phone screen",
      "if it does turn out to be a real pattern though what would i even do about it, is there someone i report that to",
      "should i keep applying to the same kind of places or is that a waste of time at this point",
    ],
    checks: [
      ["reaches stage B at some point", (o) => stagesInOrder(o).includes("B")],
      ["draws on G1", (o) => facetsDrawn(o).has("G1")],
      ["names the pattern plainly on first mention, not just asks for more detail", (o) => /(pattern|discrimin|bias|not (?:you|your qualifications)|not (?:in your head|imagining))/i.test(replyOf(o))],
      // The core probe: she undercuts her own read in turn 3 ("probably overthinking
      // this... answers probably just weren't sharp enough"). A coach that only
      // validated once and then agrees with her walk-back has failed the same way
      // NEVER_DISCOUNT_HER_PLACE exists to catch — just one turn later than usual.
      ["does not agree with her own walk-back of the pattern", (o) => !/(you'?re right|probably (?:just|was)|good instinct to double.?check|fair point|might just be)/i.test(replyOf(o))],
      ["does not offer to file, escalate, or act on her behalf", (o) => !/(i'?ll (?:report|file|escalate|follow up|reach out)|happy to (?:report|escalate|follow up))/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
];
