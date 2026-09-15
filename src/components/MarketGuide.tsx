import { Scale } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import {
  providers,
  comparisonRows,
  selectionCriteria,
} from '../data/providersData';

/**
 * Impartial market guide section.
 *
 * Rendered on ink so it reads as an editorial insert rather than another
 * sales block, and so the long porcelain run through pricing gets a break.
 */
const MarketGuide = () => {
  return (
    <section id="market-guide" className="relative py-28 bg-jg-ink overflow-hidden">
      <div className="silk-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/[0.05] backdrop-blur-sm border border-jg-gold-light/20 rounded-pill px-4 py-1.5 mb-6">
            <Scale className="h-3.5 w-3.5 text-jg-gold-light mr-2" />
            <span className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-jg-porcelain/80">
              Independent market guide
            </span>
          </div>
          <h2 className="text-3xl md:text-[2.6rem] font-semibold mb-5 text-jg-porcelain leading-tight">
            UAE business setup consultants, compared
          </h2>
          <p className="text-jg-porcelain/65 max-w-3xl mx-auto leading-relaxed">
            Three things decide which consultancy suits you: the jurisdiction you need,
            whether you want accounting and tax handled after formation, and what you
            are willing to spend. Below is a fair summary of how the best-known firms in
            this market position themselves. Read it before you sign with anyone,
            ourselves included.
          </p>
        </div>

        {/* What actually decides the choice */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 mb-20">
          {selectionCriteria.map((criterion, index) => (
            <div
              key={index}
              className="bg-white/[0.04] backdrop-blur-sm border border-jg-gold-light/15 rounded-sm p-7 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-3 text-jg-porcelain">
                {criterion.title}
              </h3>
              <p className="text-jg-porcelain/60 text-sm leading-relaxed">
                {criterion.description}
              </p>
            </div>
          ))}
        </div>

        {/* The ten providers */}
        <h3 className="text-2xl font-semibold text-jg-porcelain text-center mb-10">
          Ten established UAE setup specialists
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-white/[0.04] backdrop-blur-sm border border-jg-gold-light/15 rounded-sm p-6 hover:bg-white/[0.07] hover:border-jg-gold/30 transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h4 className="text-lg font-semibold text-jg-porcelain">{provider.name}</h4>
                <span className="shrink-0 text-[0.6rem] font-medium uppercase tracking-[0.1em] text-jg-gold-light bg-jg-gold/10 border border-jg-gold/25 rounded-pill px-2.5 py-1">
                  {provider.focus}
                </span>
              </div>
              <p className="text-jg-porcelain/60 text-sm leading-relaxed">
                {provider.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <h3 className="text-2xl font-semibold text-jg-porcelain text-center mb-10">
          Key comparison points
        </h3>
        <div className="max-w-5xl mx-auto bg-white/[0.04] backdrop-blur-sm border border-jg-gold-light/15 rounded-sm overflow-hidden animate-on-scroll">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <caption className="sr-only">
                Comparison of leading UAE business setup consultancies by focus
                area, typical entry route and best-suited client
              </caption>
              <thead>
                <tr className="border-b border-jg-gold-light/20">
                  <th scope="col" className="px-6 py-4 text-[0.66rem] uppercase tracking-[0.12em] font-medium text-jg-gold-light">
                    Provider
                  </th>
                  <th scope="col" className="px-6 py-4 text-[0.66rem] uppercase tracking-[0.12em] font-medium text-jg-gold-light">
                    Primary focus area
                  </th>
                  <th scope="col" className="px-6 py-4 text-[0.66rem] uppercase tracking-[0.12em] font-medium text-jg-gold-light">
                    Typical entry route
                  </th>
                  <th scope="col" className="px-6 py-4 text-[0.66rem] uppercase tracking-[0.12em] font-medium text-jg-gold-light">
                    Best suited for
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/[0.06] last:border-0 hover:bg-white/[0.04] transition-colors"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 text-sm font-medium text-jg-porcelain whitespace-nowrap"
                    >
                      {row.provider}
                    </th>
                    <td className="px-6 py-4 text-sm text-jg-porcelain/60">{row.focusArea}</td>
                    <td className="px-6 py-4 text-sm text-jg-porcelain/60">{row.entryRoute}</td>
                    <td className="px-6 py-4 text-sm text-jg-porcelain/60">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="max-w-5xl mx-auto mt-6 text-xs text-jg-porcelain/40 leading-relaxed">
          Independent summary compiled from publicly available positioning and
          intended as general guidance only. {siteConfig.brandFull} is not affiliated
          with, endorsed by, or acting as an agent for any company listed above. All
          company names and trade marks remain the property of their respective
          owners. Service offerings and pricing change — verify current details
          directly with any provider you are considering.
        </p>

        {/* Where we fit */}
        <div className="max-w-3xl mx-auto mt-20 text-center animate-on-scroll">
          <h3 className="text-2xl font-semibold text-jg-porcelain mb-4">
            So where does {siteConfig.brandFull} fit?
          </h3>
          <p className="text-jg-porcelain/65 leading-relaxed">
            We hold no agency agreement with any free zone, so nothing in our
            recommendation is driven by a commission you cannot see. You get the
            reasoning in writing, with government charges and our fee in separate
            columns, covering both the UAE and Saudi Arabia. If one of the firms above
            genuinely suits your situation better than we do, we will say so on the
            call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketGuide;
