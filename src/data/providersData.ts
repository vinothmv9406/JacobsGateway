/**
 * Editorial market guide: how the established UAE business setup
 * consultancies position themselves.
 *
 * This section exists for two reasons. Commercially, it positions Jacob’s Gateway
 * as the impartial advisor who helps founders choose, rather than another
 * firm shouting about itself. For search, "best business setup companies in
 * UAE" and its variants carry real volume that a pure services page cannot
 * reach.
 *
 * EDITORIAL RULES for this data — please keep them:
 *  1. Descriptions summarise each firm's own public positioning. They are
 *     neutral and factual. Do not add criticism, invented pricing, invented
 *     review scores or anything that could be read as disparagement.
 *  2. No outbound links. This is a credibility and SEO asset, not a
 *     referral page.
 *  3. The disclaimer rendered beneath the table is not decorative — it
 *     states the absence of affiliation. Do not remove it.
 */

export interface Provider {
  name: string;
  focus: string;
  description: string;
}

export const providers: Provider[] = [
  {
    name: "Virtuzone",
    focus: "End-to-end execution",
    description:
      "One of the oldest and largest setup specialists in the UAE. Best suited to founders who want the whole process managed for them, including visa processing and corporate bank account introductions."
  },
  {
    name: "Shuraa Business Setup",
    focus: "Mainland licensing",
    description:
      "Strong on UAE mainland formations, with local sponsor assistance, DET (Department of Economy and Tourism) coordination, licensing and office space solutions."
  },
  {
    name: "Creative Zone",
    focus: "Startups & SMEs",
    description:
      "Known for cost-effective startup packages across the major free zones, supported by incubation, advisory and administrative add-ons."
  },
  {
    name: "Commitbiz Management Consultants",
    focus: "Accounting-led setup",
    description:
      "Integrated business setup backed by JAXA Chartered Accountants, which gives them genuine depth in corporate tax compliance and audit alongside formation."
  },
  {
    name: "Flyingcolour Business Setup",
    focus: "Legal & compliance",
    description:
      "A strong reputation for legal advisory, VAT compliance, complex or restricted licensing, and mainland PRO (Public Relations Officer) services."
  },
  {
    name: "Adam Global",
    focus: "GCC expansion",
    description:
      "A comprehensive corporate service provider oriented towards foreign investors and larger SMEs planning regional expansion across the GCC."
  },
  {
    name: "Osome",
    focus: "Digital-first platform",
    description:
      "Combines fast online company formation with tech-enabled bookkeeping and integrated VAT and tax management. Built for founders who prefer a dashboard to a meeting."
  },
  {
    name: "Worldwide Formations",
    focus: "Offshore structuring",
    description:
      "Specialises in tailored offshore and free zone structuring for international businesses, holding companies and globally mobile entrepreneurs."
  },
  {
    name: "Kiltons Business Setup",
    focus: "Budget licensing",
    description:
      "Focused on affordable initial licences, sponsorship handling and flexible corporate service packages aimed at small businesses."
  },
  {
    name: "A&A Associate",
    focus: "Legal & audit",
    description:
      "Offers legal, auditing and management consulting alongside standard incorporation, suiting businesses that want advisory and compliance under one roof."
  }
];

export interface ComparisonRow {
  provider: string;
  focusArea: string;
  entryRoute: string;
  bestFor: string;
}

/** Mirrors the client-supplied comparison table. */
export const comparisonRows: ComparisonRow[] = [
  {
    provider: "Virtuzone",
    focusArea: "All-in-one execution",
    entryRoute: "Free Zone / Mainland",
    bestFor: "Full-service setup and banking assistance"
  },
  {
    provider: "Shuraa",
    focusArea: "UAE mainland licensing",
    entryRoute: "Mainland / Free Zone",
    bestFor: "Local market setup and PRO coordination"
  },
  {
    provider: "Creative Zone",
    focusArea: "Startups and SMEs",
    entryRoute: "Free Zone",
    bestFor: "Budget-friendly initial incorporation"
  },
  {
    provider: "Commitbiz",
    focusArea: "Accounting-led formation",
    entryRoute: "Free Zone / Mainland",
    bestFor: "Setups needing post-incorporation tax depth"
  },
  {
    provider: "Osome",
    focusArea: "Digital-first platform",
    entryRoute: "Free Zone",
    bestFor: "Remote-first founders wanting integrated bookkeeping"
  }
];

/**
 * The three variables that actually decide which consultancy fits —
 * taken from the opening premise of the client's own research.
 */
export const selectionCriteria = [
  {
    title: "Jurisdiction first",
    description:
      "Everything else follows from mainland, free zone or offshore. It decides whether you can invoice a UAE client directly, how many visas you can hold, what office you must rent and where you land on corporate tax. Correcting it later means a second licence, a second tenancy and a second bank account."
  },
  {
    title: "What happens after the licence",
    description:
      "The licence is the easy part. Corporate tax registration, VAT returns, bookkeeping and audit arrive whether or not your consultant deals with them. A firm with accountants in the building behaves very differently from one that stops answering the day the trade licence is emailed to you."
  },
  {
    title: "Three-year cost, not day-one price",
    description:
      "Set the headline setup fee against renewal, visa costs, the office you are obliged to hold, and what an amendment costs when you outgrow the structure. The cheapest licence in January is very often the most expensive company by its second renewal."
  }
];
