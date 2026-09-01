import Link from "next/link";
import { Producto } from "../lib/productos";
import Image from "next/image";

export default function ProductCard({ producto }: { producto: Producto }) {
  const displayImage = producto.imagen || "/bucket.webp";
  const highlightedFeatures = producto.caracteristicas?.slice(0, 2) || [];

  return (
    <article className="group relative flex flex-col h-full rounded-2xl border border-white/10 bg-surface/70 overflow-hidden shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-black/60">
      {/* Top ambient glow */}
      <div className="absolute top-0 inset-x-0 h-28 bg-primary/5 group-hover:bg-primary/15 blur-2xl transition-colors duration-500 pointer-events-none" />

      {/* Image Area */}
      <div className="relative w-full h-52 overflow-hidden bg-black/40 p-4 border-b border-white/5">
        <Image
          src={displayImage}
          alt={`${producto.nombre} - Lubricante Industrial`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 z-10">
        {/* Title */}
        <h3 className="text-lg font-bold font-headline text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors duration-200">
          {producto.nombre}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed mb-4 flex-grow">
          {producto.descripcion}
        </p>

        {/* Technical Highlights / Features */}
        {highlightedFeatures.length > 0 && (
          <div className="space-y-1.5 mb-5 border-t border-white/5 pt-3">
            {highlightedFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[11px] text-white/80">
                <span className="material-symbols-outlined text-primary text-sm shrink-0 mt-0.5">
                  check
                </span>
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <Link
          href={`/productos/${producto.id}`}
          className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-surface-variant/80 text-xs font-bold text-white border border-white/10 transition-all duration-300 hover:bg-primary hover:border-primary active:scale-[0.98]"
        >
          <span>Ver ficha técnica</span>
          <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">
            arrow_forward
          </span>
        </Link>
      </div>
    </article>
  );
}
