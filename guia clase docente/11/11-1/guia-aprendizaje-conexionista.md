# Guía del Docente — Aprendizaje en el Programa Conexionista
## 11.º Grado — Grupo 1

---

## 1. Propósito y Contexto de la Lección

Esta guía constituye el **guion de explicación pedagógica** para el docente durante la sesión presencial de informática en 11.º grado (Grupo 1).

El contenido curricular proviene estrictamente del documento fuente `cursos/11/11-1.md`.

El propósito central de esta clase es responder una de las preguntas más profundas de las ciencias cognitivas y la computación moderna: **¿Qué significa aprender y cómo se produce dicho proceso tanto en el ser humano como en una red neuronal artificial?**

A lo largo de la clase, los estudiantes transitarán desde la intuición biológica y psicológica del aprendizaje hasta la comprensión matemática y algorítmica de los tres grandes paradigmas del conexionismo:
1. **Aprendizaje Supervisado** (minimización del error mediante Regla Delta / LMS en ADALINE y Backpropagation en Perceptrón Multicapa).
2. **Aprendizaje No Supervisado** (categorización autónoma por similitud de patrones, algoritmos ART y mapas autoorganizativos SOFM de Kohonen con neuronas vencedoras).
3. **Aprendizaje por Refuerzo** (ensayo-error evaluativo, premios y castigos, algoritmo Q-Learning y dinámica de la Tabla Q desarrollada por Sutton y Barto).

---

## 2. Metodología de Enseñanza en Clase

Para enseñar este tema a estudiantes de 11.º grado con el máximo rigor técnico pero sin caer en abstracciones incomprensibles, se aplica la secuencia pedagógica:

$$\text{COMPRENDER} \longrightarrow \text{EXPLICAR CON SENCILLEZ} \longrightarrow \text{EJEMPLIFICAR} \longrightarrow \text{RELACIONAR} \longrightarrow \text{PROFUNDIZAR}$$

- **Regla de oro docente:** *"Explicación sencilla, concepto correcto"*. Nunca simplificar hasta volver falsa la definición, pero nunca presentar la fórmula matemática sin haber construido primero la intuición física.
- **Diálogo socrático:** Utilice las preguntas orales no como examen o calificación, sino para despertar la curiosidad y comprobar si el modelo mental del estudiante es sólido antes de pasar a la siguiente diapositiva.
- **Una sola idea por diapositiva:** Permita que la diapositiva proyectada sirva como ancla visual mientras usted desarrolla la explicación oral.

---

## 3. Planificación Temporal Sugerida (Bloque de 50–60 min)

| Bloque | Diapositivas | Contenido Temático | Tiempo Estimado |
| :--- | :--- | :--- | :--- |
| **Apertura e Intuición** | Diapositivas 1 – 2 | Portada, objetivos y el enigma del aprendizaje (Psicología vs. Conexionismo) | 6 min |
| **Mecanismo Fundamental** | Diapositivas 3 – 5 | Flujo de señales, ajuste de pesos sinápticos y caso práctico de la compuerta AND | 10 min |
| **El Reto de Categorizar** | Diapositivas 6 – 7 | Abstracción de conceptos (analogía de los coches) y mapa de las 3 familias | 6 min |
| **Aprendizaje Supervisado** | Diapositivas 8 – 10 | Error, supervisor, Regla Delta (Widrow-Hoff / LMS), ADALINE y Backpropagation (MLP) | 12 min |
| **Aprendizaje No Supervisado** | Diapositivas 11 – 12 | Agrupación sin etiquetas, ART, Mapas SOFM (Kohonen), Hopfield y neuronas vencedoras | 8 min |
| **Aprendizaje por Refuerzo** | Diapositivas 13 – 15 | Ensayo-error, refuerzo/penalización, Q-Learning, Tabla Q y cuadro comparativo | 8 min |
| **Actividad Individual** | Diapositiva 16 | Trabajo individual en cuaderno/documento (4 casos prácticos y conceptuales) | 8 – 10 min |
| **Cierre y Retroalimentación** | Diapositiva 17 | Síntesis de ideas fuerza y consolidación final | 4 min |

---

## 4. Caja de Herramientas Pedagógicas: Simplificación de Conceptos Complejos

Antes de entrar al guion diapositiva a diapositiva, el docente debe dominar estos 7 conceptos clave con su progresión didáctica obligatoria:

---

### Concepto Complejo 1: ¿Qué es "aprender" en una red neuronal? (Ajuste de Pesos Sinápticos)
- **Explicación sencilla para decir en clase:** *"Aprender en una red neuronal no es escribir nuevo código ni guardar un texto en un disco duro. Aprender es simplemente encontrar los números correctos para regular la fuerza de cada conexión entre neuronas."*
- **Analogía útil:** Una mesa de sonido con decenas de perillas. Al principio están puestas al azar y la música suena distorsionada. Aprender es girar cada perilla milimétricamente hasta que el sonido salga impecable.
- **Ejemplo informático:** Un modelo que reconoce si una imagen es un gato o un perro: no tiene una lista de razas guardada; tiene millones de números (pesos) que multiplican los valores de los píxeles hasta que la salida "gato" da un valor numérico más alto.
- **Explicación técnica correcta:** El aprendizaje es un proceso de optimización en el que se busca un vector o matriz de pesos sinápticos $W$ que minimice una función de coste o maximice una métrica de categorización frente a un espacio de entradas.
- **Confusión probable del estudiante:** Creer que la red "lee y memoriza" las respuestas como un estudiante que se machetea un cuestionario. 
- *Cómo desmontarla:* Preguntar: *"Si la red memorizara la imagen exacta, ¿qué pasaría si le muestro el mismo gato pero con la oreja un poco girada? Fallaría. Al ajustar pesos, la red aprende rasgos abstractos, no píxeles aislados."*

---

