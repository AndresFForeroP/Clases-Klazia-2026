/**
 * Contenido educativo — Grado 10.º Grupo 1
 * Tema: Páginas Web Interactivas
 *
 * Fuente: cursos/10/10-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel técnico y analítico para 10.º grado.
 *
 * Nota: El contenido de 10-1.md es temáticamente similar a 10-2.md (mismos casos de estudio).
 * Esta presentación utiliza el contenido del Markdown de 10-1.md como fuente,
 * adaptando el enfoque pedagógico para que el grupo 10-1 tenga su propia experiencia.
 */

export const course10_1 = {
  title: 'Páginas Web Interactivas',
  description: 'Presentación interactiva para comprender qué son las páginas web interactivas, por qué son importantes y analizar 6 casos de estudio de marcas líderes a nivel mundial.',
  lessons: [
    {
      id: 'paginas-web-interactivas',
      title: 'Páginas Web Interactivas',
      description: 'Presentación académica guiada para la clase presencial de 10.º grado.',
      slides: [
        // ── Diapositiva 1: Título y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 10.º — Grupo 1',
          title: 'Páginas Web Interactivas',
          subtitle: 'Creatividad, Experiencia de Usuario y Estrategias de Diseño Web Moderno',
          objectives: [
            'Definir qué es una página web interactiva y sus elementos constitutivos.',
            'Analizar 6 ejemplos reales de sitios web interactivos de marcas reconocidas.',
            'Identificar los diferentes tipos de interactividad y evaluar su propósito.',
            'Comprender la relación entre creatividad, interactividad y experiencia de usuario.',
          ],
          teacherNotes: '**Sugerencia inicial:** Pregunte a la clase cuánto tiempo pasan navegando un sitio web aburrido frente a uno donde pueden explorar e interactuar libremente. Este contraste introduce el tema.',
        },

        // ── Diapositiva 2: El dato clave ──
        {
          type: 'concept',
          category: 'Estadística de Mercado',
          title: 'El Impacto de la Interactividad',
          mainIdea: 'El **88% de los consumidores** permanecen más tiempo en páginas web interactivas que en las páginas estáticas tradicionales.',
          definition: 'Cuando un sitio incorpora elementos dinámicos como videos, audios, GIFs o herramientas de configuración, los usuarios se involucran más y pasan significativamente más tiempo en la página.',
          keyPoints: [
            'Mayor tiempo de permanencia en el sitio.',
            'Incremento del interés y la atención del usuario.',
            'Mejor tasa de conversión y satisfacción del cliente.',
          ],
          teacherNotes: 'Subraye que para una empresa, retener al usuario el doble de tiempo en el sitio puede significar el doble de ventas o impacto. El 88% es un dato contundente.',
        },

        // ── Diapositiva 3: Definición técnica ──
        {
          type: 'concept',
          category: 'Fundamento Técnico',
          title: '¿Qué es una Página Web Interactiva?',
          mainIdea: 'Es un sitio que utiliza **elementos con los que el usuario puede participar activamente**: explorar, manipular y personalizar su experiencia.',
          definition: 'Una página web interactiva se caracteriza por integrar textos, imágenes y contenido audiovisual que permite al usuario ir más allá de la lectura pasiva. Capta la atención por su atractivo visual y la experiencia personalizada que ofrece.',
          keyPoints: [
            'El usuario **participa activamente** (no solo lee).',
            'Ofrece una **experiencia personalizada** según las acciones del visitante.',
            'El diseño UX/UI se planifica intencionalmente para guiar la interacción.',
          ],
          teacherNotes: 'Diferencie una **página estática** (como un periódico en PDF que solo se lee) de una **página interactiva** (donde las acciones del usuario modifican lo que ve en pantalla).',
        },

        // ── Diapositiva 4: ¿Por qué invertir en interactividad? ──
        {
          type: 'diagram',
          category: 'Estrategia de Diseño',
          title: '3 Razones para Incorporar Interactividad',
          subtitle: 'Objetivos estratégicos del contenido interactivo en el diseño web actual:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Razón 1',
              title: 'Retención de Usuarios',
              desc: 'Al mantener al usuario activo e involucrado, aumenta significativamente el tiempo que permanece en el sitio.',
            },
            {
              badge: 'Razón 2',
              title: 'Diferenciación Competitiva',
              desc: 'Permite destacar frente a competidores que ofrecen sitios estáticos y genéricos sin ningún tipo de interacción.',
            },
            {
              badge: 'Razón 3',
              title: 'Comprensión del Producto',
              desc: 'Explicar un producto complejo es mucho más efectivo cuando el usuario puede manipularlo, configurarlo o explorarlo visualmente.',
            },
          ],
          teacherNotes: 'Pida a los estudiantes que piensen en un sitio web que recuerden porque les ofreció una experiencia interesante. ¿Qué lo hacía diferente?',
        },

        // ── Diapositiva 5: Caso 1 — Earth Day ──
        {
          type: 'example',
          category: 'Caso de Estudio 1',
          title: 'Earth Day',
          subtitle: 'Educación ambiental con datos interactivos',
          icon: '🌍',
          description: 'Este colectivo educa y crea conciencia sobre el medio ambiente en todo el mundo. Cuenta con un **mapa de reforestación interactivo** donde los usuarios consultan información de cada zona de impacto sostenible.',
          interactionType: '**Tipo de interactividad:** Exploración de datos geográficos. El usuario decide qué zona y qué información consultar en el mapa.',
          features: [
            'Mapa georreferenciado con datos de reforestación.',
            'Filtros por país y tipo de proyecto ambiental.',
            'La interactividad al servicio de la concientización social.',
          ],
          teacherNotes: 'Muestre cómo la interactividad puede usarse para causas sociales y educativas, no solo para vender productos.',
        },

        // ── Diapositiva 6: Caso 2 — Tesla ──
        {
          type: 'example',
          category: 'Caso de Estudio 2',
          title: 'Tesla',
          subtitle: 'Configurador de producto en tiempo real',
          icon: '🚗',
          description: 'Tesla permite a los usuarios **personalizar su automóvil** directamente en el sitio web, cambiando colores, interiores y opciones con imágenes de alta calidad del exterior e interior.',
          interactionType: '**Tipo de interactividad:** Configuración en tiempo real. El usuario modifica parámetros visuales y ve los resultados al instante.',
          features: [
            'Imágenes de alta calidad con vista interior y exterior.',
            'Navegación intuitiva y experiencia minimalista.',
            'El usuario siente que el automóvil ya es suyo antes de comprarlo.',
          ],
          teacherNotes: 'Resalte cómo la experiencia de configuración convierte al visitante en potencial comprador. La interactividad aquí tiene un objetivo comercial directo.',
        },

        // ── Diapositiva 7: Caso 3 — Apple ──
        {
          type: 'example',
          category: 'Caso de Estudio 3',
          title: 'Apple',
          subtitle: 'Scroll narrativo y storytelling visual',
          icon: '🍎',
          description: 'El sitio de Apple ofrece una **experiencia personalizada** donde las especificaciones del producto se revelan progresivamente mediante animaciones sincronizadas con el desplazamiento del usuario.',
          interactionType: '**Tipo de interactividad:** Scroll controlado (scroll-triggered animation). El avance de la pantalla despliega el diseño y las especificaciones.',
          features: [
            'Presentación premium de productos tecnológicos.',
            'Sensación de fluidez, modernidad y calidad.',
            'Navegación sencilla y rápida a pesar de la complejidad visual.',
          ],
          teacherNotes: 'Apple es el referente mundial de animaciones guiadas por desplazamiento. Explique que la simplicidad aparente requiere un diseño muy sofisticado detrás.',
        },

        // ── Diapositiva 8: Caso 4 — Minerva ──
        {
          type: 'example',
          category: 'Caso de Estudio 4',
          title: 'Cerveza Minerva',
          subtitle: 'Inmersión visual y narrativa de marca',
          icon: '🍺',
          description: 'La marca de cerveza artesanal Minerva ofrece una experiencia donde **lo visual toma el protagonismo total**, usando colores, texturas y tonos para contar la historia de la marca.',
          interactionType: '**Tipo de interactividad:** Inmersión estética. La navegación transmite emociones e identidad visual profunda.',
          features: [
            'Navegación rápida y transiciones ultrasuaves.',
            'Uso estratégico del color y la fotografía artesanal.',
            'Conexión emocional con el consumidor antes de probar el producto.',
          ],
          teacherNotes: 'Explique cómo el diseño puede transmitir "calidad artesanal" o "lujo" antes de que el usuario siquiera compre. La primera impresión visual es crucial.',
        },

        // ── Diapositiva 9: Caso 5 — Nomadic Tribe ──
        {
          type: 'example',
          category: 'Caso de Estudio 5',
          title: 'Nomadic Tribe',
          subtitle: 'Narrativa interactiva con ilustraciones y audio',
          icon: '🏜️',
          description: 'Tributo al dibujante de cómics Jean Giraud. Este proyecto de **makemepulse** adentra al usuario en una historia interactiva combinando **ilustraciones, desplazamiento y audio espacial**.',
          interactionType: '**Tipo de interactividad:** Storytelling interactivo. El usuario marca el ritmo del avance de la historieta.',
          features: [
            'Ilustraciones artísticas de altísimo nivel visual.',
            'Audio integrado para crear una experiencia sensorial completa.',
            'Navegación cinematográfica: el usuario vive una historia.',
          ],
          teacherNotes: 'Presente este ejemplo como prueba de que una página web puede ser una obra de arte interactiva. Sugiera que los estudiantes la visiten si pueden.',
        },

        // ── Diapositiva 10: Caso 6 — Borraginol Town ──
        {
          type: 'example',
          category: 'Caso de Estudio 6',
          title: 'Borraginol Town',
          subtitle: 'Exploración gamificada de información corporativa',
          icon: '🏘️',
          description: 'Empresa farmacéutica japonesa que transformó su catálogo en un **pueblo ilustrado interactivo**. Los usuarios hacen clic en prácticamente todos los objetos para descubrir información sobre la marca.',
          interactionType: '**Tipo de interactividad:** Gamificación (exploración lúdica). El usuario descubre información jugando y explorando el mapa.',
          features: [
            'Transforma información corporativa "aburrida" en diversión.',
            'Fomenta la curiosidad y la exploración activa.',
            'Mapa completo ilustrado donde cada elemento es interactivo.',
          ],
          teacherNotes: 'Pregunte: "¿Cómo habrían presentado la información de la farmacéutica si el sitio fuera estático? Probablemente con una lista de texto. ¿Cuál versión prefieren?" Esto demuestra el poder de la gamificación.',
        },

        // ── Diapositiva 11: Matriz comparativa ──
        {
          type: 'diagram',
          category: 'Síntesis de los 6 Casos',
          title: 'Matriz Comparativa de Interactividad',
          subtitle: 'Resumen de los modelos analizados y su propósito:',
          diagramType: 'table',
          tableHeaders: ['Sitio Web', 'Tipo de Interactividad', 'Objetivo Principal'],
          tableRows: [
            ['Earth Day', 'Exploración de datos geográficos', 'Concientización ambiental'],
            ['Tesla', 'Configurador en tiempo real', 'Venta y conversión comercial'],
            ['Apple', 'Scroll narrativo (storytelling)', 'Presentación premium de producto'],
            ['Minerva', 'Inmersión visual y estética', 'Identidad y conexión de marca'],
            ['Nomadic Tribe', 'Storytelling interactivo + audio', 'Experiencia artística inmersiva'],
            ['Borraginol Town', 'Gamificación y exploración', 'Información corporativa amigable'],
          ],
          teacherNotes: 'Use esta tabla para afianzar que cada tipo de interactividad responde a un objetivo estratégico diferente. No existe un solo tipo de interactividad "correcto".',
        },

        // ── Diapositiva 12: Pregunta analítica ──
        {
          type: 'question',
          question: '¿Por qué Tesla usa un configurador 3D mientras Apple prefiere el scroll narrativo?',
          context: 'Ambas son marcas tecnológicas líderes, pero sus estrategias de interactividad son completamente diferentes...',
          options: [
            'Porque Apple no tiene presupuesto para un configurador 3D',
            'Porque Tesla vende un producto personalizable y Apple vende un producto terminado',
            'Porque el scroll narrativo es más moderno que un configurador',
          ],
          answer: 'Porque Tesla vende un producto altamente personalizable y Apple vende un producto cerrado y perfeccionado.',
          explanation: 'Tesla necesita que el usuario **configure** su auto (colores, interiores, opciones). Apple necesita que el usuario **admire** la perfección de un producto que no se modifica. La interactividad debe servir al objetivo del negocio.',
          teacherNotes: 'Esta pregunta fomenta el pensamiento crítico sobre UX/UI. La clave es que la interactividad no es decoración: debe alinearse con la estrategia del producto.',
        },

        // ── Diapositiva 13: Quiz evaluativo ──
        {
          type: 'quiz',
          title: 'Evaluación de Comprensión',
          description: 'Pon a prueba tus conocimientos sobre diseño web interactivo.',
          quizTitle: 'Cuestionario de 10.º grado',
          questions: [
            {
              id: 'q1',
              question: '¿Qué porcentaje de consumidores pasan más tiempo en sitios interactivos que en los estáticos?',
              options: ['50%', '72%', '88%', '95%'],
              correctIndex: 2,
              feedback: {
                correct: '¡Correcto! El 88% de los consumidores incrementan su permanencia en sitios interactivos.',
                incorrect: 'El estudio indica que el **88% de los consumidores** pasan más tiempo en páginas interactivas.',
              },
            },
            {
              id: 'q2',
              question: 'Una empresa farmacéutica crea un mapa ilustrado donde se hace clic en objetos para descubrir información. Esto es...',
              options: ['Scroll narrativo', 'Configurador en tiempo real', 'Gamificación (exploración lúdica)'],
              correctIndex: 2,
              feedback: {
                correct: '¡Exacto! Como Borraginol Town, convierte la exploración en un juego.',
                incorrect: 'Es **gamificación**: el usuario descubre información jugando, como en el caso de Borraginol Town.',
              },
            },
            {
              id: 'q3',
              question: 'Apple utiliza animaciones sincronizadas con el desplazamiento del usuario. Esta técnica se conoce como...',
              options: ['Configuración en tiempo real', 'Scroll narrativo (scroll-triggered animation)', 'Inmersión visual'],
              correctIndex: 1,
              feedback: {
                correct: '¡Muy bien! Apple es el referente mundial de scroll-triggered animation.',
                incorrect: 'Las animaciones que se activan al desplazar la página se llaman **scroll narrativo** o scroll-triggered animation.',
              },
            },
          ],
          teacherNotes: 'Resuelva las preguntas con participación activa del grupo. Pida a diferentes estudiantes que justifiquen su respuesta antes de verificar.',
        },

        // ── Diapositiva 14: Actividad de Análisis ──
        {
          type: 'activity',
          title: 'Actividad Práctica: Análisis Crítico de un Sitio Web',
          activityTitle: 'Criterios de evaluación:',
          icon: '🔬',
          instructions: 'Elijan un sitio web que usen frecuentemente (red social, tienda, servicio) y analicen críticamente:',
          steps: [
            'Identifiquen al menos 2 elementos interactivos del sitio.',
            '¿La interactividad es funcional (aporta valor) o solamente decorativa?',
            '¿A cuál de los 6 modelos estudiados hoy se asemeja más?',
            '¿Qué mejorarían en la interactividad del sitio si fueran los diseñadores?',
          ],
          tip: 'Recuerden: la buena interactividad siempre tiene un propósito claro alineado con el objetivo del sitio.',
          teacherNotes: 'Asigne 10 minutos para el análisis en parejas. Al finalizar, pida a 2 o 3 parejas que presenten sus conclusiones brevemente al grupo.',
        },

        // ── Diapositiva 15: Resumen de cierre ──
        {
          type: 'summary',
          title: 'Conclusiones de la Lección',
          summaryTitle: 'Puntos clave para recordar:',
          points: [
            'Una **página web interactiva** involucra activamente al usuario y aumenta la retención en un **88%**.',
            'No existe un único tipo de interactividad: depende de la marca y del objetivo (configuración, scroll narrativo, gamificación, inmersión visual).',
            'La interactividad debe estar al servicio de una **estrategia clara**, no ser solo decoración.',
            'Los 6 casos de estudio demuestran que cada tipo de interactividad responde a una necesidad específica del negocio o la causa.',
          ],
          teacherNotes: 'Haga el cierre oral de la clase. Puede cerrar con la reflexión: "Si tuvieran que crear un sitio web interactivo para el colegio, ¿qué tipo de interactividad elegirían y por qué?"',
        },
      ],
    },
  ],
}
