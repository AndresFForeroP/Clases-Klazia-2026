/**
 * Contenido educativo — Grado 8.º Grupo 1
 * Tema: Análisis Exterior (Seguridad Informática)
 *
 * Fuente: cursos/8/8-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel progresivo para 8.º grado.
 */

export const course8_1 = {
  title: 'Análisis Exterior',
  description: 'Presentación interactiva sobre el análisis de vulnerabilidades externas: cómo se recopila información desde fuera de una organización y qué pruebas se realizan para evaluar la seguridad.',
  lessons: [
    {
      id: 'analisis-exterior',
      title: 'Análisis Exterior',
      description: 'Presentación académica guiada para la clase presencial de 8.º grado.',
      slides: [
        // ── Diapositiva 1: Portada ──
        {
          type: 'title',
          badge: 'Informática 8.º — Grupo 1',
          title: 'Análisis Exterior',
          subtitle: '¿Qué puede descubrir un atacante sin estar dentro de la organización?',
          objectives: [
            'Explicar qué es un análisis exterior y en qué se diferencia del análisis interior.',
            'Identificar los 4 métodos de recopilación de información externa.',
            'Conocer las 6 pruebas que se realizan tras la recopilación.',
            'Comprender la importancia de documentar los hallazgos.',
          ],
          teacherNotes: '**Sugerencia de inicio:** Recuerde brevemente lo visto en la clase anterior (análisis interior) y pregunte: \"Si el análisis interior se hace desde adentro, ¿cómo se analiza la seguridad desde afuera?\"',
        },

        // ── Diapositiva 2: Pregunta introductoria ──
        {
          type: 'question',
          question: '¿Un atacante necesita estar dentro de una empresa para obtener información confidencial?',
          context: 'Piensa en toda la información que una empresa publica en internet: sitio web, redes sociales, correos de contacto, nombres de empleados...',
          options: [
            'Sí, necesita entrar físicamente a la empresa',
            'No, puede obtener mucha información solo desde internet',
            'Solo puede obtener información si hackea el servidor',
          ],
          answer: 'No, puede obtener mucha información solo desde internet y con técnicas de ingeniería social.',
          explanation: 'El **análisis exterior** busca precisamente eso: evaluar qué tan fácil es obtener acceso remoto a los servidores de una organización **sin estar dentro de ella**.',
          teacherNotes: 'Permita que varios estudiantes opinen. Resalte que la mayoría de los ataques comienzan con información pública disponible en internet.',
        },

        // ── Diapositiva 3: Concepto principal ──
        {
          type: 'concept',
          category: 'Concepto Fundamental',
          title: '¿Qué es un Análisis Exterior?',
          mainIdea: 'Es una evaluación que intenta **acceder remotamente** a los servidores de una organización y obtener privilegios o permisos que no deberían estar disponibles.',
          definition: 'A diferencia del análisis interior (que se realiza con un usuario normal dentro de la red), el análisis exterior se realiza desde fuera. El objetivo es descubrir qué información y accesos puede obtener alguien que no pertenece a la organización.',
          keyPoints: [
            'Se realiza desde fuera de la organización, sin acceso previo.',
            'Puede comenzar con técnicas de ingeniería social.',
            'Busca obtener privilegios o permisos no autorizados de forma remota.',
          ],
          teacherNotes: 'Enfatice la diferencia clave: en el análisis interior se tiene una cuenta de usuario normal. En el exterior, no se tiene nada — todo debe obtenerse desde cero.',
        },

        // ── Diapositiva 4: Analogía ──
        {
          type: 'example',
          category: 'Analogía para Entenderlo',
          title: 'Como un Ladrón que Observa desde la Calle',
          subtitle: 'Imagina a alguien que quiere entrar a un edificio sin tener llaves:',
          icon: '🔭',
          description: 'Un análisis exterior es como si alguien observara un edificio desde la calle: ¿tiene cámaras de seguridad? ¿Cuántas puertas hay? ¿Qué información está visible en el letrero? ¿Hay empleados que salen a fumar y dejan la puerta abierta?',
          analogy: '**El atacante no fuerza nada al principio**: primero observa, recopila información y busca el punto más débil para intentar entrar.',
          features: [
            '**Desde la calle**: ¿Qué se puede ver del edificio sin entrar?',
            '**En internet**: ¿Qué información publica la empresa en su sitio web?',
            '**Ingeniería social**: ¿Se puede engañar a un empleado para obtener acceso?',
          ],
          teacherNotes: 'Use la analogía del edificio para que sea visual. Pregunte: \"Si alguien quisiera entrar al colegio sin permiso, ¿qué información podría obtener solo observando desde afuera?\"',
        },

        // ── Diapositiva 5: Método 1 — Inteligencia competitiva ──
        {
          type: 'concept',
          category: 'Método de Recopilación 1 de 4',
          title: 'Revisión de Inteligencia Competitiva',
          mainIdea: 'Se basa en toda la **información que la organización publica en internet**: sitio web, redes sociales, noticias, documentos públicos.',
          definition: 'El analista recopila toda la información disponible públicamente sobre la organización. Esto incluye datos en su sitio web, perfiles en redes sociales, comunicados de prensa y cualquier información accesible sin necesidad de autenticación.',
          keyPoints: [
            'Información accesible desde la presencia pública en internet.',
            'Incluye sitio web, redes sociales, directorios y noticias.',
            'No requiere ningún acceso especial: todo es público.',
          ],
          teacherNotes: 'Explique que muchas empresas publican más información de la necesaria. Por ejemplo: nombres de empleados, correos electrónicos, tecnologías que usan, organigramas.',
        },

        // ── Diapositiva 6: Método 2 — Revisión de privacidad ──
        {
          type: 'concept',
          category: 'Método de Recopilación 2 de 4',
          title: 'Revisión de la Privacidad',
          mainIdea: 'Evalúa si la organización tiene **control suficiente** sobre los datos que manejan sus empleados.',
          definition: 'Se analiza desde un punto de vista legal y ético si la organización controla adecuadamente el almacenamiento, transmisión y manejo de los datos. Si no tiene suficiente control, un empleado podría llevarse información confidencial.',
          analogy: '**Ejemplo:** Imagina que un empleado copia la base de datos de clientes en una memoria USB y se va de la empresa. Si no hay controles, nadie se enteraría.',
          keyPoints: [
            'Evalúa el control sobre los datos desde el punto de vista legal y ético.',
            'Verifica si los empleados pueden llevarse información fuera de la organización.',
            'Analiza cómo se almacenan y transmiten los datos sensibles.',
          ],
          teacherNotes: 'Relacione con situaciones cotidianas: \"¿Qué pasaría si cualquier persona pudiera copiar los exámenes del colegio y llevárselos?\" El control de datos es fundamental.',
        },

        // ── Diapositiva 7: Método 3 — Análisis de solicitud ──
        {
          type: 'concept',
          category: 'Método de Recopilación 3 de 4',
          title: 'Análisis de Solicitud',
          mainIdea: 'Consiste en obtener acceso a la organización **simplemente preguntando**, usando comunicaciones como teléfono, correo o chat.',
          definition: 'Este método se basa en la ingeniería social: el atacante se hace pasar por alguien con autoridad o confianza (un proveedor, un técnico, un directivo) para que el personal de entrada le otorgue acceso o información.',
          analogy: '**Ejemplo:** Alguien llama por teléfono diciendo: \"Soy del área de sistemas, necesito que me dé su contraseña para actualizar el sistema.\" Si el empleado la entrega, el acceso está comprometido.',
          keyPoints: [
            'Se basa completamente en ingeniería social.',
            'Usa teléfono, correo electrónico, chat u otros medios.',
            'El atacante se presenta desde una posición de autoridad o confianza.',
          ],
          teacherNotes: 'Este es un buen momento para hablar sobre por qué nunca se debe compartir una contraseña, ni siquiera si \"el jefe\" la pide por teléfono. Las empresas legítimas nunca solicitan contraseñas de esa manera.',
        },

        // ── Diapositiva 8: Método 4 — Sugerencia dirigida ──
        {
          type: 'concept',
          category: 'Método de Recopilación 4 de 4',
          title: 'Análisis de Sugerencia Dirigida',
          mainIdea: 'El atacante intenta que un empleado **ingrese a un sitio falso** o reciba un correo que instala herramientas de acceso remoto.',
          definition: 'Se envía un correo electrónico o enlace a un empleado de la organización. Si el empleado hace clic, puede instalar sin saberlo herramientas que permiten al atacante crear una sesión remota desde el exterior.',
          analogy: '**Ejemplo:** Un empleado recibe un correo que dice \"Actualice su contraseña aquí\" con un enlace falso. Al hacer clic e ingresar sus datos, el atacante ya tiene sus credenciales.',
          keyPoints: [
            'El atacante necesita que alguien dentro de la organización \"caiga en la trampa\".',
            'Usa correos electrónicos, enlaces falsos o sitios web fraudulentos.',
            'Puede instalar herramientas de acceso remoto sin que el empleado lo note.',
          ],
          teacherNotes: 'Esto es lo que comúnmente se conoce como **phishing**. Pregunte: \"¿Alguna vez les ha llegado un correo sospechoso pidiéndoles hacer clic en un enlace? ¿Cómo supieron que era falso?\"',
        },

        // ── Diapositiva 9: Tabla resumen de métodos ──
        {
          type: 'diagram',
          category: 'Resumen de Recopilación',
          title: 'Los 4 Métodos de Recopilación Externa',
          subtitle: 'Cada método obtiene información de una forma diferente:',
          diagramType: 'table',
          tableHeaders: ['Método', 'Cómo funciona', 'Ejemplo rápido'],
          tableRows: [
            ['Inteligencia competitiva', 'Buscar información pública en internet', 'Revisar el sitio web y redes sociales'],
            ['Revisión de privacidad', 'Evaluar el control sobre los datos', '¿Un empleado puede copiar la base de datos?'],
            ['Análisis de solicitud', 'Pedir acceso usando ingeniería social', 'Llamar haciéndose pasar por un técnico'],
            ['Sugerencia dirigida', 'Enviar enlaces o correos falsos (phishing)', 'Correo con enlace falso para robar contraseñas'],
          ],
          teacherNotes: 'Repase la tabla fila por fila. Pregunte: \"¿Cuál de estos métodos creen que es el más utilizado en la vida real?\" (La ingeniería social es la más común).',
        },

        // ── Diapositiva 10: Pregunta conversacional ──
        {
          type: 'question',
          question: '¿Cuál de los 4 métodos de recopilación creen que es el más peligroso y por qué?',
          context: 'Piensen: uno usa información pública, otro evalúa controles, otro pide acceso directamente y el último engaña con correos falsos...',
          options: [
            'La inteligencia competitiva, porque todo está en internet',
            'El análisis de solicitud, porque depende de la ingeniería social',
            'La sugerencia dirigida (phishing), porque engaña directamente a las personas',
          ],
          answer: 'Todos son peligrosos, pero la sugerencia dirigida (phishing) es estadísticamente la causa de la mayoría de los accesos no autorizados.',
          explanation: 'El **phishing** es responsable de más del 90% de los ataques exitosos. Por más segura que sea la tecnología, si una persona entrega sus credenciales, toda la seguridad se compromete.',
          teacherNotes: 'Abra un debate breve. No hay una respuesta única correcta, pero aproveche para enfatizar que el factor humano es generalmente el eslabón más débil de la seguridad.',
        },

        // ── Diapositiva 11: Las 6 pruebas ──
        {
          type: 'concept',
          category: 'Pruebas del Análisis Exterior',
          title: 'Las 6 Pruebas Técnicas',
          mainIdea: 'Una vez recopilada la información, se realizan **6 pruebas técnicas** para evaluar la seguridad de la organización desde el exterior.',
          definition: 'Estas pruebas permiten identificar servicios vulnerables, máquinas activas, aplicaciones con fallas de seguridad y configuraciones débiles en la red de la organización.',
          keyPoints: [
            '1. **Sondeo de red**: Descubrir dominios, IPs, servidores y mapas de red.',
            '2. **Identificación de servicios**: Encontrar servicios activos y traspasar el firewall.',
            '3. **Búsqueda de vulnerabilidades**: Detectar fallas de seguridad y errores de configuración.',
            '4. **Testeo de aplicaciones**: Buscar fallas en las aplicaciones web accesibles.',
            '5. **Relaciones de confianza**: Verificar quién tiene permiso de acceder a la red.',
            '6. **Verificación inalámbrica**: Evaluar la seguridad del Wi-Fi y los puntos de acceso.',
          ],
          teacherNotes: 'No es necesario profundizar en cada prueba técnicamente. Lo importante es que los estudiantes entiendan que son pasos sistemáticos, no ataques al azar.',
        },

        // ── Diapositiva 12: Tabla de las 6 pruebas ──
        {
          type: 'diagram',
          category: 'Visión Detallada',
          title: 'Las 6 Pruebas del Análisis Exterior',
          subtitle: 'Cada prueba evalúa un aspecto diferente de la seguridad externa:',
          diagramType: 'table',
          tableHeaders: ['Prueba', 'Qué evalúa', 'Ejemplo sencillo'],
          tableRows: [
            ['Sondeo de red', 'Dominios, IPs, servidores', '¿Qué servidores tiene la empresa?'],
            ['Identificación de servicios', 'Servicios activos tras el firewall', '¿Qué programas están funcionando?'],
            ['Búsqueda de vulnerabilidades', 'Fallas y errores de configuración', '¿Hay puertas abiertas sin protección?'],
            ['Testeo de aplicaciones', 'Seguridad de aplicaciones web', '¿La página web tiene fallas?'],
            ['Relaciones de confianza', 'Permisos de acceso a la red', '¿Quién puede entrar y quién no?'],
            ['Verificación inalámbrica', 'Seguridad del Wi-Fi (802.11)', '¿El Wi-Fi está bien protegido?'],
          ],
          teacherNotes: 'Use esta tabla como mapa visual. Si queda tiempo, pregunte a algún estudiante si puede explicar una prueba con sus propias palabras.',
        },

        // ── Diapositiva 13: Documentación e informes ──
        {
          type: 'concept',
          category: 'Fase Final',
          title: 'Documentación e Informes',
          mainIdea: 'Al terminar el análisis, se debe presentar un **informe detallado** con todos los hallazgos y recomendaciones.',
          definition: 'El informe final es el producto más importante del análisis de vulnerabilidades. Debe incluir cada prueba realizada, los resultados obtenidos, las vulnerabilidades encontradas y el nivel de riesgo de cada una.',
          keyPoints: [
            'Lista de todas las vulnerabilidades probadas.',
            'Vulnerabilidades detectadas con su nivel de riesgo.',
            'Lista de servicios y dispositivos vulnerables.',
            'Resultados de las herramientas utilizadas.',
          ],
          teacherNotes: 'Enfatice que un análisis sin documentación no sirve. El informe es lo que permite a la empresa tomar acciones correctivas. Sin informe, es como si el análisis no se hubiera hecho.',
        },

        // ── Diapositiva 14: Actividad individual ──
        {
          type: 'activity',
          title: 'Actividad Individual',
          activityTitle: 'Analista de seguridad por un día',
          icon: '🔍',
          instructions: 'Lee el siguiente escenario y responde las preguntas en tu cuaderno:',
          steps: [
            'Escenario: Una empresa llamada \"TechSolutions\" recibe un correo de un supuesto proveedor que dice: \"Hemos actualizado nuestro portal. Por favor ingrese aquí con sus credenciales para verificar su cuenta.\" Tres empleados hacen clic en el enlace y escriben su usuario y contraseña.',
            'Pregunta 1: ¿Qué método de recopilación se utilizó en este ataque? Justifica tu respuesta.',
            'Pregunta 2: ¿Qué prueba de las 6 debería realizarse para detectar este tipo de vulnerabilidad en el futuro?',
            'Pregunta 3: Escribe UNA recomendación que le darías a la empresa para evitar que esto vuelva a ocurrir.',
          ],
          tip: 'Tiempo estimado: 5–8 minutos. Trabaja individualmente. No necesitas internet.',
          teacherNotes: 'La respuesta esperada es: Método de sugerencia dirigida (phishing). La prueba sería el testeo de aplicaciones de internet o la verificación de relaciones de confianza. Las recomendaciones pueden incluir: capacitar empleados, no hacer clic en enlaces sospechosos, verificar el remitente.',
        },

        // ── Diapositiva 15: Resumen ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Lo que debes recordar hoy:',
          points: [
            'Un **análisis exterior** evalúa la seguridad de una organización desde fuera, intentando acceder remotamente sin tener acceso previo.',
            'Existen **4 métodos de recopilación**: inteligencia competitiva, revisión de privacidad, análisis de solicitud y sugerencia dirigida (phishing).',
            'Tras la recopilación, se aplican **6 pruebas técnicas**: sondeo de red, identificación de servicios, búsqueda de vulnerabilidades, testeo de aplicaciones, relaciones de confianza y verificación inalámbrica.',
            'Todo análisis debe terminar con un **informe detallado** que documente los hallazgos y el nivel de riesgo.',
          ],
          teacherNotes: 'Haga una síntesis oral breve. Puede cerrar preguntando: \"¿Qué fue lo que más les sorprendió de la clase de hoy?\"',
        },
      ],
    },
  ],
}
