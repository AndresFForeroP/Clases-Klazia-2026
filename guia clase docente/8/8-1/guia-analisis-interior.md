# Guía Docente — Análisis Interior (Presentación Interactiva)
## Grado 8.º — Grupo 1

---

## Propósito de esta Guía
Esta guía acompaña la **presentación académica interactiva** del curso **8-1**. La plataforma está estructurada para ser proyectada en clase, permitiendo al docente controlar el avance diapositiva por diapositiva mientras explica los conceptos oralmente.

**Tema:** Análisis de vulnerabilidades internas en una organización.
**Duración estimada:** 1 sesión de clase (45-60 minutos).

---

## 📋 Guía Diapositiva por Diapositiva

### Diapositiva 1 — Título y Objetivos de Aprendizaje
* **Qué proyectar**: Título "Análisis Interior" y lista de objetivos.
* **Qué explicar oralmente**: Dar la bienvenida a la clase. Indicar que hoy aprenderán cómo las organizaciones evalúan su seguridad desde adentro.
* **Notas pedagógicas**: Pregunte brevemente: *"¿Creen que es posible que un empleado normal acceda a información que no le corresponde en una empresa?"*.

---

### Diapositiva 2 — Pregunta Disparadora de Discusión
* **Qué proyectar**: Pregunta *"¿Quién es más peligroso para la seguridad de una empresa: un hacker externo o un empleado con malas prácticas?"*.
* **Qué hacer en clase**: Permita 2 o 3 opiniones antes de revelar. La idea es que los estudiantes comprendan que las amenazas internas son tan importantes como las externas.
* **Acción en plataforma**: Dar clic en **"Revelar respuesta y explicación"** para consolidar.

---

### Diapositiva 3 — ¿Qué es un Análisis Interior?
* **Qué proyectar**: Concepto fundamental, definición y puntos clave.
* **Qué explicar oralmente**: *"El análisis interior no usa herramientas de hacker. Usa exactamente lo que la empresa le da a cualquier empleado: un computador, un usuario y una contraseña normal."*
* **Ideas fuerza**: Cuenta de usuario normal, evaluar privilegios reales, encontrar debilidades.

---

### Diapositiva 4 — Analogía: Inspección de Seguridad en un Edificio
* **Qué proyectar**: Ejemplo visual con la analogía del edificio.
* **Qué explicar oralmente**: *"Imaginen que los contratan para entrar a un edificio como si fueran un empleado más. No pueden forzar cerraduras ni romper puertas. Solo pueden usar lo que les dan. Si logran acceder a algo que no deberían, el edificio tiene un problema de seguridad."*
* **Pregunta sugerida**: *"¿En el colegio, todos los estudiantes pueden entrar a la sala de profesores o a secretaría?"*

---

### Diapositiva 5 — Los 7 Tipos de Pruebas Internas (Visión General)
* **Qué proyectar**: Diagrama comparativo de las 3 categorías de pruebas.
* **Qué explicar oralmente**: Indicar que estas 7 pruebas no se hacen todas al mismo tiempo; cada una evalúa un aspecto diferente de la seguridad.
* **Nota**: Esta diapositiva funciona como mapa general. En las siguientes se profundiza cada tipo.

---

### Diapositiva 6 — Prueba 1: Revisión de la Privacidad
* **Qué proyectar**: Concepto de revisión de privacidad.
* **Qué enfatizar**: La información personal (salarios, direcciones, teléfonos) debe estar protegida. No cualquier empleado debería poder acceder a ella.
* **Pregunta rápida**: *"¿Les gustaría que cualquier compañero pudiera ver sus notas, dirección o número de teléfono sin su permiso?"*

---

### Diapositiva 7 — Prueba 2: Testeo de Aplicaciones de Internet
* **Qué proyectar**: Concepto de testeo de aplicaciones web internas.
* **Qué explicar**: *"Muchas empresas usan aplicaciones que funcionan en el navegador pero dentro de la red interna. El analista verifica si esas aplicaciones tienen fallas de seguridad."*
* **Ejemplo práctico**: *"Imaginen un sistema escolar donde los profesores ingresan notas. ¿Qué pasaría si un estudiante pudiera cambiar la URL para ver o modificar las notas de otro grupo?"*

---

### Diapositiva 8 — Prueba 3: Sistemas de Detección de Intrusos
* **Qué proyectar**: Concepto de IDS (sistema de detección de intrusos).
* **Analogía a utilizar**: *"Es como una cámara de seguridad que no solo graba, sino que además activa una alarma cuando detecta algo extraño."*
* **Punto clave**: Se necesita acceder a los registros (logs) del sistema para evaluar si realmente detecta las amenazas.

---

### Diapositiva 9 — Prueba 4: Medidas de Contingencia
* **Qué proyectar**: Concepto de testeo de contingencia.
* **Analogía a utilizar**: *"Es como un simulacro de evacuación del colegio: ¿todos saben qué hacer si algo sale mal? Un testeo de contingencia es lo mismo, pero para los sistemas informáticos."*
* **Punto clave**: Se evalúan los recursos mínimos necesarios para que el sistema siga funcionando ante una falla.
---

