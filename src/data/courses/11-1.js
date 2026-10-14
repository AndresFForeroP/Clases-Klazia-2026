/**
 * Contenido educativo — Grado 11.º Grupo 1
 * Tema: Capas de Neuronas y Flujo de Información
 *
 * Fuente académica estricta: cursos/11/11-1.md
 * Formato: Presentación Académica Interactiva por Diapositivas
 * Regla pedagógica: UNA SOLA IDEA POR DIAPOSITIVA
 * Secuencia: COMPRENDER → EXPLICAR CON SENCILLEZ → EJEMPLIFICAR → RELACIONAR → PROFUNDIZAR
 *
 * Estructura de clase:
 * - Sin cuestionario / quiz final.
 * - Sin preguntas de verdadero / falso.
 * - Sin preguntas heredadas antiguas.
 * - UNA sola ACTIVIDAD individual práctica (5-10 min).
 */

export const course11_1 = {
  title: 'Capas de Neuronas',
  description: 'Arquitectura de capas (entrada, ocultas y salida), topología de conexiones (crossbar y autorrecurrentes) y sentido de la marcha de la información (feedforward y feedback).',
  lessons: [
    {
      id: 'capas-neuronas',
      title: 'Capas de Neuronas y Flujo de Información',
      description: 'Presentación interactiva: clasificación de capas, tipos de conexiones y dinámicas de propagación de señales en redes neuronales.',
      slides: [
        // ── Diapositiva 1: Portada y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 11.º — Grupo 1',
          title: 'Capas de Neuronas y Flujo de Información',
          subtitle: 'Arquitectura de capas, topología de conexiones y dinámicas de propagación de la señal',
          objectives: [
            'Comprender la necesidad y el principio de agrupar neuronas artificiales en capas.',
            'Identificar la función específica de los tres grupos de capas: entrada, ocultas y salida.',
            'Diferenciar las conexiones crossbar (cruzadas) y autorrecurrentes (a sí mismas).',
            'Analizar la direccionalidad y el sentido de la marcha de la información en una red neuronal.',
            'Comparar la propagación hacia adelante (feedforward) y la propagación hacia atrás (feedback), reconociendo sus dos grupos de pesos.',
          ],
          teacherNotes: '**Inicio de sesión:** Establezca el puente con la clase anterior: ya sabemos cómo funciona una neurona individual; hoy aprenderemos cómo se organizan en equipo formando capas y cómo viaja la señal a través de ellas.',
        },

        // ── Diapositiva 2: De la Neurona Individual a las Capas ──
        {
          type: 'concept',
          category: 'Fundamento Arquitectónico',
          title: 'De la Neurona Individual a las Capas',
          mainIdea: 'Una neurona aislada solo puede tomar decisiones muy elementales; para resolver problemas complejos, las neuronas se organizan en **agrupaciones llamadas capas**.',
          analogy: 'Una persona sola no puede operar un hospital completo; organizamos al personal en departamentos coordinados (recepción, diagnóstico, tratamiento) donde cada equipo resuelve una etapa del proceso.',
          keyPoints: [
            '**Definición de capa**: Conjunto estructurado de neuronas que operan en un mismo nivel funcional dentro de la red.',
            '**Procesamiento cooperativo**: Al conectarse entre sí, las neuronas distribuyen el cálculo matemático y transforman la información en etapas sucesivas.',
            '**Los tres grandes grupos**: Toda red neuronal organiza sus capas en tres categorías canónicas: **Entrada**, **Ocultas** y **Salida**.',
          ],
          teacherNotes: 'Enfatice que una red no es un montón caótico de neuronas: existe una estructura organizada en capas donde cada una cumple una labor especializada.',
        },

        // ── Diapositiva 3: Capa de Entrada ──
        {
          type: 'concept',
          category: 'Estructura de Capas',
          title: 'Capa de Entrada: Los Sensores de la Red',
          mainIdea: 'Es la primera capa de la red; su función es **recibir los datos del exterior** y transferirlos directamente a las capas posteriores.',
          definition: 'Capa de neuronas que actúan como sensores: reciben la información externa del entorno y se limitan a pasarla a las capas siguientes sin realizar transformaciones complejas.',
          keyPoints: [
            '**Función de receptor sensorial**: Captura variables del entorno (píxeles de una imagen, niveles de sonido, lecturas de temperatura o datos numéricos).',
            '**Paso directo de señal**: No realiza cálculos de abstracción profunda; su rol esencial es servir como canal de ingreso y distribución de la señal.',
            '**Punto de partida**: Cualquier proceso de computación en la red neuronal inicia indefectiblemente en esta capa.',
          ],
          teacherNotes: 'Aclare que las neuronas de entrada funcionan como antenas o receptores: no modifican los datos brutos, solo los introducen al sistema.',
        },

        // ── Diapositiva 4: Ejemplo de Entrada — La Retina ──
        {
          type: 'example',
          category: 'Ejemplo Biológico',
          title: 'Ejemplo de Entrada: La Retina Humana',
          icon: '👁️',
          description: 'En el sistema visual humano, la **retina** está formada por millones de células fotorreceptoras que reciben la luz del exterior y la transforman en impulsos eléctricos hacia la zona occipital del cerebro.',
          analogy: 'En informática, la capa de entrada de una red de visión artificial es la matriz de píxeles capturada por el sensor de una cámara web: convierte fotones en números para alimentar la red.',
          features: [
            'La retina no "interpreta" qué objeto está viendo; únicamente captura y codifica la luz recibida.',
            'Transfiere las señales eléctricas generadas hacia las áreas posteriores del cerebro para su procesamiento.',
            'En una red informática, cada píxel o sensor físico alimenta a una neurona específica de la capa de entrada.',
          ],
          teacherNotes: 'Destaque la analogía con la retina: la retina no sabe si ve un gato o un texto; solo convierte la luz en impulsos nerviosos que viajan hacia el cerebro.',
        },

        // ── Diapositiva 5: Capas Ocultas ──
        {
          type: 'concept',
          category: 'Estructura de Capas',
          title: 'Capas Ocultas: El Corazón del Procesamiento',
          mainIdea: 'Son las capas situadas **entre la entrada y la salida**; aquí es donde ocurre el verdadero análisis y extracción de patrones.',
          definition: 'Capas intermedias de neuronas que transforman progresivamente las señales. Según la arquitectura de la red y el problema a resolver, pueden existir **ninguna, una o varias** capas ocultas.',
          keyPoints: [
            '**¿Por qué "ocultas"?**: Porque no tienen contacto directo con el exterior; ni reciben datos brutos del entorno ni emiten la respuesta final.',
            '**¿Cuándo son ninguna (0)?**: En problemas sencillos y linealmente separables, donde la capa de entrada se conecta directamente con la de salida.',
            '**¿Cuándo son imprescindibles?**: En problemas complejos (visión, voz, predicción) donde se requiere descomponer datos en múltiples niveles de abstracción.',
          ],
          teacherNotes: 'Subraye que las capas ocultas no son obligatorias en todas las redes: pueden ser 0 en redes elementales, pero son indispensables cuando el problema tiene complejidad no lineal.',
        },

        // ── Diapositiva 6: Capa de Salida ──
        {
          type: 'concept',
          category: 'Estructura de Capas',
          title: 'Capa de Salida: La Emisión de la Respuesta',
          mainIdea: 'Es la última etapa de la red; **transfiere las señales resultantes hacia el exterior** para interactuar con el entorno.',
          definition: 'Capa de neuronas encargadas de emitir la decisión final, clasificación o acción física producida por la red hacia el usuario, otro sistema o un actuador.',
          keyPoints: [
            '**Emisión hacia el exterior**: Traduce las operaciones matemáticas internas en un resultado observable y utilizable.',
            '**Naturaleza de la señal**: Puede emitir señales continuas (analógicas, como intensidades o voltajes) o discretas (categorías o decisiones booleanas).',
            '**Cierre del ciclo**: Representa el destino final del flujo de computación de una entrada dada.',
          ],
          teacherNotes: 'Explique que la capa de salida es la "boca" o los "brazos" de la red: comunica la conclusión del procesamiento al mundo exterior.',
        },

        // ── Diapositiva 7: Ejemplo de Salida — Motores de un Robot ──
        {
          type: 'example',
          category: 'Ejemplo Tecnológico',
          title: 'Ejemplo de Salida: Control de Motores en un Robot',
          icon: '🤖',
          description: 'En un robot móvil de 4 ruedas, la **capa de salida** emite señales analógicas que activan y modulan la velocidad del motor de cada una de sus ruedas.',
          analogy: 'Si los sensores de proximidad (entrada) detectan un obstáculo a la izquierda, la capa de salida ordena: "Rueda izquierda al 100%, rueda derecha al 30%" para girar y evitar el choque.',
          features: [
            'Cada neurona de la capa de salida controla directamente un actuador electromecánico.',
            'Las señales emitidas regulan variables físicas reales (potencia, voltaje, dirección de giro).',
            'Cierra el ciclo inteligente completo: percibir (entrada) → procesar (ocultas) → actuar (salida).',
          ],
          teacherNotes: 'Muestre cómo el valor numérico que sale de una neurona se convierte físicamente en voltaje que hace girar una rueda a mayor o menor velocidad.',
        },

        // ── Diapositiva 8: Diagrama de los Tres Grupos de Capas ──
        {
          type: 'diagram',
          category: 'Esquema de Flujo',
          title: 'Los Tres Grandes Grupos de Capas',
          subtitle: 'Recorrido canónico de la información a través de la arquitectura de la red:',
          diagramType: 'flow',
          nodes: [
            {
              icon: '📥',
              label: 'Capa de Entrada',
              desc: 'Sensores que reciben datos brutos del exterior (ej. retina o cámara).',
            },
            {
              icon: '⚙️',
              label: 'Capas Ocultas',
              desc: '0, 1 o varias capas intermedias que transforman y extraen patrones.',
            },
            {
              icon: '📤',
              label: 'Capa de Salida',
              desc: 'Transfiere la señal resultante hacia el exterior (ej. motores del robot).',
            },
          ],
          teacherNotes: 'Haga un recorrido visual: la información entra por la izquierda, se procesa en el centro y sale por la derecha. Esta es la estructura básica de cualquier red neuronal artificial.',
        },

        // ── Diapositiva 9: Conexiones Crossbar ──
        {
          type: 'concept',
          category: 'Topología de Conexiones',
          title: 'Conexiones Crossbar: El Entramado Cruzado',
          mainIdea: 'Son conexiones en las que **las salidas de las neuronas de una capa se cruzan entre sí** para enlazarse con múltiples neuronas de otra capa.',
          definition: 'Topología de enlace en matriz o malla cruzada donde las señales se intersectan, distribuyendo la información desde varios orígenes hacia múltiples destinos.',
          keyPoints: [
            '**Cruce de salidas**: La salida de una neurona no viaja en una línea aislada paralela; se cruza y conecta con múltiples neuronas receptoras.',
            '**Integración de señales**: Permite que una neurona receptora reciba información combinada proveniente de diversas fuentes simultáneamente.',
            '**Inspiración técnica**: Proviene de las matrices de conmutación de telefonía e informática (*crossbar switch*), donde cualquier entrada puede interconectarse con cualquier salida.',
          ],
          teacherNotes: 'Dibuje imaginariamente una cuadrícula donde las líneas horizontales se cruzan con las verticales: eso es crossbar, un cruce múltiple de caminos entre capas.',
        },

        // ── Diapositiva 10: Conexiones Autorrecurrentes ──
        {
          type: 'concept',
          category: 'Topología de Conexiones',
          title: 'Conexiones Autorrecurrentes: Bucle a Sí Misma',
          mainIdea: 'Son aquellas conexiones en las que **la salida de una neurona vuelve a ser entrada de ella misma**.',
          definition: 'Enlace de retroalimentación local directa donde la neurona utiliza su propio resultado anterior como dato de entrada para su siguiente ciclo de cálculo.',
          keyPoints: [
            '**Bucle directo sobre sí misma**: Salida de $N_i$ $\\to$ Entrada de $N_i$.',
            '**Memoria local inmediata**: Permite a la neurona retener o mantener su estado previo a lo largo del tiempo.',
            '**Dinámica temporal**: Introduce persistencia e inercia matemática: la respuesta presente depende no solo de las entradas externas, sino de lo que la neurona calculó un instante antes.',
          ],
          teacherNotes: 'Ponga el ejemplo de un eco o de una persona que recuerda su propia respuesta anterior antes de responder la siguiente pregunta. Eso es una conexión autorrecurrente.',
        },

        // ── Diapositiva 11: El Sentido de la Marcha de la Señal ──
        {
          type: 'concept',
          category: 'Dinámica de la Información',
          title: 'El Sentido de la Marcha de la Información',
          mainIdea: 'La disposición de las conexiones determina **el camino y sentido direccional** que sigue la señal al recorrer la red neuronal.',
          definition: 'Intuitivamente, la información entra por la capa de entrada, viaja por las capas ocultas y sale por la capa de salida. Por lo tanto, la señal tiene un **sentido de la marcha**.',
          keyPoints: [
            '**Flujo intuitivo unidireccional**: Entrada $\\to$ Capas Ocultas $\\to$ Salida.',
            '**Caminos alternativos y tortuosos**: Si las conexiones forman bucles hacia la misma capa o capas previas, la señal vuelve a entrar o recircula.',
            '**Criterio fundamental de clasificación**: Según el sentido que sigue la información, la propagación de la señal se clasifica en dos modos: **Propagación hacia adelante (Feedforward)** y **Propagación hacia atrás (Feedback)**.',
          ],
          teacherNotes: 'Use la metáfora de las calles de tránsito: hay calles de un solo sentido (feedforward) y rotondas o calles de doble sentido con retornos (feedback).',
        },

        // ── Diapositiva 12: Propagación hacia Adelante (Feedforward) ──
        {
          type: 'concept',
          category: 'Modos de Propagación',
          title: 'Propagación hacia Adelante (Feedforward)',
          mainIdea: 'Es aquella en la que **ninguna salida de las neuronas de una capa es entrada de cualquier otra neurona de su misma capa ni de capas anteriores**.',
          definition: 'Flujo de información estrictamente unidireccional y sin ciclos: la señal se propaga siempre hacia adelante desde la capa de entrada hacia la capa de salida.',
          keyPoints: [
            '**Sin ciclos ni bucles**: Ninguna neurona retrocede información ni alimenta a sus compañeras de la misma capa.',
            '**Cálculo determinista y rápido**: La información fluye en una sola pasada ordenada de izquierda a derecha.',
            '**Aplicación principal**: Es especialmente útil y eficiente para el **reconocimiento o clasificación de patrones** (ej. detección de imágenes, reconocimiento de caracteres o diagnóstico estático).',
          ],
          teacherNotes: 'Enfatice la regla de oro del Feedforward: la señal NUNCA retrocede ni se queda en la misma capa. Solo viaja hacia adelante hasta la salida.',
        },

        // ── Diapositiva 13: Propagación hacia Atrás (Feedback / Recurrente) ──
        {
          type: 'concept',
          category: 'Modos de Propagación',
          title: 'Propagación hacia Atrás (Feedback / Recurrente)',
          mainIdea: 'Es aquella en la que **alguna salida de una capa vuelve como entrada a una neurona de su misma capa o de una capa anterior**.',
          definition: 'Flujo de información con recirculación: la señal viaja hacia adelante (forward) pero también retrocede (feedback), generando bucles dinámicos.',
          keyPoints: [
            '**Circulación mixta**: La información circula simultáneamente hacia adelante y hacia atrás dentro de la estructura.',
            '**Dos grupos de pesos**: En estas redes coexisten dos conjuntos de parámetros fundamentales: **a) Pesos de las conexiones forward** y **b) Pesos de las conexiones feedback**.',
            '**Capacidad de memoria contextual**: Al retroalimentar la señal, la red puede procesar secuencias en el tiempo, texto continuo y predicciones basadas en la historia previa.',
          ],
          teacherNotes: 'Aclare bien que en feedback existen DOS grupos de pesos independientes: unos regulan el avance hacia adelante y otros regulan la retroalimentación hacia atrás.',
        },

        // ── Diapositiva 14: Cuadro Comparativo: Feedforward vs. Feedback ──
        {
          type: 'diagram',
          category: 'Cuadro Comparativo',
          title: 'Feedforward vs. Feedback: Comparativa Técnica',
          subtitle: 'Diferencias estructurales y de funcionamiento según el sentido de la marcha:',
          diagramType: 'table',
          tableHeaders: ['Aspecto Técnico', 'Propagación hacia Adelante (Feedforward)', 'Propagación hacia Atrás (Feedback)'],
          tableRows: [
            [
              'Sentido de la señal',
              'Estrictamente unidireccional (Entrada → Salida)',
              'Bidireccional y cíclico (Adelante y hacia atrás)',
            ],
            [
              'Conexiones en la misma capa',
              'Ninguna permitida (sin enlaces laterales)',
              'Permitidas (neuronas se conectan entre sí o consigo mismas)',
            ],
            [
              'Conexiones a capas anteriores',
              'No existen (la señal nunca retrocede)',
              'Sí existen (salidas alimentan niveles previos)',
            ],
            [
              'Grupos de pesos',
              'Un solo grupo de pesos (conexiones forward)',
              'Dos grupos diferenciados: pesos forward y pesos feedback',
            ],
            [
              'Comportamiento temporal',
              'Estático: respuesta inmediata sin memoria pasada',
              'Dinámico: posee memoria y retiene estados anteriores',
            ],
            [
              'Aplicación típica',
              'Reconocimiento y clasificación de patrones',
              'Procesamiento de secuencias temporales, texto y audio',
            ],
          ],
          teacherNotes: 'Pase por la tabla resaltando las tres diferencias clave: dirección del flujo, existencia de bucles y la presencia de dos grupos de pesos en feedback.',
        },

        // ── Diapositiva 15: Actividad Práctica Individual (5-10 min) ──
        {
          type: 'activity',
          title: 'Actividad Individual: Arquitectura y Propagación en Redes',
          activityTitle: 'Aplicación Práctica — Diagnóstico de Capas y Flujos Neuronales',
          icon: '🧠',
          instructions: 'Analiza los siguientes 4 requerimientos técnicos y responde de forma concreta en tu cuaderno o documento de trabajo. Tiempo estimado: 5 a 10 minutos. Trabajo estrictamente individual.',
          steps: [
            '**Paso 1 (Identificación de Capas):** En un dron de rescate, una cámara térmica detecta calor corporal, una etapa intermedia analiza si la silueta corresponde a un excursionista extraviado, y un módulo final activa una alarma sonora y estabiliza el vuelo. Identifica cuál es la capa de entrada, cuál la oculta y cuál la de salida, explicando la función de cada una.',
            '**Paso 2 (Análisis de Capas Ocultas):** Explica en qué circunstancia una red neuronal puede funcionar perfectamente sin ninguna capa oculta (0 capas) y en qué casos resulta imprescindible la existencia de una o varias capas ocultas.',
            '**Paso 3 (Topología de Conexiones):** Explica la diferencia física y funcional entre una conexión **crossbar** (cruzada entre neuronas de diferentes capas) y una conexión **autorrecurrente** (la salida de una neurona entra a ella misma).',
            '**Paso 4 (Sentido de la Marcha y Pesos):** Si queremos diseñar un sistema que prediga la siguiente palabra que escribirá un usuario basándose en las tres palabras anteriores que ya redactó, ¿qué tipo de propagación (feedforward o feedback) se debe emplear? Justifica tu respuesta mencionando qué papel juegan sus dos grupos de pesos.',
          ],
          tip: 'Tiempo: 5-10 minutos. Actividad individual. Sé conciso y utiliza los términos técnicos correctos: capa de entrada (sensores), capas ocultas, capa de salida, conexiones crossbar, conexiones autorrecurrentes, propagación feedforward vs feedback, pesos forward y pesos feedback.',
          teacherNotes: 'Dé entre 5 y 10 minutos para trabajo individual en silencio. Al finalizar, invite a dos estudiantes al azar a responder el paso 2 y el paso 4 para afianzar el aprendizaje.',
        },

        // ── Diapositiva 16: Resumen y Cierre de la Lección ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Puntos clave a recordar sobre las Capas de Neuronas:',
          points: [
            '**Organización en capas**: Las neuronas se agrupan en capas conectadas entre sí para procesar información compleja por etapas sucesivas.',
            '**Capa de entrada**: Actúa como sensor del entorno (ej. retina humana o matriz de píxeles); recibe los datos externos y los pasa sin alteración a las capas posteriores.',
            '**Capas ocultas**: Situadas entre la entrada y la salida; realizan las transformaciones y la extracción de patrones. Pueden ser ninguna (0), una o varias según la dificultad del problema.',
            '**Capa de salida**: Transfiere las señales finales procesadas hacia el exterior (ej. señal analógica para los motores de un robot).',
            '**Conexiones crossbar**: Topología en malla cruzada donde las salidas de una capa se entrelazan hacia múltiples neuronas receptoras.',
            '**Conexiones autorrecurrentes**: La salida de una neurona vuelve a ser entrada de ella misma, aportando memoria local inmediata.',
            '**Sentido de la marcha**: La disposición de las conexiones define la direccionalidad del flujo de información dentro de la red.',
            '**Propagación Feedforward**: La información viaja estrictamente hacia adelante sin ciclos ni retrocesos; óptima para reconocimiento y clasificación de patrones.',
            '**Propagación Feedback**: La señal circula hacia adelante y hacia atrás (a su misma capa o capas previas), incorporando dos grupos de pesos: pesos forward y pesos feedback.',
          ],
          teacherNotes: 'Felicite al grupo por su atención y recuerde que dominar la arquitectura de capas y el sentido de propagación es la base para comprender todas las arquitecturas modernas de inteligencia artificial.',
        },
      ],
    },
  ],
}
