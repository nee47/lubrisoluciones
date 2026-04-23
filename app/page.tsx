import HeroSection from "../components/HeroSection";
import CoreServices from "../components/CoreServices";
import EnvironmentalCommitment from "../components/EnvironmentalCommitment";
import CTASection from "../components/CTASection";

import Script from "next/script";

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 selection:text-primary pt-20">
      <HeroSection />
      <CoreServices />
      <EnvironmentalCommitment />
      <CTASection />
      <Script id="local-business-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "LUBRISOLUCIONES",
            "image": "https://lubrisoluciones.devmotec.com/image.webp",
            "description": "Venta y distribución de lubricantes, aceites, y grasas industriales en Lima y provincias del Perú.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jr. Bulgaria 335",
              "addressLocality": "Los Olivos",
              "addressRegion": "Lima",
              "addressCountry": "PE"
            },
            "telephone": "+51961484883",
            "url": "https://lubrisoluciones.devmotec.com",
            "priceRange": "$$"
          }
        `}
      </Script>
    </div>
  );
}
