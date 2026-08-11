/**
 * Contenido educativo — Grado 9.º Grupo 1
 * Tema: Evolución de las Páginas Web
 *
 * Fuente: cursos/9/9-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel analítico para 9.º grado.
 */

export const course9_1 = {
  title: 'Evolución de las Páginas Web',
  description: 'Presentación interactiva sobre la historia del diseño web: desde el primer navegador en 1993 hasta las tendencias actuales del desarrollo web moderno.',
  lessons: [
    {
      id: 'evolucion-paginas-web',
      title: 'Evolución de las Páginas Web',
      description: 'Presentación académica guiada para la clase presencial de 9.º grado.',
      slides: [
        // ── Diapositiva 1: Título y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 9.º — Grupo 1',
          title: 'Evolución de las Páginas Web',
          subtitle: 'Del texto plano de los 90 al diseño interactivo de hoy',
          objectives: [
            'Identificar las etapas clave en la evolución del diseño web.',
            'Explicar las diferencias entre las versiones de HTML (del 1 al 5).',
            'Analizar cómo las mejoras tecnológicas impulsaron la evolución del diseño web.',
            'Reconocer las características del diseño web moderno.',
          ],
          teacherNotes: '**Sugerencia de inicio:** Pregunte a la clase si pueden imaginarse un internet sin imágenes, sin videos y sin colores. Indique que eso era la realidad hace apenas 30 años.',
        },

        // ── Diapositiva 2: Pregunta introductoria ──
        {
          type: 'question',
          question: '¿Cómo creen que se veía una página web en 1993?',
          context: 'No existían YouTube, Instagram ni Google. La conexión era por línea telefónica y un sitio web tardaba minutos en cargar...',
          options: [
            'Solo texto sin formato, como un documento de bloc de notas',
            'Igual que hoy pero un poco más lento',
            'Solo se podían enviar correos electrónicos',
          ],
          answer: 'Solo texto sin formato, enlaces básicos y sin imágenes.',
          explanation: 'Las primeras páginas web eran archivos de **texto plano en HTML**, sin imágenes de fondo, sin colores y sin ningún tipo de interactividad. Eran **netamente funcionales**.',
          teacherNotes: 'Deje que los estudiantes imaginen el escenario. Muchos no concebirán un internet sin imágenes. Este contraste ayuda a valorar la evolución.',
        },

        // ── Diapositiva 3: Los inicios ──
        {
          type: 'concept',
          category: 'Contexto Histórico',
          title: 'Los Inicios del Diseño Web',
          mainIdea: 'La historia del diseño web comienza en los **años 90**, cuando la conexión a internet se realizaba a través de **líneas telefónicas**.',
          definition: 'Los primeros archivos web estaban escritos en lenguaje de hipertexto (HTML). Las páginas eran únicamente texto, tablas y algunos vínculos. No existían imágenes de fondo ni animaciones.',
          keyPoints: [
            'Conexión por línea telefónica (muy lenta).',
            'Páginas en HTML básico: solo texto y enlaces.',
            'El diseño web como profesión no existía todavía.',
          ],
          teacherNotes: 'Explique brevemente qué era una conexión por línea telefónica (dial-up): el teléfono fijo se conectaba al computador y mientras se usaba internet, nadie podía llamar.',
        },

        // ── Diapositiva 4: Mosaic y la WWW ──
        {
          type: 'example',
          category: 'Hito Histórico — 1993',
          title: '1993: Mosaic, el Primer Navegador',
          subtitle: 'El año donde comenzó todo',
          icon: '🌐',
          description: 'En 1993 se presentó **Mosaic**, el primer navegador web funcional que operaba en sistemas Unix. Su éxito fue tan grande que rápidamente se crearon versiones para **Windows y Mac**.',
          analogy: '**Dato clave:** Un año después, en 1994, nació la **World Wide Web (www)**, el sistema que todavía usamos hoy para navegar en internet.',
          features: [
            '**Mosaic**: Primer navegador gráfico de la historia.',
            '**1994 — WWW**: Nace el sistema de navegación que conocemos.',
            '**Limitaciones**: Solo se podían construir sitios con texto, tablas y vínculos básicos.',
          ],
          teacherNotes: 'Resalte que la WWW tiene poco más de 30 años. Para los estudiantes de 14-15 años, esto puede parecer antiguo, pero es relativamente reciente en la historia de la humanidad.',
        },

        // ── Diapositiva 5: HTML 2 ──
        {
          type: 'concept',
          category: 'Segunda Generación',
          title: 'HTML 2: El Primer Gran Salto',
          mainIdea: 'La segunda versión de HTML corrigió los fallos de la primera y permitió por primera vez **imágenes de fondo y menús** en las páginas.',
          definition: 'HTML 2 fue diseñado para corregir las limitaciones de la primera versión, mejorando la velocidad de conexión y permitiendo organizar el contenido de formas más visuales.',
          analogy: '**Avance paralelo:** Junto con HTML 2 aparecieron monitores y tarjetas gráficas que mejoraron significativamente el color y la resolución de las pantallas.',
          keyPoints: [
            'Velocidad de conexión notablemente más rápida.',
            'Imágenes de fondo por primera vez.',
            'Contenido organizado en menús.',
          ],
          teacherNotes: 'Explique que la evolución del diseño web no dependió únicamente del software (HTML), sino también del hardware (monitores, tarjetas gráficas). Ambos avanzaron juntos.',
        },

        // ── Diapositiva 6: HTML 3 ──
        {
          type: 'concept',
          category: 'Tercera Generación',
          title: 'HTML 3: CSS y la Revolución Visual',
          mainIdea: 'Con HTML 3 llegaron las **hojas de estilo CSS**, los fondos a color y las primeras **animaciones GIF**.',
          definition: 'El paso de HTML 2 a HTML 3 fue el salto más cualitativo entre versiones. Los desarrolladores ahora tenían un abanico de posibilidades para diseñar sitios visualmente atractivos.',
          keyPoints: [
            'Introducción de las hojas de estilo **CSS**.',
            'Fondos con color y diseño personalizado.',
            'Nacimiento del formato **GIF** para animaciones.',
          ],
          teacherNotes: 'Explique qué es CSS con un ejemplo simple: "HTML es la estructura de una casa (paredes, puertas); CSS es la pintura, los muebles y la decoración." A partir de HTML 3, diseñar sitios web se convierte en una profesión valorada.',
        },

        // ── Diapositiva 7: Diagrama — Línea de tiempo ──
        {
          type: 'diagram',
          category: 'Línea de Tiempo',
          title: 'Evolución del HTML: del 1 al 5',
          subtitle: 'Cada versión representó un avance significativo:',
          diagramType: 'flow',
          nodes: [
            { icon: '📄', label: 'HTML 1', desc: 'Solo texto y enlaces' },
            { icon: '🖼️', label: 'HTML 2', desc: 'Imágenes y menús' },
            { icon: '🎨', label: 'HTML 3', desc: 'CSS, colores y GIFs' },
            { icon: '♿', label: 'HTML 4', desc: 'Accesibilidad' },
            { icon: '🚀', label: 'HTML 5', desc: 'Multimedia y SVG' },
          ],
          teacherNotes: 'Use este diagrama como mapa visual. Repase cada nodo brevemente antes de profundizar en HTML 4 y 5.',
        },

        // ── Diapositiva 8: HTML 4 y 5 ──
        {
          type: 'concept',
          category: 'Cuarta y Quinta Generación',
          title: 'HTML 4 y 5: Accesibilidad y Multimedia',
          mainIdea: 'HTML 4 introdujo la **accesibilidad** para personas con discapacidad. HTML 5 trajo la integración de **multimedia sin plugins**.',
          definition: 'HTML 4 permitió que personas con discapacidad accedieran a internet de forma más equitativa. HTML 5, la versión actual, eliminó la necesidad de plugins externos para reproducir video, audio y gráficos SVG.',
          keyPoints: [
            '**HTML 4**: Accesibilidad web y mayor velocidad.',
            '**HTML 5**: Gráficos SVG, video y audio nativos.',
            '**Sin plugins**: No se necesita Flash ni otros complementos.',
          ],
          teacherNotes: 'Explique qué era Flash (un plugin que se necesitaba para ver videos en línea). Los estudiantes probablemente nunca lo usaron, pero sus padres sí. HTML 5 hizo que los navegadores pudieran hacer todo esto de forma nativa.',
        },

        // ── Diapositiva 9: Tabla comparativa ──
        {
          type: 'diagram',
          category: 'Resumen Comparativo',
          title: 'Las 5 Generaciones de HTML',
          subtitle: 'Comparación de las capacidades de cada versión:',
          diagramType: 'table',
          tableHeaders: ['Versión', 'Época', 'Novedad principal', 'Impacto'],
          tableRows: [
            ['HTML 1', 'Inicio de los 90', 'Texto plano y enlaces', 'Nacimiento de la web'],
            ['HTML 2', 'Mediados de los 90', 'Imágenes y menús', 'Primeros sitios visuales'],
            ['HTML 3', 'Finales de los 90', 'CSS, colores, GIFs', 'Revolución del diseño'],
            ['HTML 4', 'Años 2000', 'Accesibilidad', 'Web para todos'],
            ['HTML 5', 'Actualidad', 'Multimedia nativa, SVG', 'Era moderna'],
          ],
          teacherNotes: 'Repase la tabla fila por fila. Pregunte: "¿En cuál de estas etapas creen que se produjo el cambio más importante?"',
        },

        // ── Diapositiva 10: Diseño web actual ──
        {
          type: 'concept',
          category: 'Tendencias Actuales',
          title: 'El Diseño Web Moderno',
          mainIdea: 'Hoy en día, las páginas web son **responsivas** (se adaptan a cualquier dispositivo) y priorizan el **impacto visual** junto con la funcionalidad.',
          definition: 'La evolución tecnológica originó la necesidad de crear sitios que funcionen tanto en computadores como en celulares, ofreciendo mayor impacto visual sin sacrificar la funcionalidad.',
          keyPoints: [
            'Diseños simples, limpios y minimalistas.',
            'Imágenes grandes y tipografías expresivas.',
            'Videos, animaciones y fondos dinámicos.',
            'Diseño **responsivo** para todos los dispositivos.',
          ],
          teacherNotes: 'Muestre la diferencia entre un sitio web visto en un computador y el mismo sitio en un celular. El diseño responsivo adapta automáticamente el contenido.',
        },

        // ── Diapositiva 11: Ejemplo — Características actuales ──
        {
          type: 'example',
          category: 'Diseño Web Actual',
          title: 'Características del Diseño Web Moderno',
          subtitle: 'Lo que define a un sitio web bien diseñado hoy:',
          icon: '✨',
          description: 'Los sitios web modernos combinan estética visual con funcionalidad. Cada elemento tiene un propósito y la experiencia del usuario es la prioridad.',
          features: [
            '**Fondos blancos** y diseño limpio: menos distracciones, más contenido.',
            '**Imágenes grandes** que ocupan casi toda la pantalla: impacto visual inmediato.',
            '**Tipografías variadas** con personalidad: sensación de diseño "a mano".',
            '**Colores brillantes** y botones transparentes: interfaz moderna.',
            '**Animaciones y videos** integrados: experiencia dinámica.',
            '**Diseño en diagonal**: rompe la monotonía del diseño rectangular tradicional.',
          ],
          teacherNotes: 'Si es posible, abra un sitio web moderno (Apple, Spotify, etc.) para mostrar estas características en tiempo real.',
        },

        // ── Diapositiva 12: Pregunta de análisis ──
        {
          type: 'question',
          question: '¿Por qué el diseño responsivo se volvió indispensable?',
          context: 'Piensa en cuántos dispositivos diferentes usan las personas hoy para navegar por internet...',
          options: [
            'Porque los celulares no existían antes',
            'Porque hoy más personas navegan desde el celular que desde un computador',
            'Porque los programadores querían complicar el desarrollo',
          ],
          answer: 'Porque hoy más personas navegan desde el celular que desde un computador.',
          explanation: 'Más del **60% del tráfico web mundial** proviene de dispositivos móviles. Un sitio que no se adapta a pantallas pequeñas pierde a la mayoría de sus visitantes.',
          teacherNotes: 'Este dato suele sorprender a los estudiantes. Pregunte: "¿Ustedes navegan más desde el celular o desde el computador?"',
        },

        // ── Diapositiva 13: Quiz interactivo ──
        {
          type: 'quiz',
          title: 'Comprobación de Aprendizaje',
          description: 'Pon a prueba lo que aprendiste sobre la evolución del diseño web.',
          quizTitle: 'Cuestionario de 9.º grado',
          questions: [
            {
              id: 'q1',
              question: '¿Cómo se llamó el primer navegador web presentado en 1993?',
              options: ['Firefox', 'Mosaic', 'Internet Explorer', 'Chrome'],
              correctIndex: 1,
              feedback: {
                correct: '¡Correcto! Mosaic fue el primer navegador gráfico de la historia.',
                incorrect: 'El primer navegador fue **Mosaic**, presentado en 1993 para sistemas Unix.',
              },
            },
            {
              id: 'q2',
              question: '¿Qué tecnología introdujo HTML 3 que cambió radicalmente el diseño web?',
              options: ['JavaScript', 'CSS (Hojas de estilo)', 'Flash', 'PHP'],
              correctIndex: 1,
              feedback: {
                correct: '¡Exacto! Las hojas de estilo CSS permitieron personalizar colores, fondos y diseños.',
                incorrect: 'HTML 3 introdujo las **hojas de estilo CSS**, que separaron el diseño visual de la estructura del contenido.',
              },
            },
            {
              id: 'q3',
              question: '¿Cuál fue la gran novedad de HTML 5 respecto a multimedia?',
              options: [
                'Necesitar Flash para ver videos',
                'Integrar video, audio y gráficos SVG sin plugins externos',
                'Eliminar las imágenes de las páginas web',
              ],
              correctIndex: 1,
              feedback: {
                correct: '¡Muy bien! HTML 5 permite multimedia nativa sin necesidad de plugins.',
                incorrect: 'HTML 5 permite integrar **video, audio y gráficos SVG de forma nativa**, sin depender de plugins como Flash.',
              },
            },
          ],
          teacherNotes: 'Resuelva las preguntas con participación del grupo. Pregunte a diferentes estudiantes antes de seleccionar la respuesta.',
        },

        // ── Diapositiva 14: Verdadero o Falso ──
        {
          type: 'trueFalse',
          title: 'Evaluación Rápida: Verdadero o Falso',
          tfTitle: 'Analiza estas afirmaciones:',
          statements: [
            {
              id: 'tf1',
              statement: 'Las primeras páginas web incluían videos e imágenes de alta resolución.',
              answer: false,
              explanation: '**Falso.** Las primeras páginas web solo tenían texto plano, tablas y enlaces básicos.',
            },
            {
              id: 'tf2',
              statement: 'CSS fue introducido con HTML 3 y permitió separar el diseño visual de la estructura del contenido.',
              answer: true,
              explanation: '**Verdadero.** Las hojas de estilo CSS fueron una de las grandes novedades de HTML 3.',
            },
            {
              id: 'tf3',
              statement: 'HTML 4 se enfocó principalmente en hacer las páginas web accesibles para personas con discapacidad.',
              answer: true,
              explanation: '**Verdadero.** La accesibilidad web fue la gran novedad de HTML 4.',
            },
          ],
          teacherNotes: 'Pida que los estudiantes levanten la mano para votar Verdadero o Falso antes de verificar cada afirmación.',
        },

        // ── Diapositiva 15: Actividad práctica ──
        {
          type: 'activity',
          title: 'Actividad Práctica: "Línea del Tiempo Web"',
          activityTitle: 'Instrucciones de la actividad:',
          icon: '📋',
          instructions: 'En parejas, creen una línea del tiempo visual en su cuaderno con las 5 generaciones de HTML. Para cada una deben incluir:',
          steps: [
            'El nombre de la versión y la época aproximada.',
            'La novedad principal que introdujo.',
            'Un dibujo o ícono que represente esa novedad.',
            'Una frase que explique por qué fue importante.',
          ],
          tip: 'Pueden agregar flechas de conexión para mostrar cómo cada versión mejoró la anterior.',
          teacherNotes: 'Asigne 12 minutos para el trabajo. Al finalizar, pida a 2 parejas que expongan brevemente su línea del tiempo al grupo.',
        },

        // ── Diapositiva 16: Resumen ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Lo que no debes olvidar hoy:',
          points: [
            'El diseño web nació en los **años 90** con páginas de texto plano conectadas por líneas telefónicas.',
            '**Mosaic** (1993) fue el primer navegador gráfico y la **WWW** nació en 1994.',
            'Cada versión de HTML trajo avances clave: imágenes (HTML 2), **CSS** (HTML 3), accesibilidad (HTML 4), multimedia nativa (HTML 5).',
            'El diseño web moderno prioriza el **diseño responsivo**, la estética visual y la experiencia del usuario.',
          ],
          teacherNotes: 'Haga una síntesis oral de 2 minutos. Cierre con una reflexión: "En 30 años pasamos de texto plano a sitios web interactivos con video y animaciones. ¿Cómo serán las páginas web dentro de 30 años más?"',
        },
      ],
    },
  ],
}
