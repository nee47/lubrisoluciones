---
name: catalog-manager
description: Administra, valida y extiende el catálogo de productos y servicios de Lubrisoluciones en lib/productos.ts.
---

# Skill: Catalog Manager (Lubrisoluciones)

Esta skill guía a los agentes al agregar, modificar o validar productos en el catálogo central de Lubrisoluciones ([lib/productos.ts](file:///d:/web/lubrisoluciones/lib/productos.ts)).

## Estructura del Producto (`Product`)

Cada producto debe respetar estrictamente la siguiente interfaz de TypeScript:

```typescript
export interface Product {
  id: string; // Identificador único (ej: "1", "2")
  slug: string; // URL slug único en kebab-case (ej: "aceite-motor-sintetico-5w30")
  name: string; // Nombre comercial del producto
  category: ProductCategory; // Categoría válida
  shortDescription: string; // Resumen conciso (máx. 120 caracteres)
  description: string; // Descripción técnica completa
  viscosity?: string; // Grado SAE o ISO VG si aplica (ej: "5W-30", "ISO VG 68")
  apiStandards?: string[]; // Normas API / ACEA (ej: ["API SP", "ACEA C3"])
  oemApprovals?: string[]; // Aprobaciones de fabricantes (ej: ["MB 229.51", "VW 504.00"])
  applications: string[]; // Usos recomendados
  features: string[]; // Beneficios y características clave
  packaging: string[]; // Presentaciones disponibles (ej: ["1L", "4L", "Tambor 208L"])
  image: string; // Ruta de imagen en /public o URL
  featured?: boolean; // Destacado en la página principal
}
```

## Reglas de Validación al Modificar el Catálogo

1. **Unicidad de Slugs e IDs:** Ningún slug ni id puede repetirse. El slug debe ser seguro para URL (`[a-z0-9-]`).
2. **Campos Obligatorios:** `id`, `slug`, `name`, `category`, `shortDescription`, `description`, `applications`, `features`, `packaging`, `image`.
3. **Imágenes:** Si se añade un nuevo producto, verificar que la imagen exista en `public/` o utilizar un placeholder coherente.
4. **Verificación de Tipos:** Siempre ejecutar `pnpm run typecheck` tras cualquier cambio en el archivo de catálogo.
