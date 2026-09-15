
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { pricingPlans } from '@/data/pricingData';

/**
 * The template's monthly/annual switch is reused here as
 * "Year 1 (setup)" vs "Annual renewal", which is how business setup is
 * genuinely quoted. Layout and behaviour are unchanged.
 */
const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'setup' | 'renewal'>('setup');

  return (
    <section id="pricing" className="py-28 bg-jg-porcelain">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="eyebrow eyebrow-center mb-4">Packages</div>
          <h2 className="text-3xl md:text-[2.6rem] font-semibold mb-5 text-jg-ink leading-tight">
            Business setup costs, itemised
          </h2>
          <p className="text-jg-ink-soft max-w-2xl mx-auto mb-9 leading-relaxed">
            Every quote splits government charges from our advisory fee, so you can see
            which is which. Switch between what year one costs and what it takes to
            keep the licence alive after that.
          </p>

          <div className="inline-flex p-1 bg-jg-card border border-jg-ink/10 rounded-pill shadow-[0_10px_24px_-18px_rgba(10,18,32,0.4)]">
            <button
              className={`px-5 py-2 rounded-pill text-sm font-medium transition-colors ${
                billingCycle === 'setup'
                  ? 'bg-gradient-to-r from-jg-gold-light via-jg-gold to-jg-gold-deep text-jg-ink'
                  : 'text-jg-ink-soft hover:text-jg-ink'
              }`}
              onClick={() => setBillingCycle('setup')}
            >
              Year 1 (setup)
            </button>
            <button
              className={`px-5 py-2 rounded-pill text-sm font-medium transition-colors ${
                billingCycle === 'renewal'
                  ? 'bg-gradient-to-r from-jg-gold-light via-jg-gold to-jg-gold-deep text-jg-ink'
                  : 'text-jg-ink-soft hover:text-jg-ink'
              }`}
              onClick={() => setBillingCycle('renewal')}
            >
              Annual renewal
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-jg-card rounded-2xl overflow-hidden flex flex-col h-full animate-on-scroll transition-shadow duration-300 ${
                plan.highlighted
                  ? 'border-2 border-jg-gold relative shadow-[0_40px_70px_-35px_rgba(139,78,32,0.55)]'
                  : 'border-2 border-jg-ink/[0.08] shadow-[0_24px_50px_-30px_rgba(10,18,32,0.3)]'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rendered on every card, transparent unless highlighted, so all
                  three cards align at the top regardless of the badge. */}
              <div
                aria-hidden={!plan.highlighted}
                className={`text-center py-1.5 text-[0.66rem] uppercase tracking-[0.14em] font-medium ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-jg-gold-light via-jg-gold to-jg-gold-deep text-jg-ink'
                    : 'text-transparent select-none'
                }`}
              >
                Most Popular
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-3 text-jg-ink">{plan.name}</h3>
                <div className="mb-4 flex items-baseline flex-wrap gap-x-1.5">
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.1em] text-jg-ink-soft">
                    {plan.priceNote}
                  </span>
                  <span className="text-3xl md:text-[2.4rem] font-semibold text-gradient">
                    {billingCycle === 'setup' ? plan.price.setup : plan.price.renewal}
                  </span>
                  <span className="text-sm text-jg-ink-soft">
                    {billingCycle === 'setup' ? '/ first year' : '/ year'}
                  </span>
                </div>
                <p className="text-jg-ink-soft text-[0.95rem] leading-relaxed mb-7 md:min-h-[4.75rem]">{plan.description}</p>

                <a href="#contact">
                  <Button
                    className={`w-full mb-7 rounded-pill font-semibold ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-jg-gold-light via-jg-gold to-jg-gold-deep text-jg-ink shadow-[0_8px_24px_-8px_rgba(139,78,32,0.6)] hover:brightness-110'
                        : 'bg-jg-ink text-jg-porcelain hover:bg-jg-ink-2'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </a>

                <div>
                  <p className="text-[0.66rem] font-medium uppercase tracking-[0.12em] text-jg-gold-deep mb-4">
                    What&apos;s included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="h-[22px] w-[22px] rounded-circle bg-jg-emerald-soft text-jg-emerald flex items-center justify-center shrink-0 mt-0.5 mr-3">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-jg-ink-soft text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="max-w-3xl mx-auto mt-12 text-center text-xs text-jg-ink-soft/80 leading-relaxed">
          Indicative figures. What you actually pay depends on the jurisdiction, your
          activity, how many visas you need and the office that comes with them.
          Government charges are set by the relevant authority and change without much
          notice. You will have a written, itemised quote in hand before any money
          moves.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
