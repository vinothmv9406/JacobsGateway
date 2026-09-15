/**
 * ⚠️  PLACEHOLDER CONTENT — MUST BE REPLACED BEFORE LAUNCH  ⚠️
 *
 * These quotes are illustrative sample copy written to fill the carousel
 * during development. They are NOT real client testimonials.
 *
 * Publishing invented reviews as genuine is deceptive, and in the UAE it
 * risks falling foul of consumer protection and advertising rules. Replace
 * every entry below with a real, attributable client quote you have written
 * permission to publish — or delete the <Testimonials /> section from
 * src/pages/Index.tsx until real quotes are available.
 *
 * Avatars are generated initials rather than stock photographs, so no real
 * person's face is shown alongside a quote they did not give.
 */

/** Builds a neutral initials avatar as an inline SVG data URI. */
const initialsAvatar = (initials: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" fill="#2A2F42"/>
      <text x="48" y="61" font-family="Poppins, Inter, sans-serif" font-size="34"
            font-weight="600" fill="#D6BCFA" text-anchor="middle">${initials}</text>
    </svg>`
  )}`;

export const testimonials = [
  {
    quote:
      "They talked us out of the free zone package we arrived asking for. Our clients are UAE government entities, so we needed a mainland licence — that one conversation saved us a restructure twelve months in.",
    author: "Sample Client A",
    role: "Founder, Facilities Management (placeholder)",
    avatar: initialsAvatar("A")
  },
  {
    quote:
      "The licence was the easy part. What mattered was the bank file — it was prepared properly, the business case was written for a compliance officer rather than for us, and the account opened at the second bank we approached.",
    author: "Sample Client B",
    role: "Managing Director, Commodities Trading (placeholder)",
    avatar: initialsAvatar("B")
  },
  {
    quote:
      "We had a licence already and no idea where we stood on corporate tax. They reviewed our position, registered us, assessed us for Small Business Relief and set up bookkeeping that our auditor actually accepted.",
    author: "Sample Client C",
    role: "CFO, E-commerce Group (placeholder)",
    avatar: initialsAvatar("C")
  },
  {
    quote:
      "Expanding from Dubai into Riyadh was a different process entirely, and they were upfront about that. MISA licence, GOSI, Saudization plan — scoped as its own project with realistic timelines instead of being sold as a quick add-on.",
    author: "Sample Client D",
    role: "Regional Director, Logistics (placeholder)",
    avatar: initialsAvatar("D")
  }
];
