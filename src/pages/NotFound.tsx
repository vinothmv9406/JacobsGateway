import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { LogoMark } from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `Page not found | ${siteConfig.brandFull}`;
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero hero-glow px-4">
      <div className="silk-overlay"></div>
      <div className="text-center relative z-10 max-w-md">
        <LogoMark className="h-14 w-14 mx-auto mb-8 text-jg-gold-light" />
        <p className="text-7xl md:text-8xl font-medium text-gradient-on-dark mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-semibold text-jg-porcelain mb-4">
          This page has moved on
        </h1>
        <p className="text-jg-porcelain/60 mb-9 leading-relaxed">
          The page you are looking for does not exist. If you were researching
          business setup in Dubai or Saudi Arabia, everything you need is on our
          homepage.
        </p>
        <a href="/">
          <Button
            size="lg"
            className="rounded-pill bg-gradient-to-r from-jg-gold-light via-jg-gold to-jg-gold-deep text-jg-ink font-bold px-9 shadow-[0_8px_24px_-8px_rgba(139,78,32,0.6)] hover:brightness-110"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to {siteConfig.brandFull}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
