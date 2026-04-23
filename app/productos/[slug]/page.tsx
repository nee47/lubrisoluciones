import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getProductos, getProductoBySlug } from "../../../lib/productos";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const productos = getProductos();
  return productos.map((prod) => ({
    slug: prod.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const producto = getProductoBySlug(slug);
  if (!producto) return { title: "Producto no encontrado" };

  return {
    title: `${producto.nombre} en Perú`,
    description: `Distribuidores de ${producto.nombre.toLowerCase()} en Lima y provincias. ${producto.descripcion.substring(0, 120)}`,
    openGraph: {
      title: `${producto.nombre} | LUBRISOLUCIONES Perú`,
      description: `Distribuidores de ${producto.nombre.toLowerCase()} en Lima y provincias. ${producto.descripcion.substring(0, 120)}`,
      url: `https://lubrisoluciones.devmotec.com/productos/${producto.id}`,
    }
  };
}

export default async function ProductoDetalle({ params }: PageProps) {
  const { slug } = await params;
  const producto = getProductoBySlug(slug);

  if (!producto) {
    notFound();
  }

  return (
    <div className="bg-background text-on-background min-h-screen py-24 font-body selection:bg-primary/30 selection:text-primary">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl mt-12">
        <Link
          href="/productos"
          className="inline-flex items-center text-secondary font-bold hover:text-primary transition-colors mb-12 group uppercase tracking-widest text-sm"
        >
          <span className="material-symbols-outlined mr-2 group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Volver
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Image Area */}
          <div className="w-full bg-surface-variant rounded-3xl aspect-[4/3] flex items-center justify-center border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 blur-3xl transition-colors duration-500 z-0"></div>
            {producto.imagen ? (
              <Image
                src={producto.imagen}
                alt={`${producto.nombre} - Lubricantes Industriales LUBRISOLUCIONES Perú`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover z-10 transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="relative z-10 glass-card p-12 rounded-full border border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-500">
                <span
                  className="material-symbols-outlined text-primary opacity-60"
                  style={{ fontSize: 120, fontVariationSettings: "'FILL' 0" }}
                >
                  settings
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-500 z-20" />
          </div>

          {/* Right Column: Info */}
          <div className="flex flex-col space-y-8">
            <div>
              <span className="inline-block py-1 px-4 rounded-full bg-surface text-secondary text-sm font-bold tracking-widest mb-6 font-label uppercase border border-white/10">
                Data Técnica
              </span>
              <h1 className="text-4xl md:text-5xl font-black font-headline text-white tracking-tighter leading-tight mb-6 text-balance">
                {producto.nombre}
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed text-balance">
                {producto.descripcion}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-headline text-white border-b border-white/10 pb-2">
                Atributos Operativos
              </h3>
              <ul className="space-y-4 pt-4">
                {producto.caracteristicas.map((carac, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="material-symbols-outlined text-primary mt-1 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform">
                      check_circle
                    </span>
                    <span className="text-on-surface-variant leading-relaxed font-medium">
                      {carac}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-variant p-8 rounded-2xl border border-primary/20 mt-6 shadow-inner shadow-black/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
              <h3 className="text-xl font-bold font-headline text-white mb-3 relative z-10">
                Metodología de Aplicación
              </h3>
              <p className="text-on-surface-variant leading-relaxed relative z-10">
                {producto.modoDeUso}
              </p>
            </div>

            <div className="pt-4">
              <a
                id="btn-producto-solicitar"
                href={`https://wa.me/51961484883?text=${encodeURIComponent(`Hola, quisiera más información y precios sobre el producto ${producto.nombre}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dim text-white px-10 py-5 rounded-xl text-lg font-bold flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 border border-primary/50 w-full md:w-auto"
              >
                Solicitar Producto
                <span className="material-symbols-outlined">analytics</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Script id={`product-schema-${producto.id}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "${producto.nombre}",
          "image": "https://lubrisoluciones.devmotec.com${producto.imagen || '/product.webp'}",
          "description": "${producto.descripcion}",
          "brand": {
            "@type": "Brand",
            "name": "LUBRISOLUCIONES"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://lubrisoluciones.devmotec.com/productos/${producto.id}",
            "priceCurrency": "PEN",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "LUBRISOLUCIONES"
            }
          }
        }
      `}} />
    </div>
  );
}
