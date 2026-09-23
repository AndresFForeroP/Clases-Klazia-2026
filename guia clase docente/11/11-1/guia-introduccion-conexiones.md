# Guía del Docente — Descripción de un Sistema Neuronal Artificial (SNA)
## 11.º Grado — Grupo 1

---

## 1. Propósito y Objetivo Académico de la Lección

Esta guía sirve como un **guion de explicación pedagógica** para el docente durante la clase presencial de 11.º grado. 

El contenido curricular proviene estrictamente del documento fuente `cursos/11/11-1.md` y tiene como meta desglosar de forma clara, progresiva y rigurosa la arquitectura y funcionamiento de un **Sistema Neuronal Artificial (SNA)**.

### Objetivos de Aprendizaje:
Al finalizar la clase, el estudiante será capaz de:
1. Describir la organización jerárquica de 4 niveles de un SNA: **Neurona ($N_i$)**, **Capa ($C_i$)**, **Red ($R_i$)** y **Sistema ($S_i$)**.
2. Identificar los componentes funcionales de la neurona artificial: señales de entrada con pesos $\langle x_n, w_{i,j} \rangle$, dinámica de computación temporal ($t \to t+1$) y emisión de la señal de salida.
3. Diferenciar la naturaleza de las señales **analógicas** (continuas en rangos) frente a las **digitales** (discretas $\{0, 1\}$).
4. Explicar la composición matemática de funciones que define la salida efectiva: $y_i = f_{\text{salida}}(f_{\text{activación}}(f_{\text{propagación}}))$.
5. Clasificar y comparar las clases de neuronas según su configuración de salida: **McCulloch-Pitts** ($0$ o $1$), **Ising** ($-1$ o $+1$) y **Potts** (discretas en rango).

---

## 2. Metodología de Enseñanza en Clase

Para enseñar este tema técnico a estudiantes de 11.º grado, se debe aplicar la siguiente secuencia pedagógica para cada concepto complejo:

$$\text{COMPRENDER} \longrightarrow \text{EXPLICAR CON SENCILLEZ} \longrightarrow \text{EJEMPLIFICAR} \longrightarrow \text{RELACIONAR} \longrightarrow \text{PROFUNDIZAR}$$

1. **Primero la idea intuitiva:** Explicar el concepto en palabras sencillas y cotidianas.
2. **Presentar el término técnico:** Introducir la notación formal ($\langle x_n, w_{i,j} \rangle$, $y_i$, $f_{\text{prop}}$, etc.).
3. **Dar un ejemplo concreto:** Relacionarlo con hardware, programación o situaciones de la vida real.
4. **Profundizar con rigor:** Mostrar la relación matemática o estructural.
5. **Aclarar posibles confusiones:** Resolver dudas conceptuales antes de avanzar.

---

## 3. Planificación Temporal Sugerida

| Bloque | Diapositivas | Contenido Temático | Tiempo |
| :--- | :--- | :--- | :--- |
| **Apertura** | Diapositivas 1 – 3 | Portada, objetivos y estructura jerárquica del SNA ($N \to C \to R \to S$) | 8 min |
| **Anatomía Neuronal** | Diapositivas 4 – 6 | Componentes básicos, par entrada-peso $\langle x_n, w_{i,j} \rangle$ y tipos de señales | 12 min |
| **Dinámica y Salida** | Diapositivas 7 – 9 | Transición temporal $t \to t+1$, composición de funciones y flujo de salida | 12 min |
| **Clasificación** | Diapositivas 10 – 11 | Clases de neuronas según su salida (McCulloch-Pitts, Ising, Potts) | 8 min |
| **Práctica Individual** | Diapositiva 12 | Actividad práctica individual en cuaderno/documento de trabajo | 7 – 10 min |
| **Cierre y Síntesis** | Diapositiva 13 | Recapitulación de puntos clave y resolución de dudas | 5 min |

---

## 4. Guion Pedagógico Diapositiva por Diapositiva

---

