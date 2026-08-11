/**
 * Contenido educativo — Grado 8.º Grupo 1
 * Tema: Análisis Interior (Seguridad Informática)
 *
 * Fuente: cursos/8/8-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel progresivo para 8.º grado.
 */

export const course8_1 = {
  title: 'Análisis Interior',
  description: 'Presentación interactiva sobre el análisis de vulnerabilidades internas en una organización: los 7 tipos de pruebas de seguridad que se realizan desde adentro.',
  lessons: [
    {
      id: 'analisis-interior',
      title: 'Análisis Interior',
      description: 'Presentación académica guiada para la clase presencial de 8.º grado.',
      slides: [
        // ── Diapositiva 1: Título y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 8.º — Grupo 1',
          title: 'Análisis Interior',
          subtitle: '¿Qué tan segura es una organización vista desde adentro?',
          objectives: [
            'Explicar qué es un análisis interior y por qué es necesario.',
            'Identificar los 7 tipos de pruebas de seguridad interna.',
            'Comprender cómo cada prueba ayuda a proteger una organización.',
          ],
          teacherNotes: '**Sugerencia de inicio:** Pregunte al grupo si creen que un empleado podría acceder a información que no le corresponde dentro de una empresa. Use este punto para introducir la importancia de analizar la seguridad desde adentro.',
        },

        // ── Diapositiva 2: Pregunta introductoria ──
        {
          type: 'question',
          question: '¿Quién es más peligroso para la seguridad de una empresa: un hacker externo o un empleado con malas prácticas?',
          context: 'Piensa en alguien que ya tiene acceso al computador de la empresa, a la red interna y a los archivos del día a día...',
          options: [
            'Un hacker externo, porque tiene herramientas avanzadas',
            'Un empleado, porque ya tiene acceso desde adentro',
            'Ambos representan riesgos diferentes',
          ],
          answer: 'Ambos representan riesgos diferentes, pero el acceso interno facilita enormemente un ataque.',
          explanation: 'Por eso existe el **análisis interior**: para evaluar hasta dónde puede llegar alguien que ya está dentro de la organización.',
          teacherNotes: 'Permita que 2 o 3 estudiantes den su opinión antes de revelar la respuesta. Resalte que muchos ataques exitosos provienen de dentro de las organizaciones.',
        },

        // ── Diapositiva 3: Concepto principal ──
        {
          type: 'concept',
          category: 'Concepto Fundamental',
          title: '¿Qué es un Análisis Interior?',
          mainIdea: 'Es una evaluación que busca demostrar **hasta dónde puede llegar un usuario común** dentro de la red de una organización.',
          definition: 'Antes de continuar con un análisis de vulnerabilidad completo, se debe verificar qué puede hacer un usuario típico con los privilegios normales que la empresa le otorga.',
          keyPoints: [
            'Se realiza con una cuenta de usuario normal (no de administrador).',
            'La organización proporciona un computador con usuario y contraseña.',
            'Busca encontrar debilidades internas antes de que alguien las explote.',
          ],
          teacherNotes: 'Enfatice que el analista no usa herramientas de hacker: usa exactamente lo que la empresa le da a cualquier empleado. Eso es lo que lo hace tan revelador.',
        },

        // ── Diapositiva 4: Ejemplo / Analogía ──
        {
          type: 'example',
          category: 'Analogía para Entenderlo',
          title: 'Como una Inspección de Seguridad en un Edificio',
          subtitle: 'Imagina que eres un inspector revisando un edificio desde adentro:',
          icon: '🏢',
          description: 'Un análisis interior es como contratar a alguien para que entre como un empleado normal y compruebe: ¿puede acceder a pisos restringidos? ¿Puede leer documentos confidenciales? ¿Puede usar la red para cosas no permitidas?',
          analogy: '**El inspector no fuerza cerraduras**: usa las mismas llaves y credenciales que cualquier empleado. Si logra acceder a información sensible, significa que hay una falla de seguridad.',
          features: [
            '**En un edificio**: ¿Puede un empleado entrar a la oficina del gerente sin permiso?',
            '**En una red**: ¿Puede un usuario acceder a carpetas que no le corresponden?',
            '**En un sistema**: ¿Puede un empleado instalar programas no autorizados?',
          ],
          teacherNotes: 'Use la analogía del edificio para que los estudiantes visualicen el concepto. Pregunte: "¿En el colegio, todos los estudiantes pueden entrar a la sala de profesores?"',
        },

        // ── Diapositiva 5: Diagrama — Los 7 tipos de pruebas ──
        {
          type: 'diagram',
          category: 'Visión General',
          title: 'Los 7 Tipos de Pruebas Internas',
          subtitle: 'Cada prueba evalúa un aspecto diferente de la seguridad interna:',
          diagramType: 'comparison',
          columns: [
            {
              badge: '1-2',
              title: 'Privacidad y Apps Web',
              desc: 'Cómo se gestiona la información personal y la seguridad de las aplicaciones internas.',
            },
            {
              badge: '3-4',
              title: 'Intrusos y Contingencia',
              desc: 'Sistemas de detección de intrusos y recursos mínimos para mantener la operación.',
            },
            {
              badge: '5-6-7',
              title: 'Contraseñas, DoS y Políticas',
              desc: 'Robustez de claves, resistencia a sobrecarga y evaluación de las políticas de seguridad.',
            },
          ],
          teacherNotes: 'Esta diapositiva sirve como mapa general. En las siguientes diapositivas profundizaremos cada tipo de prueba.',
        },

        // ── Diapositiva 6: Revisión de la privacidad ──
        {
          type: 'concept',
          category: 'Prueba 1 de 7',
          title: 'Revisión de la Privacidad',
          mainIdea: 'Evalúa cómo se **almacena, transmite y controla** la información personal de los empleados y usuarios.',
          definition: 'El analista se centra en verificar si la organización maneja correctamente los datos personales desde el punto de vista ético y legal.',
          analogy: '**Ejemplo:** ¿Los datos de los empleados (dirección, teléfono, salario) están protegidos o cualquiera en la red puede verlos?',
          keyPoints: [
            'Verifica el cumplimiento de leyes de protección de datos.',
            'Revisa quién tiene acceso a información personal.',
            'Evalúa cómo se transmite la información (¿está cifrada?).',
          ],
          teacherNotes: 'Relacione con la vida cotidiana: "¿Les gustaría que cualquier compañero pudiera ver sus notas, dirección o número de teléfono sin permiso?"',
        },

        // ── Diapositiva 7: Testeo de aplicaciones de internet ──
        {
          type: 'concept',
          category: 'Prueba 2 de 7',
          title: 'Testeo de Aplicaciones de Internet',
          mainIdea: 'Busca **fallas de seguridad** en las aplicaciones web que los empleados utilizan dentro de la red.',
          definition: 'Se aplican técnicas de análisis de software para encontrar vulnerabilidades en aplicaciones cliente-servidor accedidas internamente.',
          analogy: '**Ejemplo:** Un sistema interno de gestión de inventario que funciona en el navegador. ¿Qué pasa si un empleado manipula la URL para acceder a datos de otro departamento?',
          keyPoints: [
            'Se prueban las aplicaciones accedidas por usuarios dentro de la red.',
            'Se utilizan técnicas de análisis de software.',
            'Se buscan fallas en la arquitectura cliente-servidor.',
          ],
          teacherNotes: 'Explique qué es una aplicación cliente-servidor con un ejemplo simple: "Es como cuando usas una app en tu navegador que se conecta a un servidor de la empresa para mostrar datos."',
        },

        // ── Diapositiva 8: Detección de intrusos ──
        {
          type: 'concept',
          category: 'Prueba 3 de 7',
          title: 'Testeo de Sistemas de Detección de Intrusos',
          mainIdea: 'Evalúa el **rendimiento** de los sistemas que identifican accesos sospechosos o no autorizados.',
          definition: 'Se analiza si los sistemas de identificación de intrusos (IDS) detectan correctamente actividades anómalas, accediendo a sus registros internos.',
          analogy: '**Ejemplo:** Es como probar si la alarma de un edificio realmente suena cuando alguien intenta entrar a un área restringida.',
          keyPoints: [
            'Se necesita acceder a los registros (logs) del sistema IDS.',
            'Se evalúa si detecta correctamente las amenazas.',
            'Se verifica la velocidad de respuesta del sistema.',
          ],
          teacherNotes: 'Explique IDS con la analogía de una cámara de seguridad que no solo graba, sino que además activa una alarma cuando detecta algo extraño.',
        },

        // ── Diapositiva 9: Medidas de contingencia ──
        {
          type: 'concept',
          category: 'Prueba 4 de 7',
          title: 'Testeo de Medidas de Contingencia',
          mainIdea: 'Determina los **recursos mínimos necesarios** para que el sistema siga funcionando ante una emergencia.',
          definition: 'Se mide qué tan preparado está el sistema para responder ante fallas, verificando los mecanismos de detección de intentos de acceso a recursos protegidos.',
          analogy: '**Ejemplo:** Si el servidor principal se cae, ¿la empresa puede seguir trabajando con un servidor de respaldo? ¿Cuánto tarda en activarse?',
          keyPoints: [
            'Identifica los recursos mínimos para mantener la operación.',
            'Verifica planes de respaldo y recuperación.',
            'Evalúa la detección de accesos no autorizados.',
          ],
          teacherNotes: 'Compare con un plan de evacuación del colegio: "Si hay un simulacro, ¿todos saben qué hacer? Un testeo de contingencia es parecido, pero para los sistemas informáticos."',
        },

        // ── Diapositiva 10: Pregunta intermedia ──
        {
          type: 'question',
          question: '¿Qué diferencia hay entre un sistema de detección de intrusos y un testeo de contingencia?',
          context: 'Piensa: uno se encarga de DETECTAR amenazas y el otro de RESPONDER cuando algo sale mal...',
          options: [
            'El IDS detecta intrusos; la contingencia prepara la respuesta ante fallas',
            'Son exactamente lo mismo',
            'La contingencia detecta virus y el IDS crea respaldos',
          ],
          answer: 'El IDS detecta intrusos; la contingencia prepara la respuesta ante fallas.',
          explanation: 'El **sistema de detección de intrusos** identifica actividades sospechosas. Las **medidas de contingencia** aseguran que el sistema pueda recuperarse cuando algo falla.',
          teacherNotes: 'Use esta pregunta intermedia para verificar que los estudiantes distinguen entre detección y respuesta. Abra el debate antes de revelar.',
        },

        // ── Diapositiva 11: Descifrado de contraseñas ──
        {
          type: 'concept',
          category: 'Prueba 5 de 7',
          title: 'Descifrado de Contraseñas',
          mainIdea: 'Valida **qué tan robustas** son las contraseñas de los usuarios, usando herramientas automáticas de recuperación.',
          definition: 'Se utilizan herramientas especializadas para intentar descifrar las contraseñas de los usuarios, descubriendo algoritmos criptográficos débiles o contraseñas inseguras creadas por factor humano.',
          analogy: '**Ejemplo:** Si tu contraseña es "123456" o "colegio2026", una herramienta automática la descifra en segundos. Pero si es "Tr#9kL!p2x", puede tardar años.',
          keyPoints: [
            'Las herramientas automáticas prueban miles de combinaciones por segundo.',
            'Descubre algoritmos de cifrado mal implementados.',
            'Revela contraseñas débiles creadas por los usuarios.',
          ],
          teacherNotes: 'Este es un buen momento para hablar de buenas prácticas de contraseñas. Pregunte a los estudiantes si sus contraseñas personales serían fáciles de descifrar.',
        },

        // ── Diapositiva 12: Denegación de servicios ──
        {
          type: 'concept',
          category: 'Prueba 6 de 7',
          title: 'Testeo de Denegación de Servicios (DoS)',
          mainIdea: 'Evalúa qué sucede cuando el sistema recibe una **carga excesiva** que impide su funcionamiento normal.',
          definition: 'La denegación de servicio (DoS) es una situación donde el sistema no puede funcionar como fue diseñado, ya sea por sobrecarga intencional, accidental o por abuso de recursos por parte de los usuarios.',
          analogy: '**Ejemplo:** Imagina que 500 personas intentan entrar al mismo tiempo por una puerta diseñada para 10 personas. El sistema se "traba" y nadie puede pasar.',
          keyPoints: [
            'Puede ser intencional (ataque) o accidental (sobrecarga).',
            'Se necesita apoyo adicional de la organización para monitorear.',
            'Requiere colaboración con otros analistas de seguridad.',
          ],
          teacherNotes: 'Explique que un ataque DoS no "hackea" el sistema, sino que lo satura hasta que deja de funcionar. Use el ejemplo de cuando un sitio web se cae en un Black Friday por el exceso de visitas.',
        },

        // ── Diapositiva 13: Evaluación de políticas de seguridad ──
        {
          type: 'concept',
          category: 'Prueba 7 de 7',
          title: 'Evaluación de Políticas de Seguridad',
          mainIdea: 'Verifica si las **reglas de seguridad escritas** de la organización están alineadas con la realidad de sus operaciones.',
          definition: 'Se evalúan dos aspectos: primero, si las políticas escritas coinciden con el estado actual de las conexiones y sistemas; segundo, si las políticas tienen sentido dentro de los objetivos del negocio.',
          analogy: '**Ejemplo:** Si una empresa prohíbe el uso de internet pero necesita internet para vender sus productos, esa política no tiene sentido y debe modificarse.',
          keyPoints: [
            'Las políticas deben coincidir con la realidad del sistema.',
            'Deben estar alineadas con los objetivos del negocio.',
            'Una política absurda es peor que no tener política.',
          ],
          teacherNotes: 'Use el ejemplo del manual de convivencia del colegio: ¿Todas las reglas tienen sentido? ¿Alguna se contradice con lo que realmente ocurre?',
        },

        // ── Diapositiva 14: Tabla resumen comparativa ──
        {
          type: 'diagram',
          category: 'Resumen de las 7 Pruebas',
          title: 'Comparativa de Pruebas Internas',
          subtitle: 'Cada prueba protege un aspecto diferente de la organización:',
          diagramType: 'table',
          tableHeaders: ['Prueba', 'Qué evalúa', 'Ejemplo rápido'],
          tableRows: [
            ['Privacidad', 'Manejo de datos personales', '¿Quién puede ver los salarios?'],
            ['Apps de Internet', 'Seguridad de aplicaciones web', '¿Se puede manipular la URL?'],
            ['Detección de intrusos', 'Eficacia del sistema IDS', '¿Suena la alarma digital?'],
            ['Contingencia', 'Respuesta ante fallas', '¿Existe un servidor de respaldo?'],
            ['Contraseñas', 'Robustez de las claves', '¿"123456" sigue siendo tu clave?'],
            ['Denegación (DoS)', 'Resistencia a sobrecarga', '¿Aguanta 500 usuarios a la vez?'],
            ['Políticas', 'Coherencia de las reglas', '¿Las reglas tienen sentido?'],
          ],
          teacherNotes: 'Repase la tabla fila por fila para consolidar los 7 tipos. Pregunte si algún estudiante puede explicar una prueba con sus propias palabras.',
        },

        // ── Diapositiva 15: Quiz interactivo ──
        {
          type: 'quiz',
          title: 'Comprobación de Aprendizaje',
          description: 'Responde las preguntas para verificar lo que aprendiste hoy.',
          quizTitle: '¿Qué tanto aprendimos sobre análisis interior?',
          questions: [
            {
              id: 'q1',
              question: '¿Con qué tipo de cuenta se realiza un análisis interior?',
              options: ['Cuenta de administrador', 'Cuenta de usuario normal', 'Sin cuenta, se hackea el sistema'],
              correctIndex: 1,
              feedback: {
                correct: '¡Correcto! Se usa una cuenta de usuario normal para evaluar los privilegios reales.',
                incorrect: 'Recuerda: el análisis interior se realiza con una **cuenta de usuario normal** proporcionada por la organización.',
              },
            },
            {
              id: 'q2',
              question: 'Si una herramienta descifra tu contraseña en 3 segundos, ¿qué significa?',
              options: ['La herramienta es muy buena', 'Tu contraseña es muy débil', 'El sistema no tiene seguridad'],
              correctIndex: 1,
              feedback: {
                correct: '¡Exacto! Una contraseña que se descifra rápidamente es una contraseña débil.',
                incorrect: 'Si una herramienta la descifra tan rápido, significa que **tu contraseña es débil** y necesitas crear una más segura.',
              },
            },
            {
              id: 'q3',
              question: 'Un ataque DoS hace que un sistema deje de funcionar porque...',
              options: ['Borra todos los archivos', 'Lo satura con una carga excesiva', 'Cambia todas las contraseñas'],
              correctIndex: 1,
              feedback: {
                correct: '¡Muy bien! El ataque DoS satura el sistema hasta que no puede responder.',
                incorrect: 'El ataque DoS no borra ni modifica datos: **satura el sistema con una carga excesiva** hasta que deja de funcionar.',
              },
            },
          ],
          teacherNotes: 'Pida que diferentes estudiantes respondan cada pregunta. Aproveche la retroalimentación para reforzar conceptos.',
        },

        // ── Diapositiva 16: Actividad práctica ──
        {
          type: 'activity',
          title: 'Actividad en Clase: "Inspector de Seguridad"',
          activityTitle: 'Instrucciones de la actividad:',
          icon: '🔍',
          instructions: 'En grupos de 3, imaginen que son analistas de seguridad contratados para evaluar el colegio. Respondan:',
          steps: [
            '¿Qué información personal del colegio debería estar protegida? (Prueba de privacidad)',
            '¿Qué pasaría si todos los estudiantes intentan entrar al Wi-Fi al mismo tiempo? (Prueba DoS)',
            '¿Qué regla del colegio consideran que no tiene sentido o se contradice con la realidad? (Evaluación de políticas)',
          ],
          tip: 'No necesitan herramientas técnicas. Solo analicen con lógica y sentido común.',
          teacherNotes: 'Dé 10 minutos para el trabajo en grupos. Luego pida a 2 grupos que presenten sus hallazgos. Esto conecta el contenido técnico con su entorno cotidiano.',
        },

        // ── Diapositiva 17: Resumen ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Lo que no debes olvidar hoy:',
          points: [
            'Un **análisis interior** evalúa la seguridad de una organización desde la perspectiva de un usuario normal.',
            'Existen **7 tipos de pruebas**: privacidad, aplicaciones web, detección de intrusos, contingencia, contraseñas, denegación de servicios y políticas.',
            'Las **contraseñas débiles** son una de las vulnerabilidades más comunes y fáciles de explotar.',
            'Las **políticas de seguridad** deben ser coherentes con los objetivos reales del negocio.',
          ],
          teacherNotes: 'Haga una breve síntesis oral de 2 minutos. Puede preguntar: "¿Cuál de las 7 pruebas les pareció más interesante y por qué?"',
        },
      ],
    },
  ],
}