### Concepto Complejo 2: El Aprendizaje de la Conjunción AND (Entrada, Pesos y Umbral)
- **Explicación sencilla para decir en clase:** *"La compuerta AND es muy estricta: solo te dice 'SÍ' (1) si ambas condiciones se cumplen al mismo tiempo (1, 1). Si una red recién creada dice 'NO' cuando ambas entradas valen 1, está cometiendo un error; para corregirla, tenemos que subir el peso de esas entradas para que sumen lo suficiente y superen el umbral."*
- **Analogía útil:** Una puerta de seguridad que exige dos llaves simultáneas. Si ambas personas giran su llave pero el mecanismo no abre, hay que ajustar los engranajes internos (pesos) para que la fuerza combinada destrabe el cerrojo.
- **Ejemplo informático:** Una validación de acceso bancario: necesitas contraseña correcta (1) Y código de verificación en el móvil (1). Si cumples ambas, el sistema te da acceso (1); en cualquier otro caso, acceso denegado (0).
- **Explicación técnica correcta:** Para entradas binarias $x_1, x_2 \in \{0, 1\}$, la red calcula $y = f(w_1 x_1 + w_2 x_2 - \theta)$. Aprender la función AND exige encontrar $w_1, w_2$ y un sesgo/umbral $\theta$ tales que solo cuando $x_1 = 1 \land x_2 = 1$ la combinación lineal supere $\theta$.
- **Confusión probable del estudiante:** Pensar que la red "conoce" la lógica booleana de antemano.
- *Cómo desmontarla:* Recordar que la red solo ve números que entran, hace multiplicaciones y sumas, y compara contra un umbral. El entrenamiento modifica $w_1$ y $w_2$ mecánicamente hasta que las cuatro filas de la tabla den el resultado correcto.

---

### Concepto Complejo 3: Categorizar sin Respuestas Predefinidas
- **Explicación sencilla para decir en clase:** *"Categorizar es meter cosas distintas en una misma caja mental porque comparten rasgos parecidos, aunque nadie te haya dicho cómo se llama la caja ni cuáles debían ir dentro."*
- **Analogía útil:** Vas caminando por la calle y ves cientos de vehículos: un taxi amarillo abollado, un Ferrari rojo reluciente, una camioneta de reparto gris y un Jeep lleno de barro. Ninguno tiene el mismo color, tamaño ni forma, pero tu mente no duda: todos son 'coches'.
- **Ejemplo informático:** Spotify agrupando oyentes en comunidades musicales: el algoritmo no sabe qué es "indie melancólico de los 90", pero detecta que 200.000 usuarios escuchan el mismo conjunto de bandas a altas horas de la noche y los agrupa en un mismo segmento.
- **Explicación técnica correcta:** Mapeo de vectores en un espacio de alta dimensión hacia regiones o conglomerados (*clusters*) compactos minimizando la distancia euclídea o maximizando la densidad de similitud intrínseca.
- **Confusión probable del estudiante:** Creer que para agrupar siempre se necesita una etiqueta dada por un humano.
- *Cómo desmontarla:* Mostrar que un bebé de un año agrupa animales de peluche por textura o tamaño mucho antes de saber hablar o conocer las palabras "perro" u "oso".

---

### Concepto Complejo 4: Regla Delta (Widrow-Hoff / LMS) y ADALINE
- **Explicación sencilla para decir en clase:** *"La Regla Delta dice: mira cuánto te equivocaste (el error), multiplícalo por la señal que entró, y usa ese resultado para corregir el peso de inmediato. Si el error fue enorme, corrige mucho; si fue chiquito, haz solo un ajuste suave."*
- **Analogía útil:** Regular el agua caliente de la regadera. Si sale helada (error enorme), giras la llave con fuerza. Si sale casi a la temperatura ideal pero le falta un poquito (error diminuto), apenas rozas la manivela.
- **Ejemplo informático:** Un filtro cancelador de eco en una llamada telefónica: escucha el eco (error) y ajusta de forma continua los pesos de un circuito lineal (ADALINE) para neutralizar exactamente la frecuencia molesta en tiempo real.
- **Explicación técnica correcta:** En ADALINE (*ADAptive LINEar Neuron*), la actualización del vector de pesos viene dada por $\Delta w_i = \eta (d - y) x_i$, donde $d$ es la salida deseada, $y$ la salida lineal efectiva, $\eta$ la tasa de aprendizaje y $x_i$ la entrada. Minimiza el error cuadrático medio (*Least Mean Squares* - LMS).
- **Confusión probable del estudiante:** Confundir ADALINE con el Perceptrón simple de Rosenblatt.
- *Cómo desmontarla:* Aclarar que el Perceptrón ajusta pesos basándose en una salida discontinua escalón (0 o 1), mientras que ADALINE ajusta sus pesos antes de la cuantificación usando la salida puramente lineal, lo que permite una convergencia matemática mucho más suave y robusta (LMS).

---

### Concepto Complejo 5: Retropropagación del Error (Backpropagation) y Capas Ocultas
- **Explicación sencilla para decir en clase:** *"En una red con varias capas ocultas, si la salida final se equivoca, ¿a qué neurona de las capas intermedias le echamos la culpa? Backpropagation es el método matemático para repartir el error hacia atrás, desde la salida hasta la primera capa, para que cada neurona intermedia sepa cuánto debe ajustar sus conexiones."*
- **Analogía útil:** En un restaurante de lujo un cliente devuelve un plato de lasaña porque la pasta está cruda y la salsa salada. El mesero (salida) no cocina; va a la cocina y le dice al sous-chef (capa oculta 2) qué falló, y este a su vez reprende al cocinero de la pasta y al salsero (capa oculta 1). La queja viaja hacia atrás para que cada puesto corrija su receta.
- **Ejemplo informático:** Reconocimiento de dígitos manuscritos (0 al 9): la capa de salida dice "es un 7" cuando era un "1". El error viaja hacia atrás hacia las capas ocultas que detectaron bordes y esquinas, ajustando las conexiones para que no confundan un trazo vertical con una barra horizontal.
- **Explicación técnica correcta:** La Regla Delta Generalizada (Rumelhart y McClelland, 1986) aplica la regla de la cadena del cálculo multivariable para computar el gradiente parcial del error respecto a cada peso sináptico: $\frac{\partial E}{\partial w_{ij}} = \delta_j o_i$. Para capas ocultas, el factor $\delta_j$ se calcula recursivamente a partir de los errores ponderados de las capas subsiguientes.
- **Confusión probable del estudiante:** Creer que la información que viaja hacia atrás son datos nuevos o entradas al revés.
- *Cómo desmontarla:* Insistir: *"Hacia adelante viajan los DATOS (imágenes, números); hacia atrás viaja únicamente el ERROR matemático para ajustar los tornillos (pesos)."*

---

