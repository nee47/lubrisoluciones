"use client";

import { useState, useMemo } from "react";
import { Producto } from "../lib/productos";
import ProductCard from "./ProductCard";

interface ProductCatalogProps {
  initialProducts: Producto[];
}

interface CategoryFilter {
  id: string;
  name: string;
  icon: string;
}

const CATEGORIES: CategoryFilter[] = [
  { id: "todos", name: "Todos", icon: "apps" },
  { id: "aceites", name: "Aceites Industriales", icon: "water_drop" },
  { id: "grasas", name: "Grasas Especiales", icon: "science" },
  { id: "sanitarios", name: "Línea Sanitaria NSF", icon: "restaurant" },
  { id: "sprays", name: "Mantenimiento & Sprays", icon: "inventory_2" },
  { id: "procesos", name: "Procesos & Mecanizado", icon: "precision_manufacturing" },
];

function matchesCategory(producto: Producto, categoryId: string): boolean {
  if (categoryId === "todos") return true;

  const id = producto.id.toLowerCase();
  const name = producto.nombre.toLowerCase();
  const desc = producto.descripcion.toLowerCase();

  switch (categoryId) {
    case "aceites":
      return (
        (id.includes("compresor") ||
          id.includes("hidraulico") ||
          id.includes("engranaje") ||
          id.includes("turbina") ||
          id.includes("guias") ||
          id.includes("transferencia-de-calor") ||
          id.includes("vacio")) &&
        !id.includes("sanitari")
      );
    case "grasas":
      return id.includes("grasa") || name.includes("grasa");
    case "sanitarios":
      return (
        id.includes("sanitari") ||
        id.includes("food") ||
        name.includes("sanitari") ||
        desc.includes("nsf") ||
        desc.includes("aliment")
      );
    case "sprays":
      return (
        id.includes("spray") ||
        id.includes("antiseize") ||
        id.includes("penetrante") ||
        id.includes("chain") ||
        id.includes("gear-lube") ||
        id.includes("silicona") ||
        id.includes("protector")
      );
    case "procesos":
      return (
        id.includes("soluble") ||
        id.includes("electroerosion") ||
        id.includes("perforacion") ||
        id.includes("proceso")
      );
    default:
      return true;
  }
}

function matchesSearch(producto: Producto, query: string): boolean {
  if (!query.trim()) return true;
  const cleanQuery = query.toLowerCase().trim();
  const name = producto.nombre.toLowerCase();
  const desc = producto.descripcion.toLowerCase();
  const usage = producto.modoDeUso?.toLowerCase() || "";
  const features = producto.caracteristicas?.join(" ").toLowerCase() || "";

  return (
    name.includes(cleanQuery) ||
    desc.includes(cleanQuery) ||
    usage.includes(cleanQuery) ||
    features.includes(cleanQuery)
  );
}

export default function ProductCatalog({ initialProducts }: ProductCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return initialProducts.filter(
      (prod) =>
        matchesCategory(prod, activeCategory) &&
        matchesSearch(prod, searchQuery)
    );
  }, [initialProducts, activeCategory, searchQuery]);

  // Count by Category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach((cat) => {
      counts[cat.id] = initialProducts.filter((prod) =>
        matchesCategory(prod, cat.id)
      ).length;
    });
    return counts;
  }, [initialProducts]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveCategory("todos");
  };

  return (
    <div className="space-y-6">
      {/* Compact Search & Category Filter Toolbar */}
      <div className="rounded-xl border border-white/10 bg-surface/70 p-4 shadow-md backdrop-blur-md">
        {/* Search Bar Input */}
        <div className="relative mb-3.5">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por nombre, viscosidad (ej. ISO 68), norma o aplicación..."
            className="w-full rounded-lg border border-white/10 bg-black/40 py-2.5 pl-10 pr-9 text-xs text-white placeholder-on-surface-variant outline-none transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Limpiar búsqueda"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-on-surface-variant hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          )}
        </div>

        {/* Category Pills Bar */}
        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = categoryCounts[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.01]"
                    : "bg-surface-variant/50 text-on-surface-variant border border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {cat.icon}
                </span>
                <span>{cat.name}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-black/30 text-on-surface-variant"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Status Bar */}
        <div className="mt-3.5 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-on-surface-variant">
          <span>
            Mostrando <strong className="text-white font-bold">{filteredProducts.length}</strong> de{" "}
            <strong className="text-white">{initialProducts.length}</strong> productos
          </span>

          {(searchQuery || activeCategory !== "todos") && (
            <button
              onClick={handleResetFilters}
              className="text-secondary hover:text-primary transition-colors flex items-center gap-1 font-medium cursor-pointer"
            >
              <span className="material-symbols-outlined text-xs">restart_alt</span>
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-surface/30 py-12 px-6 text-center">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-3 opacity-50">
            search_off
          </span>
          <h3 className="text-lg font-bold text-white mb-1.5 font-headline">
            No se encontraron productos
          </h3>
          <p className="text-xs text-on-surface-variant max-w-md mb-4 leading-relaxed">
            No hay lubricantes que coincidan con &ldquo;<span className="text-white font-medium">{searchQuery}</span>&rdquo; en la categoría seleccionada.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white transition-all hover:bg-primary-dim"
          >
            <span className="material-symbols-outlined text-xs">refresh</span>
            Ver todos los productos
          </button>
        </div>
      )}
    </div>
  );
}
