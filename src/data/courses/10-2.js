/**
 * Contenido educativo — Grado 10.º Grupo 2
 * Tema: Lenguaje Informático y Estructuras de Comunicación
 *
 * Fuente académica estricta: cursos/10/10-2.md
 * Formato: Presentación Académica Interactiva por Diapositivas
 * Regla pedagógica: UNA SOLA IDEA PRINCIPAL POR DIAPOSITIVA
 * Secuencia: COMPRENDER → EXPLICAR CON SENCILLEZ → EJEMPLIFICAR → RELACIONAR → PROFUNDIZAR
 *
 * Estructura de clase:
 * - Sin cuestionario / quiz final.
 * - Sin preguntas de verdadero / falso.
 * - Sin preguntas heredadas antiguas.
 * - UNA sola ACTIVIDAD individual práctica (5-10 min).
 */

export const course10_2 = {
  title: 'Lenguajes Informáticos',
  description: 'Sistemas estructurados de comunicación con el computador: lenguajes de programación, pseudocódigo, lenguajes de marcas, lenguajes de consulta y protocolos especializados.',
  lessons: [
    {
      id: 'lenguaje-informatico',
      title: 'Lenguajes Informáticos y Estructuras de Comunicación',
      description: 'Presentación interactiva sobre la naturaleza, familias y aplicaciones de los lenguajes informáticos.',
      slides: [
        // ── Diapositiva 1: Portada y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 10.º — Grupo 2',
          title: 'Lenguajes Informáticos',
          subtitle: 'Sistemas estructurados de comunicación hombre-máquina y sus familias',
          objectives: [
            'Definir qué es un lenguaje informático y diferenciarlo del lenguaje natural humano.',
            'Comprender la distinción crítica: por qué lenguaje informático no es sinónimo exclusivo de programación.',
            'Analizar las características del pseudocódigo como herramienta de abstracción lógica.',
            'Identificar la función de los lenguajes de marcas (HTML/XML) y argumentar por qué no son lenguajes de programación.',
            'Examinar los lenguajes de consulta (SQL/XQuery) y otras familias especializadas (especificación, protocolos, gráficos y sonido).',
          ],
          teacherNotes: '**Inicio de sesión:** Pregunte a la clase si consideran que HTML o el inglés que usamos para chatear son lenguajes informáticos. Utilice el debate inicial para motivar la necesidad de precisión conceptual.',
        },

        // ── Diapositiva 2: Lenguaje Natural vs Lenguaje Informático ──
        {
          type: 'concept',
          category: 'Fundamento de Comunicación',
          title: 'Lenguaje Humano vs. Lenguaje Informático',
          mainIdea: 'Las personas nos comunicamos con palabras cargadas de emoción y contexto; los computadores exigen **sistemas estructurados, formales y sin ambigüedad**.',
          analogy: 'Un amigo entiende si le dices "pásame eso que está allí", porque usa la mirada y el sentido común. Un computador se bloquearía o daría error: necesita saber el identificador exacto de la memoria y la instrucción precisa.',
          keyPoints: [
            '**Lenguaje natural humano**: Expresa sentimientos, redacta noticias objetivas o define términos en diccionarios con flexibilidad y tolerancia al error.',
            '**Lenguaje informático**: Sistema artificial estructurado con sintaxis estricta y semántica unívoca diseñado para interactuar con máquinas.',
            '**Cero ambigüedad**: En informática, una misma instrucción no puede tener dos interpretaciones distintas.',
          ],
          teacherNotes: 'Conecte con los textos informativos y emocionales citados en el Markdown para mostrar el contraste entre la comunicación social humana y la comunicación hombre-máquina.',
        },

        // ── Diapositiva 3: Definición de Lenguaje Informático ──
        {
          type: 'concept',
          category: 'Definición Central',
          title: '¿Qué es un Lenguaje Informático?',
          mainIdea: 'Es cualquier **sistema estructurado y formal** utilizado por, o asociado con, ordenadores para comunicarse, dar instrucciones o procesar datos.',
          definition: 'Es el medio por el cual los seres humanos instruimos a las computadoras para que realicen tareas específicas, respondan a comandos del sistema o procesen grandes volúmenes de información eficazmente.',
          keyPoints: [
            '**Estructura formal**: Posee reglas de escritura (sintaxis) y un significado exacto para cada símbolo (semántica).',
            '**Propósito amplio**: No se limita a calcular; sirve para dar órdenes, estructurar documentos, almacenar datos o transmitir paquetes en red.',
            '**Interpretable por máquinas**: Debe ser traducible a señales eléctricas o código binario que los circuitos procesen.',
          ],
          teacherNotes: 'Enfatice la frase del Markdown: "cualquier sistema estructurado utilizado para comunicarse con una computadora". Esto amplía la visión más allá de solo escribir código en Python o Java.',
        },

        // ── Diapositiva 4: Distinción Crucial: Informático vs Programación ──
        {
          type: 'diagram',
          category: 'Distinción Crucial',
          title: 'Lenguaje Informático vs. de Programación',
          subtitle: 'El error conceptual más frecuente es utilizarlos como si fueran sinónimos:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Categoría General',
              title: 'Lenguaje Informático',
              desc: 'Toda forma estructurada de comunicación con la máquina. Incluye marcas, consultas, protocolos de red, estilos y lógica algorítmica.',
              metrics: { 'Alcance': 'Conjunto mayor (Universo)', 'Ejemplos': 'HTML, SQL, HTTP, CSS, Python' },
            },
            {
              badge: 'Subconjunto Específico',
              title: 'Lenguaje de Programación',
              desc: 'Tipo especializado de lenguaje informático diseñado para crear algoritmos, manipular memoria con variables y tomar decisiones lógicas.',
              metrics: { 'Alcance': 'Subconjunto operativo', 'Ejemplos': 'Python, Java, C++, JavaScript' },
            },
            {
              badge: 'Regla de Oro',
              title: 'Relación de Inclusión',
              desc: '**Todo lenguaje de programación es un lenguaje informático**, pero **NO todo lenguaje informático es un lenguaje de programación**.',
              metrics: { 'Condición clave': 'Variables + Algoritmos', 'Diferencia': 'Capacidad de cómputo' },
            },
          ],
          teacherNotes: 'Use el diagrama de Venn mental: imagine un círculo grande (Lenguajes Informáticos) y dentro de él un círculo más pequeño (Lenguajes de Programación). Fuera del círculo pequeño quedan HTML, SQL, HTTP, etc.',
        },

        // ── Diapositiva 5: Lenguajes de Programación ──
        {
          type: 'concept',
          category: 'Familia 1 — Cómputo y Algoritmos',
          title: 'Lenguajes de Programación',
          mainIdea: 'Son lenguajes informáticos capaces de expresar **algoritmos ejecutables, control de flujo y manipulación de datos**.',
          definition: 'Permiten escribir secuencias de instrucciones que transforman datos de entrada en resultados mediante variables, operadores matemáticos, condicionales y estructuras repetitivas.',
          keyPoints: [
            '**Control de flujo**: Toman decisiones lógicas en tiempo real (condicionales *if/else*) y repiten tareas (*bucles for/while*).',
            '**Manejo de estado**: Crean y modifican variables en la memoria RAM mientras el programa se ejecuta.',
            '**Aplicaciones reales**: Desarrollo de software de escritorio, aplicaciones móviles, inteligencia artificial y videojuegos.',
          ],
          teacherNotes: 'Muestre ejemplos reconocibles: Python en analítica de datos, C# en videojuegos (Unity), JavaScript en interactividad web.',
        },

        // ── Diapositiva 6: Pseudocódigo ──
        {
          type: 'example',
          category: 'Familia 2 — Abstracción Algorítmica',
          title: 'Pseudocódigo: Pensar antes de Codificar',
          subtitle: 'Un lenguaje informático de diseño y lógica pura:',
          icon: '📝',
          description: 'El pseudocódigo permite escribir algoritmos utilizando palabras del lenguaje cotidiano dentro de una estructura lógica formal, abstrayéndonos de la sintaxis rígida de un lenguaje de programación.',
          analogy: 'Es como el plano arquitectónico de una casa: define dónde van las puertas y columnas sin preocuparse todavía por la marca de la pintura o el tipo de tornillos.',
          features: [
            '**Cercano al humano**: Utiliza palabras legibles como *INICIO*, *LEER*, *SI... ENTONCES*, *MIENTRAS*, *FIN*.',
            '**Foco en la lógica**: Evita errores de puntuación (puntos y comas, llaves) para concentrarse en resolver el problema.',
            '**Es un lenguaje informático**: Aunque no se ejecute directamente en la CPU sin un intérprete didáctico, estructura formalmente la computación.',
          ],
          teacherNotes: 'Destaque la indicación del Markdown: "aunque parezca demasiado cercano al humano, se considera un lenguaje informático" porque modela algoritmos con rigor.',
        },

        // ── Diapositiva 7: Lenguajes de Marcas ──
        {
          type: 'concept',
          category: 'Familia 3 — Documentos y Estructura',
          title: 'Lenguajes de Marcas (Markup Languages)',
          mainIdea: 'Utilizan **etiquetas delimitadoras para dar formato y estructurar** la información de un documento o mensaje.',
          definition: 'Derivan de la tradición editorial donde los correctores colocaban anotaciones en el papel para indicar cómo imprimir un encabezado o una cita. En computación, organizan el texto para que los navegadores o aplicaciones sepan cómo mostrarlo.',
          analogy: 'Son como etiquetas adhesivas en cajas de una mudanza: la etiqueta "FRÁGIL: PLATOS" no lava ni cocina los platos; solo indica qué hay dentro de la caja y cómo tratarla.',
          keyPoints: [
            '**Sintaxis de etiquetas**: Encierran el contenido con apertura y cierre (ej. `<titulo>` y `</titulo>`).',
            '**Semántica documental**: Indican qué rol cumple cada fragmento (título, párrafo, tabla, enlace).',
            '**Estándares universales**: HTML para la estructura de la World Wide Web y XML para intercambio neutral de datos entre sistemas.',
          ],
          teacherNotes: 'Explique que "Markup" traduce "marcado" o "etiquetado". El navegador web lee las etiquetas HTML para armar el árbol visual de la página.',
        },

        // ── Diapositiva 8: Tabla Comparativa: ¿Por qué HTML NO es Programación? ──
        {
          type: 'diagram',
          category: 'Análisis Técnico',
          title: '¿Por qué HTML NO es un Lenguaje de Programación?',
          subtitle: 'Comparación técnica rigurosa de capacidades:',
          diagramType: 'table',
          tableHeaders: ['Criterio Técnico', 'Lenguaje de Marcas (HTML)', 'Lenguaje de Programación (JS, Python)'],
          tableRows: [
            ['Propósito principal', 'Estructurar contenido con etiquetas semánticas', 'Resolver algoritmos y procesar datos'],
            ['Variables y memoria', 'No tiene variables; no reserva memoria dinámica', 'Declara variables, arreglos y objetos'],
            ['Estructuras de control', 'No posee condicionales (if/else) ni bucles (for/while)', 'Evalúa lógica booleana y ejecuta repeticiones'],
            ['Cálculos matemáticos', 'Incapaz de sumar dos números por sí mismo', 'Realiza operaciones matemáticas y lógicas'],
            ['¿Es lenguaje informático?', 'SÍ (comunica estructura al computador)', 'SÍ (comunica instrucciones algorítmicas)'],
          ],
          teacherNotes: 'Revise esta tabla fila por fila. Esta distinción es una pregunta clásica en entrevistas técnicas y exámenes de admisión universitaria en ingeniería.',
        },

        // ── Diapositiva 9: Lenguajes de Consulta ──
        {
          type: 'concept',
          category: 'Familia 4 — Gestión de Datos',
          title: 'Lenguajes de Consulta (Query Languages)',
          mainIdea: 'Diseñados específicamente para **interrogar, filtrar y recuperar datos** almacenados en sistemas de información.',
          definition: 'Permiten solicitar información precisa a una base de datos mediante un enfoque declarativo: el usuario indica QUÉ datos desea obtener y el motor de la base de datos se encarga del CÓMO extraerlos del almacenamiento.',
          keyPoints: [
            '**Bases de datos relacionales**: SQL (*Structured Query Language*), el estándar mundial para consultar tablas indexadas.',
            '**Recuperación de información**: XQuery y motores de búsqueda para extraer fragmentos en repositorios de documentos XML.',
            '**Ejemplo concreto**: `SELECT nombre, promedio FROM estudiantes WHERE grado = 10;` extrae exactamente los registros solicitados sin alterar el programa principal.',
          ],
          teacherNotes: 'Destaque la división del Markdown: lenguajes de consulta de bases de datos relacionales y lenguajes de recuperación de información documental.',
        },

        // ── Diapositiva 10: Otras Familias Especializadas ──
        {
          type: 'diagram',
          category: 'Familia 5 — Especialidades Informáticas',
          title: 'Otras Familias de Lenguajes Informáticos',
          subtitle: 'Sistemas formales para redes, multimedia y especificación:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Modelado y Transformación',
              title: 'Especificación y XSLT',
              desc: '**Lenguajes de especificación**: describen formalmente qué debe hacer un sistema sin programarlo aún. **Lenguajes de transformación (XSLT)**: convierten datos de un formato a otro de forma automática.',
              metrics: { 'Función': 'Diseño y conversión', 'Ejemplo': 'XSLT (XML a HTML)' },
            },
            {
              badge: 'Redes y Telecomunicaciones',
              title: 'Protocolos de Comunicación',
              desc: '**Protocolos (HTTP, FTP)**: reglas estructuradas que usan las máquinas para dialogar por internet, solicitar archivos y confirmar transferencias seguras.',
              metrics: { 'Función': 'Diálogo en red', 'Ejemplo': 'HTTP (Web) / FTP (Archivos)' },
            },
            {
              badge: 'Multimedia y Arte Digital',
              title: 'Lenguajes Gráficos y de Sonido',
              desc: '**Lenguaje gráfico (SVG, PostScript)**: define figuras vectoriales mediante matemáticas. **Lenguaje de sonido (MIDI, Csound)**: programa eventos sonoros, notas y ritmos sintéticos.',
              metrics: { 'Función': 'Generación audiovisual', 'Ejemplo': 'SVG (Vectores) / MIDI (Música)' },
            },
          ],
          teacherNotes: 'Haga notar que todos estos ejemplos figuran explícitamente en el Markdown de 10-2. Muestran que la informática abarca sonido, dibujo, redes y arquitectura de datos.',
        },

        // ── Diapositiva 11: Diagrama de Integración en una App Real ──
        {
          type: 'diagram',
          category: 'Integración Tecnológica',
          title: '¿Cómo conviven en una Aplicación Real?',
          subtitle: 'Cuando un usuario inicia sesión en una plataforma web, interactúan en equipo:',
          diagramType: 'flow',
          nodes: [
            { icon: '📄', label: '1. Marcas (HTML)', desc: 'Dibuja el formulario y las casillas de texto' },
            { icon: '⚙️', label: '2. Programación (JS)', desc: 'Valida que la contraseña tenga mínimo 8 caracteres' },
            { icon: '📡', label: '3. Protocolo (HTTP)', desc: 'Empaqueta y transporta los datos cifrados por la red' },
            { icon: '🗄️', label: '4. Consulta (SQL)', desc: 'Verifica en la base de datos si el usuario existe' },
            { icon: '🎨', label: '5. Gráfico (SVG)', desc: 'Renderiza el ícono de perfil en la pantalla del usuario' },
          ],
          teacherNotes: 'Recorra el flujo paso a paso: cada familia cumple un rol insustituible. La programación no reemplaza a las marcas ni a las consultas; colaboran para hacer funcionar la tecnología.',
        },

        // ── Diapositiva 12: Actividad Individual Práctica ──
        {
          type: 'activity',
          title: 'ACTIVIDAD: Clasificador Profesional de Lenguajes',
          activityTitle: 'Diagnóstico y clasificación técnica de sistemas informáticos',
          icon: '💻',
          instructions: 'De forma individual en tu cuaderno o documento digital, analiza los siguientes 4 casos y responde con fundamentación técnica (5–10 minutos):',
          steps: [
            'Caso 1: Un sistema ejecuta la orden: `SELECT nombre, saldo FROM cuentas WHERE saldo < 0;`. Identifica a qué familia pertenece y cuál es su objetivo.',
            'Caso 2: Un documento contiene: `<producto><nombre>Laptop</nombre><precio>800</precio></producto>`. Explica por qué es un lenguaje de marcas y justifica por qué no es programación.',
            'Caso 3: Un analista escribe: `SI temperatura > 35 ENTONCES activar_ventilador() SINO apagar()`. Determina si es pseudocódigo y explica por qué se considera un lenguaje informático.',
            'Caso 4: Un compañero te dice: "Si una herramienta no tiene variables ni bucles while, no es un lenguaje informático". Escribe un argumento de 2 líneas para refutarlo citando dos ejemplos.',
          ],
          tip: 'Tiempo estimado: 5 a 10 minutos. Trabajo estrictamente individual. Utiliza la regla de oro: todo lenguaje de programación es informático, pero no todo lenguaje informático programa.',
          teacherNotes: 'Respuestas esperadas: Caso 1: Lenguaje de consulta (SQL), extrae datos de deudores en una BD. Caso 2: Lenguaje de marcas (XML/HTML), estructura datos con etiquetas pero no ejecuta algoritmos ni variables. Caso 3: Pseudocódigo, modelo algorítmico formal abstracto para humanos y computación. Caso 4: Falso; HTML, SQL, HTTP o SVG son lenguajes informáticos sin requerir bucles while.',
        },

        // ── Diapositiva 13: Resumen y Cierre de Lección ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Puntos fundamentales para recordar:',
          points: [
            'Un **lenguaje informático** es cualquier sistema estructurado formal usado para comunicarse con un computador o procesar información.',
            '**Lenguaje natural vs. informático**: La comunicación humana tolera la ambigüedad y la emoción; las máquinas requieren sintaxis rigurosa y significado unívoco.',
            '**Regla de oro conceptual**: Todo lenguaje de programación es un lenguaje informático, pero **NO todo lenguaje informático es de programación**.',
            '**HTML es lenguaje de marcas, no de programación**: Estructura documentos mediante etiquetas, pero carece de variables, operaciones lógicas y algoritmos.',
            'El ecosistema digital es diverso: integra **programación** (lógica), **pseudocódigo** (diseño), **marcas** (estructura), **consultas** (datos), **protocolos** (redes) y **multimedia** (sonido y gráficos).',
          ],
          teacherNotes: 'Finalice la clase pidiendo a un voluntario que repita con sus propias palabras por qué HTML sí es un lenguaje informático pero no un lenguaje de programación.',
        },
      ],
    },
  ],
}
