# Guía Docente — Análisis Interior (Presentación Interactiva)
## Grado 8.º — Grupo 2

---

## Propósito de esta Guía
Esta guía acompaña la **presentación académica interactiva** del curso **8-2**. La plataforma está estructurada para ser proyectada en clase, permitiendo al docente controlar el avance diapositiva por diapositiva mientras explica los conceptos oralmente.

**Tema:** Análisis de vulnerabilidades internas en una organización (Análisis Interior).
**Nivel:** Intermedio (8.º Grado).
**Fuente:** `cursos/8/8-2.md`
**Duración estimada:** 1 sesión de clase (45-60 minutos).

---

## 📋 Guía Diapositiva por Diapositiva

### Diapositiva 1 — Título y Objetivos de Aprendizaje
* **Qué proyectar**: Título "Análisis Interior" y lista de objetivos.
* **Qué explicar oralmente**: Presentar el tema de la clase. Indicar que hoy verán cómo se evalúa la seguridad de una organización desde la perspectiva de un usuario interno normal.
* **Pregunta inicial**: *"¿Creen que solo los hackers externos pueden causar problemas en la red de una empresa?"*

---

### Diapositiva 2 — Pregunta Disparadora de Discusión
* **Qué proyectar**: Pregunta sobre riesgos internos vs. externos.
* **Qué hacer en clase**: Permitir 2 o 3 intervenciones de los estudiantes antes de revelar la respuesta.
* **Acción en plataforma**: Dar clic en **"Revelar respuesta y explicación"**.

---

### Diapositiva 3 — ¿Qué es un Análisis Interior?
* **Qué proyectar**: Concepto principal y requerimientos.
* **Qué explicar oralmente**: *"Para hacer un análisis interior no se usan contraseñas robadas ni programas secretos. La empresa le entrega al analista un equipo con un usuario y una clave normal."*
* **Puntos clave**: Probar privilegios típicos, identificar debilidades internas antes de que ocurra un incidente.

---

### Diapositiva 4 — Analogía: Revisar la Seguridad del Colegio
* **Qué proyectar**: Ejemplo visual con la analogía escolar.
* **Qué explicar**: *"Imagina que alguien entra al colegio como un estudiante normal e intenta ver si puede acceder a zonas restringidas o sistemas con notas."*
* **Conexión cotidiana**: Pregunte si los estudiantes han visto situaciones donde se dejan equipos sin cerrar sesión en el colegio.

---

### Diapositiva 5 — Tipos de Pruebas (Visión General)
* **Qué proyectar**: Diagrama de clasificación de las pruebas del análisis interior.
* **Qué explicar**: Presentar las pruebas como un conjunto de testeos complementarios que cubren privacidad, aplicaciones, contingencia, contraseñas, DoS y políticas.

---

### Diapositiva 6 — Prueba 1: Revisión de la Privacidad
* **Qué proyectar**: Concepto de gestión ética y legal de la información.
* **Qué enfatizar**: Almacenamiento, transmisión y control de los datos personales de empleados y usuarios.
* **Pregunta reflexiva**: *"¿Por qué los salarios o datos médicos de los empleados deben estar protegidos de otros compañeros?"*

---

### Diapositiva 7 — Prueba 2: Testeo de Aplicaciones de Internet
* **Qué proyectar**: Análisis de aplicaciones web internas.
* **Qué explicar**: *"Muchas empresas usan aplicaciones en el navegador para su trabajo diario. Se deben probar estas aplicaciones cliente-servidor para detectar fallas que permitan ver datos de otros."*

---

### Diapositiva 8 — Prueba 3: Testeo del Sistema de Detección de Intrusos
* **Qué proyectar**: Rendimiento de los sistemas IDS.
* **Punto técnico importante**: Mencionar que esta prueba exige acceder a los registros (logs) del sistema para verificar si realmente detecta accesos sospechosos.

---

### Diapositiva 9 — Prueba 4: Testeo de Medidas de Contingencia
* **Qué proyectar**: Recursos mínimos necesarios y detección de accesos no autorizados.
* **Analogía**: Simulacro de emergencia. *"¿El sistema puede seguir operando con lo básico si algo falla?"*

---

### Diapositiva 10 — Pregunta Intermedia de Comprensión
* **Qué proyectar**: Detección de intrusos vs. Medidas de contingencia.
* **Objetivo**: Asegurar que los estudiantes diferencien entre detectar (IDS) y responder/mantener servicio (contingencia).

---

### Diapositiva 11 — Prueba 5: Descifrado de Contraseñas
* **Qué proyectar**: Validación de la robustez de las claves.
* **Qué explicar**: *"Las herramientas automáticas prueban miles de combinaciones. Dejan al descubierto tanto claves débiles creadas por el factor humano como algoritmos criptográficos mal implementados."*

---

### Diapositiva 12 — Prueba 6: Testeo de Denegación de Servicios (DoS)
* **Qué proyectar**: Carga excesiva e interrupción del funcionamiento esperado.
* **Qué enfatizar**: Puede ser intencional o accidental (sobrecarga de uso). Requiere monitoreo privado y coordinación con la organización.

---

### Diapositiva 13 — Prueba 7: Evaluación de Políticas de Seguridad
* **Qué proyectar**: Ajuste de las reglas escritas a la realidad y justificación del negocio.
* **Ejemplo del texto**: *"Si una política prohíbe el uso de internet pero la empresa vende sus productos por internet, la política no tiene sentido."*

---

### Diapositiva 14 — Tabla Resumen Comparativa
* **Qué proyectar**: Cuadro con el resumen de las 7 pruebas.
* **Uso docente**: Repaso guiado antes de las preguntas de evaluación.

---

### Diapositiva 15 — Verdadero o Falso
* **Qué proyectar**: Afirmaciones sobre mitos de seguridad (herramientas de hacking, ataques DoS, longitud de clave).
* **Dinámica**: Actividad de participación rápida en clase.

---

### Diapositiva 16 — Quiz Interactivo
* **Qué proyectar**: 3 preguntas de opción múltiple con retroalimentación automática.

---

### Diapositiva 17 — Actividad Práctica: Inspectores del Colegio
* **Qué proyectar**: Consigna para trabajo en grupo de 3 personas.
* **Objetivo**: Aplicar las pruebas (privacidad, apps, DoS, políticas) al entorno escolar.

---

### Diapositiva 18 — Cierre de la Lección
* **Qué proyectar**: Síntesis de los 5 puntos clave a recordar.
* **Cierre**: Reflexión final sobre la importancia de la seguridad interna.

---

## 🎯 Recomendaciones Pedagógicas y Errores Frecuentes

| Error Frecuente | Cómo Aclarar |
|-----------------|--------------|
| Pensar que el análisis interior es un ataque ilegal | Aclarar que es un test autorizado por la empresa para mejorar la seguridad |
| Confundir DoS con robo de información | Explicar que DoS satura el servicio; no copia ni extrae datos |
| Creer que una clave larga siempre es segura | Usar el ejemplo "aaaaaaaaaa" para mostrar que la variedad de caracteres importa |

---

## 🔬 Ampliación Sugerida
* **Práctica recomendada**: Crear una regla de contraseña segura usando una frase fácil de recordar (ej. *MiPerro@Come3Veces!*).
