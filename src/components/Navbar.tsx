import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import Logo from '@/components/Logo';

const navLinks = [
  { hash: '#services', label: 'Services' },
  { hash: '#how-it-works', label: 'How it works' },
  { hash: '#market-guide', label: 'Compare consultants' },
  { hash: '#pricing', label: 'Packages' },
  { hash: '#faq', label: 'FAQ' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // On the homepage these stay as bare hash links so the browser scrolls in
  // place. Anywhere else (the legal pages) they need the leading slash, or
  // they resolve against the current path and go nowhere.
  const isHome = pathname === '/';
  const to = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Over the ink hero the bar is transparent with light type; once scrolled it
  // becomes porcelain glass with ink type, as in the mockup.
  const solid = isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        solid
          ? 'bg-jg-porcelain/85 backdrop-blur-xl saturate-150 py-3 shadow-[0_12px_30px_-18px_rgba(10,18,32,0.35)] border-b border-white/60'
          : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href={isHome ? "#top" : "/"} aria-label={`${siteConfig.brandFull} home`}>
          <Logo variant={solid ? 'on-light' : 'on-dark'} />
        </a>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.hash}>
              <a
                href={to(link.hash)}
                className={`text-[0.92rem] font-medium transition-colors ${
                  solid ? 'text-jg-ink hover:text-jg-gold-deep' : 'text-white/90 hover:text-jg-gold-light'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center space-x-5">
          <a
            href={siteConfig.phoneHref}
            className={`inline-flex items-center text-xs tracking-wide transition-colors ${
              solid ? 'text-jg-ink-soft hover:text-jg-gold-deep' : 'text-white/75 hover:text-jg-gold-light'
            }`}
          >
            <Phone className="h-4 w-4 mr-2" />
            {siteConfig.phone}
          </a>
          <a href={to("#contact")}>
            <Button className="rounded-pill bg-gradient-to-r from-jg-gold-light via-jg-gold to-jg-gold-deep text-jg-ink font-bold text-[0.86rem] px-7 shadow-[0_8px_24px_-8px_rgba(139,78,32,0.6)] hover:brightness-110 hover:-translate-y-0.5 transition-all">
              Get in touch
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={solid ? 'lg:hidden text-jg-ink' : 'lg:hidden text-white'}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-jg-porcelain/95 backdrop-blur-xl absolute top-full left-0 w-full py-4 shadow-lg border-b border-jg-ink/10">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <li key={link.hash}>
                  <a
                    href={to(link.hash)}
                    className="text-jg-ink hover:text-jg-gold-deep transition-colors block py-2.5 border-b border-jg-ink/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 flex flex-col space-y-3">
                <a
                  href={siteConfig.phoneHref}
                  className="text-jg-ink-soft hover:text-jg-gold-deep transition-colors inline-flex items-center py-2 text-xs tracking-wide"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {siteConfig.phone}
                </a>
                <a href={to("#contact")} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full rounded-pill bg-gradient-to-r from-jg-gold-light via-jg-gold to-jg-gold-deep text-jg-ink font-bold shadow-[0_8px_24px_-8px_rgba(139,78,32,0.6)] hover:brightness-110">
                    Get in touch
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
