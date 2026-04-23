import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: {
    default: "LUBRISOLUCIONES | Lubricantes y Grasas Industriales en Perú",
    template: "%s | LUBRISOLUCIONES"
  },
  description: "Venta y distribución de lubricantes, aceites, y grasas industriales para maquinaria pesada en Lima y todo el Perú. Soluciones de lubricación de ultra precisión.",
  keywords: ["lubricantes industriales", "grasas para maquinaria", "aceites industriales Perú", "venta de lubricantes Lima", "lubricación de precisión"],
  openGraph: {
    title: "LUBRISOLUCIONES | Lubricantes y Grasas Industriales en Perú",
    description: "Venta y distribución de lubricantes, aceites, y grasas industriales para maquinaria pesada en Lima y todo el Perú.",
    url: "https://lubrisoluciones.devmotec.com",
    siteName: "LUBRISOLUCIONES",
    locale: "es_PE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
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
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_OD!} />
        <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID!} />
      </body>
    </html>
  );
}
