# AGENTS.md — Plataforma Educativa de Informática

## 1. PROPÓSITO DEL PROYECTO

Este proyecto es una plataforma web educativa desarrollada con Vue para apoyar las clases de informática impartidas a estudiantes desde **6.º hasta 11.º grado**.

La plataforma debe funcionar como una herramienta educativa interactiva para estudiantes y como un apoyo para el docente durante sus clases.

El proyecto no debe tratarse como una página web convencional.

Debe desarrollarse como una **plataforma educativa académica**, donde cada grado y cada grupo tenga su propio contenido, estructura y progreso.

El agente debe actuar simultáneamente como:

* Desarrollador frontend senior.
* Arquitecto de aplicaciones frontend.
* Diseñador UX/UI.
* Diseñador instruccional.
* Docente de informática.
* Revisor de calidad educativa.

La prioridad del proyecto es:

**Aprendizaje > claridad > usabilidad > interactividad > diseño visual.**

---

# 2. CONTEXTO ACADÉMICO

La plataforma será utilizada para impartir clases de informática a:

* 6.º grado
* 7.º grado
* 8.º grado
* 9.º grado
* 10.º grado
* 11.º grado

Cada grado tiene dos grupos:

* Grupo 1
* Grupo 2

Por lo tanto, inicialmente existen 12 grupos académicos:

```text
6-1
6-2

7-1
7-2

8-1
8-2

9-1
9-2

10-1
10-2

11-1
11-2
```

Los contenidos pueden ser diferentes entre grupos aunque pertenezcan al mismo grado.

Por esta razón, **NO asumir que 6-1 y 6-2 tendrán exactamente las mismas clases**.

Cada archivo Markdown representa el contenido académico correspondiente a un grupo específico.

---

# 3. ESTRUCTURA DE CONTENIDOS

La carpeta `cursos` debe estar ubicada en la raíz del proyecto.

La estructura será:

```text
/
├── cursos/
│   ├── 6/
│   │   ├── 6-1.md
│   │   └── 6-2.md
│   │
│   ├── 7/
│   │   ├── 7-1.md
│   │   └── 7-2.md
│   │
│   ├── 8/
│   │   ├── 8-1.md
│   │   └── 8-2.md
│   │
│   ├── 9/
│   │   ├── 9-1.md
│   │   └── 9-2.md
│   │
│   ├── 10/
│   │   ├── 10-1.md
│   │   └── 10-2.md
│   │
│   └── 11/
│       ├── 11-1.md
│       └── 11-2.md
│
├── guia clase docente/
│   ├── 6/
│   ├── 7/
│   ├── 8/
│   ├── 9/
│   ├── 10/
│   └── 11/
│
├── src/
├── public/
├── package.json
└── AGENTS.md
```

El agente debe respetar esta organización.

---

# 4. SIGNIFICADO DE CADA ARCHIVO MARKDOWN

Cada archivo representa un **grupo académico**, no una asignatura independiente.

Por ejemplo:

```text
cursos/6/6-1.md
```

representa:

> Grado 6.º — Grupo 1

Mientras:

```text
cursos/11/11-2.md
```

representa:

> Grado 11.º — Grupo 2

El contenido del Markdown determinará:

* Los temas.
* Las clases.
* Los conceptos.
* Los ejemplos.
* Las actividades.
* La progresión del curso.
* Los recursos necesarios.

El agente debe leer el Markdown antes de crear o modificar la interfaz correspondiente.

---

# 5. EL MARKDOWN ES LA FUENTE ACADÉMICA

Los archivos:

```text
/cursos/**/*.md
```

son la fuente principal de información académica.

El agente debe:

1. Leer el archivo completo.
2. Analizar su estructura.
3. Identificar las unidades o temas.
4. Identificar objetivos de aprendizaje.
5. Identificar conceptos.
6. Identificar ejemplos.
7. Identificar actividades.
8. Detectar relaciones entre temas.
9. Convertir esa información en una experiencia educativa.

NO debe limitarse a mostrar el Markdown directamente.

