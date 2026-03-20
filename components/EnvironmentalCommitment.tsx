import Image from "next/image";

export default function EnvironmentalCommitment() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-8 max-w-screen-2xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="glass-card rounded-3xl p-4 relative z-10 border border-white/5 h-[500px]">
              <Image
                src="/turbina_hidraulica.jpg"
                className="object-cover rounded-2xl"
                alt="Industrial eco operations"
                fill
                unoptimized
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-2xl shadow-2xl max-w-xs hidden md:block border border-white/20 z-20">
              <div className="text-4xl font-black text-white mb-2">100%</div>
              <div className="font-bold text-white leading-tight">
                Cumplimiento Técnico para componentes industriales.
              </div>
            </div>
          </div>
          <div className="lg:pl-12">
            <h2 className="text-5xl font-bold font-headline mb-8 tracking-tight text-white text-balance">
              Un Compromiso{" "}
              <span className="text-secondary italic">Eficiente</span>.
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="bg-surface-variant p-4 rounded-xl h-fit border border-white/5 group-hover:border-primary transition-colors">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    water_drop
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Fluidos Biodegradables
                  </h4>
                  <p className="text-on-surface-variant">
                    Línea especializada de lubricantes formulados con bases que
                    protegen el medio ambiente.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="bg-surface-variant p-4 rounded-xl h-fit border border-white/5 group-hover:border-primary transition-colors">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    nest_multi_room
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Mitigación de Residuos
                  </h4>
                  <p className="text-on-surface-variant">
                    Asesoría para una disposición final de aceites usados que
                    garantiza el menor impacto ecológico.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="bg-surface-variant p-4 rounded-xl h-fit border border-white/5 group-hover:border-primary transition-colors">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    shield_with_heart
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Arquitectura de Seguridad
                  </h4>
                  <p className="text-on-surface-variant">
                    Un marco de cero daños con prioridad en el bienestar físico
                    de los equipos y operadores industriales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
