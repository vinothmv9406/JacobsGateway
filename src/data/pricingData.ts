/**
 * Packages shown in the pricing section.
 *
 * The template's monthly/annual toggle is repurposed as "Year 1 (setup)" vs
 * "Annual renewal", which is how business setup is actually quoted: a larger
 * first-year fee, then a smaller recurring one.
 *
 * ──────────────────────────────────────────────────────────────
 * BEFORE LAUNCH — confirm every figure below. They are indicative
 * placeholders, deliberately aligned with the cost ranges quoted in
 * faqData.ts so the site does not contradict itself. If you change a
 * number here, change the matching range in the FAQ and in the FAQPage
 * JSON-LD in index.html. Government fees move with activity, zone, visa
 * quota and emirate.
 * ──────────────────────────────────────────────────────────────
 */

export interface PricingPlan {
  name: string;
  price: { setup: string; renewal: string };
  priceNote: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free Zone",
    price: { setup: "AED 18,500", renewal: "AED 14,900" },
    priceNote: "from",
    description:
      "Consultants, agencies and e-commerce sellers billing clients outside the UAE. One founder, one visa, low overhead.",
    features: [
      "Free zone licence, zone chosen to fit the activity",
      "Up to 3 activities on one licence",
      "1 investor visa, including medical and Emirates ID",
      "Flexi-desk address that satisfies the quota rule",
      "Trade name reservation and initial approval",
      "Corporate tax registration on EmaraTax",
      "Bank introductions and a prepared compliance file"
    ],
    buttonText: "Get a quote"
  },
  {
    name: "Mainland",
    price: { setup: "AED 36,500", renewal: "AED 27,500" },
    priceNote: "from",
    description:
      "For trading inside the UAE, invoicing local companies, opening a storefront or going after government contracts.",
    features: [
      "DET trade licence",
      "100% foreign ownership where the activity permits it",
      "Up to 3 investor or employee visas",
      "Ejari tenancy registration and office sourcing",
      "MoA drafting and notarisation",
      "Corporate tax registration, plus VAT if you cross the threshold",
      "MoHRE labour file and establishment card",
      "A named PRO for renewals, amendments and the Amer runs"
    ],
    highlighted: true,
    buttonText: "Book a free consultation"
  },
  {
    name: "Group & Holding",
    price: { setup: "AED 62,000", renewal: "AED 44,000" },
    priceNote: "from",
    description:
      "Multi-entity groups, investors holding assets across jurisdictions, and businesses moving into Saudi Arabia.",
    features: [
      "Offshore or holding vehicle via RAK ICC or JAFZA",
      "Group structuring across operating and holding entities",
      "Visa quota planned around your hiring forecast",
      "MISA investor licence advisory for Saudi entry",
      "Corporate tax planning and a transfer pricing review",
      "Monthly bookkeeping, audit-ready at renewal",
      "Golden Visa eligibility assessed properly, not guessed",
      "A senior advisor who answers the phone"
    ],
    buttonText: "Talk to an advisor"
  }
];
