/**
 * Contenido educativo — Grado 8.º Grupo 2
 * Tema: Análisis Interior (Seguridad Informática)
 *
 * Fuente: cursos/8/8-2.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel progresivo para 8.º grado.
 */

export const course8_2 = {
  title: 'Análisis Interior',
  description: 'Presentación interactiva sobre el análisis de vulnerabilidades internas: cómo una organización evalúa su seguridad desde adentro usando pruebas específicas.',
  lessons: [
    {
      id: 'analisis-interior',
      title: 'Análisis Interior',
      description: 'Presentación académica guiada para la clase presencial de 8.º grado.',
      slides: [
        // ── Diapositiva 1: Título y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 8.º — Grupo 2',
          title: 'Análisis Interior',
          subtitle: '¿Hasta dónde puede llegar un usuario común dentro de una organización?',
          objectives: [
            'Explicar qué es un análisis interior y cuál es su propósito.',
            'Identificar los tipos de pruebas que componen un análisis interior.',
            'Comprender cómo cada tipo de prueba protege a la organización.',
          ],
          teacherNotes: '**Sugerencia de inicio:** Pregunte a los estudiantes si creen que un empleado con un usuario y contraseña normales podría acceder a información que no le corresponde en una empresa. Esto abre la discusión sobre la seguridad interna.',
        },

        // ── Diapositiva 2: Pregunta introductoria ──
        {
          type: 'question',
          question: '¿Creen que una empresa está más en riesgo por un ataque externo o por lo que pueden hacer sus propios empleados?',
          context: 'Piensa en alguien que ya tiene computador, usuario y contraseña dentro de la empresa...',
          options: [
            'Los ataques externos son siempre más peligrosos',
            'Los empleados con acceso interno pueden representar un riesgo igual o mayor',
            'Los empleados nunca representan un riesgo de seguridad',
          ],
          answer: 'Los empleados con acceso interno pueden representar un riesgo igual o mayor que los ataques externos.',
          explanation: 'Por eso se realizan **análisis interiores**: para evaluar hasta dónde puede llegar alguien que ya tiene privilegios de usuario dentro de la organización.',
          teacherNotes: 'Permita que 2 o 3 estudiantes compartan su opinión antes de revelar. Resalte que muchas brechas de seguridad ocurren desde dentro de las organizaciones.',
        },

        // ── Diapositiva 3: Concepto principal ──
        {
          type: 'concept',
          category: 'Concepto Fundamental',
          title: '¿Qué es un Análisis Interior?',
          mainIdea: 'Es una evaluación que busca demostrar **hasta dónde se puede llegar con los privilegios de un usuario típico** dentro de la organización.',
          definition: 'Antes de continuar con el análisis de vulnerabilidad, se debe verificar varios tipos de test. Un análisis interior trata de mostrar o demostrar hasta dónde se puede llegar con los privilegios de un usuario típico dentro de la organización.',
          keyPoints: [
            'Se requiere que la organización provea un computador con **nombre de usuario y contraseña** de un usuario normal.',
            'No se utilizan herramientas de hacking: se usa exactamente lo que la empresa le da a un empleado.',
            'Busca encontrar debilidades internas antes de que alguien las explote.',
          ],
          teacherNotes: 'Enfatice que el analista actúa como un empleado normal. No tiene privilegios de administrador. Eso es lo que hace tan revelador el análisis: si un usuario común puede acceder a algo que no debería, hay un problema de seguridad.',
        },

        // ── Diapositiva 4: Ejemplo / Analogía ──
        {
          type: 'example',
          category: 'Analogía para Entenderlo',
          title: 'Como Revisar la Seguridad de un Colegio',
          subtitle: 'Imagina que contratan a alguien para evaluar la seguridad del colegio:',
          icon: '🏫',
          description: 'Un análisis interior es como si alguien ingresara al colegio como un estudiante normal y probara: ¿puede entrar a la sala de profesores? ¿Puede acceder a las notas de otros estudiantes en el sistema? ¿Puede usar la red del colegio para descargar cosas no permitidas?',
          analogy: '**La clave es que no fuerza nada**: usa las mismas credenciales que cualquier estudiante o empleado. Si logra acceder a información que no le corresponde, significa que el colegio tiene una falla de seguridad.',
          features: [
            '**En un colegio**: ¿Un estudiante puede ver las notas de otros en el sistema?',
            '**En una empresa**: ¿Un empleado puede leer documentos de otros departamentos?',
            '**En una red**: ¿Un usuario puede instalar programas no autorizados?',
          ],
          teacherNotes: 'La analogía del colegio conecta directamente con la experiencia de los estudiantes. Pregunte: "¿Creen que podrían acceder a cosas que no deberían en la red del colegio?" Sin revelar detalles técnicos, esto genera reflexión.',
        },

        // ── Diapositiva 5: Diagrama — Los tipos de pruebas ──
        {
          type: 'diagram',
          category: 'Visión General',
          title: 'Tipos de Pruebas de un Análisis Interior',
          subtitle: 'El análisis interior se compone de varias pruebas, cada una evalúa un aspecto diferente:',
          diagramType: 'comparison',
          columns: [
            {
              badge: '1-2',
              title: 'Privacidad y Aplicaciones',
              desc: 'Cómo se gestiona la **información personal** y la seguridad de las **aplicaciones web internas**.',
            },
            {
              badge: '3-4',
              title: 'Intrusos y Contingencia',
              desc: 'Rendimiento de los **sistemas de detección** y los **recursos mínimos** para mantener la operación.',
            },
            {
              badge: '5-6-7',
              title: 'Contraseñas, DoS y Políticas',
              desc: '**Robustez** de las claves, **resistencia a sobrecarga** y coherencia de las **políticas de seguridad**.',
            },
          ],
          teacherNotes: 'Esta diapositiva es un mapa general. En las siguientes diapositivas se profundiza cada tipo de prueba por separado.',
        },

        // ── Diapositiva 6: Revisión de la privacidad ──
        {
          type: 'concept',
          category: 'Prueba 1',
          title: 'Revisión de la Privacidad',
          mainIdea: 'Evalúa cómo se **gestiona desde el punto de vista ético y legal** el almacenamiento, transmisión y control de la información de los usuarios.',
          definition: 'El analista se centra en cómo se gestiona la información que todos los usuarios típicos o los empleados utilizan día a día. ¿Está protegida correctamente? ¿Quién puede acceder a ella?',
          analogy: '**Ejemplo:** Si en una empresa cualquier empleado puede ver los salarios, direcciones y números de teléfono de todos los demás, existe un problema de privacidad.',
          keyPoints: [
            'Verifica si los **datos personales** están debidamente protegidos.',
            'Revisa quién tiene **acceso** a información sensible.',
            'Evalúa si la información se **transmite de forma segura** (por ejemplo, cifrada).',
          ],
          teacherNotes: 'Relacione con la vida cotidiana: "¿Les gustaría que cualquier compañero del colegio pudiera ver sus notas, dirección o número de teléfono sin su permiso?" Esto ilustra la importancia de la privacidad.',
        },

        // ── Diapositiva 7: Testeo de aplicaciones de internet ──
        {
          type: 'concept',
          category: 'Prueba 2',
          title: 'Testeo de Aplicaciones de Internet',
          mainIdea: 'Busca **fallas de seguridad en las aplicaciones web** que los usuarios utilizan dentro de la red interna.',
          definition: 'Se realizan técnicas de análisis de software para encontrar fallas de seguridad en aplicaciones cliente-servidor. Como se está realizando un análisis interno, se prueban las aplicaciones que son accedidas por los usuarios dentro de la red.',
          analogy: '**Ejemplo:** Un sistema escolar donde los profesores ingresan notas por el navegador. ¿Qué pasa si alguien manipula la dirección web para acceder a notas de otro grupo?',
          keyPoints: [
            'Se prueban las **aplicaciones accedidas internamente** por los usuarios.',
            'Se utilizan **técnicas de análisis de software** para encontrar vulnerabilidades.',
            'Se buscan fallas en la comunicación entre el **cliente** (navegador) y el **servidor**.',
          ],
          teacherNotes: 'Explique brevemente qué es una aplicación cliente-servidor: "Es como cuando usas una app en tu navegador que se conecta a un servidor de la empresa para mostrar información." Los estudiantes ya usan este tipo de aplicaciones (plataformas académicas, por ejemplo).',
        },

        // ── Diapositiva 8: Detección de intrusos ──
        {
          type: 'concept',
          category: 'Prueba 3',
          title: 'Testeo del Sistema de Detección de Intrusos',
          mainIdea: 'Evalúa el **rendimiento** de los sistemas que identifican intentos de acceso no autorizado a la red.',
          definition: 'Este análisis se enfoca en la parte del rendimiento de los sistemas de identificación de intrusos. La mayor parte no se puede llevar a cabo adecuadamente sin acceder a los registros del sistema.',
          analogy: '**Ejemplo:** Imagina una cámara de seguridad que además de grabar, activa una alarma cuando alguien intenta entrar a un área restringida. ¿Realmente funciona?',
          keyPoints: [
            'Se necesita acceder a los **registros (logs)** del sistema de detección.',
            'Se evalúa si detecta correctamente las **actividades sospechosas**.',
            'Se verifica la **velocidad de respuesta** del sistema ante amenazas.',
          ],
          teacherNotes: 'Use la analogía de la cámara de seguridad con alarma. Los estudiantes pueden entender que no basta con tener un sistema: hay que verificar que funcione correctamente.',
        },

        // ── Diapositiva 9: Medidas de contingencia ──
        {
          type: 'concept',
          category: 'Prueba 4',
          title: 'Testeo de Medidas de Contingencia',
          mainIdea: 'Mide los **recursos mínimos necesarios** para que el sistema siga funcionando y verifica los mecanismos de protección.',
          definition: 'Se debe medir el mínimo de recursos necesarios que se necesitan en el subsistema para realizar las tareas y verificar la detección de medidas presentes para la detección de intentos de acceso a recursos protegidos.',
          analogy: '**Ejemplo:** Si el servidor principal se cae, ¿la empresa puede seguir trabajando? ¿Cuánto tarda en activarse el plan de respaldo?',
          keyPoints: [
            'Identifica los **recursos mínimos** para mantener el sistema operativo.',
            'Verifica que existan **planes de respaldo** y recuperación.',
            'Evalúa la **detección de intentos de acceso** a recursos protegidos.',
          ],
          teacherNotes: 'Compare con el simulacro de evacuación del colegio: "Si ocurre una emergencia, ¿todos saben qué hacer? El testeo de contingencia es lo mismo, pero para los sistemas informáticos."',
        },

        // ── Diapositiva 10: Pregunta intermedia ──
        {
          type: 'question',
          question: '¿Cuál es la diferencia entre un sistema de detección de intrusos y las medidas de contingencia?',
          context: 'Piensa: uno se encarga de DETECTAR amenazas y el otro de RESPONDER cuando algo sale mal...',
          options: [
            'El sistema de detección identifica intrusos; las medidas de contingencia preparan la respuesta ante fallas',
            'Son exactamente lo mismo, solo cambia el nombre',
            'Las medidas de contingencia detectan virus y el sistema de detección crea copias de seguridad',
          ],
          answer: 'El sistema de detección identifica intrusos; las medidas de contingencia preparan la respuesta ante fallas.',
          explanation: 'El **sistema de detección de intrusos** identifica actividades sospechosas y alerta. Las **medidas de contingencia** aseguran que el sistema pueda seguir funcionando o recuperarse cuando algo falla.',
          teacherNotes: 'Use esta pregunta para verificar la comprensión de los estudiantes. Pida opiniones antes de revelar. La diferencia clave es: detectar ≠ responder.',
        },

        // ── Diapositiva 11: Descifrado de contraseñas ──
        {
          type: 'concept',
          category: 'Prueba 5',
          title: 'Descifrado de Contraseñas',
          mainIdea: 'Valida **qué tan robusta es una contraseña** a través del uso de herramientas automáticas de recuperación.',
          definition: 'Descifrar las contraseñas es el proceso de validar cuán robusta puede ser una clave, usando herramientas de recuperación de contraseñas de manera automática, dejando al descubierto algoritmos criptográficos débiles o contraseñas débiles debido a factores humanos.',
          analogy: '**Ejemplo:** Si tu contraseña es "123456" o "colegio2026", una herramienta la descifra en segundos. Si es "Kx#9pL!m2z", podría tardar años.',
          keyPoints: [
            'Las herramientas prueban **miles de combinaciones por segundo**.',
            'Descubren **algoritmos de cifrado mal implementados** en el sistema.',
            'Revelan **contraseñas débiles** creadas por factor humano (contraseñas fáciles de adivinar).',
          ],
          teacherNotes: 'Este es un buen momento para hablar de buenas prácticas de contraseñas. Pregunte: "¿Su contraseña del correo sería fácil de descifrar?" Pueden reflexionar sin revelar sus contraseñas.',
        },

        // ── Diapositiva 12: Denegación de servicios ──
        {
          type: 'concept',
          category: 'Prueba 6',
          title: 'Testeo de Denegación de Servicios (DoS)',
          mainIdea: 'Evalúa qué sucede cuando el sistema recibe una **carga excesiva** que le impide funcionar correctamente.',
          definition: 'La denegación de servicio es una situación donde una circunstancia, sea intencional o accidental, previene al sistema de funcionar como fue diseñado. Normalmente se produce por carga excesiva o abuso de recursos por parte de los usuarios.',
          analogy: '**Ejemplo:** Imagina que 500 estudiantes intentan conectarse al Wi-Fi del colegio al mismo tiempo. El sistema se satura y nadie puede navegar.',
          keyPoints: [
            'Puede ser **intencional** (un ataque deliberado) o **accidental** (sobrecarga).',
            'Se necesita **apoyo adicional** de la organización para monitorear el análisis.',
            'Requiere **colaboración con otros analistas** de seguridad.',
          ],
          teacherNotes: 'Explique que un ataque DoS no "hackea" el sistema: lo satura hasta que deja de funcionar. Use el ejemplo de cuando una página web se cae porque demasiadas personas intentan acceder al mismo tiempo.',
        },

        // ── Diapositiva 13: Evaluación de políticas ──
        {
          type: 'concept',
          category: 'Prueba 7',
          title: 'Evaluación de Políticas de Seguridad',
          mainIdea: 'Verifica si las **reglas de seguridad escritas** de la organización están alineadas con la realidad de sus operaciones.',
          definition: 'La evaluación de políticas tiene dos funciones: primero, analizar si lo escrito coincide con el estado actual de las conexiones; segundo, asegurar que la política esté incluida dentro de las justificaciones del negocio de la organización.',
          analogy: '**Ejemplo:** Si una empresa prohíbe el uso de internet pero necesita internet para vender sus productos, esa política no tiene sentido y debe modificarse.',
          keyPoints: [
            'Las políticas deben **coincidir con la realidad** del sistema.',
            'Deben estar **alineadas con los objetivos** de la organización.',
            'Una política que contradice las necesidades del negocio es **contraproducente**.',
          ],
          teacherNotes: 'Conecte con el colegio: "¿Todas las reglas del manual de convivencia tienen sentido? ¿Alguna se contradice con lo que realmente ocurre?"',
        },

        // ── Diapositiva 14: Tabla resumen ──
        {
          type: 'diagram',
          category: 'Resumen de las Pruebas',
          title: 'Comparativa de Pruebas Internas',
          subtitle: 'Cada prueba protege un aspecto diferente de la organización:',
          diagramType: 'table',
          tableHeaders: ['Prueba', 'Qué evalúa', 'Ejemplo rápido'],
          tableRows: [
            ['Privacidad', 'Gestión de datos personales', '¿Quién puede ver los salarios?'],
            ['Aplicaciones web', 'Seguridad de apps internas', '¿Se puede manipular la URL?'],
            ['Detección de intrusos', 'Rendimiento del sistema IDS', '¿Suena la alarma digital?'],
            ['Contingencia', 'Respuesta ante fallas', '¿Hay servidor de respaldo?'],
            ['Contraseñas', 'Robustez de las claves', '¿"123456" es tu clave?'],
            ['Denegación (DoS)', 'Resistencia a sobrecarga', '¿Soporta 500 usuarios a la vez?'],
            ['Políticas', 'Coherencia de las reglas', '¿Las reglas tienen sentido?'],
          ],
          teacherNotes: 'Repase la tabla fila por fila. Pregunte si algún estudiante puede explicar una prueba con sus propias palabras.',
        },

        // ── Diapositiva 15: Verdadero o Falso ──
        {
          type: 'trueFalse',
          title: 'Verdadero o Falso',
          tfTitle: 'Evalúa cada afirmación sobre el análisis interior:',
          statements: [
            {
              id: 'tf1',
              text: 'Un análisis interior se realiza con herramientas de hacking avanzadas.',
              isTrue: false,
              feedback: {
                correct: '¡Correcto! Se realiza con una cuenta de usuario normal, no con herramientas de hacking.',
                incorrect: 'No es así. El análisis interior se realiza con una **cuenta de usuario normal** proporcionada por la organización, sin herramientas especiales.',
              },
            },
            {
              id: 'tf2',
              text: 'Un ataque de denegación de servicios (DoS) roba información del sistema.',
              isTrue: false,
              feedback: {
                correct: '¡Correcto! Un ataque DoS no roba información; satura el sistema hasta que deja de funcionar.',
                incorrect: 'Un ataque DoS no roba información. Lo que hace es **saturar el sistema** con una carga excesiva hasta que deja de funcionar correctamente.',
              },
            },
            {
              id: 'tf3',
              text: 'Las políticas de seguridad deben estar alineadas con los objetivos del negocio.',
              isTrue: true,
              feedback: {
                correct: '¡Exacto! Una política que contradice las necesidades del negocio es contraproducente.',
                incorrect: 'Es verdadera. Las políticas de seguridad deben tener sentido dentro del contexto de la organización y estar **alineadas con sus objetivos**.',
              },
            },
            {
              id: 'tf4',
              text: 'Si una contraseña tiene muchos caracteres, siempre es segura.',
              isTrue: false,
              feedback: {
                correct: '¡Correcto! Una contraseña como "aaaaaaaaaa" es larga pero extremadamente débil.',
                incorrect: 'No necesariamente. "aaaaaaaaaa" tiene 10 caracteres pero es muy fácil de descifrar. La seguridad depende de la **combinación de letras, números y símbolos**, no solo de la longitud.',
              },
            },
          ],
          teacherNotes: 'Pida a los estudiantes que justifiquen sus respuestas antes de revelar la retroalimentación. Esto promueve el razonamiento.',
        },

        // ── Diapositiva 16: Quiz interactivo ──
        {
          type: 'quiz',
          title: 'Comprobación de Aprendizaje',
          description: 'Responde las preguntas para verificar lo que aprendiste hoy.',
          quizTitle: '¿Qué tanto aprendimos sobre análisis interior?',
          questions: [
            {
              id: 'q1',
              question: '¿Con qué tipo de cuenta se realiza un análisis interior?',
              options: ['Cuenta de administrador del sistema', 'Cuenta de usuario normal', 'Sin cuenta, se accede directamente al servidor'],
              correctIndex: 1,
              feedback: {
                correct: '¡Correcto! Se usa una cuenta de usuario normal para evaluar los privilegios reales.',
                incorrect: 'Recuerda: el análisis interior se realiza con una **cuenta de usuario normal** proporcionada por la organización.',
              },
            },
            {
              id: 'q2',
              question: '¿Qué evalúa la revisión de privacidad?',
              options: ['La velocidad de la red', 'Cómo se gestiona la información personal de los usuarios', 'La cantidad de computadores disponibles'],
              correctIndex: 1,
              feedback: {
                correct: '¡Exacto! Evalúa cómo se almacena, transmite y controla la información personal.',
                incorrect: 'La revisión de privacidad evalúa cómo se **gestiona la información personal** de los usuarios: si está protegida, quién puede acceder a ella y cómo se transmite.',
              },
            },
            {
              id: 'q3',
              question: 'Si una herramienta descifra tu contraseña en 3 segundos, ¿qué significa?',
              options: ['La herramienta es muy poderosa', 'Tu contraseña es muy débil', 'El sistema no tiene seguridad'],
              correctIndex: 1,
              feedback: {
                correct: '¡Exacto! Una contraseña que se descifra rápidamente es una contraseña débil.',
                incorrect: 'Si una herramienta la descifra tan rápido, significa que **tu contraseña es débil** y necesitas crear una más robusta.',
              },
            },
          ],
          teacherNotes: 'Pida que diferentes estudiantes respondan cada pregunta. Aproveche la retroalimentación para reforzar conceptos.',
        },

        // ── Diapositiva 17: Actividad práctica ──
        {
          type: 'activity',
          title: 'Actividad: "Inspectores de Seguridad del Colegio"',
          activityTitle: 'Instrucciones de la actividad:',
          icon: '🔍',
          instructions: 'En grupos de 3, imaginen que son analistas de seguridad contratados para evaluar el colegio. Analicen cada aspecto:',
          steps: [
            '¿Qué información del colegio debería estar protegida? (Prueba de privacidad)',
            '¿Qué aplicaciones del colegio podrían tener fallas de seguridad? (Testeo de aplicaciones)',
            '¿Qué pasaría si todos los estudiantes se conectan al Wi-Fi al mismo tiempo? (Prueba de denegación de servicios)',
            '¿Existe alguna regla del colegio que no tenga sentido o que se contradiga con la realidad? (Evaluación de políticas)',
          ],
          tip: 'No necesitan herramientas técnicas. Analicen con lógica y sentido común, aplicando lo que aprendieron hoy.',
          teacherNotes: 'Dé 10 minutos para el trabajo en grupos. Luego pida a 2 grupos que presenten sus hallazgos. Esta actividad conecta los conceptos técnicos con el entorno cotidiano de los estudiantes.',
        },

        // ── Diapositiva 18: Resumen ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Lo más importante de hoy:',
          points: [
            'Un **análisis interior** evalúa la seguridad de una organización desde la perspectiva de un usuario normal.',
            'Se compone de varias pruebas: **privacidad, aplicaciones web, detección de intrusos, contingencia, contraseñas, denegación de servicios y políticas**.',
            'Las **contraseñas débiles** son una de las vulnerabilidades más comunes y fáciles de explotar.',
            'Las **políticas de seguridad** deben ser coherentes con los objetivos reales de la organización.',
            'La seguridad interna es tan importante como protegerse de amenazas externas.',
          ],
          teacherNotes: 'Haga una breve síntesis oral de 2 minutos. Puede preguntar: "¿Cuál de las pruebas les pareció más interesante y por qué?"',
        },
      ],
    },
  ],
}
