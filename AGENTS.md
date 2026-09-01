<!-- BEGIN:nextjs-agent-rules -->
# Next.js 16: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.
<!-- END:nextjs-agent-rules -->

# Directivas del Proyecto Lubrisoluciones

Lubrisoluciones es una plataforma web para la distribución, comercialización y asesoría técnica de lubricantes automotrices e industriales, grasas, refrigerantes y servicios de mantenimiento.

---

## 1. Stack Tecnológico & Convenciones

* **Framework:** Next.js 16.3+ (App Router).
* **UI & React:** React 19 (Server Components por defecto). Usar `'use client'` exclusivamente cuando se requiera interactividad de usuario (hooks como `useState`, `useEffect`, event listeners del navegador).
* **Estilos:** Tailwind CSS v4 con `@tailwindcss/postcss`. No usar directivas obsoletas de Tailwind v3 si no son compatibles.
* **Lenguaje:** TypeScript 5+ con verificación estricta. Todo dato o prop debe estar tipado (`Product`, `Service`, `ContactFormData`, etc.).
* **Iconografía:** `lucide-react`.

---

## 2. Principios de Comportamiento Agéntico

1. **Think Before Coding (Pensar antes de actuar):**
   * Antes de modificar código, identifica la arquitectura y dependencias existentes.
   * Plantea supuestos explícitos y mantén la solución lo más simple posible.
2. **Surgical Changes (Cambios Quirúrgicos):**
   * Modifica únicamente las líneas y componentes estrictamente necesarios para la tarea.
   * Respeta el estilo de código existente. No hagas refactorizaciones no solicitadas en código adyacente.
3. **Goal-Driven & Verification (Verificación Continua):**
   * Todo cambio debe ser validado con los comandos de verificación antes de darse por completado:
     * `pnpm run typecheck` (validar tipos de TypeScript).
     * `pnpm run lint` (validar reglas de ESLint).
     * `pnpm run build` (validar que el build de producción no falle).

---

## 3. Arquitectura y Estructura del Código

* **`app/`**: Rutas del App Router.
  * Cada ruta debe definir metadatos SEO adecuados (`metadata` o `generateMetadata`).
  * Páginas dinámicas como `app/productos/[slug]/page.tsx` deben implementar `generateStaticParams` cuando aplique para prerenderizado óptimo.
* **`components/`**: Componentes reutilizables de UI.
  * Mantener componentes atómicos y desacoplados.
  * Accesibilidad (a11y), atributos `alt` en imágenes y elementos semánticos HTML5.
* **`lib/`**: Lógica de negocio y catálogo de datos.
  * `lib/productos.ts`: Fuente de verdad para el catálogo de productos, categorías y funciones de búsqueda/filtro.
* **`docs/superpowers/`**: Especificaciones (`specs/`) y planes (`plans/`) de nuevas funcionalidades.

---

## 4. MCP Tools & Runtime Diagnostics

El proyecto cuenta con el servidor **Next.js MCP Devtools** (`next-devtools-mcp`) configurado en `.mcp.json`.
Cuando el servidor de desarrollo (`pnpm dev`) esté activo, utiliza las herramientas MCP disponibles para:
* Inspeccionar rutas activas (`get_routes`).
* Detectar errores de compilación o runtime en tiempo real (`get_errors`).
* Consultar metadatos de página y Server Actions (`get_page_metadata`, `get_server_action_by_id`).
