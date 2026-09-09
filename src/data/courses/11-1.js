/**
 * Contenido educativo — Grado 11.º Grupo 1
 * Tema: Introducción a Conexiones y Redes Neuronales Artificiales
 *
 * Fuente: cursos/11/11-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel técnico avanzado para 11.º grado.
 * Formato de clase:
 * - Sin preguntas de quiz final.
 * - Sin verdadero o falso.
 * - Sin actividades grupales.
 * - Preguntas orales de discusión durante la explicación.
 * - UNA sola ACTIVIDAD práctica individual (5-10 min).
 */

export const course11_1 = {
  title: 'Introducción a Conexiones y Redes Neuronales',
  description: 'Fundamentos del paradigma conexionista, arquitectura de redes neuronales artificiales, modelos fundacionales, el dilema de la función XOR y el algoritmo de retropropagación.',
  lessons: [
    {
      id: 'introduccion-conexiones',
      title: 'Introducción a Conexiones y Redes Neuronales',
      description: 'Presentación académica guiada para la clase presencial de 11.º grado.',
      slides: [
        // ── Diapositiva 1: Título y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 11.º — Grupo 1',
          title: 'Introducción a Conexiones y Redes Neuronales',
          subtitle: 'Del paradigma simbolista a los modelos conexionistas y el aprendizaje profundo',
          objectives: [
            'Distinguir el paradigma de la computación clásica (Neumann-Turing / Simbolista) del paradigma conexionista (Redes Neuronales Artificiales).',
            'Analizar las características operativas de las redes neuronales: procesamiento distribuido en paralelo, tolerancia a fallos y autoorganización de pesos sinápticos.',
            'Comprender la evolución histórica: modelo McCulloch-Pitts, regla de aprendizaje Hebbiano, Perceptrón de Rosenblatt y algoritmos LMS/ADALINE.',
            'Evaluar la crisis de separabilidad lineal (problema de la compuerta XOR planteado por Minsky y Papert) y su resolución mediante Perceptrones Multicapa (MLP), funciones sigmoideas y Retropropagación (Backpropagation).',
          ],
          teacherNotes: '**Sugerencia de inicio:** Pregunte a los estudiantes cómo un computador tradicional calcula una suma frente a cómo un cerebro humano reconoce un rostro instantáneamente. Introduzca el contraste entre el procesamiento secuencial algorítmico y el procesamiento conexionista distribuido.',
        },

        // ── Diapositiva 2: Pregunta disparadora ──
        {
          type: 'question',
          question: '¿Qué diferencia sustancial existe entre programar un algoritmo clásico y entrenar una red neuronal artificial?',
          context: 'Piensen en cómo se gestionan las reglas lógicas: ¿las escribe el desarrollador una por una o las deduce el sistema mediante pesos numéricos?',
          options: [
            'No hay ninguna diferencia técnica; ambos modelos ejecutan secuencias idénticas de instrucciones if/else.',
            'En el cómputo clásico el programador codifica reglas explícitas paso a paso; en la red neuronal el sistema autoorganiza sus pesos sinápticos a partir de datos de entrenamiento.',
            'Las redes neuronales solo funcionan en computadores cuánticos y no pueden implementarse en sistemas digitales.',
          ],
          answer: 'En el cómputo clásico el programador codifica reglas explícitas paso a paso; en la red neuronal el sistema autoorganiza sus pesos sinápticos a partir de datos de entrenamiento.',
          explanation: 'El paradigma conexionista reemplaza la lógica algorítmica preprogramada por un modelo de **aprendizaje adaptativo**, donde la información reside distribuida en la fuerza o peso de las interconexiones entre nodos.',
          teacherNotes: 'Dedique 1-2 minutos a generar debate oral. Resalte que en el conexionismo no hay un bloque de memoria aislado de un procesador central, sino que el cómputo y el almacenamiento residen en los propios enlaces.',
        },

        // ── Diapositiva 3: Simbolismo vs. Conexionismo ──
        {
          type: 'concept',
          category: 'Fundamentos Epistemológicos',
          title: 'Simbolismo vs. Conexionismo',
          mainIdea: 'El **programa simbolista** asume que la cognición consiste en manipular símbolos abstractos mediante reglas lógicas, mientras que el **programa conexionista** emula la arquitectura biológica de redes y capas neuronales.',
          definition: 'Bajo la perspectiva monista que identifica mente y cerebro, el conexionismo prescinde de representaciones mentales aisladas y sustenta el procesamiento cognitivo en redes de neuronas densamente interconectadas.',
          keyPoints: [
            '**Enfoque Simbolista**: Basado en lógica formal, reglas sintácticas y representaciones simbólicas discretas (arquitectura de von Neumann).',
            '**Enfoque Conexionista**: Basado en modelos biológicos donde el conocimiento está distribuido numéricamente en las conexiones sinápticas.',
            '**Cambio de paradigma**: La inteligencia no surge de manipular símbolos aislados, sino de la dinámica colectiva de una red de procesamiento.',
          ],
          teacherNotes: 'Enfatice el contraste: para un simbolista un concepto es una variable o símbolo en memoria; para un conexionista es un patrón de activación extendido a través de miles de conexiones.',
        },

        // ── Diapositiva 4: Comparación Arquitectónica ──
        {
          type: 'diagram',
          category: 'Arquitectura Computacional',
          title: 'Computadores Clásicos vs. Sistemas Neuronales Artificiales',
          subtitle: 'Comparación técnica entre la máquina de Neumann-Turing y las arquitecturas conexionistas:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Modelo Clásico (Neumann-Turing)',
              title: 'Cómputo Secuencial y Rígido',
              desc: '• **Procesamiento Lineal**: Instrucción por instrucción de forma determinista y centralizada.<br>• **Sensibilidad Crítica a Fallos**: La falla de un registro o instrucción colapsa todo el flujo del programa.<br>• **Programación Explícita**: Cada caso y condición debe estar previsto de antemano por el desarrollador en el código.',
            },
            {
              badge: 'Modelo Conexionista (Redes Neuronales)',
              title: 'Cómputo Distribuido y Adaptativo',
              desc: '• **Procesamiento en Paralelo**: La información fluye y se procesa de forma distribuida en capas.<br>• **Tolerancia a Fallos**: Si una neurona o conexión falla, el sistema degrada su desempeño suavemente sin colapsar.<br>• **Autoorganización**: Aprende ajustando dinámicamente los pesos sinápticos durante el entrenamiento.',
            },
          ],
          teacherNotes: 'Haga hincapié en la "tolerancia a fallos": los cerebros biológicos pierden neuronas diariamente y continúan reconociendo patrones, a diferencia de un puntero nulo o segmento fault en programación clásica.',
        },

        // ── Diapositiva 5: Pilares Operativos del Conexionismo ──
        {
          type: 'concept',
          category: 'Principios de Operación',
          title: 'Propiedades Clave de las Redes Neuronales',
          mainIdea: 'Las redes neuronales artificiales operan como sistemas complejos adaptativos fundamentados en el **procesamiento distribuido**, la **tolerancia a fallos**, la **autoorganización** y el **aprendizaje adaptativo**.',
          definition: 'Durante la fase de entrenamiento, la red modifica iterativamente las intensidades de sus enlaces para converger hacia la respuesta o clasificación esperada.',
          keyPoints: [
            '**Procesamiento en paralelo**: Múltiples nodos calculan transferencias matemáticas de manera simultánea en cada capa.',
            '**Autoorganización**: Los parámetros internos (pesos $w$ y sesgos $b$) evolucionan automáticamente sin intervención manual del código.',
            '**Aprendizaje adaptativo**: Capacidad intrínseca de generalizar patrones a partir de datos no vistos previamente.',
          ],
          teacherNotes: 'Pregunte a la clase: ¿Por qué creen que el procesamiento paralelo masivo de las GPU modernas es el motor principal del auge actual de la Inteligencia Artificial?',
        },

        // ── Diapositiva 6: Inicios Históricos — McCulloch-Pitts y Hebb ──
        {
          type: 'concept',
          category: 'Antecedentes Históricos (1943 - 1949)',
          title: 'El Nacimiento del Modelo Neuronal y la Regla de Hebb',
          mainIdea: 'Los primeros cimientos computacionales modelaron la **neurona binaria individual** y definieron la primera regla biológica de **fortalecimiento sináptico**.',
          definition: 'Warren McCulloch y Walter Pitts (1943/1947) crearon el primer modelo matemático de una neurona biológica; Donald Hebb (1949/1961) enunció el principio de aprendizaje asociativo.',
          keyPoints: [
            '**McCulloch y Pitts**: Modelaron una neurona artificial elemental (entradas binarias ponderadas con umbral de activación), sin llegar a construir redes multicapa.',
            '**Aprendizaje Hebbiano (Donald Hebb)**: Postula que el peso o intensidad de una conexión sináptica se incrementa siempre que el input y el output de una neurona se activan simultáneamente.',
            '**Base del aprendizaje no supervisado**: Hebb fundamentó cómo las conexiones se refuerzan por correlación de actividad temporal.',
          ],
          teacherNotes: 'Resuma la famosa máxima hebbiana: "Neurons that fire together, wire together" (Neuronas que se disparan juntas, refuerzan su conexión).',
        },

        // ── Diapositiva 7: Perceptrón de Rosenblatt y Aprendizaje Supervisado ──
        {
          type: 'concept',
          category: 'Evolución y Supervisión (1958 - 1960s)',
          title: 'El Perceptrón de Rosenblatt y el Modelo ADALINE',
          mainIdea: 'Frank Rosenblatt introdujo el **aprendizaje supervisado** al contrastar la salida real de la red con una señal deseada, ajustando los pesos según el **error de salida**.',
          definition: 'El Perceptrón calcula $y = f(\\sum w_i x_i - \\theta)$ y actualiza sus pesos en sucesivas iteraciones hasta minimizar la diferencia entre el output obtenido y el target deseado.',
          keyPoints: [
            '**Cálculo del error**: $Error = Salida\\ Deseada - Salida\\ Obtenida$. Los pesos se corrigen proporcionalmente a esta desviación.',
            '**Convergencia iterativa**: Al presentar patrones repetidamente, los pesos convergen hacia una frontera de decisión que clasifica las entradas.',
            '**ADALINE y LMS (Widrow y Hoff)**: Aportaron el algoritmo de mínimos cuadrados medios (*Least Mean Square*) para optimizar adaptativamente neuronas lineales.',
          ],
          teacherNotes: 'Explique con claridad la diferencia: en el modelo de Hebb no hay señal deseada (no supervisado); en Rosenblatt y Widrow-Hoff existe un profesor/etiqueta que guía la corrección del error (supervisado).',
        },

        // ── Diapositiva 8: Pregunta oral — Ajuste de Pesos y Convergencia ──
        {
          type: 'question',
          question: '¿Por qué el cálculo iterativo del error ($Target - Output$) fue un avance revolucionario para el Perceptrón?',
          context: 'Consideren qué permite hacer el error: ¿cómo sabe la neurona hacia dónde mover el valor de sus pesos sinápticos?',
          options: [
            'Porque permite a la red autoevaluar su precisión y corregir gradualmente la intensidad de sus conexiones hasta producir la respuesta correcta.',
            'Porque elimina la necesidad de contar con datos de entrada para realizar clasificaciones.',
            'Porque transforma instantáneamente la neurona artificial en un circuito de almacenamiento de disco duro.',
          ],
          answer: 'Porque permite a la red autoevaluar su precisión y corregir gradualmente la intensidad de sus conexiones hasta producir la respuesta correcta.',
          explanation: 'La retroalimentación del error otorga dirección matemática a la optimización: indica si el peso sináptico debe incrementarse o decrementarse para que el sistema aprenda el patrón.',
          teacherNotes: 'Pida a un estudiante que explique con sus propias palabras cómo un tirador al blanco ajusta su puntería tras cada intento fallido (analogía del error iterativo).',
        },

        // ── Diapositiva 9: El Problema de la Separabilidad Lineal (XOR) ──
        {
          type: 'concept',
          category: 'La Gran Crisis (1969)',
          title: 'La Crítica de Minsky y Papert: El Límite de la Separabilidad Lineal',
          mainIdea: 'En 1969, Marvin Minsky y Seymour Papert demostraron que los perceptrones simples de una sola capa son meros **discriminadores lineales** y no pueden resolver funciones lógicas no separables como **XOR**.',
          definition: 'Un perceptrón simple solo puede trazar una línea recta (o hiperplano) para separar dos clases. Como la compuerta XOR requiere dos líneas de corte, el perceptrón monocapa fracasa.',
          keyPoints: [
            '**Compuerta XOR (Disyunción Exclusiva)**: Da salida 1 solo cuando las entradas son distintas $(0,1)$ y $(1,0)$, pero salida 0 cuando son iguales $(0,0)$ y $(1,1)$.',
            '**Imposibilidad geométrica**: Es matemáticamente imposible separar los ceros de los unos en XOR con una sola línea recta en un plano 2D.',
            '**El Invierno de la IA (parón de 20 años)**: Minsky y Papert alegaron que no existían algoritmos viables para entrenar redes multicapa, congelando los fondos de investigación hasta los años 80.',
          ],
          teacherNotes: 'Dibuje mentalmente o en pizarra el gráfico 2D de XOR con puntos (0,0)=0, (0,1)=1, (1,0)=1, (1,1)=0. Muestre que ninguna línea recta puede aislar los 1 de los 0.',
        },

        // ── Diapositiva 10: Esquema Comparativo de Separabilidad ──
        {
          type: 'diagram',
          category: 'Análisis Geométrico',
          title: 'Separabilidad Lineal: Compuertas AND / OR vs. Compuerta XOR',
          subtitle: 'Demostración visual del por qué un perceptrón simple colapsa ante funciones no lineales:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Linealmente Separables (AND / OR)',
              title: 'Solubles con Perceptrón Monocapa',
              desc: '• **Comportamiento AND/OR**: Los patrones de salida 1 y 0 se pueden dividir con **una única recta de decisión** ($w_1 x_1 + w_2 x_2 = \\theta$).<br>• **Capacidad**: El perceptrón simple de Rosenblatt encuentra los pesos adecuados rápidamente y converge sin errores.',
            },
            {
              badge: 'No Linealmente Separable (XOR)',
              title: 'Insoluble con Perceptrón Monocapa',
              desc: '• **Comportamiento XOR**: Los puntos $(0,1)$ y $(1,0)$ están cruzados en diagonal frente a $(0,0)$ y $(1,1)$.<br>• **Limitación**: Requiere **mínimo dos fronteras de decisión**, demandando capas ocultas intermedias (Perceptrón Multicapa).',
            },
          ],
          teacherNotes: 'Destaque que este límite matemático no significaba que las redes fueran inútiles, sino que se necesitaban estructuras de varias capas y algoritmos matemáticos más avanzados.',
        },

        // ── Diapositiva 11: Resurgimiento — MLP, Sigmoides y Retropropagación ──
        {
          type: 'concept',
          category: 'El Gran Renacimiento',
          title: 'El Perceptrón Multicapa (MLP) y la Retropropagación',
          mainIdea: 'El desarrollo del algoritmo de **Retropropagación (Backpropagation)** junto al uso de **funciones de activación sigmoideas** convirtió a las redes neuronales en **aproximadores universales**.',
          definition: 'Desarrollado independientemente por Werbos, Parker y el grupo PDP (Rumelhart, Hinton y Williams), Backpropagation calcula el gradiente del error hacia atrás en la red para ajustar todas las capas ocultas.',
          keyPoints: [
            '**Perceptrón Multicapa (MLP)**: Introduce capas ocultas intermedias entre la entrada y la salida, permitiendo componer múltiples fronteras no lineales.',
            '**Funciones de activación continuas (Sigmoideas)**: Reemplazan la función escalón rígida por una curva derivable $\\sigma(z) = \\frac{1}{1 + e^{-z}}$, permitiendo aplicar la regla de la cadena del cálculo.',
            '**Superación de la crisis**: El algoritmo resolvió el problema del XOR y abrió el camino a las arquitecturas de aprendizaje profundo modernas.',
          ],
          teacherNotes: 'Enfatice la elegancia del cálculo diferencial: la función sigmoidea es suave y diferenciable, lo que permite propagar el gradiente del error desde la salida hasta la primera capa oculta.',
        },

        // ── Diapositiva 12: Matriz Histórico-Técnica de Modelos ──
        {
          type: 'diagram',
          category: 'Síntesis Evolutiva',
          title: 'Línea de Evolución de los Modelos Neuronales',
          subtitle: 'Cuadro comparativo de las etapas clave en la historia del conexionismo:',
          diagramType: 'table',
          tableHeaders: ['Modelo / Hito', 'Autores Clave', 'Tipo de Aprendizaje', 'Capacidades / Aporte Principal', 'Limitación Principal'],
          tableRows: [
            ['Neurona McCulloch-Pitts (1943)', 'McCulloch & Pitts', 'Sin entrenamiento (fijo)', 'Primer modelo computacional de neurona biológica', 'Pesos fijos, sin capacidad de red'],
            ['Regla Hebbiana (1949/1961)', 'Donald Hebb', 'No Supervisado (Asociativo)', 'Fortalecimiento de sinapsis por coactivación simultánea', 'Sin noción de objetivo o corrección de error'],
            ['Perceptrón Simple (1958)', 'Frank Rosenblatt', 'Supervisado (Regla de Error)', 'Ajuste dinámico de pesos para clasificación binaria', 'Incapaz de resolver funciones no lineales (XOR)'],
            ['ADALINE / LMS (1960)', 'Widrow & Hoff', 'Supervisado (Gradiente lineal)', 'Minimización de error cuadrático medio', 'Limitado a transformaciones lineales'],
            ['Perceptrón Multicapa + Backprop', 'Werbos, Rumelhart, Hinton, Parker', 'Supervisado (Retropropagación)', 'Aproximador universal; resuelve XOR y clasificaciones complejas', 'Mayor costo de cómputo y necesidad de grandes datos'],
          ],
          teacherNotes: 'Guíe una lectura horizontal y vertical de la tabla para que los estudiantes tengan una visión panorámica clara antes de pasar a la actividad práctica individual.',
        },

        // ── Diapositiva 13: Actividad Práctica Individual (5-10 min) ──
        {
          type: 'activity',
          title: 'Actividad Individual: Análisis de Separabilidad y XOR',
          activityTitle: 'Caso de Análisis Técnico — Diagnóstico de Separabilidad Lineal y Arquitectura de Red',
          icon: '🧠',
          instructions: 'Analiza el siguiente escenario de clasificación lógica y responde los 4 puntos en tu cuaderno o documento de trabajo. Tiempo estimado: 5 a 10 minutos. Trabajo estrictamente individual.',
          steps: [
            '**Paso 1 (Identificación de la Limitación):** Explica por qué una neurona artificial simple con función escalón (Perceptrón de Rosenblatt) puede clasificar perfectamente las compuertas lógicas AND y OR, pero falla categóricamente al intentar clasificar la compuerta XOR.',
            '**Paso 2 (Análisis Geométrico):** Representa mentalmente o en un boceto un plano cartesiano 2D con los 4 puntos de entrada $(0,0)$, $(0,1)$, $(1,0)$ y $(1,1)$. Indica cuáles puntos corresponden a salida 1 y cuáles a salida 0 en XOR, explicando por qué una sola recta divisoria no es suficiente.',
            '**Paso 3 (Solución Arquitectónica):** Describe qué elementos técnicos estructurales (tipo de perceptrón, capas intermedias y función de activación) son indispensables para superar la limitación del XOR.',
            '**Paso 4 (Mecanismo de Aprendizaje):** Nombra y explica en dos líneas cómo actúa el algoritmo de **Retropropagación (Backpropagation)** para calibrar los pesos de las conexiones ocultas en la red.',
          ],
          tip: 'Tiempo estimado: 5 a 10 minutos. Trabajo individual. Asegúrate de justificar utilizando los términos técnicos adecuados: separabilidad lineal, hiperplano de decisión, capa oculta, función sigmoidea y propagación del gradiente de error.',
          teacherNotes: 'Asigne entre 5 y 10 minutos para que los estudiantes elaboren sus respuestas individualmente. Al concluir, seleccione a 2 estudiantes para que expongan sus respuestas y valide la comprensión técnica del problema de separabilidad y backpropagation.',
        },

        // ── Diapositiva 14: Resumen y Cierre ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Puntos clave a recordar sobre Conexiones y Redes Neuronales:',
          points: [
            'El **paradigma conexionista** sustituye la manipulación secuencial de símbolos por el procesamiento masivo en paralelo inspirado en redes neuronales biológicas.',
            'Las redes artificiales poseen **tolerancia a fallos, autoorganización y aprendizaje adaptativo** mediante la calibración iterativa de pesos sinápticos.',
            'El trabajo de **McCulloch-Pitts** formalizó la neurona computacional y **Donald Hebb** definió la base del aprendizaje asociativo.',
            'El **Perceptrón de Rosenblatt** y el modelo **ADALINE** introdujeron el aprendizaje supervisado basado en la minimización iterativa del error.',
            'La crítica de **Minsky y Papert** expuso la incapacidad de los perceptrones monocapa para resolver problemas no lineales como **XOR**.',
            'El **Perceptrón Multicapa (MLP)**, las **funciones de activación sigmoideas** y el algoritmo de **Retropropagación (Backpropagation)** superaron la crisis, convirtiendo a las redes en aproximadores universales.',
          ],
          teacherNotes: 'Cierre la sesión reforzando que el conexionismo y el algoritmo de backpropagation constituyen la base matemática sobre la que funcionan los modelos actuales de Deep Learning e Inteligencia Artificial generativa.',
        },
      ],
    },
  ],
}