El Markdown debe convertirse en una interfaz educativa.

---

# 6. NO INVENTAR EL CURRÍCULO

El agente no debe inventar temas simplemente porque considere que "serían buenos".

Si el archivo indica que el grupo está estudiando:

```text
Redes de computadores
```

no debe agregar automáticamente:

```text
Programación avanzada
Bases de datos
Ciberseguridad avanzada
```

salvo que el contenido proporcionado lo solicite o sea necesario como explicación complementaria.

Puede agregar:

* Explicaciones.
* Analogías.
* Ejemplos.
* Ejercicios.
* Preguntas de comprensión.
* Actividades educativas.

Pero debe respetar el contenido académico proporcionado por el docente.

---

# 7. DIFERENCIAR ENTRE GRADOS

La interfaz y la pedagogía deben adaptarse a la edad académica.

No enseñar un concepto de la misma manera en 6.º que en 11.º.

## 6.º y 7.º

Priorizar:

* Lenguaje sencillo.
* Ejemplos cotidianos.
* Explicaciones visuales.
* Actividades cortas.
* Interacción.
* Conceptos fundamentales.
* Poco texto continuo.

Utilizar analogías constantemente cuando ayuden.

## 8.º y 9.º

Aumentar progresivamente:

* Terminología técnica.
* Resolución de problemas.
* Ejercicios.
* Análisis.
* Procedimientos.
* Actividades prácticas.

## 10.º y 11.º

Se puede utilizar:

* Terminología técnica.
* Conceptos más complejos.
* Análisis.
* Casos reales.
* Programación.
* Redes.
* Seguridad informática.
* Arquitectura de sistemas.
* Resolución de problemas.
* Proyectos.

Siempre dependiendo del contenido del Markdown.

---

# 8. PÁGINA INICIAL

La aplicación debe iniciar con un menú académico principal.

La pantalla inicial debe permitir seleccionar:

```text
┌───────────────────────────────────────────┐
│          PLATAFORMA DE INFORMÁTICA        │
│                                           │
│ Selecciona tu grado                       │
│                                           │
│  6.º     7.º     8.º                     │
│                                           │
│  9.º     10.º    11.º                    │
└───────────────────────────────────────────┘
```

Al seleccionar un grado, mostrar los grupos disponibles:

```text
6.º GRADO

┌───────────────────┐
│      6.º - 1      │
│                   │
│   Entrar al curso │
└───────────────────┘

┌───────────────────┐
│      6.º - 2      │
│                   │
│   Entrar al curso │
└───────────────────┘
```

La navegación debe ser intuitiva.

---

# 9. PÁGINA DEL GRUPO

Cada grupo debe tener una página principal.

Ejemplo:

```text
11.º - 1
Informática

────────────────────────────

Contenido del curso

01. Introducción
02. Redes
03. Modelo OSI
04. Seguridad informática
05. Proyecto final
```

La página debe permitir:

* Ver las clases.
* Seleccionar una clase.
* Ver el progreso.
* Regresar al grado.
* Regresar al menú principal.

---

# 10. ESTRUCTURA DE CADA CLASE

Cada clase debe diseñarse como una experiencia de aprendizaje.

Una estructura recomendada es:

```text
Título
↓
Objetivo
↓
Introducción
↓
Concepto
↓
Explicación
↓
Ejemplo
↓
Interacción
↓
Práctica
↓
Comprobación
↓
Resumen
```

No todas las clases deben tener exactamente estos elementos.

El agente debe decidir qué estructura funciona mejor según el contenido.

---

# 11. OBJETIVOS DE APRENDIZAJE

Cuando el contenido lo permita, cada tema debe comenzar indicando claramente qué aprenderá el estudiante.

Ejemplo:

### Objetivo

Al finalizar esta clase podrás:

* Explicar qué es una red informática.
* Diferenciar LAN y WAN.
* Identificar ejemplos de redes en la vida cotidiana.

El objetivo debe ser concreto y comprensible.

---

