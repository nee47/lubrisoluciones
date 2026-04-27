import Link from "next/link";
import { Producto } from "../lib/productos";
import Image from "next/image";

const getPlaceholder = (id: string) => {
  const hash = id.length % 3;
  if (hash === 0) {
    return (
      <div className="w-full h-full bg-surface-variant flex items-center justify-center border border-white/5">
        <span
          className="material-symbols-outlined text-primary text-6xl opacity-60"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          settings
        </span>
      </div>
    );
  }
  if (hash === 1) {
    return (
      <div className="w-full h-full bg-surface-variant flex items-center justify-center border border-white/5">
        <span
          className="material-symbols-outlined text-secondary text-6xl opacity-60"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          water_drop
        </span>
      </div>
    );
  }
  return (
    <div className="w-full h-full bg-surface-variant flex items-center justify-center border border-white/5 gap-2">
      <span
        className="material-symbols-outlined text-primary text-5xl opacity-50"
        style={{ fontVariationSettings: "'FILL' 0" }}
      >
        water_drop
      </span>
      <span
        className="material-symbols-outlined text-secondary text-5xl opacity-50"
        style={{ fontVariationSettings: "'FILL' 0" }}
      >
        settings
      </span>
    </div>
  );
};

export default function ProductCard({ producto }: { producto: Producto }) {
  return (
    <div className="bg-surface rounded-2xl border border-white/5 overflow-hidden hover:ring-2 hover:ring-primary/50 transition-all duration-300 group flex flex-col h-full relative  shadow-xl shadow-black/50">
      {/* Top ambient glow */}
      <div className="absolute top-0 inset-x-0 h-32 bg-primary/5 group-hover:bg-primary/20 blur-3xl transition-colors duration-500 z-0"></div>

      {/* Image Area */}
      <div className="relative w-full h-82 overflow-hidden z-10 p-4">
        <Image
          src="/lubri_cilinder.webp"
          alt="imagen referencial"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=" object-cover"
          unoptimized
          fill
        ></Image>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow z-10">
        <h3 className="text-xl font-bold font-headline text-white mb-2 line-clamp-2">
          {producto.nombre}
        </h3>
        <p className="text-on-surface-variant text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
          {producto.descripcion}
        </p>

        {/* Action */}
        <Link
          href={`/productos/${producto.id}`}
          className="mt-auto block text-center font-bold py-3 px-4 rounded-xl bg-surface-variant text-primary border border-white/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}