### Concepto Complejo 6: Aprendizaje Competitivo y Neuronas Vencedoras (SOFM / Kohonen)
- **Explicación sencilla para decir en clase:** *"En lugar de que todas las neuronas aprendan un poquito de todo, las neuronas compiten entre sí: la que esté más cerca del dato que acaba de entrar 'gana la carrera' (neurona vencedora) y tiene el derecho exclusivo de acercar sus pesos hacia ese dato para volverse la experta de esa categoría."*
- **Analogía útil:** Una brigada médica de emergencias con varios especialistas (cardiólogo, traumatólogo, pediatra). Si entra un paciente con una fractura, el traumatólogo da un paso al frente ('neurona vencedora') y atiende el caso; los demás se reservan para sus respectivas emergencias.
- **Ejemplo informático:** Un mapa autoorganizativo (SOFM de Kohonen) que analiza imágenes satelitales: una neurona se vuelve especialista en detectar bosques, otra en agua y otra en zonas urbanas, ubicándose geométricamente en una cuadrícula 2D donde bosques y selvas quedan contiguos.
- **Explicación técnica correcta:** En redes competitivas como ART (*Adaptive Resonance Theory*) o SOFM de Teuvo Kohonen, para cada vector de entrada $x$, se determina la neurona ganadora $k$ tal que $\|x - w_k\| = \min_j \|x - w_j\|$. La neurona ganadora (y sus vecinas topológicas en SOFM) actualiza sus pesos según $\Delta w_k = \alpha (x - w_k)$, atrayendo el centroide hacia el dato.
- **Confusión probable del estudiante:** Pensar que las neuronas "perdedoras" se borran o mueren.
- *Cómo desmontarla:* Explicar que las demás neuronas permanecen a la espera de otros patrones; así es exactamente como la red logra dividir el trabajo y crear múltiples categorías sin mezclarlas.

---