### Diapositiva 1 — Portada y Objetivos de la Lección
- **QUÉ DECIR:**
  > *"Buenos días. Hoy vamos a estudiar cómo se estructura matemáticamente y arquitectónicamente un Sistema Neuronal Artificial. No vamos a quedarnos con la idea mística de que 'la IA es una caja mágica', sino que vamos a entender cada uno de sus bloques: desde la unidad elemental de cómputo que es la neurona artificial, hasta cómo se agrupan en capas, redes y sistemas completos. Al terminar la clase de hoy, entenderán exactamente qué es una entrada con peso, cómo cambia de estado una neurona en el tiempo, qué fórmula matemática produce su salida y cómo se clasifican las neuronas según lo que emiten."*
- **QUÉ EXPLICAR:**
  Presente la hoja de ruta de la sesión. Resalte que la computación neuronal artificial es una disciplina de la informática formal donde cada variable tiene una definición precisa.
- **EJEMPLO PARA EXPLICAR:**
  Compare el estudio de una red neuronal con el estudio de un procesador de computador: para entender cómo funciona un microchip de 8 núcleos, primero se debe comprender qué hace un transistor y una compuerta lógica elemental.
- **IDEA CLAVE:**
  Una red neuronal artificial no es magia: es una estructura organizada y matemática de elementos simples interconectados.

---

### Diapositiva 2 — De lo Simple a lo Complejo: La Jerarquía de un SNA
- **QUÉ DECIR:**
  > *"Para no confundirnos con tantos términos técnicos, imaginemos primero una pirámide de organización. En el nivel más bajo tenemos el ladrillo individual, que es la **Neurona ($N$)**. Si agrupamos varias neuronas en fila para trabajar juntas en una misma etapa, formamos una **Capa ($C$)**. Si unimos varias capas en secuencia para resolver una tarea, tenemos una **Red ($R$)**. Y si conectamos varias redes distintas para coordinar un proceso mayor, construimos un **Sistema ($S$)**. Fíjense en la notación: a cada nivel le asignamos su letra con un subíndice, como $N_1$, $C_1$, $R_1$ o $S_1$."*
- **QUÉ EXPLICAR:**
  Enfatice la relación de pertenencia:
  - Las neuronas $N$ son los procesadores elementales.
  - Las capas $C$ son agrupaciones de neuronas con enlaces internos o de entrada común.
  - Las redes $R$ son conjuntos de capas conectadas entre sí (entrada, capas intermedias y salida).
  - Los sistemas $S$ son macroestructuras donde varias redes interactúan (por ejemplo, una red que procesa audio conectada a otra red que traduce texto).
- **EJEMPLO PARA EXPLICAR:**
  **Analogía:** Una empresa moderna. Un empleado individual es una *neurona*. Un equipo de analistas en una mesa es una *capa*. El departamento de finanzas completo es una *red*. La corporación multinacional integrada es el *sistema*.
- **IDEA CLAVE:**
  Todo Sistema Neuronal Artificial se construye ensamblando neuronas en capas, capas en redes y redes en sistemas ($N \to C \to R \to S$).

---

### Diapositiva 3 — Diagrama: Estructura Jerárquica ($N \to C \to R \to S$)
- **QUÉ DECIR:**
  > *"Veamos este flujo visual. Miren cómo pasamos del círculo azul $N_i$ a la capa de ladrillos $C_i$, luego a la malla $R_i$ y finalmente al globo interconectado $S_i$. Esta es la nomenclatura formal que encontrarán en los libros de ciencias de la computación y que utilizaremos en todas nuestras evaluaciones y actividades."*
- **QUÉ EXPLICAR:**
  Haga un breve recorrido visual sobre los 4 nodos:
  1. $N_i$: procesador de datos local.
  2. $C_i$: nivel o etapa de abstracción.
  3. $R_i$: modelo neuronal completo para una tarea (ej. clasificador de imágenes).
  4. $S_i$: sistema integrado multired.
- **EJEMPLO PARA EXPLICAR:**
  En un automóvil autónomo: la red $R_1$ detecta señales de tránsito; la red $R_2$ calcula la trayectoria; la red $R_3$ monitorea el estado del motor. Todas juntas forman el sistema de navegación $S_1$.
- **IDEA CLAVE:**
  La arquitectura de un SNA es modular: cada nivel cumple una función específica dentro del conjunto global.

---

### Diapositiva 4 — Los Tres Componentes de la Neurona Artificial
- **QUÉ DECIR:**
  > *"Ahora que conocemos la jerarquía, hagamos un zoom dentro de una única neurona artificial. ¿Qué hay adentro de una neurona $N_i$? Toda neurona, sin excepción, realiza tres funciones: primero **recibe entradas**, luego realiza una **computación interna**, y finalmente genera una **salida** hacia el exterior."*
