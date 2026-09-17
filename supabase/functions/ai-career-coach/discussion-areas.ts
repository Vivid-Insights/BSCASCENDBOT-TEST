// @ts-nocheck
// ============================================================================
// v4 area/stage model — coverage maps + facet selection, ported from the local
// test harness (scripts/coach-local.mjs, scripts/areas/*.mjs) into production.
//
// THE MODEL (unchanged from the harness)
// There is no deterministic path through an area. For every message inside an
// active area, one classification call decides which stage it belongs to, or
// whether the user is leaving. The stage decides which facets (Otema's real
// answers, plus Otema-approved AI-drafted gap-fillers) get shown to the model
// as grounding; the model writes a fresh reply from that material.
//
// So the facet graph is a COVERAGE MAP, not a router: it records what material
// each stage can draw on, never which answer to serve.
//
// SCOPE OF THIS PORT
// Salary & Negotiation and Getting Started only — the two areas with the
// fullest, most-verified test coverage. The other four designed areas
// (Confidence, Career Paths, Further Education, Mentorship) keep running
// through the older flat-topic path until they get the same treatment.
//
// Salary's live web-search behaviour (Phase 4 in the storyboard) is NOT
// ported here — that facet still answers ungrounded, guarded by
// NO_INVENTED_FIGURES, exactly as the deployed coach already does today.
// ============================================================================

import { BOTEMA_EXAMPLES } from "./botema-examples.ts";
import { approvedGeneratedFacets } from "./botema-generated-examples.ts";

// ── Area configs ─────────────────────────────────────────────────────────

export interface StageConfig {
  label: string;
  describes: string;
  facets: string[];
}

export interface AreaConfig {
  n: number;
  name: string;
  topic: string;
  realOrder: string[];
  stageSummary: Record<string, string>;
  fallbackQuestion: string;
  wrapUp: string | null;
  supersedes: Array<{ after: string; retire: string[] }>;
  stages: Record<string, StageConfig>;
  // Confidence's real answers carry pre-v4 topic tags shared with an
  // unrelated Wellbeing answer (see scripts/areas/confidence.mjs), so they're
  // matched by exact question text instead of by topic. Optional — every
  // other area matches by `topic` alone.
  realQuestions?: string[];
  // Which BOTEMA_EXAMPLES array to read real answers from. Everything routed
  // through updateCareerTopic lives under adviseOnCareerTopic; Confidence is
  // routed directly to its own function and its real answers live under
  // addressMindsetChallenge instead. Defaults to adviseOnCareerTopic.
  realSource?: "adviseOnCareerTopic" | "addressMindsetChallenge";
  // Facets whose whole point is CORRECTING a specific assumption, where a
  // prompt instruction alone (see the "corrects a specific assumption" rule
  // in discussion-coach.ts) was tried and still didn't hold live — found on
  // Mentorship's S2 by area-tester: asked whether cold-messaging on LinkedIn
  // is weird, the reply said no, when S2's whole answer is that it rarely
  // works. Keyed by facet ID; the pattern matches an opening sentence that
  // endorses the exact thing the facet corrects, and that sentence gets
  // dropped rather than shown, same mechanism as stripUnearnedValidation.
  correctionFacets?: Record<string, RegExp>;
}

