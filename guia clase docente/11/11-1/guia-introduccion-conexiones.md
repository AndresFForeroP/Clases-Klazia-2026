# Guía del Docente — Capas de Neuronas y Flujo de Información
## 11.º Grado — Grupo 1

---

## 1. Propósito y Contexto de la Lección

Esta guía constituye el **guion de explicación pedagógica** para el docente durante la clase presencial de 11.º grado (Grupo 1). 

El contenido curricular proviene estrictamente del documento fuente `cursos/11/11-1.md`. 

En la sesión anterior se analizó la composición y dinámica interna de una neurona individual. El propósito central de esta clase es dar el salto cualitativo hacia la arquitectura de red: **cómo se agrupan las neuronas en capas**, qué funciones cumplen los tres grandes grupos de capas (**entrada**, **ocultas** y **salida**), qué topologías especiales existen (**crossbar** y **autorrecurrentes**), y cómo se determina el **sentido de la marcha** de la información para dar lugar a los dos grandes modos de propagación: **hacia adelante (feedforward)** y **hacia atrás (feedback)**, reconociendo en este último la existencia de dos grupos de pesos.

### Objetivos de Aprendizaje:
Al finalizar la clase, el estudiante será capaz de:
1. Explicar por qué las neuronas artificiales se agrupan en **capas** y cómo distribuyen el procesamiento.
2. Identificar y diferenciar los tres grupos de capas: **capa de entrada** (sensores), **capas ocultas** (extracción y transformación intermedia; 0, 1 o varias) y **capa de salida** (actuadores o emisión).
3. Distinguir con precisión las conexiones **crossbar** (entramado cruzado) y las conexiones **autorrecurrentes** (retroalimentación a sí misma).
4. Comprender el concepto de **sentido de la marcha** y direccionalidad de las señales en una red neuronal.
5. Comparar rigurosamente la propagación **feedforward** (unidireccional, sin ciclos, clasificación de patrones) y la propagación **feedback** (bidireccional, con memoria secuencial), identificando sus dos grupos de pesos: pesos *forward* y pesos *feedback*.

---

## 2. Metodología de Enseñanza en Clase

Para impartir este tema a estudiantes de grado 11 sin caer en tecnicismos oscuros ni perder precisión matemática, se aplica la siguiente secuencia:

$$\text{COMPRENDER} \longrightarrow \text{EXPLICAR CON SENCILLEZ} \longrightarrow \text{EJEMPLIFICAR} \longrightarrow \text{RELACIONAR} \longrightarrow \text{PROFUNDIZAR}$$

1. **Idea intuitiva primero:** Presente el problema en lenguaje natural y cotidiano antes de la etiqueta técnica.
2. **Término técnico y definición formal:** Introduzca la nomenclatura estandarizada en ciencias de la computación (*feedforward*, *feedback*, *crossbar*, *autorrecurrente*).
3. **Ejemplo práctico real:** Use analogías biológicas (la retina) y tecnológicas (sensores de un robot, procesamiento de lenguaje).
4. **Relación con lo anterior:** Conecte la neurona atómica con la capa colectiva y la dirección del flujo.
5. **Aclaración de confusiones típicas:** Resuelva dudas antes de que se conviertan en errores conceptuales.

---

## 3. Planificación Temporal Sugerida (Bloque de 50–60 min)

| Bloque | Diapositivas | Contenido Temático | Tiempo Estimado |
| :--- | :--- | :--- | :--- |
| **Apertura y Motivación** | Diapositivas 1 – 2 | Portada, objetivos y necesidad de agrupar neuronas en capas | 6 min |
| **Arquitectura de Capas** | Diapositivas 3 – 8 | Entrada (sensores/retina), Ocultas (0, 1 o varias), Salida (motores robot) y esquema global | 15 min |
| **Topologías de Conexión** | Diapositivas 9 – 10 | Conexiones Crossbar y Conexiones Autorrecurrentes | 8 min |
| **Sentido de la Marcha y Flujos** | Diapositivas 11 – 14 | Direccionalidad, Feedforward, Feedback (dos grupos de pesos) y comparativa técnica | 14 min |
| **Actividad Práctica Individual** | Diapositiva 15 | Ejercicio individual de diagnóstico y aplicación en cuaderno/documento (4 pasos) | 8 – 10 min |
| **Cierre y Consolidación** | Diapositiva 16 | Síntesis de puntos clave y preguntas de retroalimentación oral | 5 min |

---

## 4. Guion Pedagógico Diapositiva por Diapositiva

---

### Diapositiva 1 — Portada y Objetivos de la Lección
- **QUÉ DECIR:**
  > *"Buenos días a todos. En las clases anteriores estudiamos la unidad básica de la inteligencia artificial: una neurona solitaria con sus entradas, sus pesos y su función de activación. Pero una sola neurona es como un interruptor o una compuerta: por sí sola no puede reconocer un rostro, ni traducir un idioma, ni manejar un carro autónomo. Hoy daremos el paso fundamental: vamos a aprender cómo se unen y organizan las neuronas en equipos de trabajo llamados **capas**, cómo viaja la señal a través de ellas y cómo el sentido de ese viaje define si una red sirve para clasificar una foto o para recordar una conversación. Al terminar la clase de hoy, sabrán distinguir los tres grupos de capas, las conexiones cruzadas y autorrecurrentes, y la diferencia exacta entre propagación hacia adelante y hacia atrás."*
