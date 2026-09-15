
import { ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/siteConfig';

const CTA = () => {
  return (
    <section id="contact" className="py-28 bg-jg-porcelain">
      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto rounded-sm overflow-hidden px-6 py-16 md:px-16 md:py-24 text-center bg-gradient-to-br from-jg-ink via-jg-ink-2 to-jg-ink">
          {/* Brass bloom + woven sheen, matching the hero treatment */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-jg-gold/15 rounded-circle filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-jg-gold-deep/20 rounded-circle filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          </div>
          <div className="silk-overlay"></div>

          <div className="relative z-10">
            <div className="eyebrow eyebrow-on-dark eyebrow-center mb-6 animate-fade-in">
              Ready when you are
            </div>

            <h2 className="text-3xl md:text-[2.8rem] font-semibold mb-6 text-jg-porcelain leading-tight max-w-2xl mx-auto animate-fade-in">
              Set up your company in the UAE or Saudi Arabia
            </h2>

            <p className="text-jg-porcelain/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Thirty minutes on the phone will tell you which jurisdiction fits, what the
              whole thing costs and how long it takes. No charge, and no obligation at
              the end of it.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {/* White pill with brass icon badge, matching the hero's primary CTA */}
              <a
                href={siteConfig.emailHref}
                className="inline-flex items-center gap-3.5 bg-white text-jg-ink rounded-pill pl-2 pr-7 py-2 font-semibold text-[0.95rem] shadow-[0_14px_30px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-transform duration-300"
              >
                <span className="h-[38px] w-[38px] rounded-circle bg-gradient-to-br from-jg-gold-light via-jg-gold to-jg-gold-deep flex items-center justify-center shrink-0">
                  <ArrowRight className="h-4 w-4 text-jg-ink" />
                </span>
                Book a free consultation
              </a>
              <a href={siteConfig.phoneHref}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-pill border-white/25 bg-transparent text-white hover:bg-white/5 hover:text-jg-gold-light py-6"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {siteConfig.phone}
                </Button>
              </a>
            </div>

            <div className="mt-12 pt-9 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a href={siteConfig.phoneHref} className="flex items-center justify-center text-jg-porcelain/60 hover:text-jg-gold-light transition-colors">
                <Phone className="h-4 w-4 mr-2 shrink-0" />
                {siteConfig.phone}
              </a>
              <a href={siteConfig.emailHref} className="flex items-center justify-center text-jg-porcelain/60 hover:text-jg-gold-light transition-colors break-all">
                <Mail className="h-4 w-4 mr-2 shrink-0" />
                {siteConfig.email}
              </a>
              <p className="flex items-center justify-center text-jg-porcelain/60">
                <Clock className="h-4 w-4 mr-2 shrink-0" />
                {siteConfig.officeHours}
              </p>
            </div>

            <p className="mt-7 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-jg-porcelain/40 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              No obligation &middot; No charge for the initial consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