### Diapositiva 10 — Pregunta Intermedia de Comprensión
* **Qué proyectar**: *"¿Qué diferencia hay entre un sistema de detección de intrusos y un testeo de contingencia?"*
* **Gestión del debate**: Pida opiniones antes de revelar. La respuesta correcta distingue entre DETECTAR amenazas (IDS) y RESPONDER ante fallas (contingencia).
* **Objetivo**: Verificar que los estudiantes distinguen estos dos conceptos antes de continuar.

---

### Diapositiva 11 — Prueba 5: Descifrado de Contraseñas
* **Qué proyectar**: Concepto de descifrado de contraseñas.
* **Qué enfatizar**: *"Si tu contraseña es '123456' o 'colegio2026', una herramienta automática la descifra en segundos. Pero si es 'Tr#9kL!p2x', puede tardar años."*
* **Momento de conexión personal**: Pregunte a los estudiantes si creen que sus propias contraseñas serían fáciles de descifrar. Este es un buen momento para hablar de buenas prácticas.
* **Errores comunes de los estudiantes**: Creer que una contraseña larga siempre es segura (no si es "aaaaaaaaaa").

---

### Diapositiva 12 — Prueba 6: Denegación de Servicios (DoS)
* **Qué proyectar**: Concepto de ataque DoS.
* **Analogía a utilizar**: *"Imaginen que 500 personas intentan entrar por una puerta diseñada para 10 personas. El sistema se traba y nadie puede pasar."*
* **Aclaración importante**: Un ataque DoS NO hackea el sistema ni roba datos. Lo satura hasta que deja de funcionar.
* **Ejemplo cotidiano**: *"¿Han visto cuando un sitio web se cae en un Black Friday por el exceso de visitas? Eso es un DoS accidental."*

---

### Diapositiva 13 — Prueba 7: Evaluación de Políticas de Seguridad
* **Qué proyectar**: Concepto de evaluación de políticas.
* **Qué enfatizar**: Una política de seguridad que contradice los objetivos del negocio es peor que no tener política.
* **Ejemplo clave**: *"Si una empresa prohíbe el uso de internet pero necesita internet para vender sus productos, esa política no tiene sentido."*
* **Conexión escolar**: *"¿Todas las reglas del manual de convivencia tienen sentido? ¿Alguna se contradice con lo que realmente ocurre?"*

---

### Diapositiva 14 — Tabla Resumen Comparativa
* **Qué proyectar**: Tabla sintética de las 7 pruebas con qué evalúa y ejemplo rápido.
* **Qué hacer en clase**: Repasar fila por fila. Pregunte si algún estudiante puede explicar una prueba con sus propias palabras.
* **Objetivo**: Consolidar los 7 tipos antes de la evaluación.

---

### Diapositiva 15 — Quiz Interactivo de Comprobación
* **Qué proyectar**: Cuestionario interactivo en pantalla (3 preguntas).
* **Qué hacer en clase**: Leer cada pregunta en voz alta. Pedir a un estudiante diferente que responda cada una. Marcar la opción para mostrar la retroalimentación.
* **Preguntas cubiertas**: Tipo de cuenta para análisis interior, contraseñas débiles, ataque DoS.

---

### Diapositiva 16 — Actividad Práctica: "Inspector de Seguridad"
* **Qué proyectar**: Instrucciones de la actividad en grupos de 3.
* **Tiempo asignado**: 10 minutos para que los grupos analicen la seguridad del colegio.
* **Socialización**: 2 grupos comparten sus hallazgos con la clase.
* **Nota importante**: Esta actividad conecta los conceptos técnicos con el entorno cotidiano del estudiante.

---

### Diapositiva 17 — Cierre de la Lección
* **Qué proyectar**: Síntesis final de 4 puntos indispensables a recordar.
* **Cierre oral**: Resumir en 2 minutos. Puede preguntar: *"¿Cuál de las 7 pruebas les pareció más interesante y por qué?"*

---

## Errores Frecuentes de los Estudiantes

| Error | Corrección |
|-------|-----------|
| Creer que el análisis interior usa herramientas de hacker | Se realiza con una cuenta de usuario normal |
| Confundir detección de intrusos con medidas de contingencia | Detección = identificar amenazas; Contingencia = responder ante fallas |
| Pensar que un ataque DoS roba información | Solo satura el sistema; no accede ni modifica datos |
| Considerar que una contraseña larga siempre es segura | "aaaaaaaaaa" es larga pero extremadamente débil |

---

## Ampliación (si el grupo avanza rápidamente)

Si queda tiempo, puede proponer:
* **Investigación rápida**: ¿Qué tipos de ataques informáticos han afectado a empresas colombianas recientemente?
* **Debate**: ¿Es ético que una empresa revise todo lo que hacen sus empleados en la computadora del trabajo?