- **QUÉ EXPLICAR:**
  Explique el ciclo funcional:
  1. **Entradas:** Las señales numéricas que llegan de los sensores o de neuronas anteriores.
  2. **Computación:** La transformación matemática y cambio de estado interno.
  3. **Salida ($y_i$):** El resultado numérico final emitido por la neurona.
- **EJEMPLO PARA EXPLICAR:**
  **Analogía biológica:** Las dendritas reciben señales químicas/eléctricas (entradas), el núcleo/soma celular procesa el impulso (computación) y el axón transmite la respuesta hacia otras células (salida).
- **IDEA CLAVE:**
  Cualquier neurona artificial es una unidad procesadora de 3 etapas: Entradas $\to$ Computación $\to$ Salida.

---

### Diapositiva 5 — Entradas: Valor de Señal ($x_n$) y Peso Sináptico ($w_{i,j}$)
- **QUÉ DECIR:**
  > *"Presten mucha atención a este concepto porque es el corazón de la IA. Una neurona no recibe simplemente un número $x$; recibe un **par ordenado $\langle x_n, w_{i,j} \rangle$**. ¿Qué significa cada parte? $x_n$ es el dato o valor que viene de la neurona anterior $n$. Y $w_{i,j}$ es el **peso** (*weight*), que mide la intensidad o importancia de esa conexión entre la neurona de origen $i$ y la de destino $j$. Si el peso es grande, la neurona le hace mucho caso a esa entrada; si el peso es cero, esa entrada es completamente ignorada."*
- **QUÉ EXPLICAR:**
  - **Desglose de notación:** $\langle x_n, w_{i,j} \rangle$.
    - $x_n$: Señal numérica emitida por la neurona previa $N_n$.
    - $w_{h,i}$: Intensidad del enlace que va desde la neurona $N_h$ hasta la neurona $N_i$.
  - **Concepto complejo — El Peso ($w$):**
    - *Explicación sencilla:* Es como una perilla de volumen para cada cable que llega a la neurona.
    - *Explicación técnica:* Es el coeficiente multiplicativo que pondera la señal de entrada en la función de propagación.
    - *Confusión frecuente del estudiante:* Creer que $w$ es otro dato que viene de afuera. **Aclaración:** $x$ es el dato externo que entra; $w$ es una propiedad interna del canal de conexión.
- **EJEMPLO PARA EXPLICAR:**
  Imagina que vas a decidir si sales con paraguas ($N_{\text{decisión}}$). La entrada $x_1$ es el pronóstico del clima (90% de lluvia) con un peso alto $w_1 = 0.9$ (muy confiable). La entrada $x_2$ es la opinión de un amigo que no vio el pronóstico, con peso bajo $w_2 = 0.1$.
- **IDEA CLAVE:**
  La información entra a la neurona modulada por el peso sináptico: el par $\langle x_n, w_{i,j} \rangle$ define el valor del dato y su fuerza de influencia.

---

### Diapositiva 6 — Tipos de Señales en el SNA: Analógicas vs. Digitales
- **QUÉ DECIR:**
  > *"Tanto las señales que entran como las que salen de una neurona pueden ser de dos clases según los valores que tomen: **analógicas** o **digitales**. Las analógicas pueden tomar cualquier número real continuo dentro de un rango, como entre 0 y 1, o entre -1 y +1. Las digitales, en cambio, son estrictamente binarias: solo pueden valer exactamente 0 o 1."*
- **QUÉ EXPLICAR:**
  Compare las dos columnas de la diapositiva:
  - **Analógicas (Continuas):**
    - Dominios: $[0, +1]$, $[-1, +1]$, $[-\infty, +\infty]$.
    - Representan magnitudes continuas (probabilidades como $0.743$, niveles de luz, temperatura, audio).
  - **Digitales (Discretas / Binarias):**
    - Dominio: $\{0, 1\}$.
    - Representan estados booleanos de encendido/apagado, presencia o ausencia de una característica.
- **EJEMPLO PARA EXPLICAR:**
  - *Analógica:* El pedal de acelerador de un auto (puedes presionarlo al 10%, 45.5% o 100%).
  - *Digital:* El interruptor de la luz en la pared (solo puede estar en 0 apagado o 1 encendido).
