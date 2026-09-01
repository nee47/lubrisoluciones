"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface IndustrySector {
  id: string;
  name: string;
  icon: string;
  equipmentHeadline: string;
  equipmentDesc: string;
  solutionHeadline: string;
  solutionDesc: string;
}

const industrySectors: IndustrySector[] = [
  {
    id: "alimentos",
    name: "Alimentos y Bebidas",
    icon: "restaurant",
    equipmentHeadline: "Para tus líneas y equipos:",
    equipmentDesc: "Envasadoras, compresores de frío y cerradoras continuas.",
    solutionHeadline: "Garantía para tu planta:",
    solutionDesc: "Cero riesgo de contaminación con lubricantes certificados NSF H1, Kosher y Halal para contacto accidental.",
  },
  {
    id: "mineria",
    name: "Minería y Refinación",
    icon: "precision_manufacturing",
    equipmentHeadline: "Para tu maquinaria pesada:",
    equipmentDesc: "Chancadoras, molinos de gran capacidad, celdas de flotación y bombas.",
    solutionHeadline: "Garantía para tu planta:",
    solutionDesc: "Protección contra cargas extremas (EP), repelencia total al agua y sellado contra polvo abrasivo.",
  },
  {
    id: "cemento",
    name: "Cemento y Acero",
    icon: "factory",
    equipmentHeadline: "Para tus hornos y molinos:",
    equipmentDesc: "Hornos rotatorios, molinos de bolas y reductores de servicio pesado.",
    solutionHeadline: "Garantía para tu planta:",
    solutionDesc: "Estabilidad térmica superior con aceites y grasas de alta viscosidad (ISO 680 a 1000) sin degradación.",
  },
  {
    id: "textil",
    name: "Textil y Confecciones",
    icon: "styler",
    equipmentHeadline: "Para tus telares y cardas:",
    equipmentDesc: "Telares circulares, cardas de alta velocidad, rameros y compresores.",
    solutionHeadline: "Garantía para tu planta:",
    solutionDesc: "Telas y prendas 100% limpias con lubricantes lavables, emulsionables y libres de manchas.",
  },
];

const purchaseSteps = [
  "Cotización formal del producto requerido",
  "Emitimos factura a nombre de su empresa",
  "Cuenta bancaria única BCP a nombre de Lubricantes Especiales del Perú S.A.C.",
  "Despacho rápido en almacén o envío a nivel nacional",
];

const ROTATION_INTERVAL = 4800;