- **QUÉ EXPLICAR:**
  Presente la hoja de ruta de la sesión. Resalte que la arquitectura de capas es el esqueleto de cualquier red neuronal, desde el perceptrón más elemental hasta los modelos de lenguaje modernos.
- **EJEMPLO PARA EXPLICAR:**
  Compare una neurona individual con un solo píxel en una pantalla: un píxel encendido en blanco no te dice nada, pero millones de píxeles organizados en filas y columnas forman una película completa de alta definición.
- **IDEA CLAVE:**
  La inteligencia de una red neuronal no reside en una sola neurona mágica, sino en cómo se organizan sus neuronas en capas y cómo viaja la información entre ellas.

---

### Diapositiva 2 — De la Neurona Individual a las Capas
- **QUÉ DECIR:**
  > *"Imaginemos que una neurona individual es como un trabajador en una fábrica que solo sabe hacer una tarea muy específica: comparar un número y decir sí o no. Si queremos ensamblar un producto complejo, un solo trabajador no puede hacer todo el trabajo. Necesitamos organizarlos en líneas de ensamblaje o departamentos: un departamento recibe las materias primas, otro departamento las procesa y moldea, y un último departamento empaca y entrega el producto final. En informática, a cada uno de esos departamentos o niveles de trabajadores lo llamamos una **capa** de neuronas. Todas las redes neuronales se dividen en tres grandes grupos de capas: **Entrada**, **Ocultas** y **Salida**."*
- **QUÉ EXPLICAR:**
  - Defina con claridad qué es una **capa**: una agrupación estructurada de neuronas que operan en paralelo en un mismo nivel de procesamiento.
  - Explique que las conexiones entre neuronas son las vías de comunicación por donde circulan las señales.
  - Subraye que dividir la tarea en capas permite el *procesamiento distribuido por etapas*: cada capa se encarga de un nivel de abstracción.
- **EJEMPLO PARA EXPLICAR:**
  En una fábrica de calzado: Capa 1 recibe el cuero crudo (entrada). Capas intermedias cortan, cosen y pegan la suela (ocultas). Capa final empaca en cajas y despacha al camión (salida).
- **IDEA CLAVE:**
  Una capa es un conjunto de neuronas asociadas que transforman la información en una etapa específica del sistema.

---

### Diapositiva 3 — Capa de Entrada: Los Sensores de la Red
- **QUÉ DECIR:**
  > *"Empecemos por el principio: la **capa de entrada**. Quiero que piensen en las neuronas de la capa de entrada como los ojos, los oídos o las antenas de la red. Su trabajo NO es pensar, ni razonar, ni hacer operaciones matemáticas complicadas. Su función es ser **sensores**. Toman la información del mundo exterior —por ejemplo, el brillo de una foto, la temperatura que marca un termómetro o el sonido de un micrófono— y se limitan a pasar esa información exactamente como la recibieron hacia las capas que vienen después. Son la puerta de acceso al sistema."*
- **QUÉ EXPLICAR:**
  - Aclare que las neuronas de la capa de entrada no tienen pesos entrantes modificables ni funciones de activación complejas; son meros transductores o distribuidores de la señal de entrada.
  - Explique que el número de neuronas de la capa de entrada coincide exactamente con la cantidad de datos que componen el estímulo exterior (por ejemplo, si una imagen tiene 28x28 píxeles = 784 valores, la capa de entrada tendrá exactamente 784 neuronas).
- **EJEMPLO PARA EXPLICAR:**
  Un sensor de temperatura en una estación meteorológica: no decide si va a llover ni calcula el pronóstico; solo mide "24 °C" y envía ese número al computador central.
- **IDEA CLAVE:**
  La capa de entrada actúa como un conjunto de sensores: recibe datos brutos del exterior y los transmite directamente hacia las capas posteriores.

---

### Diapositiva 4 — Ejemplo de Entrada: La Retina Humana
- **QUÉ DECIR:**
  > *"Miren este ejemplo biológico que describe nuestro texto de estudio: la **retina** del ojo humano. La retina está cubierta por millones de células llamadas conos y bastones. Cuando la luz de un foco o del sol choca contra la retina, estas células fotorreceptoras no saben si están viendo a su mamá, una pizza o un libro de matemáticas. Su único trabajo es transformar los fotones de luz en pequeños impulsos eléctricos y enviarlos por el nervio óptico hacia la parte de atrás del cerebro, la zona occipital. La retina es exactamente la capa de entrada de nuestro sistema biológico de visión."*