- **IDEA CLAVE:**
  Las señales analógicas son continuas en un intervalo; las señales digitales solo admiten dos estados excluyentes ($0$ o $1$).

---

### Diapositiva 7 — Computación Interna: Transición de Estado ($t \to t+1$)
- **QUÉ DECIR:**
  > *"¿Qué significa que la neurona 'compute'? Significa que cambia de estado con el paso del tiempo. En un momento inicial $t$, la neurona recibe un paquete de señales entrantes. Procesa matemáticamente esas señales y, en el siguiente instante temporal $t+1$, alcanza un nuevo estado interno y genera su señal de salida."*
- **QUÉ EXPLICAR:**
  - Explique la variable temporal discreta $t$: el cálculo neuronal no es estático ni instantáneo; ocurre en pasos de tiempo ($t, t+1, t+2 \dots$).
  - En el instante $t$, la neurona capta las entradas $\langle x_n, w_{i,j} \rangle$.
  - En el intervalo entre $t$ y $t+1$, la neurona ejecuta las operaciones matemáticas internas.
  - En el instante $t+1$, el nuevo estado de activación queda determinado y se emite la salida.
- **EJEMPLO PARA EXPLICAR:**
  Un semáforo inteligente: en el segundo $t$ sus sensores detectan que no hay autos en la avenida (entrada); en el segundo $t+1$ su procesador cambia de estado interno y cambia la luz a verde (salida).
- **IDEA CLAVE:**
  La computación de una neurona representa una evolución temporal: pasa de un estado inicial en $t$ a un nuevo estado en $t+1$.

---

### Diapositiva 8 — La Salida ($y_i$): Composición de Tres Funciones
- **QUÉ DECIR:**
  > *"Llegamos a la fórmula matemática fundamental de la salida de una neurona. La señal de salida se llama comúnmente $y_i$ o señal efectiva. Miren la fórmula en pantalla: $$y_i = f_{\text{salida}}(f_{\text{activación}}(f_{\text{propagación}}))$$ Esto no es una sola operación, sino tres funciones encadenadas en orden. Primero se aplica la propagación, el resultado entra a la función de activación, y ese resultado entra a la función de salida."*
- **QUÉ EXPLICAR:**
  Desglose rigurosamente las 3 funciones:
  1. **Función de Propagación ($f_{\text{propagación}}$):** Es la función integradora. Toma todas las entradas $x_n$ y las multiplica por sus pesos $w_{i,j}$, sumándolas ($\sum x_n w_n$). Recoge toda la energía entrante.
  2. **Función de Activación ($f_{\text{activación}}$):** Evalúa el nivel de excitación de la neurona a partir del valor de propagación. Determina si la neurona está muy excitada, en reposo o inhibida.
  3. **Función de Salida ($f_{\text{salida}}$):** Mapea o convierte ese estado de activación en la señal final $y_i$ (por ejemplo, recortándola a un rango de 0 a 1 o convirtiéndola en un valor binario).
- **EJEMPLO PARA EXPLICAR:**
  **Analogía:** Preparar un café.
  1. *Propagación:* Mezclar el agua y el café en la cafetera (combinar ingredientes).
  2. *Activación:* Hervir y filtrar (proceso interno que extrae el café).
  3. *Salida:* Servirlo en la taza con la temperatura y medida exacta para el cliente (la entrega final).
- **IDEA CLAVE:**
  La salida $y_i$ es una composición secuencial de tres funciones: propagación (integrar), activación (excitar) y salida (emitir).

---

### Diapositiva 9 — Diagrama: El Encadenamiento de Funciones en la Salida
- **QUÉ DECIR:**
  > *"Observemos el diagrama de flujo. Miren la secuencia: 1) Entran los datos con sus pesos $\langle x_n, w \rangle$. 2) Pasan por $f_{\text{propagación}}$, que suma las influencias. 3) Pasan por $f_{\text{activación}}$, que calcula el nivel de excitación interna. 4) Pasan por $f_{\text{salida}}$, que genera la señal final $y_i$. Esta secuencia es universal para cualquier neurona artificial."*