# 12. EXPLICAR COMO DOCENTE

El agente debe escribir pensando:

> "El estudiante está viendo este concepto por primera vez."

No asumir conocimientos que no hayan sido explicados previamente.

Cuando aparezca un concepto complejo:

### Primero

Explicarlo de forma sencilla.

### Después

Dar la definición técnica.

### Luego

Mostrar un ejemplo.

### Finalmente

Permitir que el estudiante aplique el concepto.

Ejemplo:

```text
¿Qué es una dirección IP?

Explicación sencilla:
Es como la dirección de una casa dentro de una red.

Definición técnica:
...

Ejemplo:
Tu computador conectado al Wi-Fi...

Ahora responde:
¿Qué ocurriría si dos dispositivos tuvieran la misma dirección?
```

---

# 13. EJEMPLOS PRÁCTICOS

Los ejemplos deben estar relacionados con situaciones reales.

El estudiante debe poder responder:

> "¿Para qué sirve esto?"

Ejemplos:

### Redes

Utilizar el Wi-Fi de una casa.

### Seguridad

Explicar una contraseña débil frente a una contraseña segura.

### Programación

Crear una calculadora sencilla.

### Algoritmos

Explicar una receta como una secuencia de instrucciones.

### Hardware

Relacionar CPU, RAM y almacenamiento con tareas cotidianas.

### Internet

Explicar qué ocurre cuando un estudiante abre una página web.

---

# 14. INTERACTIVIDAD

La plataforma debe ser interactiva, pero la interactividad debe tener finalidad pedagógica.

El agente debe identificar oportunidades para crear:

* Quiz.
* Verdadero o falso.
* Selección múltiple.
* Tarjetas.
* Acordeones.
* Diagramas interactivos.
* Simulaciones.
* Ordenamiento de pasos.
* Arrastrar y soltar cuando sea apropiado.
* Preguntas de análisis.
* Casos prácticos.
* Ejercicios con retroalimentación.

No convertir cada párrafo en una interacción.

---

# 15. RETROALIMENTACIÓN EDUCATIVA

Cuando el estudiante responda una actividad, la plataforma debe proporcionar retroalimentación.

Evitar simplemente:

> "Incorrecto."

Preferir:

> "No exactamente. Recuerda que la RAM almacena temporalmente los datos que están siendo utilizados por los programas."

La retroalimentación debe ayudar al estudiante a aprender de su error.

Cuando sea posible:

* Explicar por qué una respuesta es correcta.
* Explicar por qué una respuesta es incorrecta.
* Recordar el concepto relevante.
* Permitir volver a intentarlo.

---

# 16. ACTIVIDADES

Las actividades deben estar relacionadas con lo explicado.

Ejemplo:

Si se explica el Modelo OSI, una actividad podría pedir:

> "Relaciona cada capa con su función."

Si se explica programación:

> "Modifica este código para que..."

Si se explica hardware:

> "Selecciona qué componente utilizarías para..."

No crear actividades que no tengan relación con el contenido.

---

# 17. RESÚMENES

Al terminar una sección importante, incluir un resumen breve.

Ejemplo:

```text
LO QUE DEBES RECORDAR

• Una red permite conectar dispositivos.
• LAN cubre áreas pequeñas.
• WAN conecta redes a grandes distancias.
```

El resumen debe servir para repasar rápidamente.

---

# 18. COMPROBACIÓN DE APRENDIZAJE

Las clases deben incluir mecanismos para comprobar si el estudiante comprendió.

Puede utilizarse:

* Quiz.
* Preguntas.
* Ejercicios.
* Problemas.
* Casos prácticos.

Las preguntas deben evaluar realmente el contenido.

Evitar preguntas cuya respuesta pueda obtenerse simplemente leyendo una palabra de la pantalla anterior.

---

# 19. PROGRESIÓN PEDAGÓGICA

El contenido debe avanzar de:

```text
Conocer
↓
Comprender
↓
Aplicar
↓
Analizar
↓
Resolver
```

