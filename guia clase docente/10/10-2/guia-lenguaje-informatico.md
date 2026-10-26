# Guía del Docente — Lenguajes Informáticos y Estructuras de Comunicación
## Grado 10.º — Grupo 2 (Informática)

---

## 1. Propósito y Enfoque Pedagógico

Esta guía constituye el **guion de explicación pedagógica y técnica** para orientar la clase presencial de 10.º grado (Grupo 2). 

El contenido curricular proviene estrictamente del documento fuente `cursos/10/10-2.md`.

El objetivo central de la sesión es desmitificar uno de los mayores errores conceptuales en la educación tecnológica: **la falsa creencia de que "lenguaje informático" y "lenguaje de programación" son exactamente lo mismo**. A través de una progresión analítica apropiada para estudiantes de educación media técnica (10.º grado), los estudiantes comprenderán que la informática abarca un ecosistema diverso de sistemas estructurados de comunicación: lenguajes de programación (algoritmos y variables), pseudocódigo (abstracción lógica y diseño), lenguajes de marcas (estructuración de documentos como HTML y XML), lenguajes de consulta (SQL y XQuery), protocolos de comunicación (HTTP y FTP), lenguajes de especificación, lenguajes de transformación (XSLT) y lenguajes multimedia (gráficos como SVG y sonido como MIDI).

### Prioridad Didáctica:
$$\text{Comprensión conceptual} > \text{Capacidad de aplicación y análisis} > \text{Memorización mecánica de sintaxis}$$

---

## 2. Objetivos de Aprendizaje

Al finalizar la clase, el estudiante será capaz de:
1. Definir con precisión técnica qué es un **lenguaje informático** como sistema estructurado formal de comunicación con el computador.
2. Contrastar el lenguaje natural humano (ambiguo, contextual, expresivo) con los lenguajes informáticos (formales, estrictos, unívocos).
3. Aplicar con soltura la **regla de inclusión**: *Todo lenguaje de programación es un lenguaje informático, pero NO todo lenguaje informático es de programación*.
4. Explicar el rol del **pseudocódigo** como herramienta de abstracción lógica y comprender por qué se clasifica como lenguaje informático.
5. Justificar técnicamente por qué **HTML es un lenguaje de marcas y no de programación**, identificando la ausencia de variables, condiciones lógicas y algoritmos.
6. Diferenciar el enfoque declarativo de los **lenguajes de consulta (SQL)** frente al enfoque algorítmico tradicional.
7. Identificar otras familias especializadas de lenguajes informáticos (especificación, transformación, protocolos de red, gráficos vectoriales y síntesis de sonido).
8. Resolver una actividad práctica individual de clasificación técnica en 5 a 10 minutos.

---

## 3. Planificación Temporal Sugerida (Bloque de 50 a 60 minutos)

| Fase de la Clase | Diapositivas | Contenido y Dinámica | Tiempo Estimado |
| :--- | :--- | :--- | :--- |
| **Apertura y Encuadre** | Diapositiva 1 | Portada, bienvenida y presentación de objetivos | 4 min |
| **Contraste y Fundamentación** | Diapositivas 2 – 3 | Lenguaje humano vs. informático; definición formal | 8 min |
| **La Distinción Central** | Diapositiva 4 | Informático vs. Programación (diagrama de inclusión) | 6 min |
| **Familias de Cómputo y Lógica** | Diapositivas 5 – 6 | Lenguajes de programación y pseudocódigo | 8 min |
| **Marcas y el Gran Debate** | Diapositivas 7 – 8 | Lenguajes de marcas y análisis de por qué HTML no programa | 10 min |
| **Consultas y Otras Familias** | Diapositivas 9 – 10 | Lenguajes de consulta (SQL) y especialidades (redes, SVG, MIDI) | 8 min |
| **Integración Tecnológica** | Diapositiva 11 | Diagrama de flujo de convivencia en una aplicación real | 4 min |
| **Actividad Individual Práctica** | Diapositiva 12 | Ejercicio individual de análisis en cuaderno/digital (4 casos) | 8 min |
| **Síntesis y Cierre** | Diapositiva 13 | Resumen de ideas fuerza y consolidación oral | 4 min |

---

## 4. Guion Pedagógico Diapositiva por Diapositiva

