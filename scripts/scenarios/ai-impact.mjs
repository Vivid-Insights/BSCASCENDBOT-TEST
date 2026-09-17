// ============================================================================
// Area 10 · AI & the Future of Tech Work — test conversations
//
// Designed 2026-09-17, alongside the area's first build. Every conversation
// runs FOUR or FIVE user turns. Deliberately weighted toward the five gaps
// the storyboard's own dead-end pass closed this pass: S3's "don't know what
// field yet" exit, S2b (personal-capability comparison to AI), G8 (bias in
// AI hiring/screening), G9 (comparing herself to AI-fluent peers), and G10
// (specialize in AI/ML vs. baseline skill).
// ============================================================================

import { replyOf, everyReplyAsks, noRepeatedOpeners, maxRepeatOverlap } from "../checks.mjs";

const stagesInOrder = (o) => [...o.matchAll(/\[stage ([A-Z]+)/g)].map((m) => m[1]);
const facetsDrawn = (o) => new Set(
  [...o.matchAll(/\[drew on ([^—\]]+)—/g)].flatMap((m) => m[1].split(",").map((s) => s.trim())),
);

export default [
  {
    id: "01-worth-it-then-which-field-then-undecided",
    title: "Whether tech is even worth it anymore, then which field, then admitting she hasn't decided",
    claim: "Draws on S2, then S2b once she compares her own ability to AI directly, then S3 once the question turns to which field — and either leaves to Career Paths or stays gracefully once she admits she doesn't actually know what field yet, the same ambiguous-leave shape other areas' final scenarios have hit.",
    turns: [
      "is learning tech even still worth it with AI replacing jobs",
      "I feel like I could never match AI's skill level, so it feels pointless to keep learning",
      "okay well which field should I go into that's safest from AI then",
      "honestly I don't know what field yet, that's what I'm actually trying to figure out",
    ],
    checks: [
      ["reaches stage A", (o) => stagesInOrder(o).includes("A")],
      ["draws on S2 and S2b", (o) => { const f = facetsDrawn(o); return f.has("S2") && f.has("S2b"); }],
      ["either leaves to Career Paths, or stays but points her toward figuring out direction first", (o) => /classified as leaving[^\n]*(?:area 3|career paths)/i.test(o) || /(figur(?:e|ing) out|which field|what you're drawn to|direction first|before (?:the )?field|field question|comes first|starting point|before you (?:pick|choose)|what lights you up)/i.test(replyOf(o))],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
  {
    id: "02-ai-in-hiring-and-screening-bias",
    title: "Worried an AI screening tool will filter her out or be biased against her",
    claim: "Draws on G4 for the general hiring-process question, then G8 once the worry turns specifically to bias against her background — gives a concrete mitigation (a human seeing her work directly) rather than just reassurance.",
    turns: [
      "how is AI actually changing the hiring process for tech jobs",
      "is my CV going to just get filtered out by some AI tool before a human even sees it",
      "I'm worried it'll be biased against me because of my background, is that a real risk",
      "what can I actually do about that",
    ],
    checks: [
      ["reaches stage B", (o) => stagesInOrder(o).includes("B")],
      ["draws on G4 and G8", (o) => { const f = facetsDrawn(o); return f.has("G4") && f.has("G8"); }],
      ["names a concrete mitigation, not just reassurance", (o) => /(referral|direct outreach|portfolio|human|real person|network)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
  {
    id: "03-behind-on-ai-tools-versus-peers",
    title: "Feels behind everyone else at using AI tools, then asks how to actually use them well",
    claim: "Draws on G9 for the peer-comparison worry, then G3 once the question turns practical — treats fluency as learnable rather than a fixed gap in both replies.",
    turns: [
      "everyone around me seems so much faster and more natural with ChatGPT and Copilot than I am",
      "am I just behind, like is this some skill I'm missing that they have",
      "okay so how should I actually be using these tools while I'm still learning to code",
      "where's the line between using it to get unstuck versus leaning on it too much",
    ],
    checks: [
      ["reaches stage B", (o) => stagesInOrder(o).includes("B")],
      ["draws on G9 and G3", (o) => { const f = facetsDrawn(o); return f.has("G9") && f.has("G3"); }],
      ["frames fluency as hours logged, not a fixed gift", (o) => /(hours|practice|logged|got there by|not (?:a )?(?:natural )?gift|not born)/i.test(replyOf(o))],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
  {
    id: "04-specialize-in-ai-ml-or-not-then-zero-background",
    title: "Weighing whether to specialize in AI/ML, then admitting she's never coded at all",
    claim: "Draws on G10 for the specialize-vs-baseline fork, then G6 once she leans toward AI/ML specifically, then G6a once it turns out she has no technical background at all yet — redirects to fundamentals rather than answering the maths question on its own terms.",
    turns: [
      "should I specialize in AI and ML specifically, or is using AI tools just something everyone in tech needs now",
      "say I do want to go deeper into AI ML, can I actually break in without a strong maths background",
      "I've genuinely never coded before or done any real maths beyond arithmetic",
      "so where do I even start then",
    ],
    checks: [
      ["draws on G10, G6, and G6a", (o) => { const f = facetsDrawn(o); return f.has("G10") && f.has("G6") && f.has("G6a"); }],
      ["redirects to starting with code, not the maths question", (o) => /(start(?:ing)? with code|learn(?:ing)? to code|coding first|before the maths|start(?:ing)? coding|coding win|tiny.{0,25}(?:win|script)|hello world|python)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
  {
    id: "05-asked-to-ship-a-loan-model-she-thinks-is-unsafe", // NEW this run
    title: "Assigned to an AI feature at work, uneasy about it, hasn't told anyone, manager wants it shipped",
    claim: "Probes G5 (ethics of building AI systems) into its own live-disclosure branch G5a — a junior woman quietly uneasy about a system she's building, not yet framed as an abstract ethics question and not yet raised with anyone, who is also weighing the career risk of speaking up early in her career. Tests whether the coach draws out the concrete harm and gives her something usable to actually say, rather than staying at the level of principle, and whether it respects NEVER_OFFER_TO_ACT when she asks what the coach would say 'to him'.",
    turns: [
      "so theres this ai feature ive been put on at work and something about it doesnt sit right with me but i cant tell if im overreacting",
      "its a model that scores peoples loan applications and im pretty sure it wasnt tested properly on people like us, our kind of data",
      "my manager just wants it shipped before quarter end, he hasnt actually asked what i think about any of this",
      "i havent told anyone yet honestly, i dont want to look difficult this early in my career",
      "okay so what would you actually say to him then",
    ],
    checks: [
      ["reaches stage B", (o) => stagesInOrder(o).includes("B")],
      ["draws on G5 and G5a", (o) => { const f = facetsDrawn(o); return f.has("G5") && f.has("G5a"); }],
      ["names the concrete harm (bias/testing gap), not just abstract ethics", (o) => /(bias|tested|test(?:ing)?|data|underrepresented|fair(?:ness)?|harm)/i.test(replyOf(o))],
      ["gives her words to use rather than offering to act itself", (o) => !/(i('ll| will)|let me) (email|call|message|talk to|reach out to|contact|follow up with)/i.test(replyOf(o))],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
    ],
  },
];
