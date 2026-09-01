import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Servicios de Lubricación y Mantenimiento Industrial | LUBRISOLUCIONES",
  description:
    "Servicios técnicos de lubricación de maquinaria, análisis de aceite usado, homologación de productos y logística industrial en Perú.",
  alternates: {
    canonical: "https://lubrisoluciones.com/servicios",
  },
  openGraph: {
    title: "Servicios Industriales | LUBRISOLUCIONES",
    description:
      "Soluciones integrales de lubricación y monitoreo para plantas industriales y maquinaria pesada en el Perú.",
    url: "https://lubrisoluciones.com/servicios",
    images: [
      {
        url: "/image.webp",
        alt: "Servicios LUBRISOLUCIONES Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios Industriales | LUBRISOLUCIONES",
    description: "Servicios de lubricación y mantenimiento para la industria en el Perú.",
    images: ["/image.webp"],
  },
};

const servicios = [
  {
    title: "Lubricación y Mantenimiento de Planta",
    iconName: "precision_manufacturing",
    description:
      "Aplicación y recambio de lubricantes, grasas de alta presión y fluidos especializados con rutinas programadas para maximizar la vida útil de sus equipos.",
    whatsappMessage: "Hola LUBRISOLUCIONES, deseo consultar sobre el servicio de lubricación y mantenimiento en planta.",
  },
  {
    title: "Análisis y Diagnóstico de Aceite Usado",
    iconName: "monitoring",
    description:
      "Monitoreo predictivo del estado del lubricante y detección temprana de partículas de desgaste para prevenir fallas mecánicas y paradas no programadas.",
    whatsappMessage: "Hola LUBRISOLUCIONES, deseo información sobre el servicio de análisis y diagnóstico de aceite usado.",
  },
  {
    title: "Homologación y Asesoría Técnica OEM",
    iconName: "verified",
    description:
      "Selección y equivalencia técnica de lubricantes según especificaciones del fabricante (OEM) y normas internacionales (ISO, API, DIN, NSF H1).",
    whatsappMessage: "Hola LUBRISOLUCIONES, requiero asesoría técnica para homologar lubricantes en mi maquinaria.",
  },
  {
    title: "Logística y Suministro Ininterrumpido",
    iconName: "local_shipping",
    description:
      "Abastecimiento estratégico de tambores, baldes y lubricantes especiales con entrega inmediata en almacén y despacho coordinado a nivel nacional.",
    whatsappMessage: "Hola LUBRISOLUCIONES, quisiera coordinar un pedido o suministro programado de lubricantes.",
  },
];

export default function ServiciosPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicios de Lubricación y Mantenimiento Industrial",
    "provider": {
      "@id": "https://lubrisoluciones.com/#organization",
    },
    "areaServed": {
      "@type": "Country",
      "name": "Perú",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catálogo de Servicios Técnicos",
      "itemListElement": servicios.map((serv) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": serv.title,
          "description": serv.description,
        },
      })),
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
            Servicios y Soporte <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Técnico Industrial</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Soluciones integrales de lubricación, monitoreo predictivo y asesoría de ingeniería para la industria peruana.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicios.map((servicio, index) => {
              const serviceWhatsappUrl = `https://wa.me/51961484883?text=${encodeURIComponent(servicio.whatsappMessage)}`;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-surface/70 p-6 sm:p-7 shadow-lg backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:border-white/25 hover:shadow-xl"
                >
                  <div>
                    {/* Icon */}
                    <span
                      className="material-symbols-outlined text-primary text-4xl mb-3 block"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {servicio.iconName}
                    </span>

                    {/* Title */}
                    <h2 className="text-base sm:text-lg font-bold font-headline text-white mb-2">
                      {servicio.title}
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                      {servicio.description}
                    </p>
                  </div>

                  {/* Action Link to WhatsApp */}
                  <div className="pt-4 border-t border-white/5">
                    <a
                      href={serviceWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-primary transition-colors"
                    >
                      <span>Consultar por este servicio</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Callout */}
          <div className="mt-12 rounded-2xl border border-primary/20 bg-surface-variant/40 p-6 sm:p-8 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-headline mb-1">
                ¿Requieres un plan de lubricación a la medida de tu planta?
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Coordinamos visitas técnicas y diagnósticos de campo en Lima y provincias.
              </p>
            </div>

            <a
              id="btn-servicios-contacto"
              href={`https://wa.me/51961484883?text=${encodeURIComponent(
                "Hola LUBRISOLUCIONES, quisiera coordinar una evaluación técnica para mi planta industrial."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dim active:scale-95"
            >
              <span>Solicitar Evaluación Técnica</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      <Script
        id="services-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </div>
  );
}
