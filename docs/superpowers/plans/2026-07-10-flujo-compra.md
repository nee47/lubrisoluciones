# Flujo de compra en hero y términos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Añadir el flujo de compra de cuatro pasos bajo el hero y reflejarlo en términos y condiciones.

**Architecture:** `HeroSection` seguirá siendo el punto de composición del inicio: el hero tendrá una altura calculada con `100svh - 80px` y la ruta de compra será un bloque hermano dentro del componente. La página legal recibirá una sección adicional reutilizando sus estilos existentes.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript.

## Global Constraints

- El hero debe entrar completo en el viewport inicial bajo la navegación fija.
- El contenido visible debe conservar los cuatro textos proporcionados.
- El layout de pasos no debe estar a la derecha del hero.
- Solo se actualiza el flujo de compra en términos y condiciones.

### Task 1: Actualizar composición del hero

**Files:**
- Modify: `components/HeroSection.tsx`

- [ ] Ajustar la altura del hero con clases responsive para descontar la navegación y añadir una sección de progreso debajo.
- [ ] Usar una línea horizontal en desktop y una línea vertical en móvil, con conectores decorativos y texto accesible.

### Task 2: Actualizar términos y condiciones

**Files:**
- Modify: `app/terminos/page.tsx`

- [ ] Añadir `6. Proceso de compra` después de las secciones existentes, con los cuatro pasos y lenguaje de condición operativa.
- [ ] Corregir los textos de términos tocados que aparecen con codificación incorrecta.

### Task 3: Verificar

**Files:**
- No additional files.

- [ ] Ejecutar `pnpm.cmd lint`.
- [ ] Ejecutar `pnpm.cmd build`.
- [ ] Revisar `/` y `/terminos` en desktop y móvil, comprobando que no haya desbordamiento ni overlays.
