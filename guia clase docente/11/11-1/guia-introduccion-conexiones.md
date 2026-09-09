# Guía del Docente — Introducción a Conexiones y Redes Neuronales Artificiales
## 11.º Grado — Grupo 1

---

## 1. Objetivo de la Clase

Al finalizar esta sesión, los estudiantes deben ser capaces de:
- Contrastar el paradigma de cómputo clásico simbolista (Neumann-Turing) con el paradigma conexionista basado en redes neuronales.
- Describir las propiedades operativas esenciales de los sistemas conexionistas: procesamiento distribuido en paralelo, tolerancia a fallos, autoorganización y aprendizaje adaptativo.
- Trazar la evolución histórica fundacional desde el modelo de McCulloch-Pitts y el aprendizaje Hebbiano, pasando por el Perceptrón de Rosenblatt y ADALINE/LMS.
- Analizar formal y geométricamente el problema de la separabilidad lineal planteado por Minsky y Papert con la compuerta lógica XOR.
- Explicar la superación del parón histórico mediante Perceptrones Multicapa (MLP), funciones de activación continuas (sigmoideas) y el algoritmo de Retropropagación (Backpropagation).

---

## 2. Conceptos Clave

1. **Paradigma Simbolista vs. Conexionista**:
   - *Simbolismo*: La cognición como manipulación de símbolos explícitos según reglas lógicas sintácticas (lógica booleana, árboles de decisión, programas clásicos).
   - *Conexionismo*: Procesamiento de información emergente a partir de patrones de actividad distribuidos en redes de nodos interconectados con pesos ajustables.
2. **Máquina de Neumann-Turing vs. Redes Neuronales**:
   - *Clásica*: Procesador centralizado, memoria separada, ejecución lineal y determinista, colapso ante errores de código/hardware.
   - *Neuronal*: Computación masivamente paralela y distribuida, memoria intrínseca en los enlaces (pesos sinápticos), degradación suave ante fallos.
3. **Aprendizaje Hebbiano (No Supervisado / Asociativo)**:
   - "Neuronas que se disparan juntas fortalecen su enlace" ($\Delta w_{ij} = \eta \cdot x_i \cdot y_j$).
4. **Perceptrón y Aprendizaje Supervisado**:
   - Ajuste iterativo de pesos a partir del error de salida ($Error = Salida\ Deseada - Salida\ Obtenida$).
   - Algoritmo LMS (*Least Mean Square*) de Widrow y Hoff en ADALINE.
5. **Separabilidad Lineal y la Compuerta XOR**:
   - Limitación matemática fundamental de los clasificadores monocapa: incapacidad de separar clases que no son divisibles por un único hiperplano lineal.
6. **Perceptrón Multicapa (MLP), Sigmoides y Retropropagación (Backpropagation)**:
   - Capas ocultas para componer regiones de decisión no lineales.
   - Funciones sigmoideas derivables ($\sigma(z) = \frac{1}{1 + e^{-z}}$) para permitir el cálculo del gradiente.
   - Algoritmo de Retropropagación (Werbos, Rumelhart, Hinton, Parker) mediante la regla de la cadena para optimizar los pesos de capas profundas.

---

## 3. Planificación Temporal y Guía Diapositiva a Diapositiva

**Tiempo total estimado:** 45 - 50 minutos.

| Sección | Diapositivas | Enfoque Pedagógico | Tiempo Sugerido |
| :--- | :--- | :--- | :--- |
| **Apertura y Contexto** | Diapositivas 1 – 2 | Título, objetivos y pregunta disparadora sobre programación vs. entrenamiento | 5 min |
| **Fundamentos Teóricos** | Diapositivas 3 – 5 | Simbolismo vs. Conexionismo y arquitectura comparada frente a Neumann-Turing | 10 min |
| **Modelos Fundacionales** | Diapositivas 6 – 8 | McCulloch-Pitts, Hebb, Perceptrón de Rosenblatt, ADALINE y pregunta de convergencia | 10 min |
| **La Crisis de Separabilidad (XOR)** | Diapositivas 9 – 10 | Crítica de Minsky & Papert, demostración geométrica de la no separabilidad lineal | 8 min |
| **El Resurgimiento y Síntesis** | Diapositivas 11 – 12 | MLP, funciones sigmoideas, algoritmo Backpropagation y matriz histórica | 7 min |
| **Actividad Práctica Individual** | Diapositiva 13 | Resolución individual de análisis técnico (XOR y arquitectura de red) | 7 - 10 min |
| **Cierre y Retroalimentación** | Diapositiva 14 | Verificación oral de respuestas y síntesis de cierre | 3 - 5 min |