### Concepto Complejo 7: Q-Learning y la Tabla Q (Aprendizaje por Refuerzo)
- **Explicación sencilla para decir en clase:** *"La Tabla Q es como el bloc de notas secreto de un robot: anota en qué situación está (estado) y qué opciones tiene (acciones). Cada vez que toma una decisión y recibe un premio, le sube la nota a esa opción en su bloc; si recibe un castigo, le baja la nota. Con el tiempo, el robot solo consulta su bloc y elige siempre la acción con la nota más alta."*
- **Analogía útil:** Un jugador de videojuegos novato en un laberinto sin mapa: al doblar a la izquierda cae en una trampa de pinchos (-100 puntos); la próxima vez anotará en su mente: *'En la encrucijada, doblar a la izquierda = pésima idea'*. Cuando dobla a la derecha y encuentra una moneda de oro (+50 puntos), refuerza esa elección.
- **Ejemplo informático:** El algoritmo Q-learning (Sutton y Barto) controlando un dron autónomo: el estado es la inclinación y distancia a obstáculos, las acciones son 'acelerar motor izquierdo o derecho'. El dron explora al azar hasta que descubre cómo estabilizarse para maximizar sus puntos de vuelo continuo.
- **Explicación técnica correcta:** Q-Learning es un algoritmo de aprendizaje por refuerzo libre de modelo (*model-free*) que actualiza iterativamente los valores de la función de acción-valor $Q(s, a)$ mediante la ecuación de Bellman: $Q(s, a) \leftarrow Q(s, a) + \alpha [r + \gamma \max_{a'} Q(s', a') - Q(s, a)]$, donde $r$ es la recompensa inmediata, $\gamma$ el factor de descuento y $\alpha$ la tasa de aprendizaje.
- **Confusión probable del estudiante:** Creer que el aprendizaje por refuerzo es supervisado porque alguien le da "premios".
- *Cómo desmontarla:* Diferenciar con contundencia: *"Un supervisor te dice exactamente: 'la respuesta era 4.5'. Una recompensa solo te dice: 'lo hiciste bien' o 'lo hiciste mal', pero NO te dice qué movimiento exacto debiste haber hecho; eso lo tiene que descubrir la máquina explorando."*

---

## 5. Guion Pedagógico Diapositiva por Diapositiva

---

### Diapositiva 1 — Portada y Objetivos de la Lección
- **QUÉ DECIR:**
  > *"Buenos días a todos. En clases pasadas vimos cómo está construida una neurona artificial y cómo se organizan en capas. Pero nos quedó pendiente la pregunta más apasionante de la informática moderna: ¿cómo hace un montón de operaciones matemáticas para 'aprender'? ¿Qué significa que una máquina aprenda a reconocer tu voz, a detectar un tumor en una radiografía o a ganarle al campeón mundial de ajedrez? Hoy vamos a responder esto desde el enfoque conexionista. Al terminar la clase de hoy, ustedes sabrán exactamente cómo cambian los pesos de una red para aprender, cómo se calcula el error, y dominarán las tres grandes familias de aprendizaje: supervisado, no supervisado y por refuerzo."*
- **QUÉ EXPLICAR:**
  Presente los cinco objetivos operativos de la diapositiva. Enfatice que no se trata de ciencia ficción ni de "conciencia artificial", sino de algoritmos rigurosos de optimización matemática inspirados en las conexiones del cerebro biológico.
- **EJEMPLO PARA EXPLICAR:**
  Mencione cómo un filtro de spam en el correo electrónico empezó sin saber nada y, con el paso de los meses, aprendió a clasificar con casi 100% de precisión los correos basura. Ese filtro aprendió gracias a los principios que estudiaremos hoy.
- **IDEA CLAVE:**
  Aprender en inteligencia artificial es un proceso estructurado, matemático y medible de adaptación de conexiones.

---

### Diapositiva 2 — ¿Qué Significa Realmente "Aprender"? (Psicología vs. Conexionismo)
- **QUÉ DECIR:**
  > *"Si le preguntan a un psicólogo qué es aprender, les hablará de condicionamiento clásico —como los perros de Pávlov salivando ante la campana—, o de aprendizaje vicario, que es cuando aprendemos imitando lo que hace otra persona. La psicología describe muy bien la conducta externa. Pero si le preguntamos al psicólogo: 'Oiga, ¿y qué cambió físicamente adentro de la cabeza para que esa persona aprendiera?', la psicología tradicional se quedaba corta. Aquí entra el programa conexionista: los científicos de la computación y la neurociencia dijeron: 'Aprender ocurre en las conexiones entre neuronas'. El conocimiento no es un archivo guardado en una carpeta; el conocimiento es la fuerza con la que están conectadas nuestras neuronas."*
- **QUÉ EXPLICAR:**
  Contraste el enfoque conductual (caja negra) con el enfoque conexionista (mecanismo interno). Aclare que el conexionismo concibe la mente y los sistemas artificiales como redes densas de unidades simples interconectadas. La memoria y el aprendizaje están distribuidos, no centralizados en un único casillero.
- **EJEMPLO PARA EXPLICAR:**
  Cuando aprendes a montar en bicicleta, nadie puede entregarte un archivo PDF para que lo memorices y salgas pedaleando. Tienes que subirte, caerte, balancearte: tu sistema nervioso va ajustando la fuerza de las conexiones motoras hasta que el equilibrio se vuelve automático. Eso es conexionismo puro.
- **IDEA CLAVE:**
  El aprendizaje no es almacenar datos en una gaveta; es modificar físicamente la intensidad de las conexiones entre neuronas.

---

### Diapositiva 3 — El Flujo de Señales en una Red Neuronal
- **QUÉ DECIR:**
  > *"Observemos el recorrido que hace la información en esta pantalla. Primero entran datos por los inputs: por ejemplo, los píxeles de una foto. Luego, esos datos pasan por las conexiones, y cada conexión tiene un número llamado 'peso sináptico' que decide si esa señal pasa con mucha fuerza o con poca fuerza. Las capas internas hacen sus cálculos y finalmente la red emite una salida. Pero miren el último paso del diagrama: al principio, como la red es nueva, su salida casi siempre es incorrecta. Si la salida no es la que esperábamos, ¿qué tenemos que hacer? No podemos cambiar los datos de entrada ni podemos cambiar la matemática básica: lo ÚNICO que podemos mover son los pesos sinápticos. Ahí, en esa perilla de calibración, ocurre el aprendizaje."*
- **QUÉ EXPLICAR:**
  Guíe visualmente a los estudiantes a través de las 5 estaciones del diagrama de flujo: Inputs $\to$ Pesos $\to$ Capas $\to$ Outputs $\to$ Calibración. Remarque que la arquitectura de la red permanece fija durante la ejecución; lo dinámico, lo plástico, lo que cambia en el tiempo son los valores de los pesos sinápticos.
- **EJEMPLO PARA EXPLICAR:**
  Si una balanza digital descalibrada marca 10 kilos cuando pones una bolsa de 5 kilos, no cambias la bolsa ni rompes el plato; giras la tuerca de tara (el peso de ajuste) hasta que marque exactamente 5.
- **IDEA CLAVE:**
  La arquitectura canaliza la señal, pero los pesos sinápticos determinan el significado y la exactitud del resultado.

---

### Diapositiva 4 — Aprender es Modificar Pesos Sinápticos
- **QUÉ DECIR:**
  > *"Quiero que se graben esta definición para toda la vida: en el paradigma conexionista, 'aprender' o 'entrenar una red' significa encontrar una combinación de pesos sinápticos que haga que la red produzca el resultado deseado. Si una red tiene pesos al azar, es como un bebé que balbucea. Conforme modificamos metódicamente esos pesos, la red empieza a acertar. Y cuando encuentra la combinación que responde bien a todas las pruebas, decimos formalmente: 'La red ha aprendido'. Y lo más fascinante: a nivel biológico, en nuestro cerebro, aprender algo nuevo —como una palabra en inglés o un acorde en guitarra— consiste exactamente en modificar la fuerza con la que se comunican nuestras sinapsis biológicas."*
- **QUÉ EXPLICAR:**
  Profundice en el paralelismo biológico-computacional: en el cerebro biológico, las neuronas liberan neurotransmisores a través de la hendidura sináptica (potenciación a largo plazo); en la red artificial, multiplicamos la señal de entrada $x_i$ por un coeficiente escalar $w_i$. Aprender es la búsqueda sistemática de los mejores $w_i$.
- **EJEMPLO PARA EXPLICAR:**
  La afinación de una guitarra: 6 cuerdas con 6 clavijas. Si tocas la sexta cuerda y suena grave y floja, no cambias la guitarra; aprietas la clavija (peso sináptico) hasta que la frecuencia coincida con la nota Mi.
- **IDEA CLAVE:**
  Una red entrenada no es más que una matriz de números calibrados que transforman entradas en salidas deseadas.

---

### Diapositiva 5 — Caso Concreto: Aprendiendo la Conjunción (AND)
- **QUÉ DECIR:**
  > *"Vamos a ponerle números a esto con el ejemplo más claro de la informática: la compuerta lógica AND. Todos la conocen: solo es verdadera (1) si la entrada 1 Y la entrada 2 son verdaderas. Si entra (0,0), da 0. Si entra (0,1), da 0. Si entra (1,0), da 0. Pero si entra (1,1), debe dar 1. Imaginemos que encendemos una red neuronal simple con pesos al azar y le metemos (1,1). Como los pesos están descalibrados, la red hace sus cuentas y nos bota un 0. ¡Se equivocó! ¿Qué hacemos? Le aplicamos un algoritmo de aprendizaje: ajustamos un poco sus pesos. Volvemos a probar. Si todavía falla, volvemos a ajustar. Cuando logramos que con (1,1) dé 1 y con los otros tres dé 0, la red completó su entrenamiento. Ha aprendido la conjunción lógica."*
- **QUÉ EXPLICAR:**
  Muestre la tabla de verdad y explique por qué una compuerta lógica es un problema de clasificación binaria. Aclare que la red no tiene grabada la regla lingüística "ambos deben ser 1"; la red descubrió una frontera matemática donde la suma ponderada $w_1(1) + w_2(1)$ supera el umbral, mientras que $w_1(1) + w_2(0)$ no lo alcanza.
- **EJEMPLO PARA EXPLICAR:**
  El sistema de seguridad de un misil o de una caja fuerte con dos llaves giradas a la vez por dos oficiales distintos. Si gira uno solo, no abre; si giran ambos, la fuerza mecánica acumulada destraba el cerrojo.
- **IDEA CLAVE:**
  El aprendizaje convierte un conjunto de datos lógicos o sensoriales en una frontera matemática definida por pesos sinápticos.

---

### Diapositiva 6 — Más Allá de la Respuesta Conocida: Categorizar
- **QUÉ DECIR:**
  > *"El ejemplo de la compuerta AND tiene una ventaja: nosotros nos sabíamos la respuesta deseada de memoria. Sabíamos exactamente cuándo debía dar 0 y cuándo debía dar 1. Pero piensen un segundo: ¿en la vida real siempre tenemos a alguien al lado diciéndonos la respuesta correcta de cada cosa? ¡No! Constantemente nos enfrentamos a situaciones donde nadie nos da la solución y, sin embargo, aprendemos. Miren a la ventana: vemos pasar un taxi amarillo viejo, un Mazda rojo deportivo, una camioneta gris 4x4 y un camión blanco. Ninguno tiene el mismo color, ni las mismas llantas, ni la misma silueta. Y si yo les pregunto qué son, ustedes no dicen 'es un conjunto de láminas metálicas con ruedas'. Dicen al instante: 'Son coches'. Nuestro cerebro agrupó cosas distintas bajo un único concepto. A eso la ciencia cognitiva lo llama categorizar. ¿Cómo logra una red neuronal hacer esto sin que nadie le sople las respuestas?"*
- **QUÉ EXPLICAR:**
  Plantee la transición epistemológica fundamental: del aprendizaje con profesor al aprendizaje autónomo por descubrimiento. Explique el término "subsumir": integrar múltiples instancias diversas bajo una misma etiqueta o clase abstracta reconociendo invarianzas y regularidades.
- **EJEMPLO PARA EXPLICAR:**
  Un niño pequeño que ve por primera vez en su vida a un perro chihuahua y a un gran danés. Son radicalmente distintos en tamaño, pero el niño nota que ambos ladran, tienen cuatro patas, hocico y cola, y concluye que pertenecen a la misma categoría.
- **IDEA CLAVE:**
  Categorizar es descubrir regularidades y semejanzas en un mar de estímulos diversos sin necesidad de respuestas prediseñadas.

---

### Diapositiva 7 — Las Tres Grandes Familias del Aprendizaje
- **QUÉ DECIR:**
  > *"Para resolver todos estos problemas, en el mundo de las redes neuronales artificiales se crearon tres grandes familias de aprendizaje. Miren con atención este mapa porque es la brújula de toda la clase: Primera familia: Aprendizaje Supervisado. Aquí sí conocemos la respuesta deseada; hay un 'supervisor' que nos califica el error. Segunda familia: Aprendizaje No Supervisado. No conocemos la respuesta deseada; la red tiene que categorizar sola buscando parecidos en los datos, como con los coches. Y tercera familia: Aprendizaje por Refuerzo. Aquí no hay respuestas fijas, sino ensayo y error; la red interactúa con un entorno y recibe premios si acierta o castigos si se equivoca, como cuando entrenamos a un perrito o cuando un robot aprende a caminar."*
- **QUÉ EXPLICAR:**
  Desglose las 3 columnas comparativas. Asegúrese de que contrasten la naturaleza de la señal de realimentación: en supervisado es un vector de error exacto; en no supervisado es inexistente (solo autoorganización interna); en refuerzo es un número escalar evaluativo (recompensa/castigo).
- **EJEMPLO PARA EXPLICAR:**
  1. *Supervisado:* Estudiar para un examen con el solucionario al lado.
  2. *No supervisado:* Ordenar tu armario por colores y tipos de ropa sin que nadie te diga cómo hacerlo.
  3. *Refuerzo:* Aprender a jugar ajedrez jugando partidas: nadie te dice la jugada perfecta en cada turno, pero al final ganas (+1) o pierdes (-1).
- **IDEA CLAVE:**
  Las redes neuronales aprenden de tres maneras: guiadas por un supervisor, autoorganizadas por similitud, o evaluadas por ensayo y recompensa.

---

### Diapositiva 8 — El Error y el Papel del Supervisor (Aprendizaje Supervisado)
- **QUÉ DECIR:**
  > *"Entremos en detalle a la primera familia: el Aprendizaje Supervisado. Se llama así porque imaginamos que hay un 'supervisor' o maestro mirando a la red. El supervisor tiene una lista con pares de datos: la entrada y lo que debería salir. La red procesa la entrada y da su respuesta efectiva. El supervisor compara y hace una resta matemática sencillísima: Error = Respuesta Deseada menos Respuesta Efectiva. Si la respuesta deseada era 1 y la red botó 0.2, el error es 0.8. Todo el trabajo de los algoritmos de esta familia consiste en minimizar sucesivamente ese error en cada pasada, hasta que sea tan chiquito que podamos decir: 'La red está lista'."*
- **QUÉ EXPLICAR:**
  Enfatice la formulación formal del error: $E = y_{\text{deseada}} - y_{\text{efectiva}}$. Explique que el supervisor no es un ser humano sentado frente a la pantalla, sino el conjunto de datos de entrenamiento etiquetados (*ground truth*). Detalle el concepto de iteración o época: tras cada presentación de datos, el error retroalimenta el cambio de pesos.
- **EJEMPLO PARA EXPLICAR:**
  Un tiro al blanco con arco y flecha: lanzas la flecha y pega 10 centímetros arriba del centro. Tu ojo ve la distancia (el error = 10 cm arriba). Tu cerebro manda la orden a los brazos de bajar un poco el arco en el siguiente disparo.
- **IDEA CLAVE:**
  En el aprendizaje supervisado, el error es la brújula matemática que le indica a los pesos en qué dirección deben cambiar.

---

### Diapositiva 9 — Regla Delta (Widrow-Hoff / LMS) y ADALINE
- **QUÉ DECIR:**
  > *"El primer gran algoritmo formal para hacer esto nació en 1960 y se llama la Regla Delta, creada por Bernard Widrow y Ted Hoff. También se la conoce en los libros de ingeniería como Regla de Widrow-Hoff o Regla LMS, que significa 'Mínimos Cuadrados Medios'. Ellos inventaron una red famosísima llamada ADALINE, que significa Neurona Lineal Adaptativa. ¿Qué tiene de especial? Que usa una sola neurona con una salida lineal. La Regla Delta funciona así: el cambio que le vas a hacer a cada peso es proporcional al error multiplicado por la entrada. Si el error fue gigantesco, el peso cambia con fuerza. Si el error fue cero porque acertaste, el peso no se mueve ni un milímetro."*
- **QUÉ EXPLICAR:**
  Resalte el hito histórico de Widrow y Hoff en la Universidad de Stanford. Explique la elegancia de la regla LMS: en lugar de hacer ajustes a ciegas, calcula la pendiente de una parábola de error cuadrático y da pasos proporcionales hacia el fondo del valle (mínimo error). Aclare que ADALINE se utilizó comercialmente para eliminar el eco en las líneas telefónicas transatlánticas.
- **EJEMPLO PARA EXPLICAR:**
  El termostato de un aire acondicionado inteligente: si la habitación está a 35 grados y queremos 20 (diferencia de 15 grados), el motor enfría a máxima potencia; si la habitación está a 21 grados (diferencia de 1 grado), el motor trabaja al mínimo para no pasarse.
- **IDEA CLAVE:**
  La Regla Delta de Widrow-Hoff ajusta los pesos de forma directamente proporcional al error cometido, garantizando la minimización del error cuadrático.

---

### Diapositiva 10 — Regla Delta Generalizada y Backpropagation (Perceptrón Multicapa)
- **QUÉ DECIR:**
  > *"ADALINE era maravillosa, pero tenía una limitación grave: como era una sola neurona, solo podía resolver problemas simples y planos. Para problemas complejos necesitábamos redes con muchas neuronas y con CAPAS OCULTAS. Pero ahí los científicos se toparon con una pared en los años 60: si la red falla en la salida final, ¿cómo sabemos qué neurona de las capas intermedias tuvo la culpa y cuánto debe cambiar su peso? El problema parecía irresoluble hasta que en 1986, Rumelhart y McClelland presentaron la solución definitiva: la Regla Delta Generalizada, mejor conocida como Backpropagation o retropropagación de errores. Es el algoritmo que entrena al Perceptrón Multicapa (MLP). Primero, la señal viaja hacia adelante calculando la respuesta; luego, el error viaja hacia atrás, capa por capa, repartiendo la corrección matemática precisa a cada conexión oculta."*
- **QUÉ EXPLICAR:**
  Destaque la trascendencia de David Rumelhart y James McClelland: su publicación de 1986 en los dos volúmenes de *Parallel Distributed Processing (PDP)* detonó la segunda era dorada de las redes neuronales. Explique con claridad las dos fases del ciclo: 1) Pase hacia adelante (computa activaciones y predicción), 2) Pase hacia atrás (reparte derivadas del error y actualiza pesos mediante la regla de la cadena).