// Ported verbatim from scripts/areas/salary.mjs, minus `marketData` — live web
// search is a later phase; this facet answers ungrounded for now, same as the
// deployed coach already does.
export const SALARY_AREA: AreaConfig = {
  n: 9,
  name: "Salary & Negotiation",
  realOrder: ["S1", "S2", "S3", "S4", "S5"],
  topic: "salary",
  wrapUp: null,
  stageSummary: {
    A: "what the role is worth",
    B: "the offer on the table",
    C: "the conversation with your employer",
  },
  fallbackQuestion: "What is the situation you are weighing up right now?",
  supersedes: [
    { after: "G8", retire: ["S4", "S4a", "S4b", "S4c", "G4", "G4a", "G4b", "G4c", "G4d"] },
  ],
  stages: {
    A: {
      label: "Before there's an offer",
      describes:
        "They are pricing themselves — working out what a role pays, or what they're worth coming from another field. No live negotiation, no employer at the table yet. NOT: discovering a pay gap with a colleague at her CURRENT job, or a manager who has said no — that is stage C, even if she has not yet had the conversation about it. Finding out a colleague earns more is a fact about her existing job, not a research question about the market.",
      facets: ["S1", "G2", "G10", "G10a", "G5"],
    },
    B: {
      label: "An offer is on the table",
      describes:
        "They are negotiating with a PROSPECTIVE employer. A job offer exists, or one is being discussed — they do not work there yet. Anything about an offer, an equity package, a signing bonus, or what to say during hiring.",
      facets: ["S2", "S2a", "S3", "S3a", "S3b", "S5", "S5a", "G3", "G3a", "G6", "G7", "G7a", "G9", "G9a", "G5"],
    },
    C: {
      label: "Already in the job",
      describes:
        "They ALREADY WORK for the employer in question, so the money conversation is one they must start themselves. A rise asked for or refused, a manager who said no, a pay gap with a colleague, a counter-offer on resigning. If the words manager, my team, my job, my boss or a raise appear, this is almost always the stage — even if a negotiation is live. " +
        "Saying the money was not the only reason she was leaving is squarely THIS stage, not a departure from it: weighing a counter-offer against why she wanted to go is the decision itself. Do not read it as a confidence or wellbeing question.",
      facets: ["S4", "S4a", "S4b", "S4c", "G1", "G1a", "G1b", "G4", "G4a", "G4b", "G4c", "G4d", "G8", "G9", "G9a"],
    },
  },
};

// Ported verbatim from scripts/areas/getting-started.mjs.
export const GETTING_STARTED_AREA: AreaConfig = {
  n: 1,
  name: "Getting Started",
  realOrder: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
  topic: "getting_started",
  wrapUp: "E",
  stageSummary: {
    A: "which direction to go in",
    B: "how your background carries over",
    C: "how you're going to learn",
    D: "your first practical steps",
    E: "pulling together what you're going to do",
  },
  fallbackQuestion: "What feels like the right next step for you?",
  supersedes: [],
  stages: {
    A: {
      label: "Deciding whether, or which direction",
      describes:
        "NO real prior work experience in another field, and no direction settled: unsure tech is right for them, torn between fields, or curious what the work is like day-to-day. If they name a previous job or profession, that's stage B instead, even if they're also field-unsure — prior career is the distinguishing fact. Giveaway words: \"not sure\", \"which field\", \"torn between\", \"where do I begin\" — with no past career mentioned.",
      facets: ["S1", "S1a", "S7", "S7a", "S8", "S8a", "G3", "G3a", "G5"],
    },
    B: {
      label: "Translating a previous career",
      describes:
        "Real prior work experience in a DIFFERENT field, asking how it applies or whether it counts — a career change, not a first career decision. Giveaway words: \"transferable skills\", \"switching careers\", \"start at the bottom\". Field-uncertainty can co-occur and still counts as B, not A. But this tie-break is A-vs-B ONLY: once THIS message is clearly about method (C) or concrete execution (D), classify it there instead, even with a prior career mentioned earlier — a prior career is a fact about her, not a stage she's stuck in.",
      facets: ["S5", "S5a", "G4"],
    },
    C: {
      label: "Choosing how to learn",
      describes:
        "Field settled or not the live question — open decision is METHOD: self-teach vs. bootcamp vs. degree, or evaluating a programme, with no concrete detail about it asked yet. Applies regardless of a prior career (B) — a method question is C. Giveaway words: \"bootcamp\", \"degree\", \"self-taught\", \"programme\", \"course\". But this tie-break is C-vs-D ONLY: the MOMENT a method is named (in this message or an earlier one) AND the live question asks a concrete detail about it — how long it takes, what it costs, what to actually do — that's stage D instead, even within the same message that names the method. \"A self-paced bootcamp sounds right, how long would that realistically take\" is D, not C: a method was just named and the live question is D's own giveaway (\"how long\", \"realistically\").",
      facets: ["S2", "S2a", "S2b", "G1", "G1a"],
    },
    D: {
      label: "Actively executing a chosen plan",
      describes:
        "Method decided — wants concrete specifics: a language, free resources, a realistic timeline, savings needed. A THING to use, not a decision. Applies regardless of a prior career (B) — \"how long will this take\" is D, not B. This is also the read the MOMENT a method named earlier in C is followed by a concrete-detail question — the method doesn't need to be re-litigated, only the detail answered. Giveaway words: \"which language\", \"resources\", \"how long\", \"realistically\", \"should I save\" — especially right after a method has just been named.",
      facets: ["S3", "S4", "S4a", "S4b", "S6", "S6a", "G2", "G6"],
    },
    E: {
      label: "Wrapping up",
      describes:
        "The advice has landed and she is settling rather than asking. She agrees with it, thanks you for it, says she will try it, says it makes sense, or answers a closing check with a yes. Giveaway words: \"that makes sense\", \"okay, I'll try that\", \"thank you\", \"that helps\", \"yeah, I think so\", \"no, that's it\". Do NOT choose this because a message is short or vague — only because she is agreeing or closing. If she raises anything new, however small, or asks another question, she is back in A, B, C or D and this is not the stage. The reply itself MUST name at least one concrete element of the plan actually settled on in this conversation — the method, the language, the timeline, the resource — not just an approving generality like \"you've got something to work with.\" If nothing concrete was ever settled, say so honestly rather than inventing a plan to reflect back.",
      facets: [
        "S1", "S1a", "S7", "S7a", "S8", "S8a", "G3", "G3a", "G5",
        "S5", "S5a", "G4",
        "S2", "S2a", "S2b", "G1", "G1a",
        "S3", "S4", "S4a", "S4b", "S6", "S6a", "G2", "G6",
      ],
    },
  },
};

