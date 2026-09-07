/**
 * Contenido educativo — Grado 7.º Grupo 1
 * Tema: Introducción a las Hojas de Cálculo
 *
 * Fuente: cursos/7/7-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Lenguaje claro, cercano y visual para 7.º grado.
 */

export const course7_1 = {
  title: 'Introducción a las Hojas de Cálculo',
  description: 'Presentación interactiva para dominar los fundamentos de las hojas de cálculo, libros, celdas, rangos y barras de herramientas.',
  lessons: [
    {
      id: 'hojas-de-calculo',
      title: 'Introducción a las Hojas de Cálculo',
      description: 'Presentación académica guiada para la clase presencial de 7.º grado.',
      slides: [
        // ── Diapositiva 1: Portada y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 7.º — Grupo 1',
          title: 'Introducción a las Hojas de Cálculo',
          subtitle: 'Aprende a organizar datos, automatizar cuentas y trabajar con Microsoft Excel',
          objectives: [
            'Comprender qué es una hoja de cálculo y para qué sirve en la vida real.',
            'Diferenciar entre libro, hoja, filas, columnas, celdas y rangos.',
            'Identificar las partes clave de la pantalla: barra de fórmulas y menús.',
          ],
          teacherNotes: '**Sugerencia de inicio:** Pregunte a la clase: "¿Alguna vez han tenido que sumar una lista larguísima de precios o notas a mano?". Conecte con la necesidad de calcular automáticamente sin equivocarse.',
        },

        // ── Diapositiva 2: Pregunta disparadora de conversación ──
        {
          type: 'question',
          question: '¿Qué harías si tuvieras que sumar los precios de 500 productos de una tienda?',
          context: 'Imagina que trabajas en un supermercado y debes calcular el total de inventario...',
          options: [
            'Sumar uno por uno con papel y lápiz',
            'Usar una calculadora durante varias horas',
            'Escribir los datos en una Hoja de Cálculo y sumar todo en un segundo',
          ],
          answer: 'Usar una Hoja de Cálculo para que el computador haga la suma automáticamente en un segundo.',
          explanation: 'La mayor virtud de una hoja de cálculo es que realiza cálculos automáticos al instante y, si cambias un precio, ¡todo el total se recalcula solo!',
          teacherNotes: 'Permita que 2 o 3 estudiantes opinen antes de hacer clic en **"Revelar respuesta"**.',
        },

        // ── Diapositiva 3: Concepto Principal ──
        {
          type: 'concept',
          category: 'Concepto Fundamental',
          title: '¿Qué es una Hoja de Cálculo Electrónica?',
          mainIdea: 'Es un programa diseñado para **organizar datos en tablas** y realizar cualquier cálculo, análisis o gráfico de forma automática.',
          definition: 'Permite manipular presupuestos, inventarios, encuestas y registros escolares. El ejemplo más conocido en el mundo es **Microsoft Excel**.',
          keyPoints: [
            'Permite modificar datos fácilmente sin borrar todo.',
            'Aplica fórmulas a un dato y las replica al resto.',
            'Crea gráficos automáticos a partir de los datos ingresados.',
          ],
          teacherNotes: 'Enfatice la gran ventaja: una fórmula creada una sola vez sirve para miles de filas.',
        },

        // ── Diapositiva 4: Analogía Libro vs. Hoja ──
        {
          type: 'concept',
          category: 'Estructura de Trabajo',
          title: 'El Archivo es un "Libro" con "Hojas"',
          mainIdea: 'En Excel, el archivo completo se llama **Libro** y puede contener múltiples **Hojas de cálculo** en su interior.',
          definition: 'Cada hoja es un espacio de trabajo independiente donde colocamos datos o gráficos, todo guardado en un solo archivo.',
          analogy: '**Como tu cuaderno de clase:** Tu cuaderno es el libro completo y cada página que pasas es una hoja de trabajo distinta.',
          keyPoints: [
            'Las pestañas en la parte inferior permiten cambiar de hoja con un clic.',
            'La hoja activa siempre aparece con su nombre en **negrita**.',
            'Puedes agregar, renombrar o eliminar hojas según lo necesites.',
          ],
          teacherNotes: 'Muestre mentalmente cómo en un solo libro un negocio puede tener una hoja para "Enero", otra para "Febrero" y otra para "Gráficos".',
        },

        // ── Diapositiva 5: Diagrama Filas y Columnas ──
        {
          type: 'diagram',
          category: 'Estructura de la Cuadrícula',
          title: 'Filas, Columnas y Celdas',
          subtitle: 'La hoja de cálculo es una cuadrícula perfecta organizada por coordenadas:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Vertical',
              title: 'Columnas',
              desc: 'Se leen en sentido vertical y se identifican con **LETRAS** (A, B, C, D...).',
              metrics: { 'Orientación': 'Vertical ↓', 'Identificador': 'Letras del alfabeto' },
            },
            {
              badge: 'Horizontal',
              title: 'Filas',
              desc: 'Se leen en sentido horizontal y se identifican con **NÚMEROS** (1, 2, 3, 4...).',
              metrics: { 'Orientación': 'Horizontal →', 'Identificador': 'Números' },
            },
            {
              badge: 'Intersección',
              title: 'Celda',
              desc: 'Es el cruce entre una columna y una fila. Es la **unidad mínima** para guardar un dato.',
              metrics: { 'Ejemplo': 'B3 (Columna B, Fila 3)', 'Dato': 'Texto o Número' },
            },
          ],
          teacherNotes: 'Pida a un estudiante que señale qué coordenada tendría la primera celda arriba a la izquierda (A1).',
        },

        // ── Diapositiva 6: Celda Activa ──
        {
          type: 'concept',
          category: 'Interacción en Pantalla',
          title: 'La Celda Activa',
          mainIdea: 'Es la celda que está **seleccionada en ese instante** y lista para recibir información.',
          definition: 'Cuando escribes con el teclado, el texto o número se situará siempre dentro de la celda activa que tiene el borde resaltado.',
          analogy: '**Como el cursor parpadeante:** En un procesador de texto escribes donde titila el cursor; en Excel escribes donde esté la celda activa.',
          keyPoints: [
            'Tiene un recuadro o borde grueso a su alrededor.',
            'Su dirección exacta se muestra en el cuadro de nombres.',
            'Puedes mover la celda activa con el ratón o con las flechas del teclado.',
          ],
          teacherNotes: 'Haga notar que si no nos fijamos en qué celda está activa, podemos sobreescribir datos por error.',
        },

        // ── Diapositiva 7: Rangos de Celdas y Operador Dos Puntos ──
        {
          type: 'concept',
          category: 'Manejo de Datos en Bloque',
          title: '¿Qué es un Rango de Celdas?',
          mainIdea: 'Un **rango** es un bloque o conjunto de celdas adyacentes seleccionadas al mismo tiempo.',
          definition: 'Se define indicando la celda superior izquierda y la celda inferior derecha, unidas por el operador **dos puntos (:)**.',
          analogy: '**Ejemplo de rango:** `A1:B5` significa "todas las celdas desde la A1 hasta la B5".',
          keyPoints: [
            'Permite aplicar una fórmula o color a muchas celdas a la vez.',
            'El operador `:` significa "hasta".',
            'Se les puede asignar un nombre propio para usarlos más fácil.',
          ],
          teacherNotes: 'Enfatice el uso de los dos puntos (:). Es fundamental para las fórmulas que aprenderán más adelante.',
        },

        // ── Diapositiva 8: Cómo Seleccionar Celdas ──
        {
          type: 'example',
          category: 'Procedimiento Práctico',
          title: 'Métodos de Selección en la Hoja',
          subtitle: 'Celdas continuas frente a celdas discontinuas:',
          icon: '🖱️',
          description: 'En Excel podemos seleccionar grupos de celdas que están juntas o celdas que están en diferentes lugares de la pantalla.',
          analogy: 'Arrastrar el ratón para celdas continuas | Mantener presionada la tecla Ctrl para celdas separadas',
          features: [
            '**Celdas continuas**: Haz clic en la primera celda y arrastra el ratón hasta la última sin soltar el botón.',
            '**Celdas no adyacentes (separadas)**: Selecciona el primer grupo, mantén oprimida la tecla **Ctrl** y selecciona las demás celdas.',
            '**Nombrar rangos**: Puedes bautizar un rango con un nombre (ej. "Precios_Mayo") para no tener que memorizar coordenadas.',
          ],
          teacherNotes: 'Explique el truco de la tecla Ctrl; a los estudiantes les encanta descubrir cómo seleccionar celdas salteadas.',
        },

        // ── Diapositiva 9: Menús y Barras de la Pantalla ──
        {
          type: 'diagram',
          category: 'Elementos de la Interfaz',
          title: 'Las Barras Clave de Microsoft Excel',
          subtitle: 'Los elementos indispensables que debes conocer en la pantalla:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Herramientas',
              title: 'Menú y Botones',
              desc: 'Organizado por pestañas (Archivo, Inicio, Ver...). Ofrece botones rápidos como Guardar, Imprimir o Formato.',
            },
            {
              badge: 'Fundamental',
              title: 'Barra de Fórmulas',
              desc: 'Permite ver y editar el contenido real de la celda. Muestra la operación matemática mientras la celda muestra el resultado final.',
            },
            {
              badge: 'Información',
              title: 'Barra de Estado',
              desc: 'Ubicada en la parte inferior. Informa el estado del programa, opciones activas y resúmenes automáticos rápidos.',
            },
          ],
          teacherNotes: 'Subraye la diferencia: En la celda ves el resultado (ej. 50), pero en la barra de fórmulas ves el cálculo real (ej. =25+25).',
        },

        // ── Diapositiva 10: Pregunta de Análisis en Clase ──
        {
          type: 'question',
          question: 'Si quieres seleccionar desde la celda C2 hasta la celda C15, ¿cómo se escribe ese rango?',
          context: 'Aplica la regla del operador que aprendimos hace un momento...',
          options: ['C2 - C15', 'C2 : C15', 'C2 a C15', 'C2 -> C15'],
          answer: 'C2:C15',
          explanation: 'En las hojas de cálculo, el operador oficial para definir un rango continuo entre dos esquinas son los **dos puntos (:)**.',
          teacherNotes: 'Haga que toda la clase responda al unísono antes de revelar la respuesta.',
        },

        // ── Diapositiva 11: Actividad Individual ──
        {
          type: 'activity',
          title: 'ACTIVIDAD: Mi Primera Hoja de Cálculo',
          activityTitle: 'Diseño y lectura de coordenadas en una tabla de datos',
          icon: '📝',
          instructions: 'En tu cuaderno o en la computadora, realiza de forma individual la siguiente tarea práctica (5–10 minutos):',
          steps: [
            'Dibuja una pequeña cuadrícula con 3 columnas (A: Producto, B: Cantidad, C: Precio) y 4 filas (1: Encabezados, 2, 3, 4 con 3 productos escolares).',
            'Identifica y anota la coordenada exacta (letra y número) de la celda donde escribiste el precio del segundo producto.',
            'Escribe cómo se representaría el rango que contiene todos los precios de los 3 productos (utilizando el operador :).',
            'Explica brevemente qué diferencia hay entre lo que se ve en la celda y lo que se ve en la Barra de Fórmulas.',
          ],
          tip: 'Tiempo estimado: 5 a 10 minutos. Es un ejercicio individual y muy sencillo para comprobar que dominas las coordenadas.',
          teacherNotes: 'Monitoree las mesas mientras los estudiantes completan el ejercicio. Revise que utilicen correctamente la notación de dos puntos.',
        },

        // ── Diapositiva 12: Resumen de Cierre ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Lo que debes recordar hoy:',
          points: [
            'Una **hoja de cálculo** organiza datos en tablas y automatiza operaciones matemáticas y estadísticas.',
            'El archivo completo es un **Libro** y puede contener múltiples **Hojas** intercambiables.',
            'Las **Columnas** son verticales (Letras) y las **Filas** son horizontales (Números). Su intersección es una **Celda** (ej. B4).',
            'Un **Rango** es un conjunto de celdas adyacentes y se escribe con dos puntos (`A1:C10`).',
            'La **Barra de Fórmulas** muestra la operación real mientras que la celda exhibe el resultado calculado.',
          ],
          teacherNotes: 'Haga un repaso oral de 2 minutos destacando estos 5 puntos antes de finalizar la sesión.',
        },
      ],
    },
  ],
}
