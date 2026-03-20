import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-8 max-w-screen-xl">
        <div className="bg-gradient-to-br from-primary-container to-black rounded-[2rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center border border-white/5 shadow-2xl">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 kinetic-gradient mix-blend-overlay"></div>
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-black font-headline text-white mb-8 tracking-tighter text-balance">
              ¿Listo para cambiar <br className="hidden md:block" />
              <span className="text-primary">el paradigma de fricción?</span>
            </h2>
            <p className="text-on-primary-container/80 text-xl mb-12 text-balance leading-relaxed">
              Únase a Lubrisoluciones para forjar una base operativa robusta,
              resiliente y de alto rendimiento para sus equipos críticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contacto"
                className="bg-primary text-white px-12 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20"
              >
                Asóciate con Nosotros
              </Link>
              <Link
                href="/contacto"
                className="border-2 border-secondary text-secondary px-12 py-5 rounded-xl font-bold text-lg hover:bg-secondary/10 transition-colors"
              >
                Programar Asesoría
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