- **EJEMPLO PARA EXPLICAR:**
  Una cadena de mando en una empresa constructora: si un puente se agrieta en la entrega final (error en la salida), el peritaje no solo multa al inspector final; rastrea hacia atrás al calculista estructural (capa oculta 2) y al proveedor del cemento (capa oculta 1), corrigiendo los estándares de cada eslabón.
- **IDEA CLAVE:**
  Backpropagation permitió propagar el error hacia las capas ocultas, haciendo posible el entrenamiento de redes multicapa complejas.

---

### Diapositiva 11 — Aprendizaje No Supervisado: Agrupación Autónoma
- **QUÉ DECIR:**
  > *"Pasemos ahora a la segunda gran familia: el Aprendizaje No Supervisado. Aquí el escenario cambia por completo: eliminen al profesor, borren las respuestas deseadas, no hay etiquetas de 'correcto' o 'incorrecto'. La red solo recibe datos brutos. ¿Qué hace la red entonces? Empieza a comparar los datos entre sí. Si dos datos tienen números parecidos, la red ajusta sus pesos para que activen la misma zona neuronal. Sin que nadie se lo ordene, la red empieza a clasificar y categorizar. Es el tipo de aprendizaje que usamos cuando queremos que la inteligencia artificial descubra cosas que los propios humanos no habíamos visto."*
