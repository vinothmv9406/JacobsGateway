import { ArrowRight, ArrowUpRight, BadgeCheck, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { heroStats, siteConfig } from '@/data/siteConfig';
import heroImage from '@/assets/hero-dubai-night.jpg';

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero hero-glow">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-jg-gold/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-jg-gold-light/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Woven sheen over the ink ground */}
      <div className="silk-overlay"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 animate-fade-in-left">
            {/* Mono tag with the mockup's blurred brass rule */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-[70px] h-[2px] bg-gradient-to-r from-jg-gold-light via-jg-gold to-jg-gold-deep blur-[1.5px] shadow-[0_0_16px_1px_rgba(246,223,176,0.6)]"></span>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-jg-porcelain/85">
                Business Setup &middot; UAE &amp; Saudi Arabia
              </span>
            </div>

            {/* Single H1 carrying the primary keyword */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-[1.06] text-white">
              Business Setup in Dubai &amp; Saudi Arabia,{' '}
              <em className="italic font-normal text-gradient-on-dark">handled end to end.</em>
            </h1>

            <p className="text-lg text-jg-gold-light/85 mb-11 max-w-lg leading-relaxed">
              An independent consultancy, not an agent for any one free zone. We work out
              whether you belong on the mainland, in a free zone or offshore, then handle
              the licence, the bank account, the visas and the tax registrations.
              Government fees and our fee, itemised separately, before you commit to
              anything.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              {/* White pill with brass icon badge, as per the mockup's primary CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-3.5 bg-white text-jg-ink rounded-pill pl-2 pr-7 py-2 font-semibold text-[0.95rem] shadow-[0_14px_30px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-transform duration-300"
              >
                <span className="h-[38px] w-[38px] rounded-circle bg-gradient-to-br from-jg-gold-light via-jg-gold to-jg-gold-deep flex items-center justify-center shrink-0">
                  <ArrowRight className="h-4 w-4 text-jg-ink" />
                </span>
                Free consultation
              </a>
              <a href="#market-guide">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-pill border-white/25 bg-transparent text-white hover:bg-white/5 hover:text-jg-gold-light py-6"
                >
                  Compare consultants
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
              {heroStats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-x-6">
                  {index > 0 && <div className="h-12 w-px bg-white/15"></div>}
                  <div>
                    <p className="text-2xl font-semibold text-gradient-on-dark">{stat.value}</p>
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.08em] text-white/50 mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 mt-16 lg:mt-0 animate-fade-in-right">
            <div className="relative max-w-md mx-auto animate-float">
              {/*
                Pexels stock (free for commercial use, no attribution required),
                cropped to 4:5 and bundled locally so the largest above-the-fold
                asset is not fetched from a third-party domain. Swap for the
                client's own photography when it is available, keeping the
                descriptive alt text for SEO.
              */}
              <img
                src={heroImage}
                alt={`The Burj Khalifa and Downtown Dubai at night, where ${siteConfig.brandFull} advises on mainland and free zone company formation`}
                width={448}
                height={560}
                loading="eager"
                fetchPriority="high"
                className="rounded-sm shadow-[0_50px_90px_-30px_rgba(10,18,32,0.7)] border border-jg-gold-light/15 w-full object-cover"
              />
              <div className="absolute -right-6 -bottom-6 bg-jg-ink/60 backdrop-blur-md rounded-sm p-4 border border-jg-gold-light/20 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-jg-emerald-soft/15 rounded-circle flex items-center justify-center">
                    <BadgeCheck className="h-6 w-6 text-jg-emerald-soft" />
                  </div>
                  <div>
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.1em] text-white/50">Foreign ownership</p>
                    <p className="text-lg font-semibold text-jg-emerald-soft">100%</p>
                  </div>
                </div>
              </div>
              <div className="absolute -left-6 -top-6 bg-jg-ink/60 backdrop-blur-md rounded-sm p-4 border border-jg-gold-light/20 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-jg-gold/15 rounded-circle flex items-center justify-center">
                    <Clock className="h-6 w-6 text-jg-gold-light" />
                  </div>
                  <div>
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.1em] text-white/50">Free zone licence</p>
                    <p className="text-lg font-semibold text-white">5–10 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
