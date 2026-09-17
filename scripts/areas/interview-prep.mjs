// ============================================================================
// Area 8 · Interview Preparation — the coverage map
//
// Designed 2026-09-17. The thinnest area in the project: Otema has exactly
// one real answer here (Q43, "How do I prepare for a technical interview?"),
// split off from Job Search & Applications months ago (ISSUE-011 in the
// storyboard's issue log, resolved 15 Aug by David) — Job Search took the
// other four questions that used to share the same legacy topic tag. Every
// other facet here is drafted, mostly sourced from bsc-knowledge.ts's
// interview_prep block (coding-assessment cadence, system design resources,
// STAR behavioural stories, company research, follow-up etiquette) rather
// than invented from nothing.
//
// Two stages: A ("getting ready") covers everything before the interview
// happens; B ("in the room, and after") covers the interview itself and
// what follows. Stage B has ZERO real facets of Otema's — worth flagging
// for her review priority once these are drafted, since her voice cannot
// appear there on merit or by chance the way it can in Stage A.
//
// Three standalone gaps (G8, G9, G10) were added straight out of the
// storyboard's dead-end discovery pass, before this area was wired in
// anywhere: the near-universal "tell me about yourself" pitch, take-home/
// timed online assessments (a format S1's own premise doesn't fit at all,
// since there's no one to narrate your thinking to), and prep for non-
// software-engineering tracks (every existing facet silently assumed SWE).
// G4 was broadened rather than split — the first draft was remote-only;
// in-person logistics had nowhere to go, so G4 now covers both.
//
// G6 and G6a are cross-listed into both stages. Found live: a bare "I'm
// really nervous about it" opening line classified as stage A on some runs
// and stage B on others — genuinely ambiguous, since anticipatory nerves
// while still getting ready and in-the-moment nerves are the same feeling
// described at two different times. Rather than fight it with more prompt
// wording (the same soft-classification-boundary conclusion reached
// elsewhere — Career Paths' comparative-field fix, Wellbeing's S2/S4, Job
// Search's G2/G3), both are made reachable from either stage so the
// recognition content fires regardless of which stage wins.
// ============================================================================

export default {
  n: 8,
  name: "Interview Preparation",

  topic: "interview_prep",

  realQuestions: [
    "How do I prepare for a technical interview?",
  ],
  realOrder: ["S1"],

  stageSummary: {
    A: "getting ready — what to study, practice, and prepare beforehand",
    B: "in the room, and after — the interview itself and what follows",
  },

  fallbackQuestion: "Where are you at with this interview right now?",

  supersedes: [],

  stages: {
    A: {
      label: "Getting ready",
      describes:
        "What to study, practice, and prepare before the interview happens: general technical prep, system design, behavioural/STAR stories, a self-introduction pitch, company research and questions to ask, a take-home or timed assessment, non-software-engineering track prep, and the practical setup (remote or in-person). Giveaway words: \"prepare\", \"practice\", \"study\", \"before\", \"what should I expect\". A question about preparation is A even the night before the interview.",
      facets: ["S1", "G1", "G2", "G2a", "G3", "G4", "G4a", "G6", "G6a", "G8", "G9", "G10"],
    },
    B: {
      label: "In the room, and after",
      describes:
        "Handling the interview itself, and what happens once it's over: freezing or not knowing an answer, interview-day nerves specifically, and following up afterward. Giveaway words: \"during\", \"in the moment\", \"nervous\", \"blanked\", \"after the interview\", \"heard back\". A question about handling the room itself, or what happens next, is B even if the interview hasn't started yet — anticipating a specific in-the-moment failure is still about the room, not the studying.",
      facets: ["G5", "G6", "G6a", "G7", "G7a"],
    },
  },
};
