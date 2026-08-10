/**
 * Contenido educativo — Grado 7.º Grupo 1
 * Tema: Innovación Tecnológica
 *
 * Fuente: cursos/7/7-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva.
 */

export const course7_1 = {
  title: 'Innovación Tecnológica',
  description: 'Presentación interactiva para explicar qué es la innovación tecnológica, sus 3 tipos y ejemplos reales en la vida cotidiana.',
  lessons: [
    {
      id: 'innovacion-tecnologica',
      title: 'Innovación Tecnológica',
      description: 'Presentación académica guiada para la clase presencial de 7.º grado.',
      slides: [
        // ── Diapositiva 1: Título u Objetivos ──
        {
          type: 'title',
          badge: 'Informática 7.º — Grupo 1',
          title: 'Innovación Tecnológica',
          subtitle: '¿Cómo cambia la tecnología el mundo en que vivimos?',
          objectives: [
            'Definir qué es la innovación tecnológica con tus propias palabras.',
            'Identificar los 3 tipos de innovación: progresiva, disruptiva y radical.',
            'Reconocer ejemplos de innovación en la vida cotidiana.',
          ],
          teacherNotes: '**Sugerencia de inicio:** Pregunte a la clase si recuerdan cómo eran los celulares hace 10 años o cómo escuchaban música sus padres. Use este punto de partida para enganchar la atención.',
        },

        // ── Diapositiva 2: Pregunta inicial de discusión ──
        {
          type: 'question',
          question: '¿Cómo se escuchaba música antes de Spotify o YouTube?',
          context: 'Reflexionemos un momento sobre cómo consumíamos música hace solo unos años...',
          options: ['CDs y Casetes', 'Radio FM', 'Reproductores MP3', 'Spotify en el celular'],
          answer: 'Pasamos de comprar discos físicos a tener millones de canciones en el bolsillo.',
          explanation: 'Este cambio no ocurrió de la noche a la mañana: es el resultado directo de la **innovación tecnológica**.',
          teacherNotes: 'Deje que 2 o 3 estudiantes respondan oralmente antes de hacer clic en **"Revelar respuesta"**.',
        },

        // ── Diapositiva 3: Concepto principal ──
        {
          type: 'concept',
          category: 'Concepto Fundamental',
          title: '¿Qué es la Innovación Tecnológica?',
          mainIdea: 'Es introducir **cambios significativos** en productos, servicios o procesos usando la tecnología para satisfacer necesidades humanas.',
          definition: 'Abarca la creación, desarrollo e implementación de nuevos productos o mejoras significativas en cosas que ya existen.',
          keyPoints: [
            'Mejora o crea algo nuevo.',
            'Usa la tecnología como herramienta.',
            'Resuelve problemas de las personas.',
          ],
          teacherNotes: 'Remarque que **innovar no siempre es inventar algo desde cero**. Muchas veces es mejorar lo que ya existe.',
        },

        // ── Diapositiva 4: Ejemplos cotidianos ──
        {
          type: 'example',
          category: 'Ejemplos Reales',
          title: 'La innovación a tu alrededor',
          subtitle: 'Tres situaciones de la vida diaria:',
          icon: '📱',
          description: 'Desde tu teléfono celular hasta la agricultura moderna, la innovación está presente en todo lo que hacemos.',
          features: [
            '**Celulares**: Antes solo llamaban; hoy son cámaras, computadores y agendas.',
            '**Clases virtuales**: Plataformas que nos permiten aprender desde casa.',
            '**Drones agrícolas**: Supervisión de cultivos desde el aire sin caminar kilómetros.',
          ],
          teacherNotes: 'Pregunte a los estudiantes si conocen algún otro ejemplo en su casa o en el colegio.',
        },

        // ── Diapositiva 5: Los 3 tipos de innovación ──
        {
          type: 'diagram',
          category: 'Clasificación',
          title: 'Los 3 Tipos de Innovación',
          subtitle: 'Dependiendo del grado de cambio y del riesgo que suponen:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Tipo 1',
              title: 'Progresiva',
              desc: 'Cambios pequeños y graduales.',
              metrics: { 'Riesgo': 'Bajo', 'Beneficio': 'Reducido' },
            },
            {
              badge: 'Tipo 2',
              title: 'Disruptiva',
              desc: 'Transforma un mercado existente.',
              metrics: { 'Riesgo': 'Medio-Alto', 'Beneficio': 'Alto' },
            },
            {
              badge: 'Tipo 3',
              title: 'Radical',
              desc: 'Crea mercados que no existían.',
              metrics: { 'Riesgo': 'Muy Alto', 'Beneficio': 'Enorme' },
            },
          ],
          teacherNotes: 'Esta diapositiva sirve como mapa general. En las siguientes tres diapositivas explicaremos cada uno en detalle.',
        },

        // ── Diapositiva 6: Innovación Progresiva ──
        {
          type: 'concept',
          category: 'Tipo 1 de Innovación',
          title: 'Innovación Progresiva',
          mainIdea: 'Mejoras **graduales y pequeñas** sobre productos que la gente ya conoce.',
          definition: 'El producto sigue siendo el mismo, pero funciona un poco mejor. El riesgo para la empresa es muy bajo.',
          analogy: '**Ejemplo:** Una actualización de software en tu celular o un modelo de auto que rinde mejor gasolina que el del año pasado.',
          keyPoints: [
            'Cambio gradual.',
            'El usuario ya conoce el producto.',
            'Riesgo bajo, beneficio reducido.',
          ],
          teacherNotes: 'Explique que la mayoría de innovaciones en el mundo son de este tipo.',
        },

        // ── Diapositiva 7: Innovación Disruptiva ──
        {
          type: 'concept',
          category: 'Tipo 2 de Innovación',
          title: 'Innovación Disruptiva',
          mainIdea: 'Un cambio abrupto que **transforma por completo** la forma de hacer las cosas en un mercado.',
          definition: 'Atrae a nuevos clientes y cambia los valores del mercado. Supone un riesgo mayor pero genera grandes beneficios.',
          analogy: '**Ejemplo:** Netflix reemplazó el alquiler de DVDs en videoclubes por el streaming en casa.',
          keyPoints: [
            'Transforma un mercado existente.',
            'Cambia los hábitos de los usuarios.',
            'Mayor riesgo y beneficio.',
          ],
          teacherNotes: 'Haga énfasis en que **Netflix no inventó las películas**, pero sí cambió *cómo las vemos*. Eso es ser disruptivo.',
        },

        // ── Diapositiva 8: Innovación Radical ──
        {
          type: 'concept',
          category: 'Tipo 3 de Innovación',
          title: 'Innovación Radical',
          mainIdea: 'Crea **nuevas necesidades y mercados** completamente nuevos que antes no existían.',
          definition: 'No mejora algo viejo ni transforma un mercado previo: inventa una categoría totalmente nueva con alto riesgo y beneficios masivos.',
          analogy: '**Ejemplo:** La invención de Internet o el primer Smartphone. Antes de que existieran, nadie sentía la "necesidad" de conectarse a Wi-Fi.',
          keyPoints: [
            'Crea un mercado nuevo.',
            'Genera necesidades que no existían.',
            'Alto riesgo, impacto histórico.',
          ],
          teacherNotes: 'Ayude a diferenciar: Disruptiva transforma lo que ya existe; Radical crea lo que no existía.',
        },

        // ── Diapositiva 9: Tabla Sintética Comparativa ──
        {
          type: 'diagram',
          category: 'Resumen Comparativo',
          title: 'Comparativa de los 3 Tipos',
          subtitle: 'Observa las diferencias clave entre cada tipo:',
          diagramType: 'table',
          tableHeaders: ['Característica', 'Progresiva', 'Disruptiva', 'Radical'],
          tableRows: [
            ['Cambio', 'Gradual y pequeño', 'Transforma el mercado', 'Crea un mercado nuevo'],
            ['Riesgo', 'Bajo', 'Medio-Alto', 'Muy Alto'],
            ['El cliente...', 'Ya conoce el producto', 'Cambia su hábito', 'Descubre nueva necesidad'],
            ['Ejemplo', 'Actualización de app', 'Netflix vs Videoclub', 'La invención de Internet'],
          ],
          teacherNotes: 'Repase la tabla línea por línea asegurando que la clase entienda los contrastes.',
        },

        // ── Diapositiva 10: Pregunta de análisis ──
        {
          type: 'question',
          question: 'Si un restaurante crea una app para pedir comida a domicilio, ¿qué tipo de innovación es?',
          context: 'Piensa: ¿el restaurante dejó de ser restaurante? ¿Creó un mercado nuevo o solo mejoró su servicio?',
          options: ['Innovación Progresiva', 'Innovación Disruptiva', 'Innovación Radical'],
          answer: 'Innovación Progresiva',
          explanation: 'El restaurante sigue vendiendo la misma comida. Solo agregó una mejora gradual en la forma de pedir.',
          teacherNotes: 'Discuta con el grupo antes de mostrar la respuesta.',
        },

        // ── Diapositiva 11: Quiz Interactivo ──
        {
          type: 'quiz',
          title: 'Comprobación de Aprendizaje',
          description: 'Responde las preguntas en pantalla junto con tu grupo.',
          quizTitle: '¿Qué tanto aprendimos hoy?',
          questions: [
            {
              id: 'q1',
              question: 'Un fabricante de televisores mejora la resolución de pantalla. ¿Qué tipo de innovación es?',
              options: ['Progresiva', 'Disruptiva', 'Radical'],
              correctIndex: 0,
              feedback: {
                correct: '¡Correcto! Es una mejora gradual sobre un producto conocido.',
                incorrect: 'Recuerda que cuando solo se mejora un producto existente sin cambiar el mercado, es **progresiva**.',
              },
            },
            {
              id: 'q2',
              question: 'La plataforma Spotify cambió la forma en que consumimos música sin comprar CDs. ¿Es una innovación...?',
              options: ['Progresiva', 'Disruptiva', 'Radical'],
              correctIndex: 1,
              feedback: {
                correct: '¡Exacto! Transformó el mercado de la música.',
                incorrect: 'Spotify transformó un mercado existente de forma abrupta: es una innovación **disruptiva**.',
              },
            },
            {
              id: 'q3',
              question: 'La invención de la imprenta permitió la producción masiva de libros por primera vez. ¿Fue una innovación...?',
              options: ['Progresiva', 'Disruptiva', 'Radical'],
              correctIndex: 2,
              feedback: {
                correct: '¡Muy bien! Creó una industria y mercado totalmente nuevos.',
                incorrect: 'La imprenta creó una posibilidad histórica totalmente nueva: fue una innovación **radical**.',
              },
            },
          ],
          teacherNotes: 'Resuelvan el quiz colectivamente pidiendo la respuesta a diferentes estudiantes.',
        },

        // ── Diapositiva 12: Verdadero o Falso ──
        {
          type: 'trueFalse',
          title: 'Evaluación Rápida: Verdadero o Falso',
          tfTitle: 'Analicemos estas 3 afirmaciones:',
          statements: [
            {
              id: 'tf1',
              statement: 'La innovación tecnológica siempre requiere inventar algo totalmente nuevo.',
              answer: false,
              explanation: '**Falso.** La innovación progresiva demuestra que mejorar algo existente también es innovar.',
            },
            {
              id: 'tf2',
              statement: 'La innovación disruptiva transforma la forma en que las personas consumen un producto.',
              answer: true,
              explanation: '**Verdadero.** Cambia hábitos y transforma mercados.',
            },
            {
              id: 'tf3',
              statement: 'La innovación radical no tiene ningún riesgo para las empresas.',
              answer: false,
              explanation: '**Falso.** Al crear cosas que no existen, el riesgo es sumamente alto.',
            },
          ],
          teacherNotes: 'Pida que alcen la mano los que votan Verdadero y los que votan Falso antes de verificar.',
        },

        // ── Diapositiva 13: Actividad Práctica ──
        {
          type: 'activity',
          title: 'Actividad en Clase: "Innovaciones en mi Mundo"',
          activityTitle: 'Instrucciones para la actividad:',
          icon: '🔍',
          instructions: 'En parejas, piensen en una tecnología que usen a diario y respondan:',
          steps: [
            '¿Qué necesidad o problema resuelve esa tecnología?',
            '¿Cómo hacían las personas esa misma tarea antes?',
            '¿A qué tipo de innovación (progresiva, disruptiva o radical) corresponde?',
          ],
          tip: 'Pueden elegir aplicaciones de su celular, objetos del colegio o electrodomésticos de su casa.',
          teacherNotes: 'Dé 10 minutos para el trabajo en parejas y luego pida a 2 parejas que expongan su análisis.',
        },

        // ── Diapositiva 14: Resumen ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Lo que no debes olvidar hoy:',
          points: [
            'La **innovación tecnológica** aplica tecnología para resolver problemas humanos de forma nueva o mejorada.',
            'La **innovación progresiva** realiza mejoras pequeñas y paso a paso (riesgo bajo).',
            'La **innovación disruptiva** transforma mercados existentes y hábitos (riesgo medio-alto).',
            'La **innovación radical** crea productos y mercados que nunca antes habían existido (riesgo muy alto).',
          ],
          teacherNotes: 'Haga una breve síntesis oral de 2 minutos antes de dar por concluida la lección.',
        },
      ],
    },
  ],
}