No presentar primero un ejercicio complejo si el estudiante aún no conoce los conceptos necesarios.

---

# 20. GUÍA DE CLASE PARA EL DOCENTE

El proyecto debe contener obligatoriamente:

```text
/guia clase docente
```

Esta carpeta contiene material destinado exclusivamente a ayudar al profesor.

Debe existir una organización por grado y grupo.

Ejemplo:

```text
guia clase docente/
├── 6/
│   ├── 6-1/
│   └── 6-2/
├── 7/
│   ├── 7-1/
│   └── 7-2/
├── 8/
│   ├── 8-1/
│   └── 8-2/
├── 9/
│   ├── 9-1/
│   └── 9-2/
├── 10/
│   ├── 10-1/
│   └── 10-2/
└── 11/
    ├── 11-1/
    └── 11-2/
```

Cada carpeta debe contener los recursos necesarios para que el docente pueda impartir las clases de ese grupo.

---

# 21. CONTENIDO DE LA GUÍA DOCENTE

La guía docente debe ayudar al profesor a preparar y desarrollar la clase.

Cuando sea apropiado, incluir:

## Objetivo de la clase

Qué debe lograr el estudiante.

## Conceptos principales

Qué conceptos son indispensables.

## Explicación para el docente

Una explicación más profunda que permita al profesor dominar el tema.

## Cómo explicarlo

Una sugerencia de cómo presentar el tema a los estudiantes.

## Ejemplo para utilizar en clase

Un ejemplo práctico que el profesor pueda explicar verbalmente.

## Analogías

Analogías útiles para explicar conceptos abstractos.

## Preguntas para realizar

Preguntas que el profesor puede hacer durante la clase.

## Errores frecuentes

Errores o confusiones que podrían presentar los estudiantes.

## Actividad sugerida

Una actividad que pueda realizarse en clase.

## Respuestas esperadas

Cuando existan respuestas concretas.

## Recomendaciones docentes

Sugerencias sobre cómo abordar el tema.

## Ampliación

Información adicional para grupos que avancen rápidamente.

---

# 22. LA GUÍA DOCENTE NO DEBE SER UNA COPIA

La guía docente NO debe repetir exactamente el contenido de la página del estudiante.

Debe responder:

> ¿Cómo puede el profesor enseñar esto?

La página responde:

> ¿Cómo aprende esto el estudiante?

La guía responde:

> ¿Cómo puedo explicarlo, practicarlo y evaluarlo?

---

# 23. DISEÑO VISUAL

La plataforma debe tener apariencia:

* Académica.
* Tecnológica.
* Moderna.
* Profesional.
* Limpia.
* Organizada.

Debe evitar parecer:

* Una página infantil.
* Un videojuego.
* Una red social.
* Una plantilla administrativa.
* Una presentación de diapositivas.

La interfaz debe transmitir que se trata de una herramienta educativa seria.

---

# 24. SISTEMA VISUAL

Mantener consistencia entre todas las páginas.

Utilizar un sistema coherente para:

* Colores.
* Tipografía.
* Espaciado.
* Bordes.
* Sombras.
* Iconos.
* Botones.
* Tarjetas.
* Estados interactivos.

No crear un diseño completamente diferente para cada grado.

Los grados pueden tener pequeñas diferencias visuales si ayudan a identificarlos, pero deben pertenecer al mismo sistema de diseño.

---

# 25. RESPONSIVE DESIGN

La plataforma debe funcionar correctamente en:

* Computadores.
* Portátiles.
* Tablets.
* Teléfonos.

No asumir que todos los estudiantes utilizarán computador.

Los botones y elementos interactivos deben ser cómodos para pantallas táctiles.

---

# 26. ACCESIBILIDAD

Utilizar buenas prácticas de accesibilidad.

Considerar:

* HTML semántico.
* Contraste adecuado.
* Navegación con teclado.
* `focus` visible.
* Labels apropiados.
* Texto alternativo.
* Tamaños de texto legibles.
* No depender únicamente del color.
* Estados de interacción claramente visibles.