- **QUÉ EXPLICAR:**
  Defina el concepto de autoorganización y agrupamiento (*clustering*). La red analiza la estructura geométrica del espacio de entrada. Si los vectores de entrada forman cúmulos o nubes de puntos densas, los pesos sinápticos de la red son atraídos naturalmente hacia los centros de esas nubes.
- **EJEMPLO PARA EXPLICAR:**
  Un botánico que llega a una isla inexplorada y encuentra 5.000 flores desconocidas. No hay ningún libro de texto. Las extiende en el suelo y empieza a agrupar las que tienen 5 pétalos azules a la izquierda, las que tienen espinas al centro y las aromáticas a la derecha. Nadie le dijo cómo se llamaban; las categorizó por similitud.
- **IDEA CLAVE:**
  En el aprendizaje no supervisado, la red descubre patrones ocultos y regularidades en los datos por pura afinidad estadística.

---

### Diapositiva 12 — ART, Mapas SOFM (Kohonen) y Neuronas Vencedoras
- **QUÉ DECIR:**
  > *"¿Cómo se implementa esto en algoritmos reales? Hay varios modelos históricos muy importantes: las redes ART (Teoría de Resonancia Adaptativa), las redes de Hopfield y, sobre todo, los Mapas Autoorganizativos de Teuvo Kohonen, conocidos como SOFM. Todos ellos se basan en una idea genial llamada 'aprendizaje competitivo' o el principio de las 'neuronas vencedoras'. Funciona como una carrera: cuando entra un patrón, todas las neuronas de la red calculan qué tan parecido es su vector de pesos a ese patrón. La neurona que tenga los pesos más parecidos grita: '¡Gané!', y se convierte en la neurona vencedora. Solo la neurona vencedora tiene el derecho de actualizar sus pesos para acercarse aún más a ese dato. De este modo, cada neurona se especializa en una categoría distinta de la realidad."*
- **QUÉ EXPLICAR:**
  Explique la figura de Teuvo Kohonen (científico finlandés) y su algoritmo SOFM (*Self-Organized Feature Map*). Aclare que estos mapas proyectan información de muchas dimensiones (por ejemplo, 50 características de un cliente) en una matriz bidimensional (un plano 2D) donde lo que es similar en la realidad queda espacialmente junto en el mapa.
- **EJEMPLO PARA EXPLICAR:**
  Un equipo de mecánicos en un taller: llega un camión con falla de frenos. El especialista en frenos da un paso al frente (neurona vencedora) y repara la falla, perfeccionando aún más su destreza en frenos. Si luego llega un auto con falla eléctrica, el electricista da el paso al frente.
- **IDEA CLAVE:**
  El principio de neuronas vencedoras distribuye la especialización: la neurona más afín a un patrón se activa y calibra sus pesos para representar esa categoría.

---

### Diapositiva 13 — Aprendizaje por Refuerzo: Ensayo y Error
- **QUÉ DECIR:**
  > *"Llegamos a la tercera familia: el Aprendizaje por Refuerzo. Aquí no hay un supervisor que te diga: 'La respuesta correcta es 7.2'. Tampoco es como el no supervisado donde solo miras datos estáticos. En el aprendizaje por refuerzo, la red se convierte en un AGENTE que interactúa activamente con un entorno mediante ensayo y error. Funciona con una regla intuitiva: si la decisión que tomó la red la acerca al objetivo deseado, los pesos sinápticos asociados a esa decisión se incrementan, reforzando esa tendencia para que la repita en el futuro. Pero si la decisión la aleja del objetivo o causa un desastre, esos pesos sinápticos disminuyen, penalizando esa conducta para que no la vuelva a intentar."*