- **QUÉ EXPLICAR:**
  - Conecte el ejemplo biológico con el equivalente informático: el sensor CMOS de una cámara digital o un escáner.
  - Resalte la palabra técnica **transducción**: convertir un estímulo físico (luz, presión, sonido) en una señal eléctrica o numérica computable.
- **EJEMPLO PARA EXPLICAR:**
  En un sistema de reconocimiento facial de un celular: la cámara captura la imagen y la convierte en una matriz de números entre 0 y 255. Esa matriz alimenta a las neuronas de la capa de entrada.
- **IDEA CLAVE:**
  La retina no "reconoce" objetos; solo convierte la luz en impulsos eléctricos para que el cerebro los procese. Así opera la capa de entrada de una red artificial.

---

### Diapositiva 5 — Capas Ocultas: El Corazón del Procesamiento
- **QUÉ DECIR:**
  > *"Ahora pasamos al lugar donde ocurre la verdadera magia: las **capas ocultas**. Se llaman 'ocultas' no porque sean un secreto misterioso, sino por una razón puramente arquitectónica: **no tienen contacto directo con el mundo exterior**. No ven los datos crudos del entorno ni le entregan la respuesta al usuario; están encerradas en el medio, recibiendo señales de la capa previa y entregándolas a la siguiente. Y aquí viene una pregunta clave que siempre confunde a los estudiantes: ¿cuántas capas ocultas debe tener una red? La respuesta es: depende del problema. Puede no tener **ninguna**, puede tener **una**, o puede tener **muchas**."*
- **QUÉ EXPLICAR:**
  - Explique por qué pueden ser **cero (0)**: Si un problema es linealmente separable (por ejemplo, determinar si un número es positivo o negativo), basta conectar la entrada directamente con la salida.
  - Explique por qué pueden ser **imprescindibles**: Si el problema involucra relaciones no lineales complejas (reconocer si una foto contiene un gato, entender la voz humana, predecir el clima), las capas intermedias son obligatorias para descomponer el problema en características jerárquicas (bordes $\to$ texturas $\to$ formas $\to$ partes $\to$ objeto completo).
- **EJEMPLO PARA EXPLICAR:**
  Un chef preparando un platillo gourmet: el cliente pide la comida (entrada) y el mesero se la lleva a la mesa (salida). Los cocineros que pican, hornean y sazonan en la cocina cerrada son las *capas ocultas*. El cliente nunca los ve directamente, pero sin ellos no hay comida.
- **IDEA CLAVE:**
  Las capas ocultas están entre la entrada y la salida; realizan las transformaciones no lineales y pueden ser cero, una o múltiples según la dificultad de la tarea.

---

### Diapositiva 6 — Capa de Salida: La Emisión de la Respuesta
- **QUÉ DECIR:**
  > *"Llegamos al final del recorrido: la **capa de salida**. Una vez que la información entró por los sensores y fue procesada por las capas ocultas, el sistema tiene que hacer algo con ese resultado. La capa de salida es la que transfiere la decisión final hacia el exterior. Puede ser encender un bombillo verde, mostrar un texto en pantalla que diga 'Spam detectado', o enviar una señal eléctrica que mueva el brazo de un robot."*
- **QUÉ EXPLICAR:**
  - Resalte que el tipo y la cantidad de neuronas de la capa de salida dependen de lo que el sistema deba responder.
  - Explique que las salidas pueden ser **discretas** (por ejemplo, 1 si es correo legítimo y 0 si es spam) o **analógicas/continuas** (como un valor entre 0 y 100 que represente la velocidad o el porcentaje de probabilidad).
- **EJEMPLO PARA EXPLICAR:**
  En un sistema de frenado automático de emergencia de un carro: la capa de salida genera la señal física que activa los pistones del freno sobre los discos de las ruedas.
- **IDEA CLAVE:**
  La capa de salida es el canal por el cual la red neuronal emite su decisión, predicción o acción hacia el mundo exterior.

---

### Diapositiva 7 — Ejemplo de Salida: Control de Motores en un Robot
- **QUÉ DECIR:**
  > *"Veamos el ejemplo concreto de nuestro documento: imaginemos un pequeño robot móvil de 4 ruedas. Este robot tiene que navegar por un pasillo sin estrellarse. Cuando sus sensores de entrada capturan la distancia a las paredes y las capas ocultas procesan la trayectoria, la **capa de salida** emite una señal analógica para cada una de sus cuatro ruedas. Esa señal le dice a cada motor: 'tú gira a 5 voltios, tú a 2 voltios, tú a 8 voltios'. Gracias a esas cuatro señales de salida, el robot acelera, frena o gira de forma coordinada."*
- **QUÉ EXPLICAR:**
  - Muestre cómo el cómputo abstracto se materializa en una acción electromecánica.
  - Destaque que cada rueda tiene asignada su propia neurona en la capa de salida (4 neuronas de salida para 4 ruedas).
  - Recuerde el concepto de señal *analógica*: no es un simple encendido/apagado, sino una magnitud continua que gradúa la velocidad de cada motor.
- **EJEMPLO PARA EXPLICAR:**
  Si el robot debe girar a la derecha: la capa de salida reduce la velocidad de los motores derechos y aumenta la de los izquierdos, provocando un viraje suave.
