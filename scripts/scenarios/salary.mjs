// ============================================================================
// Area 9 · Salary & Negotiation — test conversations
//
// Slots 01-04 are FIXED and committed. Their transcripts are diffable across
// runs, so a change in output means the bot changed rather than the test did.
// Do not rewrite them casually.
//
// Slot 05 is written FRESH each run by the area-tester agent, aimed at a
// situation the fixed four do not cover. It is expected to change.
//
// Every conversation runs FIVE user turns. One or two make almost any area
// look fine; the problems — wrong stage, repetition, a conversation that stops
// leading anywhere — only show up over a run.
// ============================================================================

import { replyOf, everyReplyAsks, noRepeatedOpeners, jargonPerReply, maxRepeatOverlap, extractiveQuestions } from "../checks.mjs";

export default [
  {
    id: "01-career-changer-lowballed",
    title: "A nurse moving into health tech, offered far too little",
    claim: "Crosses stage A into B mid-conversation, and treats a half offer as a mismatch rather than a starting point.",
    turns: [
      "I've been a nurse for 6 years and I'm moving into health tech",
      "they've offered me something but it feels really low",
      "it's about half what the job ads say for that role",
      "I keep thinking maybe I don't deserve more since I'm new to tech",
      "what do I actually say to them",
    ],
    checks: [
      ["reads the offer as a mismatch, not her worth", (o) => /(mismatch|misunderstood|budget|range|not about you|worth)/i.test(replyOf(o))],
      ["values her clinical background rather than discounting it", (o) => /(nurse|clinical|healthcare|domain|background|experience)/i.test(replyOf(o))],
      ["stayed in the area for all five turns", (o) => !/stage leaving/.test(o)],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["never asks her to disclose her own pay", (o) => extractiveQuestions(o).length === 0],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply stacks more than two jargon terms", (o) => jargonPerReply(o) <= 2],
      ["no reply mostly restates the one before it", (o) => maxRepeatOverlap(o) < 0.5],
    ],
  },
  {
    id: "02-counter-offer",
    title: "She resigned and they suddenly found the money",
    claim: "Stage C throughout, and asks why the number only appeared once she was leaving.",
    turns: [
      "I handed in my notice last week and now they've offered me 30% more to stay",
      "I'd asked for a raise twice before and got nothing",
      "honestly the money was only part of why I was going",
      "my new employer has already sent the contract",
      "so do I take it or not",
    ],
    checks: [
      ["classified stage C", (o) => /\[stage C/.test(o)],
      ["questions why the money appeared only now", (o) => /(before|why|earlier|only now|resignation|notice)/i.test(replyOf(o))],
      ["treats money as not the whole reason", (o) => /(reason|why you|what was wrong|part of|fix)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["never asks her to disclose her own pay", (o) => extractiveQuestions(o).length === 0],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply stacks more than two jargon terms", (o) => jargonPerReply(o) <= 2],
      ["no reply mostly restates the one before it", (o) => maxRepeatOverlap(o) < 0.5],
    ],
  },
  {
    id: "03-paid-in-local-currency",
    title: "A foreign employer insisting on local currency",
    claim: "Negotiates the mechanism — review interval, pegging — rather than arguing about the currency itself.",
    turns: [
      "I'm in Accra and a German company wants to hire me remotely",
      "they say they'll only pay in cedis",
      "the cedi has moved a lot this year and I'm worried",
      "is there anything I can actually ask for here",
      "how do I put that to them without sounding difficult",
    ],
    checks: [
      ["reaches the mechanism, not just the currency", (o) => /(review|peg|interval|adjust|index|contract|written)/i.test(replyOf(o))],
      ["takes the currency worry seriously", (o) => /(volatil|inflation|moved|devalu|risk|stable)/i.test(replyOf(o))],
      ["handles the 'sounding difficult' turn without leaving", (o) => !/stage leaving/.test(o)],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["never asks her to disclose her own pay", (o) => extractiveQuestions(o).length === 0],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply stacks more than two jargon terms", (o) => jargonPerReply(o) <= 2],
      ["no reply mostly restates the one before it", (o) => maxRepeatOverlap(o) < 0.5],
    ],
  },
  {
    id: "04-fobbed-off-twice",
    title: "Told to wait for the review cycle, for the second year running",
    claim: "Stage C. Recognises a pattern rather than repeating last year's advice.",
    turns: [
      "my manager told me to wait for the review cycle",
      "she said exactly the same thing last year",
      "I did everything on the list she gave me",
      "I don't want to be the person who complains",
      "am I being naive staying here",
    ],
    checks: [
      ["classified stage C", (o) => /\[stage C/.test(o)],
      ["names the repetition as information about them", (o) => /(pattern|again|last year|twice|says something|about them|not about you)/i.test(replyOf(o))],
      ["does not treat raising it as complaining", (o) => /(complain|reasonable|entitled|fair|normal|right to|business (?:issue|case)|not asking for a favour|recognised for|deserve)/i.test(replyOf(o))],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["never asks her to disclose her own pay", (o) => extractiveQuestions(o).length === 0],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply stacks more than two jargon terms", (o) => jargonPerReply(o) <= 2],
      ["no reply mostly restates the one before it", (o) => maxRepeatOverlap(o) < 0.5],
    ],
  },
  // NEW this run
  {
    id: "05-colleague-pay-gap",
    title: "She finds out a male peer hired the same month earns more, at a small company",
    claim: "Stage C. Tests whether the coach names this as a pay gap worth raising rather than coaching her out of raising it, doesn't invent a legal claim or process that may not exist at her employer, and doesn't ask her to disclose her own number when she hasn't offered it.",
    turns: [
      "so i just found out kwame who does basically the same job as me earns way more than i do",
      "i only know because he mentioned a figure from his payslip without realising, i havent told anyone i know",
      "im scared if i bring it up they'll just say im being difficult, it's a really small company",
      "he's not even more senior than me we literally started the same month",
      "how do i even start this without it blowing up in my face",
    ],
    checks: [
      ["names it as a pay gap worth raising, not a complaint to swallow", (o) => /(pay gap|earn more|paid more|difference|disparity|unequal|same job|fair)/i.test(replyOf(o))],
      ["does not tell her to drop it or stay quiet", (o) => !/(let it go|don't bring it up|not worth raising|drop it|keep it to yourself)/i.test(replyOf(o))],
      ["does not invent a formal legal process or law", (o) => !/(equal pay act|file a complaint with|legally entitled|sue|lawsuit|tribunal|labour board)/i.test(replyOf(o))],
      ["classified stage C", (o) => /\[stage C/.test(o)],
      ["most replies still end on a question", (o) => everyReplyAsks(o)],
      ["never asks her to disclose her own pay", (o) => extractiveQuestions(o).length === 0],
      ["no two replies open the same way", (o) => noRepeatedOpeners(o)],
      ["no reply stacks more than two jargon terms", (o) => jargonPerReply(o) <= 2],
      ["no reply mostly restates the one before it", (o) => maxRepeatOverlap(o) < 0.5],
    ],
  },
];
