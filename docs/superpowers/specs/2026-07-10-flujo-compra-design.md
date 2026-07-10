# Flujo de compra en hero y términos

## Objetivo

Mostrar los cuatro pasos de compra sin convertirlos en un panel lateral del hero, y documentar el mismo flujo en la página de términos y condiciones.

## Diseño aprobado

- El hero conserva su imagen, mensaje y acciones, pero ocupa el espacio visible restante después de la navegación fija.
- La sección `¿Cómo comprar?` aparece inmediatamente debajo del hero como una línea de progreso de cuatro estaciones numeradas.
- En pantallas pequeñas, la línea se transforma en una columna vertical para evitar texto comprimido y desbordamientos.
- La página de términos añade una sección `6. Proceso de compra` con los cuatro pasos como condiciones operativas.
- No se añaden políticas de devoluciones, cambios ni reclamos.

## Contenido

1. Cotización formal del producto requerido.
2. Emitimos la factura a nombre de la empresa.
3. Se comparte la cuenta bancaria única del BCP a nombre de Lubricantes Especiales del Perú S.A.C.
4. Se coordina la entrega en almacén o envío.

## Validación

- El hero no debe exceder el viewport inicial bajo la navegación.
- El flujo debe renderizar las cuatro estaciones en desktop y móvil.
- La página `/terminos` debe mostrar la nueva sección y conservar el enlace de contacto.
- Ejecutar lint y build.