A continuación se detalla el guion exacto para cada diapositiva proyectada en la plataforma interactiva.

---

### Diapositiva 1 — Lenguajes Informáticos: Sistemas estructurados de comunicación hombre-máquina y sus familias

* **Qué decir:**
  > *"Buenos días a todos. Hoy vamos a derribar uno de los mitos más comunes en el mundo de la tecnología. Muchas personas creen que hablar de un 'lenguaje informático' es exactamente lo mismo que hablar de 'programar' en Python, Java o C++. Si hoy les pregunto si HTML o una consulta de base de datos son lenguajes informáticos, muchos dudarían. En la clase de hoy vamos a descubrir que el universo de los lenguajes informáticos es mucho más amplio, rico y fascinante que la simple programación. Aprenderemos cómo se clasifican, por qué las computadoras necesitan reglas tan estrictas y cómo conviven en cada aplicación que usamos a diario en nuestro teléfono o computador."*

* **Qué explicar:**
  Presente la hoja de ruta de la clase. Indique que no se trata de memorizar comandos de memoria, sino de adquirir el criterio técnico para saber qué herramienta utilizar en cada situación profesional.

* **Ejemplo para utilizar en clase:**
  Muestre la pantalla de una página web en el proyector y mencione: *"Para que esta página exista, no solo se usó código de programación; hay marcas que crean los textos, protocolos que la traen por internet y consultas que extraen los datos de los usuarios. Todo eso son lenguajes informáticos distintos trabajando juntos."*

* **Idea clave:**
  El estudiante debe entender que "lenguaje informático" es una familia gigante de herramientas de comunicación con la máquina, no un único tipo de código.

---

### Diapositiva 2 — Lenguaje Humano vs. Lenguaje Informático

* **Qué decir:**
  > *"Pensemos por un momento en cómo hablamos entre nosotros. Si yo estoy en el salón y le digo a un compañero: 'Préstame eso que está ahí sobre la mesa', esa persona mira mi gesto, deduce qué objeto necesito y me lo pasa. Nuestro lenguaje natural —el español con el que redactamos noticias, leemos el diccionario o expresamos emociones— tiene una gran virtud: es flexible y tolera la ambigüedad. Pero si yo le dijera a un procesador 'guárdame eso por ahí', el sistema arrojaría un error fatal inmediatamente. La computadora no tiene intuición, no lee miradas ni adivina intenciones. Por eso, con las máquinas no podemos usar lenguaje natural ordinario; necesitamos un lenguaje informático: un sistema con reglas estrictas donde cada símbolo tiene un único significado matemático y operativo."*

* **Qué explicar:**
  Relacione el contenido con las menciones del Markdown (`cursos/10/10-2.md`) sobre las monografías, noticias, definiciones de diccionario y expresión de emociones. Explique que los lenguajes naturales humanos cumplen funciones expresivas y comunicativas contextuales, mientras que los lenguajes informáticos están diseñados con una sintaxis libre de ambigüedades.

* **Ejemplo para utilizar en clase:**
  Escriba en el tablero la frase: *"El banco está ocupado"*. Pregunte: *"¿Me refiero a un asiento en el parque o a una entidad financiera llena de gente?"*. Los humanos entendemos por contexto. En una máquina, una variable llamada `banco` debe tener un tipo de dato inmutable y un espacio exacto en memoria, sin ambigüedad posible.

* **Idea clave:**
  Las computadoras requieren lenguajes formales porque son circuitos electrónicos incapaces de deducir intenciones humanas subjetivas.

* **Posible confusión:**
  Los estudiantes pueden creer que porque la Inteligencia Artificial hoy responde en español, el computador "entiende" lenguaje natural. Aclare que por debajo, los modelos de lenguaje traducen el texto humano a vectores numéricos y matrices matemáticas estrictas.

---

### Diapositiva 3 — ¿Qué es un Lenguaje Informático?

* **Qué decir:**
  > *"Llegamos a la definición central de nuestra lección. ¿Qué es exactamente un lenguaje informático? El documento oficial nos da una definición contundente: es cualquier sistema estructurado utilizado por, o asociado con, computadoras para comunicarse con ellas. Fíjense en la palabra 'estructurado': significa que tiene reglas de escritura, lo que llamamos sintaxis, y reglas de significado, lo que llamamos semántica. Es el puente formal que permite a los seres humanos dar instrucciones precisas, organizar archivos, formatear textos o consultar bases de datos para que el procesador ejecute tareas de forma eficaz."*