---

### Detalle de Conducción por Diapositiva:

#### Diapositiva 1: Título y Objetivos
- **Qué explicar:** Establezca la relevancia del tema. No estamos viendo "programación web" ni "hardware convencional", sino los cimientos teóricos y matemáticos de la Inteligencia Artificial moderna.
- **Estrategia:** Explique que para entender ChatGPT, visión artificial o modelos de lenguaje actuales, es imprescindible comprender cómo pasamos de la computación rígida de Turing a las redes neuronales.

#### Diapositiva 2: Pregunta Disparadora
- **Qué explicar:** Confronte a los estudiantes con la diferencia entre escribir `if (condición) { ejecutar() }` y presentar 100,000 imágenes para que una red aprenda sola los patrones.
- **Pregunta oral sugerida:** *"Si quisiéramos programar un carro autónomo para reconocer peatones, ¿podríamos escribir a mano un if/else para cada posible vestimenta, estatura y ángulo de una persona?"*
- **Respuesta esperada:** No, la combinatoria es infinita. Se requiere un modelo adaptativo que extraiga características estadísticas.

#### Diapositiva 3: Simbolismo vs. Conexionismo
- **Qué explicar:** El enfoque simbolista (décadas de 1950 a 1980) creía que la mente era un procesador lógico abstracto. El conexionismo demostró que la inteligencia surge de la estructura biológica cerebral: capas de neuronas interconectadas.
- **Concepto clave:** Monismo mente-cerebro aplicado a la ciencia de la computación.

#### Diapositiva 4: Computadores Clásicos vs. Sistemas Neuronales
- **Qué explicar:** Analice la máquina de von Neumann (CPU secuencial, memoria RAM separada, bus de datos) frente al tejido neuronal (donde el cómputo y la memoria ocurren simultáneamente en las sinapsis).
- **Analogía:** Un computador clásico es como un bibliotecario que lee un libro página por página en un escritorio. Una red neuronal es como una asamblea de miles de personas que levantan la mano al unísono para votar una decisión.

#### Diapositiva 5: Pilares Operativos del Conexionismo
- **Qué explicar:** Desglose con precisión los 4 pilares: procesamiento paralelo masivo, tolerancia intrínseca a fallos, autoorganización de pesos y aprendizaje adaptativo por optimización matemática.
- **Conexión con hardware:** Mencione por qué las GPUs (que tienen miles de núcleos simples en paralelo) dominan el entrenamiento de redes neuronales, a diferencia de las CPUs tradicionales (con pocos núcleos complejos secuenciales).

#### Diapositiva 6: Inicios Históricos — McCulloch-Pitts y Hebb
- **Qué explicar:** McCulloch y Pitts formalizaron la neurona matemática básica en 1943 (suma ponderada con umbral). Donald Hebb en 1949 formuló la regla biológica del fortalecimiento de enlaces por coactivación.
- **Pregunta oral sugerida:** *"Si practicamos tocar guitarra todos los días, ¿qué ocurre con las vías neuronales asociadas según Donald Hebb?"*
- **Aclaración:** Se fortalecen las conexiones sinápticas entre las neuronas sensorio-motoras involucradas.

#### Diapositiva 7: Perceptrón de Rosenblatt y Modelo ADALINE
- **Qué explicar:** El salto revolucionario del aprendizaje supervisado: se calcula el error $e = y_{target} - y_{pred}$ y se usa ese valor para calibrar gradualmente los pesos: $w_{nuevo} = w_{viejo} + \eta \cdot e \cdot x$.
- **Widrow y Hoff (ADALINE):** Introdujeron el algoritmo LMS, precursor del descenso de gradiente moderno.