// Ported verbatim from scripts/areas/further-education.mjs.
export const FURTHER_EDUCATION_AREA: AreaConfig = {
  n: 2,
  name: "Further Education",
  realOrder: ["S1", "S2", "S3", "S4", "S5", "S6", "S7"],
  topic: "further_education",
  wrapUp: null,
  stageSummary: {
    A: "whether further study is the right move at all",
    B: "choosing a specific programme",
    C: "funding and balancing it once you're pursuing it",
  },
  fallbackQuestion: "What's actually pulling you toward further study right now?",
  supersedes: [],
  stages: {
    A: {
      label: "Deciding whether it's worth it",
      describes:
        "A certification is ACTIVELY being weighed as an alternative to a master's SOMEWHERE in this conversation, or the message questions whether further study is worth it at all in the abstract — not just whether a master's specifically is a good idea. Cost, speed-to-hire, or timing raised AS PART OF a certification-vs-master's comparison stays here (\"money is a constraint\" while certs are on the table, \"I want something faster\" comparing the two paths). Giveaway words: \"do I need\", \"is it worth it\", \"instead of a master's\", \"certification vs degree\", or any mention of a certification at all this conversation. If a certification has never come up at all, this is NOT the default — go to B or C on their own merits instead. In particular, \"should I do a master's before or after work experience\" is a TIMING question about a master's specifically, not a worth-it-at-all question — that is stage B, even on the very first message, even though the word \"timing\" also appears in this stage's own description above.",
      facets: ["S1", "S1a", "S5", "S5a"],
    },
    B: {
      label: "Choosing a programme",
      describes:
        "The live question is specifically about A MASTER'S — which programme, which field benefits most, what to look for, or before/after-experience timing — and no certification is being weighed as an alternative anywhere in this conversation. This is the default for a master's-specific question that never mentioned certifications at all, including the very first message of a conversation that opens directly on a master's timing or programme question.",
      facets: ["S2", "S3", "S4", "S4a"],
    },
    C: {
      label: "Funding and balancing it",
      describes:
        "A specific programme is chosen — the live question is logistics: paying for it, scholarships, or balancing it with a full-time job. If NO certification has been mentioned anywhere in this conversation, a bare mention of money, savings or time (\"I don't have strong savings\", \"I also work full time\") stays in C — it does NOT move to stage A by itself, since there is no certification for it to be weighed against. Only move to stage A when a certification is genuinely still being weighed as an alternative somewhere in this conversation; otherwise, a funding or scheduling question about a master's already under discussion belongs here.",
      facets: ["S6", "S6a", "S6b", "S7", "S7a"],
    },
  },
};