- **IDEA CLAVE:**
  En sistemas de control y robótica, la capa de salida transforma valores numéricos computados en señales de control físico para los actuadores.

---

### Diapositiva 8 — Diagrama: Los Tres Grandes Grupos de Capas
- **QUÉ DECIR:**
  > *"Detengámonos en este diagrama general. Aquí tenemos la radiografía completa de una red neuronal clásica: a la izquierda, la **Capa de Entrada** que recibe los datos como sensores. En el centro, las **Capas Ocultas** —que recuerden, pueden ser cero, una o muchas— procesando y transformando la información. Y a la derecha, la **Capa de Salida** emitiendo la acción al exterior. Este esquema de tres bloques es la base estructural de toda la inteligencia artificial conexionista."*
- **QUÉ EXPLICAR:**
  - Guíe la vista de los estudiantes de izquierda a derecha siguiendo las flechas.
  - Pregunte al grupo: *"¿Qué pasaría si quitamos las capas ocultas?"* (La entrada va directo a la salida, solo sirve para problemas lineales muy básicos).
  - Pregunte: *"¿Qué pasa si agregamos muchas capas ocultas?"* (Tenemos una red profunda o *Deep Learning*, capaz de resolver tareas sumamente complejas).
- **EJEMPLO PARA EXPLICAR:**
  Procesamiento de audio: Entrada (micrófono convierte sonido en frecuencias) $\to$ Ocultas (detecta fonemas, sílabas y palabras) $\to$ Salida (escribe el texto en pantalla o ejecuta una orden de voz).
- **IDEA CLAVE:**
  Toda arquitectura neuronal se sintetiza en el flujo: Entrada (sensores) $\to$ Ocultas (procesamiento) $\to$ Salida (actuadores).

---

### Diapositiva 9 — Conexiones Crossbar: El Entramado Cruzado
- **QUÉ DECIR:**
  > *"Ahora que conocemos las capas, hablemos de cómo se conectan las neuronas entre una capa y otra. En el documento encontramos un término técnico muy interesante: **conexiones crossbar**. ¿Qué significa crossbar? En español significa 'barra cruzada' o 'enrejado cruzado'. Son aquellas conexiones donde **las salidas de las neuronas de una capa se cruzan entre sí** para conectarse con distintas neuronas de la siguiente capa. No viajan en carriles paralelos aislados; se entrecruzan formando una malla."*
- **QUÉ EXPLICAR:**
  - Explique el origen del término en ingeniería: los conmutadores telefónicos y matrices de chips (*crossbar switch*), donde una cuadrícula permite que cualquier línea vertical se conecte con cualquier línea horizontal en los puntos de cruce.
  - Destaque la consecuencia computacional: gracias a este cruce, una sola neurona de la capa oculta puede recibir información combinada de varios sensores al mismo tiempo.
- **EJEMPLO PARA EXPLICAR:**
  **Analogía:** Una intersección o cruce de caminos donde las rutas de varios pueblos se cruzan para repartir a los viajeros hacia distintas ciudades de destino.
- **IDEA CLAVE:**
  Las conexiones crossbar son enlaces cruzados en malla donde las salidas de una capa se intersectan para alimentar a múltiples neuronas de otra capa.

---

### Diapositiva 10 — Conexiones Autorrecurrentes: Bucle a Sí Misma
- **QUÉ DECIR:**
  > *"Veamos ahora una conexión muy particular y fascinante: la **conexión autorrecurrente**. Presten mucha atención al nombre: 'auto' significa hacia uno mismo, y 'recurrente' significa que regresa o se repite. Por lo tanto, una conexión autorrecurrente es aquella en la que **la salida de una neurona vuelve a ser entrada de ella misma**. Es como si la neurona tuviera un cable que sale de su axón y se conecta directamente de nuevo a su propia entrada."*
- **QUÉ EXPLICAR:**
  - Pregunte al grupo: *"¿Para qué querría una neurona recibir su propia salida?"* Explique que esto introduce el concepto más importante de las redes dinámicas: **la memoria**.
  - Si una neurona no se conecta a sí misma, en cada instante de tiempo empieza desde cero. Pero si su salida entra de nuevo en ella, la neurona puede 'recordar' lo que hizo en el milisegundo anterior y acumular o mantener un estado.
  - Relaciónelo con la dynamic temporal de estado $t \to t+1$.
- **EJEMPLO PARA EXPLICAR:**
  **Analogía:** Cuando estás sumando una lista mental de precios en el supermercado: tienes 5.000, le sumas 3.000 y te da 8.000. Ese 8.000 (tu salida) lo guardas en tu mente para ser la base de la siguiente suma. La neurona hace lo mismo retroalimentándose a sí misma.
- **IDEA CLAVE:**
  Una conexión autorrecurrente retroalimenta la salida de una neurona hacia su propia entrada, permitiéndole conservar memoria de su estado anterior.

---

