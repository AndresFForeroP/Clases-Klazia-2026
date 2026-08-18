/**
 * Contenido educativo — Grado 10.º Grupo 1
 * Tema: Edición Multimedia
 *
 * Fuente: cursos/10/10-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel técnico y analítico para 10.º grado.
 */

export const course10_1 = {
  title: 'Edición Multimedia',
  description: 'Presentación interactiva sobre edición multimedia: formatos de video y audio, edición vs montaje, transformaciones, requisitos de hardware/software, herramientas open source y evolución de los ordenadores.',
  lessons: [
    {
      id: 'edicion-multimedia',
      title: 'Edición Multimedia',
      description: 'Presentación académica guiada para la clase presencial de 10.º grado.',
      slides: [
        // ── Diapositiva 1: Portada ──
        {
          type: 'title',
          badge: 'Informática 10.º — Grupo 1',
          title: 'Edición Multimedia',
          subtitle: 'Del archivo en bruto al producto audiovisual terminado',
          objectives: [
            'Definir qué es la edición multimedia y sus elementos constitutivos.',
            'Explicar la diferencia entre edición y montaje audiovisual.',
            'Identificar los formatos de video y audio más utilizados y su compresión.',
            'Analizar los requisitos de hardware y software para edición profesional.',
            'Conocer herramientas open source para edición multimedia.',
          ],
          teacherNotes: '**Sugerencia de inicio:** Pregunte cuántos estudiantes han editado alguna vez un video (aunque sea un reel o TikTok). Conecte esa experiencia cotidiana con los conceptos técnicos que se verán.',
        },

        // ── Diapositiva 2: Pregunta introductoria ──
        {
          type: 'question',
          question: '¿Qué diferencia a un video casero grabado con el celular de un video profesional de YouTube?',
          context: 'Ambos son videos digitales, pero uno se ve amateur y el otro parece producido por un estudio...',
          options: [
            'Solo la cámara con la que se grabó',
            'El proceso de edición y montaje que se aplicó después de grabar',
            'La cantidad de dinero invertido',
          ],
          answer: 'Principalmente el proceso de edición y montaje que transforma el material bruto en un producto audiovisual coherente y atractivo.',
          explanation: 'La **edición multimedia** es el proceso que convierte un archivo de video o audio en bruto en un producto terminado. Incluye cortar, organizar, agregar efectos, mejorar el audio y exportar en el formato adecuado.',
          teacherNotes: 'Enfatice que la cámara importa, pero la edición es lo que realmente marca la diferencia. Muchos YouTubers profesionales editan durante horas un video de 10 minutos.',
        },

        // ── Diapositiva 3: ¿Qué es la edición multimedia? ──
        {
          type: 'concept',
          category: 'Fundamento',
          title: '¿Qué es la Edición Multimedia?',
          mainIdea: 'Es la **manipulación digital de un contenido** al que se le incorporan elementos visuales y/o de audio para enriquecer el mensaje.',
          definition: 'La edición multimedia consiste en tomar un texto, imagen o video y transformarlo añadiendo elementos como imágenes, sonido, efectos y transiciones. Este proceso permite superar las limitaciones de las ediciones tradicionales (solo texto o solo imagen).',
          keyPoints: [
            'Combina texto, imagen, audio y video en un solo producto.',
            'Enriquece el contenido al superar las limitaciones de formatos individuales.',
            'Requiere tanto habilidades técnicas como criterio creativo.',
          ],
          teacherNotes: 'Explique que \"multimedia\" significa literalmente \"múltiples medios\". La edición multimedia es unir esos medios en un producto coherente.',
        },

        // ── Diapositiva 4: Formatos de video y audio ──
        {
          type: 'concept',
          category: 'Conceptos Técnicos',
          title: 'Formatos de Video y Audio',
          mainIdea: 'Un **formato** define cómo se almacena la información en un archivo de video o audio. Cada formato tiene una extensión específica.',
          definition: 'Los videos digitales necesitan compresión porque los archivos en bruto son extremadamente grandes. Al exportar un video, se comprime para reducir su tamaño. Al reproducirlo, se descomprime automáticamente para mostrarlo correctamente.',
          keyPoints: [
            'El formato define la estructura interna del archivo.',
            'La compresión reduce el tamaño sin perder (mucha) calidad.',
            'Al exportar se comprime → al reproducir se descomprime.',
            'Formatos comunes de video: MP4, AVI, MKV, MOV, WebM.',
            'Formatos comunes de audio: MP3, WAV, FLAC, AAC, OGG.',
          ],
          teacherNotes: 'Use la analogía de una maleta: comprimir un video es como doblar la ropa para que quepa en la maleta. La ropa sigue siendo la misma, pero ocupa menos espacio.',
        },

        // ── Diapositiva 5: Comparación de formatos ──
        {
          type: 'example',
          category: 'Comparación Práctica',
          title: '¿Cuándo usar cada formato?',
          subtitle: 'No todos los formatos sirven para lo mismo:',
          icon: '📁',
          description: 'Elegir el formato correcto depende del uso que se le dará al archivo. Un video para YouTube necesita un formato diferente al de un video para cine profesional.',
          features: [
            '**MP4**: El más universal. Compatible con casi todos los dispositivos. Ideal para internet y redes sociales.',
            '**AVI**: Alta calidad pero archivos muy grandes. Usado en edición profesional.',
            '**MKV**: Soporta múltiples pistas de audio y subtítulos. Popular para películas.',
            '**MOV**: Formato de Apple. Excelente calidad, usado en edición con Final Cut Pro.',
            '**WebM**: Optimizado para la web. Ligero y de buena calidad para streaming.',
          ],
          teacherNotes: 'Pregunte: \"Si tuvieran que subir un video a YouTube, ¿qué formato elegirían?\" (MP4). \"¿Y si quieren guardar una película con subtítulos en varios idiomas?\" (MKV). Esto ayuda a aplicar el concepto.',
        },

        // ── Diapositiva 6: Edición vs Montaje ──
        {
          type: 'concept',
          category: 'Distinción Clave',
          title: 'Edición vs Montaje',
          mainIdea: 'Ambos términos describen el proceso de manipular material visual y sonoro, pero **\"montaje\" se asocia al cine** y **\"edición\" al video digital**.',
          definition: 'Tanto la edición como el montaje consisten en seleccionar, cortar y pegar fragmentos de imagen y sonido para crear un discurso audiovisual coherente y expresivo. El montaje es la herramienta fundamental para construir la narrativa y generar emociones en el espectador.',
          keyPoints: [
            '**Montaje**: Término asociado al cine. Enfoque en la narrativa cinematográfica.',
            '**Edición**: Término asociado al video digital. Enfoque en la producción técnica.',
            'En la práctica, ambos procesos implican cortar, organizar y ensamblar material audiovisual.',
            'El objetivo final: crear un discurso audiovisual fluido y con la expresión deseada.',
          ],
          teacherNotes: 'Explique con un ejemplo: un director de cine habla de \"montar\" la película. Un youtuber habla de \"editar\" el video. El proceso es similar, pero el contexto y las herramientas son diferentes.',
        },

        // ── Diapositiva 7: Transformaciones ──
        {
          type: 'concept',
          category: 'Técnicas de Edición',
          title: 'Transformaciones en la Edición Multimedia',
          mainIdea: 'Las transformaciones permiten **escalar, rotar, sesgar, encoger o distorsionar** elementos visuales durante la edición.',
          definition: 'Estas transformaciones se aplican a selecciones, capas, máscaras o trazados vectoriales. Cuando se manipulan píxeles directamente, puede haber pérdida de calidad. Por eso es recomendable usar objetos inteligentes, que permiten transformaciones no destructivas.',
          keyPoints: [
            '**Escalar**: Aumentar o reducir el tamaño de un elemento.',
            '**Rotar**: Girar un elemento sobre su eje.',
            '**Sesgar**: Inclinar un elemento en diagonal.',
            '**Distorsionar**: Deformar libremente un elemento.',
            '**Objetos inteligentes**: Permiten transformaciones sin perder la calidad original.',
          ],
          teacherNotes: 'Use un ejemplo visual: \"Si amplías una foto pequeña, se ve pixelada. Pero si trabajas con un objeto inteligente, puedes ampliarla y reducirla sin perder calidad.\"',
        },

        // ── Diapositiva 8: Transformaciones destructivas vs no destructivas ──
        {
          type: 'example',
          category: 'Concepto Técnico Clave',
          title: 'Edición Destructiva vs No Destructiva',
          subtitle: '¿Por qué importa cómo transformamos los elementos?',
          icon: '🔄',
          description: 'Cuando editamos una imagen o video modificando directamente los píxeles, los cambios son permanentes y la calidad puede degradarse. En cambio, las transformaciones no destructivas preservan el archivo original.',
          features: [
            '**Destructiva**: Los cambios modifican los píxeles directamente. Si se escala una imagen y luego se reduce, pierde calidad.',
            '**No destructiva**: Los cambios son matemáticos, no tocan los píxeles originales. Se pueden revertir sin pérdida.',
            '**Vectores**: Las formas vectoriales siempre son no destructivas (se basan en cálculos matemáticos, no en píxeles).',
            '**Objetos inteligentes**: Son la solución para trabajar de forma no destructiva con imágenes de píxeles.',
          ],
          analogy: '**Analogía:** La edición destructiva es como escribir con bolígrafo: si te equivocas, no puedes borrarlo limpiamente. La no destructiva es como escribir con lápiz: puedes borrar y rehacer sin dañar el papel.',
          teacherNotes: 'Esta distinción es fundamental para cualquier trabajo profesional de edición. Pregunte: \"¿Han perdido alguna vez la calidad de una foto al editarla demasiado?\"',
        },

        // ── Diapositiva 9: Pregunta conversacional ──
        {
          type: 'question',
          question: '¿Por qué un profesional de edición multimedia siempre debería trabajar de forma no destructiva?',
          context: 'Imagina que un cliente te pide cambiar algo en un proyecto que terminaste hace un mes. Si editaste de forma destructiva, ¿qué problema tendrías?',
          options: [
            'No habría ningún problema, se puede deshacer cualquier cambio',
            'Tendría que empezar de cero porque los cambios anteriores ya dañaron el archivo original',
            'Solo tendría que guardar el archivo en otro formato',
          ],
          answer: 'Si editó de forma destructiva, los cambios previos ya alteraron los píxeles originales y posiblemente perdió calidad irrecuperable.',
          explanation: 'La edición no destructiva permite **volver atrás en cualquier momento** sin degradar la calidad. En un entorno profesional, esto es indispensable porque los proyectos se revisan y modifican constantemente.',
          teacherNotes: 'Este es un principio profesional que aplica a cualquier área de diseño y producción multimedia. Enfatice que los profesionales siempre conservan los archivos originales.',
        },

        // ── Diapositiva 10: Requisitos de hardware y software ──
        {
          type: 'concept',
          category: 'Requisitos Técnicos',
          title: 'Hardware y Software para Edición Multimedia',
          mainIdea: 'Para realizar edición multimedia de calidad se necesitan **dos elementos esenciales**: hardware potente y software especializado.',
          definition: 'La edición multimedia es una de las tareas más exigentes para un computador. Requiere procesadores rápidos, memoria RAM abundante, tarjetas gráficas potentes y monitores de alta resolución para ver el resultado con precisión.',
          keyPoints: [
            '**Hardware**: Procesador potente, RAM abundante (16GB+), tarjeta gráfica dedicada, monitor de alta resolución, almacenamiento rápido (SSD).',
            '**Software**: Programas especializados para audio, imagen, video y diseño.',
            '**Conexión**: Una buena conexión a internet para descargar recursos, subir contenido y trabajar en la nube.',
          ],
          teacherNotes: 'Pregunte cuántos estudiantes han experimentado que su computador se pone lento al editar fotos o videos. Eso ocurre porque la edición requiere más recursos de los que un computador básico puede ofrecer.',
        },

        // ── Diapositiva 11: Tabla de requisitos ──
        {
          type: 'diagram',
          category: 'Requisitos Detallados',
          title: 'Hardware vs Software para Edición',
          subtitle: 'Cada componente cumple un rol específico en el proceso de edición:',
          diagramType: 'table',
          tableHeaders: ['Componente', 'Función en la edición', 'Recomendación'],
          tableRows: [
            ['Procesador (CPU)', 'Cálculos de renderizado y efectos', 'Multinúcleo de alto rendimiento'],
            ['Memoria RAM', 'Mantener archivos y efectos en memoria', 'Mínimo 16 GB, ideal 32 GB'],
            ['Tarjeta gráfica (GPU)', 'Aceleración de efectos visuales y 3D', 'GPU dedicada con VRAM'],
            ['Monitor', 'Visualizar colores y detalles con precisión', 'Alta resolución, buena calibración'],
            ['Almacenamiento', 'Guardar archivos grandes rápidamente', 'SSD NVMe para velocidad'],
            ['Software de edición', 'Herramientas de corte, efectos y exportación', 'Profesional o open source'],
          ],
          teacherNotes: 'Repase la tabla componente por componente. Explique que cada uno es un eslabón: si uno es débil, toda la cadena se ralentiza.',
        },

        // ── Diapositiva 12: Software open source ──
        {
          type: 'concept',
          category: 'Herramientas Gratuitas',
          title: 'Software Open Source para Edición Multimedia',
          mainIdea: 'Existen **alternativas gratuitas y de código abierto** que permiten realizar edición multimedia profesional sin costo.',
          definition: 'El software open source ofrece herramientas potentes que compiten con las alternativas comerciales. Son gratuitas, permiten modificar su código y cuentan con comunidades activas de usuarios y desarrolladores.',
          keyPoints: [
            '**GIMP**: Alternativa gratuita a Photoshop. Edición de imágenes con funciones avanzadas. Su interfaz no es tan pulida pero es igualmente potente.',
            '**Inkscape**: Alternativa a Adobe Illustrator. Diseño vectorial profesional compatible con SVG y otros formatos.',
            '**Blender**: Modelado 3D, animación, efectos visuales y edición de video. Una de las herramientas open source más completas del mundo.',
          ],
          teacherNotes: 'Enfatice que \"gratuito\" no significa \"de baja calidad\". Blender, por ejemplo, se usa en producciones profesionales de cine y videojuegos. GIMP tiene más de 25 años de desarrollo.',
        },

        // ── Diapositiva 13: Evolución de los ordenadores ──
        {
          type: 'concept',
          category: 'Contexto Histórico',
          title: 'Evolución de los Ordenadores',
          mainIdea: 'Los ordenadores pasaron de ser **máquinas enormes con componentes metálicos** a dispositivos potentes que caben en la palma de la mano.',
          definition: 'Hace décadas, los ordenadores ocupaban habitaciones enteras y la interacción con los usuarios era extremadamente limitada. Las nuevas tecnologías han permitido reducir el tamaño mientras se aumenta exponencialmente la potencia de procesamiento.',
          keyPoints: [
            'De habitaciones enteras a dispositivos portátiles y smartphones.',
            'Mejora exponencial en potencia de procesamiento y cálculo.',
            'Avances en manejo de datos, gráficos, transferencia de información e inteligencia artificial.',
            'La miniaturización y la eficiencia energética impulsan la evolución constante.',
          ],
          teacherNotes: 'Conecte con el tema de edición multimedia: \"Hace 30 años, editar un video requería equipos de miles de dólares en un estudio profesional. Hoy pueden hacerlo desde su celular.\"',
        },

        // ── Diapositiva 14: Actividad individual ──
        {
          type: 'activity',
          title: 'Actividad Individual',
          activityTitle: 'Productor multimedia por un día',
          icon: '🎬',
          instructions: 'Imagina que debes producir un video corto (3 minutos) para la feria escolar de tu colegio. Responde las siguientes preguntas en tu cuaderno:',
          steps: [
            'Formato de exportación: ¿En qué formato exportarías el video final? Justifica por qué eligiste ese formato y no otro.',
            'Hardware necesario: Lista los 3 componentes de hardware más importantes que necesitarías para editar el video y explica por qué cada uno es necesario.',
            'Software: Elige 2 herramientas open source que usarías en la producción. Indica qué harías con cada una (ej: GIMP para crear la miniatura, Blender para animar el título).',
            'Flujo de producción: Describe brevemente los pasos en orden: captura del material → edición → exportación. ¿Trabajarías de forma destructiva o no destructiva? ¿Por qué?',
          ],
          tip: 'Tiempo estimado: 5–10 minutos. Trabaja individualmente. No necesitas internet ni instalar programas. Usa los conceptos de la clase para justificar cada decisión.',
          teacherNotes: 'Respuestas esperadas: Formato MP4 (universal, compatible, buena relación calidad/tamaño). Hardware: procesador potente (renderizado), RAM (mantener proyecto en memoria), SSD (velocidad de lectura/escritura). Software: GIMP para gráficos/miniatura, Blender para animación o DaVinci Resolve (si lo conocen). Flujo: grabar → importar → cortar/organizar → agregar efectos → exportar. No destructiva para poder revisar y modificar.',
        },

        // ── Diapositiva 15: Resumen ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Puntos clave para recordar:',
          points: [
            'La **edición multimedia** enriquece un contenido combinando texto, imagen, audio y video en un producto coherente.',
            'Los **formatos** definen cómo se almacena la información. La compresión reduce el tamaño del archivo para facilitar su uso.',
            '**Edición** se asocia al video digital y **montaje** al cine, pero ambos implican cortar, organizar y ensamblar material audiovisual.',
            'Las **transformaciones no destructivas** (objetos inteligentes, vectores) preservan la calidad original y permiten modificaciones futuras.',
            'Existen herramientas **open source potentes** como GIMP, Inkscape y Blender que permiten realizar edición profesional sin costo.',
          ],
          teacherNotes: 'Cierre con una reflexión: \"La edición multimedia ya no es exclusiva de profesionales. Con las herramientas gratuitas y los conocimientos que vieron hoy, cualquiera puede crear contenido audiovisual de calidad.\"',
        },
      ],
    },
  ],
}
