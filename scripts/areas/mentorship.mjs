// ============================================================================
// Area 4 · Mentorship — the coverage map
//
// Built fast under a deadline (2026-08-23). Otema's 6 real answers (Q24-29)
// split on whether she already has a mentor: finding and approaching one
// (Q24-25) versus making an existing relationship work — sessions, the
// mentor/sponsor distinction, maintaining it long-term, using the BSC
// programme's structure (Q26-29).
// ============================================================================

export default {
  n: 4,
  name: "Mentorship",

  topic: "mentorship",

  realOrder: ["S1", "S2", "S3", "S4", "S5", "S6"],

  stageSummary: {
    A: "finding and approaching a mentor",
    B: "making an existing mentorship work",
  },

  fallbackQuestion: "Where are you at with mentorship right now?",

  supersedes: [],

  // Found by area-tester 2026-09-14: asked "is it weird to just message
  // someone on LinkedIn", the model said no, cold messages can work — the
  // opposite of S2's actual answer ("rarely works well — follow their posts
  // and engage genuinely first, or ask for an introduction"). A prompt
  // instruction was tried first and didn't hold; this is the code-level
  // backstop, checked in coach-local.mjs's guard chain.
  correctionFacets: {
    // Broadened after the first version missed a paraphrase live: "A cold
    // LinkedIn message can work, but it usually fails if it's generic" —
    // "cold" and "messag[e/ing]" were not adjacent ("cold LinkedIn message"),
    // so the adjacency-based version didn't match. The lookahead branch below
    // matches on the three words appearing anywhere in the same sentence
    // instead of a fixed shape. It excludes a sentence that ALSO hedges with
    // a negation ("but it usually fails", "rarely works") in the same
    // breath — that reply already carries S2's actual caveat, just in its
    // own words, and is not the unqualified endorsement this guard exists
    // to catch ("not weird", "that's fine", no caveat at all).
    S2: /\b(?:not weird|nothing weird|that(?:'s| is) (?:totally |completely )?fine|it(?:'s| is) (?:totally |completely )?fine|go ahead and (?:cold[- ]?)?messag\w*)\b|(?!.*\b(?:rarely|never|doesn'?t|does not|seldom|hardly|won'?t|wouldn'?t|fails?|failed|usually fails)\b)(?=.*\bcold\b)(?=.*\bmessag)(?=.*\bworks?\b)/i,
  },

  stages: {
    A: {
      label: "Finding a mentor",
      describes:
        "No mentor yet — the live question is where to find one, what to look for, or how to approach them. Giveaway words: \"find a mentor\", \"how do I approach\", \"don't have a mentor\".",
      facets: ["S1", "S1a", "S2"],
    },
    B: {
      label: "Making it work",
      describes:
        "Already has a mentor, or is inside the BSC programme — the live question is how to use the relationship well: sessions, the mentor/sponsor distinction, maintaining it long-term, or structuring goals with a mentor's help. Giveaway words: \"my mentor\", \"our sessions\", \"sponsor\", naming an existing relationship.",
      facets: ["S3", "S3a", "S4", "S4a", "S5", "S6"],
    },
  },
};