* **Qué explicar:**
  Desglose los tres componentes indispensables de un lenguaje informático:
  1. **Sintaxis:** el conjunto de reglas que definen cómo se combinan los símbolos (ej. abrir y cerrar etiquetas, signos de puntuación, palabras reservadas).
  2. **Semántica:** el significado o la acción concreta que la máquina realiza al leer cada símbolo.
  3. **Asociación con el ordenador:** está diseñado para ser interpretado, compilado o procesado por componentes electrónicos o software.

* **Ejemplo para utilizar en clase:**
  Compare un manual de ensamblaje de muebles con un archivo de configuración informática. El manual humano permite saltarse un paso si uno tiene experiencia; el archivo informático (por ejemplo, un archivo JSON o XML de configuración) detiene todo el servidor si falta una coma o una comilla de cierre.

* **Idea clave:**
  Un lenguaje informático es cualquier sistema de comunicación formal hombre-máquina, cumpla la función que cumpla (organizar, consultar, programar o transmitir).

---

### Diapositiva 4 — Informático vs. Programación: La Distinción Crucial

* **Qué decir:**
  > *"Miren con mucha atención la diapositiva que tenemos proyectada. Aquí está el corazón conceptual de la clase y la regla que no pueden olvidar jamás: 'Todo lenguaje de programación es un lenguaje informático, pero NO todo lenguaje informático es un lenguaje de programación'. Imaginemos un círculo grande que abarca todo: ese es el conjunto de los lenguajes informáticos. Dentro de ese círculo hay un subconjunto más pequeño: los lenguajes de programación. ¿Qué hay afuera de ese círculo pequeño pero dentro del grande? Lenguajes como HTML, SQL, los protocolos HTTP o los lenguajes de gráficos SVG. Todos ellos son informáticos porque comunican datos estructurados a la máquina, pero no son de programación porque no resuelven algoritmos ni toman decisiones lógicas mediante variables."*

* **Qué explicar:**
  Profundice en la teoría de conjuntos aplicada a la tecnología. Aclare por qué en el lenguaje cotidiano la gente comete el error de usarlos como sinónimos (metonimia tecnológica) y por qué un profesional de sistemas o un bachiller de 10.º grado debe utilizar el término exacto.

* **Ejemplo para utilizar en clase:**
  Utilice una analogía de clasificación: *"Todo perro es un animal vertebrado, pero no todo animal vertebrado es un perro; también existen aves, peces y reptiles. De la misma manera: todo lenguaje de programación es informático, pero no todo lenguaje informático es de programación; también existen lenguajes de marcas, de consulta y de protocolos."*

* **Idea clave:**
  La diferencia radica en el alcance y la función: programar implica construir algoritmos ejecutables con variables y control de flujo; comunicar datos estructurados a un computador abarca muchas más herramientas.

* **Posible confusión:**
  Creer que si un lenguaje no es de programación, entonces es "menos importante" o "de menor nivel". Aclare que sin lenguajes de marcas o protocolos de red, los programas no tendrían dónde mostrar sus resultados ni cómo comunicarse por internet.

---

### Diapositiva 5 — Lenguajes de Programación

* **Qué decir:**
  > *"Ahora que ya tenemos claro el panorama general, entremos a la primera gran familia: los lenguajes de programación. ¿Qué hace que un lenguaje informático merezca el título de 'lenguaje de programación'? La capacidad de implementar algoritmos ejecutables. Un lenguaje de programación le permite al desarrollador crear variables en la memoria RAM, evaluar condiciones —como 'si el usuario tiene más de 18 años, permite el acceso'— y repetir operaciones miles de veces mediante bucles. Ejemplos de esta familia son Python, C++, Java, JavaScript o C#."*

* **Qué explicar:**
  Defina qué es un algoritmo: una secuencia finita, ordenada e inequívoca de pasos para resolver un problema computacional. Explique que un lenguaje de programación proporciona las herramientas para traducir ese algoritmo a instrucciones que la CPU o una máquina virtual puedan ejecutar en el tiempo.