- **QUÉ EXPLICAR:**
  Explique el ciclo cerrado del aprendizaje por refuerzo: Estado $s_t \to$ Acción $a_t \to$ Entorno $\to$ Recompensa $r_{t+1}$ + Nuevo Estado $s_{t+1}$. Subraye la diferencia crítica entre la retroalimentación supervisada (instruccional: *"debes hacer esto"*) y la retroalimentación por refuerzo (evaluativa: *"eso que hiciste te dio +10 puntos o -50 puntos"*).
- **EJEMPLO PARA EXPLICAR:**
  Aprender a patinar sobre hielo: nadie puede transferirte la fuerza en los tobillos. Te lanzas a la pista, mueves el pie izquierdo de cierta forma y te caes de espaldas (penalización fuerte). Tu cerebro reduce los pesos de ese movimiento. Intentas flexionando las rodillas y avanzas un metro sin caerte (premio de estabilidad). Tu cerebro refuerza esa postura.
- **IDEA CLAVE:**
  El aprendizaje por refuerzo calibra los pesos fortaleciendo las decisiones que generan recompensa y debilitando las que acarrean penalización.

---

### Diapositiva 14 — Q-Learning y la Tabla Q (Sutton y Barto)
- **QUÉ DECIR:**
  > *"¿Cómo hace una máquina para recordar qué decisiones fueron buenas y cuáles malas? En 1998, Richard Sutton y Andrew Barto consolidaron uno de los algoritmos más famosos de la inteligencia artificial: el Q-Learning. En este sistema, la red utiliza una matriz llamada 'Tabla Q'. Imaginen una tabla donde en las filas están todos los estados posibles en los que puede encontrarse el sistema, y en las columnas están las acciones que puede tomar. Cada celda de la tabla almacena un valor numérico: un peso sináptico que representa qué tan buena es esa jugada. Al principio, la Tabla Q está en ceros y el agente explora como loco dando tumbos. Pero cada vez que toma una decisión y recibe un premio o castigo, actualiza el número en su tabla. Al cabo de miles de partidas, la red se vuelve autónoma y experta: solo tiene que mirar la tabla y elegir la opción con el número más alto."*
- **QUÉ EXPLICAR:**
  Presente la Tabla Q como la estructura de datos que materializa la función de calidad o valor esperado $Q(s, a)$. Explique el dilema fundamental del aprendizaje por refuerzo: **Exploración vs. Explotación**. Al inicio, el agente debe explorar caminos desconocidos; luego, debe explotar los caminos con valores Q más altos aprendidos.
- **EJEMPLO PARA EXPLICAR:**
  Un robot aspiradora en una casa con escaleras. Estado: 'Al borde del escalón'. Acciones: 'Avanzar' o 'Retroceder'. Si avanza, cae por la escalera y se rompe (recompensa -500); en su Tabla Q anota para ese estado un valor catastrófico. Si retrocede, sigue aspirando (+5). La próxima vez que sus sensores detecten el borde, consultará su Tabla Q y retrocederá sin dudarlo.
- **IDEA CLAVE:**
  La Tabla Q de Sutton y Barto almacena los pesos de decisión para cada par estado-acción, permitiendo al sistema alcanzar autonomía mediante ensayo y error.

---

### Diapositiva 15 — Cuadro Comparativo de las Tres Rutas del Aprendizaje
- **QUÉ DECIR:**
  > *"Hagamos una pausa de integración y miren este cuadro comparativo. Si dominan las diferencias de estas columnas, dominan la base de todo el machine learning. Pregúntense siempre tres cosas ante cualquier problema informático: 1) ¿Tengo las respuestas correctas etiquetadas? Si la respuesta es sí, es Supervisado (como ADALINE o Backpropagation). 2) ¿No tengo respuestas y solo quiero que la máquina me ordene y agrupe los datos por parecido? Es No Supervisado (como los Mapas de Kohonen y ART). 3) ¿Tengo un agente que debe interactuar en un entorno tomando decisiones autónomas y aprendiendo de sus aciertos y errores? Es Por Refuerzo (como Q-Learning). Tómense un minuto para leer cada fila: respuesta esperada, mecanismo de ajuste, algoritmos clave y ejemplos."*
- **QUÉ EXPLICAR:**
  Guíe una lectura horizontal fila por fila. Esta diapositiva sirve como puente directo hacia la actividad práctica individual. Resalte que ningún paradigma es "mejor" que otro: cada uno resuelve una familia distinta de problemas del mundo real.
- **EJEMPLO PARA EXPLICAR:**
  En un automóvil autónomo como los de Tesla o Waymo, conviven los tres paradigmas: supervisado para reconocer señales de tránsito (sabe qué es un pare), no supervisado para segmentar texturas de asfalto y lluvia, y por refuerzo para planificar la trayectoria de adelantamiento seguro en autopista.
- **IDEA CLAVE:**
  La elección del paradigma depende exclusivamente de la disponibilidad de respuestas deseadas y de la dinámica del problema a resolver.

---

### Diapositiva 16 — Actividad Individual de Aplicación (5 a 10 min)
- **QUÉ DECIR:**
  > *"Ahora es el momento de aplicar lo que acabamos de aprender. En sus cuadernos o en su documento digital de trabajo, van a resolver de forma individual cuatro casos de la vida real. Lean bien cada enunciado: deben identificar qué clase de aprendizaje aplicarían, qué algoritmo o modelo utilizarían y cómo se modificarían los pesos sinápticos en cada situación. Tienen entre 5 y 10 minutos de trabajo individual en silencio. No se queden en respuestas de una sola palabra; justifiquen usando los términos técnicos que vimos hoy: pesos sinápticos, minimización de error, neuronas vencedoras, Tabla Q. ¡Adelante!"*
- **QUÉ EXPLICAR:**
  Establezca un clima de concentración individual. Camine por el aula observando las respuestas preliminares. Si algún estudiante confunde el Caso 1 con no supervisado, pregúntele en voz baja: *"¿El banco ya sabe el valor real del cheque?"* para que caiga en cuenta de que hay un supervisor con datos etiquetados.
- **EJEMPLO PARA EXPLICAR:**
  Consulte la Sección 6 de esta guía para revisar los criterios de respuesta esperados para cada uno de los 4 pasos.
- **IDEA CLAVE:**
  La actividad consolida el aprendizaje al exigir que el estudiante justifique la elección del algoritmo a partir de los datos y el mecanismo de ajuste de pesos.