- **QUÉ EXPLICAR:**
  Refuerce el encadenamiento: la salida de cada bloque es el argumento de entrada del bloque siguiente.
- **EJEMPLO PARA EXPLICAR:**
  Muestre cómo se evalúa una función compuesta en matemáticas: si $h(x) = f(g(x))$, primero calculamos $g(x)$ y luego evaluamos $f$ sobre ese resultado. En la neurona es una composición triple: $f_{\text{salida}} \circ f_{\text{activación}} \circ f_{\text{propagación}}$.
- **IDEA CLAVE:**
  La señal viaja en una sola dirección a través de la cadena matemática: Entradas $\to f_{\text{prop}} \to f_{\text{act}} \to f_{\text{salida}} \to y_i$.

---

### Diapositiva 10 — Clases de Neuronas según su Configuración de Salida
- **QUÉ DECIR:**
  > *"¿Por qué existen diferentes tipos de neuronas artificiales? Porque dependiendo del problema que queramos resolver, necesitamos que la neurona entregue un tipo de respuesta diferente. El criterio principal para clasificarlas es **el tipo de salida que producen**. Hoy estudiaremos tres clases fundamentales: la neurona **McCulloch-Pitts**, las neuronas tipo **Ising** y las neuronas tipo **Potts**."*
- **QUÉ EXPLICAR:**
  Presente las tres clases basándose en su salida:
  1. **McCulloch-Pitts:** Salida estrictamente binaria ($0$ o $1$). Ideal para lógica booleana clásica.
  2. **Tipo Ising:** Salida bipolar ($\{-1, +1\}$), donde la función de salida es el signo de $x$ ($f(x) = \text{sign}(x)$). Si el resultado es positivo da $+1$ (activada); si es negativo da $-1$ (desactivada/inhibida).
  3. **Tipo Potts:** Salida discreta en un rango múltiple (por ejemplo $\{-3, -2, -1, 0, +1, +2, +3\}$). Permite representar múltiples niveles discretos de activación.
- **EJEMPLO PARA EXPLICAR:**
  - *McCulloch-Pitts:* Un detector de humo (0 = no hay humo, 1 = hay humo).
  - *Ising:* Un termostato bipolar (+1 = calentar, -1 = enfriar).
  - *Potts:* Un selector de velocidades de un ventilador (-3 = reversa máxima, 0 = apagado, +3 = velocidad máxima hacia adelante).
- **IDEA CLAVE:**
  Las neuronas artificiales se clasifican principalmente según el rango y tipo de valores que genera su señal de salida.

---

### Diapositiva 11 — Tabla Comparativa: McCulloch-Pitts vs. Ising vs. Potts
- **QUÉ DECIR:**
  > *"Revisemos esta tabla comparativa para fijar las diferencias. Miren las columnas: nombre de la neurona, valores de salida que puede tomar, su función característica y el significado de su respuesta. Noten que McCulloch-Pitts usa $\{0, 1\}$, Ising usa $\{-1, +1\}$ con función signo, y Potts maneja un abanico discreto como $\{-3, \dots, +3\}$."*
- **QUÉ EXPLICAR:**
  Guíe una lectura comparativa horizontal:
  - Destaque la diferencia entre el 0 de McCulloch-Pitts (inactiva) y el -1 de Ising (inhibición activa/negativa).
  - Destaque que el modelo Potts permite estados discretos intermedios sin llegar a ser una función continua infinita.
- **EJEMPLO PARA EXPLICAR:**
  Pregunte al grupo: *"Si tuvieran que diseñar una neurona que clasifique una nota escolar en reprobado (-1) o aprobado (+1), ¿cuál usarían?"* (Ising). *"¿Y si la nota va de 0 a 5 en números enteros discretos?"* (Potts).
- **IDEA CLAVE:**
  La elección del tipo de neurona depende directamente de la naturaleza de la decisión requerida por el problema computacional.

---

### Diapositiva 12 — Actividad Práctica Individual (5-10 min)
- **QUÉ DECIR:**
  > *"Vamos a aplicar lo aprendido con una actividad práctica individual. Tienen entre 5 y 10 minutos para responder en sus cuadernos los 4 pasos que ven en pantalla. No es una evaluación de memoria; es un ejercicio de aplicación técnica. Utilicen la notación y conceptos formales que acabamos de revisar."*