#### Diapositiva 8: Pregunta Oral de Convergencia
- **Qué explicar:** Oriente la reflexión sobre el concepto de optimización guiada por retroalimentación.
- **Pregunta oral:** *"¿Qué pasaría si la red no supiera cuál es la salida esperada durante el entrenamiento supervisado?"*
- **Respuesta esperada:** No podría calcular el gradiente de error ni sabría en qué dirección reajustar los pesos sinápticos.

#### Diapositiva 9: El Problema de la Separabilidad Lineal (XOR)
- **Qué explicar:** El momento más dramático en la historia de la IA. Marvin Minsky y Seymour Papert publicaron en 1969 su libro *Perceptrons*, demostrando que un perceptrón monocapa es matemáticamente incapaz de calcular la función lógica XOR.
- **Consecuencia histórica:** Provocó el "Invierno de la IA" durante casi 20 años, pues se asumió erróneamente que las redes neuronales eran un callejón sin salida.

#### Diapositiva 10: Esquema Comparativo de Separabilidad
- **Qué explicar:** Muestre la diferencia geométrica: AND y OR se pueden separar con una sola línea recta en un plano 2D. XOR requiere al menos dos rectas (o una curva no lineal).
- **Pizarra / Explicación visual:** Dibuje el plano cartesiano $(x_1, x_2)$:
  - $(0,0) \rightarrow 0$
  - $(0,1) \rightarrow 1$
  - $(1,0) \rightarrow 1$
  - $(1,1) \rightarrow 0$
  Los $1$ están en una diagonal y los $0$ en la otra. Ninguna línea recta puede dejar los $1$ a un lado y los $0$ al otro simultáneamente.

#### Diapositiva 11: Resurgimiento — MLP, Sigmoides y Retropropagación
- **Qué explicar:** La solución a la crisis de Minsky:
  1. Agregar capas ocultas (Perceptrón Multicapa).
  2. Reemplazar la función escalón rígida (no derivable) por la función sigmoide suave $\sigma(z) = \frac{1}{1+e^{-z}}$ (derivable en todo punto).
  3. Aplicar el algoritmo de Retropropagación (Backpropagation) utilizando la regla de la cadena del cálculo diferencial para propagar el error desde la salida hacia atrás.
- **Resultado:** Las redes multicapa se convirtieron en aproximadores universales de funciones.

#### Diapositiva 12: Matriz Histórico-Técnica de Modelos
- **Qué explicar:** Repase de forma panorámica la evolución desde el modelo sin entrenamiento de 1943 hasta las redes multicapa entrenables con backpropagation de los años 80.

---

## 4. Ejemplos Adicionales para Usar en el Aula

- **Reconocimiento de Dígitos Escritos a Mano (Dataset MNIST):** Explique cómo una red neuronal de 784 entradas (28x28 píxeles) toma intensidades de brillo, las pasa por capas ocultas que detectan bordes y curvas, y finalmente activa la neurona correspondiente al número correcto del 0 al 9.
- **Analogía del Termostato Inteligente vs. Algoritmo Rígido:** Un termostato clásico solo apaga o enciende si la temperatura pasa de 20°C (lógica escalón rígida). Una red neuronal predice el consumo térmico según la hora del día, número de personas y clima exterior mediante ajuste ponderado de variables continuas.

---

## 5. Preguntas Orales para Dinamizar la Clase

1. *¿Por qué un daño menor en la memoria RAM de un computador clásico congela el sistema operativo, mientras que el cerebro humano tolera la pérdida constante de neuronas sin perder la memoria del lenguaje?*
2. *¿Por qué la función de activación escalón impedía calcular derivadas y cómo la función sigmoide solucionó este problema matemático?*
3. *¿Cuál fue la diferencia fundamental entre el enfoque de Donald Hebb (asociativo) y el de Frank Rosenblatt (supervisado por error)?*

---

## 6. Errores y Confusiones Frecuentes de los Estudiantes

