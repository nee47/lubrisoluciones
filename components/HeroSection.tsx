import Link from "next/link";
import Image from "next/image";

const purchaseSteps = [
  "Cotización formal del producto requerido",
  "Emitimos la factura a nombre de la empresa",
  "Se comparte la cuenta bancaria única del BCP a nombre de Lubricantes Especiales del Perú S.A.C.",
  "Se coordina la entrega en almacén o envío.",
];

export default function HeroSection() {
  return (
    <section>
      <div className="relative flex min-h-[calc(100svh-80px)] items-center overflow-hidden bg-black md:pl-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black via-primary-container/20 to-transparent opacity-80" />
          <Image
            src="/maquina.webp"
            loading="eager"
            alt="Infraestructura industrial y maquinaria pesada en Perú - Lubricantes y grasas industriales"
            fill
            unoptimized
            className="z-0 object-cover mix-blend-overlay opacity-50"
          />
        </div>
        <div className="container relative z-20 mx-auto grid grid-cols-1 gap-12 px-8 py-14 md:py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-8">
            <span className="mb-5 inline-block rounded-full x-4 py-1 text-sm font-bold uppercase tracking-widest text-primary font-label  ">
              Especialistas en Maquinaria Industrial
            </span>
            <h1 className="mb-6 text-4xl font-black leading-none tracking-tighter text-white text-balance font-headline sm:text-5xl md:mb-8 md:text-7xl lg:text-8xl">
              Lubricantes y Grasas <br className="hidden md:block" />
              <span className="text-secondary">Industriales en Perú</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant text-balance md:mb-10 md:text-2xl">
              Proveemos soluciones en lubricación de alta tecnología para
              maximizar el rendimiento y la vida útil de su maquinaria pesada e
              infraestructura en Lima y provincias.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                id="btn-hero-explorar"
                href="/productos"
                className="flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-2xl shadow-primary/20 transition-all hover:scale-105 hover:bg-primary-dim active:scale-95 md:px-10 md:py-5 md:text-lg"
              >
                Explorar Soluciones
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                id="btn-hero-sostenibilidad"
                href="/acerca"
                className="flex items-center justify-center gap-3 rounded-xl border border-secondary/20 bg-secondary-container px-8 py-4 font-bold text-on-secondary-container transition-colors hover:bg-secondary/10 md:px-10 md:py-5"
              >
                Informe de Sostenibilidad
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="purchase-process-title"
        className="bg-surface px-6 py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-primary font-label">
              Compra con claridad
            </p>
            <h2
              id="purchase-process-title"
              className="text-3xl font-black tracking-tight text-white md:text-5xl font-headline"
            >
              ¿Cómo comprar?
            </h2>
          </div>
          <ol className="grid gap-8 md:grid-cols-4 md:gap-0">
            {purchaseSteps.map((step, index) => (
              <li key={step} className="relative flex gap-4 md:block md:pr-8">
                {index < purchaseSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[1.15rem] top-12 hidden h-px w-[calc(100%-1.15rem)] bg-outline md:block"
                  />
                )}
                <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-white ring-8 ring-surface">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-base font-semibold leading-relaxed text-on-surface-variant md:mt-7 md:pr-4">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </section>
  );
}