* **Ejemplo para utilizar en clase:**
  Ponga el ejemplo de una calculadora digital: *"Para calcular el promedio de notas de un estudiante, el programa necesita guardar las notas en variables temporales, sumarlas con un operador matemático, dividirlas entre el total y evaluar con un condicional 'if' si el alumno aprobó o reprobó. Esa lógica activa es programación."*

* **Idea clave:**
  Un lenguaje de programación manipula el estado de la memoria (variables) y controla el flujo de ejecución (condicionales y bucles) para resolver algoritmos.

---

### Diapositiva 6 — Pseudocódigo: Pensar antes de Codificar

* **Qué decir:**
  > *"Pasemos a la segunda familia señalada en nuestro contenido: el pseudocódigo. Muchos estudiantes cuando empiezan a programar se frustran porque la computadora les arroja errores de sintaxis: olvidaron un punto y coma, pusieron una llave de más o escribieron mal una palabra en inglés. Para evitar esa barrera existe el pseudocódigo. El pseudocódigo nos permite escribir los pasos lógicos de un algoritmo utilizando lenguaje natural estructurado: palabras como INICIO, LEER, SI... ENTONCES, MIENTRAS y FIN. Nos abstrae de la sintaxis del lenguaje final y nos permite pensar exclusivamente en la solución lógica. Y aunque a simple vista parece español cotidiano, nuestro programa curricular lo deja muy claro: se considera plenamente un lenguaje informático porque modela con rigor la lógica computacional."*

* **Qué explicar:**
  Explique el significado del prefijo *pseudo* (falso o semejante a). Aclare que el pseudocódigo no es un lenguaje compilado directamente por microprocesadores comerciales, pero sí posee una gramática formal utilizada en ingeniería de software para diseñar algoritmos antes de traducirlos a Python, C++ o Java. Mencione herramientas educativas estándar como PSeInt.

* **Ejemplo para utilizar en clase:**
  Escriba en la pizarra un algoritmo cotidiano en pseudocódigo:
  ```text
  INICIO
    LEER saldo_tarjeta
    SI saldo_tarjeta >= pasaje_bus ENTONCES
        saldo_tarjeta = saldo_tarjeta - pasaje_bus
        MOSTRAR "Acceso permitido. Buen viaje."
    SINO
        MOSTRAR "Saldo insuficiente. Recargue su tarjeta."
    FIN_SI
  FIN
  ```
  Haga notar a los estudiantes que cualquier persona lo entiende, pero ya contiene la estructura formal de una máquina: variables, lectura de datos, toma de decisiones y salida de información.

* **Idea clave:**
  El pseudocódigo es una herramienta de abstracción lógica que prioriza la resolución del problema algorítmico sin las ataduras de un compilador específico.

---

### Diapositiva 7 — Lenguajes de Marcas (Markup Languages)

* **Qué decir:**
  > *"Llegamos a la tercera familia: los lenguajes de marcas, conocidos en inglés como Markup Languages. ¿De dónde viene este nombre tan curioso? Antes de que existieran las computadoras, en las imprentas y periódicos, los editores tomaban los manuscritos de los autores y usaban un lápiz rojo para hacer 'marcas' o anotaciones en los márgenes: marcaban qué texto debía ir en negrita, qué texto era el título principal y dónde debía ir una ilustración. En la informática moderna se tomó exactamente esa misma idea: un lenguaje de marcas utiliza etiquetas delimitadoras para estructurar, organizar y formatear el contenido de un documento para que un software —como un navegador web— sepa cómo desplegarlo."*

* **Qué explicar:**
  Detalle cómo funcionan las etiquetas (tags): suelen ir en parejas de apertura (`<etiqueta>`) y cierre (`</etiqueta>`). Explique que estas etiquetas añaden metadatos y significado semántico al texto sin alterar el contenido en sí. Mencione los dos grandes referentes citados en el Markdown: HTML (*HyperText Markup Language*), que estructura las páginas de internet, y XML (*eXtensible Markup Language*), que estructura datos para intercambio entre sistemas bancarios, comerciales o gubernamentales.

