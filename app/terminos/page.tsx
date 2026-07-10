import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones - LUBRISOLUCIONES",
  description: "Términos y condiciones de uso de nuestros servicios y productos.",
};

const purchaseSteps = [
  {
    title: "Cotización",
    text: "El proceso inicia con la emisión de una cotización formal del producto requerido.",
  },
  {
    title: "Facturación",
    text: "Una vez confirmada la compra, emitimos la factura a nombre de la empresa compradora.",
  },
  {
    title: "Pago",
    text: "Se comparte la cuenta bancaria única del BCP a nombre de Lubricantes Especiales del Perú S.A.C. para realizar el pago correspondiente.",
  },
  {
    title: "Entrega",
    text: "Confirmado el pago, se coordina la entrega en almacén o el envío según lo acordado en la cotización.",
  },
];

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-background pt-20 font-body text-on-background selection:bg-primary/30 selection:text-primary">
      <section className="relative overflow-hidden border-b border-white/5 bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-x-0 bottom-0 top-0 bg-primary/5 opacity-60 mix-blend-overlay" />
          <div className="pointer-events-none absolute right-0 top-0 size-[600px] rounded-full bg-secondary/10 blur-[150px]" />
        </div>
        <div className="container relative z-10 mx-auto max-w-4xl">
          <span className="mb-6 inline-block rounded-full border border-white/10 bg-surface px-4 py-1 text-sm font-bold uppercase tracking-widest text-secondary font-label">
            Marco Legal
          </span>
          <h1 className="mb-6 text-4xl font-black tracking-tighter text-white text-balance font-headline md:text-6xl">
            Términos y <span className="text-primary italic">Condiciones</span>
          </h1>
          <p className="text-xl font-medium leading-relaxed text-on-surface-variant">
            Normativas que regulan las operaciones y el suministro de LUBRISOLUCIONES. Actualizado el 10 de julio de 2026.
          </p>
        </div>
      </section>

      <section className="bg-surface px-6 py-24">
        <div className="container mx-auto max-w-4xl px-0 lg:px-2">
          <div className="glass-card space-y-12 rounded-[2rem] border border-white/5 p-8 shadow-2xl md:p-16">
            <div className="space-y-4">
              <h2 className="border-l-4 border-primary pl-4 text-2xl font-bold text-white font-headline">1. Introducción y Alcance</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                El presente documento establece los términos y condiciones bajo los cuales LUBRISOLUCIONES (en adelante, “la Empresa”) presta sus servicios de asesoría y suministro de lubricación industrial a sus clientes corporativos (en adelante, “el Cliente”). Al acceder a nuestros servicios o adquirir nuestros productos, el Cliente acepta regirse por estas condiciones.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="border-l-4 border-primary pl-4 text-2xl font-bold text-white font-headline">2. Suministro y Especificaciones Técnicas</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Los productos suministrados cumplen con las especificaciones técnicas detalladas en sus respectivas fichas y hojas de seguridad. El Cliente es responsable de verificar la compatibilidad de los productos con sus equipos y manuales de fabricante antes de la aplicación. La Empresa ofrece soporte técnico, pero la decisión final de aplicación recae sobre los operadores del Cliente.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="border-l-4 border-primary pl-4 text-2xl font-bold text-white font-headline">3. Propiedad Intelectual</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Todo el contenido, diseños, diagramas, metodologías y materiales presentes en nuestro sitio web o entregados a través de reportes técnicos son propiedad de LUBRISOLUCIONES. Queda prohibida su reproducción, distribución o ingeniería inversa sin autorización previa y por escrito.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="border-l-4 border-primary pl-4 text-2xl font-bold text-white font-headline">4. Limitación de Responsabilidad Operativa</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                LUBRISOLUCIONES no se hace responsable por paradas de planta, daños a maquinaria o lucro cesante ocasionados por la aplicación incorrecta de nuestros productos, mezclas incompatibles ejecutadas por terceros o el incumplimiento de los planes de mantenimiento acordados.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="border-l-4 border-primary pl-4 text-2xl font-bold text-white font-headline">5. Entorno Contractual y Jurisdicción</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Cualquier discrepancia o disputa surgida de la interpretación o ejecución de los presentes términos será resuelta inicialmente por nuestro equipo de operaciones y, en última instancia, sometida a la jurisdicción de las leyes y los tribunales competentes en Lima, Perú.
              </p>
            </div>

            <div className="space-y-8 border-t border-white/10 pt-12">
              <div>
                <h2 className="border-l-4 border-primary pl-4 text-2xl font-bold text-white font-headline">6. Proceso de Compra</h2>
                <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
                  Toda compra de productos se gestiona siguiendo las etapas que se detallan a continuación. La confirmación del pedido implica la aceptación de este flujo operativo.
                </p>
              </div>
              <ol className="grid gap-6 md:grid-cols-2">
                {purchaseSteps.map((step, index) => (
                  <li key={step.title} className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-black text-white">{index + 1}</span>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="leading-relaxed text-on-surface-variant">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="mb-6 text-lg leading-relaxed text-on-surface-variant">
                Para solicitar modificaciones a contratos específicos o resolver dudas sobre estas condiciones operativas, comuníquese con nuestro departamento legal y operativo.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary-dim">
                Canal de Contacto
                <span className="material-symbols-outlined">chevron_right</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
