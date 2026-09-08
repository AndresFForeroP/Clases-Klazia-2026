# Guía del Docente — Funciones en Excel
## 8.º Grado — Grupo 1

---

## Objetivo de la Clase

Al finalizar esta sesión académica, los estudiantes deben ser capaces de:

- Explicar la importancia de utilizar atajos de teclado para la productividad y gestión de hojas de cálculo.
- Insertar y eliminar columnas utilizando las combinaciones `Ctrl + Barra espaciadora`, `Ctrl + (+)` y `Ctrl + (-)`.
- Añadir y quitar filas individuales o múltiples con `Shift + Barra espaciadora`, `Ctrl + (+)` y `Ctrl + (-)`.
- Comprender el propósito y utilidad de las listas desplegables para el control de inventarios.
- Configurar una lista desplegable mediante la herramienta de **Validación de Datos** en Excel.

---

## Conceptos Principales

1. **Gestión de Columnas**: Orientación vertical (A, B, C...). Selección rápida con `Ctrl + Barra espaciadora`. Inserción con `Ctrl + (+)` y eliminación con `Ctrl + (-)`.
2. **Gestión de Filas**: Orientación horizontal (1, 2, 3...). Selección rápida con `Shift + Barra espaciadora`. Inserción y eliminación múltiple con `Shift + Flechas`.
3. **Validación de Datos**: Mecanismo de control de Excel que restringe el tipo o rango de valores permitidos en una celda.
4. **Lista Desplegable**: Selector interactivo basado en una lista de origen que agiliza la búsqueda y previene errores de digitación en inventarios comerciales.
5. **Alerta de Error**: Mecanismo automático de Excel que bloquea la entrada de datos inexistentes o mal redactados al usar validación.

---

## Explicación para el Docente

### 1. Inserción y Eliminación Eficiente
En entornos profesionales no se recurre continuamente al menú contextual del ratón (clic derecho) para modificar la estructura de una tabla. Dominar los atajos básicos ahorra horas de trabajo repetitivo:
- Para **columnas**: Se usa la tecla **Ctrl** combinada con la barra espaciadora para seleccionar. Luego, el signo más (+) inserta y el signo menos (-) suprime.
- Para **filas**: Se usa la tecla **Shift** (mayús) combinada con la barra espaciadora para seleccionar. La adición y supresión replican los mismos signos (+) y (-).
- **Inserción múltiple**: Si se seleccionan 3 columnas con `Shift + Flecha`, al pulsar `Ctrl + (+)` se insertarán exactamente 3 columnas nuevas a la vez.

### 2. Listas Desplegables y Validación de Datos
En empresas y comercios con inventarios extensos (cientos o miles de productos), la entrada manual de texto genera inconsistencias graves (por ejemplo: "Verde Oscuro", "verde oscuro", "Verde_Oscuro" o faltas ortográficas). Esto arruina las fórmulas de búsqueda (como `BUSCARV` o `SUMAR.SI`).
- La **Lista Desplegable** asegura que todos los operadores seleccionen de un catálogo estándar predefinido.
- La ruta metodológica es: Pestaña **Datos** > **Validación de datos** > Criterio de validación: **Permitir: Lista** > **Origen: Rango de celdas** (o valores separados por comas).

---

## Cómo Explicarlo

1. **Apertura de la Clase (Diapositivas 1–2)**:
   - Inicie planteando un reto: *"¿Cuánto tardarían en borrar 20 filas alternadas usando el ratón versus usando el teclado?"*
   - Explique que el objetivo de 8.º grado es pasar de usar Excel como una simple libreta a utilizarlo como una herramienta ágil.
2. **Manejo de Columnas (Diapositivas 3–5)**:
   - Proyecte una hoja de cálculo o dibuje la cuadrícula en el tablero.
   - Demuestre la regla nemotécnica: **Ctrl + Espacio = Columna** (ambas empiezan con 'C' o sonido fuerte).
   - Muestre cómo insertar a la izquierda ubicándose en la columna B.
3. **Manejo de Filas (Diapositivas 6–8)**:
   - Contraste inmediato: **Shift + Espacio = Fila**.
   - Muestre la tabla resumen de la Diapositiva 8 para afianzar el mapa conceptual en la mente del estudiante.
4. **Listas Desplegables (Diapositivas 9–12)**:
   - Presente la situación del cliente que consulta por un color en inventario ("Verde oscuro").
   - Explique el procedimiento de 5 pasos en la herramienta de Validación de Datos.
   - Resalte qué ocurre cuando se digita una palabra no autorizada (ventana de advertencia/bloqueo).

---

## Ejemplos Recomendados para Usar en Clase