* **Ejemplo para utilizar en clase:**
  Escriba en el tablero:
  ```html
  <articulo>
    <titulo>El telescopio espacial capta una nueva galaxia</titulo>
    <autor>Dra. Elena Gómez</autor>
  </articulo>
  ```
  Pregunte: *"¿Esas etiquetas están calculando algo? No. Le están diciendo a la máquina: 'El texto de arriba es el título de la noticia y el de abajo es el nombre del autor'."*

* **Idea clave:**
  Los lenguajes de marcas organizan la información mediante etiquetas semánticas para que las máquinas interpreten la jerarquía y estructura de los documentos.

---

### Diapositiva 8 — ¿Por qué HTML NO es un Lenguaje de Programación?

* **Qué decir:**
  > *"Vamos a detenernos en esta tabla, porque es la pregunta del millón en cualquier examen o entrevista técnica de tecnología: ¿Por qué HTML NO es un lenguaje de programación? Es muy tentador pensar: 'Como estoy escribiendo código en un editor de texto y aparece en una pantalla, estoy programando'. Pero analicemos la tabla comparativa con rigor. Para programar, un lenguaje debe ser capaz de ejecutar lógica: necesita variables donde guardar datos temporales, necesita condicionales para elegir caminos y bucles para repetir tareas. HTML no tiene absolutamente nada de eso. En HTML no puedes crear una variable `x = 5`, no puedes escribir un `if` para saber si un usuario escribió bien su contraseña, ni puedes calcular una suma. HTML solamente declara estructura: dice 'aquí va un encabezado', 'aquí va un botón' y 'aquí va una imagen'. Es un lenguaje de marcas; por lo tanto, es un lenguaje informático indiscutible, ¡pero NO es de programación!"*

* **Qué explicar:**
  Repase detalladamente los cinco criterios de la tabla:
  1. **Propósito:** estructura visual vs. resolución de algoritmos.
  2. **Variables y memoria:** HTML es estático en memoria; un lenguaje de programación reserva y transforma memoria dinámica.
  3. **Estructuras de control:** en HTML no existen estructuras condicionales ni iterativas.
  4. **Cálculos matemáticos:** HTML no puede procesar operaciones aritméticas por sí mismo; si necesitamos que un botón sume productos en una tienda online, necesitamos incrustar un lenguaje de programación como JavaScript.
  5. **Clasificación final:** ambos son lenguajes informáticos, pero pertenecen a familias con facultades computacionales totalmente distintas.

* **Ejemplo para utilizar en clase:**
  Use la analogía del maniquí y el ser humano: *"HTML es como armar un maniquí en una tienda: le pones la cabeza (head), el cuerpo (body) y la ropa. Pero el maniquí no se mueve, no piensa ni reacciona si alguien entra a la tienda. Para que camine, hable o cobre por la venta, necesitas un cerebro y músculos: ese cerebro y músculos son los lenguajes de programación (como JavaScript o Python)."*

* **Idea clave:**
  HTML es un lenguaje de marcas estructural; carece de variables, control de flujo y capacidad algorítmica, por lo que no puede clasificarse como lenguaje de programación.

* **Posible confusión:**
  Algunos estudiantes dicen: *"Profesor, pero con CSS y HTML puedo hacer animaciones cuando paso el mouse"*. Aclare que una animación o transición visual en pantalla es una propiedad de estilos del motor de renderizado, pero no implica procesamiento algorítmico ni manipulación de estructuras de datos en memoria.

---

### Diapositiva 9 — Lenguajes de Consulta (Query Languages)

* **Qué decir:**
  > *"Pasemos a la cuarta familia: los lenguajes de consulta, conocidos internacionalmente como Query Languages. Vivimos en la era de los datos masivos: millones de usuarios en Instagram, millones de transacciones en bancos, miles de calificaciones en colegios. Toda esa información está guardada en bases de datos. Si un programador tuviera que escribir un algoritmo desde cero para buscar en un disco duro de 10 millones de usuarios a los que viven en Cali, se demoraría semanas. Para eso se crearon los lenguajes de consulta: son lenguajes informáticos que nos permiten interrogar a un sistema de datos de forma declarativa. Es decir, nosotros solo le decimos a la base de datos QUÉ queremos, y el motor de la base de datos se encarga internamente de CÓMO encontrarlo. El ejemplo rey de esta familia es SQL, utilizado en todo el planeta para consultar bases de datos relacionales."*

