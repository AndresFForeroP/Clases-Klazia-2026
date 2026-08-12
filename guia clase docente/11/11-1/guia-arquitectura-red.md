# Guía Docente — Características de la Arquitectura de Red (Presentación Interactiva)
## Grado 11.º — Grupo 1

---

## Propósito de esta Guía
Esta guía acompaña la **presentación académica interactiva** del curso **11-1**. La plataforma está estructurada para ser proyectada en clase, permitiendo al docente controlar el avance diapositiva por diapositiva mientras explica los conceptos oralmente.

**Tema:** Características fundamentales de la arquitectura de red (Tolerancia a fallas, Escalabilidad, Calidad de Servicio y Seguridad).
**Nivel:** Avanzado (11.º Grado).
**Duración estimada:** 1 sesión de clase (45-60 minutos).

---

## 📋 Guía Diapositiva por Diapositiva

### Diapositiva 1 — Título y Objetivos de Aprendizaje
* **Qué proyectar**: Título "Características de la Arquitectura de Red" y lista de objetivos.
* **Qué explicar oralmente**: Dar la bienvenida a la clase. Indicar que hoy analizarán la infraestructura que hace posible que Internet funcione para miles de millones de usuarios simultáneamente.
* **Notas pedagógicas**: Pregunte brevemente: *"¿Qué servicios digitales usan diariamente que no podrían tolerar caídas constantes?"* (ej. bancos, transporte, videollamadas).

---

### Diapositiva 2 — Pregunta Disparadora de Discusión
* **Qué proyectar**: Pregunta *"¿Qué ocurriría si Internet dejara de funcionar durante 24 horas?"*.
* **Qué hacer en clase**: Permita 2 o 3 opiniones antes de revelar la respuesta. La idea es dimensionar la dependencia crítica de la infraestructura digital.
* **Acción en plataforma**: Dar clic en **"Revelar respuesta y explicación"** para consolidar el punto sobre la necesidad de una arquitectura robusta.

---

### Diapositiva 3 — ¿Qué es la Arquitectura de Red?
* **Qué proyectar**: Concepto fundamental, definición y puntos clave.
* **Qué explicar oralmente**: *"La arquitectura de red no es solo el cableado o las antenas; es la integración de tecnologías físicas, servicios y protocolos lógicos que permiten transmitir mensajes a través de cualquier medio."*
* **Ideas fuerza**: Infraestructura física vs. procesos lógicos, diversidad de aplicaciones, evolución constante.

---

### Diapositiva 4 — Las 4 Características Fundamentales (Visión General)
* **Qué proyectar**: Diagrama comparativo de las 4 pilares: Tolerancia a fallas, Escalabilidad, QoS y Seguridad.
* **Qué explicar oralmente**: Indicar que estas 4 características representan los requerimientos mínimos de las redes modernas convergentes.
* **Nota**: Esta diapositiva sirve como mapa mental para la lección.

---

### Diapositiva 5 — Característica 1: Tolerancia a Fallas
* **Qué proyectar**: Concepto de Tolerancia a Fallas.
* **Qué enfatizar**: La tolerancia a fallas **no evita que los componentes fallen**, sino que **limita el impacto** y garantiza la recuperación inmediata mediante **redundancia**.
* **Concepto técnico**: Rutas y enlaces redundantes, enrutamiento dinámico instantáneo y transparente al usuario.

---

### Diapositiva 6 — Ejemplo Práctico: Redundancia de Rutas en Internet
* **Qué proyectar**: Ejemplo visual de redundancia y caso real de cables submarinos.
* **Qué explicar**: *"Cuando envías un paquete de datos, no hay un solo camino. Si un cable bajo el océano se rompe, los routers recalculan la ruta en milisegundos."*
* **Pregunta sugerida**: *"¿Qué pasaría si la red del colegio dependiera de un único cable sin respaldo?"*

---

### Diapositiva 7 — Característica 2: Escalabilidad
* **Qué proyectar**: Concepto de Escalabilidad.
* **Qué enfatizar**: La capacidad de crecer rápidamente para admitir nuevos usuarios y proveedores sin degradar el rendimiento de los usuarios existentes.
* **Punto clave**: Se logra gracias a una infraestructura estructurada en un **diseño jerárquico en capas**.

---

### Diapositiva 8 — Ejemplo Práctico: Crecer sin Romper (Diseño Jerárquico)
* **Qué proyectar**: Diagrama de capas (Tier 1, Tier 2, Tier 3).
* **Analogía**: Sistema de vías de transporte (caminos veredales → vías urbanas → autopistas principales).
* **Explicación**: *"Se pueden agregar millones de casas a la red sin modificar las arterias principales de Internet."*

---

