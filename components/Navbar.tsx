"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Productos", path: "/productos" },
    { name: "Servicios", path: "/servicios" },
    { name: "Acerca", path: "/acerca" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-orange-950/60 backdrop-blur-xl shadow-2xl shadow-orange-950/20 py-4"
          : "bg-black/60 py-4"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 max-w-screen-2xl mx-auto">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-x-2">
          <Image
            className="rounded-lg opacity-80"
            src="/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            unoptimized
          />
          <div className=" font-black tracking-tighter text-primary">
            <span className="text-secondary">LUBRI</span>SOLUCIONES
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center md:gap-x-4 lg:gap-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-bold transition-colors duration-300 text-sm ${
                pathname === link.path
                  ? "text-secondary border-b-2 border-secondary pb-1"
                  : "text-orange-100/80 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Area & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform hidden sm:block">
            bolt
          </span>
          <a
            href={`https://wa.me/51961484883?text=${encodeURIComponent(`Hola vi su web LUBRISOLUCIONES, quisiera más información y precios.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-primary hover:bg-primary-dim text-white px-6 py-2 rounded-lg font-bold transition-all active:scale-95"
          >
            Cotizar
          </a>

          <button
            className="md:hidden text-primary p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-t border-white/5 shadow-2xl flex flex-col items-center py-8 gap-6 animate-in slide-in-from-top-4 fade-in duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-bold transition-colors duration-300 text-xl tracking-tight ${
                pathname === link.path
                  ? "text-secondary"
                  : "text-white hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`https://wa.me/51961484883?text=${encodeURIComponent(`Hola vi su web LUBRISOLUCIONES, quisiera más información y precios.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary hover:bg-primary-dim text-white px-10 py-4 mt-4 rounded-xl font-bold transition-all"
          >
            Cotizar Proyecto
          </a>
        </div>
      )}
    </nav>
  );
}
