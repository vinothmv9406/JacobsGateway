/**
 * Single source of truth for brand, contact and SEO constants.
 *
 * Contact details below are the live ones. Keep them identical to the
 * Google Business Profile listing — inconsistent NAP (name, address, phone)
 * across the web is one of the few things that measurably hurts local
 * search ranking.
 */

export const siteConfig = {
  /** Full trading name. Note the typographic apostrophe, as per the mockup. */
  brandFull: "Jacob’s Gateway",
  /** Initials, used in tight spaces (favicon, avatar, mobile). */
  brandShort: "JG",

  legalName: "Jacob’s Gateway", // [CONFIRM] exact registered trade name on the licence
  tagline: "Business setup consultants for Dubai, the UAE and Saudi Arabia",

  // Used for canonical URLs, sitemap and structured data.
  url: "https://www.jacobsgateway.com",

  phone: "+971 58 592 8118",
  phoneHref: "tel:+971585928118",
  whatsapp: "+971 58 592 8118",
  whatsappHref: "https://wa.me/971585928118",
  email: "jacob@jacobsgateway.com",
  emailHref: "mailto:jacob@jacobsgateway.com",

  address: {
    line1: "Office 409-73, Pinnacle",
    line2: "Sheikh Zayed Road, Al Barsha First",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },

  officeHours: "Sunday to Thursday, 9am – 6pm", // [CONFIRM] if you take Saturday calls
} as const;

/** Single-line address, for meta tags and compact placements. */
export const addressOneLine = [
  siteConfig.address.line1,
  siteConfig.address.line2,
  siteConfig.address.city,
  siteConfig.address.country,
].join(", ");

/**
 * Headline figures used in the hero.
 *
 * Deliberately *market facts* about the UAE rather than unverifiable claims
 * about the firm ("1,000+ clients served"). Everything here can be checked
 * against a government source, which matters both for credibility and
 * because search engines increasingly reward claims that survive scrutiny.
 * Swap for real firm metrics only once those numbers can be evidenced.
 */
export const heroStats = [
  { value: "45+", label: "UAE free zones" },
  { value: "100%", label: "Foreign ownership" },
  { value: "0%", label: "Personal income tax" },
];
