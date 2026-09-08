# Guía del Docente — Anatomía HTML
## 9.º Grado — Grupo 1

---

## Objetivo de la Clase

Al finalizar esta sesión académica, los estudiantes deben ser capaces de:

- Definir con precisión técnica qué es HTML (*HyperText Markup Language*) y argumentar por qué es un lenguaje de marcado y no de programación.
- Describir la jerarquía y función de la estructura básica de un documento web (`<html>`, `<head>`, `<body>`).
- Clasificar y diferenciar entre etiquetas emparejadas (con apertura y cierre) y etiquetas vacías o autocontenidas (`<img>`, `<br>`, `<meta>`, etc.).
- Identificar y formular la sintaxis adecuada de los atributos HTML (`nombre="valor"`) en las etiquetas de apertura.
- Analizar y diagnosticar fragmentos de código HTML identificando elementos estructurales, metadatos y propiedades.

---

## Conceptos Principales

1. **Lenguaje de Marcado**: Sistema de códigos basados en etiquetas que delimitan y otorgan significado semántico y jerárquico al contenido textual y multimedia.
2. **Jerarquía Estructural**:
   - `<html>`: Elemento raíz contenedor global.
   - `<head>`: Cabecera contenedora de metadatos, configuraciones técnicas y título de pestaña (`<title>`). No es visible directamente en el área principal de navegación.
   - `<body>`: Contenedor de todos los elementos visuales renderizables en la página.
3. **Delimitadores `<` y `>`**: Símbolos sintácticos fundamentales que permiten al motor del navegador distinguir etiquetas de marcado frente a texto plano ordinario.
4. **Etiquetas Emparejadas**: Elementos que delimitan contenido y exigen etiqueta de apertura `<tag>` y etiqueta de cierre `</tag>`.
5. **Etiquetas Vacías (Autocontenidas)**: Elementos atómicos que no encierran texto independiente y no requieren etiqueta de cierre separada (ej. `<img>`, `<br>`, `<hr>`, `<meta>`, `<input>`).
6. **Atributos HTML**: Pares clave-valor (`nombre="valor"`) situados en la etiqueta de apertura para dotar de propiedades, dimensiones, rutas de archivos (`src`) o enlaces (`href`).

---

## Explicación para el Docente

### 1. Desmitificar HTML como "Programación"
Uno de los errores conceptuales más arraigados en secundaria es llamar a HTML un "lenguaje de programación". Es vital aclarar desde el inicio:
- Un lenguaje de programación ejecuta **algoritmos**, maneja **variables en memoria**, toma **decisiones condicionales** (*if/else*) y repite **bucles** (*for/while*).
- HTML es un estándar de **marcado descriptivo y semántico**. Le dice al navegador: *"Esto es un encabezado importante (`<h1>`), esto es un párrafo (`<p>`), y esto es una imagen (`<img>`)"*. 

### 2. La Trilogía Web
Para dar perspectiva a los estudiantes de 9.º grado, explique la arquitectura en tres capas del desarrollo web:
1. **HTML (Estructura / Esqueleto)**: El tema de hoy.
2. **CSS (Presentación / Estilo y Diseño)**: Colores, tipografías, márgenes y distribución.
3. **JavaScript (Comportamiento / Interactividad)**: Lógica, animaciones interactivas, respuestas a eventos.

### 3. La Anatomía Sintáctica de una Etiqueta
Desglose en el tablero un elemento completo:
```html
<a href="https://ejemplo.com" target="_blank">Haz clic aquí</a>
```
- `<a`: Inicio de apertura.
- `href="https://ejemplo.com"`: Atributo obligatorio para definir la dirección web de destino.
- `target="_blank"`: Atributo opcional para abrir en nueva pestaña.
- `>`: Cierre de la etiqueta de apertura.
- `Haz clic aquí`: Contenido visible.
- `</a>`: Etiqueta de cierre con barra diagonal.

---

## Cómo Explicarlo

1. **Demostración Inicial (Diapositivas 1–2)**:
   - Abra cualquier página web real en el proyector, presione `Ctrl + U` (o clic derecho > Inspeccionar / Ver código fuente).
   - Muestre a los estudiantes que detrás de cualquier interfaz visual moderna lo que existe es texto HTML estructurado.
2. **Definición y Jerarquía (Diapositivas 3–5)**:
   - Utilice la analogía del cuerpo humano: El contenedor `<html>` es la persona completa. `<head>` es la mente/cerebro (guarda el nombre, metadatos y configuraciones invisibles), y `<body>` es el cuerpo visible (todo lo que interactúa con el mundo exterior).
3. **Clasificación de Etiquetas (Diapositivas 6–7)**:
   - Plantee la pregunta: *"¿Por qué una imagen `<img>` no necesita una etiqueta de cierre `</img>` como los párrafos?"*
   - Explique que las imágenes no encierran texto: se autocontienen y cargan el archivo mediante el atributo `src`.
4. **Atributos y Desglose Anatómico (Diapositivas 8–10)**:
   - Muestre el formato estricto `nombre="valor"`. Recalque el uso de comillas dobles y el peligro de no cerrar etiquetas emparejadas.

---

## Ejemplos Recomendados para Usar en Clase

