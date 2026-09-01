"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/51961484883?text=${encodeURIComponent(
    "Hola LUBRISOLUCIONES, quisiera información y cotización de lubricantes para mi empresa.",
  )}`;

  return (
    <aside
      aria-label="Contacto por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center"
    >
      <a
        id="btn-whatsapp-flotante"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar por WhatsApp"
        className="group relative flex size-[62px] flex-col items-center justify-center rounded-2xl bg-[#25D366] p-2 text-white shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-2xl hover:shadow-[#25D366]/60 active:scale-95"
      >
        {/* Soft Animated Pulse Ring */}
        <span className="absolute -inset-1 -z-10 rounded-2xl bg-[#25D366]/30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon (Top) */}
        <div className="relative size-12 shrink-0 transition-transform duration-300 group-hover:scale-110">
          <Image
            src="/whatsapp-svgrepo-com.svg"
            alt="WhatsApp"
            fill
            className="object-contain brightness-0 invert"
          />
        </div>

        {/* Action Text (Bottom) */}
      </a>
    </aside>
  );
}
