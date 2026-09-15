
import { Button } from "@/components/ui/button";
import { steps } from "../data/howItWorks";


const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-28 bg-jg-ink overflow-hidden">
      <div className="silk-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="eyebrow eyebrow-on-dark eyebrow-center mb-4">The process</div>
          <h2 className="text-3xl md:text-[2.6rem] font-semibold mb-5 text-jg-porcelain leading-tight">
            How business setup actually works
          </h2>
          <p className="text-jg-porcelain/65 leading-relaxed">
            Three stages, from a first conversation to a licensed company with a bank
            account and staff on visas. Including the parts that take longer than
            anyone would like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white/[0.04] backdrop-blur-sm border border-jg-gold-light/15 rounded-sm p-8 pt-10 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="absolute -top-4 left-8 bg-jg-ink border border-jg-gold/30 rounded-sm text-jg-gold-light text-sm font-semibold tracking-[0.1em] px-3 py-1.5">
                {step.number}
              </span>
              <div className="bg-jg-gold/15 rounded-circle w-14 h-14 flex items-center justify-center mb-6 text-jg-gold-light">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-jg-porcelain">{step.title}</h3>
              <p className="text-jg-porcelain/65 text-[0.96rem] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact">
            <Button
              size="lg"
              className="rounded-pill bg-gradient-to-r from-jg-gold-light via-jg-gold to-jg-gold-deep text-jg-ink font-bold px-9 shadow-[0_8px_24px_-8px_rgba(139,78,32,0.6)] hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              Book your structuring call
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
