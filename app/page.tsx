import type { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import CoreServices from "../components/CoreServices";
import EnvironmentalCommitment from "../components/EnvironmentalCommitment";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LUBRISOLUCIONES | Lubricantes y Grasas Industriales en Perú",
  description:
    "Distribución técnica de lubricantes, aceites sintéticos, y grasas de extrema presión para maquinaria pesada e industrias en Lima y provincias del Perú.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LUBRISOLUCIONES | Lubricantes y Grasas Industriales en Perú",
    description:
      "Venta y asesoría técnica en lubricantes para compresores, sistemas hidráulicos y maquinaria en todo el Perú.",
    url: "https://lubrisoluciones.com",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://lubrisoluciones.com/#organization",
        "name": "LUBRISOLUCIONES",
        "legalName": "Lubricantes Especiales del Perú S.A.C.",
        "url": "https://lubrisoluciones.com",
        "logo": "https://lubrisoluciones.com/logo.jpg",
        "image": "https://lubrisoluciones.com/image.webp",
        "description":
          "Empresa especializada en la distribución, comercialización y asesoría técnica de lubricantes y grasas industriales en el Perú.",
        "telephone": "+51961484883",
        "email": "lubrisoluciones@yahoo.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jr. Bulgaria 335",
          "addressLocality": "Los Olivos",
          "addressRegion": "Lima",
          "postalCode": "15306",
          "addressCountry": "PE",
        },
        "taxID": "20612884197",
        "areaServed": {
          "@type": "Country",
          "name": "Perú",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://lubrisoluciones.com/#localbusiness",
        "name": "LUBRISOLUCIONES",
        "image": "https://lubrisoluciones.com/image.webp",
        "parentOrganization": {
          "@id": "https://lubrisoluciones.com/#organization",
        },
        "telephone": "+51961484883",
        "url": "https://lubrisoluciones.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jr. Bulgaria 335",
          "addressLocality": "Los Olivos",
          "addressRegion": "Lima",
          "addressCountry": "PE",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -11.9922,
          "longitude": -77.0706,
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            "opens": "08:00",
            "closes": "18:00",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://lubrisoluciones.com/#website",
        "url": "https://lubrisoluciones.com",
        "name": "LUBRISOLUCIONES",
        "publisher": {
          "@id": "https://lubrisoluciones.com/#organization",
        },
        "inLanguage": "es-PE",
      },
    ],
  };

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 selection:text-primary pt-20">
      <HeroSection />
      <CoreServices />
      <EnvironmentalCommitment />
      <FAQSection />
      <CTASection />

      <Script
        id="home-graph-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
