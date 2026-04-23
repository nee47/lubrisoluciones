import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Venta de Lubricantes Industriales en Lima, Perú",
  description:
    "Contacte a LUBRISOLUCIONES. Distribuidores de grasas, aceites y lubricantes para maquinaria industrial en Lima y provincias de Perú.",
};

export default function ContactoPage() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body selection:bg-primary/30 selection:text-primary">
      {/* Header section */}
      <section className="bg-black text-white py-32 px-6 relative overflow-hidden border-b border-white/5 pt-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-x-0 bottom-0 top-0 bg-primary/10 opacity-60 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[200px] pointer-events-none" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-surface text-secondary text-sm font-bold tracking-widest mb-6 font-label uppercase border border-white/10">
            Contacto
          </span>
          <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-6 text-balance text-white">
            Pida su <span className="text-primary italic">Cotización</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium leading-relaxed">
            Nuestros analistas técnicos están preparados para decodificar sus
            requerimientos y proponer la arquitectura de lubricación ideal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
          <div className="bg-gradient-to-br from-[#110500] to-black rounded-[3rem] shadow-2xl border border-white/5 p-8 md:p-16 mb-16 relative overflow-hidden glass-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
              {/* Form Area */}

              {/* Contact Info */}
              <div className="flex flex-col justify-between space-y-12">
                <div>
                  <h2 className="text-4xl font-black font-headline text-white mb-10 tracking-tight">
                    DATOS DE CONTACTO
                  </h2>

                  <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="bg-surface-variant p-4 rounded-xl border border-white/5 group-hover:border-primary/50 transition-colors">
                        <span
                          className="material-symbols-outlined text-primary text-3xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          location_on
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">
                          Oficina
                        </h4>
                        <p className="text-on-surface-variant text-lg leading-relaxed">
                          Jr. Bulgaria 335, Los Olivos, Lima, Perú
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                      <div className="bg-surface-variant p-4 rounded-xl border border-white/5 group-hover:border-primary/50 transition-colors">
                        <span
                          className="material-symbols-outlined text-primary text-3xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          call
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">
                          Teléfono
                        </h4>
                        <p className="text-on-surface-variant text-lg leading-relaxed">
                          +51 961 484 883
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                      <div className="bg-surface-variant p-4 rounded-xl border border-white/5 group-hover:border-primary/50 transition-colors">
                        <span
                          className="material-symbols-outlined text-primary text-3xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          mail
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">
                          Email
                        </h4>
                        <p className="text-on-surface-variant text-lg leading-relaxed">
                          lubrisoluciones@yahoo.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="bg-surface-variant p-4 rounded-xl border border-white/5 group-hover:border-primary/50 transition-colors">
                        <span
                          className="material-symbols-outlined text-primary text-3xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          manage_search
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">
                          RUC
                        </h4>
                        <p className="text-on-surface-variant text-lg leading-relaxed">
                          20612884197
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-48 bg-black/50 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner overflow-hidden relative group">
                  <div className="absolute inset-0 bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700">
                    <Image
                      fill
                      alt="imagen referencial"
                      src="/image.webp"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                      loading="eager"
                    ></Image>
                  </div>
                  <span className="text-white/60 font-bold tracking-widest text-sm flex items-center gap-3 relative z-10 bg-black/60 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
                    <span className="material-symbols-outlined">
                      satellite_alt
                    </span>{" "}
                    VISUALIZAR CARTOGRAFÍA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
