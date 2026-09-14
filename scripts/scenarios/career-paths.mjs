// ============================================================================
// Area 3 · Career Paths & Roadmaps — test conversations
//
// Built fast under a deadline (2026-08-23), same shape as the other areas'
// scenario files. Every conversation runs FIVE user turns.
// ============================================================================

import { replyOf, everyReplyAsks, noRepeatedOpeners, jargonPerReply, maxRepeatOverlap } from "../checks.mjs";

const stagesInOrder = (o) => [...o.matchAll(/\[stage ([A-Z]+)/g)].map((m) => m[1]);
const facetsDrawn = (o) => new Set(
  [...o.matchAll(/\[drew on ([^—\]]+)—/g)].flatMap((m) => m[1].split(",").map((s) => s.trim())),
);

export default [
  {
    id: "01-torn-between-fields-then-picks-one",
    title: "Doesn't know enough about any field to compare them, then settles on data science",
    claim: "Stays in stage A while no field is named, reaches stage B once data science is picked, and doesn't let 'no technical background' derail the roadmap once she's named a field.",
    turns: [
      "I don't really know enough about any of these fields to know which one I'd even be good at or enjoy",
      "I guess data science sounds interesting but I've never tried it",
      "okay I want to actually pursue data science then",
      "I don't have a technical background though",
      "so what's actually the roadmap for me",
    ],
    checks: [
      ["classified stage A on the opening message", (o) => stagesInOrder(o)[0] === "A"],
      ["reaches stage B once data science is named", (o) => stagesInOrder(o).slice(2).includes("B")],
      ["draws on S2 (data/ML roadmap) once the field is named", (o) => facetsDrawn(o).has("S2")],
      ["gives a concrete starting step despite no technical background", (o) => /(spreadsheet|sql|python|pandas|analyst)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply mostly restates the one before it", (o) => maxRepeatOverlap(o) < 0.5],
    ],
  },
  {
    id: "02-cybersecurity-from-scratch",
    title: "Wants a cybersecurity path with zero IT background, and thinks 'ethical hacker' is the entry job",
    claim: "Stays in stage B throughout — the field is named from turn one — and corrects the 'ethical hacker as day-one job' assumption rather than going along with it.",
    turns: [
      "what does a career path in cybersecurity actually look like",
      "I have zero IT background at all",
      "is 'ethical hacker' a realistic first job for me",
      "what should I actually start with this month",
      "how long before I could get an entry-level security job",
    ],
    checks: [
      ["classified stage B throughout", (o) => stagesInOrder(o).every((s) => s === "B")],
      ["draws on S4 (cybersecurity roadmap)", (o) => facetsDrawn(o).has("S4")],
      ["corrects the ethical-hacker-as-first-job assumption", (o) => /(soc analyst|security support|not.{0,20}ethical hacker|realistic entry)/i.test(replyOf(o))],
      ["gives a concrete starting point despite no IT background", (o) => /(networking|it fundamentals|security\+|tryhackme)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply stacks more than two jargon terms", (o) => jargonPerReply(o) <= 2],
    ],
  },
  {
    id: "03-engineer-to-product-manager",
    title: "A backend engineer wants to move into product management with no formal PM experience",
    claim: "Draws on S5 (the PM roadmap) rather than S7 (PM as a career CHANGE into tech project management, a different question), since she's already in tech and moving sideways within it.",
    turns: [
      "I'm a backend engineer and I want to move into product management",
      "I don't have any formal PM experience",
      "would getting a PM certificate actually help",
      "how do people usually make this jump",
      "what's my actual first move",
    ],
    checks: [
      ["draws on S5 (product management)", (o) => facetsDrawn(o).has("S5")],
      // Broadened: a live run made the same point via "internal rotation" /
      // "co-lead a project with a PM" / "internal PM exposure" rather than
      // the literal word "sideways" — same substance, different phrasing.
      ["treats an internal move from her current role as the normal path", (o) => /(sideways|engineering|business analysis|customer success|internal rotation|co-lead|internal.{0,15}(exposure|move))/i.test(replyOf(o))],
      ["gives a concrete first move", (o) => /(prd|informational interview|sample|write)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply mostly restates the one before it", (o) => maxRepeatOverlap(o) < 0.5],
    ],
  },
  {
    id: "04-cloud-devops-with-some-scripting",
    title: "Wants into cloud/DevOps, already has a little Python, needs a platform and a timeline",
    claim: "Draws on S6 (cloud/DevOps roadmap), and treats the existing scripting knowledge as a real head start rather than starting the roadmap from zero.",
    turns: [
      "I want to get into cloud computing or DevOps",
      "I already know a bit of Python scripting",
      "which cloud platform should I actually start with",
      "do I need a certification before applying anywhere",
      "what's realistic timeline-wise",
    ],
    checks: [
      ["classified stage B", (o) => stagesInOrder(o).includes("B")],
      ["draws on S6 (cloud/DevOps roadmap)", (o) => facetsDrawn(o).has("S6")],
      ["recommends AWS specifically as the widest-adoption starting platform", (o) => /\bAWS\b/.test(replyOf(o))],
      ["treats existing scripting as a head start, not ignored", (o) => /(scripting|python|already)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
  // NEW this run
  {
    id: "05-phone-only-dev-then-reopens-for-cybersecurity",
    title: "Wants software dev, only has a phone (no laptop), then explicitly reopens the choice against cybersecurity before settling",
    claim: "Probes whether the stage-B roadmaps (S1's GitHub/full-stack projects, S4's Security+/TryHackMe) quietly assume laptop access she's just said she doesn't have, and whether explicitly comparing dev vs cybersecurity mid-conversation actually reopens stage A the way the storyboard says it should, rather than staying parked in stage B because a field was named earlier.",
    turns: [
      "so I think I want to get into software development",
      "quick complication tho, I don't have a laptop, just my phone",
      "is cybersecurity easier to break into without a laptop or is that not really a thing",
      "honestly what's even realistic for me with just a phone",
      "ok let's actually go with cybersecurity then, what do I do first",
    ],
    checks: [
      ["classified stage B once dev is named on turn 1", (o) => stagesInOrder(o)[0] === "B"],
      ["reopens stage A on the explicit dev-vs-cybersecurity comparison (turn 3)", (o) => stagesInOrder(o)[2] === "A"],
      ["back to stage B once cybersecurity is settled on (turn 5)", (o) => stagesInOrder(o)[4] === "B"],
      ["acknowledges the phone-only constraint rather than ignoring it", (o) => /(phone|laptop|computer|device)/i.test(replyOf(o))],
      ["doesn't just tell her to get a laptop with no other path forward", (o) => !/^you (need|should get|will need) a laptop\.?$/im.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
];
