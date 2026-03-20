import Link from "next/link";
import Image from "next/image";

export default function CoreServices() {
  return (
    <section className="py-32 md:pl-10 bg-surface border-t border-white/5">
      <div className="container mx-auto px-8 max-w-screen-2xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 tracking-tight text-white text-balance">
              Precisión Técnica. <br />
              <span className="text-primary">Responsabilidad Operativa.</span>
            </h2>
            <p className="text-on-surface-variant text-lg text-balance">
              Nuestras operaciones centrales aprovechan el marco del Ecosistema
              Cinético para equilibrar el rendimiento industrial con la
              sustentabilidad medioambiental.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 group relative overflow-hidden bg-surface-variant rounded-2xl p-12 transition-all hover:ring-2 hover:ring-primary/50">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span
                  className="material-symbols-outlined text-primary text-5xl mb-8"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  precision_manufacturing
                </span>
                <h3 className="text-2xl font-bold font-headline mb-4 text-white">
                  Lubricación de Ultra Precisión
                </h3>
                <p className="text-on-surface-variant max-w-[380px]">
                  Utilizando formulaciones sintéticas de avanzada para minimizar
                  la fricción y maximizar la vida útil bajo condiciones severas.
                </p>
              </div>
              <div className="mt-12">
                <Link
                  href="/servicios"
                  className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all w-fit"
                >
                  Logística Operativa{" "}
                  <span className="material-symbols-outlined">
                    trending_flat
                  </span>
                </Link>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all z-0">
              <Image
                src="/image.webp"
                alt="High tech industrial gear set"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-primary text-white rounded-2xl p-12 flex flex-col justify-between shadow-xl shadow-primary/10 group hover:scale-[1.02] transition-transform">
            <div>
              <span
                className="material-symbols-outlined text-5xl mb-8"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
              <h3 className="text-3xl font-bold font-headline mb-4">
                Mantenimiento Predictivo
              </h3>
              <p className="text-white/80 text-lg">
                Integrando rutinas de análisis y diagnósticos fluidodinámicos en
                infraestructuras industriales heredadas.
              </p>
            </div>
            <Link
              href="/servicios"
              className="mt-8 border-b-2 border-white/30 text-left w-fit pb-1 font-bold hover:border-white transition-colors"
            >
              Matriz de Servicios
            </Link>
          </div>

          <div className="bg-secondary text-on-secondary rounded-2xl p-12 flex flex-col justify-between group hover:scale-[1.02] transition-transform">
            <div>
              <span
                className="material-symbols-outlined text-5xl mb-8"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                filter_drama
              </span>
              <h3 className="text-3xl font-bold font-headline mb-4">
                Gestión Térmica
              </h3>
              <p className="text-on-secondary/80 text-lg">
                Fluidos de transferencia de calor y lubricantes de alta
                temperatura que mantienen estabilizados los entornos operativos
                críticos.
              </p>
            </div>
            <div className="w-16 h-1 bg-on-secondary/20 mt-8"></div>
          </div>

          <div className="md:col-span-2 bg-surface-variant rounded-2xl p-12 flex flex-col md:flex-row gap-12 items-center hover:ring-2 hover:ring-secondary/50 transition-all">
            <div className="flex-1">
              <span
                className="material-symbols-outlined text-secondary text-5xl mb-8"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                monitoring
              </span>
              <h3 className="text-3xl font-bold font-headline mb-4 text-white">
                Monitoreo Tribológico
              </h3>
              <p className="text-on-surface-variant text-lg">
                Evaluaciones constantes para asegurar que nuestra lubricación
                garantice que los parámetros de fricción y desgaste nunca
                excedan umbrales seguros.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-black rounded-xl overflow-hidden flex items-center justify-center border border-white/5 relative">
              <Image
                src="/mundo.webp"
                alt="Digital monitoring dashboard"
                fill
                unoptimized
                className="object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
