/**
 * Contenido educativo — Grado 6.º Grupo 1
 * Tema: Ver una Presentación
 *
 * Fuente: cursos/6/6-1.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva.
 * Restricciones: Cero preguntas, Cero actividades, Cierre con Resumen.
 */

export const course6_1 = {
  title: 'Ver una Presentación',
  description: 'Aprende a preparar, revisar y proyectar presentaciones en pantalla, los modos de control, efectos visuales de animación y los distintos medios de exposición.',
  lessons: [
    {
      id: 'ver-una-presentacion',
      title: 'Ver una Presentación',
      description: 'Presentación académica guiada para la clase presencial de 6.º grado.',
      slides: [
        // ── Diapositiva 1: Portada y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 6.º — Grupo 1',
          title: 'Ver una Presentación',
          subtitle: 'Cómo preparar, proyectar y mostrar tus diapositivas con éxito',
          objectives: [
            'Comprender la importancia de revisar y visualizar una presentación antes de exponer.',
            'Conocer las diferentes formas de mostrar una presentación (pantalla, papel y medios físicos).',
            'Aprender los modos de ejecución en pantalla (manual, automático, listas y en red).',
            'Diferenciar entre transiciones (entre diapositivas) y progresiones (elementos paso a paso).'
          ],
          teacherNotes: 'Introduzca la clase explicando que diseñar diapositivas es solo una parte del trabajo; la otra parte esencial es saber cómo proyectarlas, revisarlas y presentarlas para que el público las entienda con total claridad.'
        },

        // ── Diapositiva 2: Revisar antes de exponer ──
        {
          type: 'concept',
          category: 'Paso Previo Fundamental',
          title: 'Revisar antes de Exponer',
          mainIdea: 'Una vez terminadas las diapositivas, es indispensable **visualizarlas completas o imprimirlas** antes de hablar frente al público.',
          definition: 'Revisar la presentación permite detectar a tiempo erratas ortográficas, textos desalineados o explicaciones confusas que pasaron desapercibidas durante el diseño.',
          analogy: '**Como el ensayo general de una obra de teatro:** Los actores practican con vestuario y luces antes del estreno para corregir cualquier detalle a tiempo.',
          keyPoints: [
            'El éxito de una presentación depende del **contenido**, el **diseño** y la **elocuencia** del orador.',
            'Ver las diapositivas en pantalla grande ayuda a comprobar si los textos se leen desde lejos.',
            'Permite modificar o reordenar cualquier página antes del momento de la exposición.'
          ],
          teacherNotes: 'Enfatice a los estudiantes que incluso los profesionales siempre revisan sus diapositivas antes de exponer. Pregunte de forma retórica si alguna vez han visto una presentación con una letra cortada o un color que no se leía.'
        },

        // ── Diapositiva 3: Cuatro formas de ver una presentación ──
        {
          type: 'diagram',
          category: 'Panorama General',
          title: '4 Formas de Ver una Presentación',
          subtitle: 'Podemos mostrar nuestro trabajo utilizando distintos medios digitales y físicos:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Medio Digital',
              title: '🖥️ En Pantalla',
              desc: 'La forma más habitual hoy: proyectada desde un computador ocupando toda la pantalla sin menús ni distracciones.'
            },
            {
              badge: 'Láminas Plásticas',
              title: '📽️ Transparencias',
              desc: 'Hojas plásticas transparentes (acetatos) impresas en blanco y negro o color para retroproyectores de luz.'
            },
            {
              badge: 'Medio Fotográfico',
              title: '🎞️ Diapositivas 35 mm',
              desc: 'Películas fotográficas transparentes en pequeños marcos, utilizadas tradicionalmente en proyectores de diapositivas.'
            },
            {
              badge: 'Documento Físico',
              title: '📄 Copias en Papel',
              desc: 'Páginas impresas en escala de grises o color para entregar a los asistentes en reuniones informales.'
            }
          ],
          teacherNotes: 'Explique cómo ha evolucionado la tecnología: antes de que existieran los videoproyectores digitales en todas las aulas, los profesores y expositores utilizaban transparencias plásticas o rollos fotográficos de 35 mm.'
        },

        // ── Diapositiva 4: Presentaciones en Pantalla de Computador ──
        {
          type: 'concept',
          category: 'El Medio Digital Principal',
          title: 'Presentaciones en Pantalla',
          mainIdea: 'Al proyectar en un ordenador, la presentación **ocupa toda la pantalla** y oculta las herramientas de edición.',
          definition: 'El modo de presentación a pantalla completa oculta menús, barras de herramientas y botones para que la audiencia se enfoque exclusivamente en el mensaje.',
          analogy: '**Como ver una película en el cine:** Se apagan las luces de la sala y se eliminan todas las distracciones alrededor para concentrarse en la proyección.',
          keyPoints: [
            'El contenido se ubica en el centro visual del escenario.',
            'Elimina barras de herramientas que distraen al público.',
            'Permite combinar texto, imágenes, animaciones y sonido en tiempo real.'
          ],
          teacherNotes: 'Muestre la diferencia entre estar editando en el programa (donde se ven botones, pestañas y paneles laterales) y pasar al "Modo Presentación" en pantalla completa.'
        },

        // ── Diapositiva 5: Modos de Ejecución en Ordenador ──
        {
          type: 'diagram',
          category: 'Formas de Control',
          title: 'Modos de Ejecutar en Pantalla',
          subtitle: 'El computador ofrece 4 formas diferentes de pasar y controlar las diapositivas:',
          diagramType: 'flow',
          nodes: [
            { icon: '🖱️', label: 'Modo Manual', desc: 'El orador avanza con clic, ratón o teclado' },
            { icon: '⏱️', label: 'Por Intervalos', desc: 'Avanza sola por tiempo o en ciclo continuo' },
            { icon: '📂', label: 'Desde Fichero', desc: 'Lista secuencial de varias presentaciones' },
            { icon: '🌐', label: 'Modo Remoto / Red', desc: 'Notas privadas para el expositor en su pantalla' }
          ],
          teacherNotes: 'Recorra cada uno de los cuatro nodos explicando para qué sirve cada uno: el manual es el clásico de clase; los intervalos se usan en ferias de ciencias para que corran solas; el modo fichero encadena temas; y el modo en red/remoto asiste al conferencista.'
        },

        // ── Diapositiva 6: Modo Remoto y Vista del Orador ──
        {
          type: 'example',
          category: 'Función Especial para Expositores',
          title: 'Modo Remoto y Vista del Orador',
          subtitle: '¿Cómo exponer como un profesional usando dos pantallas?',
          icon: '🖥️',
          description: 'Al conectar el computador a un proyector o a varios equipos en red, el orador puede ver sus **notas privadas y la siguiente diapositiva** en su monitor, mientras el público solo ve la diapositiva principal en grande.',
          analogy: 'Es como el "teleprómpter" de los presentadores de noticias en televisión: una ayuda visual privada que la audiencia no ve.',
          features: [
            '**Notas del orador:** Permite leer recordatorios y datos clave sin tener que memorizarlo todo.',
            '**Control del tiempo:** Muestra un cronómetro con los minutos transcurridos de la exposición.',
            '**Vista previa:** Anticipa cuál es la siguiente diapositiva para preparar lo que vas a decir.'
          ],
          teacherNotes: 'Explique cómo el docente utiliza frecuentemente esta función al proyectar en el salón: en su pantalla privada tiene las notas y el tiempo, mientras los alumnos solo ven el contenido limpio en el proyector.'
        },

        // ── Diapositiva 7: Efectos de Animación y Sonido ──
        {
          type: 'concept',
          category: 'Dinámica Visual',
          title: 'Efectos de Animación y Sonido',
          mainIdea: 'Las animaciones sirven para **guiar la mirada del público** hacia los puntos clave y hacer más amena la clase.',
          definition: 'Las animaciones deben apoyar la explicación del orador. El exceso de efectos visuales o de sonidos repetitivos distrae y cansa a la audiencia.',
          analogy: '**La sal en la comida:** Una pizca adecuada realza el sabor; pero si agregas demasiada sal, arruinas el plato por completo.',
          keyPoints: [
            '**Dirección natural:** Mostrar ideas desde la izquierda y destacar puntos clave hacia la derecha.',
            '**Sonido puntual:** Un efecto sonoro breve despierta atención; sonidos constantes desvían el foco del tema.',
            '**Regla de moderación:** Utiliza animaciones solo cuando aporten claridad al concepto.'
          ],
          teacherNotes: 'Advierta sobre uno de los errores más frecuentes en 6.º grado: agregar giros, rebotes y sonidos a cada palabra, lo que distrae al público en vez de ayudar a la explicación.'
        },

        // ── Diapositiva 8: Transiciones vs Progresiones ──
        {
          type: 'diagram',
          category: 'Comparación Técnica',
          title: 'Transiciones vs. Progresiones',
          subtitle: 'Dos efectos visuales fundamentales con funciones muy distintas:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Entre Páginas',
              title: '🔄 Transiciones',
              desc: 'Efecto especial que se produce **al cambiar de una diapositiva a la siguiente** durante la exposición.\n\n*Ejemplos:* Fundido a negro, disolver, empuje suave, persianas.',
              metrics: { 'Ámbito': 'Toda la diapositiva', 'Momento': 'Paso entre páginas' }
            },
            {
              badge: 'Dentro de la Página',
              title: '✨ Progresiones',
              desc: 'Efecto para que los **textos e imágenes aparezcan paso a paso** dentro de la misma diapositiva.\n\n*Ejemplos:* Volar hacia adentro, aparecer al hacer clic, atenuar puntos anteriores.',
              metrics: { 'Ámbito': 'Elementos individuales', 'Momento': 'Durante la explicación' }
            }
          ],
          teacherNotes: 'Asegúrese de que los alumnos diferencien claramente: Transición = cambia la diapositiva completa; Progresión = aparecen los elementos uno a uno dentro de la misma diapositiva.'
        },

        // ── Diapositiva 9: El Poder de las Progresiones ──
        {
          type: 'example',
          category: 'Técnica de Exposición',
          title: 'El Poder de las Progresiones',
          subtitle: '¿Por qué no mostrar todo el texto de una sola vez?',
          icon: '🪜',
          description: 'Si una diapositiva muestra todo su texto a la vez, el público se adelanta a leer el final antes de que el orador termine de explicar el inicio. Las **progresiones** dosifican la información al ritmo de la voz.',
          analogy: 'Es como subir una escalera escalón por escalón: no se puede llegar al tercer piso sin pasar por el primero.',
          features: [
            '**Aparición gradual:** Cada idea aparece exactamente en el instante en que el expositor la menciona.',
            '**Técnica de atenuación:** Los puntos anteriores bajan de brillo o cambian de color para resaltar la idea que se está explicando.',
            '**Efectos recomendados:** Desvanecer suavemente, división sutil, barras o descubrir sin movimientos bruscos.'
          ],
          teacherNotes: 'Demuestre oralmente cómo cambia una explicación cuando los puntos van apareciendo a medida que se habla, evitando que los estudiantes se distraigan leyendo el final de la lista.'
        },

        // ── Diapositiva 10: El Ritmo y la Regla del Texto ──
        {
          type: 'concept',
          category: 'Diseño y Comunicación',
          title: 'El Ritmo de la Presentación',
          mainIdea: 'Si una diapositiva tiene demasiado texto o imágenes, **divídela en dos o tres páginas** y agranda la letra.',
          definition: 'Demasiadas palabras en una pantalla distraen al público. El ensayo previo ayuda a calcular el tiempo y evaluar el impacto visual de cada página.',
          analogy: '**Un cartel en la carretera:** Debe leerse y comprenderse en 3 segundos con letra grande y clara.',
          keyPoints: [
            '**Una idea por diapositiva:** Facilita la comprensión inmediata del público.',
            '**Letra grande y legible:** Debe leerse sin esfuerzo desde la última fila del aula.',
            '**Ensayar el ritmo:** Medir cuánto tiempo dedicarás a cada punto para no correr al final.'
          ],
          teacherNotes: 'Recuerde a los estudiantes la regla de oro: las diapositivas son un soporte visual de apoyo para el orador, no un libro de texto para leerlo de corrido.'
        },

        // ── Diapositiva 11: Medios Físicos e Históricos ──
        {
          type: 'diagram',
          category: 'Medios Tradicionales',
          title: 'Transparencias, 35 mm y Papel',
          subtitle: 'Otras formas de presentar y distribuir nuestro trabajo:',
          diagramType: 'table',
          tableHeaders: ['Medio', '¿Cómo funciona?', 'Uso principal', 'Consejo técnico'],
          tableRows: [
            ['Transparencias (Acetato)', 'Hojas plásticas transparentes impresas para retroproyector de luz.', 'Aulas tradicionales sin ordenadores.', 'Los colores pueden variar respecto a la pantalla; elegir bien orientación vertical u horizontal.'],
            ['Diapositivas 35 mm', 'Películas fotográficas transparentes reveladas en marcos de 35 mm.', 'Conferencias magistrales históricas y fotografía.', 'Requieren un archivo especial enviado a una oficina de servicios o filmadora.'],
            ['Copias en Papel', 'Hojas impresas en blanco y negro o color para entregar a los asistentes.', 'Reuniones informales y material de estudio.', 'Diseñar gráficos legibles en escala de grises para impresoras láser.']
          ],
          teacherNotes: 'Describa cómo las transparencias y diapositivas de 35 mm sentaron las bases de las presentaciones modernas antes de la llegada de las pantallas digitales.'
        },

        // ── Diapositiva 12: Resumen y Cierre ──
        {
          type: 'summary',
          title: 'Resumen de la Clase',
          summaryTitle: 'Puntos clave que debes recordar:',
          points: [
            '**Revisión previa:** Visualizar e imprimir las diapositivas antes de exponer permite corregir erratas, cuidar el diseño y garantizar el éxito.',
            '**Presentación en pantalla:** Ocupa toda la superficie del monitor, oculta barras de menú y sitúa el contenido en el centro visual.',
            '**4 modos de control:** Manual (ratón/teclas), por intervalos automáticos (tiempos/ciclos), desde fichero (lista en cadena) y en red/remoto (notas privadas del orador).',
            '**Transiciones vs. Progresiones:** Las transiciones animan el cambio entre diapositivas completas; las progresiones muestran textos e imágenes paso a paso dentro de la diapositiva.',
            '**Diseño y moderación:** Mantener una idea por diapositiva, letra grande, ritmo ensayado y efectos visuales moderados aseguran una exposición clara y profesional.'
          ],
          teacherNotes: 'Haga un cierre motivador recordando a los estudiantes que aplicar estas buenas prácticas les permitirá destacar en sus exposiciones orales en cualquier asignatura.'
        }
      ]
    }
  ]
}