* **Qué explicar:**
  Destaque la clasificación que hace el Markdown oficial:
  - **Lenguajes de consulta de bases de datos relacionales:** SQL (*Structured Query Language*), que trabaja sobre tablas con filas y columnas vinculadas por claves primarias y foráneas.
  - **Lenguajes de consulta de recuperación de información:** XQuery, diseñado para buscar y extraer datos anidados en archivos de documentos XML extensos.
  Explique el significado del término *declarativo*: no defines el procedimiento paso a paso (algoritmo imperativo), sino el criterio del resultado esperado.

* **Ejemplo para utilizar en clase:**
  Escriba en la pizarra la sentencia SQL de la diapositiva:
  ```sql
  SELECT nombre, calificacion 
  FROM estudiantes 
  WHERE grado = 10 AND calificacion >= 4.0;
  ```
  Analice la sentencia con los estudiantes: *"Fíjense en lo elegante y preciso que es: SELECT (qué columnas quiero), FROM (en qué tabla están los datos) y WHERE (qué condición deben cumplir). El motor de la base de datos hace la búsqueda en milisegundos."*

* **Idea clave:**
  Los lenguajes de consulta permiten extraer, filtrar y manipular datos almacenados en sistemas de información mediante instrucciones declarativas especializadas.

---

### Diapositiva 10 — Otras Familias Especializadas de Lenguajes Informáticos

* **Qué decir:**
  > *"Si hasta aquí pensaban que la informática se acababa en programas, páginas web y bases de datos, esta diapositiva les abrirá la mente. El Markdown de nuestro curso enumera otras familias fascinantes de lenguajes informáticos que demuestran la inmensa versatilidad de la tecnología. Primero, los lenguajes de especificación, que se usan en proyectos de ingeniería crítica (como el software de un avión o de un marcapasos) para describir con fórmulas matemáticas exactas qué debe hacer el sistema antes de que alguien escriba una sola línea de código. Y los lenguajes de transformación, como XSLT, que toman un documento en XML y lo transforman automáticamente a HTML o PDF sin intervención humana. Luego están los protocolos de comunicación, como HTTP o FTP, que son lenguajes que usan las computadoras para conversar entre sí a través de cables o Wi-Fi. Y finalmente, los lenguajes gráficos como SVG, donde una imagen vectorial se dibuja con fórmulas matemáticas escritas en texto, y los lenguajes de sonido como MIDI, que transmiten notas, ritmos e intensidades para que un sintetizador digital produzca música."*

* **Qué explicar:**
  Recorra las tres columnas de la diapositiva conectando cada una con su utilidad práctica:
  1. **Especificación y Transformación:** el diseño formal de sistemas y la conversión de formatos de datos.
  2. **Protocolos:** cómo el navegador "pide" una página al servidor web mediante comandos estandarizados como `GET` o `POST` en HTTP.
  3. **Multimedia (SVG y MIDI):** cómo el código informático no solo genera texto o números, sino arte visual y producción musical.

* **Ejemplo para utilizar en clase:**
  - **Gráfico:** Muestre que un archivo de imagen `.svg` se puede abrir con el Bloc de Notas y ver que es puro texto informático (ej. `<circle cx="50" cy="50" r="40" fill="blue" />`).
  - **Sonido:** Explique que los teclados musicales electrónicos no graban el audio pesado; envían instrucciones MIDI a la computadora diciendo: *"tocar la tecla Do con fuerza 80 durante 2 segundos"*.

* **Idea clave:**
  Un lenguaje informático existe siempre que haya necesidad de comunicar una estructura formal a una máquina, ya sea para transferir archivos en red, dibujar figuras vectoriales o sintetizar música.

---

### Diapositiva 11 — ¿Cómo conviven en una Aplicación Real?

