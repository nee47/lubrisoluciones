import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Política de Cookies | LUBRISOLUCIONES",
  description:
    "Información transparente sobre el uso de cookies y tecnologías de seguimiento en el sitio web de LUBRISOLUCIONES.",
  alternates: {
    canonical: "https://lubrisoluciones.com/cookies",
  },
  openGraph: {
    title: "Política de Cookies | LUBRISOLUCIONES",
    description:
      "Conoce cómo utilizamos cookies esenciales y analíticas para ofrecerte una mejor experiencia.",
    url: "https://lubrisoluciones.com/cookies",
    images: [
      {
        url: "/image.webp",
        alt: "Política de Cookies LUBRISOLUCIONES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Cookies | LUBRISOLUCIONES",
    description: "Información sobre cookies y privacidad en LUBRISOLUCIONES.",
    images: ["/image.webp"],
  },
};

const cookieTypes = [
  {
    name: "Cookies Técnicas y Esenciales",
    description:
      "Son indispensables para el funcionamiento básico de la plataforma, como la navegación entre páginas, seguridad de sesión y almacenamiento de preferencias de consentimiento.",
    mandatory: true,
  },
  {
    name: "Cookies Analíticas y de Rendimiento",
    description:
      "Nos permiten cuantificar el número de usuarios y analizar de forma agregada y anónima cómo interactúan con el catálogo para mejorar la velocidad y relevancia de los contenidos (Google Analytics 4 / Google Tag Manager).",
    mandatory: false,
  },
  {
    name: "Cookies de Personalización",
    description:
      "Permiten recordar preferencias básicas del usuario para ofrecer una experiencia más fluida en visitas recurrentes.",
    mandatory: false,
  },
];

const cookiesTable = [
  {
    name: "_ga, _ga_*",
    provider: "Google Analytics",
    purpose: "Distinguir usuarios únicos y registrar métricas de interacción anónimas con el catálogo.",
    duration: "2 años",
  },
  {
    name: "lubrisoluciones_cookie_consent",
    provider: "LUBRISOLUCIONES",
    purpose: "Almacenar el estado de consentimiento de cookies elegido por el usuario.",
    duration: "Persistente (LocalStorage)",
  },
];

export default function CookiesPage() {
  const cookiePolicySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Política de Cookies de LUBRISOLUCIONES",
    "url": "https://lubrisoluciones.com/cookies",
    "description": "Política de uso de cookies y almacenamiento local de LUBRISOLUCIONES.",
    "publisher": {
      "@id": "https://lubrisoluciones.com/#organization",
    },
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16 font-body text-on-background selection:bg-primary/30 selection:text-primary">
      {/* Header Section */}
      <section className="relative py-12 sm:py-16 overflow-hidden border-b border-white/10 bg-background">
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-r from-primary/10 via-black to-secondary/10 opacity-70" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-surface text-secondary text-[11px] font-bold tracking-widest mb-3 font-label uppercase border border-white/10">
            Transparencia y Privacidad
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-white mb-3">
            Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Cookies</span>
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Información detallada sobre cómo y para qué utilizamos cookies en el portal web de LUBRISOLUCIONES.
          </p>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-surface/70 p-6 sm:p-10 shadow-xl backdrop-blur-md space-y-10 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            {/* 1. Definición */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold font-headline text-white border-l-4 border-primary pl-3">
                1. ¿Qué son las Cookies?
              </h2>
              <p>
                Una cookie es un pequeño archivo de texto que los sitios web almacenan en su navegador o dispositivo al visitarlos. Las cookies permiten que el sitio web reconozca su dispositivo, recuerde sus preferencias de navegación y analice de forma agregada cómo se utiliza el catálogo para optimizar su velocidad y rendimiento técnico.
              </p>
            </div>

            {/* 2. Tipos de Cookies */}
            <div className="space-y-4">
              <h2 className="text-base sm:text-lg font-bold font-headline text-white border-l-4 border-primary pl-3">
                2. Tipos de Cookies que Empleamos
              </h2>
              <div className="grid grid-cols-1 gap-3.5">
                {cookieTypes.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/5 bg-surface-variant/40 p-4"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-xs sm:text-sm font-bold text-white font-headline">
                        {item.name}
                      </h3>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          item.mandatory
                            ? "bg-primary/20 text-primary border border-primary/30"
                            : "bg-white/10 text-on-surface-variant"
                        }`}
                      >
                        {item.mandatory ? "Obligatoria" : "Opcional"}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Tabla de Cookies */}
            <div className="space-y-4">
              <h2 className="text-base sm:text-lg font-bold font-headline text-white border-l-4 border-primary pl-3">
                3. Detalle de Cookies Utilizadas
              </h2>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-white/10 bg-surface-variant/80 text-white font-semibold">
                      <th className="p-3">Cookie</th>
                      <th className="p-3">Proveedor</th>
                      <th className="p-3">Finalidad</th>
                      <th className="p-3">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-on-surface-variant">
                    {cookiesTable.map((cookie, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="p-3 font-mono text-white text-[11px]">{cookie.name}</td>
                        <td className="p-3 font-medium">{cookie.provider}</td>
                        <td className="p-3">{cookie.purpose}</td>
                        <td className="p-3 whitespace-nowrap">{cookie.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Gestión y Desactivación */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold font-headline text-white border-l-4 border-primary pl-3">
                4. ¿Cómo Administrar o Desactivar las Cookies?
              </h2>
              <p>
                Puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración de las opciones de su navegador web:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs">
                <li>
                  <strong className="text-white">Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.
                </li>
                <li>
                  <strong className="text-white">Mozilla Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio.
                </li>
                <li>
                  <strong className="text-white">Microsoft Edge:</strong> Configuración &gt; Permisos del sitio &gt; Cookies y datos almacenados.
                </li>
                <li>
                  <strong className="text-white">Apple Safari:</strong> Preferencias &gt; Privacidad &gt; Bloquear todas las cookies.
                </li>
              </ul>
              <p className="text-[11px] text-on-surface-variant/80">
                Nota: La desactivación de cookies técnicas esenciales puede limitar ciertas funcionalidades de navegación en el portal.
              </p>
            </div>

            {/* 5. Contacto y Actualizaciones */}
            <div className="space-y-3 border-t border-white/10 pt-6">
              <h2 className="text-base sm:text-lg font-bold font-headline text-white border-l-4 border-primary pl-3">
                5. Actualizaciones de la Política
              </h2>
              <p>
                LUBRISOLUCIONES puede modificar esta Política de Cookies en función de exigencias legislativas o para adaptar dicha política a las instrucciones dictadas por las autoridades de protección de datos personales.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-xs font-bold text-white transition-all hover:bg-primary-dim"
                >
                  <span>Consultas de Privacidad</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <Link
                  href="/terminos"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-surface-variant/60 px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-surface-variant"
                >
                  <span>Ver Términos y Condiciones</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script
        id="cookie-policy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookiePolicySchema) }}
      />
    </div>
  );
}
