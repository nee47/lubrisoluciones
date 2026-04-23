import { getProductos } from "../../lib/productos";
import ProductCard from "../../components/ProductCard";

export const metadata = {
  title: "Productos - LUBRISOLUCIONES",
  description: "Catálogo de aceites y grasas industriales.",
};

export default function ProductosPage() {
  const productos = getProductos();

  return (
    <div className="bg-background min-h-screen pt-24 font-body text-on-background selection:bg-primary/30 selection:text-primary">
      {/* Header section with gradient overlay */}
      <section className="relative py-20 overflow-hidden border-b border-white/5 bg-background">
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-tr from-primary-container/40 via-black to-secondary-container/20 opacity-60"></div>
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-2xl relative z-10">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black font-headline text-white tracking-tighter text-balance mb-6">
              Inventario de <span className="text-primary">Productos</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed text-balance">
              Formulaciones operativas de alto rango diseñadas para
              sincronizarse y proteger sus activos críticos bajo los entornos de
              mayor exigencia cinética.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {productos.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
