
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '@/data/siteConfig';
import Logo from '@/components/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();

  // Bare hash on the homepage so it scrolls in place; leading slash elsewhere.
  const isHome = pathname === '/';
  const to = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <footer className="relative bg-jg-ink pt-20 pb-8 overflow-hidden">
      <div className="silk-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          <div className="lg:col-span-2">
            <Logo variant="on-dark" className="mb-5" />
            <p className="text-jg-porcelain/60 mb-7 max-w-xs text-[0.92rem] leading-relaxed">
              Independent company formation consultants based on Sheikh Zayed Road, working
              across the UAE and Saudi Arabia. Licensing, banking, visas, tax, and the
              compliance that follows.
            </p>

            {/* NAP block — name, address, phone. Keep consistent with Google Business Profile. */}
            <address className="not-italic space-y-3 text-sm mb-7">
              <p className="flex items-start text-jg-porcelain/60">
                <MapPin className="h-4 w-4 mr-2.5 mt-0.5 shrink-0 text-jg-gold-light" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.country}
                </span>
              </p>
              <p className="flex items-center text-jg-porcelain/60">
                <Phone className="h-4 w-4 mr-2.5 shrink-0 text-jg-gold-light" />
                <a href={siteConfig.phoneHref} className="hover:text-jg-gold-light transition-colors">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-center text-jg-porcelain/60">
                <MessageCircle className="h-4 w-4 mr-2.5 shrink-0 text-jg-gold-light" />
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-jg-gold-light transition-colors"
                >
                  WhatsApp
                </a>
              </p>
              <p className="flex items-center text-jg-porcelain/60">
                <Mail className="h-4 w-4 mr-2.5 shrink-0 text-jg-gold-light" />
                <a href={siteConfig.emailHref} className="hover:text-jg-gold-light transition-colors break-all">
                  {siteConfig.email}
                </a>
              </p>
            </address>

            <div className="flex space-x-5">
              {/* [REPLACE] social URLs */}
              <a href="#!" className="text-jg-porcelain/50 hover:text-jg-gold-light transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#!" className="text-jg-porcelain/50 hover:text-jg-gold-light transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#!" className="text-jg-porcelain/50 hover:text-jg-gold-light transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#!" className="text-jg-porcelain/50 hover:text-jg-gold-light transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-jg-porcelain mb-5">Services</h5>
            <ul className="space-y-3 text-[0.9rem]">
              <li><a href={to('#services')} className="text-jg-porcelain/60 hover:text-jg-gold-light transition-colors">Mainland company formation</a></li>
              <li><a href={to('#services')} className="text-jg-porcelain/60 hover:text-jg-gold-light transition-colors">Free zone company setup</a></li>
              <li><a href={to('#services')} className="text-jg-porcelain/60 hover:text-jg-gold-light transition-colors">Offshore &amp; holding structures</a></li>
              <li><a href={to('#services')} className="text-jg-porcelain/60 hover:text-jg-gold-light transition-colors">Corporate bank accounts</a></li>
              <li><a href={to('#services')} className="text-jg-porcelain/60 hover:text-jg-gold-light transition-colors">Corporate tax &amp; VAT</a></li>
              <li><a href={to('#services')} className="text-jg-porcelain/60 hover:text-jg-gold-light transition-colors">Visas &amp; PRO services</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-jg-porcelain mb-5">Jurisdictions</h5>
            <ul className="space-y-3 text-[0.9rem]">
              <li><span className="text-jg-porcelain/60">Dubai Mainland (DET)</span></li>
              <li><span className="text-jg-porcelain/60">DMCC &amp; IFZA</span></li>
              <li><span className="text-jg-porcelain/60">Meydan &amp; SHAMS</span></li>
              <li><span className="text-jg-porcelain/60">RAKEZ &amp; RAK ICC</span></li>
              <li><span className="text-jg-porcelain/60">ADGM &amp; DIFC</span></li>
              <li><span className="text-jg-porcelain/60">Saudi Arabia (MISA)</span></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-jg-porcelain mb-5">Company</h5>
            <ul className="space-y-3 text-[0.9rem]">
              <li><a href={to('#market-guide')} className="text-jg-porcelain/60 hover:text-jg-gold-light transition-colors">Compare consultants</a></li>
              <li><a href={to('#how-it-works')} className="text-jg-porcelain/60 hover:text-jg-gold-light transition-colors">How it works</a></li>
              <li><a href={to('#pricing')} className="text-jg-porcelain/60 hover:text-jg-gold-light transition-colors">Packages &amp; pricing</a></li>
              <li><a href={to('#faq')} className="text-jg-porcelain/60 hover:text-jg-gold-light transition-colors">FAQ</a></li>
              <li><a href={to('#contact')} className="text-jg-porcelain/60 hover:text-jg-gold-light transition-colors">Contact us</a></li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-jg-porcelain/35 leading-relaxed border-t border-white/10 pt-7 mb-7">
          The information on this website is general guidance on company formation in
          the UAE and Saudi Arabia and does not constitute legal, tax or financial
          advice. Regulations, government fees and thresholds change. Please obtain
          advice specific to your circumstances before acting.
        </p>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-jg-porcelain/50 text-sm text-center md:text-left">
              &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/terms" className="text-jg-porcelain/50 hover:text-jg-gold-light text-sm transition-colors">Terms of Service</a>
              <a href="/privacy" className="text-jg-porcelain/50 hover:text-jg-gold-light text-sm transition-colors">Privacy Policy</a>
              <a href="/cookies" className="text-jg-porcelain/50 hover:text-jg-gold-light text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
