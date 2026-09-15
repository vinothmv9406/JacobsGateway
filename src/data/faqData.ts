/**
 * FAQ content.
 *
 * Questions are phrased the way people actually type them, because this list
 * is also emitted as FAQPage structured data in index.html and is the page's
 * best chance at a rich result. First sentence of each answer is written to
 * stand alone as a featured snippet.
 *
 * Two rules when editing:
 *  1. Lead with the answer, then the nuance. Never open with a restatement
 *     of the question.
 *  2. Keep the caveats. The honest "it depends, and here is what it depends
 *     on" is what distinguishes this from every templated setup site, and
 *     it is also what stops clients feeling misled in week three.
 *
 * NOTE: figures reflect UAE and KSA rules at the time of writing. Thresholds,
 * fees and relief windows change. Have a compliance contact review this list
 * before launch and re-check it annually. Keep the JSON-LD block in
 * index.html in sync with any edit here.
 */

export const faqItems = [
  {
    question: "How much does it cost to set up a business in Dubai?",
    answer:
      "Budget AED 20,000 to 30,000 for a straightforward free zone company with one investor visa, and AED 35,000 to 50,000 for a mainland licence with a small office and two or three visas. The licence is rarely the biggest line in that total. Immigration deposits, the establishment card, medical and Emirates ID, and the office you have to hold in order to get visa quota at all are what move the number. When you see a headline price of AED 5,750, that is a licence fee with everything else stripped out of it. We quote government charges and our own fee in separate columns so you can see which is which."
  },
  {
    question: "Mainland or free zone: which is better for my business?",
    answer:
      "It comes down to where your customers are. Selling to UAE-based companies, opening a shop or a clinic, or bidding for government and semi-government work all point to mainland. Serving clients abroad, consulting, e-commerce or trading through a distributor point to a free zone, where entry costs are lower and qualifying income can still sit at 0% corporate tax. Some zones matter for their ecosystem rather than their price: DMCC for commodities, DIFC and ADGM for financial services, Dubai Internet City for tech. We make this call with you before you pay anything, because moving later means a new licence, a new tenancy and a new bank account."
  },
  {
    question: "Can a foreigner own 100% of a company in the UAE?",
    answer:
      "Yes, for the large majority of activities. Free zone companies have always permitted full foreign ownership. Since the 2021 amendment to the Commercial Companies Law, mainland commercial and industrial activities generally allow it too, with no Emirati sponsor and no 51% partner. The exceptions are activities on the strategic-impact list, where ownership caps or additional approvals still apply. Because the position is set by your specific activity code rather than by your sector in general, we confirm it in writing before you commit."
  },
  {
    question: "How long does it take to set up a company in Dubai?",
    answer:
      "A clean free zone licence is usually issued within 5 to 10 working days. Mainland typically runs two to three weeks, mostly because the Ejari tenancy has to be registered before the licence is issued. Residence visas add roughly one to two weeks after that, assuming the medical and biometrics slots are available. Corporate bank account opening is the genuinely unpredictable stage, and three to eight weeks is realistic. Any consultant promising a guaranteed account in 48 hours is describing something outside their control."
  },
  {
    question: "Do I need a physical office to get a trade licence in Dubai?",
    answer:
      "You need a registered address, not necessarily a room of your own. Most free zones bundle a flexi-desk or shared workspace into the licence package, and that satisfies the requirement. Mainland companies need a tenancy registered through Ejari, though a serviced office or business centre is usually acceptable for a small operation. The catch worth knowing early: your visa quota is tied to the space you hold. Decide your headcount for the next twelve months before you pick the smallest desk on the list."
  },
  {
    question: "Does my UAE company have to pay corporate tax?",
    answer:
      "Taxable income up to AED 375,000 is taxed at 0%, and anything above it at 9%, for financial years beginning on or after 1 June 2023. Registration with the Federal Tax Authority is required regardless, so a company expecting to owe nothing still has to register and file. Two reliefs are worth checking rather than assuming. Small Business Relief can treat a company under the revenue threshold as having no taxable income for a period, and a free zone company meeting the Qualifying Free Zone Person conditions can keep 0% on qualifying income. Both have real conditions attached, and both are easy to lose by accident."
  },
  {
    question: "When do I need to register for VAT in the UAE?",
    answer:
      "Registration becomes mandatory once your taxable supplies and imports pass AED 375,000 over the previous twelve months, or when you expect to pass it within the next thirty days. Voluntary registration opens at AED 187,500, which suits some B2B businesses because it lets them reclaim input VAT on setup costs. The rate is 5%. We watch the threshold on your behalf rather than leaving you to notice it, since late registration carries penalties that are larger than the tax usually is."
  },
  {
    question: "How many residence visas can I get with my trade licence?",
    answer:
      "There is no single number. Entry-level free zone packages typically carry one to three, larger free zone offices scale from there, and mainland quota is calculated from your Ejari-registered floor area. Raising quota after the fact means amending the licence, sometimes moving premises, and paying twice. Tell us your hiring plan at the structuring stage and we will size it correctly the first time."
  },
  {
    question: "Can you help me open a corporate bank account in the UAE?",
    answer:
      "Yes, and it is the stage where we earn our fee. UAE banks apply serious scrutiny to shareholder nationality, source of funds, expected transaction flows and whether the stated business model makes sense. We prepare the compliance file, write the business case for a risk officer rather than for you, and approach banks whose appetite fits your profile instead of applying everywhere at once. We cannot guarantee approval, because the decision belongs to the bank and to nobody else. A properly prepared file changes both the odds and the timeline."
  },
  {
    question: "How do I set up a company in Saudi Arabia?",
    answer:
      "Foreign investors generally start with an investor licence from MISA, the Ministry of Investment of Saudi Arabia, previously known as SAGIA. That is followed by commercial registration with the Ministry of Commerce, Chamber of Commerce membership, GOSI registration, and a Saudization plan that has to hold up under Nitaqat. Companies chasing Saudi government contracts should also look at the Regional Headquarters programme, which has been a condition of public-sector contracting since January 2024. Expect heavier documentation and longer timelines than the UAE, which is why we scope Saudi entry as a separate engagement."
  }
];