---

### Diapositiva 17 — Resumen y Cierre de la Lección
- **QUÉ DECIR:**
  > *"Para cerrar nuestra sesión de hoy, felicito a todos por el nivel de concentración y análisis en la actividad. Repasemos los seis pilares que deben llevarse en mente: Primero, aprender en una red neuronal es encontrar la combinación correcta de pesos sinápticos. Segundo, este proceso imita la plasticidad sináptica de nuestro cerebro biológico. Tercero, en el aprendizaje supervisado minimizamos el error respecto a una respuesta conocida usando la Regla Delta en ADALINE o Backpropagation en el Perceptrón Multicapa. Cuarto, en el no supervisado categorizamos sin etiquetas gracias al principio de neuronas vencedoras en modelos como ART y los Mapas de Kohonen. Quinto, en el aprendizaje por refuerzo aprendemos por ensayo y error, incrementando pesos ante recompensas y disminuyéndolos ante castigos con Q-Learning y la Tabla Q. Con estos tres pilares comprenden hoy los cimientos de la inteligencia artificial contemporánea."*
- **QUÉ EXPLICAR:**
  Sintetice los puntos con tono inspirador. Recuerde a los estudiantes que los sistemas más sofisticados del mundo —desde los traductores hasta los robots espaciales— aplican exactamente estas mismas tres familias matemáticas.
- **EJEMPLO PARA EXPLICAR:**
  Cierre recordando que detrás de la palabra "inteligencia" artificial no hay magia: hay conexiones, pesos calibrados y algoritmos de aprendizaje.
- **IDEA CLAVE:**
  El conexionismo demostró que el aprendizaje inteligente emerge de la modificación metódica de conexiones numéricas simples organizadas en red.

---

## 6. Pautas y Solucionario de la Actividad Individual

A continuación se detallan las respuestas modelo que el docente debe esperar de los estudiantes al revisar la actividad de la Diapositiva 16:

### Caso 1 — El Cajero Automático y los Cheques
- **Clase de aprendizaje:** Aprendizaje Supervisado.
- **Modelo / Algoritmo:** Perceptrón Multicapa (MLP) entrenado con la Regla Delta Generalizada (Backpropagation).
- **Justificación técnica:** Se cuenta con 50.000 imágenes donde cada una tiene la etiqueta correcta asignada por un humano (el supervisor). El reconocimiento de dígitos manuscritos no es linealmente separable (los números escritos a mano tienen variaciones complejas de trazos), por lo que una neurona simple (como ADALINE) no bastaría; se requiere un MLP con capas ocultas. El error se calcula restando la salida de la red del valor etiquetado ($d - y$) y se retropropaga hacia las capas intermedias para corregir los pesos.

### Caso 2 — Segmentación de Clientes en E-Commerce
- **Clase de aprendizaje:** Aprendizaje No Supervisado.
- **Modelo / Algoritmo:** Mapas Autoorganizativos (SOFM de Kohonen) o algoritmo ART.
- **Justificación técnica:** La empresa no tiene etiquetas previas ni categorías predefinidas; solo tiene datos brutos de historiales de compra. La red debe agrupar autónomamente a los clientes por similitud de patrones de consumo. Se aplica el principio de **neuronas vencedoras**: cuando entra el vector de compras de un usuario, la neurona cuyos pesos sean más afines gana la competencia y aproxima sus pesos al cliente, creando un conglomerado representativo de ese segmento comercial.

### Caso 3 — Vehículo Autónomo / Dron en Circuito
- **Clase de aprendizaje:** Aprendizaje por Refuerzo.
- **Modelo / Algoritmo:** Q-Learning con Tabla Q (Sutton y Barto).
- **Justificación técnica:** No hay un maestro diciéndole al dron milímetro a milímetro qué inclinación poner; el sistema aprende interactuando con el túnel mediante ensayo y error. Cada estado (lectura de sensores de proximidad) tiene acciones posibles (virar, subir, acelerar). Si roza una pared, recibe una señal de penalización y los pesos correspondientes en la Tabla Q disminuyen; si vuela de forma fluida y supera tramos, recibe una recompensa y sus pesos sinápticos Q se incrementan, consolidando la ruta de vuelo óptima.

### Caso 4 — El Concepto Central
- **Respuesta esperada:** El estudiante debe explicar con sus propias palabras que aprender no es guardar archivos en una memoria fija, sino calibrar la intensidad o fuerza de las conexiones (pesos sinápticos) entre neuronas para que el sistema responda correctamente ante cualquier estímulo de entrada. Debe relacionarlo con la neurobiología: el cerebro humano aprende reforzando o debilitando las sinapsis biológicas entre neuronas cuando practicamos una habilidad o retenemos un concepto.

---

## 7. Preguntas Orales de Verificación durante la Clase

Estas preguntas están diseñadas para formularse oralmente durante las transiciones entre temas, permitiendo sondear la comprensión del grupo sin interrumpir la dinámica de la presentación:

1. **Tras la Diapositiva 4:** *"Si una red neuronal no tiene líneas de código con 'if/else', ¿dónde está guardado exactamente lo que aprendió?"*
   - *Respuesta esperada:* En los valores numéricos de sus pesos sinápticos.
2. **Tras la Diapositiva 8:** *"¿Qué pasaría con los pesos de una red supervisada si en una prueba el error da exactamente 0?"*
   - *Respuesta esperada:* No cambian; la corrección es cero porque la respuesta deseada y la efectiva coinciden plenamente.
3. **Tras la Diapositiva 10:** *"¿Por qué la Regla Delta normal de ADALINE no servía para una red con capas ocultas?"*
   - *Respuesta esperada:* Porque en las capas ocultas no sabemos directamente cuál era la respuesta deseada de esa neurona intermedia; se necesitaba Backpropagation para repartir la culpa hacia atrás.
4. **Tras la Diapositiva 12:** *"En los mapas de Kohonen, ¿por qué no todas las neuronas ajustan sus pesos ante la misma entrada?"*
   - *Respuesta esperada:* Porque compiten y solo gana la neurona vencedora (la más parecida), permitiendo que cada una se especialice en un grupo distinto.
5. **Tras la Diapositiva 14:** *"¿En qué se diferencia la corrección que recibe un robot en Q-Learning de la corrección que recibe una red en Backpropagation?"*
   - *Respuesta esperada:* En Backpropagation se le dice exactamente cuál era el número deseado (error instruccional); en Q-Learning solo se le da un premio o castigo numérico evaluativo por el resultado final de su acción.
