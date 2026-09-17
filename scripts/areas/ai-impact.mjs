// ============================================================================
// Area 10 · AI & the Future of Tech Work — the coverage map
//
// Designed 2026-09-17. The tenth and last area, closing out the flat-topic
// model entirely. Otema's 3 real answers (Q51-53 range) cover positioning
// yourself to work alongside AI rather than be replaced by it, whether
// learning tech is still worth it given AI, and which field is safest to
// study — all against the ai_impact knowledge topic, which no other area
// shares, so no exact-question matching is needed the way Job Search and
// Interview Preparation needed it for their shared legacy tag.
//
// Two stages: A ("whether AI changes the plan") is the existential register —
// is this still worth doing, which fields and roles are exposed, what's
// actually durable to build toward. B ("working with AI, in practice") is the
// practical register — tool literacy, hiring, ethics, and breaking into
// AI/ML specifically. Most of stage B's drafted content is sourced from
// bsc-knowledge.ts's ai_impact block (durable vs. exposed roles, AI tools as
// a baseline skill not a shortcut, AI's effect on hiring, the ethics of
// building AI systems) rather than invented from nothing.
//
// Three scope boundaries were drawn deliberately narrow to avoid duplicating
// sibling areas: G6 (breaking into AI/ML without a maths background) answers
// only the field-direction question, not a full study plan (Getting
// Started's job); G7 (what an AI-directed portfolio should demonstrate)
// answers only what to show, not CV mechanics (Job Search's job); G4 (AI
// showing up in hiring) answers only what's changing in general, not
// interview technique (Interview Preparation's job).
//
// The storyboard's own dead-end discovery pass (run before this area was
// wired in anywhere) found 4 dead ends and 7 missing standalone topics; the
// 5 highest-severity were closed straight into this first draft: S3 gained
// an explicit exit for "I don't know what field yet" (mirrors Salary's own
// S1 precedent); S2b closes personal-capability comparison to AI itself
// ("I'll never be as good as it, so why try") — likely the single most
// common reaction behind one of only three real answers here; G8 closes
// bias in AI hiring/screening tools against non-traditional candidates,
// directly on-mission for BSC's actual audience; G9 closes comparing
// herself to AI-fluent peers, an AI-specific echo of the comparison pattern
// Confidence's own G7 already names; G10 closes the strategic fork between
// specializing in AI/ML versus treating AI fluency as a baseline skill,
// which neither S3 nor G6 assumes is still open. Six lower-priority findings
// (boredom after AI absorbs the interesting work, pace-of-change dread,
// AI-code quality/accountability, an evasive manager, competitive anxiety
// against one colleague, AI-use disclosure norms) were deferred past this
// first build, same treatment other areas have given lower-severity findings.
// ============================================================================

export default {
  n: 10,
  name: "AI & the Future of Tech Work",

  topic: "ai_impact",

  realOrder: ["S1", "S2", "S3"],

  stageSummary: {
    A: "whether AI changes the plan — is this still worth it, which fields and roles are exposed",
    B: "working with AI in practice — tools, hiring, ethics, and breaking into AI/ML",
  },

  fallbackQuestion: "What's actually on your mind about AI and where this is all heading for you?",

  supersedes: [],

  stages: {
    A: {
      label: "Whether AI changes the plan",
      describes:
        "Whether tech is still worth pursuing at all, which fields or roles are safer or more exposed, positioning yourself to work alongside AI, and what durable skills are actually worth building. Giveaway words: \"worth it\", \"replace\", \"safe\", \"future-proof\", \"my job\", \"my role\". A question about whether to keep going, or which direction is safer, is A even if it names a specific field or role. If she says she doesn't actually know what field to choose yet, don't generate fresh field-exploration coaching (shadowing, trying small projects in a few areas, mapping what she enjoys) — that content belongs to Career Paths & Roadmaps, not here. Say plainly that the field question comes first, and ask if she'd rather work that out before coming back to how AI fits into it.",
      facets: ["S1", "S2", "S2a", "S2b", "S3", "G1", "G1a", "G2", "G10"],
    },
    B: {
      label: "Working with AI, in practice",
      describes:
        "Using AI tools like Copilot or ChatGPT day to day, how AI is showing up in hiring and screening, the ethical responsibilities of building AI systems, and breaking into AI/ML specifically. Giveaway words: \"ChatGPT\", \"Copilot\", \"use AI\", \"hiring\", \"ethics\", \"AI/ML\", \"maths\". A question about how to actually do something with AI today is B even if it's motivated by the same underlying worry that opened the conversation.",
      facets: ["G3", "G4", "G5", "G5a", "G6", "G6a", "G7", "G8", "G9"],
    },
  },
};