### Diapositiva 11 — El Sentido de la Marcha de la Información
- **QUÉ DECIR:**
  > *"Llegamos a uno de los puntos centrales del tema: **el sentido de la marcha de la señal**. Piensen en esto de forma intuitiva: la información entra por los sensores de la capa de entrada, viaja a través de las capas ocultas y sale por la capa de salida. Por lo tanto, en principio, la señal tiene una dirección clara, tiene un 'sentido de la marcha' hacia adelante. Sin embargo, no todas las redes son una autopista recta. Existen redes donde las conexiones llevan la señal por caminos más tortuosos, permitiendo que la información retroceda o recircule. Y según ese sentido de la marcha, la propagación de la señal se clasifica en dos grandes grupos: **Feedforward** y **Feedback**."*
- **QUÉ EXPLICAR:**
  - Aclare la metáfora del "sentido de la marcha": igual que en el tráfico vial existen calles de sentido único y calles con retornos o rotondas.
  - Explique que la topología de las conexiones es lo que dicta las reglas de tránsito de la información dentro del circuito neuronal.
- **EJEMPLO PARA EXPLICAR:**
  Una cinta transportadora en un supermercado solo se mueve hacia adelante (feedforward). Un circuito de carreras con vueltas y curvas cerradas donde los autos pasan varias veces por el mismo punto (feedback).
- **IDEA CLAVE:**
  El sentido de la marcha es la direccionalidad del flujo de información en la red, determinado por la configuración de sus conexiones.

---

### Diapositiva 12 — Propagación hacia Adelante (Feedforward)
- **QUÉ DECIR:**
  > *"Veamos la primera categoría: **Propagación hacia adelante o Feedforward**. La palabra en inglés lo dice todo: 'feed' es alimentar y 'forward' es hacia adelante. En estas redes rige una regla estricta: **ninguna salida de una neurona puede volver a ser entrada de otra neurona de su misma capa ni de capas anteriores**. La información viaja como una flecha: de entrada hacia ocultas, y de ocultas hacia la salida. Nunca retrocede y nunca se queda circulando en la misma capa."*
- **QUÉ EXPLICAR:**
  - Destaque las propiedades técnicas del Feedforward:
    1. Son redes **acíclicas** (sin bucles).
    2. Su cálculo es determinista, muy rápido y en una sola pasada.
    3. Tienen un solo grupo de pesos (todos apuntan hacia adelante).
  - Mencione su utilidad principal: son las reinas indiscutibles del **reconocimiento y clasificación de patrones**. Si quieres saber si una foto es un perro o un gato, o leer un código de barras, una red feedforward es la herramienta ideal porque solo necesita ver la imagen una vez y entregar el veredicto.
- **EJEMPLO PARA EXPLICAR:**
  El escáner de huellas dactilares para desbloquear un celular: pones el dedo, la imagen viaja hacia adelante a través de las capas y en 50 milisegundos te dice: "Huella reconocida, celular desbloqueado". No necesita memorizar nada del pasado, solo clasificar la foto actual.
- **IDEA CLAVE:**
  En una red feedforward la información fluye estrictamente hacia adelante sin bucles; es la arquitectura estándar para reconocimiento y clasificación de patrones.

---

### Diapositiva 13 — Propagación hacia Atrás (Feedback / Recurrente)
- **QUÉ DECIR:**
  > *"Ahora veamos la contraparte: **Propagación hacia atrás o Feedback**. 'Feedback' significa retroalimentación. En estas redes ocurre algo muy interesante: **alguna salida de una capa vuelve a entrar a neuronas de su misma capa o a neuronas de capas anteriores**. De este modo, la información circula en dos sentidos: hacia adelante (forward) y hacia atrás (feedback). Y aquí viene un detalle técnico fundamental que deben anotar en sus cuadernos: en estas redes existen **DOS GRUPOS DE PESOS**: a) los pesos de las conexiones forward, y b) los pesos de las conexiones feedback."*
- **QUÉ EXPLICAR:**
  - Detalle la existencia de los dos grupos de pesos:
    - Los **pesos forward** regulan cuánta fuerza tiene la señal que avanza hacia la salida.
    - Los **pesos feedback** regulan cuánta influencia tiene la señal que regresa hacia etapas previas o laterales.
  - Explique que este flujo con retorno dota a la red de **memoria temporal**: puede procesar información secuencial donde lo que pasó hace un momento afecta lo que se debe interpretar ahora (como en el lenguaje o la música).
- **EJEMPLO PARA EXPLICAR:**
  Al leer un libro: cuando lees la palabra "banco", para saber si se refiere a un banco de dinero o a un banco de madera en un parque, tu cerebro retroalimenta mentalmente las palabras que leíste antes en la misma oración. Eso es feedback.
- **IDEA CLAVE:**
  En feedback la información circula hacia adelante y hacia atrás, permitiendo bucles de memoria y utilizando dos grupos de pesos independientes: forward y feedback.

---

