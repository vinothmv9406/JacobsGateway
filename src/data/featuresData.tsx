import React from 'react';
import {
  Building2,
  Store,
  Globe2,
  Landmark,
  Receipt,
  Calculator,
  BadgeCheck,
  FileCheck2,
  Compass,
} from 'lucide-react';

/**
 * Service grid. Nine items fill the 3-column grid as three clean rows.
 *
 * Copy rule for this file: name the actual authority, portal or document
 * wherever possible (DET, GDRFA, EmaraTax, Ejari, MISA). Generic competence
 * claims read as filler to both clients and search engines; specifics are
 * what signal that the people writing this have stood at the counter.
 * Vary the sentence shape between entries — nine identically-structured
 * blurbs are the fastest way to make a services page feel machine-made.
 */
export const features = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "UAE Mainland Company Formation",
    description:
      "If your customers are inside the UAE, or you want to bid for government work, mainland is usually the only honest answer. We run the DET file end to end: trade name, initial approval, activity codes, MoA notarisation and the Ejari tenancy the licence depends on."
  },
  {
    icon: <Store className="h-6 w-6" />,
    title: "Free Zone Company Setup",
    description:
      "IFZA, Meydan, SHAMS, RAKEZ, DMCC, DAFZA, ADGM, DIFC. We are not an agent for any one of them, which means we can tell you when the cheap package will cost you more in year two because the visa quota is wrong."
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: "Offshore & Holding Structures",
    description:
      "RAK ICC and JAFZA Offshore vehicles for holding shares, property and IP. No residence visas, no local trade. Used properly, a clean holding layer above your operating companies; used carelessly, a bank account you will never open."
  },
  {
    icon: <Landmark className="h-6 w-6" />,
    title: "Corporate Bank Account Opening",
    description:
      "This is where most setups stall, and nobody warns you beforehand. Compliance teams want source of funds, a plausible business model and a shareholder profile that does not raise flags. We build that file properly and take it to the banks whose appetite actually matches your activity."
  },
  {
    icon: <Receipt className="h-6 w-6" />,
    title: "Corporate Tax Registration",
    description:
      "Registration on EmaraTax is mandatory whether or not you will owe anything. Above AED 375,000 of taxable income the rate is 9%. Below it, nothing. We also check whether Small Business Relief or Qualifying Free Zone Person status genuinely applies to you, rather than assuming it does."
  },
  {
    icon: <Calculator className="h-6 w-6" />,
    title: "VAT, Bookkeeping & Audit Support",
    description:
      "VAT registration at the AED 375,000 threshold, quarterly returns, and books kept month by month instead of reconstructed in a panic the week before a filing deadline. If your free zone requires audited accounts at renewal, yours will already be in order."
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Visas, Emirates ID & Golden Visa",
    description:
      "Establishment card, e-channel registration, entry permit, medical, biometrics, stamping. Investor and staff residence visas through GDRFA and ICP, plus a straight answer on whether you actually qualify for the 10-year Golden Visa or are being sold a maybe."
  },
  {
    icon: <FileCheck2 className="h-6 w-6" />,
    title: "PRO & Government Liaison",
    description:
      "Licence renewals, MoHRE labour files, immigration card amendments, attestation and notary work, and the Amer and Tasheel runs nobody wants to do twice. Handled by people who deal with these counters weekly and know which queue is which."
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Saudi Arabia Market Entry",
    description:
      "A MISA investor licence, commercial registration, Chamber membership, GOSI and a Saudization plan that survives contact with Nitaqat. Slower and heavier on documents than the UAE, so we scope Saudi as its own project rather than selling it as an add-on."
  }
];