export default function HeroSection() {
  const [activeSectorIndex, setActiveSectorIndex] = useState(0);
  const [isFadingText, setIsFadingText] = useState(false);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Smooth Video Looping with Fade In / Fade Out
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isTransitioning = false;

    const handleLoadedData = () => {
      video.play().catch(() => {
        // Autoplay policy fallback
      });
      setVideoOpacity(1);
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const timeLeft = video.duration - video.currentTime;

      // Start fade out 0.8s before the video ends
      if (timeLeft <= 0.8 && !isTransitioning) {
        isTransitioning = true;
        setVideoOpacity(0);
      }
    };

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().then(() => {
        setTimeout(() => {
          setVideoOpacity(1);
          isTransitioning = false;
        }, 80);
      }).catch(() => {
        setVideoOpacity(1);
        isTransitioning = false;
      });
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Automated Sector Rotation Timer (pauses smoothly on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsFadingText(true);
      setTimeout(() => {
        setActiveSectorIndex((prev) => (prev + 1) % industrySectors.length);
        setIsFadingText(false);
      }, 250);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSector = industrySectors[activeSectorIndex];

  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Hero Video Section with Bright, Clean Overlay */}
      <div className="relative flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden border-b border-white/10 pt-20 pb-14 lg:pt-24 lg:pb-16">
        {/* Poster fallback image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/lubricacion_poster.webp"
            alt="Lubricantes industriales y maquinaria pesada"
            fill
            priority
            className="object-cover object-center opacity-70"
          />
        </div>

        {/* Video Element: 17704528_hero_720p_30fps.mp4 with Smooth Fade In/Out */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="/17704528_hero_720p_30fps.mp4"
            poster="/lubricacion_poster.webp"
            muted
            playsInline
            className="h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out"
            style={{ opacity: videoOpacity }}
          />
        </div>

        {/* Soft, Balanced Lighting Overlay (Keeps video bright & vibrant) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        {/* Hero Content Container */}
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Value Proposition & Clear Actions */}
            <div className="flex flex-col lg:col-span-6 text-left">
              {/* Main Headline */}
              <h1 className="mb-4 text-3xl font-black tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl font-headline leading-tight">
                Máximo Rendimiento para{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-300 to-secondary">
                  Maquinaria Crítica
                </span>
              </h1>

              {/* Natural, clear subtitle */}
              <p className="mb-8 max-w-xl text-base leading-relaxed text-white/90 drop-shadow sm:text-lg">
                Suministro estratégico de aceites sintéticos, grasas de extrema presión y fluidos especializados en Lima y todo el Perú.
              </p>

              {/* Action: Single Ghost Button */}
              <div className="flex items-center">
                <Link
                  id="btn-hero-ver-catalogo"
                  href="/productos"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 active:scale-[0.98]"
                >
                  <span>Ver catálogo</span>
                  <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Quick Trust Attributes */}
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/15 pt-6 text-xs font-medium text-white/80">
                <div className="flex items-center gap-2 transition-colors duration-200 hover:text-primary">
                  <span className="material-symbols-outlined text-primary text-lg">verified</span>
                  <span>Fichas Técnicas & Hojas de Seguridad</span>
                </div>
                <div className="flex items-center gap-2 transition-colors duration-200 hover:text-secondary">
                  <span className="material-symbols-outlined text-secondary text-lg">local_shipping</span>
                  <span>Despacho Rápido en Lima y Provincias</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean 2-Column Sector Showcase with Constant Height */}
            <div className="lg:col-span-6">
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-black/60 p-6 sm:p-7 shadow-2xl backdrop-blur-xl min-h-[320px] sm:min-h-[300px]"
              >
                {/* 2-Column Content Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center flex-grow">
                  {/* Left Column: Icon Bien Grande */}
                  <div className="sm:col-span-4 flex items-center justify-center min-h-[110px]">
                    <span
                      className={`material-symbols-outlined text-primary select-none drop-shadow transition-all duration-300 ${
                        isFadingText ? "opacity-0 scale-95" : "opacity-100 scale-100"
                      }`}
                      style={{ fontSize: "110px", lineHeight: "1" }}
                    >
                      {currentSector.icon}
                    </span>
                  </div>

                  {/* Right Column: Title, Progress Bar and Details */}
                  <div className="sm:col-span-8 flex flex-col justify-center">
                    {/* Header: Title and Progress Bar (Constant Height) */}
                    <div className="mb-3 flex h-8 items-center justify-between gap-3">
                      <h3
                        className={`text-xl sm:text-2xl font-bold text-white font-headline tracking-tight transition-all duration-300 line-clamp-1 ${
                          isFadingText ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        {currentSector.name}
                      </h3>

                      <div className="h-1.5 w-20 shrink-0 overflow-hidden rounded-full bg-white/10">
                        <div
                          key={activeSectorIndex}
                          className="h-full bg-gradient-to-r from-primary to-secondary animate-hero-progress"
                        />
                      </div>
                    </div>

                    {/* Dynamic Content (Constant Heights) */}
                    <div
                      className={`space-y-2.5 transition-all duration-300 ${
                        isFadingText ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
                      }`}
                    >
                      {/* Equipment Description (Fixed Min Height) */}
                      <div className="rounded-xl bg-white/[0.03] p-3 border border-white/5 min-h-[62px] flex flex-col justify-center">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-orange-300 mb-0.5">
                          {currentSector.equipmentHeadline}
                        </p>
                        <p className="text-xs font-normal text-white/80 leading-relaxed line-clamp-2">
                          {currentSector.equipmentDesc}
                        </p>
                      </div>

                      {/* Solution & Customer Benefit (Fixed Min Height) */}
                      <div className="rounded-xl bg-secondary/[0.04] p-3 border border-secondary/15 min-h-[76px] flex flex-col justify-center">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-secondary mb-0.5">
                          {currentSector.solutionHeadline}
                        </p>
                        <p className="text-xs font-normal text-white/80 leading-relaxed line-clamp-3">
                          {currentSector.solutionDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sector Switcher Minimalist Indicators */}
                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
                  {industrySectors.map((sector, idx) => (
                    <button
                      key={sector.id}
                      onClick={() => setActiveSectorIndex(idx)}
                      aria-label={`Ver sector ${sector.name}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeSectorIndex
                          ? "w-8 bg-primary"
                          : "w-2.5 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Purchase Process Section */}
      <div
        aria-labelledby="purchase-process-title"
        className="bg-surface/80 px-4 py-12 sm:px-6 md:px-8 border-b border-white/5"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary font-label mb-1">
                Transparencia y Seguridad
              </p>
              <h2
                id="purchase-process-title"
                className="text-xl font-extrabold tracking-tight text-white md:text-2xl font-headline"
              >
                Proceso de Atención y Despacho
              </h2>
            </div>
            <p className="text-xs text-on-surface-variant max-w-md">
              Atención directa para empresas con emisión inmediata de factura y coordinación logística.
            </p>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {purchaseSteps.map((step, index) => (
              <li
                key={step}
                className="group relative flex flex-col rounded-xl border border-white/5 bg-surface-variant/40 p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:bg-surface-variant/80 hover:shadow-xl hover:shadow-black/50"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-primary/20 text-xs font-black text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant group-hover:text-secondary transition-colors duration-300">
                    Paso {index + 1}
                  </span>
                </div>
                <p className="text-xs font-medium leading-relaxed text-white/90 group-hover:text-white transition-colors duration-300">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
