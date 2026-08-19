/**
 * Contenido educativo — Grado 11.º Grupo 1
 * Tema: Topologías de Red (Redes Informáticas)
 *
 * Fuente: cursos/11/11-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel avanzado para 11.º grado.
 * Formato de clase:
 * - Sin preguntas finales de evaluación.
 * - Sin verdadero o falso.
 * - Sin quiz de cierre.
 * - Preguntas orales de discusión durante la explicación.
 * - UNA sola ACTIVIDAD práctica individual (5-10 min).
 */

export const course11_1 = {
  title: 'Topologías de Red',
  description: 'Presentación interactiva sobre la organización física y lógica de nodos y canales de transmisión en redes de comunicaciones.',
  lessons: [
    {
      id: 'topologias-red',
      title: 'Topologías de Red',
      description: 'Presentación académica guiada para la clase presencial de 11.º grado.',
      slides: [
        // ── Diapositiva 1: Título y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 11.º — Grupo 1',
          title: 'Topologías de Red',
          subtitle: 'Organización física y lógica de nodos y canales en redes de comunicaciones',
          objectives: [
            'Definir qué es una topología de red y diferenciar el nivel físico del nivel lógico.',
            'Analizar la arquitectura, ventajas y limitaciones de las topologías clásicas (Bus, Anillo, Estrella, Árbol, Malla, Mixta, Totalmente Conexa).',
            'Evaluar los criterios técnicos (costo, escalabilidad, redundancia, diagnóstico) para seleccionar la topología adecuada.',
            'Comprender la importancia del mapeo visual para la gestión eficaz de la red.',
          ],
          teacherNotes: '**Sugerencia de inicio:** Pregunte a los estudiantes cómo se imaginan que están conectados los computadores del colegio o de sus hogares. Introduzca la idea de que la disposición de los nodos determina el rendimiento y la resistencia a fallas de la red.',
        },

        // ── Diapositiva 2: Pregunta disparadora ──
        {
          type: 'question',
          question: 'Si fallara un cable principal en una red bancaria o industrial, ¿debería detenerse toda la operación?',
          context: 'Piensen en cómo la disposición de la red influye en la continuidad del servicio ante una avería de hardware...',
          options: [
            'Depende únicamente del modelo de computador, no de la estructura de la red',
            'No necesariamente, si la topología está diseñada con rutas alternativas y redundancia adecuada',
            'Sí, porque cualquier falla en un cable desconecta automáticamente a todos los dispositivos',
          ],
          answer: 'No necesariamente, si la topología está diseñada con rutas alternativas y redundancia adecuada.',
          explanation: 'La **topología de red** (física y lógica) determina la tolerancia a fallas, la presencia de rutas redundantes y la capacidad de mantener el flujo de información aun ante la falla de un componente.',
          teacherNotes: 'Genere una breve discusión oral (1-2 minutos). Conecte sus respuestas con la necesidad de planificar cuidadosamente la arquitectura y forma de interconexión.',
        },

        // ── Diapositiva 3: Concepto — ¿Qué es una Topología de Red? ──
        {
          type: 'concept',
          category: 'Concepto Fundamental',
          title: '¿Qué es una Topología de Red?',
          mainIdea: 'Es la forma en que se **organizan y disponen los elementos** (nodos y enlaces) de una red de comunicaciones para asegurar la transmisión correcta y segura de datos.',
          definition: 'Determina cómo se interconectan los dispositivos y cómo viaja la información entre ellos. Una estructura bien planificada evita cortes innecesarios y optimiza el flujo de datos.',
          keyPoints: [
            '**Nodos**: Dispositivos conectados (computadores, servidores, switches, routers, impresoras, cámaras IP, etc.).',
            '**Enlaces/Conectores**: Canales de transmisión físicos (cables, conectores) o inalámbricos (antenas, enlaces de radio).',
            '**Adaptabilidad**: La red debe adaptarse a la diversidad de dispositivos para cumplir requerimientos de velocidad y seguridad.',
          ],
          teacherNotes: 'Enfatice que un "nodo" puede ser cualquier dispositivo inteligente o de interconexión en la red, no solo una computadora de escritorio.',
        },

        // ── Diapositiva 4: Diagrama — Niveles de la Topología: Física vs. Lógica ──
        {
          type: 'diagram',
          category: 'Arquitectura de Red',
          title: 'Niveles de la Topología de Red',
          subtitle: 'La estructura de una red se representa en dos niveles fundamentales:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Nivel 01',
              title: 'Topología Física',
              desc: 'Se refiere a la disposición real del hardware: **cómo se conectan los dispositivos físicos** mediante cables, conectores, switches y antenas. Define la ubicación espacial de los componentes.',
            },
            {
              badge: 'Nivel 02',
              title: 'Topología Lógica',
              desc: 'Se refiere a la **forma en que fluyen los datos** a través de la red y cómo se transfieren las tramas de un nodo al siguiente, considerando la gestión de subredes e itinerarios lógicos.',
            },
          ],
          teacherNotes: 'Explique con un ejemplo: Físicamente una red puede estar conectada en forma de estrella a un switch, pero lógicamente comportarse como un bus de datos compartido.',
        },

        // ── Diapositiva 5: Topología de Bus ──
        {
          type: 'concept',
          category: 'Topologías Clásicas',
          title: 'Topología de Bus (Línea o Troncal)',
          mainIdea: 'Todos los dispositivos se conectan directamente a un **único canal troncal o bus central** sin otros vínculos entre nodos.',
          definition: 'Los datos fluyen a lo largo del cable a medida que viajan a su destino. Es fácil de instalar y requiere muy poco cableado.',
          keyPoints: [
            '**Ventajas**: Bajo costo de implementación, fácil extensión para agregar o quitar aparatos.',
            '**Desventajas**: Susceptible a colisiones de datos, congestión de tráfico y cuellos de botella.',
            '**Punto crítico de falla**: Si existe un problema o corte en el canal troncal, **todos los dispositivos quedan desconectados**.',
          ],
          teacherNotes: 'Mencione que fue muy popular en redes ethernet primitivas con cable coaxial (10Base2), pero hoy en día es obsoleta en redes LAN corporativas.',
        },

        // ── Diapositiva 6: Pregunta oral — Análisis de Topología de Bus ──
        {
          type: 'question',
          question: '¿Por qué la topología de Bus no es recomendable para una empresa con alto volumen de datos?',
          context: 'Reflexionen sobre el impacto del canal compartido cuando decenas de computadores transmiten simultáneamente...',
          options: [
            'Porque los cables troncales no admiten la señal Wi-Fi',
            'Porque al compartir un solo canal se generan colisiones constantes y la falla del cable paraliza toda la empresa',
            'Porque impide la conexión de impresoras en red',
          ],
          answer: 'Porque al compartir un solo canal se generan colisiones constantes y la falla del cable paraliza toda la empresa.',
          explanation: 'El bus es un **medio compartido de colisión**. A mayor tráfico, mayor congestión. Además, carece de tolerancia a fallas en su canal principal.',
          teacherNotes: 'Solicite la participación de un estudiante para argumentar por qué la falta de redundancia en un canal único es crítica en entornos corporativos.',
        },

        // ── Diapositiva 7: Topología de Anillo ──
        {
          type: 'concept',
          category: 'Topologías Circulares',
          title: 'Topología de Anillo',
          mainIdea: 'Los nodos se configuran en un **patrón circular cerrado** donde cada dispositivo se conecta directamente con sus dos contiguos.',
          definition: 'Al recibir un mensaje, el nodo verifica si es el destinatario. Si no lo es, retransmite los datos al siguiente nodo hasta completar el recorrido.',
          keyPoints: [
            '**Mejor rendimiento que el bus**: Evita colisiones gracias a un flujo de datos ordenado en una sola dirección.',
            '**Facilidad de diagnóstico**: Es sencillo rastrear y localizar fallas en el circuito.',
            '**Limitación principal**: Los nodos no pueden enviar mensajes simultáneamente. Si un nodo o enlace falla, se interrumpe la conexión general.',
          ],
          teacherNotes: 'Explique brevemente la tecnología Token Ring histórica para ilustrar el concepto del "turno de palabra" en el anillo.',
        },

        // ── Diapositiva 8: Topología de Estrella ──
        {
          type: 'concept',
          category: 'Topología Estándar',
          title: 'Topología de Estrella y Estrella Extendida',
          mainIdea: 'Es el tipo más común en redes LAN modernas. Todos los dispositivos se conectan a un **nodo central (hub/switch)** que gestiona la transmisión de datos.',
          definition: 'El concentrador central permite que todas las estaciones se comuniquen entre sí de manera independiente.',
          keyPoints: [
            '**Aislamiento de fallas**: Si falla un cable de un computador, solo ese equipo pierde red; los demás siguen funcionando.',
            '**Punto central de falla**: Si el nodo central sufre un error grave, toda la red queda expuesta a la desconexión.',
            '**Estrella Extendida**: Los elementos conectados al nodo central se convierten a su vez en el centro de sub-estrellas, ampliando la red.',
          ],
          teacherNotes: 'Resalte que es la topología que se utiliza en la inmensa mayoría de salas de informática, oficinas y redes domésticas actuales.',
        },

        // ── Diapositiva 9: Topología de Árbol ──
        {
          type: 'concept',
          category: 'Topologías Escalables',
          title: 'Topología de Árbol (Jerárquica)',
          mainIdea: 'Cuenta con un **enlace troncal principal (backbone)** a partir del cual se ramifican concentradores secundarios y nodos de control.',
          definition: 'Estructura en forma de árbol que puede ser binario (cada nodo se fragmenta en 2 enlaces) o backbone (tronco principal conectado a branches).',
          keyPoints: [
            '**Segmentación de fallas**: Si un nodo secundario o rama falla, no afecta a los demás subsistemas ni al tronco principal.',
            '**Reducción de tráfico**: Permite aislar el tráfico de datos por ramas o departamentos.',
            '**Recomendada para gran escala**: Es la arquitectura óptima para edificios corporativos y campus universitarios.',
          ],
          teacherNotes: 'Utilice la analogía del tronco de un árbol con sus ramas para visualizar cómo se distribuyen los switches de piso respecto al router/switch core.',
        },

        // ── Diapositiva 10: Pregunta oral — Estrella vs. Árbol ──
        {
          type: 'question',
          question: '¿Cuándo es necesario evolucionar de una topología de Estrella simple a una de Árbol?',
          context: 'Piensen en una institución que se expande de 10 equipos a 300 equipos repartidos en 4 pisos...',
          options: [
            'Cuando se desea conectar dispositivos mediante Bluetooth',
            'Cuando la cantidad de equipos y la distancia física requieren sub-centros de conexión para no saturar ni tirar cables largos',
            'Únicamente cuando se requiere conexión satelital',
          ],
          answer: 'Cuando la cantidad de equipos y la distancia física requieren sub-centros de conexión para no saturar ni tirar cables largos.',
          explanation: 'La topología de **Árbol** permite jerarquizar la red en ramas (por pisos o departamentos), optimizando el cableado y el rendimiento.',
          teacherNotes: 'Pida a los estudiantes que imaginen los cables necesarios si 300 computadores de 4 pisos tuvieran que conectarse a un solo switch en el primer piso.',
        },

        // ── Diapositiva 11: Topología de Malla y Totalmente Conexa ──
        {
          type: 'concept',
          category: 'Alta Disponibilidad',
          title: 'Topología de Malla y Totalmente Conexa',
          mainIdea: 'Todos los componentes están interconectados mediante **vías de transmisión separadas y redundantes**.',
          definition: 'En la **Malla**, la información encuentra rutas alternativas si una conexión falla. En la **Totalmente Conexa**, existe un enlace directo entre absolutamente todos los pares de nodos.',
          keyPoints: [
            '**Topología de Malla**: Inmune a fallas de un solo enlace. Requiere un número limitado de nodos por la cantidad de puertos necesarios.',
            '**Topología Totalmente Conexa**: Máximo grado de confiabilidad y redundancia total. Alto costo de configuración.',
            '**Aplicaciones de misión crítica**: Utilizadas principalmente en infraestructura militar, centros de datos y redes financieras.',
          ],
          teacherNotes: 'Mencione la fórmula de conexiones para totalmente conexa (N*(N-1)/2) para demostrar por qué no se usa en redes masivas de computadores personales.',
        },

        // ── Diapositiva 12: Topología Mixta ──
        {
          type: 'concept',
          category: 'Diseños Reales',
          title: 'Topología Mixta (Híbrida)',
          mainIdea: 'Combina **dos o más topologías de red diferentes** para adaptarse a la estructura física y requerimientos del lugar de instalación.',
          definition: 'Permite moldear la red equilibrando seguridad, velocidad e interconexión según las necesidades operativas de la organización.',
          keyPoints: [
            '**Fiabilidad y flexibilidad**: Facilita la detección de errores y la resolución de problemas por bloques o áreas.',
            '**Escalable y eficaz**: Admite integrar diferentes tecnologías de transmisión.',
            '**Desventajas**: Complejidad en el diseño inicial y costos de mantenimiento más elevados.',
          ],
          teacherNotes: 'Explique que la mayoría de empresas reales usan una topología mixta (ej. Estrella para oficinas conectadas en Árbol entre edificios, con enlaces en Malla entre servidores).',
        },

        // ── Diapositiva 13: Tabla comparativa de topologías ──
        {
          type: 'diagram',
          category: 'Síntesis Técnica',
          title: 'Matriz Comparativa de Topologías',
          subtitle: 'Análisis de parámetros de desempeño y aplicabilidad:',
          diagramType: 'table',
          tableHeaders: ['Topología', 'Tolerancia a Fallas', 'Costo / Complejidad', 'Escalabilidad', 'Uso Principal'],
          tableRows: [
            ['Bus', 'Muy baja (corte en canal paraliza)', 'Muy bajo / Sencillo', 'Limitada (congestión)', 'Redes pequeñas o antiguas'],
            ['Anillo', 'Baja (falla en nodo interrumpe)', 'Bajo-Medio / Ordenado', 'Media', 'Sistemas industriales específicos'],
            ['Estrella', 'Media-Alta (aisla nodos; falla central cae)', 'Medio', 'Alta', 'LAN corporativas, escuelas, hogares'],
            ['Árbol', 'Alta por segmentos', 'Medio-Alto / Jerárquico', 'Muy Alta', 'Campus y edificios corporativos'],
            ['Malla / Conexa', 'Máxima (rutas alternativas redundantes)', 'Muy Alto / Complejo', 'Limitada a pocos nodos', 'Infraestructura crítica y militar'],
            ['Mixta (Híbrida)', 'Alta (adaptable por zona)', 'Alto / Diseño complejo', 'Excelente', 'Redes empresariales modernas'],
          ],
          teacherNotes: 'Repase la matriz con los estudiantes para consolidar los criterios de decisión técnica antes de la actividad.',
        },

        // ── Diapositiva 14: Criterios de Selección y Mapeo Visual ──
        {
          type: 'concept',
          category: 'Gestión y Planificación',
          title: 'Selección de Modelo y Mapeo Visual',
          mainIdea: 'Elegir la topología adecuada exige balancear **costo, viabilidad, velocidad, escalabilidad y tolerancia a fallas**, respaldado por un **mapeo visual preciso**.',
          definition: 'El mapeo visual (mapa de red) es la representación gráfica indispensable de los componentes físicos y lógicos para la gestión eficaz.',
          keyPoints: [
            '**Factores de decisión**: Presupuesto disponible, máquinas a conectar, tráfico esperado, velocidad requerida y tiempo de detección de errores.',
            '**Mapeo Visual**: Permite a los administradores monitorear la red en tiempo real, ubicar fallas de inmediato e identificar cuellos de botella.',
          ],
          teacherNotes: 'Muestre la importancia de contar con un diagrama de red actualizado (software como Visio, Packet Tracer o Draw.io) en cualquier departamento de IT.',
        },

        // ── Diapositiva 15: Actividad Práctica Individual (5-10 min) ──
        {
          type: 'activity',
          title: 'Actividad Individual: Selección de Topología',
          activityTitle: 'Caso Práctico — Selección y Justificación Técnica para un Centro Médico',
          icon: '📋',
          instructions: 'Lee el siguiente escenario y responde los 4 puntos en tu cuaderno o documento de trabajo. Tiempo estimado: 5 a 10 minutos. Trabajo estrictamente individual.',
          steps: [
            '**Escenario:** Un centro médico necesita conectar 10 consultorios, 2 salas de radiología y 1 servidor central de historias clínicas. Requerimiento indispensable: si el equipo de un consultorio falla o se desconecta, el resto de la red debe seguir funcionando perfectamente.',
            '**Paso 1 (Selección):** Identifica y escribe cuál es la topología de red más adecuada (Bus, Anillo, Estrella, Árbol o Malla) para este escenario.',
            '**Paso 2 (Justificación):** Argumenta 2 razones técnicas de tu elección basándote en la tolerancia a fallas y la facilidad de mantenimiento.',
            '**Paso 3 (Descarte):** Explica en una frase técnica por qué la topología de Bus sería inaceptable para este centro médico.',
            '**Paso 4 (Resultado Esperado):** Describe concretamente qué ocurriría con la conexión del servidor y los demás consultorios si el cable de la sala de radiología 1 se rompe accidentalmente.',
          ],
          tip: 'Tiempo estimado: 5 a 10 minutos. Trabajo individual. Asegúrate de incluir el nombre de la topología elegida, tus 2 razones técnicas, la razón de descarte del bus y la descripción del fallo aislado.',
          teacherNotes: 'Dé entre 5 y 10 minutos para que cada estudiante complete el ejercicio de manera individual en su cuaderno. Al finalizar, pida a 2 estudiantes al azar que lean sus respuestas para verificar la comprensión.',
        },

        // ── Diapositiva 16: Resumen y Cierre ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Puntos clave a recordar sobre Topologías de Red:',
          points: [
            'La **topología de red** es la disposición física (cables/nodos) y lógica (flujo de datos) de una red de comunicaciones.',
            'Las topologías **Bus y Anillo** son modelos históricos simples pero vulnerables a puntos únicos de falla.',
            'La **Estrella y el Árbol** son los estándares dominantes en redes LAN corporativas por su aislamiento de fallas y escalabilidad.',
            'La **Malla y Totalmente Conexa** ofrecen máxima confiabilidad y rutas alternativas para sistemas de misión crítica.',
            'La **topología Mixta** permite combinar modelos según las necesidades físicas de la instalación.',
            'Un **mapeo visual preciso** es indispensable para administrar, detectar y resolver fallas en cualquier infraestructura de red.',
          ],
          teacherNotes: 'Realice un cierre de 2 minutos destacando cómo las topologías de red conectan la teoría de hardware con el diseño práctico de sistemas de comunicaciones.',
        },
      ],
    },
  ],
}
