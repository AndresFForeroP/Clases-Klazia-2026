/**
 * Contenido educativo — Grado 9.º Grupo 1
 * Tema: Tipos y Servicios de las Páginas Web
 *
 * Fuente: cursos/9/9-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel analítico para 9.º grado.
 */

export const course9_1 = {
  title: 'Tipos y Servicios de las Páginas Web',
  description: 'Presentación interactiva sobre los diferentes tipos de páginas web, el concepto de dominio web y los servicios web: qué son, ventajas e inconvenientes.',
  lessons: [
    {
      id: 'tipos-servicios-paginas-web',
      title: 'Tipos y Servicios de las Páginas Web',
      description: 'Presentación académica guiada para la clase presencial de 9.º grado.',
      slides: [
        // ── Diapositiva 1: Portada ──
        {
          type: 'title',
          badge: 'Informática 9.º — Grupo 1',
          title: 'Tipos y Servicios de las Páginas Web',
          subtitle: 'No todas las páginas web son iguales ni funcionan de la misma manera',
          objectives: [
            'Clasificar los principales tipos de páginas web según su función y estructura.',
            'Explicar qué es un dominio web, sus partes y cómo se registra.',
            'Definir qué son los servicios web y analizar sus ventajas e inconvenientes.',
          ],
          teacherNotes: '**Sugerencia de inicio:** Pregunte a los estudiantes cuántas páginas web diferentes visitaron hoy o ayer. Luego pregunte: \"¿Creen que todas funcionan de la misma manera?\"',
        },

        // ── Diapositiva 2: Pregunta introductoria ──
        {
          type: 'question',
          question: '¿Amazon, Wikipedia e Instagram son el mismo tipo de página web?',
          context: 'Las tres se abren en un navegador, pero una vende productos, otra comparte conocimiento y otra conecta personas...',
          options: [
            'Sí, todas son páginas web y funcionan igual',
            'No, cada una tiene una función y estructura diferente',
            'Son iguales pero cambian los colores y el diseño',
          ],
          answer: 'No, cada una tiene una función y estructura completamente diferente.',
          explanation: 'Existen **muchos tipos de páginas web** según su objetivo y cómo están construidas. Conocerlas nos ayuda a entender el ecosistema de internet.',
          teacherNotes: 'Deje que los estudiantes expliquen las diferencias que perciben. Este es un buen punto de partida para la clasificación.',
        },

        // ── Diapositiva 3: Estáticas vs Dinámicas ──
        {
          type: 'concept',
          category: 'Clasificación Básica',
          title: 'Páginas Estáticas vs Dinámicas',
          mainIdea: 'La primera gran clasificación de las páginas web es según si su contenido **cambia o permanece fijo**.',
          definition: 'Una página estática muestra información que no cambia frecuentemente y se presenta de manera constante. Una página dinámica genera contenido en tiempo real y se adapta a las interacciones del usuario.',
          keyPoints: [
            '**Estática**: El contenido no cambia. Se muestra igual para todos los visitantes.',
            '**Dinámica**: El contenido se genera en tiempo real según las acciones del usuario.',
            'Ejemplo estático: una página de información de un restaurante con su menú fijo.',
            'Ejemplo dinámico: tu feed de Instagram, que cambia cada vez que lo abres.',
          ],
          teacherNotes: 'Use una analogía: una página estática es como un cartel pegado en la pared (siempre dice lo mismo). Una dinámica es como una pantalla digital que cambia según quién la mira.',
        },

        // ── Diapositiva 4: Tipos de páginas web (tabla) ──
        {
          type: 'diagram',
          category: 'Clasificación Completa',
          title: 'Tipos de Páginas Web',
          subtitle: 'Cada tipo cumple una función específica en internet:',
          diagramType: 'table',
          tableHeaders: ['Tipo', 'Función principal', 'Ejemplo'],
          tableRows: [
            ['Comercio electrónico', 'Compra y venta de productos en línea', 'Amazon, MercadoLibre'],
            ['Blog', 'Publicar artículos y contenido actualizado', 'Medium, WordPress'],
            ['Medios de comunicación', 'Noticias, artículos y contenido multimedia', 'El Tiempo, BBC'],
            ['Redes sociales', 'Conexión e interacción entre personas', 'Instagram, Facebook'],
            ['Corporativa', 'Representar empresas y organizaciones', 'Coca-Cola, Microsoft'],
            ['Interactiva', 'Formularios, encuestas, compras en línea', 'Google Forms, Typeform'],
            ['Portfolio', 'Mostrar el trabajo de profesionales', 'Behance, Dribbble'],
          ],
          teacherNotes: 'Repase la tabla tipo por tipo. Pregunte a los estudiantes si pueden dar otro ejemplo de cada tipo que no esté en la lista.',
        },

        // ── Diapositiva 5: Ejemplos reales ──
        {
          type: 'example',
          category: 'Ejemplos del Mundo Real',
          title: 'Reconociendo los Tipos en la Práctica',
          subtitle: 'Páginas que probablemente usas a diario y su clasificación:',
          icon: '🌐',
          description: 'Cada página web que visitas fue diseñada con un propósito específico. Reconocer ese propósito te ayuda a entender cómo funciona internet como ecosistema.',
          features: [
            '**YouTube**: Página de medios de comunicación — publica contenido multimedia.',
            '**Amazon**: Comercio electrónico — permite comprar productos desde cualquier lugar.',
            '**Wikipedia**: Informativa/Blog — publica artículos de conocimiento constantemente.',
            '**Instagram**: Red social — conecta personas a través de contenido visual.',
            '**Behance**: Portfolio — diseñadores muestran sus proyectos creativos.',
            '**Página del colegio**: Corporativa — representa a la institución educativa.',
          ],
          teacherNotes: 'Si los estudiantes mencionan TikTok, Twitter/X u otras plataformas, clasifíquenlas juntos. Es un buen ejercicio de aplicación.',
        },

        // ── Diapositiva 6: Pregunta conversacional ──
        {
          type: 'question',
          question: '¿Qué tipo de página web es la que más usas en tu día a día?',
          context: 'Piensa en las páginas que abres más frecuentemente: ¿son redes sociales, tiendas, buscadores, blogs...?',
          options: [
            'Redes sociales (Instagram, TikTok, YouTube)',
            'Comercio electrónico (tiendas en línea)',
            'Páginas informativas o educativas',
          ],
          answer: 'No hay una respuesta única. Lo importante es identificar conscientemente qué tipo de página usamos y con qué propósito.',
          explanation: 'Ser consciente del tipo de página que usamos nos ayuda a entender qué datos compartimos, qué servicios consumimos y cómo interactuamos con internet.',
          teacherNotes: 'Esta pregunta es para conversación abierta. No busque una respuesta correcta, sino que los estudiantes reflexionen sobre sus hábitos de navegación.',
        },

        // ── Diapositiva 7: ¿Qué es un dominio? ──
        {
          type: 'concept',
          category: 'Dominio Web',
          title: '¿Qué es un Dominio?',
          mainIdea: 'El dominio es la **dirección única y legible** que identifica a una página web en internet.',
          definition: 'Así como cada casa tiene una dirección postal, cada página web tiene un dominio que permite a las personas encontrarla y acceder a ella. El dominio tiene dos partes principales: el nombre y la extensión.',
          keyPoints: [
            '**Nombre del dominio**: Lo elige el propietario. Ejemplo: en \"ejemplo.com\", el nombre es \"ejemplo\".',
            '**Extensión del dominio**: Indica el tipo de organización. Ejemplo: .com (comercial), .org (organización), .net (tecnología).',
            'Proporciona una identidad única y personalizada a la página web.',
          ],
          teacherNotes: 'Use la analogía de la dirección postal: el nombre del dominio es como el nombre de la calle y el número de la casa. La extensión es como la ciudad o el país.',
        },

        // ── Diapositiva 8: Anatomía de un dominio ──
        {
          type: 'example',
          category: 'Anatomía de un Dominio',
          title: '¿Cómo se lee un dominio?',
          subtitle: 'Desglosando las partes de una dirección web:',
          icon: '🔗',
          description: 'Un dominio se compone de un nombre elegido por el propietario y una extensión que indica su naturaleza. Las extensiones pueden ser genéricas o específicas de un país.',
          features: [
            '**google.com** → Nombre: google | Extensión: .com (comercial)',
            '**wikipedia.org** → Nombre: wikipedia | Extensión: .org (organización sin fines de lucro)',
            '**gobierno.co** → Nombre: gobierno | Extensión: .co (Colombia)',
            '**bbc.net** → Nombre: bbc | Extensión: .net (redes y tecnología)',
            '**universidad.edu** → Nombre: universidad | Extensión: .edu (educación)',
          ],
          analogy: '**Dato importante:** Para obtener un dominio, se debe registrar a través de un registrador autorizado (como GoDaddy) y renovarlo periódicamente para no perderlo.',
          teacherNotes: 'Pregunte: \"¿Qué extensión usarían si crearan una página web para un proyecto escolar? ¿Y para una tienda de ropa?\" Esto ayuda a aplicar el concepto.',
        },

        // ── Diapositiva 9: Registro y renovación ──
        {
          type: 'concept',
          category: 'Registro de Dominios',
          title: 'Registro y Renovación de un Dominio',
          mainIdea: 'Un dominio debe **registrarse y renovarse periódicamente** para mantener la propiedad.',
          definition: 'Para registrar un dominio se busca un nombre disponible a través de un registrador autorizado. Si no se renueva a tiempo, otra persona puede adquirirlo. Además, el dominio se puede usar para crear correos personalizados (nombre@tudominio.com).',
          keyPoints: [
            'Se registra en un sitio autorizado (GoDaddy, Namecheap, etc.).',
            'Si no se renueva, otro puede comprarlo y quedarse con él.',
            'Permite crear correos electrónicos profesionales personalizados.',
            'Influye en el posicionamiento en buscadores (SEO) y en la confianza del usuario.',
          ],
          teacherNotes: 'Cuente un caso real: hay empresas que perdieron su dominio por no renovarlo a tiempo y tuvieron que pagar miles de dólares para recuperarlo. Esto muestra la importancia de la renovación.',
        },

        // ── Diapositiva 10: ¿Qué son los servicios web? ──
        {
          type: 'concept',
          category: 'Servicios Web',
          title: '¿Qué son los Servicios Web?',
          mainIdea: 'Son **aplicaciones o componentes programables** que permiten la comunicación entre dispositivos a través de una red.',
          definition: 'Un servicio web es un programa al que se puede acceder por internet y que cumple una función específica. Permite que diferentes aplicaciones se comuniquen entre sí sin importar en qué lenguaje de programación estén escritas.',
          analogy: '**Ejemplo:** Cuando una aplicación de clima en tu celular muestra la temperatura actual, está consultando un servicio web que le envía los datos del clima en tiempo real.',
          keyPoints: [
            'Permiten la comunicación entre aplicaciones a través de internet.',
            'Son accesibles mediante protocolos estandarizados (HTTP, AMQP).',
            'Realizan un conjunto específico de funciones.',
          ],
          teacherNotes: 'Use el ejemplo del clima para que sea concreto. También puede mencionar: cuando Google Maps muestra el tráfico en tiempo real, usa servicios web que recopilan datos de millones de celulares.',
        },

        // ── Diapositiva 11: Ventajas e inconvenientes ──
        {
          type: 'diagram',
          category: 'Análisis Comparativo',
          title: 'Ventajas e Inconvenientes de los Servicios Web',
          subtitle: 'Como toda tecnología, los servicios web tienen beneficios y desafíos:',
          diagramType: 'comparison',
          columns: [
            {
              badge: '✅',
              title: 'Ventajas',
              desc: '**Interoperabilidad**: Comunicación entre sistemas sin importar el idioma o plataforma.\n\n**Integración fácil**: Conectan datos de diferentes fuentes de forma sencilla.\n\n**Bajo costo**: Usan protocolos de internet estándar, lo que reduce costos de comunicación.',
            },
            {
              badge: '⚠️',
              title: 'Inconvenientes',
              desc: '**Seguridad**: Vulnerables a ataques como inyecciones, secuestro de sesiones y robo de datos.\n\n**Rendimiento**: Pueden ser más lentos que la comunicación directa entre programas.\n\n**Complejidad**: El desarrollo y mantenimiento puede ser más difícil.',
            },
          ],
          teacherNotes: 'Resalte que las ventajas generalmente superan los inconvenientes, pero la seguridad siempre debe ser una prioridad. Pregunte: \"¿Qué pasaría si el servicio web de un banco fuera hackeado?\"',
        },

        // ── Diapositiva 12: Pregunta conversacional ──
        {
          type: 'question',
          question: '¿Por qué la seguridad es el mayor desafío de los servicios web?',
          context: 'Piensa: si un servicio web permite que aplicaciones se comuniquen a través de internet, ¿qué podría salir mal si alguien intercepta esa comunicación?',
          options: [
            'Porque los servicios web son siempre públicos y cualquiera puede acceder',
            'Porque la comunicación a través de internet puede ser interceptada o manipulada',
            'Porque los programadores no saben crear servicios seguros',
          ],
          answer: 'Porque la comunicación a través de internet puede ser interceptada o manipulada si no se implementan medidas de seguridad adecuadas.',
          explanation: 'Los servicios web transmiten datos por internet, y esa transmisión puede ser interceptada. Por eso se usan protocolos de cifrado (como HTTPS) para proteger la información.',
          teacherNotes: 'Conecte con lo aprendido en la clase de seguridad informática de otros grados. La seguridad es un tema transversal en la informática.',
        },

        // ── Diapositiva 13: Actividad individual ──
        {
          type: 'activity',
          title: 'Actividad Individual',
          activityTitle: 'Clasificador de sitios web',
          icon: '📋',
          instructions: 'Completa la siguiente tabla en tu cuaderno. Para cada sitio web, indica su tipo, identifica las partes de su dominio y responde si necesita servicios web:',
          steps: [
            'Sitio 1: youtube.com → ¿Tipo de página? | ¿Nombre del dominio? | ¿Extensión? | ¿Usa servicios web? ¿Por qué?',
            'Sitio 2: amazon.com → ¿Tipo de página? | ¿Nombre del dominio? | ¿Extensión? | ¿Usa servicios web? ¿Por qué?',
            'Sitio 3: wikipedia.org → ¿Tipo de página? | ¿Nombre del dominio? | ¿Extensión? | ¿Usa servicios web? ¿Por qué?',
            'Sitio 4: instagram.com → ¿Tipo de página? | ¿Nombre del dominio? | ¿Extensión? | ¿Usa servicios web? ¿Por qué?',
            'Bonus: Inventa un dominio para una página web que te gustaría crear. Indica qué tipo de página sería y qué extensión usarías.',
          ],
          tip: 'Tiempo estimado: 5–8 minutos. Trabaja individualmente. Usa los conceptos vistos en la clase para justificar cada respuesta.',
          teacherNotes: 'Respuestas esperadas: YouTube → medios/interactiva, nombre: youtube, ext: .com, sí usa servicios web (streaming de video). Amazon → comercio electrónico, nombre: amazon, ext: .com, sí (catálogo, pagos). Wikipedia → informativa/blog, nombre: wikipedia, ext: .org, sí (base de datos de artículos). Instagram → red social, nombre: instagram, ext: .com, sí (feed, mensajes, notificaciones).',
        },

        // ── Diapositiva 14: Resumen ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Lo que debes recordar hoy:',
          points: [
            'Existen diferentes **tipos de páginas web**: estáticas, dinámicas, e-commerce, blogs, redes sociales, corporativas, interactivas y portfolios.',
            'Un **dominio** tiene dos partes: el nombre (elegido por el propietario) y la extensión (.com, .org, .net, .co, etc.).',
            'Los dominios deben **registrarse y renovarse** periódicamente para no perder la propiedad.',
            'Los **servicios web** permiten que aplicaciones se comuniquen a través de internet, con ventajas como la interoperabilidad pero desafíos en seguridad.',
          ],
          teacherNotes: 'Haga una síntesis oral breve. Puede cerrar con la pregunta: \"Si tuvieran que crear una página web, ¿qué tipo elegirían y qué dominio le pondrían?\"',
        },
      ],
    },
  ],
}
