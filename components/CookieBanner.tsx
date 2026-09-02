"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "lubrisoluciones_cookie_consent";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Small delay for smooth entry animation
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Consentimiento de cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 animate-in fade-in slide-in-from-bottom-5 duration-500"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/90 p-4 sm:p-5 shadow-2xl shadow-black/80 backdrop-blur-xl">
        {/* Subtle ambient accent glow */}
        <div className="absolute top-0 right-0 size-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-3">
          {/* Header & Icon */}
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary text-xl">
              cookie
            </span>
            <h4 className="text-xs font-bold font-headline text-white tracking-wide">
              Preferencias de Cookies
            </h4>
          </div>

          {/* Description */}
          <p className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
            Utilizamos cookies técnicas y analíticas para optimizar el rendimiento de nuestro catálogo y evaluar el tráfico de forma anónima. Consulta nuestra{" "}
            <Link
              href="/cookies"
              className="text-white underline decoration-primary/50 underline-offset-2 hover:text-primary transition-colors"
            >
              Política de Cookies
            </Link>
            .
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleAccept}
              className="flex-1 rounded-xl bg-primary py-2 px-3 text-xs font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary-dim active:scale-[0.98] cursor-pointer"
            >
              Aceptar todas
            </button>
            <button
              onClick={handleDecline}
              className="rounded-xl border border-white/10 bg-surface-variant/60 py-2 px-3 text-xs font-medium text-on-surface-variant transition-all hover:bg-surface-variant hover:text-white active:scale-[0.98] cursor-pointer"
            >
              Solo esenciales
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
