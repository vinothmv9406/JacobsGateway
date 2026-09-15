import { siteConfig, addressOneLine } from "@/data/siteConfig";

/**
 * Standard legal pages.
 *
 * ──────────────────────────────────────────────────────────────
 * THESE ARE CONSERVATIVE STARTING DRAFTS, NOT LEGAL ADVICE.
 * Have a UAE-qualified lawyer review all three before launch, and
 * confirm the two items marked [CONFIRM] below:
 *   • the exact registered entity name and licence number
 *   • the governing law / court you want named
 * ──────────────────────────────────────────────────────────────
 *
 * They are written to describe what this website actually does rather than
 * generic boilerplate. As shipped, the site has no contact form, no login,
 * no analytics and no advertising pixels; contact happens through mailto:
 * and tel: links. That keeps the disclosure honest and the risk low. If you
 * later add Google Analytics, Meta Pixel, a chat widget or a contact form,
 * the Cookie Policy and Privacy Policy both need updating, and you will
 * need a consent banner for visitors in the EU/UK.
 */

export interface LegalSection {
  heading: string;
  body: string[];
  list?: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

/** Shown on all three documents. Update when you next revise them. */
const LAST_UPDATED = "13 September 2026";

const entity = siteConfig.legalName;

export const termsOfService: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  metaTitle: `Terms of Service | ${siteConfig.brandFull}`,
  metaDescription:
    "The terms governing use of the Jacob's Gateway website and the basis on which we provide business setup and corporate services in the UAE.",
  lastUpdated: LAST_UPDATED,
  intro:
    "These terms govern your use of this website. Please read them before relying on anything published here.",
  sections: [
    {
      heading: "1. Who we are",
      body: [
        `This website is operated by ${entity} ("we", "us", "our"), a business setup and corporate services consultancy based at ${addressOneLine}.`,
        `You can reach us at ${siteConfig.email} or ${siteConfig.phone}.`,
      ],
    },
    {
      heading: "2. Acceptance of these terms",
      body: [
        "By accessing or using this website you agree to these terms. If you do not agree with them, please do not use the site.",
        "We may update these terms from time to time. The version published here is the version that applies, and the date at the top tells you when it last changed.",
      ],
    },
    {
      heading: "3. This website is information, not advice",
      body: [
        "Everything on this site is general information about company formation, licensing, immigration and tax in the United Arab Emirates and Saudi Arabia. It is not legal, tax, accounting, immigration or financial advice, and it is not a substitute for advice on your own circumstances.",
        "Regulations, government fees, thresholds and processing times in both countries change, sometimes at short notice. We take reasonable care to keep this site current, but we do not warrant that every figure or timeline on it is accurate or up to date at the moment you read it. Always confirm the position with us, or with the relevant authority, before you act.",
      ],
    },
    {
      heading: "4. No client relationship until we agree one in writing",
      body: [
        "Browsing this site, emailing us, or having an initial consultation does not create a client relationship. We act for you only once scope, fees and responsibilities are agreed in a written engagement, and any conditions in that engagement are met.",
        "Until then, please do not send us confidential or sensitive information.",
      ],
    },
    {
      heading: "5. Quotations and fees",
      body: [
        "Any prices shown on this site are indicative and provided for general guidance. They are not an offer capable of acceptance.",
        "Government and authority charges are set by third parties, are outside our control, and change without notice to us. Where our written quotation conflicts with anything published on this site, the written quotation governs.",
      ],
    },
    {
      heading: "6. Timelines and third-party decisions",
      body: [
        "Licensing, immigration, banking and tax outcomes are decided by government authorities, free zone registrars and banks. We prepare, submit and follow up, but we do not control their decisions or their processing times.",
        "Any timeline we give is an estimate based on normal conditions. We are not liable for delays or refusals caused by an authority or bank, by incomplete or inaccurate information supplied to us, or by a change in law or policy.",
      ],
    },
    {
      heading: "7. Banking introductions",
      body: [
        "Where we assist with a corporate bank account, we prepare your application and introduce you to banks. The decision to open, decline, restrict or close an account belongs solely to the bank.",
        "We do not guarantee that an account will be opened, and nothing on this site should be read as such a guarantee.",
      ],
    },
    {
      heading: "8. References to other firms",
      body: [
        "This site includes an editorial comparison of other business setup consultancies in the UAE. It is compiled from publicly available information about how those firms present themselves, is offered as general guidance, and is not a recommendation, endorsement or criticism of any of them.",
        "We are not affiliated with, endorsed by, or acting as an agent for any company named on this site. All third-party names and trade marks remain the property of their respective owners. Their services and pricing change, and you should verify current details with them directly.",
      ],
    },
    {
      heading: "9. Intellectual property",
      body: [
        `The content, design, text and graphics on this site are owned by ${entity} or used under licence, and are protected by applicable intellectual property laws.`,
        "You may view, download and print pages for your own reference. You may not republish, sell, or use our content commercially without our written permission.",
      ],
    },
    {
      heading: "10. Links to other websites",
      body: [
        "Where we link to external sites, we do so for convenience. We do not control them and are not responsible for their content, accuracy or privacy practices.",
      ],
    },
    {
      heading: "11. Limitation of liability",
      body: [
        "To the fullest extent permitted by law, we are not liable for any loss or damage arising from your use of, or reliance on, this website, including any indirect or consequential loss, loss of profit, loss of business, or loss of anticipated savings.",
        "Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited, including liability for fraud or for death or personal injury caused by negligence.",
        "Our liability in respect of services we are formally engaged to provide is governed by the engagement letter for those services, not by this page.",
      ],
    },
    {
      heading: "12. Your responsibilities",
      body: [
        "You agree not to use this site in any way that is unlawful, that interferes with its operation or security, or that attempts to gain unauthorised access to it or to any system connected to it.",
        "You are responsible for the accuracy and completeness of any information you provide to us, and for making sure you have the right to provide it.",
      ],
    },
    {
      heading: "13. Governing law",
      body: [
        "These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai. The courts of Dubai have exclusive jurisdiction over any dispute arising out of or in connection with them.", // [CONFIRM] with your lawyer
      ],
    },
    {
      heading: "14. Contact",
      body: [
        `Questions about these terms can go to ${siteConfig.email}, or by post to ${addressOneLine}.`,
      ],
    },
  ],
};

