export const metadata = {
  title: "Acerca - LUBRISOLUCIONES",
  description:
    "Nuestra historia, misión y visión como expertos en la matriz energética y lubricación.",
};

export default function AcercaPage() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body selection:bg-primary/30 selection:text-primary">
      {/* High impact hero */}
      <section className="bg-black text-white py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh] border-b border-white/5 pt-40">
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-tr from-black via-primary-container/30 to-black opacity-90 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-surface text-secondary text-sm font-bold tracking-widest mb-6 font-label uppercase border border-white/10">
            Nuestra Historia
          </span>
          <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-6 text-balance text-white">
            Ingeniería de <span className="text-primary italic">Precisión</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-3xl mx-auto font-medium leading-relaxed text-balance">
            Un legado de innovación termodinámica, calidad y servicio técnico
            bio-digital que potencia a la industria moderna.
          </p>
        </div>

        {/* Abstract shapes */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      </section>

      <section className="py-32 bg-surface relative">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl relative z-10">
          <div className="space-y-24">
            {/* Story section */}
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold font-headline text-white mb-10 tracking-tight">
                Evolución
                <span className="text-secondary"> Operativa</span>
              </h2>
              <div className="space-y-6 text-on-surface-variant text-xl leading-relaxed text-balance">
                <p>
                  Lubrisoluciones nació con el propósito de optimizar los
                  procesos de manufactura, transporte y minería a través del
                  suministro continuo de lubricantes y fluidos cinéticos de la
                  más alta especificación. Hemos centrado nuestro enfoque
                  estricto en la prolongación de la operatividad de los activos
                  y la mitigación del impacto ambiental.
                </p>
                <p>
                  Desde nuestra fundación, hemos construido una arquitectura
                  logística y técnica de alto desempeño. Al integrar a
                  ingenieros de campo con tecnologías de monitoreo en tiempo
                  real, garantizamos las especificaciones ISO que requieren las
                  dinámicas maquinarias del futuro.
                </p>
              </div>
            </div>

            {/* Mission & Vision (Glass Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-surface-variant p-12 rounded-[2rem] border border-primary/20 shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <span
                    className="material-symbols-outlined text-primary text-6xl mb-6 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    crisis_alert
                  </span>
                  <h3 className="text-3xl font-black font-headline text-white mb-6 uppercase tracking-tight">
                    El Mandato
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    Asegurar un suministro inquebrantable de formulaciones de
                    alto octanaje y asesoramiento técnico integral, superando
                    las expectativas operacionales y resguardando los activos
                    termomecánicos de nuestros socios.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-container to-black p-12 rounded-[2rem] border border-secondary/20 shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute inset-0 kinetic-gradient mix-blend-overlay opacity-20"></div>
                <div className="relative z-10">
                  <span
                    className="material-symbols-outlined text-secondary text-6xl mb-6 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    visibility
                  </span>
                  <h3 className="text-3xl font-black font-headline text-white mb-6 uppercase tracking-tight">
                    La Perspectiva
                  </h3>
                  <p className="text-on-primary-container/80 leading-relaxed text-lg">
                    Posicionarnos como la arquitectura base indiscutible en
                    servicios de bio-lubricación industrial, reconocidos por
                    nuestra capacidad técnica de innovación continua y vocación
                    regenerativa.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact numbers */}
            <div className="pt-12 border-t border-white/5">
              <h3 className="text-xl font-bold font-label uppercase tracking-widest text-primary mb-12 border-l-4 border-primary pl-4">
                Impacto Medible
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { tag: "15+", label: "Años de Experiencia en la Red" },
                  { tag: "500+", label: "Ecosistemas Industriales" },
                  { tag: "50+", label: "Fluidos Especializados" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="py-10 px-8 rounded-[2rem] border border-white/5 bg-surface-variant/50 hover:bg-surface-variant transition-colors duration-300"
                  >
                    <span className="block text-6xl font-black font-headline text-white mb-4">
                      {stat.tag}
                    </span>
                    <span className="text-primary font-bold text-sm uppercase tracking-widest leading-relaxed">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