| Error común | Aclaración pedagógica |
| :--- | :--- |
| **Confundir Perceptrón Simple con Perceptrón Multicapa** | El perceptrón simple tiene una sola capa de pesos y solo traza fronteras lineales; el multicapa (MLP) contiene capas intermedias ocultas capaces de generar superficies de decisión no lineales complejas. |
| **Creer que el conexionismo almacena datos en archivos como un disco duro** | En las redes neuronales el conocimiento está codificado en la matriz numérica de pesos de las conexiones sinápticas ($w$), no en una dirección de memoria fija. |
| **Pensar que Minsky y Papert destruyeron las redes neuronales porque eran inútiles** | Minsky y Papert demostraron un límite matemático real del modelo monocapa; el error de la época fue asumir apresuradamente que las redes multicapa no se podrían entrenar eficientemente. |
| **Creer que Backpropagation es una red neuronal en sí misma** | Backpropagation es el **algoritmo matemático de optimización** (basado en derivadas y descenso de gradiente) que ajusta los pesos de la red, no la estructura de la red. |

---

## 7. Actividad Práctica Individual — Guía de Evaluación

### Instrucciones y Condiciones:
- **Modalidad:** Estrictamente individual.
- **Tiempo límite:** 5 a 10 minutos.
- **Soporte:** Cuaderno de apuntes o documento de trabajo digital.

### Respuestas Técnicas Esperadas:

1. **Paso 1 (Identificación de la Limitación):**
   - *Respuesta esperada:* Las compuertas AND y OR son linealmente separables en el espacio 2D, por lo que una neurona simple con una función de umbral puede trazar una sola recta que divide los resultados positivos de los negativos. En cambio, XOR requiere una frontera de decisión no lineal que aísle dos regiones diagonales simultáneas, algo matemáticamente imposible para un discriminador lineal monocapa.

2. **Paso 2 (Análisis Geométrico):**
   - *Respuesta esperada:* Los puntos $(0,1)$ y $(1,0)$ tienen salida 1, mientras que $(0,0)$ y $(1,1)$ tienen salida 0. Al ubicarlos en el plano, forman un cuadrado donde los estados activos están en vértices opuestos en diagonal. Una sola línea recta solo puede aislar 1 punto frente a 3, pero no puede agrupar las dos esquinas diagonales sin incluir esquinas con salida 0.

3. **Paso 3 (Solución Arquitectónica):**
   - *Respuesta esperada:* Se requiere un **Perceptrón Multicapa (MLP)** que incorpore al menos una **capa oculta** (con mínimo 2 neuronas intermedias) para componer dos rectas de decisión simultáneas, junto con **funciones de activación no lineales continuas (como la sigmoide)** en lugar de funciones escalón discretas.

4. **Paso 4 (Mecanismo de Aprendizaje):**
   - *Respuesta esperada:* El algoritmo de **Retropropagación (Backpropagation)** calcula el error en la capa de salida y propaga dicho error hacia atrás aplicando la **regla de la cadena** del cálculo diferencial, ajustando iterativamente los pesos de las conexiones ocultas en dirección opuesta al gradiente de error.

---

## 8. Verificación Rápida de Comprensión (1 Minuto)

Antes de finalizar la clase, pida a 2 estudiantes elegidos al azar que respondan estas dos preguntas relámpago:
1. *¿Qué elemento matemático permitió que Backpropagation calculara el error hacia atrás?* (Respuesta clave: Las funciones continuas derivables / sigmoideas y la regla de la cadena).
2. *¿Dónde reside la información aprendida por una red neuronal?* (Respuesta clave: En los pesos o intensidades de las conexiones sinápticas).

---

## 9. Recomendaciones Docentes para 11.º Grado

- Mantenga la terminología formal: use términos como *hiperplano de decisión, pesos sinápticos, función de transferencia/activación, gradiente del error, backpropagation, conexionismo*.
- Este grupo se prepara para educación superior y tecnología: destaque que estos mismos fundamentos matemáticos sustentan los transformadores, redes convolucionales y modelos de inteligencia artificial actuales.
