import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acerca de Nosotros | LUBRISOLUCIONES",
  description:
    "Especialistas en distribución técnica de lubricantes y grasas industriales para maquinaria pesada en Lima y todo el Perú.",
  alternates: {
    canonical: "https://lubrisoluciones.com/acerca",
  },
  openGraph: {
    title: "Acerca de LUBRISOLUCIONES",
    description:
      "Compromiso técnico, calidad y suministro ininterrumpido de lubricantes industriales en el Perú.",
    url: "https://lubrisoluciones.com/acerca",
    images: [
      {
        url: "/image.webp",
        alt: "Acerca de LUBRISOLUCIONES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acerca de LUBRISOLUCIONES",
    description: "Trayectoria y compromiso en lubricación industrial en el Perú.",
    images: ["/image.webp"],
  },
};

export default function AcercaPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Acerca de LUBRISOLUCIONES",
    "url": "https://lubrisoluciones.com/acerca",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://lubrisoluciones.com/#organization",
      "name": "LUBRISOLUCIONES",
      "description": "Especialistas en distribución técnica de lubricantes y grasas industriales en el Perú.",
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
            Ingeniería y Suministro de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Lubricantes</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Especialistas en optimizar la disponibilidad y vida útil de maquinaria industrial y pesada en todo el Perú.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-14">
            {/* Story / Trayectoria */}
            <div className="rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold font-headline text-white mb-4 tracking-tight">
                Nuestra <span className="text-secondary">Trayectoria</span>
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                <p>
                  En <strong className="text-white">LUBRISOLUCIONES</strong> nacimos con el propósito de optimizar los procesos de manufactura, transporte, minería, construcción y alimentos a través del suministro confiable de lubricantes industriales de alto rendimiento.
                </p>
                <p>
                  Combinamos productos formulados bajo estándares internacionales con asesoría técnica especializada, ayudando a las empresas peruanas a reducir tiempos de inactividad, evitar fallas catastróficas y maximizar el retorno de inversión de sus activos mecánicos.
                </p>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Misión */}
              <div className="rounded-2xl border border-primary/20 bg-surface-variant/40 p-6 sm:p-7 shadow-lg relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 size-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <span className="material-symbols-outlined text-primary text-4xl mb-3 block">
                  verified
                </span>
                <h3 className="text-lg font-bold font-headline text-white mb-2">
                  Nuestra Misión
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Garantizar el abastecimiento inmediato y continuo de lubricantes, grasas y fluidos de alta especificación técnica, respaldados por un soporte directo que proteja la operatividad de cada cliente.
                </p>
              </div>

              {/* Visión */}
              <div className="rounded-2xl border border-secondary/20 bg-surface-variant/40 p-6 sm:p-7 shadow-lg relative overflow-hidden backdrop-blur-sm">
                <div className="absolute bottom-0 right-0 size-32 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />
                <span className="material-symbols-outlined text-secondary text-4xl mb-3 block">
                  visibility
                </span>
                <h3 className="text-lg font-bold font-headline text-white mb-2">
                  Nuestra Visión
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Ser el socio estratégico de referencia en lubricación industrial en el Perú, reconocidos por la calidad de nuestros productos, rapidez logística y cercanía técnica con la industria nacional.
                </p>
              </div>
            </div>

            {/* Impact numbers */}
            <div className="rounded-2xl border border-white/10 bg-surface/50 p-6 sm:p-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Capacidad y Compromiso
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { tag: "15+", label: "Años de experiencia en el sector" },
                  { tag: "500+", label: "Empresas e industrias atendidas" },
                  { tag: "50+", label: "Líneas de lubricantes especializados" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-white/5 bg-black/40 text-left"
                  >
                    <span className="block text-3xl sm:text-4xl font-black font-headline text-white mb-1.5">
                      {stat.tag}
                    </span>
                    <span className="text-xs text-on-surface-variant font-medium leading-snug block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script
        id="about-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
    </div>
  );
}
