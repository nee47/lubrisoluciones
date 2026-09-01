import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contacto y Cotizaciones | LUBRISOLUCIONES Perú",
  description:
    "Comuníquese con LUBRISOLUCIONES. Asesoría técnica directa, cotizaciones inmediatas y venta de lubricantes industriales en Lima y todo el Perú.",
  alternates: {
    canonical: "https://lubrisoluciones.com/contacto",
  },
  openGraph: {
    title: "Contacto | LUBRISOLUCIONES Perú",
    description:
      "Atención directa a empresas para abastecimiento de lubricantes y grasas industriales en el Perú.",
    url: "https://lubrisoluciones.com/contacto",
    images: [
      {
        url: "/image.webp",
        alt: "Contacto LUBRISOLUCIONES Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | LUBRISOLUCIONES Perú",
    description: "Canales de atención y cotizaciones de lubricantes en el Perú.",
    images: ["/image.webp"],
  },
};

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/51961484883?text=${encodeURIComponent(
    "Hola LUBRISOLUCIONES, quisiera ponerme en contacto para una cotización de lubricantes."
  )}`;

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto LUBRISOLUCIONES",
    "url": "https://lubrisoluciones.com/contacto",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://lubrisoluciones.com/#organization",
      "name": "LUBRISOLUCIONES",
      "telephone": "+51961484883",
      "email": "lubrisoluciones@yahoo.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jr. Bulgaria 335",
        "addressLocality": "Los Olivos",
        "addressRegion": "Lima",
        "addressCountry": "PE",
      },
    },
  };

  return (
    <div className="bg-background text-on-background min-h-screen font-body selection:bg-primary/30 selection:text-primary pt-20 pb-16">
      {/* Header Section */}
      <section className="relative py-12 sm:py-16 overflow-hidden border-b border-white/10 bg-background">
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-r from-primary/10 via-black to-secondary/10 opacity-70" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-white mb-3">
            Atención Directa y <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Cotizaciones</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Comunícate con nuestros especialistas para cotizaciones inmediatas, consultas técnicas de lubricación y despacho en Lima y provincias.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column: Contact Channels */}
            <div className="md:col-span-7 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-surface/70 p-6 sm:p-8 backdrop-blur-sm space-y-6">
                <h2 className="text-lg sm:text-xl font-bold font-headline text-white border-b border-white/10 pb-3">
                  Canales de Comunicación
                </h2>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                      <span className="material-symbols-outlined text-xl">call</span>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
                        Teléfono / WhatsApp
                      </h3>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        +51 961 484 883
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 text-secondary">
                      <span className="material-symbols-outlined text-xl">mail</span>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-secondary">
                        Correo Electrónico
                      </h3>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        lubrisoluciones@yahoo.com
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 text-white/80">
                      <span className="material-symbols-outlined text-xl">location_on</span>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                        Oficina y Despacho
                      </h3>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        Jr. Bulgaria 335, Los Olivos, Lima, Perú
                      </p>
                    </div>
                  </div>

                  {/* RUC */}
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 text-white/80">
                      <span className="material-symbols-outlined text-xl">badge</span>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                        RUC Empresarial
                      </h3>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        20612884197
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct WhatsApp Conversion Card */}
            <div className="md:col-span-5 flex flex-col">
              <div className="rounded-2xl border border-primary/20 bg-surface-variant/40 p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between flex-grow relative overflow-hidden">
                <div className="absolute top-0 right-0 size-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-3 block">
                    support_agent
                  </span>
                  <h3 className="text-lg font-bold font-headline text-white mb-2">
                    Asesoría Técnica Inmediata
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-6">
                    ¿Requieres cotización para tu empresa o ficha técnica de un producto? Escríbenos directamente por WhatsApp y te atenderemos al instante.
                  </p>
                </div>

                <div className="relative z-10 space-y-3">
                  <a
                    id="btn-contacto-whatsapp-directo"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-primary px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dim active:scale-95"
                  >
                    <span>Abrir Chat de WhatsApp</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>

                  <p className="text-[11px] text-center text-on-surface-variant">
                    Horario: Lun - Sáb | 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script
        id="contact-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </div>
  );
}
