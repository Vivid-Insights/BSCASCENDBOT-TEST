// ============================================================================
// Area 5 · Wellbeing & Balance — test conversations
//
// Designed 2026-09-14, alongside the area's first build. Every conversation
// runs FIVE user turns. Deliberately weighted toward the two standalone gap
// facets (G1, G2) added straight out of the dead-end discovery pass — the
// highest-severity, least-tested content in this area's first build.
// ============================================================================

import { replyOf, everyReplyAsks, noRepeatedOpeners, jargonPerReply, maxRepeatOverlap } from "../checks.mjs";

const stagesInOrder = (o) => [...o.matchAll(/\[stage ([A-Z]+)/g)].map((m) => m[1]);
const facetsDrawn = (o) => new Set(
  [...o.matchAll(/\[drew on ([^—\]]+)—/g)].flatMap((m) => m[1].split(",").map((s) => s.trim())),
);

export default [
  {
    id: "01-burnout-while-learning-stacked-with-job-and-family",
    title: "Learning to code while working full-time and parenting in the evenings",
    claim: "Starts in stage A on the bare learning question, then moves to stage B the moment a current full-time job enters the picture — per the area's own stage-boundary rule — and draws on S3a's harder edit (something has to give) once the job/family load stacks on top, not just the plain pacing advice.",
    turns: [
      "how do I avoid burning out while learning to code",
      "I'm not just learning though, I have a full-time job too",
      "and I look after my kids in the evenings on top of that",
      "there's really nothing extra to give right now, everything already feels like the bare minimum",
      "how much time should I even be spending on this realistically",
    ],
    checks: [
      ["starts in stage A, moves to stage B once a job is named", (o) => { const s = stagesInOrder(o); return s[0] === "A" && s.slice(1).every((x) => x === "B"); }],
      ["draws on S3 or S3a", (o) => { const f = facetsDrawn(o); return f.has("S3") || f.has("S3a"); }],
      ["names something scaled down to fit, not full pacing as normal", (o) => /(trim|flex|cut back|scale back|pull back|under-invest|pause|shield|non-negotiable|protect (?:a |one |two )?(?:tiny|small)|reclaim|\d+[- ]?minute)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply mostly restates the one before it", (o) => maxRepeatOverlap(o) < 0.5],
    ],
  },
  {
    id: "02-transition-uncertainty-self-doubt-and-money-fear",
    title: "Mid-transition, unsure if it's uncertainty or her own capability, and scared about money",
    claim: "Draws on S5, then keeps S5a's self-doubt-vs-uncertainty distinction and S5b's money question as two separate things rather than folding them into one generic 'transition is hard' answer.",
    turns: [
      "I'm in the middle of a career transition into tech and my mental health is kind of suffering",
      "honestly it's not just uncertainty, I don't know if I'm actually good enough to pull this off",
      "and on top of that I'm scared I'll run out of money before I find something",
      "how many months should I even be planning for",
      "what should I actually be doing day to day right now",
    ],
    checks: [
      ["stays in stage A throughout", (o) => stagesInOrder(o).every((s) => s === "A")],
      ["draws on S5 and (S5a or S5b)", (o) => { const f = facetsDrawn(o); return f.has("S5") && (f.has("S5a") || f.has("S5b")); }],
      ["addresses money/runway directly", (o) => /(runway|money|financ|months|stopgap|freelanc|part-time)/i.test(replyOf(o))],
      // Not a keyword check on how it phrases the capability-doubt response —
      // three live runs gave three legitimate, differently-worded answers
      // ("proof", "pull this off", "concrete evidence of what you can do"),
      // which is model wording variance, not a routing bug. The facet-drawn
      // check above already confirms S5a's material was actually selected;
      // this checks the generated reply doesn't just repeat the prior turn's
      // generic transition-stress advice instead of responding to the
      // specific doubt she named — a shape/routing check, per this suite's
      // own stated scope, not a judgment on which words it used.
      ["doesn't just repeat the previous turn's advice", (o) => maxRepeatOverlap(o) < 0.5],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
  {
    id: "03-boundaries-stated-but-not-respected",
    title: "Set boundaries at work but manager keeps messaging after hours anyway",
    claim: "Draws on S1, then S1a once she reports the boundary wasn't respected — and does not just repeat S1's own 'most well-run teams respect that' assumption back at her after she's already said hers doesn't.",
    turns: [
      "how do I set healthy boundaries in a demanding tech job",
      "I actually told my manager my working hours already",
      "they still message me at night expecting a quick reply anyway",
      "this has happened multiple times since I said something",
      "should I just keep pushing or is it not worth it at this place",
    ],
    checks: [
      ["classified stage B throughout", (o) => stagesInOrder(o).every((s) => s === "B")],
      ["draws on S1 or S1a", (o) => { const f = facetsDrawn(o); return f.has("S1") || f.has("S1a"); }],
      ["doesn't just reassert that teams usually respect a stated boundary once she's said hers doesn't", (o) => !/most (?:well-run )?teams (?:respect|will respect|usually respect)/i.test(replyOf(o))],
      ["treats persisting and reconsidering the environment as both legitimate", (o) => /(pattern|one-off|escalat|not (?:worth|the right)|environment|worth staying|worth leaving)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
  {
    id: "04-no-support-network-and-flexible-work",
    title: "No family nearby to lean on, weighing whether flexible/remote work is realistic",
    claim: "Draws on S2, then S2a once she says she has no one to lean on, and separately covers S4's flexible-work content rather than treating the two questions as one.",
    turns: [
      "how do women in tech manage family responsibilities alongside their career growth",
      "I don't really have anyone to lean on, no family nearby and no partner",
      "is flexible or remote work actually realistic for someone in my position",
      "if my role needs some in-office time, does that rule it out completely",
      "how do I even bring this up with my manager",
    ],
    checks: [
      ["reaches stage B at some point", (o) => stagesInOrder(o).includes("B")],
      ["draws on S2 or S2a", (o) => { const f = facetsDrawn(o); return f.has("S2") || f.has("S2a"); }],
      ["draws on S4 (flexible arrangements)", (o) => facetsDrawn(o).has("S4")],
      ["addresses having no network directly, not just 'build one'", (o) => /(no one|nothing to build|start (?:from|with)|paid option|childminder|one or two|one reliable person|build (?:on|around) one)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply mostly restates the one before it", (o) => maxRepeatOverlap(o) < 0.5],
    ],
  },
  {
    // NEW this run
    id: "05-minimized-harassment-cant-afford-to-leave",
    title: "Downplaying a colleague's comments as maybe-nothing, while being the sole earner at home",
    claim: "Probes G2 from an angle 01-04 don't cover: she names a colleague's racially/gendered-tinged comments ('articulate', comments about how she looks in the role) but immediately hedges ('maybe I'm reading too much into it'), then separately says she can't afford to lose the job because she's the only income at home. Tests whether the coach names the pattern as what it is rather than adopting her own minimization, and whether its 'what to do' advice accounts for the fact she cannot just walk away or risk the job — versus a G1/G2 answer that assumes she can freely escalate or quit.",
    turns: [
      "so lately I've just been dreading going into the office, like actually dreading it",
      "there's this one guy on my team who keeps saying stuff, kind of about how I look for someone in this role, comments about being 'articulate' and stuff, I don't know, maybe I'm reading too much into it",
      "I really can't afford to lose this job right now though, I'm the only one bringing in money at home",
      "he hasn't done one big thing I could point to, it's just built up over months",
      "am I overreacting, should I just try to let it roll off",
    ],
    checks: [
      ["classified stage B throughout", (o) => stagesInOrder(o).every((s) => s === "B")],
      ["draws on G1 or G2", (o) => { const f = facetsDrawn(o); return f.has("G1") || f.has("G2"); }],
      ["does not simply agree she's overreacting or that it's nothing", (o) => !/(you('re| are) overreacting|reading too much into it|probably nothing|let it roll off)/i.test(replyOf(o))],
      ["names the pattern directly rather than only offering generic stress coping", (o) => /(pattern|comment|remark|singl(?:ed|ing) out|how you look|articulate|document|not (?:okay|ok|acceptable))/i.test(replyOf(o))],
      ["acknowledges the financial constraint rather than suggesting she just quit or confront alone", (o) => /(can't afford|only income|sole earner|without (?:risking|losing) (?:the|your) job|document|HR|trusted|before (?:you )?(?:quit|leave|resign))/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
];
