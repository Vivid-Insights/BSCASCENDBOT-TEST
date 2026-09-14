// ============================================================================
// Area 5 · Wellbeing & Balance — the coverage map
//
// Designed 2026-09-14. Otema's 5 real answers (Q30, 31, 32, 33, 35) split on
// whether she's already settled into a job or still in the run-up to one —
// learning a new skill, or working through a career transition (Q32, 35) —
// versus already working and negotiating how the job fits around the rest of
// her life: boundaries, family, flexible arrangements (Q30, 31, 33).
//
// Q34 ("staying motivated when progress feels slow") stays tagged under
// Confidence's mindset material by explicit decision — it's about sustaining
// effort toward a goal, not about load or balance, so it was not moved here.
//
// Two standalone gaps (G1, G2) were added straight out of the storyboard's
// dead-end discovery pass, before this area was wired in anywhere: an
// already-present crisis in a current job, and a hostile/unsafe work
// environment as the actual source of strain. Both were judged severe enough
// to close before shipping rather than defer — meeting either with generic
// boundary-setting advice would be worse than saying nothing.
// ============================================================================

export default {
  n: 5,
  name: "Wellbeing & Balance",

  topic: "wellbeing",

  realOrder: ["S1", "S2", "S3", "S4", "S5"],

  stageSummary: {
    A: "not settled yet — learning burnout or transition stress",
    B: "settled and balancing an existing job with everything else",
  },

  fallbackQuestion: "What's weighing on you most with balancing everything right now?",

  supersedes: [],

  // S3a, S4, and S2 are cross-listed into both stages below. S3a answers the
  // case where a stage-A learning question (S3) turns out to be happening
  // alongside an existing job, which the rule below reclassifies to B — so
  // S3a needs to be reachable from B too, or the classifier's own
  // stage-boundary rule silently strands it (same pattern as Salary's G5).
  // S4 and S2 went the other way: both found live 2026-09-14 to be generic,
  // job-status-agnostic questions in Otema's own phrasing — "is it possible
  // to have flexible working arrangements in most tech roles" (S4) and "how
  // do women in tech manage family responsibilities alongside their career
  // growth" (S2) — neither names or presupposes a current job at all, and the
  // classifier split on both across separate runs (area-tester, 2026-09-14)
  // despite an explicit tie-break rule added to stage A's own describes text
  // for S4. Rather than reword the instruction a third time — the same
  // soft-classification-boundary conclusion reached elsewhere (Career Paths'
  // comparative-field fix) — both are made reachable from either stage.
  stages: {
    A: {
      label: "Not settled yet",
      describes:
        "Learning or upskilling, or in the middle of a career transition — no stable job on the other side of it yet. Giveaway words: \"learning\", \"studying\", \"job hunting\", \"between jobs\", \"transition\", \"still looking\". The moment a message names an actual current job's hours, manager, or team, it's stage B, even if she got there partway through a transition.",
      facets: ["S2", "S3", "S3a", "S4", "S5", "S5a", "S5b"],
    },
    B: {
      label: "Settled and balancing",
      describes:
        "An actual current job exists — the live question is how to make it fit around everything else: boundaries and hours, family responsibilities, flexible or remote arrangements, or an environment that's already become unsafe or unsustainable. Giveaway words: \"my job\", \"my manager\", \"my team\", \"my hours\", naming a current role. Also covers learning or upskilling stacked ON TOP OF an existing job and family load — that's still B, not A, once a current job is in the picture at all.",
      facets: ["S1", "S1a", "S2", "S2a", "S3a", "S4", "G1", "G2"],
    },
  },
};
