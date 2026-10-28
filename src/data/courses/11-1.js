/**
 * Contenido educativo — Grado 11.º Grupo 1
 * Tema: Aprendizaje en el programa conexionista
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
  title: 'Aprendizaje en el programa conexionista',
  description: 'Fundamentos del aprendizaje en redes neuronales: calibración de pesos sinápticos, minimización del error, categorización y las tres grandes familias de algoritmos: supervisado, no supervisado y por refuerzo.',
  lessons: [
    {
      id: 'aprendizaje-conexionista',
      title: 'Aprendizaje en el Programa Conexionista',
      description: 'Presentación interactiva: qué significa aprender en una red neuronal, ajuste de pesos sinápticos, minimización del error y familias de algoritmos.',
      slides: [
        // ── Diapositiva 1: Portada y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 11.º — Grupo 1',
          title: 'Aprendizaje en el Programa Conexionista',
          subtitle: '¿Qué significa aprender en una red neuronal? Ajuste de pesos, minimización del error y familias de aprendizaje',
          objectives: [
            'Comprender el concepto conexionista de aprendizaje: la modificación de la intensidad de los pesos sinápticos.',
            'Analizar el papel del error y del supervisor en el aprendizaje supervisado (Regla Delta, ADALINE, Backpropagation y MLP).',
            'Identificar el mecanismo de categorización y autoorganización en el aprendizaje no supervisado (ART, Mapas SOFM y neuronas vencedoras).',
            'Explicar la dinámica de ensayo-error del aprendizaje por refuerzo y la toma de decisiones con la Tabla Q (Q-Learning).',
            'Determinar el tipo de aprendizaje y algoritmo óptimo para resolver problemas computacionales reales.',
          ],
          teacherNotes: 'Presente la sesión conectando con los saberes previos: ya conocemos las neuronas y capas; hoy descubriremos el gran enigma: ¿cómo hace una red artificial para aprender a realizar una tarea?',
        },

        // ── Diapositiva 2: El Enigma del Aprendizaje (Psicología vs. Conexionismo) ──
        {
          type: 'concept',
          category: 'Introducción al Problema',
          title: '¿Qué Significa Realmente "Aprender"?',
          mainIdea: 'La psicología describe conductas aprendidas (como el condicionamiento o la imitación); el conexionismo busca explicar el **mecanismo físico y matemático** que ocurre en las conexiones neuronales.',
          definition: 'El **conexionismo** es el enfoque cognitivo y computacional que modela los procesos mentales mediante redes de unidades interconectadas (neuronas) que procesan información numérica en paralelo.',
          analogy: 'Aprender a tocar un instrumento no es guardar datos en un casillero: es ejercitar tu sistema nervioso para que ciertas rutas sinápticas se activen con mayor fluidez y fuerza ante un estímulo.',
          keyPoints: [
            '**La pregunta de la Psicología**: Distingue aprendizajes por condicionamiento o vicarios, pero deja abierta la duda: ¿cómo se producen físicamente en el ser humano?',
            '**La respuesta conexionista**: El aprendizaje no está guardado en una memoria rígida, sino distribuido en la fuerza de las conexiones.',
            '**Inspiración bio-computacional**: Comprender el cerebro biológico nos permite programar redes artificiales capaces de aprender por sí mismas.',
          ],
          teacherNotes: 'Abra con la pregunta filosófica y científica: ¿dónde está guardado lo que aprendiste hoy? Guíe la respuesta hacia las conexiones entre neuronas.',
        },

        // ── Diapositiva 3: Flujo de Señales y Principio de Aprendizaje ──
        {
          type: 'diagram',
          category: 'Principio Fundamental',
          title: 'El Flujo de Señales en una Red Neuronal',
          subtitle: 'Trayecto canónico de la información y la necesidad del entrenamiento:',
          diagramType: 'flow',
          nodes: [
            {
              icon: '📥',
              label: 'Inputs',
              desc: 'Patrón de señales recibido en la capa de entrada.',
            },
            {
              icon: '⚖️',
              label: 'Pesos Sinápticos',
              desc: 'La señal se pondera según la intensidad de cada enlace.',
            },
            {
              icon: '⚙️',
              label: 'Capas Internas',
              desc: 'Procesamiento sucesivo a través de la arquitectura.',
            },
            {
              icon: '📤',
              label: 'Outputs',
              desc: 'Generación del patrón de señales de salida.',
            },
            {
              icon: '🎯',
              label: 'Calibración',
              desc: 'Ajuste de pesos si la salida no es la deseada.',
            },
          ],
          teacherNotes: 'Recorra el diagrama: la señal entra, los pesos la modulan, se procesa y sale. Si la salida no es la que queremos, ¿qué hacemos? ¡Modificar los pesos!',
        },

        // ── Diapositiva 4: Aprender es Modificar Pesos Sinápticos ──
        {
          type: 'concept',
          category: 'Mecanismo Central',
          title: 'Aprender es Modificar Pesos Sinápticos',
          mainIdea: 'Una red neuronal aprende cuando encuentra la **combinación de intensidades de conexión (pesos sinápticos)** que produce el resultado deseado ante los patrones de entrada.',
          definition: 'Un **peso sináptico** es un valor numérico que determina cuánto influye la activación de una neurona sobre la siguiente. Aprender consiste en ajustar metódicamente estos valores.',
          analogy: 'Como afinar una guitarra o calibrar una mesa de mezclas: vas girando las perillas de cada cuerda (pesos) hasta que la nota emitida coincida exactamente con el tono perfecto.',
          keyPoints: [
            '**Estado inicial no calibrado**: Con pesos aleatorios, las salidas de la red son erróneas y caóticas.',
            '**El entrenamiento**: Proceso iterativo de cálculo y ajuste de pesos para corregir las salidas.',
            '**Conexión biológica**: De forma análoga, el cerebro humano aprende modificando la eficacia de la transmisión sináptica entre neuronas biológicas.',
          ],
          teacherNotes: 'Asegúrese de que comprendan la frase fundamental: en una red neuronal no hay código if/else para aprender; aprender es exclusivamente modificar los números de los pesos sinápticos.',
        },

        // ── Diapositiva 5: Caso Práctico — La Conjunción AND ──
        {
          type: 'example',
          category: 'Ejemplo Práctico',
          title: 'Caso Concreto: Aprendiendo la Conjunción (AND)',
          icon: '🔀',
          description: 'Queremos entrenar una red simple para evaluar la operación lógica **AND**: ante las entradas (0,0), (0,1), (1,0) debe dar **0**, y únicamente ante **(1,1)** debe responder **1**.',
          analogy: 'Si la red recién creada tiene pesos al azar y ante (1,1) arroja 0, está cometiendo un error evidente. El entrenamiento modifica sus pesos hasta que las cuatro respuestas sean exactas.',
          features: [
            'Tabla deseada: (0,0) → 0 | (0,1) → 0 | (1,0) → 0 | (1,1) → 1.',
            'Al inicio, los pesos sinápticos arbitrarios producen salidas no deseadas.',
            'Se modifican los pesos progresivamente tras evaluar cada combinación de entrada.',
            'Al lograr la combinación exacta de pesos que satisface la tabla, la red "ha aprendido".',
          ],
          teacherNotes: 'Utilice la tabla de verdad de la conjunción AND como el ejemplo canónico más transparente de cómo una red pasa del error al aprendizaje mediante el ajuste de pesos.',
        },

        // ── Diapositiva 6: Más Allá de la Respuesta Conocida — Categorizar ──
        {
          type: 'concept',
          category: 'Procesamiento Cognitivo',
          title: 'Más Allá de la Respuesta Conocida: Categorizar',
          mainIdea: 'No siempre tenemos una respuesta deseada fija. En la realidad aprendemos a **categorizar**: subsumir objetos diversos bajo un mismo concepto reconociendo similitudes.',
          definition: '**Categorizar** es la capacidad cognitiva y computacional de agrupar patrones de entrada heterogéneos en clases comunes basadas en sus regularidades intrínsecas.',
          analogy: 'Vemos a diario cientos de coches: compactos, camionetas, taxis, deportivos de marcas y colores distintos. A pesar de su enorme diversidad, nuestro cerebro siempre concluye: *"son coches"*.',
          keyPoints: [
            '**Diversidad del mundo real**: Dos entradas sensoriales nunca son exactamente idénticas.',
            '**Extracción de rasgos comunes**: El cerebro no compara con una lista rígida; identifica regularidades compartidas.',
            '**Dos necesidades distintas**: A veces sabemos la respuesta esperada y a veces debemos descubrirla agrupando datos. Esto da lugar a diferentes clases de aprendizaje.',
          ],
          teacherNotes: 'Muestre cómo el ser humano no memoriza cada auto del planeta; extrae el concepto "auto". Este es el puente hacia el aprendizaje no supervisado.',
        },

        // ── Diapositiva 7: Las Tres Grandes Familias del Aprendizaje ──
        {
          type: 'diagram',
          category: 'Taxonomía General',
          title: 'Las Tres Grandes Familias del Aprendizaje',
          subtitle: 'Clasificación canónica de los paradigmas de entrenamiento en redes neuronales:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Supervisado',
              title: 'Aprendizaje Supervisado',
              desc: 'Se **conoce la respuesta deseada**. Un supervisor compara la salida real con la esperada y calcula el error para corregir los pesos.',
              metrics: {
                'Respuesta meta': 'Conocida (etiquetas)',
                'Mecanismo': 'Minimización del error',
                'Modelos': 'Regla Delta / Backprop',
              },
            },
            {
              badge: 'No Supervisado',
              title: 'Aprendizaje No Supervisado',
              desc: 'Se **desconoce la respuesta deseada**. La red agrupa y categoriza por sí misma los datos de entrada según sus similitudes y patrones comunes.',
              metrics: {
                'Respuesta meta': 'Desconocida',
                'Mecanismo': 'Similitud / Autoorganización',
                'Modelos': 'ART / Mapas SOFM (Kohonen)',
              },
            },
            {
              badge: 'Por Refuerzo',
              title: 'Aprendizaje por Refuerzo',
              desc: 'Aprende mediante **ensayo y error**. Las decisiones que acercan al objetivo incrementan sus pesos; las que alejan reciben penalización.',
              metrics: {
                'Respuesta meta': 'Premio / Castigo evaluativo',
                'Mecanismo': 'Refuerzo de tendencias',
                'Modelos': 'Q-Learning / Tabla Q',
              },
            },
          ],
          teacherNotes: 'Pase por las tres columnas y explique la diferencia clave: ¿hay un profesor corrigiendo cada dato? (Supervisado), ¿el alumno agrupa solo? (No supervisado), o ¿aprende explorando y recibiendo premios/castigos? (Refuerzo).',
        },

        // ── Diapositiva 8: Aprendizaje Supervisado — Error y Supervisor ──
        {
          type: 'concept',
          category: 'Aprendizaje Supervisado',
          title: 'El Error y el Papel del Supervisor',
          mainIdea: 'En el aprendizaje supervisado, el motor del cambio es el **error**: la discrepancia numérica entre la respuesta que emitió la red y la respuesta que debió emitir.',
          definition: '**Error = Respuesta Deseada − Respuesta Efectiva**. Los algoritmos buscan minimizar este error sucesivamente hasta hacerlo prácticamente nulo.',
          analogy: 'Un entrenador de tiro al blanco: disparas (salida efectiva), el entrenador mira la diana (respuesta deseada) y te dice exactamente cuánto fallaste (error). Corriges tu postura (pesos) en el siguiente tiro.',
          keyPoints: [
            '**El "Supervisor"**: Es el conjunto de datos de entrenamiento que contiene la respuesta correcta para cada entrada.',
            '**Minimización iterativa**: Tras cada intento fallido, los pesos se ajustan en la dirección matemática que reduce el error.',
            '**Criterio de éxito**: Cuando el error medio es tan pequeño que se considera aceptable, la red se declara formalmente **entrenada**.',
          ],
          teacherNotes: 'Enfatice la fórmula sencilla: Error = Deseada - Efectiva. Todo el aprendizaje supervisado consiste en reducir esa resta a cero.',
        },

        // ── Diapositiva 9: Regla Delta (Widrow-Hoff / LMS) y ADALINE ──
        {
          type: 'concept',
          category: 'Algoritmos Supervisados',
          title: 'Regla Delta (Widrow-Hoff / LMS) y ADALINE',
          mainIdea: 'La Regla Delta fue el primer algoritmo matemático formal para ajustar pesos en una neurona lineal minimizando el promedio de errores al cuadrado.',
          definition: 'Desarrollada por Bernard Widrow y Ted Hoff (1960), se conoce también como **Regla LMS** (*Least Mean Squares* o Mínimos Cuadrados Medios). Modifica los pesos proporcionalmente al error multiplicado por la entrada.',
          analogy: 'Ajustar la temperatura de una ducha: si el agua sale demasiado fría respecto a lo deseado (error grande), giras la manivela caliente con un movimiento más amplio; si está casi tibia, solo haces un microajuste.',
          keyPoints: [
            '**La red ADALINE**: Acrónimo de *ADAptive LINEar Neuron* (Neurona Lineal Adaptativa).',
            '**Neurona individual**: Emplea una única unidad de cálculo con una función de transferencia lineal.',
            '**Ajuste proporcional**: Si el error es grande, la corrección es grande; si el error es cero, los pesos no se tocan.',
          ],
          teacherNotes: 'Explique que ADALINE y la regla Delta sentaron las bases del procesamiento adaptativo de señales y filtros telefónicos. Es el punto de partida del aprendizaje supervisado.',
        },

        // ── Diapositiva 10: Regla Delta Generalizada y Backpropagation ──
        {
          type: 'concept',
          category: 'Algoritmos Supervisados',
          title: 'Regla Delta Generalizada y Backpropagation',
          mainIdea: 'Para redes con capas ocultas, la **retropropagación (Backpropagation)** permite repartir matemáticamente la responsabilidad del error hacia atrás, capa por capa.',
          definition: 'Desarrollada por David Rumelhart y James McClelland (1986), la **Regla Delta Generalizada** calcula cómo debe cambiar cada peso sináptico en el **Perceptrón Multicapa (MLP)**.',
          analogy: 'En una fábrica, si el producto final sale defectuoso, no solo se le llama la atención al empaquetador final: el supervisor investiga hacia atrás la línea de montaje (capas ocultas) y corrige a cada operario.',
          keyPoints: [
            '**El Perceptrón Multicapa (MLP)**: Red que incorpora capas intermedias u ocultas, permitiendo resolver problemas no lineales complejos.',
            '**Propagación hacia adelante**: La entrada viaja hacia la salida y se calcula el error final.',
            '**Retropropagación hacia atrás**: El error viaja en sentido inverso actualizando los pesos de las capas ocultas y de entrada.',
          ],
          teacherNotes: 'Destaque la hazaña histórica de Rumelhart y McClelland: resolvieron el problema de cómo entrenar capas ocultas, lo que revivió el campo de las redes neuronales en los años 80.',
        },

        // ── Diapositiva 11: Aprendizaje No Supervisado — Agrupación Autónoma ──
        {
          type: 'concept',
          category: 'Aprendizaje No Supervisado',
          title: 'Aprendizaje No Supervisado: Agrupación Autónoma',
          mainIdea: 'Sin un maestro ni respuestas correctas, la red explora las señales de entrada y **descubre por sí misma** cómo organizarlas en categorías coherentes.',
          definition: 'Modalidad de entrenamiento donde los pesos sinápticos se ajustan de manera que entradas con propiedades matemáticas o estadísticas similares activen los mismos grupos neuronales.',
          analogy: 'Le das a un arqueólogo miles de fragmentos de cerámica antigua sin catálogo previo. Por su color, textura y grosor, el arqueólogo empieza a agruparlos en mesas separadas: categoriza por similitud.',
          keyPoints: [
            '**Sin etiquetas ni supervisor**: La red solo recibe las entradas brutas del entorno.',
            '**Autoorganización**: Los pesos convergen gradualmente hacia los centros de atracción de cada grupo de datos.',
            '**Aplicación esencial**: Descubrimiento de perfiles ocultos, compresión de señales, reducción de dimensiones y detección de anomalías.',
          ],
          teacherNotes: 'Enfatice el contraste: aquí no hay nadie diciendo "esto es correcto" o "esto es un error". La red descubre regularidades estadísticas espontáneamente.',
        },

        // ── Diapositiva 12: ART, Mapas SOFM (Kohonen) y Neuronas Vencedoras ──
        {
          type: 'concept',
          category: 'Modelos No Supervisados',
          title: 'ART, Mapas SOFM (Kohonen) y Neuronas Vencedoras',
          mainIdea: 'En los modelos no supervisados, las neuronas compiten entre sí ante cada entrada: la neurona más afín resulta **vencedora** y afina sus pesos para representar esa categoría.',
          definition: 'Modelos emblemáticos: **ART** (*Adaptive Resonance Theory*), redes de **Hopfield** y los **Mapas Autoorganizativos SOFM** (*Self-Organized Feature Maps*) de Teuvo Kohonen.',
          analogy: 'Subasta de tareas: ante una tarea de pintura, el pintor del grupo da un paso al frente y asume el trabajo (neurona vencedora); los demás guardan silencio para otras labores.',
          keyPoints: [
            '**Aprendizaje competitivo**: Ante una entrada, se calcula qué neurona tiene pesos más parecidos al patrón recibido.',
            '**Neurona vencedora**: La neurona ganadora (*winner-takes-all*) actualiza sus pesos para parecerse aún más a ese tipo de estímulos.',
            '**Mapas topológicos (SOFM)**: Organizan datos complejos de muchas variables en una cuadrícula visual ordenada donde lo similar queda junto.',
          ],
          teacherNotes: 'Aclare el concepto de "neurona vencedora": no todas aprenden lo mismo; la que mejor responde a un estímulo se especializa en él.',
        },

        // ── Diapositiva 13: Aprendizaje por Refuerzo — Ensayo y Error ──
        {
          type: 'concept',
          category: 'Aprendizaje por Refuerzo',
          title: 'Aprendizaje por Refuerzo: Ensayo y Error',
          mainIdea: 'La red interactúa con un entorno sin respuestas paso a paso: **si su decisión la acerca a la meta, los pesos se incrementan; si la aleja, los pesos disminuyen**.',
          definition: 'Paradigma de aprendizaje donde el sistema recibe una señal escalar de evaluación (premio o castigo). Los pesos sinápticos refuerzan las tendencias exitosas y penalizan las perjudiciales.',
          analogy: 'Enseñar a un perro a traer la pelota: no le das una fórmula matemática; cuando la trae le das un premio (refuerzo positivo). Si se escapa, no recibe premio. El animal aprende por ensayo y recompensa.',
          keyPoints: [
            '**Ciclo interactivo**: Estado actual → Acción tomada → Resultado obtenido → Señal de refuerzo.',
            '**Premio (Recompensa)**: Incrementa los pesos sinápticos asociados a esa decisión, aumentando la probabilidad de repetirla.',
            '**Castigo (Penalización)**: Reduce o atenúa los pesos sinápticos de esa trayectoria para evitar volver a cometer el error.',
          ],
          teacherNotes: 'Explique que este tipo de aprendizaje es el más cercano al comportamiento animal: no hay maestro diciendo qué hacer a cada milisegundo, sino consecuencias a los actos.',
        },

        // ── Diapositiva 14: Q-Learning y la Tabla Q (Sutton y Barto) ──
        {
          type: 'concept',
          category: 'Algoritmos de Refuerzo',
          title: 'Q-Learning y la Tabla Q (Sutton y Barto)',
          mainIdea: 'En **Q-Learning**, el agente consulta y actualiza una **Tabla Q** que almacena el valor o peso sináptico de cada decisión posible ante cada estado del entorno.',
          definition: 'Algoritmo de aprendizaje por refuerzo formulado por Richard Sutton y Andrew Barto. Permite a una máquina aprender de forma autónoma qué acción tomar para maximizar su beneficio a largo plazo.',
          analogy: 'Un explorador en una cueva laberíntica: en su cuaderno (Tabla Q) anota cada bifurcación. Si un camino lo lleva a un pozo, le pone una puntuación muy baja; si lo acerca a la salida, le asigna un puntaje alto.',
          keyPoints: [
            '**La Tabla Q**: Matriz que cruza todos los posibles estados del entorno con las acciones que la red puede ejecutar.',
            '**Pesos de decisión**: Cada celda almacena un valor numérico (peso sináptico Q) que cuantifica la conveniencia de esa opción.',
            '**Actualización por experiencia**: Cada vez que la red toma una decisión y observa la recompensa, reajusta el valor Q correspondiente.',
            '**Autonomía total**: El sistema explora el entorno y aprende la estrategia óptima sin intervención humana.',
          ],
          teacherNotes: 'Presente a Sutton y Barto como los padres del aprendizaje por refuerzo contemporáneo y la Tabla Q como la brújula de pesos que guía al agente autónomo.',
        },

        // ── Diapositiva 15: Cuadro Comparativo de los Tres Paradigmas ──
        {
          type: 'diagram',
          category: 'Cuadro Comparativo',
          title: 'Las Tres Rutas del Aprendizaje Conexionista',
          subtitle: 'Comparación técnica exhaustiva de los tres paradigmas de entrenamiento:',
          diagramType: 'table',
          tableHeaders: ['Criterio', 'Aprendizaje Supervisado', 'Aprendizaje No Supervisado', 'Aprendizaje por Refuerzo'],
          tableRows: [
            [
              'Respuesta esperada',
              'Conocida de antemano (Pares entrada-objetivo)',
              'Desconocida (Solo datos brutos de entrada)',
              'Evaluativa (Señales de premio o penalización)',
            ],
            [
              'Mecanismo de ajuste',
              'Minimización sucesiva del error',
              'Competencia por similitud (Neuronas vencedoras)',
              'Premio incrementa pesos; castigo los disminuye',
            ],
            [
              'Algoritmos y modelos clave',
              'Regla Delta / LMS (ADALINE) y Backpropagation (MLP)',
              'ART, redes de Hopfield y Mapas SOFM (Kohonen)',
              'Q-Learning con Tabla Q (Sutton y Barto)',
            ],
            [
              'Objetivo principal',
              'Reproducir con exactitud una función o clasificación',
              'Categorizar y descubrir regularidades intrínsecas',
              'Aprender una política de acción óptima y autónoma',
            ],
            [
              'Ejemplo informático',
              'Compuerta AND, lectura de caracteres, diagnóstico',
              'Segmentación de clientes, agrupamiento de coches',
              'Control de robots móviles, videojuegos, navegación',
            ],
          ],
          teacherNotes: 'Utilice esta diapositiva como el resumen comparativo definitivo. Invite a los estudiantes a contrastar las columnas antes de iniciar la actividad individual.',
        },

        // ── Diapositiva 16: Actividad Individual de Aplicación (5-10 min) ──
        {
          type: 'activity',
          title: 'Actividad Individual: Paradigmas de Aprendizaje Conexionista',
          activityTitle: 'Diagnóstico y Selección de Estrategias de Entrenamiento',
          icon: '🧠',
          instructions: 'Lee con atención los 4 problemas computacionales descritos a continuación. En tu cuaderno o documento de trabajo, responde de forma concreta para cada uno: 1) Qué clase de aprendizaje aplicarías, 2) Qué modelo o algoritmo emplearías y 3) Cómo se modifican los pesos sinápticos. Tiempo: 5 a 10 minutos. Trabajo estrictamente individual.',
          steps: [
            'Caso 1 (Lectura Óptica de Cheques): Un banco dispone de 50.000 imágenes de números manuscritos con su valor numérico real ya etiquetado. Identifica si es supervisado, no supervisado o por refuerzo, si usarías ADALINE o MLP con Backpropagation, y cómo se calcula el error.',
            'Caso 2 (Segmentación de Clientes E-Commerce): Una tienda digital posee historiales de millones de usuarios y desea agruparlos en categorías por similitud de compra sin etiquetas previas. Indica el tipo de aprendizaje, el modelo (SOFM de Kohonen) y el principio de neuronas vencedoras.',
            'Caso 3 (Dron en Circuito de Pruebas): Un dron aprende a volar en un túnel; si roza una pared recibe penalización y si avanza fluido recibe puntos. Identifica el tipo de aprendizaje, el algoritmo (Q-Learning y Tabla Q) y cómo cambian los pesos de decisión.',
            'Caso 4 (El Concepto Clave): Explica con tus propias palabras qué significa "aprender" para una red neuronal artificial y por qué se compara con la modificación de conexiones en el cerebro biológico.',
          ],
          tip: 'Tiempo: 5 a 10 minutos. Actividad individual. Sé directo y fundamenta tus respuestas con los conceptos vistos en clase: pesos sinápticos, supervisor, error, categorización, neuronas vencedoras, refuerzo y Tabla Q.',
          teacherNotes: 'Asigne 8 minutos de trabajo individual en silencio. Al concluir, pida a dos o tres estudiantes al azar que compartan sus respuestas de los casos 1, 2 y 3 para retroalimentar al grupo.',
        },

        // ── Diapositiva 17: Resumen y Cierre de la Lección ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Puntos clave a recordar sobre el Aprendizaje Conexionista:',
          points: [
            '**Qué es aprender**: Consiste en encontrar la combinación adecuada de **pesos sinápticos** (intensidad de conexiones) que permite a la red emitir el resultado correcto o agrupar datos fielmente.',
            '**Analogía biológica**: De forma idéntica a cómo el cerebro biológico aprende ajustando la eficacia de sus sinapsis neuronales, la red artificial calibra sus parámetros matemáticos.',
            '**Aprendizaje Supervisado**: Se conoce la respuesta deseada. El supervisor evalúa el **error** (Deseada − Real) y lo reduce progresivamente.',
            '**Regla Delta y Backpropagation**: Widrow y Hoff crearon la regla LMS para una única neurona lineal (**ADALINE**). Rumelhart y McClelland la generalizaron con **Backpropagation** para redes con capas ocultas (**MLP**).',
            '**Aprendizaje No Supervisado**: Se desconoce la respuesta. La red **categoriza** agrupando por similitud. Destacan **ART**, **Hopfield** y los **Mapas SOFM de Kohonen** mediante el principio de **neuronas vencedoras**.',
            '**Aprendizaje por Refuerzo**: Dinámica de ensayo y error. Acertar incrementa los pesos (recompensa); errar los disminuye (penalización). El algoritmo **Q-Learning** de Sutton y Barto utiliza la **Tabla Q** para tomar decisiones autónomas.',
          ],
          teacherNotes: 'Felicite al grupo por su atención y reflexión. Recuerde que estos tres pilares constituyen la base conceptual de todos los avances modernos en inteligencia artificial y machine learning.',
        },
      ],
    },
  ],
}
