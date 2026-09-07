/**
 * Contenido educativo — Grado 10.º Grupo 2
 * Tema: Google Drive y Herramientas Colaborativas en la Nube
 *
 * Fuente: cursos/10/10-2.md
 * Formato: Presentación Académica Interactiva (Diapositiva por Diapositiva)
 * Regla principal: UNA sola idea por diapositiva. Nivel técnico, analítico y profesional para 10.º grado.
 */

export const course10_2 = {
  title: 'Google Drive y Trabajo Colaborativo en la Nube',
  description: 'Presentación técnica y analítica sobre almacenamiento distribuido, ofimática cloud, concurrencia en tiempo real y seguridad organizacional con Google Workspace.',
  lessons: [
    {
      id: 'google-drive',
      title: 'Google Drive y Herramientas Colaborativas',
      description: 'Presentación académica guiada para la clase presencial de 10.º grado.',
      slides: [
        // ── Diapositiva 1: Portada y Objetivos ──
        {
          type: 'title',
          badge: 'Informática 10.º — Grupo 2',
          title: 'Google Drive y Ecosistema Cloud',
          subtitle: 'Almacenamiento Distribuido, Edición Concurrente y Colaboración Empresarial',
          objectives: [
            'Analizar la arquitectura y funcionamiento del almacenamiento en la nube de Google Drive.',
            'Comprender la sincronización en tiempo real, el control de concurrencia y el historial de versiones.',
            'Evaluar las herramientas colaborativas integradas (Photos, Groups, Meet) y su impacto en la seguridad corporativa.',
          ],
          teacherNotes: '**Sugerencia inicial:** Pregunte a los estudiantes cuántos de ellos han trabajado en un mismo documento a la vez con otras personas y qué ventajas tiene frente a enviar archivos adjuntos por correo.',
        },

        // ── Diapositiva 2: Fundamento y Origen de Google Drive ──
        {
          type: 'concept',
          category: 'Arquitectura y Origen',
          title: '¿Qué es Google Drive?',
          mainIdea: 'Es un servicio de **alojamiento y computación en la nube** lanzado en 2012 que almacena datos en servidores remotos distribuidos globalmente.',
          definition: 'Sustituyó a Google Docs al centralizar programas ofimáticos, almacenamiento masivo y sincronización automática accesible desde cualquier dispositivo conectado a internet.',
          keyPoints: [
            '15 GB de almacenamiento gratuito base con opciones escalables.',
            'Centralización de correos, archivos, documentos e imágenes en un solo entorno unificado.',
            'Disponibilidad ubicua 24/7 sin dependencia de hardware local.',
          ],
          teacherNotes: 'Enfatice la transición de archivos locales guardados en discos duros a la computación en la nube (Cloud Computing).',
        },

        // ── Diapositiva 3: Comparativa Local vs Cloud ──
        {
          type: 'diagram',
          category: 'Comparativa Tecnológica',
          title: 'Ofimática Tradicional vs. Ecosistema Cloud',
          subtitle: 'Diferencias arquitectónicas y de flujo de trabajo:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Modelo Local',
              title: 'Software de Escritorio',
              desc: 'Archivos almacenados en el disco local. Para compartir se requiere enviar copias por correo o memorias USB.',
              metrics: { 'Ubicación': 'Disco físico', 'Colaboración': 'Secuencial / Asíncrona' },
            },
            {
              badge: 'Modelo Cloud',
              title: 'Google Drive / Workspace',
              desc: 'Datos en centros de datos remotos sincronizados en tiempo real. Múltiples usuarios acceden a una única fuente de verdad.',
              metrics: { 'Ubicación': 'Servidores remotos', 'Colaboración': 'Simultánea en vivo' },
            },
            {
              badge: 'Seguridad',
              title: 'Respaldo y Continuidad',
              desc: 'Inmune a daños físicos en la máquina del usuario local. Cifrado automático y copias de seguridad continuas.',
              metrics: { 'Respaldo': 'Automático global', 'Acceso': 'Multiplataforma' },
            },
          ],
          teacherNotes: 'Explique cómo el modelo cloud elimina el problema clásico de tener múltiples versiones confusas de un mismo archivo (ej. documento_v1_final_final2.docx).',
        },

        // ── Diapositiva 4: Funciones Principales de Google Drive ──
        {
          type: 'concept',
          category: 'Capacidades del Sistema',
          title: 'Funciones Clave de la Plataforma',
          mainIdea: 'Google Drive no es solo un disco virtual; es un **entorno operativo completo de productividad** y gestión de información.',
          definition: 'Integra creación multiformato, motores de búsqueda inteligente, herramientas predictivas y accesibilidad por comandos de voz.',
          keyPoints: [
            '**Creación y conversión multiformato**: Documentos, hojas de cálculo, presentaciones y formularios con exportación versátil.',
            '**Búsqueda e indexación predictiva**: Búsqueda rápida por metadatos, texto dentro de imágenes y sugerencias inteligentes de acciones.',
            '**Accesibilidad avanzada**: Integración nativa de comandos de voz y dictado automático en documentos.',
          ],
          teacherNotes: 'Muestre cómo la IA predictiva de Google sugiere archivos recientes o acciones según los hábitos de uso del usuario.',
        },

        // ── Diapositiva 5: Concurrencia y Trabajo Colaborativo en Tiempo Real ──
        {
          type: 'concept',
          category: 'Ingeniería de Software & UX',
          title: 'Edición Concurrente y Control de Versiones',
          mainIdea: 'Varios usuarios pueden interactuar, editar y comentar **simultáneamente sobre el mismo documento** sin bloqueos ni conflictos.',
          definition: 'Google Drive sincroniza al milisegundo cada modificación y almacena un registro exhaustivo de revisiones indexado por usuario, fecha y hora.',
          analogy: '**Trazabilidad total:** Permite ver exactamente qué escribió o modificó cada integrante del equipo y revertir cambios en caso de error (Rollback).',
          keyPoints: [
            'Sincronización en tiempo real mediante WebSockets y protocolos cloud.',
            'Historial de versiones con auditoría detallada por perfil.',
            'Comentarios, menciones (@usuario) y asignación de tareas integradas.',
          ],
          teacherNotes: 'Resalte la importancia del historial de versiones en entornos corporativos para auditoría y seguridad de datos.',
        },

        // ── Diapositiva 6: Publicación y Seguridad de Accesos ──
        {
          type: 'example',
          category: 'Políticas de Seguridad',
          title: 'Gestión de Permisos y Publicación',
          subtitle: 'Control granular del acceso a la información:',
          icon: '🔐',
          description: 'En entornos profesionales y empresariales, compartir un archivo requiere definir con precisión el nivel de privilegio de cada receptor.',
          analogy: 'Principio de menor privilegio: Asignar únicamente los permisos estrictamente necesarios para la tarea.',
          features: [
            '**Lector**: Solo visualización; no puede alterar datos ni fórmulas.',
            '**Comentador**: Puede realizar anotaciones y sugerencias sin modificar el texto original.',
            '**Editor**: Control total para modificar contenido y estructura.',
            '**Publicación web / Acceso por enlace**: Disponibilidad pública controlada o restringida al dominio corporativo.',
          ],
          teacherNotes: 'Pregunte qué riesgo existe si se comparte un archivo corporativo confidencial con permiso de "Editor" a todo público.',
        },

        // ── Diapositiva 7: Herramientas Colaborativas: Photos y Groups ──
        {
          type: 'diagram',
          category: 'Ecosistema Empresarial',
          title: 'Google Photos y Google Groups en la Organización',
          subtitle: 'Aplicaciones estratégicas para PyMEs y equipos de trabajo:',
          diagramType: 'comparison',
          columns: [
            {
              badge: 'Multimedia Cloud',
              title: 'Google Photos',
              desc: 'Almacenamiento, organización por IA y creación de álbumes compartidos. Ideal para que PyMEs gestionen catálogos de productos y galerías de eventos.',
              metrics: { 'Uso clave': 'Catálogos visuales', 'Ventaja': 'Acceso y distribución ágil' },
            },
            {
              badge: 'Comunicación Masiva',
              title: 'Google Groups',
              desc: 'Gestión de listas de distribución de correo corporativo para colaboradores, áreas, clientes y proveedores.',
              metrics: { 'Uso clave': 'Un solo correo a todo el grupo', 'Ventaja': 'Cero dispersión de mensajes' },
            },
          ],
          teacherNotes: 'Explique cómo Google Groups simplifica enviar comunicados oficiales a cientos de empleados sin escribir correos individuales.',
        },

        // ── Diapositiva 8: Videoconferencias Seguras: Google Meet ──
        {
          type: 'concept',
          category: 'Comunicaciones Unificadas',
          title: 'Google Meet y la Seguridad de Comunicación',
          mainIdea: 'Plataforma de videoconferencias de alta fidelidad integrada nativamente al ecosistema de Google Cloud.',
          definition: 'Elimina las barreras geográficas y logísticas mediante reuniones interactivas seguras con cifrado automático de extremo a extremo en tránsito.',
          keyPoints: [
            '**Cifrado automático de datos**: Tráfico de voz y video encriptado para proteger la confidencialidad corporativa.',
            '**Interacción colaborativa**: Pizarra digital, pantalla compartida y subtítulos en vivo integrados.',
            '**Integración directa**: Sincronización instantánea con Google Calendar, Gmail y Drive.',
          ],
          teacherNotes: 'Enfatice el concepto de "Cifrado en tránsito" y por qué es indispensable para la seguridad informática empresarial.',
        },

        // ── Diapositiva 9: Pregunta Analítica de Discusión en Clase ──
        {
          type: 'question',
          question: '¿Por qué el "Historial de versiones" de Google Drive es una medida crítica de seguridad y no solo una función de comodidad?',
          context: 'Analicemos un escenario de riesgo: un empleado borra por error una base de datos de clientes compartida...',
          options: [
            'Porque permite saber a qué hora almuerzan los empleados',
            'Porque actúa como salvaguarda contra pérdida de datos (rollback) y permite auditar la autoría de cada cambio',
            'Porque ahorra espacio de almacenamiento en el servidor de Google',
          ],
          answer: 'Actúa como salvaguarda contra pérdida de datos y permite auditar con precisión qué usuario modificó o eliminó información.',
          explanation: 'En ciberseguridad y gestión de datos, la trazabilidad e inmutabilidad temporal permiten restaurar el estado anterior exacto en segundos (Rollback), mitigando errores humanos y sabotajes.',
          teacherNotes: 'Promueva un breve debate de 2 minutos sobre cómo las empresas gestionan incidentes antes de revelar la respuesta.',
        },

        // ── Diapositiva 10: Actividad Individual ──
        {
          type: 'activity',
          title: 'ACTIVIDAD: Plan de Despliegue Colaborativo Cloud',
          activityTitle: 'Diseño de arquitectura de archivos y matriz de permisos en Google Drive',
          icon: '💼',
          instructions: 'De forma individual, diseña en tu cuaderno o computadora el esquema de trabajo en Google Drive para una pequeña empresa de diseño (5–10 minutos):',
          steps: [
            'Define una estructura de 3 carpetas principales para la empresa (ej. Proyectos, Finanzas, Catálogo Público).',
            'Determina qué nivel de permiso (Lector, Comentador o Editor) asignarías a: el Administrador, los Clientes externos y el Equipo de Diseñadores.',
            'Indica qué herramienta integrada (Google Photos, Groups o Meet) utilizarías para enviar comunicados a todos los clientes y por qué.',
            'Explica qué medida de seguridad de Google Drive aplicarías para evitar que se filtren archivos confidenciales fuera de la empresa.',
          ],
          tip: 'Tiempo estimado: 5 a 10 minutos. Enfoque técnico y profesional individual.',
          teacherNotes: 'Revise que los estudiantes apliquen correctamente los conceptos de niveles de permisos y herramientas integradas.',
        },

        // ── Diapositiva 11: Resumen de Cierre ──
        {
          type: 'summary',
          title: 'Cierre de la Clase',
          summaryTitle: 'Conceptos fundamentales para recordar:',
          points: [
            '**Google Drive** es un entorno cloud de almacenamiento distribuido que sustituyó a Google Docs en 2012.',
            'Ofrece **edición concurrente en tiempo real**, sincronización continua y **historial de versiones** con trazabilidad por usuario.',
            'La **gestión de permisos** (Lector, Comentador, Editor) es la primera línea de defensa en la seguridad de la información.',
            'Las herramientas integradas como **Google Photos**, **Google Groups** y **Google Meet** potencian la productividad y la comunicación corporativa cifrada.',
          ],
          teacherNotes: 'Realice una síntesis final destacando cómo la computación en la nube redefine el entorno laboral actual.',
        },
      ],
    },
  ],
}