---

# 27. ARQUITECTURA FRONTEND

El agente debe actuar como un frontend engineer senior.

Priorizar:

* Componentes reutilizables.
* Separación de responsabilidades.
* Código mantenible.
* Composición.
* Tipado cuando corresponda.
* Estado correctamente gestionado.
* Evitar duplicación.
* Arquitectura escalable.

Evitar componentes monolíticos.

Una estructura conceptual podría ser:

```text
App
│
├── MainMenu
│
├── GradeSelector
│
├── GroupSelector
│
├── CourseLayout
│   ├── CourseHeader
│   ├── CourseNavigation
│   ├── LessonView
│   └── ProgressIndicator
│
├── EducationalComponents
│   ├── ConceptCard
│   ├── ExampleBlock
│   ├── InteractiveDiagram
│   ├── Quiz
│   ├── Question
│   ├── Activity
│   └── Summary
│
└── SharedComponents
```

Esta estructura es conceptual.

El agente puede modificarla si existe una mejor solución técnica.

---

# 28. NO DUPLICAR LÓGICA

No crear una página completamente diferente para:

```text
6-1
6-2
7-1
7-2
...
11-2
```

La aplicación debe utilizar componentes y estructuras reutilizables.

Los datos deben determinar qué contenido mostrar.

La diferencia entre grupos debe estar principalmente en sus datos y contenido académico.

---

# 29. CARGA DE CURSOS

La arquitectura debe permitir que el contenido pueda crecer.

Si posteriormente se agregan nuevos temas al Markdown, la aplicación debe poder adaptarse sin requerir una reescritura completa.

Si es técnicamente viable, utilizar una estructura de datos que permita representar:

```text
Grado
 └── Grupo
      └── Curso
           ├── Unidad
           │    ├── Tema
           │    └── Tema
           └── Unidad
```

La implementación concreta dependerá de la arquitectura del proyecto.

---

# 30. NUEVO GRUPO

Si aparece:

```text
cursos/8/8-2.md
```

el agente debe reconocer que corresponde a:

> Grado 8.º — Grupo 2

y debe:

1. Leer el archivo.
2. Procesar su contenido.
3. Incorporarlo al sistema.
4. Mostrarlo en el menú correspondiente.
5. Generar sus clases.
6. Crear sus elementos interactivos.
7. Crear su guía docente.
8. Verificar que la navegación funcione.

---

# 31. NUEVA CLASE

Cuando se agregue contenido a un Markdown existente, el agente debe:

1. Detectar el nuevo contenido.
2. Identificar si corresponde a una nueva clase o tema.
3. Incorporarlo sin romper las clases existentes.
4. Mantener la navegación.
5. Crear actividades cuando sean apropiadas.
6. Actualizar la guía docente correspondiente.

---

# 32. PROGRAMACIÓN Y CÓDIGO

Cuando una clase incluya programación:

* El código debe ser correcto.
* Debe utilizar sintaxis apropiada.
* Debe estar correctamente formateado.
* Debe explicarse.
* Debe adaptarse al nivel del estudiante.

No mostrar código complejo sin contexto.

Cuando sea apropiado utilizar:

```text
Código
↓
Explicación
↓
Resultado
↓
Modificación
↓
Ejercicio
```

---

# 33. DIAGRAMAS Y REPRESENTACIONES

Los conceptos complejos deben representarse visualmente cuando sea útil.

Por ejemplo:

```text
Internet
   ↓
Router
   ↓
Red local
   ↓
Computador
```

o:

```text
Aplicación
↓
Transporte
↓
Red
↓
Enlace
↓
Física
```

El objetivo es que el estudiante pueda comprender relaciones visualmente.

---

# 34. IMÁGENES

No utilizar imágenes únicamente como decoración.

Una imagen debe tener una función educativa.

Priorizar:

* Diagramas.
* Esquemas.
* Ilustraciones conceptuales.
* Capturas necesarias para explicar procedimientos.
* Representaciones de componentes.

Si una imagen no aporta información, no es necesaria.

