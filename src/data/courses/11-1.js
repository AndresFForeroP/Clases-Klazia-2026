/**
 * Contenido educativo — Grado 11.º Grupo 1
 * Tema: Descripción de un Sistema Neuronal Artificial (SNA)
 *
 * Fuente académica: cursos/11/11-1.md
 * Formato: Presentación Académica Interactiva por Diapositivas
 * Regla principal: UNA sola idea por diapositiva.
 * Pedagogía: COMPRENDER → EXPLICAR CON SENCILLEZ → EJEMPLIFICAR → RELACIONAR → PROFUNDIZAR
 *
 * Estructura de clase:
 * - Sin cuestionario / quiz final.
 * - Sin preguntas de verdadero / falso.
 * - Sin preguntas heredadas anteriores.
 * - UNA sola ACTIVIDAD práctica individual (5-10 min).
 */

export const course11_1 = {
  title: 'Descripción de un Sistema Neuronal Artificial',
  description: 'Arquitectura jerárquica de los sistemas neuronales, componentes funcionales de la neurona artificial, dinámica de computación interna, composición matemática de funciones y clasificación de neuronas.',
  lessons: [
    {
      id: 'descripcion-sistema-neuronal',
      title: 'Descripción de un Sistema Neuronal Artificial',
      description: 'Presentación guiada: jerarquía estructural, señales y pesos, dinámica de cálculo y clases de neuronas.',
      slides: [
        // ── Diapositiva 1: Portada y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 11.º — Grupo 1',
          title: 'Descripción de un Sistema Neuronal Artificial',
          subtitle: 'Estructura jerárquica, anatomía de la neurona artificial y clases según su tipo de salida',
          objectives: [
            'Comprender la organización jerárquica de un SNA: neuronas (N), capas (C), redes (R) y sistemas (S).',
            'Analizar la anatomía funcional de una neurona: señales de entrada, pesos sinápticos <xn, wi,j>, dinámica temporal de estado (t → t+1) y señal de salida.',
            'Diferenciar la naturaleza de las señales analógicas (continuas) y digitales (discretas).',
            'Descomponer la formulación matemática de la salida efectiva: yi = fsalida(factivación(fpropagación)).',
            'Identificar y clasificar los tipos de neuronas según su valor de salida: McCulloch-Pitts, Ising y Potts.',
          ],
          teacherNotes: '**Inicio de sesión:** Presente el tema destacando que hoy entenderemos la unidad atómica y la arquitectura general de la inteligencia artificial: cómo se modela matemáticamente una neurona y cómo se ensamblan para formar sistemas complejos.',
        },

        // ── Diapositiva 2: Concepto de Jerarquía del SNA ──
        {
          type: 'concept',
          category: 'Arquitectura Estructural',
          title: 'De lo Simple a lo Complejo: La Jerarquía de un SNA',
          mainIdea: 'Un **Sistema Neuronal Artificial (SNA)** organiza el procesamiento computacional en **4 niveles jerárquicos ascendentes**: desde unidades de cálculo individuales hasta sistemas integrados.',
          analogy: 'Es semejante a una organización empresarial: un trabajador individual (Neurona) forma un equipo (Capa), varios equipos forman un departamento (Red), y todos los departamentos coordinados crean la empresa completa (Sistema).',
          keyPoints: [
            '**Neurona ($N_i$)**: Elemento básico y atómico de cálculo en el sistema.',
            '**Capa ($C_i$)**: Agrupación de múltiples neuronas unidas mediante conexiones.',
            '**Red ($R_i$)**: Conjunto estructurado de varias capas interconectadas entre sí.',
            '**Sistema ($S_i$)**: Conjunto de múltiples redes neuronales que interactúan para resolver tareas complejas.',
          ],
          teacherNotes: 'Explique la notación estándar: N para neuronas, C para capas, R para redes y S para sistemas, siempre acompañadas de un subíndice identificador (N1, C2, R1, S1).',
        },

        // ── Diapositiva 3: Diagrama de la Jerarquía SNA ──
        {
          type: 'diagram',
          category: 'Niveles de Organización',
          title: 'Estructura Jerárquica: N → C → R → S',
          subtitle: 'Representación formal de cómo se agrupan los elementos dentro de un SNA:',
          diagramType: 'flow',
          nodes: [
            {
              icon: '🔵',
              label: 'Neurona (Ni)',
              desc: 'Elemento básico individual de procesamiento.',
            },
            {
              icon: '🧱',
              label: 'Capa (Ci)',
              desc: 'Agrupación de neuronas unidas por conexiones.',
            },
            {
              icon: '🕸️',
              label: 'Red (Ri)',
              desc: 'Agrupación de capas enlazadas entre sí.',
            },
            {
              icon: '🌐',
              label: 'Sistema (Si)',
              desc: 'Múltiples redes conectadas colaborando.',
            },
          ],
          teacherNotes: 'Resalte que cada nivel superior contiene y coordina al nivel anterior. Ningún sistema existe sin redes, ninguna red sin capas y ninguna capa sin neuronas individuales.',
        },

        // ── Diapositiva 4: Componentes Básicos de la Neurona Artificial ──
        {
          type: 'concept',
          category: 'Anatomía de la Neurona',
          title: 'Los Tres Componentes de la Neurona Artificial',
          mainIdea: 'Toda neurona artificial opera bajo un ciclo fundamental de tres etapas: **recibe información**, **la transforma internamente** y **emite una respuesta**.',
          definition: 'Inspirada en el funcionamiento biológico, la neurona artificial $N_i$ procesa información a través de tres componentes inseparables: **Entradas**, **Computación** y **Salida**.',
          keyPoints: [
            '**1. Entradas**: Conjunto de señales que llegan a la neurona, cada una con un valor específico y una intensidad asignada.',
            '**2. Computación**: Transformación matemática interna que actualiza el estado de la neurona a lo largo del tiempo.',
            '**3. Salida**: Emisión de una señal resultante ($y_i$) que se propaga hacia las neuronas de la siguiente capa.',
          ],
          teacherNotes: 'Establezca el paralelismo con la neurona biológica: las entradas son las dendritas, la computación es el soma celular y la salida es el axón.',
        },

        // ── Diapositiva 5: Las Entradas y el Par <xn, wi,j> ──
        {
          type: 'concept',
          category: 'Señales de Entrada',
          title: 'Entradas: Valor de Señal ($x_n$) y Peso Sináptico ($w_{i,j}$)',
          mainIdea: 'Una neurona no recibe datos en bruto; cada señal entrante está modulada por un factor de importancia denominado **peso ($w$)**.',
          definition: 'Cada entrada se representa formalmente mediante el par ordenado **$\\langle x_n, w_{i,j} \\rangle$**, combinando el dato proveniente de otra neurona con la fuerza de la conexión.',
          keyPoints: [
            '**Valor de la señal ($x_n$)**: Magnitud del dato que llega desde una neurona anterior $n$.',
            '**Peso de la conexión ($w_{i,j}$)**: Intensidad o relevancia del enlace que une la neurona origen $N_i$ con la neurona destino $N_j$ (ej. $w_{h,i}$).',
            '**Significado del peso**: Proviene del término inglés *weight*. Determina cuánto influye esa entrada particular en la decisión de la neurona.',
          ],
          teacherNotes: 'Aclare bien los subíndices: wh,i indica la conexión que parte de la neurona Nh y llega a la neurona Ni. El peso w actúa como un amplificador o atenuador del valor x.',
        },

        // ── Diapositiva 6: Señales Analógicas vs. Digitales ──
        {
          type: 'diagram',
          category: 'Naturaleza de la Información',
          title: 'Tipos de Señales en el SNA: Analógicas vs. Digitales',
          subtitle: 'Tanto las señales entrantes como las salientes se clasifican según su rango de valores:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Señales Analógicas (Continuas)',
              title: 'Cualquier valor en un intervalo continuo',
              desc: '• **Valores infinitos**: Pueden adoptar cualquier número real dentro de un rango preestablecido.<br>• **Rangos habituales**: $[0, +1]$, $[-1, +1]$ o $[-\\infty, +\\infty]$.<br>• **Ejemplos informáticos**: Grado de brillo de un píxel, probabilidad de una clase (0.87), nivel de temperatura o voltaje.',
            },
            {
              badge: 'Señales Digitales (Discretas)',
              title: 'Únicamente dos valores permitidos',
              desc: '• **Valores discretos binarios**: Solo pueden tomar exactamente uno de dos estados posibles: **0** o **1**.<br>• **Rango estricto**: $\{0, 1\}$.<br>• **Ejemplos informáticos**: Detección binaria (presencia o ausencia de un objeto), compuerta lógica (verdadero / falso).',
            },
          ],
          teacherNotes: 'Pida a los alumnos ejemplos de magnitudes analógicas (la presión sobre una pantalla táctil) versus digitales (un interruptor que solo está encendido o apagado).',
        },

        // ── Diapositiva 7: Computación y Dinámica Temporal ──
        {
          type: 'concept',
          category: 'Procesamiento Interno',
          title: 'Computación Interna: Transición de Estado ($t \\to t+1$)',
          mainIdea: 'El procesamiento de la neurona representa un cambio dinámico en el tiempo: **pasa de un estado inicial a un nuevo estado procesado**.',
          definition: 'Cada neurona $N_i$ se encuentra en un estado inicial en el momento **$t$**; al recibir y combinar las señales de entrada, transiciona hacia un nuevo estado en el momento **$t + 1$**.',
          keyPoints: [
            '**Momento $t$**: La neurona está en reposo o esperando señales entrantes $\\langle x_n, w_{i,j} \\rangle$.',
            '**Transformación**: La neurona integra y evalúa las entradas ponderadas.',
            '**Momento $t + 1$**: Se alcanza un nuevo estado interno y se genera la señal de salida efectiva.',
          ],
          teacherNotes: 'Enfatice que el cómputo neuronal no es estático: ocurre en pasos temporales discretos donde la información fluye de un instante t al instante siguiente t+1.',
        },

        // ── Diapositiva 8: La Señal de Salida (yi) y Composición de Funciones ──
        {
          type: 'concept',
          category: 'Señal de Salida Efectiva',
          title: 'La Salida ($y_i$): Composición de Tres Funciones',
          mainIdea: 'La señal de salida efectiva **$y_i$** es el resultado de **tres funciones matemáticas encadenadas secuencialmente**.',
          definition: 'La salida de cualquier neurona artificial se expresa formalmente como: $$y_i = f_{\\text{salida}}(f_{\\text{activación}}(f_{\\text{propagación}}))$$',
          keyPoints: [
            '**1. Función de Propagación ($f_{\\text{propagación}}$)**: Integra y combina todas las entradas y pesos (generalmente calcula la suma ponderada de las entradas).',
            '**2. Función de Activación ($f_{\\text{activación}}$)**: Determina el nivel de excitación o activación interna alcanzado por la neurona.',
            '**3. Función de Salida ($f_{\\text{salida}}$)**: Transforma la activación en la señal final $y_i$ observable por el resto de la red.',
          ],
          teacherNotes: 'Explique con claridad que una función alimenta a la siguiente: primero sumamos lo que entra, luego calculamos qué tan activa está la neurona y finalmente decidimos qué señal se emite hacia afuera.',
        },

        // ── Diapositiva 9: Diagrama del Flujo de la Salida yi ──
        {
          type: 'diagram',
          category: 'Flujo de Transformación',
          title: 'El Encadenamiento de Funciones en la Salida',
          subtitle: 'Paso a paso de cómo las entradas se transforman en la señal efectiva $y_i$:',
          diagramType: 'flow',
          nodes: [
            {
              icon: '📥',
              label: 'Entradas <xn, w>',
              desc: 'Señales entrantes y sus respectivos pesos.',
            },
            {
              icon: '➕',
              label: 'f_propagación',
              desc: 'Integra y suma las entradas ponderadas.',
            },
            {
              icon: '⚡',
              label: 'f_activación',
              desc: 'Calcula el nivel de excitación interna.',
            },
            {
              icon: '📤',
              label: 'f_salida → yi',
              desc: 'Genera la señal de salida efectiva.',
            },
          ],
          teacherNotes: 'Recuerde la fórmula matemática: yi = fsalida(factivación(fpropagación)). Este flujo es idéntico conceptualmente para cualquier neurona artificial.',
        },

        // ── Diapositiva 10: Clases de Neuronas según su Salida ──
        {
          type: 'concept',
          category: 'Taxonomía de Neuronas',
          title: 'Clases de Neuronas según su Configuración de Salida',
          mainIdea: 'Las neuronas artificiales se clasifican principalmente según el **rango y tipo de valores que produce su señal de salida**.',
          definition: 'Al variar el número de entradas y las funciones de propagación, activación y salida, se configuran diferentes tipos de neuronas adaptadas a propósitos computacionales específicos.',
          keyPoints: [
            '**Criterio de clasificación**: El formato y dominio numérico de los valores emitidos por la neurona.',
            '**Neurona McCulloch-Pitts**: Emite valores estrictamente binarios: **0 o 1**.',
            '**Neuronas tipo Ising**: Emite valores bipolares: **+1 o -1**, utilizando la función de signo $f(x) = \\text{sign}(x)$.',
            '**Neuronas tipo Potts**: Emite valores discretos y variados dentro de un rango determinado (ej. $\\{-3, -2, -1, 0, +1, +2, +3\\}$).',
          ],
          teacherNotes: 'Haga notar el criterio unificador: lo que distingue a estas clases es la naturaleza del resultado que entregan: 0/1 (McCulloch-Pitts), -1/+1 (Ising) o una escala graduada discreta (Potts).',
        },

        // ── Diapositiva 11: Tabla Comparativa de Modelos de Neurona ──
        {
          type: 'diagram',
          category: 'Cuadro Comparativo',
          title: 'McCulloch-Pitts vs. Ising vs. Potts',
          subtitle: 'Comparación técnica de las principales clases de neuronas artificiales:',
          diagramType: 'table',
          tableHeaders: ['Clase de Neurona', 'Valores de Salida', 'Función / Criterio Característico', 'Significado del Output'],
          tableRows: [
            [
              'Neurona McCulloch-Pitts',
              '0 o 1',
              'Salida binaria booleana estricta',
              '0 = Inactiva / Falso<br>1 = Activa / Verdadero',
            ],
            [
              'Neurona tipo Ising',
              '-1 o +1',
              'Función signo: f(x) = sign(x)',
              '-1 = Desactivada / Inhibida<br>+1 = Activada / Excitada',
            ],
            [
              'Neurona tipo Potts',
              'Discretos en rango<br>(ej. -3 a +3)',
              'Múltiples estados discretos configurables',
              'Niveles graduados de activación o clasificación cualitativa',
            ],
          ],
          teacherNotes: 'Guíe una lectura rápida de la tabla: McCulloch-Pitts es binaria (0/1), Ising es simétrica bipolar (-1/+1) y Potts permite múltiples niveles discretos.',
        },

        // ── Diapositiva 12: Actividad Práctica Individual (5-10 min) ──
        {
          type: 'activity',
          title: 'Actividad Individual: Diagnóstico y Modelado de un SNA',
          activityTitle: 'Aplicación Práctica — Arquitectura y Componentes de un Sistema Neuronal Artificial',
          icon: '🧠',
          instructions: 'Analiza los siguientes 4 requerimientos técnicos y responde de forma concreta en tu cuaderno o documento de trabajo. Tiempo estimado: 5 a 10 minutos. Trabajo estrictamente individual.',
          steps: [
            '**Paso 1 (Jerarquía Estructural):** En un sistema informático de control robótico $S_1$, existen dos redes neuronales ($R_1$ para visión y $R_2$ para movimiento). Explica cómo se organizan jerárquicamente las neuronas ($N$), las capas ($C$), las redes ($R$) y el sistema ($S$).',
            '**Paso 2 (Análisis del Par Entrada-Peso):** La neurona $N_3$ recibe una señal de valor $x_2 = 0.7$ enviada por la neurona $N_2$ a través de un enlace con peso $w_{2,3} = 0.9$. Escribe formalmente el par de entrada $\\langle x_n, w_{i,j} \\rangle$ y explica qué ocurriría si el peso fuera $w_{2,3} = 0$.',
            '**Paso 3 (Cadena de Funciones):** Escribe la fórmula general de la salida $y_i$ y describe en una sola frase qué rol cumple la función de propagación ($f_{\\text{propagación}}$).',
            '**Paso 4 (Selección de Modelo):** Si un sensor debe informar únicamente si una compuerta está completamente abierta (+1) o cerrada (-1), ¿cuál clase de neurona (McCulloch-Pitts, Ising o Potts) es la adecuada para modelar la salida y cuál es su función matemática?',
          ],
          tip: 'Tiempo: 5-10 minutos. Actividad individual. Utiliza la notación técnica formal: <xn, wi,j>, transiciones t → t+1, composición yi = fsalida(factivación(fpropagación)) y tipos de neuronas según su salida.',
          teacherNotes: 'Dé 5 a 10 minutos a los estudiantes para redactar sus respuestas individualmente. Al finalizar, invite a 2 estudiantes a compartir sus respuestas de los pasos 2 y 4 para consolidar los conceptos clave.',
        },

        // ── Diapositiva 13: Resumen y Cierre de la Lección ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Puntos clave a recordar sobre el Sistema Neuronal Artificial (SNA):',
          points: [
            '**Jerarquía de 4 niveles**: Neurona ($N_i$) → Capa ($C_i$) → Red ($R_i$) → Sistema ($S_i$). Cada nivel organiza al anterior.',
            '**Anatomía básica**: Toda neurona opera en 3 componentes esenciales: **Entradas**, **Computación interna** y **Salida**.',
            '**Pares de entrada $\\langle x_n, w_{i,j} \\rangle$**: Cada señal $x_n$ es ponderada por la intensidad de su conexión $w_{i,j}$ (peso).',
            '**Tipos de señales**: Señales **analógicas** (continuas en rangos como $[0,1]$ o $[-1,+1]$) frente a señales **digitales** (binarias $\{0, 1\}$).',
            '**Dinámica temporal**: El cálculo neuronal representa una evolución de estado en el tiempo desde el instante $t$ hacia el instante $t+1$.',
            '**Composición de funciones**: La señal efectiva final es $y_i = f_{\\text{salida}}(f_{\\text{activación}}(f_{\\text{propagación}}))$.',
            '**Clases de neuronas según su salida**: **McCulloch-Pitts** ($\\{0, 1\\}$), **Ising** ($\\{-1, +1\\}$ con $f(x) = \\text{sign}(x)$) y **Potts** (múltiples valores discretos en rango).',
          ],
          teacherNotes: 'Concluya felicitando al grupo y recordando que la comprensión precisa de estas funciones y componentes básicos es el pilar indispensable para entender redes neuronales profundas y algoritmos de entrenamiento.',
        },
      ],
    },
  ],
}
