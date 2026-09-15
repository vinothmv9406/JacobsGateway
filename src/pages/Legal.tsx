import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { LegalDoc } from '@/data/legalContent';
import { legalDocs } from '@/data/legalContent';

interface LegalProps {
  doc: LegalDoc;
}

/**
 * Shared layout for Terms, Privacy and Cookies.
 *
 * Uses the same navbar and footer as the homepage. The ink title block gives
 * the fixed navbar a dark ground to sit on in its transparent state, matching
 * how it reads over the hero.
 */
const Legal = ({ doc }: LegalProps) => {
  useEffect(() => {
    document.title = doc.metaTitle;

    // Keep the meta description in step with the document being viewed.
    const meta = document.querySelector('meta[name="description"]');
    const previous = meta?.getAttribute('content') ?? null;
    meta?.setAttribute('content', doc.metaDescription);

    window.scrollTo(0, 0);

    return () => {
      if (previous !== null) meta?.setAttribute('content', previous);
    };
  }, [doc]);

  const others = legalDocs.filter((d) => d.slug !== doc.slug);

  return (
    <div className="min-h-screen overflow-x-hidden bg-jg-porcelain">
      <Navbar />

      {/* Title block. Top padding clears the fixed navbar. */}
      <header className="relative bg-gradient-hero overflow-hidden pt-36 pb-16 md:pt-40 md:pb-20">
        <div className="silk-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="eyebrow eyebrow-on-dark mb-5">Legal</div>
            <h1 className="text-3xl md:text-[2.8rem] font-semibold text-jg-porcelain leading-tight mb-5">
              {doc.title}
            </h1>
            <p className="text-jg-porcelain/70 text-lg leading-relaxed mb-6">{doc.intro}</p>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-jg-gold-light">
              Last updated {doc.lastUpdated}
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl">
            {doc.sections.map((section, index) => (
              <section key={index} className="mb-12 last:mb-0">
                <h2 className="text-xl md:text-2xl font-semibold text-jg-ink mb-4">
                  {section.heading}
                </h2>

                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-jg-ink-soft leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="mt-4 space-y-2.5">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start text-jg-ink-soft leading-relaxed">
                        <span className="mt-[0.6rem] mr-3 h-1.5 w-1.5 rounded-circle bg-jg-gold shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Cross-links to the sibling documents */}
            <div className="mt-16 pt-8 border-t border-jg-ink/10">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-jg-gold-deep mb-4">
                Also worth reading
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {others.map((other) => (
                  <a
                    key={other.slug}
                    href={`/${other.slug}`}
                    className="text-jg-ink hover:text-jg-gold-deep underline underline-offset-4 decoration-jg-ink/20 hover:decoration-jg-gold-deep transition-colors"
                  >
                    {other.title}
                  </a>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