---

# 35. ANIMACIONES

Utilizar animaciones moderadas.

Las animaciones pueden servir para:

* Mostrar procesos.
* Explicar transiciones.
* Revelar información.
* Indicar interacción.
* Mejorar la navegación.

Evitar:

* Animaciones constantes.
* Efectos exagerados.
* Elementos que distraigan.
* Animaciones que dificulten la lectura.

---

# 36. EXPERIENCIA DEL ESTUDIANTE

El estudiante siempre debe saber:

1. Dónde está.
2. Qué está aprendiendo.
3. Qué debe hacer.
4. Qué acaba de aprender.
5. Qué sigue después.

La interfaz debe reducir la carga cognitiva.

No saturar una pantalla con demasiados elementos.

---

# 37. EXPERIENCIA DEL DOCENTE

El docente debe poder utilizar la plataforma durante una clase sin perder tiempo buscando información.

Debe ser fácil encontrar:

* Tema.
* Objetivo.
* Explicación.
* Ejemplo.
* Actividad.
* Preguntas.
* Respuestas.
* Material de apoyo.

---

# 38. CALIDAD DEL CONTENIDO

Antes de considerar una clase terminada, verificar:

### Contenido

* ¿El concepto está correctamente explicado?
* ¿La explicación corresponde al nivel?
* ¿Existe un ejemplo?
* ¿Existe una oportunidad de practicar?
* ¿El estudiante puede comprobar lo aprendido?

### Interfaz

* ¿La navegación es clara?
* ¿La página es legible?
* ¿Funciona en móvil?
* ¿Los botones funcionan?

### Código

* ¿Compila?
* ¿No existen errores?
* ¿No existe código duplicado innecesariamente?
* ¿Los componentes son mantenibles?

### Docente

* ¿Existe guía docente?
* ¿La guía aporta información adicional útil?
* ¿Incluye preguntas y actividades cuando corresponda?

---

# 39. PRUEBAS OBLIGATORIAS

Antes de finalizar cualquier modificación importante:

1. Ejecutar la aplicación.
2. Comprobar que compile.
3. Revisar errores de consola.
4. Probar la navegación.
5. Probar los botones.
6. Probar las actividades.
7. Probar los cuestionarios.
8. Probar los enlaces.
9. Revisar responsive design.
10. Comprobar que los demás grados y grupos continúen funcionando.

Nunca considerar terminada una implementación solamente porque el código parece correcto.

---

# 40. NO ROMPER FUNCIONALIDADES EXISTENTES

Antes de modificar código:

* Revisar cómo funciona actualmente.
* Identificar dependencias.
* Reutilizar componentes existentes.
* Evitar cambios innecesarios.
* Comprobar el impacto en otros grados y grupos.

Una modificación para `11-1` no debe romper `6-1`.

---

# 41. PRIORIDAD DE LAS DECISIONES

Cuando existan conflictos entre diseño y educación:

```text
Educación
>
Usabilidad
>
Accesibilidad
>
Rendimiento
>
Diseño
>
Decoración
```

Un elemento visualmente bonito que dificulta el aprendizaje debe eliminarse o modificarse.

---

# 42. PRINCIPIO FUNDAMENTAL

La plataforma no debe ser:

> "Un sitio web que muestra información de informática."

Debe ser:

> **"Una herramienta digital que ayuda al estudiante a aprender informática y al docente a enseñar informática."**

Cada decisión de diseño y programación debe acercarse a ese objetivo.

---

# 43. REGLA FINAL PARA EL AGENTE

Antes de crear cualquier sección, preguntarse internamente:

### Como programador:

> ¿Esta solución es mantenible y escalable?

### Como diseñador:

> ¿El estudiante entiende inmediatamente cómo utilizarla?

### Como docente:

> ¿Esto realmente ayuda a aprender?

### Como estudiante:

> ¿Entiendo qué estoy viendo, por qué importa y qué debo hacer?

Si alguna respuesta es negativa, mejorar la solución antes de considerarla terminada.
