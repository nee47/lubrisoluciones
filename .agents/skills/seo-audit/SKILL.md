---
name: seo-audit
description: Guía de auditoría y buenas prácticas SEO, OpenGraph y metadatos estructurados para Lubrisoluciones.
---

# Skill: SEO & Metadata Auditor (Lubrisoluciones)

Esta skill define los estándares de optimización técnica en buscadores (SEO) para el sitio web de Lubrisoluciones.

## 1. Metadatos en Páginas (Next.js 16 Metadata API)

* **Páginas Estáticas (`app/*/page.tsx`):**
  Definir siempre el objeto `metadata` exportado:
  ```typescript
  import type { Metadata } from 'next';

  export const metadata: Metadata = {
    title: 'Nombre de la Página | Lubrisoluciones',
    description: 'Descripción optimizada para intención de búsqueda (140-160 caracteres).',
    openGraph: {
      title: '...',
      description: '...',
      images: ['/images/og-default.jpg'],
    },
  };
  ```

* **Páginas Dinámicas (`app/productos/[slug]/page.tsx`):**
  Utilizar `generateMetadata`:
  ```typescript
  export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) return { title: 'Producto no encontrado | Lubrisoluciones' };

    return {
      title: `${product.name} | Lubrisoluciones`,
      description: product.shortDescription,
      openGraph: {
        title: product.name,
        description: product.shortDescription,
        images: [product.image],
      },
    };
  }
  ```

## 2. Sitemap y Robots

* Mantener sincronizados [app/sitemap.ts](file:///d:/web/lubrisoluciones/app/sitemap.ts) y [app/robots.ts](file:///d:/web/lubrisoluciones/app/robots.ts) cada vez que se agreguen nuevas rutas o secciones públicas.
* Toda URL en el sitemap debe usar la URL canónica base (`https://lubrisoluciones.com` o configurada por variable de entorno).

## 3. Datos Estructurados (JSON-LD)

* En fichas de producto ([app/productos/[slug]/page.tsx](file:///d:/web/lubrisoluciones/app/productos/[slug]/page.tsx)), incluir scripts JSON-LD de tipo `Product` o `LocalBusiness` para enriquecer snippets en Google.