export const privacyPolicy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  metaTitle: `Privacy Policy | ${siteConfig.brandFull}`,
  metaDescription:
    "How Jacob's Gateway collects, uses, shares and protects personal data, and the rights available to you under UAE data protection law.",
  lastUpdated: LAST_UPDATED,
  intro:
    "This policy explains what personal data we handle, why we handle it, and what you can ask us to do about it.",
  sections: [
    {
      heading: "1. Who is responsible for your data",
      body: [
        `${entity}, of ${addressOneLine}, is the controller of personal data described in this policy. You can contact us about privacy matters at ${siteConfig.email}.`,
      ],
    },
    {
      heading: "2. What this website collects",
      body: [
        "This website has no contact form, no account login, no advertising pixels and no analytics tracking. We do not collect personal data from you simply by your visiting it.",
        "As with any site, our hosting provider processes technical information such as IP address, browser type and the pages requested, in server logs used to keep the service running and secure.",
        "This site loads fonts from Google Fonts. When your browser requests those files, your IP address is transmitted to Google, which processes it under its own privacy policy. If you would prefer to avoid that, the fonts can be self-hosted instead. Just ask.",
      ],
    },
    {
      heading: "3. What you send us directly",
      body: [
        "If you email us, call us, message us on WhatsApp or meet us, we hold what you choose to share. For an enquiry that is usually your name, contact details, nationality, intended business activity and an outline of your plans.",
        "If you go on to engage us, we will need identity and compliance documentation required by the relevant authorities and banks. That typically includes passport copies, visa and Emirates ID details, proof of address, shareholder and ownership information, and source of funds documentation.",
      ],
    },
    {
      heading: "4. Why we use it, and on what basis",
      body: [
        "We use personal data to respond to enquiries, prepare quotations, deliver the services you engage us for, submit applications to authorities, banks and free zones on your behalf, and meet our own legal, tax and anti-money-laundering obligations.",
        "Depending on the situation, we rely on your consent, on the performance of a contract with you, on compliance with a legal obligation, or on our legitimate interest in operating and protecting the business.",
        "We do not sell personal data, and we do not use it for automated decision-making that produces legal effects.",
      ],
    },
    {
      heading: "5. Who we share it with",
      body: [
        "We share only what is necessary, and only with parties involved in delivering what you have asked us to do:",
      ],
      list: [
        "Government and licensing authorities, including DET, free zone registrars, immigration, MoHRE and the Federal Tax Authority",
        "Banks and financial institutions, where you have asked us to assist with an account",
        "Professional advisers such as lawyers, auditors and accountants, where relevant to your matter",
        "Service providers who support our operations, such as IT and document services, under confidentiality obligations",
        "Authorities and regulators where we are legally required to disclose",
      ],
    },
    {
      heading: "6. Transfers outside the UAE",
      body: [
        "Some of our service providers operate outside the United Arab Emirates. Where personal data is transferred abroad, we take reasonable steps to ensure an appropriate level of protection, consistent with applicable UAE data protection law.",
      ],
    },
    {
      heading: "7. How long we keep it",
      body: [
        "Enquiries that do not lead to an engagement are kept only as long as needed to deal with them, and then deleted.",
        "Client records are kept for as long as we act for you, and afterwards for the period required by UAE commercial, tax and anti-money-laundering legislation. Retention periods under those rules are generally measured in years, and we do not shorten them at request where the law requires us to keep a record.",
      ],
    },
    {
      heading: "8. Security",
      body: [
        "We apply reasonable technical and organisational measures to protect personal data against loss, misuse and unauthorised access, and we restrict access to those who need it to do their work.",
        "No method of transmission or storage is completely secure. Please avoid sending highly sensitive documents over unsecured channels; if in doubt, ask us how to send them safely.",
      ],
    },
    {
      heading: "9. Your rights",
      body: [
        "Subject to applicable law, including Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data, you may ask us to:",
      ],
      list: [
        "Confirm what personal data we hold about you, and give you a copy",
        "Correct data that is inaccurate or incomplete",
        "Delete data we no longer have a lawful reason to keep",
        "Restrict or object to certain processing",
        "Withdraw consent, where consent is what we relied on",
        "Transfer your data to another provider, where that right applies",
      ],
    },
    {
      heading: "10. Making a request or a complaint",
      body: [
        `Write to ${siteConfig.email} and tell us what you want us to do. We may need to verify your identity before we act, and we will respond within the period required by applicable law.`,
        "If you are not satisfied with our response, you may complain to the competent data protection authority in the UAE. If you are in the EU or UK, you may also have the right to complain to your local supervisory authority.",
      ],
    },
    {
      heading: "11. Children",
      body: [
        "Our services are provided to businesses and adults. We do not knowingly collect personal data from children. If you believe a child has provided us with data, contact us and we will delete it.",
      ],
    },
    {
      heading: "12. Changes to this policy",
      body: [
        "We may update this policy as our services or the law change. The date at the top shows when it last changed, and material changes will be made clear on this page.",
      ],
    },
  ],
};

