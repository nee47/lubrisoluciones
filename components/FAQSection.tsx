"use client";

import { useState } from "react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Cómo saber qué grado de viscosidad o tipo de aceite requiere mi maquinaria?",
    answer:
      "La viscosidad y formulación adecuada dependen de la recomendación del fabricante original (OEM), la temperatura de operación, la carga de trabajo y el tipo de sistema (hidráulico, compresor, reductor o rodamientos). En LUBRISOLUCIONES contamos con ingenieros especialistas que analizan su manual de equipo y le indican la equivalencia técnica exacta (ISO VG 32, 46, 68, 100, 220, etc.).",
  },
  {
    question: "¿Qué diferencia existe entre un lubricante grado alimentario NSF H1 y uno convencional?",
    answer:
      "Los lubricantes con certificación NSF H1 están formulados con aceites base y aditivos atóxicos aprobados para contacto accidental con alimentos, bebidas y medicamentos (según FDA 21 CFR 178.3570). A diferencia de los industriales convencionales, son inoloros, incoloros, no manchan y cuentan con certificaciones Kosher y Halal.",
  },
  {
    question: "¿Realizan despachos y envíos de lubricantes a provincias en todo el Perú?",
    answer:
      "Sí. Realizamos entregas inmediatas en almacén en Lima (Los Olivos) y despachos coordinados a través de agencias de carga certificadas hacia todo el territorio peruano (Arequipa, Trujillo, Piura, Cusco, Huancayo, Pucallpa, etc.) en presentaciones de baldes, tambores de 208L y cajas de aerosoles.",
  },
  {
    question: "¿Qué certificaciones y normativas cumplen sus lubricantes y grasas?",
    answer:
      "Nuestros productos cumplen con estrictos estándares internacionales como ISO (normas ISO 6743, ISO VG), DIN 51524 (HLP para hidráulicos), API (clasificaciones de servicio), AGMA (para reductores) y certificaciones sanitarias NSF H1 para la industria alimentaria.",
  },
  {
    question: "¿Cuáles son los métodos de pago y el proceso de facturación para empresas?",
    answer:
      "Emitimos factura electrónica oficial a nombre de su empresa. Los pagos se realizan de manera 100% segura mediante transferencia a nuestra cuenta bancaria empresarial única del BCP a nombre de Lubricantes Especiales del Perú S.A.C.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      aria-labelledby="faq-title"
      className="py-14 sm:py-18 bg-surface/60 border-t border-white/5 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-primary font-label mb-2">
            Resolución de Dudas Frecuentes
          </p>
          <h2
            id="faq-title"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-headline"
          >
            Preguntas Frecuentes sobre Lubricación Industrial
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-xl mx-auto mt-2">
            Respuestas directas sobre viscosidades, normas sanitarias NSF H1, despacho en Perú y cotización formal.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-primary/40 bg-surface-variant/60 shadow-lg shadow-black/40"
                    : "border-white/5 bg-surface/80 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-white font-headline leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-lg transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-primary" : "text-on-surface-variant"
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-white/5 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Script
        id="faq-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
