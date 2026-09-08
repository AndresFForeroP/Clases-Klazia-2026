/**
 * Contenido educativo — Grado 8.º Grupo 1
 * Tema: Funciones en Excel (Filas, Columnas y Listas Desplegables)
 *
 * Fuente: cursos/8/8-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel progresivo para 8.º grado.
 */

export const course8_1 = {
  title: 'Funciones en Excel',
  description: 'Presentación interactiva sobre el manejo eficiente de hojas de cálculo: inserción y eliminación rápida de columnas y filas con atajos de teclado, y creación de listas desplegables para validación de datos en inventarios.',
  lessons: [
    {
      id: 'funciones-excel',
      title: 'Funciones en Excel',
      description: 'Presentación académica guiada para la clase presencial de 8.º grado.',
      slides: [
        // ── Diapositiva 1: Portada ──
        {
          type: 'title',
          badge: 'Informática 8.º — Grupo 1',
          title: 'Funciones en Excel',
          subtitle: 'Dominando filas, columnas y listas desplegables con atajos de teclado',
          objectives: [
            'Aprender a insertar y eliminar columnas rápidamente mediante combinaciones de teclas.',
            'Añadir y quitar filas individuales o múltiples con agilidad.',
            'Crear y configurar listas desplegables con Validación de Datos para controlar inventarios y evitar errores.',
          ],
          teacherNotes: '**Sugerencia de inicio:** Pregunte a la clase: \"Cuando necesitan agregar 5 filas o columnas en Excel, ¿hacen clic derecho una por una o conocen una forma más rápida con el teclado?\" Esto despertará su interés por la productividad.',
        },

        // ── Diapositiva 2: Pregunta inicial de conversación ──
        {
          type: 'question',
          question: '¿Por qué los profesionales de informática y finanzas prefieren usar atajos de teclado en Excel en lugar del ratón?',
          context: 'Imagina que estás administrando una tabla con cientos de productos y tienes que editar decenas de filas y columnas todos los días...',
          options: [
            'Porque el ratón no funciona en versiones profesionales de Excel',
            'Porque los atajos de teclado ahorran tiempo y aumentan la velocidad de trabajo',
            'Porque solo con el teclado se pueden guardar los cambios en la hoja',
          ],
          answer: 'Porque los atajos de teclado permiten trabajar con máxima velocidad, precisión y fluidez sin interrumpir el ritmo de trabajo.',
          explanation: 'Aprender combinaciones de teclas clave como **Ctrl + Espacio** o **Shift + Espacio** convierte tareas repetitivas de minutos en acciones de un solo segundo.',
          teacherNotes: 'Genere un diálogo breve sobre la diferencia entre ser un usuario principiante que depende exclusivamente del ratón y un usuario eficiente que aprovecha el teclado.',
        },

        // ── Diapositiva 3: Concepto: Organización de Filas y Columnas ──
        {
          type: 'concept',
          category: 'Fundamentos de la Hoja de Cálculo',
          title: 'Estructura: Columnas y Filas',
          mainIdea: 'Las hojas de cálculo se organizan en **columnas verticales** (letras) y **filas horizontales** (números). Gestionarlas rápidamente es la base de todo trabajo en Excel.',
          definition: 'Al construir tablas dinámicas o inventarios, constantemente necesitamos reorganizar la información: insertar datos faltantes o eliminar registros que ya no se utilizan.',
          keyPoints: [
            '**Columnas**: Se identifican con letras (A, B, C...) y corren verticalmente.',
            '**Filas**: Se identifican con números (1, 2, 3...) y corren horizontalmente.',
            'Para modificarlas con el teclado, primero se **selecciona** la línea completa y luego se aplica la acción.',
          ],
          teacherNotes: 'Recuerde a los estudiantes la orientación espacial: Columnas = Columnas de un edificio (verticales), Filas = Fila del cine (horizontal).',
        },

        // ── Diapositiva 4: Insertar Columnas — Paso a Paso ──
        {
          type: 'concept',
          category: 'Gestión de Columnas',
          title: 'Insertar Columnas con Atajos',
          mainIdea: 'Para agregar columnas nuevas entre datos existentes, usamos la combinación de selección y adición.',
          definition: 'Supongamos que necesitamos agregar dos columnas entre las letras A y B. Nos ubicamos en cualquier casilla de la columna B y seguimos estos pasos:',
          keyPoints: [
            '**Paso 1 (Seleccionar)**: Presiona **Ctrl + Barra espaciadora** para seleccionar toda la columna.',
            '**Modo 1**: Presiona **Ctrl + tecla de más (+)** dos veces para insertar dos columnas consecutivas.',
            '**Modo 2**: Presiona **Shift + Flecha izquierda (←)** para seleccionar dos columnas y luego presiona **Ctrl + tecla de más (+)** una sola vez.',
          ],
          teacherNotes: 'Enfatice que Excel siempre inserta las columnas nuevas a la izquierda de la columna seleccionada. Por eso nos ubicamos en la columna B para insertar entre A y B.',
        },

        // ── Diapositiva 5: Eliminar Columnas ──
        {
          type: 'concept',
          category: 'Gestión de Columnas',
          title: 'Eliminar Columnas con Atajos',
          mainIdea: 'Para borrar columnas innecesarias se aplican los mismos pasos de selección, pero utilizando el signo de menos (-).',
          definition: 'Una vez que te sitúas en cualquier casilla de la columna que deseas quitar, el procedimiento es instantáneo:',
          keyPoints: [
            '**1. Seleccionar la columna**: Oprime **Ctrl + Barra espaciadora** (se marcará toda la columna vertical).',
            '**2. Eliminar**: Presiona **Ctrl + tecla de menos (-)**.',
            'La columna desaparece de inmediato y las columnas adyacentes se reacomodan automáticamente.',
          ],
          teacherNotes: 'Pida a los estudiantes que noten la regla nemotécnica: tecla (+) suma/añade, tecla (-) resta/elimina.',
        },

        // ── Diapositiva 6: Añadir Filas — Paso a Paso ──
        {
          type: 'concept',
          category: 'Gestión de Filas',
          title: 'Añadir Filas con Atajos',
          mainIdea: 'Para insertar filas horizontales, la tecla clave de selección cambia a **Shift + Barra espaciadora**.',
          definition: 'Ubícate en la casilla donde deseas insertar las nuevas filas y ejecuta los pasos de selección y adición:',
          keyPoints: [
            '**Paso 1 (Seleccionar)**: Presiona **Shift + Barra espaciadora** para seleccionar toda la fila horizontal.',
            '**Modo 1**: Presiona **Ctrl + tecla de más (+)** las veces que necesites añadir filas.',
            '**Modo 2**: Presiona **Shift + Flecha abajo (↓)** o **Flecha arriba (↑)** hasta seleccionar el número de filas deseadas y presiona **Ctrl + tecla de más (+)**.',
          ],
          teacherNotes: 'Resalte la diferencia clave entre columnas y filas: Columnas = Ctrl + Espacio. Filas = Shift + Espacio.',
        },

        // ── Diapositiva 7: Eliminar Filas ──
        {
          type: 'concept',
          category: 'Gestión de Filas',
          title: 'Eliminar Filas con Atajos',
          mainIdea: 'Para eliminar una fila que ya no necesitas (por ejemplo, un producto descontinuado), combinas la selección de fila con la tecla menos (-).',
          definition: 'Colócate en cualquier casilla dentro de la fila que quieres suprimir y aplica la secuencia:',
          keyPoints: [
            '**1. Seleccionar la fila**: Oprime **Shift + Barra espaciadora**.',
            '**2. Eliminar**: Pulsa la combinación **Ctrl + tecla de menos (-)**.',
            '¡Listo! La fila se elimina al instante y los registros inferiores suben para ocupar el espacio.',
          ],
          teacherNotes: 'Muestre cómo esto evita tener que seleccionar con el ratón y dar clic derecho -> Eliminar -> Fila entera.',
        },

        // ── Diapositiva 8: Tabla Resumen de Atajos ──
        {
          type: 'diagram',
          category: 'Guía Rápida de Teclado',
          title: 'Resumen de Atajos: Columnas vs Filas',
          subtitle: 'Aprende este mapa mental para dominar la edición de hojas de cálculo:',
          diagramType: 'table',
          tableHeaders: ['Elemento', 'Seleccionar Todo', 'Añadir / Insertar', 'Eliminar / Quitar'],
          tableRows: [
            ['Columna (Vertical)', 'Ctrl + Barra espaciadora', 'Ctrl + tecla (+)', 'Ctrl + tecla (-)'],
            ['Fila (Horizontal)', 'Shift + Barra espaciadora', 'Ctrl + tecla (+)', 'Ctrl + tecla (-)'],
            ['Múltiples elementos', 'Shift + Flechas (← → ↑ ↓)', 'Ctrl + tecla (+)', 'Ctrl + tecla (-)'],
          ],
          teacherNotes: 'Haga que los estudiantes repitan oralmente el patrón: Ctrl+Espacio es Columna, Shift+Espacio es Fila; (+) agrega y (-) borra.',
        },

        // ── Diapositiva 9: Pregunta conversacional ──
        {
          type: 'question',
          question: '¿Qué creen que ocurriría si intentamos buscar manualmente un producto en un inventario de 2.000 filas revisando celda por celda?',
          context: 'Imagina a un cliente esperando en caja mientras revisas casilla por casilla si hay disponibilidad...',
          options: [
            'Es el método más seguro y rápido en hojas de cálculo',
            'Tomaría demasiado tiempo y existe un alto riesgo de equivocarse o escribir mal el nombre',
            'Excel se bloquearía si no revisamos celda por celda',
          ],
          answer: 'Tomaría demasiado tiempo y existe un alto riesgo de error humano al escribir o buscar.',
          explanation: 'Para solucionar este problema y agilizar la búsqueda, Excel incluye herramientas como la **Lista Desplegable** mediante la **Validación de Datos**.',
          teacherNotes: 'Esta pregunta prepara la transición pedagógica hacia la segunda parte de la clase: Listas Desplegables y Validación de Datos.',
        },

        // ── Diapositiva 10: Concepto: Lista Desplegable ──
        {
          type: 'concept',
          category: 'Validación de Datos',
          title: '¿Qué es una Lista Desplegable?',
          mainIdea: 'Es una función avanzada y práctica de Excel que crea un **menú selector en una celda** para consultar o ingresar datos específicos.',
          definition: 'Funciona como un pequeño buscador donde seleccionas o escribes un valor (por ejemplo, colores, categorías o códigos) y te asegura si el dato es válido o pertenece al inventario.',
          analogy: '**Ejemplo de la vida cotidiana:** Cuando compras ropa por internet y eliges la talla (S, M, L, XL) desde un menú desplegable en lugar de escribirla a mano para no cometer errores.',
          keyPoints: [
            'Evita errores de digitación (como escribir \"verde oskuro\" en vez de \"Verde oscuro\").',
            'Agiliza la consulta en inventarios comerciales.',
            'Restringe la celda para que solo acepte valores permitidos.',
          ],
          teacherNotes: 'Explique que la lista desplegable es una forma de \"Validación de Datos\": garantiza la calidad e integridad de la información.',
        },

        // ── Diapositiva 11: Configuración Paso a Paso ──
        {
          type: 'example',
          category: 'Procedimiento Práctico',
          title: '¿Cómo Crear una Lista Desplegable?',
          subtitle: 'Configuración mediante la herramienta de Validación de Datos:',
          icon: '⚙️',
          description: 'Supongamos que tienes una columna de colores en tu inventario y quieres una casilla de consulta rápida para tus clientes.',
          features: [
            '**Paso 1**: Selecciona una celda vacía (fuera de la columna de colores) donde estará el buscador.',
            '**Paso 2**: En la barra superior, haz clic en la pestaña **«Datos»** y selecciona **«Validación de datos»**.',
            '**Paso 3**: En la ventana que aparece, en la opción **<Permitir>**, abre el menú y elige **<Lista>**.',
            '**Paso 4**: En el campo **<Origen>**, selecciona con el ratón el rango de celdas que contiene la lista de colores.',
            '**Paso 5**: Haz clic en el botón **Aceptar** para guardar la configuración.',
          ],
          analogy: '**Resultado visual:** Aparecerá una pequeña flecha negra al lado derecho de la casilla para desplegar todas las opciones.',
          teacherNotes: 'Describa verbalmente la ventana de diálogo de Validación de Datos. Resalte los dos campos clave: Permitir: Lista y Origen: Rango de datos.',
        },

        // ── Diapositiva 12: Control de Errores en el Inventario ──
        {
          type: 'example',
          category: 'Caso Práctico de Inventario',
          title: 'Uso en Inventarios y Detección de Errores',
          subtitle: '¿Qué ocurre al consultar o teclear un producto?',
          icon: '📦',
          description: 'Si un cliente pregunta si dispones de un producto en color \"Verde oscuro\", simplemente haces clic en la flecha de la lista desplegable o escribes el término en la celda.',
          features: [
            '**Si el producto existe**: Se selecciona directamente de la lista y se confirma la disponibilidad al instante.',
            '**Si no existe o se escribe mal**: Excel bloquea la entrada y muestra automáticamente una **ventana de anuncio de error**.',
            '**Beneficio comercial**: Garantiza que ningún empleado registre productos inexistentes o precios incorrectos por equivocación.',
          ],
          analogy: '**Regla de oro:** Excel actúa como un filtro inteligente que protege la base de datos de datos falsos o mal escritos.',
          teacherNotes: 'Muestre a los alumnos que el mensaje de error de Excel no es una falla, sino un mecanismo de seguridad para proteger los datos.',
        },

        // ── Diapositiva 13: Actividad Individual ──
        {
          type: 'activity',
          title: 'ACTIVIDAD',
          activityTitle: 'Gestor de Inventario en Hoja de Cálculo',
          icon: '📝',
          instructions: 'Lee con atención la siguiente situación de una tienda de tecnología y responde en tu cuaderno de forma individual:',
          steps: [
            'Situación: Tienes una hoja de Excel con 3 columnas (A: Código, B: Nombre, C: Precio) y 6 filas de productos registrados.',
            'Paso 1: Escribe la combinación exacta de teclas para insertar 2 nuevas columnas entre Código (A) y Nombre (B) para agregar \"Marca\" y \"Categoría\".',
            'Paso 2: Escribe los atajos de teclado necesarios para seleccionar y eliminar la fila 4 completa, ya que ese producto se agotó.',
            'Paso 3: Describe en 3 pasos breves cómo crearías una Lista Desplegable en la casilla E2 para que el vendedor solo pueda seleccionar entre los estados: \"Disponible\", \"Agotado\" o \"En Bodega\".',
          ],
          tip: 'Tiempo estimado: 5 a 10 minutos. Trabaja de forma individual aplicando los atajos y pasos de validación vistos en clase.',
          teacherNotes: '**Respuestas esperadas:**\n1. Ubicarse en columna B, presionar Ctrl + Barra espaciadora, y luego Ctrl + (+) dos veces (o Shift + Flecha y Ctrl + +).\n2. Ubicarse en fila 4, presionar Shift + Barra espaciadora, y luego Ctrl + (-).\n3. Seleccionar E2 -> Pestaña Datos -> Validación de datos -> En Permitir elegir <Lista> -> En Origen escribir o seleccionar los estados -> Clic en Aceptar.',
        },

        // ── Diapositiva 14: Resumen ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Lo que debes recordar hoy:',
          points: [
            '**Ctrl + Barra espaciadora** selecciona columnas; **Shift + Barra espaciadora** selecciona filas.',
            'La combinación **Ctrl + (+)** inserta elementos nuevos y **Ctrl + (-)** los elimina rápidamente.',
            'Se puede usar **Shift + Flechas** para seleccionar múltiples columnas o filas consecutivas antes de modificarlas.',
            'La **Lista Desplegable** (creada desde Pestaña Datos > Validación de datos > Lista) agiliza consultas y previene errores en inventarios.',
          ],
          teacherNotes: 'Pida a uno o dos estudiantes que mencionen cuál atajo les pareció más útil para sus futuros trabajos escolares.',
        },
      ],
    },
  ],
}
