/**
 * Contenido educativo — Grado 9.º Grupo 1
 * Tema: Anatomía HTML
 *
 * Fuente: cursos/9/9-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel analítico para 9.º grado.
 */

export const course9_1 = {
  title: 'Anatomía HTML',
  description: 'Presentación interactiva sobre la estructura fundamental de la web: qué es HTML como lenguaje de marcado, jerarquía básica del documento (html, head, body), etiquetas emparejadas y vacías, y uso de atributos.',
  lessons: [
    {
      id: 'anatomia-html',
      title: 'Anatomía HTML',
      description: 'Presentación académica guiada para la clase presencial de 9.º grado.',
      slides: [
        // ── Diapositiva 1: Portada ──
        {
          type: 'title',
          badge: 'Informática 9.º — Grupo 1',
          title: 'Anatomía HTML',
          subtitle: 'Estructura, etiquetas y atributos: el esqueleto de la web',
          objectives: [
            'Comprender qué es HTML y por qué se clasifica como lenguaje de marcado y no de programación.',
            'Identificar la jerarquía estructural básica de un documento web (html, head, body).',
            'Diferenciar entre etiquetas emparejadas y etiquetas vacías o autocontenidas.',
            'Analizar la función, sintaxis y tipos de atributos en las etiquetas HTML.',
          ],
          teacherNotes: '**Sugerencia de inicio:** Abra un sitio web en el navegador, haga clic derecho -> \"Ver código fuente de la página\" y pregunte: \"¿Qué es todo este texto lleno de signos < y >? ¿Cómo hace el navegador para convertir este código en lo que vemos en pantalla?\"',
        },

        // ── Diapositiva 2: Pregunta inicial de conversación ──
        {
          type: 'question',
          question: '¿Por qué se dice formalmente que HTML NO es un lenguaje de programación?',
          context: 'Piensa en las características de un lenguaje de programación como Python o C++ (variables, bucles, operaciones matemáticas, algoritmos)...',
          options: [
            'Porque HTML solo funciona en computadores antiguos',
            'Porque HTML no procesa lógica ni ejecuta algoritmos; define la estructura y semántica del contenido',
            'Porque HTML es únicamente un formato de diseño gráfico de colores',
          ],
          answer: 'Porque HTML no ejecuta lógica ni cálculos algorítmicos; es un lenguaje de marcado que estructura y organiza el contenido.',
          explanation: 'HTML significa **Lenguaje de Marcado de Hipertexto** (*HyperText Markup Language*). Su objetivo es indicarle al navegador qué parte es un título, qué es un párrafo, qué es un hipervínculo o qué es una imagen.',
          teacherNotes: 'Enfatice el error común de llamar \"programador\" a quien solo escribe HTML. HTML estructura (el esqueleto), CSS estiliza (la ropa/piel) y JavaScript añade comportamiento y lógica (los músculos/cerebro).',
        },

        // ── Diapositiva 3: Concepto: ¿Qué es HTML? ──
        {
          type: 'concept',
          category: 'Definición Fundamental',
          title: '¿Qué es el Lenguaje HTML?',
          mainIdea: 'HTML es el código estándar que se utiliza para **estructurar y desplegar** una página web y todos sus contenidos.',
          definition: 'Consiste en una serie de **elementos y etiquetas** que se utilizan para encerrar diferentes partes del contenido (textos, listas, tablas, multimedia) para que se vean o comporten de una manera específica.',
          keyPoints: [
            '**Hipertexto**: Texto interactivo que permite enlazar a otras páginas o recursos.',
            '**Marcado**: Sistema de marcas (etiquetas) que añade significado y jerarquía al texto plano.',
            'Las etiquetas pueden convertir una palabra o imagen en un enlace, aplicar énfasis, agrandar títulos o agrupar datos.',
          ],
          teacherNotes: 'Explique que sin HTML, los navegadores solo recibirían un bloque continuo de texto plano sin títulos, párrafos ni imágenes.',
        },

        // ── Diapositiva 4: Estructura Básica de un Documento ──
        {
          type: 'concept',
          category: 'Jerarquía del Documento',
          title: 'La Estructura Básica HTML',
          mainIdea: 'Todo documento web sigue un orden jerárquico estricto compuesto por tres bloques principales: `<html>`, `<head>` y `<body>`.',
          definition: 'Esta estructura le indica al navegador dónde inicia el sitio, qué información de configuración posee y qué elementos deben mostrarse en pantalla.',
          keyPoints: [
            '**`<html>`**: La etiqueta raíz. Indica el comienzo y el fin de toda la página web.',
            '**`<head>`**: Cabecera descriptiva. Contiene metadatos, título de pestaña, enlaces a estilos y configuración no visible directamente.',
            '**`<body>`**: Cuerpo del documento. Conforma todos los elementos visibles (párrafos, títulos, imágenes, botones y tablas).',
          ],
          teacherNotes: 'Use la analogía del cuerpo humano: Cabeza (head = datos, mente, metadatos) y Cuerpo (body = lo visible y tangible en pantalla).',
        },

        // ── Diapositiva 5: Diagrama de la Jerarquía HTML ──
        {
          type: 'diagram',
          category: 'Arquitectura Visual',
          title: 'Jerarquía de un Documento HTML',
          subtitle: 'Cómo organiza el navegador la información de una página web:',
          diagramType: 'comparison',
          columns: [
            {
              badge: '<html>',
              title: 'Raíz del Documento',
              desc: 'Encapsula **absolutamente todo** el código de la página web. Nada puede existir fuera de esta etiqueta principal.',
            },
            {
              badge: '<head>',
              title: 'Metadatos (No Visible)',
              desc: 'Contiene el **`<title>`** de la pestaña del navegador, configuraciones de idioma, autores y enlaces a hojas de estilo.',
            },
            {
              badge: '<body>',
              title: 'Contenido Visible',
              desc: 'Alberga los títulos **`<h1>`**, párrafos **`<p>`**, imágenes **`<img>`**, hipervínculos **`<a>`** y formularios que el usuario ve e interactúa.',
            },
          ],
          teacherNotes: 'Recalque que cualquier texto o imagen colocada dentro de <head> no se mostrará en la ventana principal del navegador, o causará errores de renderizado.',
        },

        // ── Diapositiva 6: Delimitadores y Tipos de Etiquetas ──
        {
          type: 'concept',
          category: 'Sintaxis de Etiquetas',
          title: 'Delimitadores y Tipos de Etiquetas',
          mainIdea: 'Todas las etiquetas están constituidas al inicio y al final por los signos **`<`** y **`>`** que marcan su apertura y cierre.',
          definition: 'Para que el lenguaje HTML funcione correctamente, los elementos se clasifican según su necesidad de cerrarse en dos grandes grupos: Etiquetas Emparejadas y Etiquetas Vacías.',
          keyPoints: [
            'Los signos **`<`** (menor que) y **`>`** (mayor que) indican al navegador que se trata de una instrucción HTML y no de texto común.',
            '**Etiquetas Emparejadas**: Funcionan en parejas (apertura y cierre).',
            '**Etiquetas Vacías / Autocontenidas**: No requieren etiqueta de cierre independiente.',
          ],
          teacherNotes: 'Explique que olvidar el signo > o la barra / es el error de sintaxis más común entre desarrolladores principiantes.',
        },

        // ── Diapositiva 7: Emparejadas vs Vacías (Comparativa) ──
        {
          type: 'diagram',
          category: 'Clasificación de Etiquetas',
          title: 'Etiquetas Emparejadas vs Etiquetas Vacías',
          subtitle: 'Comprende la diferencia sintáctica y funcional entre ambos tipos:',
          diagramType: 'comparison',
          columns: [
            {
              badge: '📦 Emparejadas',
              title: 'Vienen en Pares (< > y </ >)',
              desc: 'Tienen una etiqueta de apertura y una de cierre con una barra diagonal (**/**).\n\n**Función**: Encierran contenido de texto o anidan otros elementos.\n\n**Ejemplos**:\n• `<p>Texto del párrafo</p>`\n• `<h1>Título Principal</h1>`\n• `<b>Texto en negrita</b>`\n• `<a>Enlace a otra web</a>`\n• `<title>Título pestaña</title>`',
            },
            {
              badge: '⚡ Vacías / Autocontenidas',
              title: 'No Requieren Cierre Separado',
              desc: 'No encierran contenido de texto por sí mismas; insertan un recurso o aplican un salto directo.\n\n**Función**: Representan elementos atómicos o cargan recursos externos.\n\n**Ejemplos**:\n• `<img>` (Inserta una imagen)\n• `<br>` (Salto de línea)\n• `<hr>` (Línea divisoria horizontal)\n• `<meta>` (Metadatos de la página)\n• `<input>` (Campo de entrada de formulario)',
            },
          ],
          teacherNotes: 'Pida a los estudiantes que identifiquen por qué `<br>` o `<img>` no necesitan texto de cierre: porque la imagen se carga mediante una ruta y el salto de línea es una acción puntual.',
        },

        // ── Diapositiva 8: Concepto: Atributos HTML ──
        {
          type: 'concept',
          category: 'Propiedades y Metadatos',
          title: '¿Qué son los Atributos HTML?',
          mainIdea: 'Los atributos son **propiedades adicionales** que se agregan dentro de la etiqueta de apertura para modificar su comportamiento o aportar información extra.',
          definition: 'Definen características específicas de cualquier elemento de la página web; por ejemplo, dimensiones (ancho/alto), fuentes de recursos, destinos de enlace o metadatos informativos.',
          keyPoints: [
            'Siempre se escriben en la **etiqueta de apertura** con el formato `nombre="valor"`.',
            '**`width` y `height`**: Definen el ancho y alto de un elemento como una imagen.',
            '**`src`**: Especifica la ruta o ubicación del archivo a mostrar (en imágenes o videos).',
            '**`href`**: Indica la URL de destino de un hipervínculo (`<a>`).',
            '**Metaetiquetas**: Almacenan información de configuración como `name="description"`, `content="..."` y `type="..."`.',
          ],
          teacherNotes: 'Explique la regla: \"Una etiqueta dice QUÉ es el elemento, pero los atributos dicen CÓMO se comporta o DE DÓNDE proviene\".',
        },

        // ── Diapositiva 9: Ejemplo Desglosado: Anatomía de un Elemento ──
        {
          type: 'example',
          category: 'Anatomía en Detalle',
          title: 'Anatomía de un Elemento Completo',
          subtitle: 'Desarmando una instrucción HTML paso a paso:',
          icon: '🔬',
          description: 'Analicemos el siguiente elemento de enlace: `<a href=\"https://google.com\" target=\"_blank\">Ir al Buscador</a>`',
          features: [
            '**`<a`** → **Etiqueta de apertura**: Indica que comienza un elemento de hipervínculo.',
            '**`href=\"https://google.com\"`** → **Atributo y valor**: `href` es la propiedad; `\"https://google.com\"` es la dirección de destino.',
            '**`target=\"_blank\"`** → **Atributo secundario**: Ordena al navegador abrir el enlace en una pestaña nueva.',
            '**`Ir al Buscador`** → **Contenido**: Texto visible para el usuario sobre el que se puede hacer clic.',
            '**`</a>`** → **Etiqueta de cierre**: Indica el final exacto del hipervínculo con el delimitador `/`.',
          ],
          analogy: '**Regla sintáctica:** El contenido queda protegido y marcado entre la etiqueta de apertura y la etiqueta de cierre.',
          teacherNotes: 'Escriba este desglose en el tablero si es necesario. Asegúrese de que todos distingan: Nombre de etiqueta, Atributo, Valor del atributo, Contenido y Cierre.',
        },

        // ── Diapositiva 10: Pregunta de Análisis Técnico ──
        {
          type: 'question',
          question: '¿Qué pasaría visual y estructuralmente en una página web si un desarrollador escribe `<p><b>Texto de prueba</p>` olvidando cerrar `</b>`?',
          context: 'Analiza el anidamiento y la regla de apertura y cierre de las etiquetas emparejadas...',
          options: [
            'El navegador se apaga automáticamente y borra el archivo',
            'El texto siguiente continuará apareciendo en negrita de forma no deseada hasta que encuentre un cierre o cause fallas de renderizado',
            'No ocurre nada porque el navegador elimina las etiquetas no cerradas automáticamente',
          ],
          answer: 'El navegador continuará aplicando el estilo de negrita al resto del texto de la página, alterando toda la estructura visual.',
          explanation: 'Las etiquetas emparejadas deben cerrarse en el orden inverso al que se abrieron. Si no se cierra `</b>`, el navegador asume que todo lo que sigue sigue siendo texto en negrita.',
          teacherNotes: 'Fomente la cultura del código limpio y riguroso. Explique el concepto de anidamiento correcto: \"Lo que se abre de último, se cierra de primero\".',
        },

        // ── Diapositiva 11: Actividad Individual ──
        {
          type: 'activity',
          title: 'ACTIVIDAD',
          activityTitle: 'Análisis y Diagnóstico de Código HTML',
          icon: '💻',
          instructions: 'Analiza de forma individual el siguiente fragmento de código HTML y responde las 4 preguntas en tu cuaderno:',
          steps: [
            'Código a examinar:\n<html>\n  <head>\n    <title>Portal Estudiantil</title>\n  </head>\n  <body>\n    <h1>Noticias del Colegio</h1>\n    <p>Consulta las actividades del mes:</p>\n    <img src="evento.jpg" width="400">\n    <br>\n    <a href="inscripcion.html">Inscribirme ahora</a>\n  </body>\n</html>',
            'Paso 1: Identifica cuáles etiquetas pertenecen a la estructura principal y cuáles contienen elementos visibles en pantalla.',
            'Paso 2: Clasifica 2 etiquetas emparejadas y 2 etiquetas vacías presentes en el código.',
            'Paso 3: Identifica los 3 atributos presentes en el código, indicando a qué etiqueta pertenecen y qué función cumple cada uno.',
            'Paso 4: Si quisiéramos cambiar el tamaño de la imagen a 600 píxeles de ancho y hacer que el enlace apunte a \"contacto.html\", ¿qué partes exactas del código deberíamos modificar?',
          ],
          tip: 'Tiempo estimado: 5 a 10 minutos. Trabaja de forma individual aplicando la anatomía, clasificación y sintaxis vistas en clase.',
          teacherNotes: '**Respuestas esperadas:**\n1. Estructura: <html>, <head>, <body>. Visibles: <h1>, <p>, <img>, <br>, <a>.\n2. Emparejadas: <html>, <head>, <title>, <body>, <h1>, <p>, <a>. Vacías: <img>, <br>.\n3. Atributos: src="evento.jpg" (origen de imagen en <img>), width="400" (ancho en <img>), href="inscripcion.html" (destino en <a>).\n4. Modificar width="600" en <img> y href="contacto.html" en <a>.',
        },

        // ── Diapositiva 12: Resumen ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Lo que debes recordar hoy:',
          points: [
            'HTML es un **lenguaje de marcado** que define la estructura y semántica de los documentos web, no un lenguaje de programación.',
            'Todo documento tiene una **estructura básica jerárquica**: `<html>` (raíz), `<head>` (metadatos/configuración) y `<body>` (contenido visible).',
            'Las **etiquetas emparejadas** encierran contenido y requieren cierre (`<tag>...</tag>`), mientras que las **etiquetas vacías** (`<img>`, `<br>`, `<meta>`) no requieren cierre.',
            'Los **atributos** se escriben en la etiqueta de apertura (`nombre=\"valor\"`) y permiten personalizar dimensiones, enlaces, rutas y propiedades de los elementos.',
          ],
          teacherNotes: 'Haga una síntesis rápida y recuerde a los alumnos que en las próximas sesiones aprenderán a redactar sus propias páginas web completas en HTML.',
        },
      ],
    },
  ],
}
