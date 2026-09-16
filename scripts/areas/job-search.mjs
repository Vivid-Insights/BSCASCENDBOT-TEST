// ============================================================================
// Area 7 · Job Search & Applications — the coverage map
//
// Designed 2026-09-16. Otema's 4 real answers (Q41, 42, 44, 45) split on
// whether the live question is about a concrete asset she puts in front of
// people — the CV, the LinkedIn profile — versus the broader approach to the
// search itself — general strategy, or the specific circumstance of having
// no industry experience yet.
//
// Q43 ("How do I prepare for a technical interview?") shares the same pre-v4
// topic tag (cv_job_search) as these four but is excluded by explicit,
// already-resolved decision (ISSUE-011 in the storyboard's issue log,
// resolved 15 Aug by David): it seeds a separate future area, Interview
// Preparation. Matched by exact question text below, the same mechanism
// Confidence uses, so this area never silently pulls it in.
//
// Three standalone gaps (G1, G2, G3) were added straight out of the
// storyboard's dead-end discovery pass, before this area was wired in
// anywhere: discrimination or bias during the search, re-entering tech after
// a career break, and searching confidentially while still employed. G1 in
// particular was judged severe enough to close before shipping rather than
// defer — meeting it with nothing would directly contradict BSC's own
// stated intersectional-advocacy stance.
// ============================================================================

export default {
  n: 7,
  name: "Job Search & Applications",

  topic: "cv_job_search",

  realQuestions: [
    "How do I write a CV that stands out for tech roles?",
    "What is the most effective job search strategy in tech?",
    "How do I get a tech job without prior industry experience?",
    "How should I use LinkedIn to support my job search in tech?",
  ],
  realOrder: ["S1", "S2", "S3", "S4"],

  stageSummary: {
    A: "your materials — the CV and the LinkedIn profile",
    B: "your approach — strategy, and the no-experience circumstance",
  },

  fallbackQuestion: "Where are you at with the job search right now?",

  supersedes: [],

  // G2 and G3 are cross-listed into both stages below. Found live
  // 2026-09-16: both facets' own content already spans both — re-entering
  // after a career break needs explaining the gap on the CV/LinkedIn
  // specifically (stage A) as much as it needs a search strategy (stage B);
  // searching confidentially means specific LinkedIn settings ("open to
  // work" visibility, stage A) as much as a broader outreach strategy
  // (stage B) — and the classifier split on direct follow-ups for both
  // across live runs despite explicit tie-break text, the same
  // soft-classification-boundary conclusion reached elsewhere (Career
  // Paths' comparative-field fix, Wellbeing's S2/S4). Rather than fight it
  // with more prompt wording, both are made reachable from either stage.
  stages: {
    A: {
      label: "Your materials",
      describes:
        "The CV or the LinkedIn profile — the concrete assets she puts in front of people. Giveaway words: \"CV\", \"resume\", \"LinkedIn\", \"profile\". A CV or LinkedIn question is A even mid-search, even if she's also asked strategy questions in the same conversation. Building a PROJECT or portfolio to compensate for no industry experience is NOT this stage, even though it's also something concrete — it's a strategy for getting in the door (stage B, S3/S3a/S3b), not a finished asset the way a CV or LinkedIn profile already is.",
      facets: ["S1", "S4", "S4a", "G2", "G3"],
    },
    B: {
      label: "Your approach",
      describes:
        "The broader question of how she's actually going about the search — general strategy (networking, visibility, application volume), or the specific circumstance of having no industry experience yet, including building a project or portfolio from scratch to compensate for it. Giveaway words: \"strategy\", \"applying\", \"no experience\", \"no response\", \"how many\", \"what should I build\". A question about volume, access, discretion, or a barrier to searching at all is B even before a CV or LinkedIn profile exists. This area STOPS at getting an interview scheduled — it does not cover how to perform in the interview itself (answer framing, mock-interview technique, what to expect in the format): that is Interview Preparation, a separate area not built yet. If a question is squarely about interview-answering technique, say briefly that this area covers getting her there, not the interview itself, rather than inventing interview-coaching content with no basis in anything you were given.",
      facets: ["S2", "S2a", "S2b", "S3", "S3a", "S3b", "G1", "G2", "G3"],
    },
  },
};
