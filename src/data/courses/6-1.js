/**
 * Contenido educativo — Grado 6.º Grupo 1
 * Tema: Sistemas Operativos
 *
 * Fuente: cursos/6/6-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva.
 */

export const course6_1 = {
  title: 'Sistemas Operativos',
  description: 'Descubre qué es el software, cómo un sistema operativo actúa como el cerebro de tus dispositivos y cuáles son sus funciones y tipos.',
  lessons: [
    {
      id: 'sistemas-operativos',
      title: 'Sistemas Operativos',
      description: 'Presentación académica guiada para la clase presencial de 6.º grado.',
      slides: [
        // ── Diapositiva 1: Portada y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 6.º — Grupo 1',
          title: 'Sistemas Operativos',
          subtitle: 'El "director de orquesta" de nuestros computadores y celulares',
          objectives: [
            'Diferenciar entre la parte física (hardware) y los programas (software).',
            'Explicar qué es un sistema operativo con una analogía sencilla.',
            'Reconocer las funciones principales de un sistema operativo en la vida diaria.',
            'Identificar los diferentes tipos de sistemas operativos que existen.'
          ],
          teacherNotes: '**Sugerencia de inicio:** Pregunte a los estudiantes: ¿Qué es lo primero que ven cuando encienden su celular o tablet? Use sus respuestas para introducir el concepto de que hay "algo" que prepara todo antes de que abran sus juegos o aplicaciones.'
        },

        // ── Diapositiva 2: Pregunta de discusión ──
        {
          type: 'question',
          question: '¿Qué crees que sucede cuando enciendes un celular?',
          context: 'Antes de poder abrir un juego o una aplicación, el celular hace un proceso interno. ¿Qué es lo que realmente despierta al dispositivo?',
          options: [
            'El juego se abre solo inmediatamente.',
            'Un programa especial empieza a preparar la pantalla, el sonido y la batería.',
            'El celular solo brilla sin hacer nada por dentro.'
          ],
          answer: 'Un programa especial (el Sistema Operativo) prepara la pantalla, el sonido y la batería.',
          explanation: 'Ese programa "maestro" es el **Sistema Operativo**. Sin él, las aplicaciones como WhatsApp o tus juegos no sabrían cómo usar la pantalla o los botones.',
          teacherNotes: 'Permita que varios estudiantes den su opinión. Resalte que el hardware (los componentes físicos) necesita de un programa que lo controle desde el arranque.'
        },

        // ── Diapositiva 3: Concepto: Software ──
        {
          type: 'concept',
          category: 'El Soporte Lógico',
          title: '¿Qué es el Software?',
          mainIdea: 'El **software** es el conjunto de todos los programas e instrucciones que hacen funcionar a un ordenador o celular.',
          definition: 'A diferencia de las partes físicas (hardware), el software **no se puede tocar**. Son las reglas digitales que le dicen a la máquina qué hacer.',
          analogy: '**Imagina una receta de cocina:** Los ingredientes y la cocina son el hardware. La receta escrita con los pasos a seguir es el software.',
          keyPoints: [
            'Es invisible y lógico (datos y códigos).',
            'Ejemplos: editores de texto, hojas de cálculo, videojuegos.',
            'Cualquier programa creado por programadores es software.'
          ],
          teacherNotes: 'Asegúrese de que comprendan la diferencia básica: Hardware = lo físico que se puede tocar; Software = los programas digitales que no se pueden tocar.'
        },

        // ── Diapositiva 4: Diagrama de Flujo: Software y Hardware ──
        {
          type: 'diagram',
          category: 'Interacción',
          title: '¿Cómo nos comunicamos con el ordenador?',
          subtitle: 'El Sistema Operativo sirve de puente para que todo funcione en orden.',
          diagramType: 'flow',
          nodes: [
            { icon: '👤', label: 'Usuario', desc: 'Tú usando el equipo' },
            { icon: '📱', label: 'Aplicaciones', desc: 'Juegos, Word, Navegador' },
            { icon: '🧠', label: 'Sistema Operativo', desc: 'El puente organizador' },
            { icon: '🔌', label: 'Hardware', desc: 'Procesador, pantalla, memoria' }
          ],
          teacherNotes: 'Explique que el usuario no habla directamente con los chips del computador. Usamos una aplicación, la aplicación le pide ayuda al Sistema Operativo, y este le ordena al Hardware físico que actúe.'
        },

        // ── Diapositiva 5: Concepto: Sistema Operativo ──
        {
          type: 'concept',
          category: 'Concepto Clave',
          title: '¿Qué es el Sistema Operativo (SO)?',
          mainIdea: 'Es el programa principal que **coordina todas las tareas** del ordenador, permitiendo que lo uses de forma cómoda y rápida.',
          definition: 'Es el conjunto de programas que sirve de puente entre el hardware (pantalla, teclado, procesador) y las aplicaciones de usuario.',
          analogy: '**El Director de Orquesta:** Los músicos son el hardware (la batería, el piano, la guitarra). Si tocan todos a la vez sin orden, sonará mal. El director (el SO) les dice cuándo tocar, a qué velocidad y con qué volumen para que la música suene perfecta.',
          keyPoints: [
            'Simplifica el trabajo al usuario.',
            'Evita que las aplicaciones choquen entre sí.',
            'Optimiza la velocidad y los recursos de la máquina.'
          ],
          teacherNotes: 'Refuerce la analogía del director de orquesta. Si el director se va, nadie sabe cuándo tocar y la música se vuelve un caos. Lo mismo le pasaría al computador sin el SO.'
        },

        // ── Diapositiva 6: Ejemplo: SO Comunes ──
        {
          type: 'example',
          category: 'Ejemplos Reales',
          title: 'Sistemas Operativos que ya conoces',
          subtitle: 'Seguramente usas alguno de estos todos los días:',
          icon: '⚙️',
          description: 'Existen diferentes sistemas operativos creados para distintas marcas de tecnología. Algunos son abiertos (se adaptan a muchos equipos) y otros son propietarios (solo del fabricante).',
          features: [
            '**Windows**: El más común en computadores de casa y de la escuela.',
            '**Android**: El sistema de la mayoría de teléfonos inteligentes y tablets.',
            '**iOS / macOS**: Los sistemas exclusivos de los dispositivos de Apple (iPhones y Macs).',
            '**Linux / Unix**: Sistemas muy potentes usados en servidores y computadores avanzados.'
          ],
          teacherNotes: 'Pregunte a los alumnos: ¿Quién tiene Android en su celular? ¿Quién usa Windows en casa? Clasifique estas respuestas en la pizarra.'
        },

        // ── Diapositiva 7: Objetivos del SO ──
        {
          type: 'concept',
          category: 'Meta del Sistema Operativo',
          title: 'Los dos objetivos fundamentales del SO',
          mainIdea: 'El SO existe principalmente para lograr **dos cosas muy importantes**.',
          definition: '1. **Favorecer la relación usuario-máquina:** Hacer que usar el ordenador sea cómodo, fácil y visual para cualquier persona.\n2. **Optimizar la eficacia:** Administrar el procesador, la memoria RAM y los discos para que no se desperdicie energía ni velocidad.',
          keyPoints: [
            'Facilidad de uso: no necesitas saber código para abrir un archivo.',
            'Rendimiento: reparte los recursos de manera inteligente entre los programas abiertos.'
          ],
          teacherNotes: 'Pregunte a la clase: ¿Cómo sería guardar un archivo si tuviéramos que escribir la dirección exacta del disco con números en lugar de arrastrar una carpetita? Ahí se nota el primer objetivo.'
        },

        // ── Diapositiva 8: Pregunta de Comprensión ──
        {
          type: 'question',
          question: '¿Qué hace el SO si dos aplicaciones quieren usar la impresora al mismo tiempo?',
          context: 'Imagina que estás escribiendo en Word e imprimiendo un dibujo, y al mismo tiempo otra aplicación quiere imprimir una foto.',
          options: [
            'El computador se bloquea y se apaga.',
            'La impresora imprime las dos cosas mezcladas en la misma hoja.',
            'El SO organiza una "cola de espera" y decide a quién darle el turno primero.'
          ],
          answer: 'El SO organiza una "cola de espera" y decide a quién darle el turno primero.',
          explanation: 'Esta función se llama **Asignación de Recursos**. El SO actúa como un policía de tránsito digital, ordenando los turnos para que todo funcione sin chocar.',
          teacherNotes: 'Haga énfasis en que el SO evita conflictos entre programas. Si dos programas escriben en la misma memoria o usan la misma pantalla a la vez sin control, el sistema colapsaría.'
        },

        // ── Diapositiva 9: Funciones del SO - Parte 1 ──
        {
          type: 'concept',
          category: 'Funciones Principales',
          title: '¿De qué se encarga el Sistema Operativo?',
          mainIdea: 'El SO realiza muchas tareas complejas en segundo plano sin que te des cuenta.',
          definition: 'Gestiona la memoria, asigna recursos a los programas, se comunica con los periféricos (mouse, teclado, impresora) y controla el arranque del sistema.',
          keyPoints: [
            '**Arranque (Boot)**: Inicializa y comprueba que todo el hardware funcione al encender.',
            '**Control de periféricos**: Ayuda a que el computador entienda cuando mueves el mouse o conectas un USB.',
            '**Asignación de memoria**: Decide qué programas se cargan en la RAM y cuáles se quedan en el disco duro.'
          ],
          teacherNotes: 'Explique brevemente qué pasa cuando encendemos la computadora: la pantalla negra inicial con letras suele ser el testeo de hardware que hace el sistema básico antes de que el SO tome el control.'
        },

        // ── Diapositiva 10: Funciones del SO - Gestión de Archivos ──
        {
          type: 'example',
          category: 'Gestión de Archivos',
          title: 'Organizando la información: Ficheros',
          subtitle: '¿Cómo sabe el computador dónde guardaste tu dibujo?',
          icon: '📂',
          description: 'Un **fichero o archivo** es un conjunto de información almacenada a la que le ponemos un nombre (por ejemplo: `mi_tarea.docx`). El SO se encarga de todo el orden.',
          features: [
            '**Buscar espacio**: Encuentra un lugar vacío en el disco duro para guardar tu archivo.',
            '**Controlar lectura/grabación**: Asegura que el archivo se guarde completo y sin errores.',
            '**Protección de información**: Te permite poner contraseñas o permisos para que nadie más lea tus documentos privados.'
          ],
          teacherNotes: 'Utilice la analogía de un archivador físico con cajones y etiquetas. El SO es la secretaria ordenada que sabe exactamente en qué cajón guardó cada papel.'
        },

        // ── Diapositiva 11: Estructura del SO ──
        {
          type: 'diagram',
          category: 'Estructura Interna',
          title: '¿Cómo se divide un Sistema Operativo?',
          subtitle: 'El SO está compuesto por dos grandes grupos de programas:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Grupo 1',
              title: 'Programas de Control',
              desc: 'Se encargan de la **gestión física**. Controlan el hardware, deciden qué programas se ejecutan y transmiten los datos entre la memoria y los periféricos.',
              metrics: { 'Objetivo': 'Controlar y Coordinar', 'Nivel': 'Interno' }
            },
            {
              badge: 'Grupo 2',
              title: 'Programas de Proceso',
              desc: 'Ayudan a los programadores y usuarios. Incluyen **traductores** (compiladores e intérpretes que traducen código) y **utilidades** (herramientas para ordenar, recuperar archivos borrados, etc.).',
              metrics: { 'Objetivo': 'Facilitar y Asistir', 'Nivel': 'Servicio' }
            }
          ],
          teacherNotes: 'Esta división ayuda a entender que el SO no solo controla los cables y chips (Control), sino que también nos da herramientas útiles para mantener y programar (Proceso).'
        },

        // ── Diapositiva 12: Tipos de SO: Monotarea vs Multitarea ──
        {
          type: 'concept',
          category: 'Tipos de SO',
          title: '¿Monotarea o Multitarea?',
          mainIdea: 'Dependiendo de cuántas cosas pueda hacer el computador a la vez, los sistemas se clasifican en monotareas o multitareas.',
          definition: '• **Monotarea:** Solo puede ejecutar un programa a la vez. Si quieres abrir otro, debes cerrar el actual.\n• **Multitarea:** Puede ejecutar varios programas al mismo tiempo de forma coordinada (como escuchar música mientras escribes en Word).',
          analogy: '**Monotarea:** Es como leer un libro; no puedes leer dos páginas diferentes al mismo tiempo con los mismos ojos.\n**Multitarea:** Es como un malabarista que mantiene varias pelotas en el aire a la vez.',
          keyPoints: [
            'Los sistemas antiguos (como MS-DOS) eran monotarea.',
            'Los sistemas modernos (como Windows, Android, iOS) son multitarea.'
          ],
          teacherNotes: 'Haga reflexionar a los estudiantes sobre cómo usan su celular hoy en día: escuchan Spotify de fondo mientras chatean por WhatsApp. Eso es gracias a la multitarea.'
        },

        // ── Diapositiva 13: Tipos de SO: Monousuario vs Multiusuario ──
        {
          type: 'concept',
          category: 'Tipos de SO',
          title: '¿Monousuario o Multiusuario?',
          mainIdea: 'Dependiendo de cuántas personas puedan usar los recursos del ordenador al mismo tiempo.',
          definition: '• **Monousuario:** Diseñado para que lo use un solo usuario a la vez.\n• **Multiusuario:** Permite que varios usuarios conectados por terminales compartan el mismo procesador, la memoria y periféricos simultáneamente.',
          keyPoints: [
            'Tu computador personal o tu celular son Monousuario.',
            'Los servidores de grandes empresas o páginas web son Multiusuario, ya que atienden a miles de personas a la vez.'
          ],
          teacherNotes: 'Aclare que aunque Windows permite crear varios "perfiles" en casa (Papá, Mamá, Hijo), solo uno puede usar físicamente el teclado y ratón a la vez en ese equipo, por lo que se considera monousuario en la práctica de microordenadores.'
        },

        // ── Diapositiva 14: Diagrama Comparativo: Clasificación ──
        {
          type: 'diagram',
          category: 'Clasificación Completa',
          title: 'Tipos de Sistemas Operativos',
          subtitle: 'Cuadrante de usuarios y tareas admitidas:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Monousuario + Monotarea',
              title: 'Sencillo e Histórico',
              desc: 'Un usuario, una tarea. Muy rápidos para computadores antiguos de pocos recursos.\n\n*Ejemplo:* **MS-DOS**, **CP/M**.'
            },
            {
              badge: 'Monousuario + Multitarea',
              title: 'El estándar actual de casa',
              desc: 'Un usuario en el equipo físico, pero haciendo muchas cosas a la vez.\n\n*Ejemplo:* **Windows 10/11**, **macOS**, **Android**.'
            },
            {
              badge: 'Multiusuario + Multitarea',
              title: 'Máxima potencia y control',
              desc: 'Muchos usuarios usando la misma computadora potente para muchas tareas diferentes.\n\n*Ejemplo:* **UNIX**, **Windows NT Server**, **Linux**.'
            }
          ],
          teacherNotes: 'Muestre a los estudiantes cómo la tecnología evolucionó desde sistemas que solo hacían una cosa a la vez para una persona, hasta servidores gigantes que controlan miles de procesos para todo el colegio o una red social.'
        },

        // ── Diapositiva 15: Cuestionario Interactivo ──
        {
          type: 'quiz',
          title: 'Cuestionario de Comprobación',
          description: '¡Demuestra lo que has aprendido sobre los Sistemas Operativos!',
          quizTitle: '¿Cuánto recuerdas?',
          questions: [
            {
              id: 'q1',
              question: '¿Qué es el Software?',
              options: [
                'La pantalla, el mouse y el teclado físicamente.',
                'Los programas y las instrucciones lógicas que hacen funcionar al computador.',
                'El ventilador que enfría el procesador por dentro.'
              ],
              correctIndex: 1,
              feedback: {
                correct: '¡Excelente! El software es el soporte lógico, las instrucciones que no podemos tocar físicamente.',
                incorrect: 'Recuerda que lo físico es el **hardware**. El software son los programas e instrucciones digitales.'
              }
            },
            {
              id: 'q2',
              question: '¿Cuál es la analogía que mejor representa al Sistema Operativo?',
              options: [
                'Un cocinero preparando un solo plato lento.',
                'Un director de orquesta coordinando a todos los músicos (hardware y aplicaciones).',
                'Una hoja de papel en blanco donde escribes con lápiz.'
              ],
              correctIndex: 1,
              feedback: {
                correct: '¡Muy bien! El SO dirige y coordina todo el hardware y software para que funcionen armónicamente.',
                incorrect: 'El SO coordina y organiza múltiples recursos: actúa como un **director de orquesta**.'
              }
            },
            {
              id: 'q3',
              question: '¿Qué tipo de Sistema Operativo es Android en tu celular?',
              options: [
                'Monousuario y Monotarea (solo una app por usuario).',
                'Multiusuario y Monotarea (muchos usuarios, una sola app).',
                'Monousuario y Multitarea (un usuario, pero puede correr música de fondo mientras chatea).'
              ],
              correctIndex: 2,
              feedback: {
                correct: '¡Perfecto! El celular lo usa una persona a la vez, pero puede realizar varias tareas simultáneamente.',
                incorrect: 'Tu celular te permite escuchar música de fondo mientras chateas o juegas; por lo tanto, es **multitarea**.'
              }
            }
          ],
          teacherNotes: 'Pida a los alumnos que levanten la mano para cada opción antes de hacer clic en verificar. Fomente la participación.'
        },

        // ── Diapositiva 16: Verdadero o Falso ──
        {
          type: 'trueFalse',
          title: 'Evaluación rápida: ¿Verdadero o Falso?',
          tfTitle: 'Comprobemos estas afirmaciones sobre sistemas operativos:',
          statements: [
            {
              id: 'tf1',
              statement: 'Un archivo o fichero es un conjunto de información almacenada a la cual se le asigna un nombre.',
              answer: true,
              explanation: '**Verdadero.** Es el concepto básico de almacenamiento. El SO lo guarda en disco con un nombre identificador.'
            },
            {
              id: 'tf2',
              statement: 'Los programas de control en el SO se encargan de traducir lenguajes de programación.',
              answer: false,
              explanation: '**Falso.** Traducir lenguajes es tarea de los programas de **proceso** (traductores, compiladores). Los de control manejan la máquina física.'
            },
            {
              id: 'tf3',
              statement: 'MS-DOS es un sistema operativo moderno de tipo multiusuario y multitarea.',
              answer: false,
              explanation: '**Falso.** MS-DOS es un sistema histórico muy antiguo que era de tipo monousuario y monotarea.'
            }
          ],
          teacherNotes: 'Revise cada afirmación detenidamente pidiendo explicaciones del porqué a los estudiantes.'
        },

        // ── Diapositiva 17: Actividad Práctica ──
        {
          type: 'activity',
          title: 'Actividad: Detective de Sistemas Operativos',
          activityTitle: 'Instrucciones para resolver en clase:',
          icon: '🔍',
          instructions: 'Observa los dispositivos que tienes a tu alrededor o en tu casa y completa el siguiente reto:',
          steps: [
            'Identifica al menos 2 dispositivos tecnológicos diferentes (ejemplo: televisor inteligente, consola de videojuegos, computador, celular).',
            'Investiga cuál es el nombre del **Sistema Operativo** que hace funcionar cada uno.',
            'Escribe si esos sistemas operativos son **Monotarea** o **Multitarea** y explica por qué.'
          ],
          tip: 'Puedes mirar en el menú de "Ajustes" o "Configuración" -> "Acerca del dispositivo" para encontrar el nombre exacto de tu SO.',
          teacherNotes: 'Dé unos 5 a 10 minutos para que los estudiantes lo piensen o comenten con su compañero de banco, luego invite a tres de ellos a compartir sus hallazgos en voz alta.'
        },

        // ── Diapositiva 18: Resumen / Cierre ──
        {
          type: 'summary',
          title: 'Resumen de la Clase',
          summaryTitle: 'Puntos clave que debes recordar hoy:',
          points: [
            'El **software** es el soporte lógico (programas) que le dice al hardware físico qué hacer.',
            'El **Sistema Operativo (SO)** es el puente principal que organiza todos los recursos y facilita el uso al usuario.',
            'Entre sus tareas destacan: gestionar archivos (ficheros), controlar errores, arrancar el equipo y asignar prioridades a los periféricos.',
            'Los sistemas se clasifican por **usuarios** (monousuario/multiusuario) y por **tareas** (monotarea/multitarea).',
            'Los dispositivos de hoy usan principalmente sistemas **Monousuario y Multitarea** (Windows, Android, iOS).'
          ],
          teacherNotes: 'Felicite a los estudiantes por su participación. Anime a revisar el sistema operativo de sus dispositivos en casa para la próxima sesión.'
        }
      ]
    }
  ]
}
