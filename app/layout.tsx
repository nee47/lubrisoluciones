import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CookieBanner from "../components/CookieBanner";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://lubrisoluciones.com"),
  title: {
    default: "LUBRISOLUCIONES | Lubricantes y Grasas Industriales en Perú",
    template: "%s | LUBRISOLUCIONES",
  },
  description:
    "Distribución de lubricantes, aceites sintéticos, y grasas de extrema presión para maquinaria pesada en Lima y todo el Perú. Asesoría de ingeniería y despacho nacional.",
  keywords: [
    "lubricantes industriales",
    "grasas para maquinaria",
    "aceites industriales Perú",
    "venta de lubricantes Lima",
    "lubricación de precisión",
    "aceites sintéticos",
    "lubricantes grado alimentario NSF H1",
    "grasas extrema presión EP",
  ],
  authors: [{ name: "LUBRISOLUCIONES" }],
  creator: "LUBRISOLUCIONES",
  publisher: "LUBRISOLUCIONES",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LUBRISOLUCIONES | Lubricantes y Grasas Industriales en Perú",
    description:
      "Venta y distribución de lubricantes, aceites, y grasas industriales para maquinaria pesada en Lima y todo el Perú.",
    url: "https://lubrisoluciones.com",
    siteName: "LUBRISOLUCIONES",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/image.webp",
        width: 1200,
        height: 630,
        alt: "LUBRISOLUCIONES - Lubricantes Industriales en Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUBRISOLUCIONES | Lubricantes y Grasas Industriales en Perú",
    description:
      "Distribución de aceites y grasas industriales de alto rendimiento en Lima y provincias.",
    images: ["/image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-PE" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} font-body bg-background text-on-background selection:bg-primary/30 selection:text-primary antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_OD!} />
        <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID!} />
      </body>
    </html>
  );
}