* **Qué decir:**
  > *"Para integrar todo lo que hemos visto, miremos este diagrama de flujo. Imaginen que ustedes están en su celular y van a iniciar sesión en una aplicación como Spotify, Instagram o su portal escolar. ¿Qué ocurre por dentro? Miren el trabajo en equipo de los lenguajes informáticos: primero, el lenguaje de marcas (HTML) dibuja el formulario con las cajas de texto y el botón de ingresar. Segundo, un lenguaje de programación (JavaScript) entra en acción y valida al instante que la contraseña no esté vacía y tenga al menos 8 caracteres. Tercero, un protocolo de comunicación (HTTP con cifrado seguro HTTPS) empaqueta esa información y la hace viajar por internet hasta los servidores de la empresa. Cuarto, en el servidor, un lenguaje de consulta (SQL) interroga a la base de datos para verificar si el usuario y la contraseña existen y coinciden. Y quinto, una vez verificado, un lenguaje gráfico (SVG) dibuja el avatar y los íconos de la pantalla del usuario. ¡Cinco familias de lenguajes informáticos trabajando coordinadamente en menos de un segundo!"*

* **Qué explicar:**
  Enfatice la complementariedad tecnológica. Ningún lenguaje informático es "el mejor" de forma aislada; una solución informática moderna es una orquesta donde cada lenguaje cumple el rol para el que fue diseñado.

* **Ejemplo para utilizar en clase:**
  Pregunte a los estudiantes qué pasaría si elimináramos el paso 3 (el protocolo HTTP): *"Aunque tengamos la página perfecta en HTML y la base de datos con SQL, los datos nunca saldrían de nuestro celular ni llegarían al servidor; no habría comunicación en red."*

* **Idea clave:**
  Las aplicaciones del mundo real integran armónicamente múltiples lenguajes informáticos especializados en una sola experiencia de usuario.

---

### Diapositiva 12 — ACTIVIDAD: Clasificador Profesional de Lenguajes (5 a 10 minutos)

* **Qué decir:**
  > *"Ahora es el momento de aplicar lo aprendido de forma práctica e individual. Durante los próximos 8 minutos, van a abrir su cuaderno o un documento de texto. Van a leer los cuatro casos técnicos reales que están proyectados en la diapositiva y van a escribir su respuesta fundamentada. No se trata de adivinar, sino de aplicar los conceptos que acabamos de debatir: reconozcan si se trata de marcas, consulta, pseudocódigo o refuten una afirmación falsa. Adelante, trabajen de forma individual."*

* **Qué explicar y supervisar:**
  Camine por el salón mientras los estudiantes trabajan individualmente. Asegúrese de que no se copien y que no respondan con una sola palabra; exija que expliquen el *por qué* de su respuesta técnica.

#### Casos planteados y Respuestas Técnicas Esperadas:
1. **Caso 1:** `SELECT nombre, saldo FROM cuentas WHERE saldo < 0;`
   - *Familia:* Lenguaje de consulta (Query Language), específicamente SQL.
   - *Objetivo:* Filtrar e interrogar una base de datos para extraer los nombres y saldos de aquellos clientes o cuentas bancarias con saldo negativo (en deuda).
2. **Caso 2:** `<producto><nombre>Laptop</nombre><precio>800</precio></producto>`
   - *Familia:* Lenguaje de marcas (XML/HTML).
   - *Justificación:* Es de marcas porque encierra y organiza los datos dentro de etiquetas semánticas (`<nombre>`, `<precio>`). NO es de programación porque no posee variables dinámicas, no ejecuta algoritmos ni evalúa condiciones lógicas.
3. **Caso 3:** `SI temperatura > 35 ENTONCES activar_ventilador() SINO apagar()`
   - *Determinación:* Es pseudocódigo.
   - *Justificación:* Es un lenguaje informático porque modela con rigor la lógica de un algoritmo computacional (toma de decisiones condicional) utilizando lenguaje estructurado comprensible para los seres humanos antes de ser codificado en un lenguaje de programación específico.
4. **Caso 4:** Refutar la afirmación: *"Si una herramienta no tiene variables ni bucles while, no es un lenguaje informático"*.
   - *Refutación esperada:* La afirmación es totalmente falsa. El estudiante confunde "lenguaje informático" con "lenguaje de programación". Lenguajes como HTML, XML, SQL, HTTP o SVG son lenguajes informáticos completos porque son sistemas estructurados formales para comunicarse con computadoras, a pesar de que no utilicen bucles while ni variables imperativas.

* **Criterio de evaluación rápida:**
  Verifique que el estudiante distinga con total claridad la diferencia entre estructurar información (marcas/consultas) y ejecutar cómputo (programación).