- **Analogía del Libro**: `<html>` es el libro encuadernado; `<head>` es la página de derechos de autor y ficha bibliográfica; `<body>` son todos los capítulos, títulos y fotos que lee el usuario.
- **Analogía del Contenedor / Caja**: Las etiquetas emparejadas son como cajas con tapa: pones algo adentro y cierras la caja (`<p>...</p>`). Las etiquetas vacías son como sellos o calcomanías (`<br>`, `<img>`): se estampan en un punto exacto sin necesidad de encerrar nada.

---

## Preguntas Orales para la Clase

- Si ponemos una etiqueta `<h1>` dentro del bloque `<head>`, ¿qué creen que ocurriría en el navegador? *(Respuesta: Rompe la semántica web; el navegador intentará corregirlo o no lo mostrará en el cuerpo de la página).*
- ¿Por qué es fundamental que los nombres de los atributos estén siempre dentro de la etiqueta de apertura y nunca en la de cierre? *(Respuesta: La etiqueta de cierre solo sirve como delimitador final `</tag>`, no acepta propiedades).*
- ¿Qué diferencia hay entre el atributo `src` (en `<img>`) y el atributo `href` (en `<a>`)? *(Respuesta: `src` proviene de source/origen e inserta un recurso multimedia directo; `href` proviene de hypertext reference y define el destino de navegación).*

---

## Errores y Confusiones Comunes

| Error frecuente | Causa / Confusión | Aclaración pedagógica |
|----------------|-------------------|-----------------------|
| Olvidar la barra diagonal `/` al cerrar | Confundir `<p>` con `</p>` | Sin la barra `/`, el navegador cree que se está abriendo un nuevo párrafo en lugar de cerrar el anterior. |
| Poner texto visible dentro de `<head>` | No distinguir la función de metadatos de `<head>` | `<head>` es solo para configuraciones no visibles (salvo el título de la pestaña). Todo lo visible va en `<body>`. |
| Escribir atributos sin comillas en los valores | Descuido de sintaxis | Aunque algunos navegadores son tolerantes, la norma estándar exige `propiedad="valor"`. |
| Confundir etiquetas vacías con etiquetas emparejadas | Intentar cerrar `<img>` con `</img>` | Las etiquetas autocontenidas cargan su contenido mediante atributos o acciones directas. |

---

## Actividad Individual — Guía de Aplicación

### Contexto de la Actividad
Se proporciona un bloque de código HTML correspondiente al "Portal Estudiantil" del colegio:
```html
<html>
  <head>
    <title>Portal Estudiantil</title>
  </head>
  <body>
    <h1>Noticias del Colegio</h1>
    <p>Consulta las actividades del mes:</p>
    <img src="evento.jpg" width="400">
    <br>
    <a href="inscripcion.html">Inscribirme ahora</a>
  </body>
</html>
```

### Lo que el estudiante debe resolver en su cuaderno:
1. **Paso 1 (Estructura vs Visibilidad)**: Identificar qué etiquetas son de estructura principal y cuáles contienen elementos visibles.
2. **Paso 2 (Clasificación)**: Nombrar 2 etiquetas emparejadas y 2 etiquetas vacías del código.
3. **Paso 3 (Atributos)**: Identificar 3 atributos en el código, indicando su etiqueta contenedora y función.
4. **Paso 4 (Modificación técnica)**: Explicar qué líneas o valores modificar para ampliar la imagen a 600px y cambiar el destino del enlace a "contacto.html".

### Respuestas Esperadas:
- **Paso 1**: Estructura general: `<html>`, `<head>`, `<body>`. Visibles: `<h1>`, `<p>`, `<img>`, `<br>`, `<a>`.
- **Paso 2**: Emparejadas: `<html>`, `<head>`, `<title>`, `<body>`, `<h1>`, `<p>`, `<a>`. Vacías: `<img>`, `<br>`.
- **Paso 3**:
  - `src="evento.jpg"` en `<img>` (indica la ruta del archivo de imagen).
  - `width="400"` en `<img>` (define el ancho en píxeles).
  - `href="inscripcion.html"` en `<a>` (especifica el archivo/página web a la que redirige el enlace).
- **Paso 4**: Cambiar `width="400"` por `width="600"` en la etiqueta `<img>`, y cambiar `href="inscripcion.html"` por `href="contacto.html"` en la etiqueta `<a>`.

### Pauta de Revisión Rápida:
- Tiempo sugerido: **5 a 10 minutos**.
- Criterio de logro: El alumno distingue claramente las etiquetas de metadatos de las visuales, identifica etiquetas vacías frente a emparejadas y formula correctamente la modificación de atributos.

---

## Ampliación para Grupos Avanzados

- **El Doctype (`<!DOCTYPE html>`)**: Explicar la declaración inicial que informa al navegador que el documento sigue el estándar moderno de HTML5.
- **Atributos Globales (`id`, `class`)**: Introducir brevemente cómo estos atributos preparan el terreno para vincular estilos CSS y comportamientos dinámicos con JavaScript en lecciones posteriores.
- **El atributo `alt` en imágenes**: Conectar con buenas prácticas de accesibilidad web para lectores de pantalla de personas con discapacidad visual.