export const cookiePolicy: LegalDoc = {
  slug: "cookies",
  title: "Cookie Policy",
  metaTitle: `Cookie Policy | ${siteConfig.brandFull}`,
  metaDescription:
    "What cookies and similar technologies this website uses, what they do, and how to control them in your browser.",
  lastUpdated: LAST_UPDATED,
  intro:
    "A short, accurate account of what this website stores on your device. At present, very little.",
  sections: [
    {
      heading: "1. What cookies are",
      body: [
        "Cookies are small text files a website asks your browser to store. They are widely used to make sites work, to remember preferences, and to measure how a site is used. Similar technologies include local storage and tracking pixels.",
      ],
    },
    {
      heading: "2. What this site uses today",
      body: [
        "This website does not set analytics, advertising or tracking cookies. There is no contact form, no login and no advertising pixel, so there is nothing here that profiles you or follows you to other sites.",
        "Any cookie present is strictly necessary: set by our hosting or security provider to serve pages reliably and protect against abuse. Strictly necessary cookies do not require consent, because the site cannot function without them.",
      ],
    },
    {
      heading: "3. Third-party requests",
      body: [
        "We load typefaces from Google Fonts and some imagery from external providers. Those requests do not set cookies on our behalf, but they do reveal your IP address to the provider serving the file, which processes it under its own policy.",
        "If you would rather the site made no third-party requests at all, the fonts and images can be self-hosted. Contact us and we will tell you where that currently stands.",
      ],
    },
    {
      heading: "4. If this changes",
      body: [
        "If we later add analytics, a chat widget, a booking tool or advertising measurement, those will place cookies that are not strictly necessary. When that happens we will update this page and, where the law requires it, ask for your consent before any non-essential cookie is set.",
      ],
    },
    {
      heading: "5. Controlling cookies",
      body: [
        "You can block or delete cookies through your browser settings, and most browsers let you refuse third-party cookies specifically. Blocking strictly necessary cookies may stop parts of the site from working properly.",
        "Guidance is available in the help pages of Chrome, Safari, Firefox and Edge.",
      ],
    },
    {
      heading: "6. Contact",
      body: [
        `If you have a question about this policy, email ${siteConfig.email}. This page should be read alongside our Privacy Policy.`,
      ],
    },
  ],
};

export const legalDocs = [termsOfService, privacyPolicy, cookiePolicy];