- **Analogía del Edificio**: Las columnas sostienen el techo de forma vertical (Letras); los pisos o filas se extienden de forma horizontal (Números).
- **Ejemplo del Supermercado**: Si una cajera tuviera que escribir "Leche Deslactosada 1L" a mano en cada venta, cometería errores. En su lugar, el sistema le muestra una lista o un código cerrado.
- **Ejemplo de Tallas de Ropa**: Al comprar en una tienda online, seleccionamos S, M, L desde un menú desplegable. Eso es exactamente una lista de validación de datos.

---

## Preguntas Orales para la Clase

- ¿Por qué al insertar una columna entre A y B debemos posicionarnos en la columna B y no en la A? *(Respuesta: Porque Excel siempre inserta hacia la izquierda de la selección actual).*
- ¿Qué sucedería si eliminamos por error una fila con `Ctrl + (-)`? *(Respuesta: Se puede deshacer de inmediato con `Ctrl + Z`).*
- ¿Qué ventaja tiene seleccionar un rango de origen para la lista desplegable en lugar de escribir las opciones a mano una por una? *(Respuesta: Si agregamos un nuevo color a la columna de origen, la lista se actualiza automáticamente).*

---

## Errores y Confusiones Comunes

| Error frecuente | Causa / Confusión | Aclaración pedagógica |
|----------------|-------------------|-----------------------|
| Confundir `Ctrl + Espacio` con `Shift + Espacio` | Olvido de qué tecla selecciona columna y cuál fila | Recordar: **Ctrl** = Columna vertical; **Shift** = Fila horizontal. |
| Presionar `Ctrl + +` en el teclado alfanumérico sin presionar Shift | En teclados sin teclado numérico dedicado, el signo `+` comparte tecla | Indicar que en teclados de portátiles puede requerirse `Ctrl + Shift + (+)` si la tecla tiene el signo más arriba. |
| Escribir mal el rango en el campo *Origen* de validación | No seleccionar las celdas con el ratón | Recomendar siempre marcar las celdas directamente en la hoja al abrir el recuadro de Origen. |
| Pensar que el aviso de error es una falla del computador | No comprender la función de restricción de la validación | Aclarar que la alerta es el comportamiento correcto: protege la integridad de los datos. |

---

## Actividad Individual — Guía de Aplicación

### Contexto de la Actividad
Una tienda de tecnología tiene una tabla con 3 columnas (A: Código, B: Nombre, C: Precio) y 6 filas de productos registrados.

### Lo que el estudiante debe resolver en su cuaderno:
1. **Paso 1 (Columnas)**: Describir los atajos para insertar 2 nuevas columnas ("Marca" y "Categoría") entre Código (A) y Nombre (B).
2. **Paso 2 (Filas)**: Describir los atajos para seleccionar y eliminar la fila 4 (producto agotado).
3. **Paso 3 (Lista Desplegable)**: Explicar en 3 pasos cómo crear una lista en E2 para seleccionar entre los estados: "Disponible", "Agotado" o "En Bodega".

### Respuestas Esperadas:
- **Paso 1**: Ubicarse en cualquier celda de la Columna B -> Presionar `Ctrl + Barra espaciadora` para seleccionarla -> Presionar `Ctrl + (+)` dos veces (o presionar `Shift + Flecha izquierda` y luego `Ctrl + +`).
- **Paso 2**: Ubicarse en cualquier celda de la Fila 4 -> Presionar `Shift + Barra espaciadora` -> Presionar `Ctrl + (-)`.
- **Paso 3**: Seleccionar la celda E2 -> Ir a la pestaña **Datos** y pulsar **Validación de datos** -> En **Permitir** elegir **<Lista>** -> En **Origen** escribir `Disponible, Agotado, En Bodega` (o seleccionar su rango) -> Clic en **Aceptar**.

### Pauta de Revisión Rápida:
- Tiempo sugerido: **5 a 10 minutos**.
- Criterio de logro: El estudiante reconoce las dos combinaciones de selección (`Ctrl+Espacio` vs `Shift+Espacio`), el uso de `+` para añadir y `-` para borrar, y los parámetros básicos de la ventana de validación de datos.

---

## Ampliación para Grupos Avanzados

- **Mensajes de entrada personalizados**: Explicar cómo en la misma ventana de Validación de Datos se puede configurar la pestaña *«Mensaje de entrada»* para que aparezca un cartel flotante amarillo indicando instrucciones al usuario antes de escribir.
- **Estilos de Alerta de Error**: Mostrar la diferencia entre el estilo *Detener* (bloquea totalmente), *Advertencia* (permite continuar bajo confirmación) e *Información*.