### Diapositiva 14 — Cuadro Comparativo: Feedforward vs. Feedback
- **QUÉ DECIR:**
  > *"Para fijar estos conceptos antes de nuestra actividad práctica, revisemos esta tabla comparativa. Miren punto por punto: en Feedforward la señal va en un solo sentido; en Feedback va en ambos sentidos con bucles. En Feedforward están prohibidas las conexiones en la misma capa; en Feedback están permitidas e incluso hay conexiones autorrecurrentes. En Feedforward la señal nunca retrocede a capas previas; en Feedback sí. En Feedforward hay un solo grupo de pesos; en Feedback hay dos: forward y feedback. Y finalmente: Feedforward sirve para clasificar patrones estáticos; Feedback sirve para secuencias dinámicas en el tiempo."*
- **QUÉ EXPLICAR:**
  - Recorra la tabla enfatizando que ninguna es "mejor" que la otra: son herramientas distintas diseñadas para problemas distintos.
  - Verifique que los alumnos entiendan el impacto de los **dos grupos de pesos**: en feedback, el entrenamiento matemático requiere ajustar tanto los pesos de avance como los pesos de retroceso.
- **EJEMPLO PARA EXPLICAR:**
  - Feedforward = Fotografía (un instante congelado en el tiempo).
  - Feedback = Película o audio (una secuencia donde cada segundo depende del anterior).
- **IDEA CLAVE:**
  Feedforward es unidireccional, sin memoria y con un grupo de pesos; Feedback es cíclico, con memoria temporal y con dos grupos de pesos (forward y feedback).

---

### Diapositiva 15 — Actividad Individual: Diagnóstico de Capas y Propagación
- **QUÉ DECIR:**
  > *"Llegó el momento de aplicar lo que acabamos de aprender. Tienen entre 5 y 10 minutos para responder de forma individual en sus cuadernos los 4 requerimientos prácticos que ven en pantalla. No se trata de repetir de memoria; quiero que piensen como ingenieros de sistemas: identifiquen las capas de un dron, analicen cuándo se necesitan capas ocultas, diferencien crossbar de autorrecurrente y elijan la propagación correcta para un modelo de lenguaje. Empiecen a trabajar en silencio."*
- **QUÉ EXPLICAR:**
  - Supervise el aula mientras los estudiantes resuelven.
  - Asegúrese de que en el punto 4 mencionen explícitamente los **dos grupos de pesos** de las conexiones feedback.
- **EJEMPLO PARA EXPLICAR:**
  Ver la sección 6 de esta guía para los criterios de solución esperados.
- **IDEA CLAVE:**
  Aplicar los conceptos de arquitectura de capas y dinámica de conexiones para diagnosticar y diseñar soluciones a problemas informáticos reales.

---

### Diapositiva 16 — Cierre y Consolidación
- **QUÉ DECIR:**
  > *"Excelente trabajo hoy. En una sola sesión pasamos de la neurona aislada a comprender la estructura completa de una red neuronal: sabemos qué hace la capa de entrada como sensor, qué hacen las capas ocultas y cuándo son necesarias, cómo la capa de salida activa mecanismos en el exterior, qué son las conexiones crossbar y autorrecurrentes, y cómo el sentido de la marcha divide al mundo de la IA en Feedforward y Feedback con sus dos grupos de pesos. Con estos cimientos, en las siguientes clases estaremos listos para entender cómo estas redes aprenden a través de algoritmos de entrenamiento. ¡Felicitaciones por la sesión!"*
- **QUÉ EXPLICAR:**
  - Sintetice los puntos centrales proyectados en la diapositiva.
  - Invite a resolver cualquier duda remanente antes de cerrar la clase.
- **IDEA CLAVE:**
  Las capas organizan la computación; las conexiones estructuran el camino; y el sentido de la marcha define la capacidad funcional de la red neuronal.

---

## 5. Simplificación Pedagógica de Conceptos Difíciles

Esta sección está diseñada para que el docente tenga a mano las herramientas de mediación didáctica ante los temas de mayor complejidad conceptual:

---

### Concepto 1: ¿Por qué las Capas Ocultas pueden ser Cero (0), Una o Varias?

- **Explicación sencilla para decir en clase:**
  *"Imaginen que clasificar datos es como separar frutas rojas de frutas verdes en una mesa. Si todas las manzanas están a la izquierda y todas las peras a la derecha, con trazar una sola línea recta en la mesa ya las separamos. Ahí no necesitamos capas ocultas: entrada directa a salida. Pero si las manzanas y peras están mezcladas formando círculos o espirales, una línea recta no sirve; necesitamos doblar la mesa o hacer cortes en varias dimensiones. Cada capa oculta es como una tijera adicional que permite doblar y cortar el espacio para separar patrones difíciles."*
- **Analogía cotidiana:**
  Un examen de selección múltiple con una sola pregunta fácil (no necesitas borrador ni cálculos intermedios, respondes directo: 0 capas ocultas). Un problema de física de tres páginas (necesitas hojas de borrador intermedias para resolver ecuaciones antes de dar la respuesta final: capas ocultas).
