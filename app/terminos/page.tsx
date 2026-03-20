import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones - LUBRISOLUCIONES",
  description: "Términos y condiciones de uso de nuestros servicios y productos.",
};

export default function TerminosPage() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body selection:bg-primary/30 selection:text-primary pt-20">
      
      {/* Header section */}
      <section className="bg-black text-white py-24 px-6 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-x-0 bottom-0 top-0 bg-primary/5 opacity-60 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-surface text-secondary text-sm font-bold tracking-widest mb-6 font-label uppercase border border-white/10">
            Marco Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-headline tracking-tighter mb-6 text-balance text-white">
            Términos y <span className="text-primary italic">Condiciones</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-medium leading-relaxed">
            Normativas que regulan las operaciones y suministro de Lubrisoluciones. Actualizado el 19 de Marzo, 2026.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="glass-card rounded-[2rem] p-8 md:p-16 border border-white/5 shadow-2xl space-y-12">
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-white border-l-4 border-primary pl-4">
                1. Introducción y Alcance
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                El presente documento establece los términos y condiciones bajo los cuales LUBRISOLUCIONES (en adelante "la Empresa") presta sus servicios de asesoría y suministro de formulaciones de lubricación industrial a sus clientes corporativos ("el Cliente"). Al acceder a nuestros servicios o adquirir nuestros productos, usted acepta regirse por estas condiciones en su totalidad.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-white border-l-4 border-primary pl-4">
                2. Suministro y Especificaciones Técnicas
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Los productos suministrados cumplen estrictamente con las normativas ISO y parámetros técnicos detallados en sus respectivas hojas de seguridad (MSDS) y fichas técnicas. El Cliente es responsable de verificar la compatibilidad de nuestras formulaciones operativas con sus equipos y manuales de fabricante antes de la aplicación. La Empresa ofrece soporte técnico pero la decisión final de aplicación recae sobre los operadores del Cliente.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-white border-l-4 border-primary pl-4">
                3. Propiedad Intelectual
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Todo el contenido, diseños, diagramas de diagnóstico predictivo, metodologías exclusivas y materiales presentes en nuestro sitio web o entregados a través de reportes técnicos, son propiedad exclusiva de LUBRISOLUCIONES. Queda estrictamente prohibida la reproducción, distribución o ingeniería inversa sin autorización previa y por escrito.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-white border-l-4 border-primary pl-4">
                4. Limitación de Responsabilidad Operativa
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                LUBRISOLUCIONES no se hace responsable por paradas de planta, daños a maquinaria o lucro cesante ocasionados por la aplicación incorrecta de nuestros productos biomecánicos, mezclas incompatibles de lubricantes ejecutadas por terceros, o el incumplimiento de los planes de mantenimiento predictivo acordados en nuestros contratos de monitoreo tribológico.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-white border-l-4 border-primary pl-4">
                5. Entorno Contractual y Jurisdicción
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Cualquier discrepancia o disputa surgida de la interpretación o ejecución de los presentes términos será resuelta de primera mano por nuestro equipo de operaciones y, en última instancia, sometida a la jurisdicción de las leyes y los tribunales competentes en Lima, Perú.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Para solicitar modificaciones a contratos específicos o dudas sobre estas condiciones operacionales, inicie el enlace de comunicación con nuestro departamento legal y operativo.
              </p>
              <Link
                href="/contacto"
                className="bg-primary hover:bg-primary-dim text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 transition-colors text-sm uppercase tracking-widest"
              >
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
