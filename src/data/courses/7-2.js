/**
 * Contenido educativo — Grado 7.º Grupo 2
 * Tema: Tecnología y Diseño
 *
 * Fuente: cursos/7/7-2.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva.
 *
 * Nivel: 7.º grado — Lenguaje claro, ejemplos cotidianos, progresión sencilla→técnica.
 */

export const course7_2 = {
  title: 'Tecnología y Diseño',
  description:
    'Presentación interactiva para comprender qué es el diseño, su evolución histórica y su relación inseparable con la tecnología.',
  lessons: [
    {
      id: 'tecnologia-y-diseno',
      title: 'Tecnología y Diseño',
      description:
        'Presentación académica guiada para la clase presencial de 7.º grado — Grupo 2.',
      slides: [

        // ── Diapositiva 1: Portada + Objetivos ──────────────────────────────
        {
          type: 'title',
          badge: 'Informática 7.º — Grupo 2',
          title: 'Tecnología y Diseño',
          subtitle: '¿Por qué todo lo que usas fue primero diseñado por alguien?',
          objectives: [
            'Explicar qué es el diseño y cuál es su propósito.',
            'Reconocer cómo el diseño ha evolucionado a lo largo de la historia.',
            'Comprender el vínculo entre diseño y tecnología.',
            'Identificar ejemplos de diseño tecnológico en la vida cotidiana.',
          ],
          teacherNotes:
            '**Sugerencia de inicio:** Sostenga su celular frente a la clase y pregunte: "¿Quién decidió que este teléfono debería ser así? ¿Por qué tiene esta forma, estos colores, este tamaño?" Dé un momento para que los estudiantes reflexionen antes de comenzar.',
        },

        // ── Diapositiva 2: Pregunta inicial de activación ────────────────────
        {
          type: 'question',
          question: '¿Por qué crees que un celular tiene esa forma y no otra diferente?',
          context:
            'Antes de ver la pantalla, piensa: ¿existe una razón detrás de la forma de los objetos que usas a diario?',
          options: [
            'Es pura casualidad',
            'Alguien lo pensó para que sea cómodo y útil',
            'Lo eligió la fábrica sin ningún criterio',
            'Lo copian de la naturaleza directamente',
          ],
          answer: 'Alguien lo pensó para que sea cómodo y útil',
          explanation:
            'Nada de lo que usamos fue creado al azar. Todo objeto, aplicación o producto fue **diseñado** para resolver una necesidad. Eso es exactamente lo que vamos a explorar hoy.',
          teacherNotes:
            'Permita que 2 o 3 estudiantes respondan oralmente. Escuche sus argumentos con atención antes de revelar la respuesta. El objetivo es activar su curiosidad, no evaluarlos.',
        },

        // ── Diapositiva 3: ¿Qué es el diseño? ───────────────────────────────
        {
          type: 'concept',
          category: 'Concepto Fundamental',
          title: '¿Qué es el Diseño?',
          mainIdea:
            'El diseño es la disciplina que **resuelve problemas** y satisface necesidades humanas mediante soluciones visuales, estéticas y prácticas.',
          definition:
            'Etimológicamente, "diseño" viene del italiano *disegno*, que significa **dibujo o prefiguración** — es decir, representar algo que aún no existe. Por eso, diseñar es proyectar el futuro.',
          analogy:
            '**Analogía:** Antes de construir una casa, se hace un plano. Ese plano es el diseño: anticipar cómo será algo antes de que exista.',
          keyPoints: [
            'Resuelve problemas humanos.',
            'Combina funcionalidad y estética.',
            'Anticipa y proyecta lo que aún no existe.',
          ],
          teacherNotes:
            'Enfatice que el diseño no es solo "hacer algo bonito". Es ante todo **resolver un problema**. Un diseño que se ve bien pero no funciona es un mal diseño.',
        },

        // ── Diapositiva 4: Historia del Diseño (diagrama de flujo histórico) ─
        {
          type: 'diagram',
          category: 'Evolución Histórica',
          title: 'El Diseño a Través del Tiempo',
          subtitle: 'El diseño ha acompañado a la humanidad desde sus orígenes:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Etapa 1',
              title: 'Edad de Piedra',
              desc: 'Herramientas básicas para cazar y sobrevivir. Funcionalidad por encima de todo.',
              metrics: { 'Enfoque': 'Sobrevivencia', 'Material': 'Piedra y madera' },
            },
            {
              badge: 'Etapa 2',
              title: 'Edad de los Metales',
              desc: 'Herramientas más resistentes y especializadas. Diseño más eficiente y detallado.',
              metrics: { 'Enfoque': 'Especialización', 'Material': 'Hierro y bronce' },
            },
            {
              badge: 'Etapa 3',
              title: 'Era Actual',
              desc: 'Diseño digital: apps, dispositivos, interfaces y experiencias de usuario.',
              metrics: { 'Enfoque': 'Experiencia', 'Material': 'Código y píxeles' },
            },
          ],
          teacherNotes:
            'Señale que en cada época histórica el diseño respondió a las necesidades de ese tiempo. Pregunte: "¿Qué tipo de diseño creen que necesitaremos en 50 años?"',
        },

        // ── Diapositiva 5: Revolución Industrial ────────────────────────────
        {
          type: 'concept',
          category: 'Hito Histórico',
          title: 'La Revolución Industrial y el Diseño para Todos',
          mainIdea:
            'En los siglos XVIII y XIX, la producción en masa **democratizó el diseño**: los productos llegaron a muchas más personas.',
          definition:
            'Antes de la Revolución Industrial, los objetos se fabricaban a mano, uno por uno. Las máquinas permitieron producir miles de unidades idénticas. Esto obligó a diseñar productos que funcionaran bien para millones de personas diferentes.',
          analogy:
            '**Ejemplo:** Antes del año 1800, tener un reloj era un lujo de ricos. Después de la Revolución Industrial, los relojes se masificaron y casi cualquier persona podía tener uno.',
          keyPoints: [
            'Producción en masa → diseño para millones de personas.',
            'El diseño se vuelve estratégico para las empresas.',
            'La eficiencia y la estética se combinan.',
          ],
          teacherNotes:
            'Relacione con el presente: "Hoy, cuando Apple diseña un iPhone, está pensando en millones de usuarios al mismo tiempo. ¿Cómo se logra que algo funcione bien para tantas personas diferentes?"',
        },

        // ── Diapositiva 6: El vínculo Diseño ↔ Tecnología ───────────────────
        {
          type: 'concept',
          category: 'Relación Central',
          title: 'Diseño y Tecnología: Una Relación Inseparable',
          mainIdea:
            '**El diseño establece CÓMO debe ser algo. La tecnología permite que ESA IDEA se haga realidad.**',
          definition:
            'La tecnología proporciona las herramientas para que el diseño se materialice. Sin tecnología, el diseño queda en papel. Sin diseño, la tecnología se vuelve difícil de usar.',
          analogy:
            '**Piénsalo así:** El diseñador dice "quiero que esta pantalla sea táctil y responda al dedo". La tecnología lo hace posible con sensores y procesadores. Ambos se necesitan mutuamente.',
          keyPoints: [
            'El diseño define QUÉ debe ser y CÓMO debe funcionar.',
            'La tecnología hace posible que eso exista.',
            'Juntos crean soluciones útiles y accesibles.',
          ],
          teacherNotes:
            'Haga la distinción clara: un diseñador puede imaginar cualquier cosa, pero sin tecnología adecuada no se puede construir. Y la tecnología por sí sola no sabe cómo organizarse para ser útil — necesita diseño.',
        },

        // ── Diapositiva 7: Ciclo de Retroalimentación ────────────────────────
        {
          type: 'diagram',
          category: 'Proceso',
          title: 'El Ciclo: Diseño ↔ Tecnología',
          subtitle: 'No es una relación de una sola vía — es un ciclo continuo:',
          diagramType: 'flow',
          nodes: [
            {
              icon: '💡',
              label: 'El diseñador imagina',
              desc: 'Una nueva solución o producto que nadie ha creado todavía.',
            },
            {
              icon: '⚙️',
              label: 'La tecnología lo hace posible',
              desc: 'Los avances técnicos permiten construir lo imaginado.',
            },
            {
              icon: '📱',
              label: 'El producto llega al usuario',
              desc: 'Las personas lo usan y surgen nuevas necesidades.',
            },
            {
              icon: '🔄',
              label: 'El diseñador vuelve a imaginar',
              desc: 'Nuevas ideas nacen gracias al uso real — el ciclo reinicia.',
            },
          ],
          teacherNotes:
            'Explique que este ciclo nunca termina. Cada iPhone que sale al mercado genera millones de experiencias de usuario que Apple estudia para diseñar el siguiente. Pregunte: "¿Pueden pensar en algún producto que haya mejorado gracias a cómo la gente lo usaba?"',
        },

        // ── Diapositiva 8: Ejemplo — Evolución del Celular ───────────────────
        {
          type: 'example',
          category: 'Ejemplo Real',
          title: 'El Celular: Diseño y Tecnología en Acción',
          subtitle: 'Observa cómo el diseño del celular evolucionó junto a la tecnología:',
          icon: '📱',
          description:
            'El teléfono móvil es uno de los mejores ejemplos del vínculo entre diseño y tecnología. Cada cambio en el diseño fue posible gracias a un avance tecnológico.',
          features: [
            '**Pantalla táctil:** El diseño pedía quitar los botones físicos. La tecnología de sensores capacitivos lo hizo posible.',
            '**Procesadores más rápidos:** Permitieron diseñar apps más complejas y visuales.',
            '**Baterías de larga duración:** Hicieron posible diseñar pantallas más grandes sin sacrificar autonomía.',
          ],
          teacherNotes:
            'Muestre cómo cada característica que los usuarios valoran (pantalla grande, cámara buena, batería duradera) comenzó como una idea de diseño que la tecnología tuvo que hacer realidad.',
        },

        // ── Diapositiva 9: Pregunta de Análisis ─────────────────────────────
        {
          type: 'question',
          question:
            'Una app de mapas te muestra rutas en tiempo real. ¿Cuál de estos elementos es el DISEÑO y cuál es la TECNOLOGÍA?',
          context:
            'Piensa: ¿qué decidió cómo se ve y cómo se usa? ¿Qué hace que funcione técnicamente?',
          options: [
            'La interfaz visual es el diseño; el GPS y los datos satelitales son la tecnología',
            'El GPS es el diseño; la interfaz es la tecnología',
            'Todo es tecnología — el diseño no interviene',
            'Todo es diseño — la tecnología no importa',
          ],
          answer:
            'La interfaz visual es el diseño; el GPS y los datos satelitales son la tecnología',
          explanation:
            'El **diseño** decidió cómo se ven las rutas, qué colores usar, cómo mostrar la velocidad y cuándo hablar. La **tecnología** (GPS, satélites, servidores) hace que esa información exista y sea precisa.',
          teacherNotes:
            'Este ejemplo es excelente para mostrar que ambos trabajan juntos. Un mapa con tecnología GPS perfecta pero mal diseñada sería imposible de usar. Y un diseño hermoso sin GPS preciso sería inútil.',
        },

        // ── Diapositiva 10: El Diseño como Diferenciador de Marca ───────────
        {
          type: 'example',
          category: 'Caso Real',
          title: 'iPhone vs Samsung: El Diseño como Decisión de Compra',
          subtitle: '¿Por qué alguien prefiere un celular sobre otro si ambos hacen lo mismo?',
          icon: '🏆',
          description:
            'Ambos son celulares inteligentes. Ambos llaman, sacan fotos y conectan a internet. Sin embargo, millones de personas tienen una preferencia clara. ¿Por qué?',
          features: [
            '**El diseño transmite valores:** Apple transmite simplicidad y estatus. Samsung transmite versatilidad y personalización.',
            '**La estética influye en la decisión:** La forma, el color y los materiales generan emociones en el usuario.',
            '**La experiencia de uso importa:** Cómo se siente el producto en la mano, qué tan fácil es de usar — todo es diseño.',
          ],
          teacherNotes:
            'Pregunte: "¿Alguien aquí tiene celular iPhone? ¿Alguien Samsung? ¿Por qué eligieron ese y no el otro?" Deje que respondan honestamente — sus razones revelarán cómo el diseño influye sin que lo notemos.',
        },

        // ── Diapositiva 11: Quiz de Comprobación ────────────────────────────
        {
          type: 'quiz',
          title: 'Comprobación de Aprendizaje',
          description: 'Responde las preguntas junto con tu grupo.',
          quizTitle: '¿Qué tanto aprendimos hoy?',
          questions: [
            {
              id: 'q1',
              question:
                '¿De qué idioma proviene la palabra "diseño" y qué significa originalmente?',
              options: [
                'Del inglés design — significa "programar"',
                'Del italiano disegno — significa "dibujo o prefiguración"',
                'Del francés dessin — significa "decoración"',
                'Del latín designare — significa "marcar con fuego"',
              ],
              correctIndex: 1,
              feedback: {
                correct:
                  '¡Correcto! Del italiano *disegno*, que significa dibujar o prefigurar lo que aún no existe.',
                incorrect:
                  'Recuerda: "diseño" proviene del italiano **disegno**, que significa **dibujo o prefiguración** — representar algo antes de que exista.',
              },
            },
            {
              id: 'q2',
              question:
                'La Revolución Industrial cambió el diseño porque permitió producir objetos...',
              options: [
                'A mano, uno por uno, con mayor calidad',
                'En masa, haciendo el diseño accesible para más personas',
                'Solo para la nobleza y las clases altas',
                'Sin ningún tipo de control de calidad',
              ],
              correctIndex: 1,
              feedback: {
                correct:
                  '¡Exacto! La producción en masa democratizó el diseño y lo puso al alcance de millones de personas.',
                incorrect:
                  'La Revolución Industrial permitió fabricar **en masa**: miles de unidades idénticas, haciendo el diseño accesible para muchas más personas.',
              },
            },
            {
              id: 'q3',
              question: 'En la relación diseño-tecnología, ¿cuál es el papel del diseño?',
              options: [
                'Fabricar físicamente los productos',
                'Escribir el código de las aplicaciones',
                'Establecer cómo debe ser algo y cómo debe funcionar',
                'Instalar los sistemas operativos',
              ],
              correctIndex: 2,
              feedback: {
                correct:
                  '¡Muy bien! El diseño define QUÉ debe ser y CÓMO debe verse y funcionar. La tecnología lo hace posible.',
                incorrect:
                  'El diseño **establece cómo debe ser algo**: su forma, su función y su experiencia de uso. La tecnología luego lo construye técnicamente.',
              },
            },
          ],
          teacherNotes:
            'Resuelvan el quiz colectivamente. Pida voluntarios para responder antes de revelar la solución. Si hay desacuerdo, úselo como oportunidad de debate.',
        },

        // ── Diapositiva 12: Verdadero o Falso ───────────────────────────────
        {
          type: 'trueFalse',
          title: 'Evaluación Rápida: Verdadero o Falso',
          tfTitle: 'Analicemos estas afirmaciones:',
          statements: [
            {
              id: 'tf1',
              statement:
                'El diseño es solamente hacer objetos bonitos. Si funciona mal pero se ve bien, es buen diseño.',
              answer: false,
              explanation:
                '**Falso.** El diseño tiene como propósito principal **resolver problemas**. Un objeto estético que no funciona bien es un mal diseño. La funcionalidad y la estética deben complementarse.',
            },
            {
              id: 'tf2',
              statement:
                'Sin avances tecnológicos, el diseño de dispositivos como el celular no hubiera podido evolucionar.',
              answer: true,
              explanation:
                '**Verdadero.** Cada mejora en el diseño del celular (pantalla táctil, cámara, batería) fue posible gracias a un avance tecnológico específico. El diseño y la tecnología se impulsan mutuamente.',
            },
            {
              id: 'tf3',
              statement:
                'El diseño de un producto no influye en por qué las personas deciden comprarlo.',
              answer: false,
              explanation:
                '**Falso.** El diseño es un factor decisivo en la compra. La estética, la facilidad de uso y la experiencia que transmite un producto influyen directamente en las decisiones de los consumidores.',
            },
          ],
          teacherNotes:
            'Pida que alcen la mano: "¿Quiénes creen que es Verdadero? ¿Quiénes creen que es Falso?" Escuche sus argumentos antes de revelar la respuesta. El debate es más valioso que la respuesta correcta.',
        },

        // ── Diapositiva 13: Actividad en Clase ──────────────────────────────
        {
          type: 'activity',
          title: 'Actividad: "Diseño a mi Alrededor"',
          activityTitle: 'Instrucciones para la actividad:',
          icon: '🔍',
          instructions:
            'En parejas, elijan un objeto tecnológico que usen a diario (celular, tablet, computador, auriculares) y respondan:',
          steps: [
            '¿Qué problema o necesidad resuelve ese objeto?',
            '¿Qué decisiones de diseño puedes identificar? (forma, color, botones, pantalla...)',
            '¿Qué tecnología hace posible que funcione?',
            '¿Cómo mejorarías su diseño si pudieras?',
          ],
          tip: 'No se centren en lo que hace el objeto — concéntrense en POR QUÉ está diseñado así y no de otra forma.',
          teacherNotes:
            'Dé 8-10 minutos para el trabajo en parejas. Luego pida a 2 o 3 parejas que compartan su análisis. Enfóquese especialmente en la pregunta 4: las mejoras propuestas revelan comprensión real del diseño.',
        },

        // ── Diapositiva 14: Resumen Final ────────────────────────────────────
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Lo más importante de hoy:',
          points: [
            'El **diseño** es una disciplina que resuelve problemas humanos combinando funcionalidad y estética.',
            'La palabra diseño viene del italiano *disegno*: prefigurar lo que aún no existe.',
            'A lo largo de la historia, el diseño evolucionó desde herramientas básicas hasta interfaces digitales complejas.',
            'La **Revolución Industrial** democratizó el diseño: llegó a millones de personas.',
            'Diseño y tecnología son **inseparables**: el diseño define; la tecnología construye.',
            'El diseño impacta directamente en cómo percibimos y elegimos los productos tecnológicos.',
          ],
          teacherNotes:
            'Cierre con una reflexión: "La próxima vez que usen su celular, piensen: ¿por qué está diseñado así? ¿Qué problema están resolviendo?" Invite a los estudiantes a observar el diseño de todo lo que los rodea.',
        },

      ],
    },
  ],
}