- **Ejemplo informático:**
  - Red sin capas ocultas (0): Compuertas lógicas AND y OR (linealmente separables).
  - Red con capas ocultas: Compuerta XOR, reconocimiento facial de OpenCV, clasificación de imágenes en ImageNet.
- **Explicación técnica correcta:**
  Las capas ocultas aplican transformaciones compuestas no lineales (a través de funciones de activación) sobre el espacio vectorial de entrada. El Teorema de Aproximación Universal establece que una red con al menos una capa oculta no lineal puede aproximar cualquier función continua; múltiples capas ocultas permiten representaciones jerárquicas con menor número total de parámetros.
- **Confusión frecuente del estudiante:**
  Creer que "oculto" significa "inaccesible o invisible para el programador". Aclare que se llaman ocultas únicamente porque no interactúan directamente con el entorno exterior (sensores o actuadores).

---

### Concepto 2: Conexiones Crossbar vs. Conexiones Autorrecurrentes

- **Explicación sencilla para decir en clase:**
  *"Crossbar es conectar hacia los demás en forma cruzada; autorrecurrente es conectarse a uno mismo en un bucle cerrado."*
- **Analogía cotidiana:**
  - **Crossbar:** Una llamada grupal en Zoom donde todas las personas hablan y escuchan a todas las demás entre dos salas distintas.
  - **Autorrecurrente:** Hablar en una habitación vacía con eco donde escuchas tu propia voz regresando a tus oídos medio segundo después.
- **Ejemplo informático:**
  - Crossbar: Una matriz de switches de red Ethernet que une 8 computadores de entrada con 8 servidores de salida en cualquier combinación.
  - Autorrecurrente: Un acumulador en un bucle `for` de programación (`suma = suma + valor`), donde la variable toma su valor anterior para generar el nuevo.
- **Explicación técnica correcta:**
  Las conexiones crossbar establecen una matriz de interconexión completa entre dos capas disjuntas $C_i \times C_{i+1}$, donde cada neurona $j$ de la capa receptora recibe señales de múltiples neuronas $k$ de la capa previa. Las conexiones autorrecurrentes definen un término en la diagonal principal de la matriz de adyacencia de la capa, donde la salida $y_i(t)$ se retroalimenta como componente de entrada de la misma neurona $N_i(t+1)$.
- **Confusión frecuente del estudiante:**
  Confundir la conexión autorrecurrente con un "error" o un "cortocircuito". Hay que aclarar que en computación dinámica los bucles sobre sí mismos son intencionales y crean persistencia temporal (memoria).

---

### Concepto 3: Propagación Feedforward vs. Feedback y los Dos Grupos de Pesos

- **Explicación sencilla para decir en clase:**
  *"En Feedforward la señal viaja en una calle de un solo sentido: hacia adelante. Por eso solo hay un grupo de pesos, los que dicen cuánto avanza la señal. En Feedback, la calle tiene doble sentido y rotondas: la señal va hacia adelante, pero también puede devolverse a la misma esquina o a la cuadra anterior. Como hay dos direcciones de tráfico, el sistema tiene dos controladores de peaje distintos: los pesos forward (para los que avanzan) y los pesos feedback (para los que retroceden)."*
- **Analogía cotidiana:**
  - Feedforward: Lanzar una flecha con un arco. Una vez que sueltas la cuerda, la flecha viaja únicamente hacia el blanco; no puede frenar a mitad de camino ni dar marcha atrás.
  - Feedback: Mantener el equilibrio sobre una bicicleta. A medida que avanzas hacia adelante, tu cuerpo siente si te estás inclinando hacia un lado y ajusta el manubrio hacia atrás en un bucle continuo de retroalimentación.
- **Ejemplo informático:**
  - Feedforward: Clasificador de dígitos MNIST (recibe la imagen del número "7" y emite la etiqueta "7").
  - Feedback: Modelo de autocompletado en el teclado del celular (para predecir la palabra siguiente, retroalimenta las palabras que acabas de escribir hace unos segundos).
- **Explicación técnica correcta:**
  En redes feedforward el grafo de computación es un Grafo Acíclico Dirigido (DAG); el cálculo de la salida requiere una sola pasada topológica. En redes con feedback (recurrentes), el grafo contiene ciclos dirigidos; el sistema se convierte en un sistema dinámico discreto regido por ecuaciones en diferencias:
  $$h(t) = f\left(W_{\text{forward}} \cdot x(t) + W_{\text{feedback}} \cdot h(t-1)\right)$$
  donde $W_{\text{forward}}$ es la matriz de pesos de las conexiones de avance y $W_{\text{feedback}}$ es la matriz de pesos de las conexiones de retroalimentación o recurrencia.
- **Confusión frecuente del estudiante:**
  Confundir la propagación hacia atrás (**Feedback** en la arquitectura) con el algoritmo de entrenamiento por retropropagación de errores (**Backpropagation**). Es crucial aclarar: *Feedback* describe por dónde circulan las señales durante el funcionamiento de la red; *Backpropagation* es un método matemático de cálculo de gradientes para ajustar pesos durante el aprendizaje.

