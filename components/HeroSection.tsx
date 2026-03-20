import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:pl-10 flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-primary-container/20 to-transparent opacity-80 z-10"></div>
        <Image
          src="maquina.webp"
          loading="eager"
          alt="Abstract aerial view of industrial infrastructure"
          fill
          unoptimized
          className="object-cover mix-blend-overlay opacity-50 z-0"
        />
      </div>
      <div className="container mx-auto px-8 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary text-sm font-bold tracking-widest mb-6 font-label uppercase border border-primary/30">
            El Futuro de la Operabilidad
          </span>
          <h1 className="text-6xl md:text-8xl font-black font-headline leading-none text-white mb-8 tracking-tighter text-balance">
            Impulsando la <br className="hidden md:block" />
            <span className="text-secondary">Era Industrial.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed text-balance">
            Redefiniendo el panorama cinético a través de lubricación extrema e
            integración sostenible. Movemos el mundo, de manera responsable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/productos"
              className="bg-primary hover:bg-primary-dim text-white px-10 py-5 rounded-xl text-lg font-bold flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            >
              Explorar Soluciones
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              href="/acerca"
              className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-xl font-bold flex items-center justify-center gap-3 border border-secondary/20 hover:bg-secondary/10 transition-colors"
            >
              Informe de Sostenibilidad
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
