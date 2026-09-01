import type { Metadata } from "next";
import Script from "next/script";
import { getProductos } from "../../lib/productos";
import ProductCatalog from "../../components/ProductCatalog";

export const metadata: Metadata = {
  title: "Catálogo de Lubricantes y Grasas Industriales | LUBRISOLUCIONES",
  description:
    "Catálogo completo de aceites sintéticos, grasas de extrema presión, fluidos grado alimentario NSF H1 y productos de mantenimiento industrial en Perú.",
  alternates: {
    canonical: "https://lubrisoluciones.com/productos",
  },
  openGraph: {
    title: "Catálogo de Lubricantes Industriales | LUBRISOLUCIONES",
    description:
      "Distribución de lubricantes para compresores, sistemas hidráulicos, engranajes y maquinaria pesada en Lima y todo el Perú.",
    url: "https://lubrisoluciones.com/productos",
    images: [
      {
        url: "/image.webp",
        alt: "Catálogo de Lubricantes LUBRISOLUCIONES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo de Lubricantes Industriales | LUBRISOLUCIONES",
    description: "Catálogo de lubricantes, aceites y grasas para la industria en el Perú.",
    images: ["/image.webp"],
  },
};

export default function ProductosPage() {
  const productos = getProductos();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Catálogo de Lubricantes y Grasas Industriales",
    "description": "Catálogo completo de aceites y grasas industriales en el Perú.",
    "url": "https://lubrisoluciones.com/productos",
    "publisher": {
      "@id": "https://lubrisoluciones.com/#organization",
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": productos.map((prod, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://lubrisoluciones.com/productos/${prod.id}`,
        "name": prod.nombre,
      })),
    },
  };

  return (
    <div className="bg-background min-h-screen pt-20 pb-16 font-body text-on-background selection:bg-primary/30 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Compact Header & Direct Transition to Catalog */}
        <div className="py-6 sm:py-8 border-b border-white/10 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-headline text-white tracking-tight">
                Catálogo de <span className="text-primary">Productos</span>
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
                Aceites sintéticos, grasas de extrema presión y fluidos certificados para maquinaria pesada e industrial en todo el Perú.
              </p>
            </div>
          </div>
        </div>

        {/* Catalog & Search Section */}
        <ProductCatalog initialProducts={productos} />

        {/* Compact Engineering Support Banner */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-surface-variant/40 p-6 sm:p-7 shadow-lg backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-2xl text-left">
            <h2 className="text-base sm:text-lg font-bold text-white font-headline mb-1">
              ¿Requieres asesoría técnica para tu maquinaria?
            </h2>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Nuestros especialistas te orientan en la viscosidad y norma OEM exacta para tus equipos en planta.
            </p>
          </div>

          <a
            id="btn-asesoria-catalogo"
            href={`https://wa.me/51961484883?text=${encodeURIComponent(
              "Hola LUBRISOLUCIONES, requiero asesoría técnica para seleccionar el lubricante adecuado para mi maquinaria."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dim active:scale-95"
          >
            <span>Consultar con un Ingeniero</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>

      <Script
        id="catalog-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
    </div>
  );
}
