/**
 * Contenido educativo — Grado 10.º Grupo 2
 * Tema: Páginas Web Interactivas
 *
 * Fuente: cursos/10/10-2.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel técnico y analítico para 10.º grado.
 */

export const course10_2 = {
  title: 'Páginas Web Interactivas',
  description: 'Presentación interactiva para analizar el diseño web interactivo, la experiencia de usuario (UX) y los 6 casos de estudio del mercado real.',
  lessons: [
    {
      id: 'paginas-web-interactivas',
      title: 'Páginas Web Interactivas',
      description: 'Presentación académica guiada para la clase presencial de 10.º grado.',
      slides: [
        // ── Diapositiva 1: Título y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 10.º — Grupo 2',
          title: 'Páginas Web Interactivas',
          subtitle: 'Diseño Web, Experiencia de Usuario (UX) y Estrategias de Interactividad',
          objectives: [
            'Definir los elementos constitutivos de una página web interactiva.',
            'Analizar 6 casos de estudio reales de marcas líderes en diseño web.',
            'Identificar los tipos de interactividad y evaluar su propósito en UX/UI.',
          ],
          teacherNotes: '**Sugerencia inicial:** Pregunte a la clase cuánto tiempo pasan en un sitio web aburrido frente a uno donde pueden interactuar o explorar libremente.',
        },

        // ── Diapositiva 2: El dato clave ──
        {
          type: 'concept',
          category: 'Estadística de Mercado',
          title: 'El Valor de la Interactividad',
          mainIdea: 'El **88% de los consumidores** pasan más tiempo en páginas web interactivas que en las páginas estáticas tradicionales.',
          definition: 'La incorporación de elementos audiovisuales, videos, audios o GIFs dinamiza la experiencia y aumenta la retención.',
          keyPoints: [
            'Mayor tiempo de permanencia.',
            'Aumento del interés del usuario.',
            'Mayor tasa de conversión para negocios.',
          ],
          teacherNotes: 'Subraye que para una empresa, retener al usuario el doble de tiempo en el sitio aumenta drásticamente las ventas o el impacto.',
        },

        // ── Diapositiva 3: Definición técnica ──
        {
          type: 'concept',
          category: 'Fundamento Técnico',
          title: '¿Qué es una Página Web Interactiva?',
          mainIdea: 'Es un sitio que utiliza **elementos con los que el usuario puede participar activamente** (manipular, explorar, configurar).',
          definition: 'Supera la lectura pasiva al integrar recursos dinámicos, animaciones y respuestas en tiempo real a las acciones del usuario.',
          keyPoints: [
            'Participación activa del usuario.',
            'Experiencia personalizada.',
            'Diseño UX/UI planificado intencionalmente.',
          ],
          teacherNotes: 'Diferencie la **lectura pasiva** (un periódico impreso en PDF) de la **experiencia interactiva** (donde las acciones del usuario cambian lo que ve).',
        },

        // ── Diapositiva 4: ¿Por qué invertir en interactividad? ──
        {
          type: 'diagram',
          category: 'Estrategia Digital',
          title: '3 Razones para Incorporar Interactividad',
          subtitle: 'Objetivos estratégicos del diseño interactivo en el desarrollo web moderno:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Razón 1',
              title: 'Retención de Usuarios',
              desc: 'Al mantener al usuario activo, aumenta significativamente el tiempo de interacción.',
            },
            {
              badge: 'Razón 2',
              title: 'Diferenciación',
              desc: 'Permite destacar frente a competidores que ofrecen sitios estáticos genéricos.',
            },
            {
              badge: 'Razón 3',
              title: 'Comprensión de Producto',
              desc: 'Explicar un producto complejo es mucho más fácil cuando el usuario puede manipularlo.',
            },
          ],
          teacherNotes: 'Pida a los estudiantes que piensen en alguna marca que recuerden por su página web.',
        },

        // ── Diapositiva 5: Caso 1 — Earth Day ──
        {
          type: 'example',
          category: 'Caso de Estudio 1',
          title: 'Earth Day',
          subtitle: 'Exploración de datos geográficos con propósito social',
          icon: '🌍',
          description: 'Cuenta con un **mapa interactivo de reforestación** donde los usuarios exploran las zonas de impacto sostenible en todo el mundo.',
          interactionType: '**Tipo de interactividad:** Exploración de datos espaciales. El usuario controla qué zona y qué información consultar.',
          features: [
            'Mapa georreferenciado interconectado.',
            'Filtros por país y tipo de proyecto.',
            'Concientización ecológica mediante datos reales.',
          ],
          teacherNotes: 'Muestre cómo la interactividad puede usarse para causas sociales y educación, no solo para vender.',
        },

        // ── Diapositiva 6: Caso 2 — Tesla ──
        {
          type: 'example',
          category: 'Caso de Estudio 2',
          title: 'Tesla',
          subtitle: 'Configurador en tiempo real enfocado a conversión',
          icon: '🚗',
          description: 'Permite a los usuarios **personalizar su propio automóvil en 3D** cambiando colores, rines e interiores con vista de 360 grados.',
          interactionType: '**Tipo de interactividad:** Configuración en tiempo real. Modificar parámetros visuales y ver resultados al instante.',
          features: [
            'Imágenes de alta calidad exterior/interior.',
            'Cálculo de precio y autonomía en tiempo real.',
            'Interfaz intuitiva y minimalista.',
          ],
          teacherNotes: 'Resalte cómo el configurador hace que el cliente sienta que el automóvil ya es suyo antes de comprarlo.',
        },

        // ── Diapositiva 7: Caso 3 — Apple ──
        {
          type: 'example',
          category: 'Caso de Estudio 3',
          title: 'Apple',
          subtitle: 'Scroll narrativo (Storytelling con desplazamiento)',
          icon: '🍎',
          description: 'Las características del producto se revelan progresivamente mediante **animaciones sincronizadas con el scroll** del usuario.',
          interactionType: '**Tipo de interactividad:** Scroll controlado. El avance de la pantalla despliega el diseño y las especificaciones.',
          features: [
            'Presentación impecable de alta gama.',
            'Sensación de fluidez y modernidad.',
            'Enfoque absoluto en la calidad visual del producto.',
          ],
          teacherNotes: 'Apple es el referente mundial de *Scroll-triggered animation* (animaciones guiadas por desplazamiento).',
        },

        // ── Diapositiva 8: Caso 4 — Minerva ──
        {
          type: 'example',
          category: 'Caso de Estudio 4',
          title: 'Cerveza Minerva',
          subtitle: 'Inmersión visual y narrativa de marca',
          icon: '🍺',
          description: 'Una experiencia donde **lo visual toma el protagonismo total**, utilizando texturas, tonos y colores para contar la historia de la marca.',
          interactionType: '**Tipo de interactividad:** Inmersión estética. La navegación transmite emociones e identidad visual profunda.',
          features: [
            'Carga y transición ultrarrápida.',
            'Uso estratégico del color y la fotografía.',
            'Conexión emocional con el consumidor.',
          ],
          teacherNotes: 'Explique cómo el diseño transmite "calidad artesanal" antes de que el usuario siquiera pruebe el producto.',
        },

        // ── Diapositiva 9: Caso 5 — Nomadic Tribe ──
        {
          type: 'example',
          category: 'Caso de Estudio 5',
          title: 'Nomadic Tribe',
          subtitle: 'Narrativa interactiva e inmersión artística',
          icon: '🏜️',
          description: 'Tributo al ilustrador Jean Giraud. Adentra al usuario en una historia que combina **ilustraciones, desplazamiento y audio espacial**.',
          interactionType: '**Tipo de interactividad:** Storytelling interactivo. El usuario ritma el avance de la historieta.',
          features: [
            'Ilustraciones artísticas de altísimo nivel.',
            'Audio integrado para inmersión sensorial.',
            'Navegación como experiencia cinematográfica.',
          ],
          teacherNotes: 'Muestre este ejemplo como prueba de que una página web puede ser una obra de arte interactiva.',
        },

        // ── Diapositiva 10: Caso 6 — Borraginol Town ──
        {
          type: 'example',
          category: 'Caso de Estudio 6',
          title: 'Borraginol Town',
          subtitle: 'Exploración gamificada de información corporativa',
          icon: '🏘️',
          description: 'Empresa farmacéutica japonesa que convirtió su catálogo en un **pueblo ilustrado donde hacer clic en cada casa revela información**.',
          interactionType: '**Tipo de interactividad:** Gamificación (exploración lúdica de descubrimiento).',
          features: [
            'Transforma información "aburrida" en diversión.',
            'Fomenta la curiosidad del visitante.',
            'Mapa completo ilustrado e interactivo.',
          ],
          teacherNotes: 'Pregunte: ¿Cómo habrían presentado ellos la información corporativa si fueran una empresa tradicional?',
        },

        // ── Diapositiva 11: Matriz sintética de casos ──
        {
          type: 'diagram',
          category: 'Síntesis de Casos de Estudio',
          title: 'Matriz Comparativa de Interactividad',
          subtitle: 'Resumen de los 6 modelos analizados:',
          diagramType: 'table',
          tableHeaders: ['Sitio Web', 'Tipo de Interactividad', 'Objetivo Principal'],
          tableRows: [
            ['Earth Day', 'Exploración de datos', 'Concientización ambiental'],
            ['Tesla', 'Configurador en tiempo real', 'Venta y conversión'],
            ['Apple', 'Scroll narrativo', 'Presentación premium'],
            ['Minerva', 'Inmersión visual', 'Identidad de marca'],
            ['Nomadic Tribe', 'Storytelling interactivo', 'Experiencia artística'],
            ['Borraginol Town', 'Exploración gamificada', 'Información amigable'],
          ],
          teacherNotes: 'Use esta tabla para afianzar que cada tipo de interactividad responde a un objetivo diferente.',
        },

        // ── Diapositiva 12: Pregunta analítica ──
        {
          type: 'question',
          question: '¿Por qué Apple usa scroll narrativo en lugar de un configurador 3D como Tesla?',
          context: 'Ambas son marcas tecnológicas líderes. Pensemos en qué busca transmitir cada una...',
          options: [
            'Porque Apple no sabe programar configuradores 3D',
            'Porque Apple busca contar la historia de ingeniería y estética de un producto terminado',
            'Porque el scroll narrativo carga más rápido en celulares',
          ],
          answer: 'Porque Apple busca contar la historia de ingeniería y artesanía de un producto unificado.',
          explanation: 'Tesla vende un producto altamente personalizable. Apple vende un producto cerrado donde la perfección visual y los detalles de ingeniería son la estrella.',
          teacherNotes: 'Esta pregunta fomenta el pensamiento crítico en UX/UI.',
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
              question: '¿Qué porcentaje de tiempo adicional pasan los consumidores en sitios interactivos?',
              options: ['50%', '88%', '35%', '99%'],
              correctIndex: 1,
              feedback: {
                correct: '¡Correcto! El 88% de los usuarios permanecen más tiempo.',
                incorrect: 'El estudio señala que el **88% de los consumidores** incrementan su permanencia.',
              },
            },
            {
              id: 'q2',
              question: 'Si una farmacia convierte su catálogo en un mapa ilustrado clickeable, utiliza...',
              options: ['Scroll narrativo', 'Exploración gamificada', 'Configurador 3D'],
              correctIndex: 1,
              feedback: {
                correct: '¡Exacto! Como el caso de Borraginol Town.',
                incorrect: 'Es **exploración gamificada**, donde el usuario descubre datos jugando.',
              },
            },
          ],
          teacherNotes: 'Resuelva las preguntas con participación del grupo.',
        },

        // ── Diapositiva 14: Actividad de Análisis ──
        {
          type: 'activity',
          title: 'Actividad Práctica: Análisis Crítico de un Sitio',
          activityTitle: 'Criterios para evaluar un sitio web:',
          icon: '🔬',
          instructions: 'Elijan un sitio web que usen seguido (red social, tienda, juego) y analicen:',
          steps: [
            'Identifiquen 2 elementos interactivos del sitio.',
            '¿La interactividad es funcional (útil) o solo decorativa?',
            '¿A cuál de los 6 modelos estudiados hoy se asemeja más?',
          ],
          tip: 'Recuerden: la buena interactividad siempre tiene un propósito claro.',
          teacherNotes: 'Asigne 10 minutos para el análisis y pida conclusiones breves.',
        },

        // ── Diapositiva 15: Resumen de cierre ──
        {
          type: 'summary',
          title: 'Conclusiones de la Lección',
          summaryTitle: 'Puntos clave para recordar:',
          points: [
            'Una **página web interactiva** involucra activamente al usuario y aumenta la retención en un 88%.',
            'No existe un tipo único de interactividad: depende de la marca y del objetivo (configuración, scroll narrativo, gamificación, etc.).',
            'La **Experiencia de Usuario (UX)** determina si una interacción ayuda o distrae.',
          ],
          teacherNotes: 'Haga el cierre final de la clase.',
        },
      ],
    },
  ],
}
