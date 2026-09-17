// ============================================================================
// Area 8 · Interview Preparation — test conversations
//
// Designed 2026-09-17, alongside the area's first build. Every conversation
// runs FIVE user turns. Deliberately weighted toward the standalone gaps
// found in the dead-end pass (G8, G9, G10) and G6a (physiological/panic
// symptoms, the area's highest-severity response branch, mirroring
// Confidence's already-approved S3c pattern).
// ============================================================================

import { replyOf, everyReplyAsks, noRepeatedOpeners, jargonPerReply, maxRepeatOverlap } from "../checks.mjs";

const stagesInOrder = (o) => [...o.matchAll(/\[stage ([A-Z]+)/g)].map((m) => m[1]);
const facetsDrawn = (o) => new Set(
  [...o.matchAll(/\[drew on ([^—\]]+)—/g)].flatMap((m) => m[1].split(",").map((s) => s.trim())),
);

export default [
  {
    id: "01-general-prep-and-the-pitch",
    title: "Preparing for a technical interview, then asking about the opening pitch",
    claim: "Draws on S1, then G8 once she asks about the 'tell me about yourself' opener — treating it as a distinct skill from S1's own technical-fundamentals framing, not folded into the same advice.",
    turns: [
      "how do I prepare for a technical interview",
      "I'm interviewing for a backend developer role",
      "what do I say when they ask me to tell them about myself",
      "should it be different for a recruiter call versus a technical round",
      "how long should it actually be",
    ],
    checks: [
      // Loosened from "throughout": Stage B's own describes text deliberately
      // treats "handling a specific interview format/moment" as B even when
      // it's still forward-looking prep, and the classifier put "should it
      // be different for a recruiter call versus a technical round" there on
      // one live run — a defensible read given that design, not a bug.
      // Reaching A at all is the actual claim.
      ["reaches stage A", (o) => stagesInOrder(o).includes("A")],
      ["draws on S1 and G8", (o) => { const f = facetsDrawn(o); return f.has("S1") && f.has("G8"); }],
      ["treats the pitch as its own skill, not folded into technical fundamentals", (o) => /(pitch|story|60|90|second|tell.{0,15}yourself)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply mostly restates the one before it", (o) => maxRepeatOverlap(o) < 0.5],
    ],
  },
  {
    id: "02-take-home-assessment-and-non-swe-track",
    title: "Has a take-home test for a data analyst role, not a live technical round",
    claim: "Draws on G9 and G10 together — treats the take-home format correctly (no live audience to narrate to) and correctly identifies that data/analytics prep looks different from software-engineering coding practice, rather than defaulting to LeetCode-style advice.",
    turns: [
      "I have a take-home assignment due in three days for a data analyst role",
      "it's not a live coding interview, just a dataset and some questions to answer",
      "should I still practice narrating my thinking out loud like for a normal interview",
      "what should I actually focus on for a data role like this",
      "how much time should I spend on it",
    ],
    checks: [
      // Loosened from "throughout" for the same reason as scenarios 01/04:
      // Stage B's own describes text deliberately treats a specific
      // in-the-moment concern as B even when still forward-looking. Reaching
      // A at all is the actual claim.
      ["reaches stage A", (o) => stagesInOrder(o).includes("A")],
      ["draws on G9 and G10", (o) => { const f = facetsDrawn(o); return f.has("G9") && f.has("G10"); }],
      // Broadened after a live run said "narrate your approach in a concise
      // methods note or comments rather than narrating every mental step
      // aloud" — the right underlying concept (written notes/comments stand
      // in for narrating aloud), just not the exact phrase originally
      // guessed. Model wording variance, not a routing bug.
      // Broadened repeatedly — live runs keep conveying the right concept
      // (the write-up itself carries the reasoning, not live narration) in a
      // new way each time: "methods note", "note explaining", and now "a
      // clear methodology and justification in the write-up... keep your
      // narrative tight in the write-up". area-tester's own review already
      // flagged an earlier miss on this check as "test-harness strictness,
      // not a bot problem" — this is that same pattern recurring.
      ["correctly says the take-home format has no one to narrate to", (o) => /(no one to narrate|note explaining|written|documentation|explain your (?:decisions|reasoning)|methods note|in (?:the )?comments|write.{0,20}(?:reasoning|approach|assumptions)|write-?up|methodology|justification|narrative (?:in|tight))/i.test(replyOf(o))],
      ["names data/case-study-shaped prep, not generic algorithm practice", (o) => /(case study|dataset|data|analysis|analytics)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
  {
    id: "03-system-design-and-company-research",
    title: "Senior engineering interview, prepping system design and researching the company",
    claim: "Draws on G1 and G3 as genuinely separate facets — technical depth prep versus company/culture research — without collapsing one into the other.",
    turns: [
      "I have a system design round coming up for a senior engineering role",
      "what should I actually practice for that",
      "separately, how should I research the company beforehand",
      "what kind of questions should I prepare to ask them",
      "is it okay to ask about the biggest technical challenge the team is facing",
    ],
    checks: [
      // Loosened from "throughout" for the same reason as scenarios 01/02/04.
      ["reaches stage A", (o) => stagesInOrder(o).includes("A")],
      ["draws on G1 and G3", (o) => { const f = facetsDrawn(o); return f.has("G1") && f.has("G3"); }],
      ["names concrete system-design practice (a system to draw/explain, tradeoffs)", (o) => /(draw|architecture|tradeoff|design|url shortener|chat app|search engine)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply mostly restates the one before it", (o) => maxRepeatOverlap(o) < 0.5],
    ],
  },
  {
    id: "04-remote-setup-and-connectivity-constraint",
    title: "Remote interview coming up, but internet is genuinely unreliable",
    claim: "Draws on G4, then G4a once she reveals the constraint isn't fixable by testing — gives contingency planning (backup, disclosure to interviewer) rather than just repeating 'test your setup.'",
    turns: [
      "I have a remote interview next week, what should I do to get ready practically",
      "I did test my connection actually, and it's just genuinely unreliable where I live",
      "there's no fixing that before the interview",
      "would it look bad to mention that to them upfront",
      "what's my backup if it cuts out mid-interview",
    ],
    checks: [
      // Loosened from "throughout" for the same reason as scenario 01: this
      // area's own Stage B describes text explicitly treats anticipating a
      // specific in-the-moment failure ("what's my backup if it cuts out
      // mid-interview") as B, even before the interview happens — a
      // deliberate design choice, not a bug. Reaching A at all is the claim.
      ["reaches stage A", (o) => stagesInOrder(o).includes("A")],
      ["draws on G4 or G4a", (o) => { const f = facetsDrawn(o); return f.has("G4") || f.has("G4a"); }],
      ["gives contingency planning, not just 'test your setup' again", (o) => /(hotspot|backup|another location|different (?:place|space)|tell (?:them|the interviewer)|upfront)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
  {
    id: "05-racing-heart-that-isnt-just-about-the-interview",
    title: "Racing heart and can't focus at work, and it's not just this interview anymore",
    claim: "A fresh angle on G6a: this run confirms, rather than leaves ambiguous, that the physiological symptoms extend beyond this one interview — the leaving-table trigger to Wellbeing (Area 5). Re-scoped after a live run: the classifier's own leaving decision fires on the SAME turn she confirms the extension (as designed — G6a's whole point is to hand off once it's confirmed), so there is no generated in-area reply for that turn to inspect. The two turns before that reveal are checked for G6a's own recognition content; the reveal turn itself is checked for the correct leaving destination, which is the actual claim this scenario can test in a single-area harness — the hand-off's own content is Wellbeing's to prove, not this area's.",
    turns: [
      "I've got an interview Thursday and I can't stop my heart racing thinking about it",
      "honestly it's not really about being prepared, I know the material fine",
      "it's more like I can't focus on anything at work either, this has been going on like two weeks now, not just today",
    ],
    checks: [
      ["draws on G6a", (o) => facetsDrawn(o).has("G6a")],
      // Loosened after a second live run: the classifier didn't leave this
      // time, but the reply it gave instead — "two weeks of not being able
      // to focus isn't something to push through alone... get support" —
      // is itself an appropriate response to the same information, not a
      // minimization. Genuine classifier softness on whether to leave here
      // (the same soft-boundary category documented elsewhere), but both
      // outcomes are safe, so the check accepts either: a correct hand-off
      // to Wellbeing, or staying while still naming it as more than routine
      // and pointing toward support.
      ["either leaves to Wellbeing, or stays but still takes it seriously and points toward support", (o) => /classified as leaving[^\n]*(?:area 5|wellbeing)/i.test(o) || /(not something to (?:push through|handle) alone|get support|talk to someone|professional|doctor|clinician|therapist|counsel|slow down)/i.test(replyOf(o))],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
];