- **QUÉ EXPLICAR:**
  Indique que el trabajo es estrictamente individual. Mientras los estudiantes resuelven, recorra el salón para orientar dudas puntuales.

#### Solucionario Guía para el Docente (Criterios de Corrección):

1. **Paso 1 (Jerarquía Estructural):**
   - *Respuesta esperada:* Las neuronas ($N_i$) se agrupan formando las capas ($C_i$). Las capas de entrada, procesamiento y salida se conectan entre sí para formar las redes $R_1$ (visión) y $R_2$ (movimiento). Finalmente, ambas redes colaboran de forma integrada para constituir el sistema general de control robótico $S_1$.

2. **Paso 2 (Análisis del Par Entrada-Peso):**
   - *Respuesta esperada:* El par ordenado se escribe formalmente como $\langle x_2, w_{2,3} \rangle = \langle 0.7, 0.9 \rangle$. Si el peso fuera $w_{2,3} = 0$, la señal $x_2$ quedaría completamente anulada en la función de propagación ($0.7 \times 0 = 0$), lo que significa que la neurona $N_3$ ignorará por completo la información proveniente de $N_2$.

3. **Paso 3 (Cadena de Funciones):**
   - *Respuesta esperada:* La fórmula es $y_i = f_{\text{salida}}(f_{\text{activación}}(f_{\text{propagación}}))$. La función de propagación ($f_{\text{propagación}}$) tiene como rol integrar y combinar todas las señales entrantes multiplicadas por sus respectivos pesos (suma ponderada).

4. **Paso 4 (Selección de Modelo):**
   - *Respuesta esperada:* Se debe elegir una **neurona tipo Ising**, ya que su salida es estrictamente bipolar $\{-1, +1\}$. Su función matemática característica es la función signo: $f(x) = \text{sign}(x)$, donde $+1$ representará compuerta abierta y $-1$ representará compuerta cerrada.

- **IDEA CLAVE:**
  La actividad consolida la notación formal, el cálculo de pesos, la cadena de funciones y la selección correcta de tipos de neuronas.

---

### Diapositiva 13 — Resumen y Cierre de la Lección
- **QUÉ DECIR:**
  > *"Para cerrar nuestra sesión de hoy, repasemos los pilares fundamentales que deben recordar: 1) La jerarquía $N \to C \to R \to S$. 2) Las tres partes de la neurona: entrada, cómputo y salida. 3) El par de entrada $\langle x_n, w_{i,j} \rangle$. 4) La diferencia entre señales continuas (analógicas) y discretas (digitales). 5) La composición de salida $y_i = f_{\text{salida}}(f_{\text{activación}}(f_{\text{propagación}}))$. 6) Las clases de neuronas: McCulloch-Pitts ($0/1$), Ising ($-1/+1$) y Potts (rango discreto). Excelente trabajo en la clase de hoy."*
- **QUÉ EXPLICAR:**
  Haga un cierre motivador recordando que esta base teórica y formal es indispensable para cuando pasemos a estudiar el entrenamiento de redes multicapa y algoritmos de optimización.
- **IDEA CLAVE:**
  Un Sistema Neuronal Artificial es una arquitectura jerárquica de procesadores elementales que transforman señales ponderadas mediante composición de funciones.

---

## 5. Preguntas de Diagnóstico Oral para el Docente (Uso Opcional durante la Explicación)

Si durante la clase el docente desea verificar la atención y comprensión del grupo sin aplicar exámenes formales, puede lanzar estas preguntas orales:

1. *"Si una capa $C_1$ tiene 5 neuronas y la capa $C_2$ tiene 3 neuronas y todas están conectadas con todas, ¿cuántos pesos $w_{i,j}$ existen entre ambas capas?"*
   - **Respuesta:** $5 \times 3 = 15$ conexiones ponderadas.
2. *"¿Por qué decimos que una señal de probabilidad de 0.85 es analógica y no digital?"*
   - **Respuesta:** Porque toma un valor real continuo dentro del intervalo $[0, 1]$, mientras que las señales digitales solo pueden ser 0 o 1 exactos.
3. *"Si la función de activación da un valor positivo muy alto, ¿qué valor emitirá una neurona tipo Ising?"*
   - **Respuesta:** Emitirá $+1$, porque $\text{sign}(x) = +1$ para todo $x > 0$.