// Ported verbatim from scripts/areas/career-paths.mjs.
export const CAREER_PATHS_AREA: AreaConfig = {
  n: 3,
  name: "Career Paths & Roadmaps",
  realOrder: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
  topic: "career_paths",
  wrapUp: null,
  stageSummary: {
    A: "which specialisation to aim for",
    B: "the concrete roadmap for one you've picked",
  },
  fallbackQuestion: "Which path are you weighing up right now?",
  supersedes: [],
  stages: {
    A: {
      label: "Choosing a specialisation",
      describes:
        "No specific field named yet, or explicitly comparing more than one — software dev vs data vs design vs security vs PM vs cloud. Giveaway words: \"which field\", \"how do I choose\", \"not sure which path\", \"torn between\". The moment a SINGLE field is named as the one she's pursuing, that's stage B instead, even if she's only just decided.",
      facets: ["S8", "S8a", "G1", "G1a"],
    },
    B: {
      label: "The roadmap for a chosen field",
      describes:
        "A specific field is already named earlier in THIS conversation — software development, data/ML, UX/UI, cybersecurity, product management, cloud/DevOps, or a transition into tech project management. Once that field is on the table, EVERY later message about it stays in stage B — background constraints (\"I have no IT background\"), realism checks about a specific job title (\"is X a realistic first job\"), and timeline questions are all still about THAT field's roadmap, not a return to choosing. Only go back to stage A if she explicitly reopens the choice between fields — and that includes asking whether a DIFFERENT named field is easier, more realistic, or better suited to her constraints than the one on the table (\"is X easier to break into than Y\"), not just a flat \"which field should I pick\" restatement. Comparing a second field against the first is exactly the comparison stage A exists for, even mid-conversation.",
      facets: ["S1", "S2", "S3", "S4", "S4a", "S5", "S5a", "S6", "S7"],
    },
  },
};

