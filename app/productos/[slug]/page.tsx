import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { getProductos, getProductoBySlug } from "../../../lib/productos";
import ProductCard from "../../../components/ProductCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const productos = getProductos();
  return productos.map((prod) => ({
    slug: prod.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const producto = getProductoBySlug(slug);
  if (!producto) return { title: "Producto no encontrado | LUBRISOLUCIONES" };

  const canonicalUrl = `https://lubrisoluciones.com/productos/${producto.id}`;
  const displayImage = producto.imagen || "/bucket.webp";

  return {
    title: `${producto.nombre} en Perú | LUBRISOLUCIONES`,
    description: `Distribución y venta de ${producto.nombre.toLowerCase()} en Lima y provincias del Perú. ${producto.descripcion.substring(0, 140)}`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${producto.nombre} | LUBRISOLUCIONES Perú`,
      description: `Distribución y venta de ${producto.nombre.toLowerCase()} en Lima y todo el Perú. Asesoría técnica inmediata.`,
      url: canonicalUrl,
      images: [
        {
          url: displayImage,
          alt: `${producto.nombre} - LUBRISOLUCIONES`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${producto.nombre} | LUBRISOLUCIONES Perú`,
      description: `Venta y asesoría técnica de ${producto.nombre.toLowerCase()} en Perú.`,
      images: [displayImage],
    },
  };
}

export default async function ProductoDetalle({ params }: PageProps) {
  const { slug } = await params;
  const producto = getProductoBySlug(slug);

  if (!producto) {
    notFound();
  }

  const allProducts = getProductos();
  const relatedProducts = allProducts
    .filter((p) => p.id !== producto.id)
    .slice(0, 4);

  const displayImage = producto.imagen || "/bucket.webp";
  const whatsappUrl = `https://wa.me/51961484883?text=${encodeURIComponent(
    `Hola LUBRISOLUCIONES, quisiera cotizar y recibir la ficha técnica de: ${producto.nombre}.`
  )}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://lubrisoluciones.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Productos",
            "item": "https://lubrisoluciones.com/productos",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": producto.nombre,
            "item": `https://lubrisoluciones.com/productos/${producto.id}`,
          },
        ],
      },
      {
        "@type": "Product",
        "@id": `https://lubrisoluciones.com/productos/${producto.id}#product`,
        "name": producto.nombre,
        "image": `https://lubrisoluciones.com${displayImage}`,
        "description": producto.descripcion,
        "sku": producto.id,
        "mpn": producto.id,
        "brand": {
          "@id": "https://lubrisoluciones.com/#organization",
        },
        "itemCondition": "https://schema.org/NewCondition",
        "offers": {
          "@type": "Offer",
          "url": `https://lubrisoluciones.com/productos/${producto.id}`,
          "priceCurrency": "PEN",
          "price": "0",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "PEN",
            "valueAddedTaxIncluded": true,
          },
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://lubrisoluciones.com/#organization",
          },
        },
      },
    ],
  };

  return (
    <div className="bg-background text-on-background min-h-screen pt-20 pb-16 font-body selection:bg-primary/30 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Visual Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="py-4 text-xs text-on-surface-variant flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/productos" className="hover:text-white transition-colors">
            Productos
          </Link>
          <span>/</span>
          <span className="text-primary font-medium truncate max-w-xs sm:max-w-md">
            {producto.nombre}
          </span>
        </nav>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-4">
          {/* Left Column: Image Area */}
          <div className="lg:col-span-5 bg-surface-variant/40 rounded-2xl aspect-square flex items-center justify-center border border-white/10 shadow-xl relative overflow-hidden group p-6">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/15 blur-3xl transition-colors duration-500 pointer-events-none" />
            <Image
              src={displayImage}
              alt={`${producto.nombre} - Lubricante Industrial LUBRISOLUCIONES`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain p-4 z-10 transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Right Column: Information & Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-headline text-white tracking-tight leading-tight mb-3">
                {producto.nombre}
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {producto.descripcion}
              </p>
            </div>

            {/* Operational Features */}
            {producto.caracteristicas && producto.caracteristicas.length > 0 && (
              <div className="space-y-3 rounded-2xl border border-white/10 bg-surface/60 p-5 backdrop-blur-sm">
                <h2 className="text-xs font-bold uppercase tracking-wider text-primary">
                  Propiedades y Beneficios Clave
                </h2>
                <ul className="space-y-2">
                  {producto.caracteristicas.map((carac, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-white/90">
                      <span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="leading-relaxed">{carac}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Application Method */}
            {producto.modoDeUso && (
              <div className="rounded-2xl border border-white/10 bg-surface-variant/30 p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-1.5">
                  Aplicación Recomendada
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {producto.modoDeUso}
                </p>
              </div>
            )}

            {/* Conversion CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                id="btn-producto-cotizar-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-xs font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary-dim active:scale-[0.98]"
              >
                <span>Cotizar este Producto</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>

              <Link
                href="/productos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-surface/60 px-6 py-3.5 text-xs font-semibold text-white transition-all hover:bg-surface-variant active:scale-[0.98]"
              >
                <span>Volver al Catálogo</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold font-headline text-white mb-6">
              Otros Productos Recomendados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((relProd) => (
                <ProductCard key={relProd.id} producto={relProd} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Script
        id={`product-schema-${producto.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