---

### Diapositiva 13 — Cierre de la Clase y Puntos Clave

* **Qué decir:**
  > *"Excelente trabajo de todos en la actividad. Para cerrar nuestra clase de hoy con broche de oro, repasemos las ideas que deben quedar grabadas en su formación académica: Primero, un lenguaje informático es cualquier sistema estructurado para comunicarse con una computadora, procesar datos o conectar sistemas. Segundo, mientras el lenguaje humano es poético, emocional y tolera que nos equivoquemos o seamos ambiguos, el lenguaje informático exige precisión matemática absoluta. Tercero, nuestra regla de oro: todo lenguaje de programación es informático, pero hay un universo inmenso de lenguajes informáticos que no son de programación. Y cuarto, HTML es el rey de la estructura web mediante etiquetas, pero jamás debe ser llamado lenguaje de programación porque no maneja variables ni algoritmos. La próxima vez que alguien les pregunte si saben programar o si conocen lenguajes informáticos, ustedes sabrán responder con la precisión de un profesional de la tecnología."*

* **Qué explicar:**
  Realice una ronda rápida de preguntas orales espontáneas (1 o 2 minutos) para consolidar:
  - *"¿Quién me da un ejemplo de un lenguaje informático que sirva para consultar datos?"* (SQL).
  - *"¿Quién me dice una razón por la que HTML no es de programación?"* (No tiene variables / No tiene condicionales / No tiene bucles).

* **Idea clave:**
  El estudiante consolida una visión amplia, rigurosa y no reduccionista de los lenguajes en las ciencias de la computación.

---

## 5. Tabla de Errores Frecuentes y Respuestas Pedagógicas

| Error Frecuente del Estudiante | ¿Por qué ocurre? | Cómo aclararlo pedagógicamente |
| :--- | :--- | :--- |
| *"HTML sí es de programación porque en la web hago páginas interactivas."* | Confusión entre HTML y las tecnologías que lo acompañan (JavaScript). | Aclare que la interactividad la da JavaScript (programación); HTML solo provee las cajas y los textos estáticos (marcas). |
| *"El pseudocódigo es solo un borrador en español, no es un lenguaje informático."* | Apariencia informal o cercana al lenguaje natural. | Explique que el pseudocódigo tiene reglas de sintaxis y palabras clave formales que modelan algoritmos de computación con rigor. |
| *"SQL programa la base de datos."* | Se asume que cualquier comando en consola es un programa. | Destaque que SQL es declarativo: indica QUÉ datos extraer mediante filtros, no define algoritmos secuenciales de procesamiento en memoria. |
| *"Los protocolos de internet como HTTP son cables o hardware."* | Se confunde la infraestructura física con las reglas de software. | Explique que los cables transportan bits, pero el protocolo HTTP es el 'idioma estructurado' en el que esos bits se saludan y piden páginas web. |
| *"Los lenguajes informáticos van a desaparecer porque ahora le hablamos a la IA en español."* | Novedad de los asistentes generativos (ChatGPT, Gemini). | Recuerde que los modelos de IA son programas gigantescos escritos en lenguajes informáticos (Python, C++, CUDA) que convierten el texto humano en cálculos matriciales estrictos. |

---

## 6. Recomendaciones para el Docente durante la Proyección

1. **Uso de teclado para proyección:**
   Puede avanzar las diapositivas en la plataforma Klazia usando la tecla `Espacio` o las flechas `←` y `→`.
2. **Modo Pantalla Completa:**
   Active el botón de pantalla completa en la esquina inferior del visor para evitar distracciones en el aula de clases.
3. **Pizarra de apoyo:**
   Tenga a mano la pizarra para escribir los ejemplos breves de etiquetas (`<titulo>`) y sentencias SQL (`SELECT...`) a medida que se mencionan en las diapositivas correspondientes.
4. **Fomento de la argumentación técnica:**
   Durante la revisión de la actividad de la Diapositiva 12, no acepte respuestas de una sola palabra como "SQL" o "No". Exija que el estudiante diga: *"Es SQL porque es un lenguaje de consulta para bases de datos relacionales"* o *"No es programación porque carece de variables y control de flujo"*.
