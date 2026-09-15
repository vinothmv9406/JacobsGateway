import React from "react";
import { Search, FileText, Plane } from "lucide-react";

/**
 * Three-step engagement process. The grid is md:grid-cols-3, so keep this
 * at exactly three items unless the layout is changed too.
 *
 * Written to set expectations honestly, including the slow parts. Promising
 * a bank account in days is what every other site does, and clients find out
 * within a fortnight that it was not true.
 */
export const steps = [
  {
    number: "01",
    icon: <Search className="h-6 w-6" />,
    title: "Structuring call",
    description:
      "Thirty minutes, no charge, and not a pitch. We go through what you sell, who buys it, how many people you need on visas and where the money comes from. You leave with a jurisdiction recommendation and a written cost breakdown that separates government fees from ours."
  },
  {
    number: "02",
    icon: <FileText className="h-6 w-6" />,
    title: "Licence issued",
    description:
      "Trade name reservation, initial approval, shareholder documents and MoA, office or flexi-desk, then the licence itself. Most free zone licences land inside 5 to 10 working days once your passport copies and approvals are clean. Mainland runs longer because the tenancy has to be registered first."
  },
  {
    number: "03",
    icon: <Plane className="h-6 w-6" />,
    title: "Banking, visas, compliance",
    description:
      "Establishment card and e-channel first, because visas depend on them. Then medicals, Emirates ID and stamping. Banking runs in parallel and is the slowest part of any setup. We finish by registering you for corporate tax and, if you cross the threshold, VAT."
  }
];