---

## 6. Solucionario de la Actividad Práctica Individual (Diapositiva 15)

### Paso 1: Identificación de Capas en el Dron de Rescate
- **Respuesta esperada:**
  - **Capa de Entrada (Sensores):** La cámara térmica. Su función es recibir la radiación infrarroja del exterior y convertirla en señales eléctricas/numéricas para alimentar la red sin alterar su contenido.
  - **Capas Ocultas (Procesamiento intermedio):** La etapa de análisis de silueta. Su función es extraer patrones geométricos y térmicos para determinar si la figura corresponde a un ser humano o a una fuente de calor irrelevante (como una roca caliente).
  - **Capa de Salida (Actuadores / Emisión):** El módulo que activa la alarma sonora y envía las señales de control de vuelo a los rotores del dron para estabilizarse sobre el objetivo.
- **Criterio de evaluación:** El estudiante debe asociar explícitamente cada elemento físico con la capa correspondiente y justificar su rol funcional.

### Paso 2: Necesidad de Capas Ocultas (0 vs. 1 o varias)
- **Respuesta esperada:**
  - Una red puede prescindir de capas ocultas (0 capas) cuando el problema a resolver es **linealmente separable**, es decir, cuando la relación entre las entradas y la salida deseada se puede resolver mediante una correlación o frontera lineal directa (ejemplo: compuertas AND u OR simples, o clasificaciones binarias elementales).
  - Resulta imprescindible contar con una o más capas ocultas cuando el problema presenta **no linealidad** o alta complejidad (ejemplo: compuerta XOR, reconocimiento de rostros, habla, visión artificial), donde la red necesita descomponer el problema en múltiples niveles de abstracción y características intermedias para poder clasificarlo con precisión.
- **Criterio de evaluación:** Debe mencionar la distinción entre problemas simples/lineales y problemas complejos/no lineales.

### Paso 3: Distinción entre Conexión Crossbar y Autorrecurrente
- **Respuesta esperada:**
  - **Conexión Crossbar:** Es una conexión cruzada entre dos capas distintas (o entre distintas neuronas) donde las salidas de una neurona se ramifican e intersectan con múltiples neuronas receptoras en un patrón tipo matriz. Su función es integrar y combinar datos de diversas fuentes.
  - **Conexión Autorrecurrente:** Es un bucle cerrado sobre la misma unidad: la salida de una neurona se conecta directamente como entrada de ella misma. Su función es otorgar memoria local inmediata, permitiendo que el estado anterior de la neurona influya en su cálculo presente.
- **Criterio de evaluación:** Diferenciación clara de la topología (entre capas cruzadas vs. sobre sí misma) y su efecto funcional (combinación de datos vs. memoria de estado).

### Paso 4: Selección de Propagación y los Dos Grupos de Pesos
- **Respuesta esperada:**
  - Se debe utilizar **propagación hacia atrás (Feedback o Recurrente)**.
  - **Justificación:** Predecir texto requiere procesar una secuencia temporal donde el orden y las palabras previas dan el contexto para la palabra siguiente. Una red feedforward pura no tiene memoria de las palabras anteriores.
  - **Rol de los dos grupos de pesos:**
    - Los **pesos forward** modulan la señal de la palabra actual que ingresa al sistema.
    - Los **pesos feedback** modulan la señal que regresa desde los estados anteriores (las tres palabras ya redactadas), permitiendo que la red combine el contexto histórico con la entrada presente para emitir la predicción.
- **Criterio de evaluación:** Elección correcta de Feedback, justificación basada en la memoria contextual de secuencias, y mención explícita del rol de los pesos forward y pesos feedback.

---

## 7. Preguntas de Comprobación Oral Rápida (para uso del docente)

Si durante la explicación el docente nota distracción o desea verificar la comprensión de un concepto antes de avanzar, puede lanzar una de estas preguntas dirigidas:

1. *"Si tapamos la retina del ojo, ¿qué le pasa a la capa de entrada del sistema visual?"*
   - **Respuesta esperada:** Deja de recibir fotones; su valor de entrada cae a cero y no transmite señales al cerebro.
2. *"Si una red neuronal no tiene capas ocultas, ¿de dónde saca sus entradas la capa de salida?"*
   - **Respuesta esperada:** Directamente de las neuronas de la capa de entrada.
3. *"En un carro autónomo, ¿el pedal del acelerador está conectado a la capa de entrada o a la capa de salida?"*
   - **Respuesta esperada:** A la capa de salida, porque es un actuador que ejecuta una acción en el mundo físico.
4. *"¿Puede una red Feedforward tener conexiones autorrecurrentes? ¿Por qué?"*
   - **Respuesta esperada:** NO. Porque en una red feedforward ninguna salida puede volver a entrar a su misma capa ni a ella misma; la señal solo viaja hacia adelante.
5. *"¿Cuáles son los dos grupos de pesos que existen en una red con conexiones feedback?"*
   - **Respuesta esperada:** Los pesos de las conexiones forward y los pesos de las conexiones feedback.