// Ported verbatim from scripts/areas/mentorship.mjs.
export const MENTORSHIP_AREA: AreaConfig = {
  n: 4,
  name: "Mentorship",
  realOrder: ["S1", "S2", "S3", "S4", "S5", "S6"],
  topic: "mentorship",
  wrapUp: null,
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
  // backstop.
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

// Ported verbatim from scripts/areas/wellbeing.mjs. Two facets are
// deliberately cross-listed into BOTH stages, found necessary live
// (area-tester, 2026-09-14) rather than assumed up front: S3a because a
// stage-A learning question can turn out to be happening alongside an
// existing job, which the describes text below reclassifies to B mid-way
// through; S2 and S4 because their real questions are, in Otema's own
// phrasing, generic and job-status-agnostic ("is it possible to have
// flexible working arrangements", "how do women in tech manage family
// responsibilities") — the classifier split on both across separate live
// runs despite an explicit tie-break rule, the same soft-classification-
// boundary conclusion reached elsewhere (Career Paths' comparative-field
// fix), so both are made reachable from either stage rather than fought with
// more prompt wording. Reached the same way as Salary/Mentorship/Career
// Paths/Further Education: via updateCareerTopic's existing `wellbeing`
// topic — no router split of its own kind was needed for this path, but see
// botema-coach.ts's routing rule 3, narrowed so burnout/workload/boundary
// content reaches this area instead of addressMindsetChallenge.
export const WELLBEING_AREA: AreaConfig = {
  n: 5,
  name: "Wellbeing & Balance",
  topic: "wellbeing",
  realOrder: ["S1", "S2", "S3", "S4", "S5"],
  wrapUp: null,
  stageSummary: {
    A: "not settled yet — learning burnout or transition stress",
    B: "settled and balancing an existing job with everything else",
  },
  fallbackQuestion: "What's weighing on you most with balancing everything right now?",
  supersedes: [],
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

// Ported verbatim from scripts/areas/confidence.mjs. Reached differently from
// every other area in production: it is NOT routed through updateCareerTopic
// (there is no "confidence" entry in TOPIC_CATEGORIES) — the router calls
// discussConfidenceArea directly, the same way it already calls
// addressMindsetChallenge directly for general mindset/burnout content. See
// the routing split in botema-coach.ts's instructions: confidence-shaped
// content (comparing herself to others, not belonging, a stalled action from
// self-doubt) goes here; burnout, workload, motivation and general anxiety
// keep going to addressMindsetChallenge, unchanged.
export const CONFIDENCE_AREA: AreaConfig = {
  n: 6,
  name: "Confidence & Imposter Syndrome",
  topic: "mindset",
  realQuestions: [
    "I constantly feel like I don't belong in tech.",
    "How do I handle moments when I feel less competent than my colleagues?",
    "How do I build confidence speaking up in meetings or presenting my work?",
    "How do I stop holding myself back from applying to roles I feel underqualified for?",
    "How do I actually internalise my achievements instead of brushing them off?",
  ],
  realOrder: ["S1", "S2", "S3", "S4", "S5"],
  realSource: "addressMindsetChallenge",
  wrapUp: "C",
  stageSummary: {
    A: "working through how you feel about yourself",
    B: "a decision stalled by that feeling",
    C: "pulling together what you're going to do",
  },
  fallbackQuestion: "What feels true for you right now?",
  supersedes: [],
  stages: {
    A: {
      label: "Processing the narrative",
      describes:
        "A feeling being worked through, with no action currently stalled on it: comparing yourself to colleagues, not feeling like you belong, discounting your own achievements or other people's praise. Giveaway words: \"I feel like\", \"don't belong\", \"less competent\", \"brush off\", \"imposter\". If the message names a specific thing she is NOT doing because of the feeling — not applying, not speaking up, not putting herself forward — that's stage B instead, even if the feeling itself sounds the same.",
      facets: ["S1", "S1b", "S2", "S5", "S5a", "G1", "G3", "G5", "G6", "G7", "G8", "G9", "G10", "S1a"],
    },
    B: {
      label: "A stalled action",
      describes:
        "Self-doubt is the stated reason something concrete isn't happening: not speaking up in a meeting, not applying to a role, not accepting or asking for an opportunity. The distinguishing fact is a decision sitting behind the feeling, not just the feeling on its own. Giveaway words: \"holding myself back\", \"scared to apply\", \"won't speak up\", \"turned it down\", \"didn't put myself forward\".",
      facets: ["S3", "S3b", "S3c", "S4", "G2", "G4", "S3a"],
    },
    C: {
      label: "Wrapping up",
      describes:
        "The advice has landed and she is settling rather than asking. She agrees with it, thanks you for it, says she will try it, says it makes sense, or answers a closing check with a yes. Giveaway words: \"that makes sense\", \"okay, I'll try that\", \"thank you\", \"that helps\", \"yeah, I think so\", \"no, that's it\". Do NOT choose this because a message is short or vague — only because she is agreeing or closing. If she raises anything new, however small, or asks another question, she is back in A or B and this is not the stage.",
      facets: [
        "S1", "S1b", "S2", "S5", "S5a", "G1", "G3", "G5", "G6", "G7", "G8", "G9", "G10", "S1a",
        "S3", "S3b", "S3c", "S4", "G2", "G4", "S3a",
      ],
    },
  },
};

// Ported verbatim from scripts/areas/job-search.mjs. Q43 ("How do I prepare
// for a technical interview?") shares the same pre-v4 topic tag
// (cv_job_search) as this area's 4 real answers but is excluded — matched by
// exact question text, same mechanism as Confidence — per an already-
// resolved decision (ISSUE-011 in the storyboard's issue log, resolved 15
// Aug by David): it seeds a separate future area, Interview Preparation.
// G2 and G3 are cross-listed into both stages: both facets' own content
// spans both (re-entering after a career break needs explaining the gap on
// the CV/LinkedIn as much as a search strategy; searching confidentially
// means specific LinkedIn settings as much as broader outreach), found
// necessary live the same way Wellbeing's S2/S4 and Career Paths' own
// comparative-field classification turned out to be soft.
export const JOB_SEARCH_AREA: AreaConfig = {
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
  wrapUp: null,
  stageSummary: {
    A: "your materials — the CV and the LinkedIn profile",
    B: "your approach — strategy, and the no-experience circumstance",
  },
  fallbackQuestion: "Where are you at with the job search right now?",
  supersedes: [],
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

// Ported verbatim from scripts/areas/interview-prep.mjs. The thinnest area
// in the project: Otema has one real answer (S1, Q43); every other facet is
// drafted, mostly sourced from bsc-knowledge.ts's interview_prep block
// rather than invented. G6 and G6a are cross-listed into both stages — a
// bare "I'm really nervous about it" opening line classified into either
// stage across different live runs, the same soft-classification-boundary
// pattern seen on Wellbeing's S2/S4 and Job Search's G2/G3.
export const INTERVIEW_PREP_AREA: AreaConfig = {
  n: 8,
  name: "Interview Preparation",
  topic: "interview_prep",
  realQuestions: [
    "How do I prepare for a technical interview?",
  ],
  realOrder: ["S1"],
  wrapUp: null,
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

// Ported verbatim from scripts/areas/ai-impact.mjs. The tenth and last area,
// closing out the flat-topic model entirely. Otema's 3 real answers cover
// positioning yourself to work alongside AI, whether learning tech is still
// worth it, and which field is safest — no other area shares the ai_impact
// topic tag, so no exact-question matching is needed the way Job Search and
// Interview Preparation needed it for their shared legacy tag.
//
// The area's own dead-end pass found 4 dead ends and 7 missing standalone
// topics; the 5 highest-severity were closed straight into this first
// build (S3's exit for "don't know what field yet", S2b, G8, G9, G10). A
// live area-tester pass then found 2 real implementation gaps beyond the
// storyboard itself, both fixed here: `reportsExternalTreatment`'s
// classifier instruction (below, in classifyTool()) didn't recognize a
// feared future risk from an automated/systemic process — like AI-hiring
// bias against her background — as "something done to her," so the
// validating opener guard misfired and stripped validation from a real,
// on-mission worry; and Stage A's own describes text had no boundary
// against generating fresh field-exploration coaching when she says she
// doesn't know her field yet, duplicating Career Paths' own territory the
// same way Job Search's Stage B once leaked interview-technique content.
export const AI_IMPACT_AREA: AreaConfig = {
  n: 10,
  name: "AI & the Future of Tech Work",
  topic: "ai_impact",
  realOrder: ["S1", "S2", "S3"],
  wrapUp: null,
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

// One WORDALISE function per built area — see AREA_TOPIC_TO_FUNCTION_NAME
// below, used by UpdateCareerTopic to decide where to chain, and by index.ts
// to call the right one directly when an area is already open.
export const AREAS: Record<string, AreaConfig> = {
  salary: SALARY_AREA,
  getting_started: GETTING_STARTED_AREA,
  mentorship: MENTORSHIP_AREA,
  wellbeing: WELLBEING_AREA,
  mindset: CONFIDENCE_AREA,
  career_paths: CAREER_PATHS_AREA,
  further_education: FURTHER_EDUCATION_AREA,
  cv_job_search: JOB_SEARCH_AREA,
  interview_prep: INTERVIEW_PREP_AREA,
  ai_impact: AI_IMPACT_AREA,
};

export const AREA_TOPIC_TO_FUNCTION_NAME: Record<string, string> = {
  salary: "discussSalaryArea",
  getting_started: "discussGettingStartedArea",
  mentorship: "discussMentorshipArea",
  wellbeing: "discussWellbeingArea",
  mindset: "discussConfidenceArea",
  career_paths: "discussCareerPathsArea",
  further_education: "discussFurtherEducationArea",
  cv_job_search: "discussJobSearchArea",
  interview_prep: "discussInterviewPrepArea",
  ai_impact: "discussAiImpactArea",
};

export const WRAP_UP_LINE =
  "I think we've got something you can actually work with there. Is there anything else on your mind?";

// All ten areas, for the classifier's leaveTo field and the leaving-response
// copy. A user can leave for anywhere, not just the areas that happen to be
// built — an earlier version of this only listed the built areas' own exits,
// which sent a mentorship question nowhere sensible.
export const ALL_AREAS: Record<string, string> = {
  "1": "Getting Started",
  "2": "Further Education",
  "3": "Career Paths & Roadmaps",
  "4": "Mentorship",
  "5": "Wellbeing & Balance",
  "6": "Confidence & Imposter Syndrome",
  "7": "Job Search & Applications",
  "8": "Interview Preparation",
  "9": "Salary & Negotiation",
  "10": "AI & the Future of Tech Work",
};

export function otherAreas(areaN: number): Record<string, string> {
  return Object.fromEntries(Object.entries(ALL_AREAS).filter(([n]) => Number(n) !== areaN));
}

// Bridges a leaving destination (an ALL_AREAS number, from the classifier's
// leaveTo field) to the TOPIC_CATEGORIES slug used by
// AREA_TOPIC_TO_FUNCTION_NAME and adviseOnCareerTopic's currentEntities —
// needed so DiscussArea.call() can hand off to the destination and answer
// the question in the same turn, instead of only announcing the switch and
// leaving her to ask again. All ten areas now have a DiscussArea built.
export const AREA_NUMBER_TO_TOPIC: Record<string, string> = {
  "1": "getting_started",
  "2": "further_education",
  "3": "career_paths",
  "4": "mentorship",
  "5": "wellbeing",
  "6": "mindset",
  "7": "cv_job_search",
  "8": "interview_prep",
  "9": "salary",
  "10": "ai_impact",
};

// ── Leave / done detection (layer 2 + 2a) ───────────────────────────────────
// Ported verbatim from scripts/coach-local.mjs. Deliberately deterministic and
// runs ahead of any model call — see index.ts, which checks these before
// deciding whether to route through the area machinery at all.

export const LEAVE_PHRASES = new RegExp(
  [
    "\\btalk about something else\\b",
    "\\b(?:different|another|new)\\s+(?:topic|subject|area|question)\\b",
    "\\bchange (?:the )?(?:topic|subject)\\b",
    "\\blet'?s (?:move on|leave (?:it|this|that))\\b",
    "\\bmove on to (?:something|another|a different)\\b",
    "\\bcan we talk about (?:something|mentors?|cvs?|interviews?)\\b",
    "\\bforget (?:this|that|it)\\b",
    "\\bnext (?:topic|question|subject)\\b",
    "\\bdone with (?:this|that|salary|pay)\\b",
    "\\benough about (?:this|that|salary|pay|money)\\b",
  ].join("|"),
  "i",
);

export const NOT_LEAVING = /\b(?:move on to the next|moving on to the next|move on without|they (?:just )?move on|worried|scared|afraid|nervous|don'?t want to (?:seem|look|be seen))\b/i;

export const DONE_PHRASES =
  /^(?:(?:no|nope|yeah|yes|ok|okay)[,.!\s]*)?(?:(?:i|I)\s+(?:think|guess|reckon)[,.!\s]*)?(?:that'?s|thats)\s+(?:everything|it|all|the lot)\b|^(?:no|nope|nothing)[,.!\s]*(?:else|more|thanks?|thank you)?\s*$|\bnothing else\b|\bthat'?s all (?:for now|thanks|thank you)\b|^(?:i'?m|im)\s+(?:good|all set|fine)\b|^thanks?[,.!\s]*(?:that'?s|thats)?\s*(?:everything|it|all)?\s*$|^thank you[,.!\s]*(?:that'?s|thats)?\s*(?:everything|it|all)?\s*$/i;

export function saysDone(text: string): boolean {
  return DONE_PHRASES.test(text.trim());
}

export function saysLeaving(text: string): boolean {
  if (NOT_LEAVING.test(text)) return false;
  return LEAVE_PHRASES.test(text);
}

export const COULD_NOT_ANSWER =
  "Sorry — that one did not come through properly on my end. Could you say it again, or put it a different way?";

// ── Facets: Otema's real answers (by topic, in realOrder) + Otema-approved
// drafted gap-fillers (by facet ID) ─────────────────────────────────────────

export interface Facet {
  id: string;
  question: string;
  answer: string;
  source: "OTEMA" | "DRAFTED";
  respondsTo?: string;
}

export function buildFacets(area: AreaConfig): Record<string, Facet> {
  const f: Record<string, Facet> = {};
  const pool = BOTEMA_EXAMPLES[area.realSource || "adviseOnCareerTopic"] || [];
  // Most areas match by topic tag; Confidence matches by exact question text
  // instead, because its real answers carry pre-v4 tags shared with an
  // unrelated Wellbeing answer — see the note on AreaConfig.realQuestions.
  const real = area.realQuestions
    ? area.realQuestions.map((q) => pool.find((ex) => ex.question === q)).filter((ex): ex is typeof pool[number] => !!ex)
    : pool.filter((ex) => ex.topic === area.topic);
  real.forEach((ex, i) => {
    const id = area.realOrder[i];
    if (id) f[id] = { id, question: ex.question, answer: ex.answer, source: "OTEMA" };
  });
  // Review-gated — see botema-generated-examples.ts. Returns nothing until
  // Otema has approved an entry for this area, which is the correct default.
  for (const d of approvedGeneratedFacets(area.n)) {
    f[d.id] = { id: d.id, question: d.question, answer: d.answer, source: "DRAFTED", respondsTo: d.respondsTo };
  }
  return f;
}

// ── Facet selection ──────────────────────────────────────────────────────
// Ported verbatim from scripts/coach-local.mjs.

const STOP = new Set(["what", "when", "should", "would", "there", "their", "about", "this", "that", "with", "from", "have", "they", "them", "your", "just", "been", "much", "more", "than"]);

export function queryWords(message: string): Set<string> {
  return new Set(
    message.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter((w) => w.length > 3 && !STOP.has(w)),
  );
}

export function overlapScore(e: Facet, words: Set<string>): number {
  const hay = `${e.question} ${e.answer}`.toLowerCase();
  let n = 0;
  for (const w of words) if (hay.includes(w)) n += 1;
  return n;
}

// The same count, divided by the square root of how long the facet is, so a
// long drafted answer doesn't win on size alone against a short real one.
function fitScore(e: Facet, words: Set<string>): number {
  const length = `${e.question} ${e.answer}`.split(/\s+/).length;
  return overlapScore(e, words) / Math.sqrt(length);
}

export function matchStrength(pool: Facet[], message: string): number {
  const words = queryWords(message);
  if (!words.size || !pool.length) return 0;
  return Math.max(...pool.map((e) => overlapScore(e, words)));
}

// Facets the conversation has moved past — removed from the pool outright
// rather than down-weighted, per the area's `supersedes` rules.
function retiredBy(area: AreaConfig, used: string[]): Set<string> {
  const gone = new Set<string>();
  for (const rule of area.supersedes) {
    if (used.includes(rule.after)) for (const f of rule.retire) gone.add(f);
  }
  return gone;
}

// Deterministic stand-in for Math.random, seeded from the query text, so two
// runs of the same conversation pick the same "random" four.
function seeded(text: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

const USED_PENALTY = 0.35;

// Reads the whole conversation, not just the latest message — the latest
// message still dominates, but an established situation from a turn earlier
// tips the balance (e.g. "I've already been offered a raise" should keep
// out how-to-ask-for-a-raise material once that's been established).
export function conversationQuery(message: string, history: Array<{ role: string; content: string }>): string {
  const earlier = history
    .filter((m) => m.role === "user")
    .slice(-4)
    .map((m) => m.content)
    .join(" ");
  return `${message} ${message} ${earlier}`;
}

// Seven examples: the three closest, then four drawn at random from the rest
// of the stage's facet pool — voice range, not advice, so they're labelled
// separately in the prompt.
export function mostRelevant(
  area: AreaConfig,
  pool: Facet[],
  message: string,
  closest = 3,
  used: string[] = [],
  random = 4,
): { near: Facet[]; wide: Facet[] } {
  const retired = retiredBy(area, used);
  if (retired.size) pool = pool.filter((e) => !retired.has(e.id));
  const words = queryWords(message);
  const total = closest + random;
  if (!words.size) return { near: pool.slice(0, total), wide: [] };

  const scored = pool
    .map((e) => ({ e, score: fitScore(e, words) - (used.includes(e.id) ? USED_PENALTY : 0) }))
    .sort((a, b) => b.score - a.score);

  const near = scored.slice(0, closest).map((s) => s.e);

  const rest = scored.map((s) => s.e).filter((e) => !near.includes(e));
  const rand = seeded(message);
  for (let i = rest.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  return { near, wide: rest.slice(0, random) };
}
