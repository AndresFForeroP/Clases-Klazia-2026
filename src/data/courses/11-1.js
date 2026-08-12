/**
 * Contenido educativo — Grado 11.º Grupo 1
 * Tema: Características de la Arquitectura de Red
 *
 * Fuente: cursos/11/11-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel avanzado para 11.º grado.
 */

export const course11_1 = {
  title: 'Características de la Arquitectura de Red',
  description: 'Presentación interactiva sobre las cuatro características fundamentales que toda arquitectura de red debe cumplir: tolerancia a fallas, escalabilidad, calidad de servicio y seguridad.',
  lessons: [
    {
      id: 'arquitectura-red',
      title: 'Características de la Arquitectura de Red',
      description: 'Presentación académica guiada para la clase presencial de 11.º grado.',
      slides: [
        // ── Diapositiva 1: Título y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 11.º — Grupo 1',
          title: 'Características de la Arquitectura de Red',
          subtitle: '¿Qué necesita una red para cumplir con las expectativas de millones de usuarios?',
          objectives: [
            'Definir qué es la arquitectura de red y por qué es importante.',
            'Identificar y explicar las 4 características fundamentales de una arquitectura de red.',
            'Analizar cómo cada característica se aplica en redes reales.',
            'Evaluar la relación entre estas características y el diseño de redes modernas.',
          ],
          teacherNotes: '**Sugerencia de inicio:** Pregunte al grupo qué servicios utilizan diariamente que dependan de una red (streaming, videollamadas, redes sociales, correo). Use esto para introducir la idea de que esos servicios requieren una infraestructura cuidadosamente diseñada.',
        },

        // ── Diapositiva 2: Pregunta introductoria ──
        {
          type: 'question',
          question: '¿Qué ocurriría si Internet dejara de funcionar durante 24 horas?',
          context: 'Piensen en todos los servicios que dependen de la red: comunicaciones, transacciones bancarias, navegación GPS, servicios de salud, entretenimiento...',
          options: [
            'Solo afectaría el entretenimiento y las redes sociales',
            'Paralizaría sectores económicos, comunicaciones y servicios críticos',
            'No habría mayor impacto porque existen alternativas analógicas',
          ],
          answer: 'Paralizaría sectores económicos, comunicaciones y servicios críticos a nivel global.',
          explanation: 'Esto demuestra que Internet y las redes modernas necesitan una **arquitectura robusta** diseñada para estar siempre disponibles, crecer sin problemas, priorizar servicios críticos y proteger la información.',
          teacherNotes: 'Permita que los estudiantes debatan brevemente. Aproveche para mencionar incidentes reales (caídas de servicios de Meta, Google o AWS) y su impacto global.',
        },

        // ── Diapositiva 3: Concepto — ¿Qué es la arquitectura de red? ──
        {
          type: 'concept',
          category: 'Concepto Fundamental',
          title: '¿Qué es la Arquitectura de Red?',
          mainIdea: 'Se refiere a las **tecnologías, servicios y protocolos** que conforman la infraestructura de una red y permiten trasladar mensajes a través de ella.',
          definition: 'Las redes deben admitir una amplia variedad de aplicaciones y servicios, así como funcionar con diferentes tipos de infraestructuras físicas. La arquitectura de red define cómo se organiza todo esto para cumplir con las expectativas de los usuarios.',
          keyPoints: [
            'Abarca tanto la **infraestructura física** como los **procesos lógicos** (protocolos).',
            'Debe soportar múltiples aplicaciones y servicios simultáneamente.',
            'Internet evoluciona constantemente, y la arquitectura debe adaptarse.',
          ],
          teacherNotes: 'Enfatice que "arquitectura" no es solo el hardware: incluye los protocolos, las reglas y los mecanismos lógicos que hacen que los mensajes lleguen a su destino.',
        },

        // ── Diapositiva 4: Diagrama — Las 4 Características ──
        {
          type: 'diagram',
          category: 'Visión General',
          title: 'Las 4 Características Fundamentales',
          subtitle: 'Toda arquitectura de red moderna debe cumplir con estas cuatro propiedades:',
          diagramType: 'comparison',
          columns: [
            {
              badge: '01',
              title: 'Tolerancia a Fallas',
              desc: 'Capacidad de la red para **seguir funcionando** incluso cuando un componente falla.',
            },
            {
              badge: '02',
              title: 'Escalabilidad',
              desc: 'Capacidad de **crecer** y admitir nuevos usuarios sin afectar el rendimiento.',
            },
            {
              badge: '03',
              title: 'Calidad de Servicio (QoS)',
              desc: 'Capacidad de **priorizar** el tráfico según las necesidades de cada servicio.',
            },
            {
              badge: '04',
              title: 'Seguridad',
              desc: 'Capacidad de **proteger** la información y garantizar privacidad en las comunicaciones.',
            },
          ],
          teacherNotes: 'Esta diapositiva funciona como mapa general. Señale que las siguientes diapositivas profundizan en cada característica. Puede preguntar: "¿Cuál les parece más importante y por qué?"',
        },

        // ── Diapositiva 5: Tolerancia a Fallas — Concepto ──
        {
          type: 'concept',
          category: 'Característica 1 de 4',
          title: 'Tolerancia a Fallas',
          mainIdea: 'Una red tolerante a fallas **limita el impacto** de una falla de hardware o software y se **recupera rápidamente** cuando esta se produce.',
          definition: 'La expectativa de que Internet esté siempre disponible para millones de usuarios requiere una arquitectura diseñada para ser tolerante a las fallas. Estas redes dependen de enlaces o rutas redundantes entre el origen y el destino del mensaje.',
          keyPoints: [
            'Si un enlace o ruta falla, los mensajes se **enrutan instantáneamente** por una ruta alternativa.',
            'La redundancia es transparente para los usuarios en cada extremo.',
            'Tanto la infraestructura física como los procesos lógicos están diseñados para adaptarse a esta redundancia.',
          ],
          teacherNotes: 'Explique el concepto de redundancia: tener más de un camino disponible para que, si uno falla, la comunicación no se interrumpa.',
        },

        // ── Diapositiva 6: Tolerancia a Fallas — Ejemplo ──
        {
          type: 'example',
          category: 'Ejemplo Práctico',
          title: 'Redundancia de Rutas en Internet',
          subtitle: '¿Cómo funciona en la práctica?',
          icon: '🔀',
          description: 'Cuando envías un mensaje desde Colombia a un servidor en Estados Unidos, los datos no siguen un único camino. Existen **múltiples rutas** a través de diferentes cables submarinos, satélites y centros de datos. Si un cable se corta o un router falla, los paquetes de datos se redirigen automáticamente por otra ruta.',
          analogy: '**Caso real:** En 2008, varios cables submarinos en el Mediterráneo fueron cortados accidentalmente. Millones de usuarios en Medio Oriente perdieron conectividad, pero los protocolos de enrutamiento redirigieron parte del tráfico por rutas alternativas, minimizando el impacto.',
          features: [
            '**Redundancia física**: Múltiples cables, routers y enlaces entre puntos.',
            '**Redundancia lógica**: Protocolos de enrutamiento dinámico (OSPF, BGP) que recalculan rutas automáticamente.',
            '**Transparencia**: El usuario no percibe el cambio de ruta; la conexión continúa.',
          ],
          teacherNotes: 'Pregunte: "¿Qué pasaría si solo existiera un cable submarino entre Sudamérica y el resto del mundo?" Esto ayuda a visualizar la importancia de la redundancia.',
        },

        // ── Diapositiva 7: Escalabilidad — Concepto ──
        {
          type: 'concept',
          category: 'Característica 2 de 4',
          title: 'Escalabilidad',
          mainIdea: 'Una red escalable puede **expandirse rápidamente** para admitir nuevos usuarios y aplicaciones **sin afectar el rendimiento** del servicio existente.',
          definition: 'Miles de nuevos usuarios y proveedores de servicio se conectan a Internet cada semana. La capacidad de admitir estas nuevas interconexiones depende de un diseño jerárquico en capas para la infraestructura física subyacente y la arquitectura lógica.',
          keyPoints: [
            'El funcionamiento en **capas** permite insertar nuevos usuarios sin causar disrupción en toda la red.',
            'Los desarrollos tecnológicos aumentan constantemente la **capacidad de transmisión** y el rendimiento.',
            'Nuevos métodos para **identificar y localizar** usuarios individuales permiten que Internet se mantenga al ritmo de la demanda.',
          ],
          teacherNotes: 'Mencione que Internet pasó de unos pocos miles de computadores en los años 80 a más de 5.000 millones de dispositivos conectados actualmente. Todo esto sin "reiniciar" la red.',
        },

        // ── Diapositiva 8: Escalabilidad — Ejemplo ──
        {
          type: 'example',
          category: 'Ejemplo Práctico',
          title: 'Diseño Jerárquico: Crecer sin Romper',
          subtitle: '¿Cómo logra Internet crecer sin colapsar?',
          icon: '📈',
          description: 'Internet utiliza un **diseño jerárquico en capas**. Imagine una pirámide: en la base están los ISP locales que conectan hogares y empresas; en el medio, los ISP regionales que interconectan ciudades; en la cima, los operadores de backbone que conectan países y continentes.',
          analogy: '**Analogía:** Es como el sistema vial de un país. Los caminos locales conectan barrios, las carreteras secundarias conectan ciudades, y las autopistas nacionales conectan regiones. Puede agregar nuevos barrios sin tener que reconstruir toda la autopista.',
          features: [
            '**ISP local (Tier 3)**: Conecta al usuario final (hogares, oficinas, escuelas).',
            '**ISP regional (Tier 2)**: Interconecta ISPs locales a nivel de ciudades o regiones.',
            '**Backbone (Tier 1)**: Redes troncales que interconectan países y continentes.',
          ],
          teacherNotes: 'Pregunte qué ISP utilizan los estudiantes en sus hogares. Esto conecta el concepto abstracto con su experiencia directa.',
        },

        // ── Diapositiva 9: Pregunta intermedia ──
        {
          type: 'question',
          question: '¿Cuál es la diferencia fundamental entre tolerancia a fallas y escalabilidad?',
          context: 'Ambas son necesarias, pero responden a problemas diferentes de la red...',
          options: [
            'La tolerancia a fallas permite crecer; la escalabilidad previene fallas',
            'La tolerancia a fallas mantiene el servicio cuando algo falla; la escalabilidad permite agregar más usuarios sin degradar el servicio',
            'Son lo mismo expresado de diferente manera',
          ],
          answer: 'La tolerancia a fallas mantiene el servicio cuando algo falla; la escalabilidad permite agregar más usuarios sin degradar el servicio.',
          explanation: '**Tolerancia a fallas** = reacción ante problemas (algo se rompe, la red sigue funcionando). **Escalabilidad** = capacidad de crecimiento (la red admite más usuarios sin perder rendimiento). Son complementarias pero abordan aspectos diferentes.',
          teacherNotes: 'Use esta pregunta para verificar que los estudiantes distinguen ambos conceptos. Pida que un estudiante explique la diferencia con sus propias palabras antes de revelar.',
        },

        // ── Diapositiva 10: Calidad de Servicio — Concepto ──
        {
          type: 'concept',
          category: 'Característica 3 de 4',
          title: 'Calidad de Servicio (QoS)',
          mainIdea: 'QoS permite **priorizar** ciertos tipos de tráfico para garantizar que los servicios críticos mantengan un nivel de calidad aceptable.',
          definition: 'Las transmisiones de voz y video en vivo requieren un nivel de calidad consistente y un envío ininterrumpido que no era necesario para las aplicaciones informáticas tradicionales. Los nuevos requisitos para dar soporte a esta calidad sobre una red convergente cambian la forma en que se diseñan las arquitecturas de red.',
          analogy: '**Ejemplo:** Internet actualmente proporciona un nivel aceptable de tolerancia a fallas y escalabilidad. Pero cuando haces una videollamada mientras alguien más descarga un archivo pesado en la misma red, la calidad de la videollamada no debería verse afectada. QoS se encarga de eso.',
          keyPoints: [
            'Las redes tradicionales soportaban un **tipo único** de transmisión (datos).',
            'Las redes convergentes deben transportar **voz, video y datos** simultáneamente.',
            'QoS mide la calidad contra la experiencia de una comunicación presencial.',
          ],
          teacherNotes: 'Pregunte: "¿Han experimentado que una videollamada se congele o se pixele mientras alguien más descarga un archivo?" Eso ocurre cuando no hay QoS o está mal configurado.',
        },

        // ── Diapositiva 11: QoS — Ejemplo ──
        {
          type: 'example',
          category: 'Caso de Aplicación',
          title: 'Videollamada vs. Descarga de Archivo',
          subtitle: '¿Por qué algunos servicios necesitan más prioridad que otros?',
          icon: '📹',
          description: 'Una videollamada necesita que los paquetes de datos lleguen **en orden, sin demora y sin interrupciones**. Si un paquete llega tarde, se percibe como congelamiento o corte de audio. En cambio, la descarga de un archivo puede tolerar pequeños retrasos sin que el usuario lo note.',
          analogy: '**En una red convergente con QoS:** El router identifica que los paquetes de la videollamada son prioritarios y les da preferencia sobre los paquetes de la descarga. La videollamada mantiene su calidad mientras la descarga simplemente tarda un poco más.',
          features: [
            '**Tráfico sensible a la latencia**: Videollamadas, VoIP, transmisiones en vivo → alta prioridad.',
            '**Tráfico tolerante a retrasos**: Descargas, correos, actualizaciones → menor prioridad.',
            '**Red convergente**: Una sola infraestructura que transporta todos los tipos de tráfico con diferentes niveles de servicio.',
          ],
          teacherNotes: 'Puede hacer una analogía con una sala de urgencias: los pacientes críticos se atienden primero, aunque otros hayan llegado antes. QoS funciona de manera similar con el tráfico de red.',
        },

        // ── Diapositiva 12: Seguridad — Concepto ──
        {
          type: 'concept',
          category: 'Característica 4 de 4',
          title: 'Seguridad en la Arquitectura de Red',
          mainIdea: 'La seguridad busca garantizar la **privacidad** y **protección** de la información que se transmite a través de la red.',
          definition: 'Internet ha evolucionado de ser una internetwork de organizaciones educativas y gubernamentales fuertemente controlada, a ser un medio accesible para todos para la transmisión de comunicaciones comerciales y personales. Como resultado, cambiaron los requerimientos de seguridad de la red.',
          keyPoints: [
            'Las expectativas de privacidad y seguridad del uso empresarial **exceden** lo que la arquitectura original podía ofrecer.',
            'La expansión de las comunicaciones **aumenta la necesidad** de incorporar seguridad en la arquitectura.',
            'Se están implementando herramientas y procedimientos para combatir los **defectos de seguridad inherentes** a la arquitectura de red.',
          ],
          teacherNotes: 'Enfatice que Internet no fue diseñado originalmente para ser seguro; fue creado para compartir información entre universidades. La seguridad se ha incorporado después, lo cual genera desafíos constantes.',
        },

        // ── Diapositiva 13: Seguridad — Ejemplo ──
        {
          type: 'example',
          category: 'Evolución Histórica',
          title: 'De la Academia al Comercio: La Transformación de Internet',
          subtitle: 'El cambio que redefinió las necesidades de seguridad',
          icon: '🔒',
          description: 'En los años 60-80, Internet (ARPANET) conectaba universidades y centros de investigación gubernamentales. La seguridad no era una prioridad porque los usuarios eran pocos y confiables. Cuando Internet se abrió al público y al comercio en los años 90, millones de usuarios comenzaron a transmitir **información bancaria, datos personales y comunicaciones confidenciales**, lo cual requirió un cambio radical en la arquitectura de seguridad.',
          analogy: '**Reflexión:** Es como si una biblioteca privada de una universidad, donde solo entran profesores, de repente se abriera al público general. Las reglas de acceso y protección de los libros más valiosos tendrían que cambiar completamente.',
          features: [
            '**Años 60-80**: Red académica/militar. Pocos usuarios, alta confianza, seguridad mínima.',
            '**Años 90-2000**: Apertura comercial. Millones de usuarios, transacciones financieras, necesidad de cifrado.',
            '**Actualidad**: Infraestructura crítica global. Seguridad es un área activa de investigación y desarrollo.',
          ],
          teacherNotes: 'Mencione ejemplos de incidentes de seguridad conocidos (WannaCry, filtraciones de datos de empresas) para ilustrar por qué la seguridad es un desafío permanente.',
        },

        // ── Diapositiva 14: Pregunta de análisis ──
        {
          type: 'question',
          question: '¿Por qué es tan difícil lograr seguridad completa en Internet si sabemos que es necesaria?',
          context: 'Consideren que Internet fue diseñado para compartir información libremente, no para protegerla...',
          options: [
            'Porque no existen herramientas de seguridad suficientes',
            'Porque la arquitectura original de Internet no fue diseñada con seguridad como prioridad, y modificar la base de una red global es un desafío enorme',
            'Porque los gobiernos no invierten en seguridad de redes',
          ],
          answer: 'Porque la arquitectura original de Internet no fue diseñada con seguridad como prioridad, y modificar la base de una red global en funcionamiento es un desafío técnico enorme.',
          explanation: 'Incorporar seguridad a una red que fue construida sobre principios de **apertura y confianza** es como intentar agregar una caja fuerte a una casa que fue diseñada sin cerraduras. Se puede hacer, pero requiere esfuerzo continuo y nunca será perfecto. Por eso la seguridad es un área activa de **investigación y desarrollo**.',
          teacherNotes: 'Esta pregunta requiere análisis. Permita que los estudiantes reflexionen y formulen sus respuestas antes de revelar. Conecte con el hecho de que la seguridad perfecta no existe; es un proceso continuo.',
        },

        // ── Diapositiva 15: Tabla comparativa ──
        {
          type: 'diagram',
          category: 'Síntesis Comparativa',
          title: 'Las 4 Características en Perspectiva',
          subtitle: 'Cada característica responde a una necesidad diferente de la red:',
          diagramType: 'table',
          tableHeaders: ['Característica', 'Problema que resuelve', 'Mecanismo clave', 'Ejemplo'],
          tableRows: [
            ['Tolerancia a fallas', 'Interrupciones del servicio', 'Rutas redundantes y enrutamiento dinámico', 'Cable submarino cortado → ruta alternativa'],
            ['Escalabilidad', 'Crecimiento de la demanda', 'Diseño jerárquico en capas', 'Miles de usuarios nuevos cada semana'],
            ['Calidad de Servicio', 'Diferencias en tipos de tráfico', 'Priorización de paquetes', 'Videollamada sin interrupciones'],
            ['Seguridad', 'Protección de la información', 'Cifrado, autenticación, firewalls', 'Transacciones bancarias seguras'],
          ],
          teacherNotes: 'Repase la tabla columna por columna. Pregunte a diferentes estudiantes si pueden dar un ejemplo adicional para cada característica.',
        },

        // ── Diapositiva 16: Verdadero o Falso ──
        {
          type: 'trueFalse',
          title: 'Evalúa tu Comprensión',
          tfTitle: 'Determina si cada afirmación es verdadera o falsa:',
          statements: [
            {
              id: 'tf1',
              text: 'La tolerancia a fallas garantiza que la red nunca tendrá problemas.',
              isTrue: false,
              feedback: {
                correct: '¡Correcto! La tolerancia a fallas no **evita** los problemas; **limita su impacto** y permite una recuperación rápida.',
                incorrect: 'No exactamente. La tolerancia a fallas no evita las fallas; **limita su impacto** y permite que la red se recupere rápidamente usando rutas alternativas.',
              },
            },
            {
              id: 'tf2',
              text: 'La escalabilidad se logra gracias a un diseño jerárquico en capas.',
              isTrue: true,
              feedback: {
                correct: '¡Exacto! El diseño jerárquico permite insertar nuevos usuarios y servicios sin causar disrupción en toda la red.',
                incorrect: 'En realidad es verdadera. La escalabilidad de Internet se basa en un **diseño jerárquico en capas** que permite crecer sin afectar el servicio existente.',
              },
            },
            {
              id: 'tf3',
              text: 'QoS es necesario porque todos los tipos de tráfico de red tienen los mismos requisitos.',
              isTrue: false,
              feedback: {
                correct: '¡Correcto! QoS existe precisamente porque los tipos de tráfico tienen **requisitos diferentes**: una videollamada necesita baja latencia, pero una descarga puede tolerar retrasos.',
                incorrect: 'Es falsa. Los tipos de tráfico tienen requisitos muy diferentes. Una videollamada necesita **baja latencia**, mientras que una descarga de archivo puede tolerar retrasos. Por eso QoS prioriza.',
              },
            },
            {
              id: 'tf4',
              text: 'Internet fue diseñado originalmente con la seguridad como prioridad.',
              isTrue: false,
              feedback: {
                correct: '¡Correcto! Internet fue diseñado para compartir información entre universidades, no para protegerla. La seguridad se incorporó después.',
                incorrect: 'Es falsa. Internet (ARPANET) fue creado para **compartir información libremente** entre universidades y centros de investigación. La seguridad se ha incorporado posteriormente.',
              },
            },
          ],
          teacherNotes: 'Pida a los estudiantes que justifiquen sus respuestas antes de revelar la retroalimentación. Esto refuerza el razonamiento, no solo la memorización.',
        },

        // ── Diapositiva 17: Quiz interactivo ──
        {
          type: 'quiz',
          title: 'Comprobación de Aprendizaje',
          description: 'Responde las siguientes preguntas para verificar tu comprensión sobre la arquitectura de red.',
          quizTitle: '¿Qué tanto comprendimos sobre arquitectura de red?',
          questions: [
            {
              id: 'q1',
              question: '¿Qué mecanismo utiliza una red tolerante a fallas para mantener la comunicación cuando un enlace falla?',
              options: [
                'Apaga la red hasta reparar el enlace',
                'Utiliza rutas redundantes para redirigir los mensajes instantáneamente',
                'Envía una alerta al administrador y espera su intervención manual',
              ],
              correctIndex: 1,
              feedback: {
                correct: '¡Correcto! Las rutas redundantes permiten que los mensajes se redireccionan automáticamente, de forma transparente para el usuario.',
                incorrect: 'La red utiliza **rutas redundantes** que permiten redirigir los mensajes automáticamente sin intervención manual y sin que el usuario perciba la falla.',
              },
            },
            {
              id: 'q2',
              question: '¿Qué tipo de diseño permite que Internet sea escalable?',
              options: [
                'Diseño centralizado con un único punto de control',
                'Diseño jerárquico en capas',
                'Diseño plano sin niveles de jerarquía',
              ],
              correctIndex: 1,
              feedback: {
                correct: '¡Exacto! El diseño jerárquico en capas permite agregar nuevos usuarios y servicios sin afectar el funcionamiento global.',
                incorrect: 'Internet utiliza un **diseño jerárquico en capas** (ISP locales, regionales, backbone) que permite crecer sin causar disrupción en toda la red.',
              },
            },
            {
              id: 'q3',
              question: '¿Por qué una videollamada requiere mayor prioridad (QoS) que una descarga de archivo?',
              options: [
                'Porque las videollamadas consumen más ancho de banda',
                'Porque la videollamada es sensible a la latencia y no tolera retrasos',
                'Porque las descargas son más importantes que las videollamadas',
              ],
              correctIndex: 1,
              feedback: {
                correct: '¡Correcto! La videollamada requiere que los paquetes lleguen en tiempo real, sin demora. Un retraso se percibe como congelamiento o corte.',
                incorrect: 'La videollamada es **sensible a la latencia**: necesita que los paquetes lleguen en orden y sin retraso. Una descarga puede tolerar pequeños retrasos sin que el usuario lo note.',
              },
            },
            {
              id: 'q4',
              question: '¿Por qué la seguridad es un desafío constante en Internet?',
              options: [
                'Porque no existen herramientas de seguridad disponibles',
                'Porque la arquitectura original de Internet no fue diseñada con seguridad como prioridad',
                'Porque los usuarios no quieren seguridad en sus comunicaciones',
              ],
              correctIndex: 1,
              feedback: {
                correct: '¡Exacto! Internet fue diseñado para compartir información libremente. Incorporar seguridad a una arquitectura que no la contempló originalmente es un desafío continuo.',
                incorrect: 'La razón principal es que **la arquitectura original de Internet no fue diseñada con seguridad como prioridad**. Fue creada para compartir información entre universidades, y agregar seguridad después es un desafío permanente.',
              },
            },
          ],
          teacherNotes: 'Pida que diferentes estudiantes respondan cada pregunta. Aproveche la retroalimentación para reforzar los conceptos más importantes.',
        },

        // ── Diapositiva 18: Actividad práctica ──
        {
          type: 'activity',
          title: 'Actividad: Diseño de Red Empresarial',
          activityTitle: 'Caso práctico — Arquitectura de red para una empresa',
          icon: '🏗️',
          instructions: 'En grupos de 3, imaginen que una empresa de comercio electrónico los contrata para evaluar su red. Analicen cada característica:',
          steps: [
            '**Tolerancia a fallas:** ¿Qué pasaría si el servidor principal de la tienda en línea se cae en un día de ofertas? ¿Qué solución propondrían?',
            '**Escalabilidad:** La empresa pasó de 1.000 usuarios diarios a 50.000 en un año. ¿Cómo debería estar diseñada la red para soportar ese crecimiento?',
            '**QoS:** La empresa usa videollamadas para atención al cliente y simultáneamente procesa miles de transacciones. ¿Qué tráfico priorizarían?',
            '**Seguridad:** Los clientes ingresan datos de tarjetas de crédito. ¿Qué medidas de seguridad son indispensables?',
          ],
          tip: 'No hay una única respuesta correcta. Lo importante es que cada propuesta esté justificada técnicamente con lo aprendido en clase.',
          teacherNotes: 'Dé 12-15 minutos para la actividad grupal. Luego pida a 2 grupos que presenten sus propuestas. Evalúe la calidad de la justificación, no solo la respuesta.',
        },

        // ── Diapositiva 19: Resumen ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Puntos clave sobre arquitectura de red:',
          points: [
            'La **arquitectura de red** abarca las tecnologías, servicios y protocolos que permiten la comunicación en una red.',
            'La **tolerancia a fallas** utiliza rutas redundantes para mantener el servicio cuando un componente falla.',
            'La **escalabilidad** se logra mediante un diseño jerárquico en capas que permite crecer sin disrupciones.',
            'La **Calidad de Servicio (QoS)** prioriza el tráfico sensible (voz, video) sobre el tráfico tolerante a retrasos.',
            'La **seguridad** es un desafío continuo porque Internet no fue diseñado originalmente para proteger la información.',
          ],
          teacherNotes: 'Cierre con una síntesis de 2-3 minutos. Puede preguntar: "Si tuvieran que explicar estas 4 características a alguien que no sabe nada de redes, ¿cómo lo harían?"',
        },
      ],
    },
  ],
}