### Diapositiva 9 — Pregunta Intermedia de Comprensión
* **Qué proyectar**: *"¿Cuál es la diferencia fundamental entre tolerancia a fallas y escalabilidad?"*.
* **Gestión del debate**: Pedir que un estudiante diferencie entre responder a fallas (reacción) y permitir crecimiento (expansión).
* **Objetivo**: Asegurar la comprensión antes de pasar a Calidad de Servicio.

---

### Diapositiva 10 — Característica 3: Calidad de Servicio (QoS)
* **Qué proyectar**: Concepto de QoS y redes convergentes.
* **Qué explicar**: *"Las redes antiguas llevaban solo datos o solo voz. Las redes modernas son convergentes y llevan todo al mismo tiempo. QoS decide qué paquete pasa primero."*
* **Concepto clave**: Latencia vs. tolerancia a retrasos.

---

### Diapositiva 11 — Caso de Aplicación: Videollamada vs. Descarga
* **Qué proyectar**: Comparativa visual entre tráfico de tiempo real y descargas.
* **Explicación**: *"Un paquete de voz retrasado 2 segundos arruina una llamada. Un paquete de correo retrasado 2 segundos es imperceptible."*
* **Analogía**: Triaje en una sala de emergencias médica.

---

### Diapositiva 12 — Característica 4: Seguridad
* **Qué proyectar**: Concepto de Seguridad en la Arquitectura.
* **Qué enfatizar**: La necesidad de incorporar seguridad en la arquitectura de red debido al cambio de uso (de entorno académico/gubernamental a transacciones comerciales y personales críticas).
* **Punto clave**: Privacidad, autenticación y herramientas de protección sobre defectos inherentes del diseño original.

---

### Diapositiva 13 — Evolución Histórica de la Seguridad
* **Qué proyectar**: De ARPANET al comercio electrónico global.
* **Explicación**: *"Internet no nació pensado para proteger información bancaria. Agregar seguridad a una red abierta en funcionamiento es un reto técnico constante."*

---

### Diapositiva 14 — Pregunta de Análisis
* **Qué proyectar**: *"¿Por qué es tan difícil lograr seguridad completa en Internet si sabemos que es necesaria?"*.
* **Debate docente**: Discutir cómo los principios iniciales de apertura chocan con las necesidades actuales de cifrado y control.

---

### Diapositiva 15 — Tabla Comparativa de Sintesis
* **Qué proyectar**: Tabla resumen con las 4 características, problemas que resuelven y ejemplos.
* **Uso en clase**: Repasar rápidamente para fijar la estructura previa a la evaluación.

---

### Diapositiva 16 — Verdadero o Falso
* **Qué proyectar**: 4 afirmaciones de comprobación rápida.
* **Dinámica**: Solicitar justificación técnica para cada opción seleccionada por los estudiantes.

---

### Diapositiva 17 — Quiz Interactivo de Comprobación
* **Qué proyectar**: Cuestionario interactivo de 4 preguntas.
* **Dinámica**: Resolver colectivamente o llamar a estudiantes para seleccionar las respuestas en pantalla.

---

### Diapositiva 18 — Actividad Práctica: "Caso Práctico de Empresa"
* **Qué proyectar**: Instrucciones para el diseño de red empresarial en grupos de 3.
* **Tiempo sugerido**: 12-15 minutos.
* **Socialización**: Pedir a 2 grupos que expongan cómo resolvieron los 4 pilares en su empresa ficticia.

---

### Diapositiva 19 — Cierre de la Clase
* **Qué proyectar**: Resumen final con los 5 puntos indispensables a recordar.
* **Cierre oral**: Conclusión por parte del docente destacando la arquitectura de red como la base invisible del mundo digital.

---

## 🎯 Recomendaciones Pedagógicas y Errores Frecuentes

| Error Frecuente del Estudiante | Cómo Corregir |
|--------------------------------|---------------|
| Confundir Redundancia con Duplicidad Innecesaria | Explicar que la redundancia en redes es planeada y estratégica para garantizar disponibilidad |
| Creer que QoS aumentará la velocidad de Internet | Aclarar que QoS no crea más ancho de banda, sino que lo administra y prioriza mejor |
| Asumir que la seguridad es solo instalar un antivirus | Mostrar que la seguridad abarca cifrado en transito, arquitectura física y protocolos |

---

## 🔬 Ampliación para Grupos Avanzados
Si el grupo domina los conceptos rápidamente, proponga:
* **Debate sobre IPv4 vs. IPv6**: ¿Cómo se relaciona la transición a IPv6 con la escalabilidad de Internet?
* **Investigación sobre CDN (Content Delivery Networks)**: ¿De qué manera las CDNs mejoran la tolerancia a fallas y QoS para streaming?
