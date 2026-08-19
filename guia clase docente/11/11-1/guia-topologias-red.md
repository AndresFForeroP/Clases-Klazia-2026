GUÍA DOCENTE – CLASE 11-1
Tema: Topologías de Red
Objetivo de la clase

Comprender qué es una topología de red, identificar sus principales tipos y analizar cómo la forma en que se conectan los dispositivos afecta el funcionamiento, crecimiento y tolerancia a fallas de una red.

DIAPOSITIVA 1 – TOPOLOGÍAS DE RED
Qué decir

Hoy vamos a estudiar cómo se organizan los dispositivos dentro de una red.

Todos los días utilizamos redes: cuando nos conectamos al Wi-Fi, utilizamos Internet, enviamos información desde un computador o usamos diferentes dispositivos conectados entre sí.

Pero existe una pregunta importante: ¿cómo se conectan todos esos dispositivos?

No podemos conectar una gran cantidad de computadores de cualquier manera. La forma en que se organizan las conexiones puede afectar el funcionamiento de la red.

Por ejemplo, si se daña un cable, debemos preguntarnos: ¿debería dejar de funcionar toda la red o solamente un dispositivo?

Durante esta clase vamos a conocer diferentes formas de organizar una red, llamadas topologías de red.

Pregunta para los estudiantes

¿Qué creen que podría pasar si se daña una conexión importante dentro de una red?

Idea principal

La forma en que se conectan los dispositivos influye directamente en el funcionamiento de una red.

DIAPOSITIVA 2 – PREGUNTA INICIAL
Qué decir

Imaginen un banco.

Un banco depende de computadores y redes para realizar transferencias, consultar cuentas, utilizar cajeros y procesar pagos.

Ahora imaginen que una conexión falla.

¿Debería una sola falla detener completamente todo el banco?

Dependiendo de cómo esté diseñada la red, una falla puede afectar solamente una parte o puede afectar una gran cantidad de dispositivos.

Aquí aparece un concepto importante: redundancia.

La redundancia significa tener alternativas o caminos adicionales para que, si una conexión falla, todavía exista otra forma de mantener la comunicación.

Pregunta para los estudiantes

Si una carretera está cerrada, ¿qué ocurre si existen otras rutas para llegar al destino?

Idea principal

Una red puede diseñarse para resistir mejor las fallas mediante conexiones o rutas alternativas.

DIAPOSITIVA 3 – ¿QUÉ ES UNA TOPOLOGÍA DE RED?
Qué decir

Una topología de red es la forma en que están organizados y conectados los elementos de una red.

Dentro de una red podemos encontrar diferentes dispositivos, por ejemplo:

Computadores.
Servidores.
Impresoras.
Routers.
Switches.
Cámaras IP.

Cada dispositivo conectado a la red se conoce como un nodo.

Los caminos que permiten que los dispositivos se comuniquen se conocen como enlaces.

Por lo tanto, cuando hablamos de topología no solamente hablamos de los dispositivos que existen, sino de cómo están conectados entre ellos.

Ejemplo

Si tenemos cinco computadores conectados a un switch, tenemos varios nodos conectados mediante diferentes enlaces.

Idea principal

La topología describe cómo se organizan y conectan los dispositivos dentro de una red.

DIAPOSITIVA 4 – TOPOLOGÍA FÍSICA Y LÓGICA
Qué decir

Existen dos formas importantes de observar una red.

La primera es la topología física.

Esta responde a la pregunta:

¿Cómo están conectados físicamente los dispositivos?

Por ejemplo, podemos observar dónde están los cables, qué dispositivo está conectado a otro y dónde se encuentran los equipos.

La segunda es la topología lógica.

Esta responde a otra pregunta:

¿Cómo viajan los datos dentro de la red?

Una forma sencilla de entenderlo es pensar en una ciudad.

La topología física serían las carreteras construidas.

La topología lógica sería la ruta que sigue un vehículo para llegar a su destino.

Una cosa es cómo está construida la red y otra es cómo circula la información.

Idea principal

La topología física muestra cómo están conectados los equipos y la topología lógica explica cómo circulan los datos.

PRINCIPALES TOPOLOGÍAS DE RED
DIAPOSITIVA 5 – TOPOLOGÍA DE BUS
Qué decir

En una topología de Bus todos los dispositivos comparten una conexión principal.

Podemos imaginarla como una sola carretera utilizada por todos.

Existe un cable o canal principal y los dispositivos se conectan a él.

Una ventaja de esta estructura es que puede requerir menos cable y ser relativamente sencilla.

Sin embargo, tiene un problema importante.

Todos dependen del mismo canal principal.

Si ese canal presenta una falla, puede afectar el funcionamiento de toda la red.

Además, si muchos dispositivos necesitan enviar información al mismo tiempo, pueden aparecer problemas de congestión.

Ejemplo

Imaginen una sola carretera utilizada por todos los habitantes de una ciudad.

Si esa carretera se bloquea, todos tienen problemas para desplazarse.

Pregunta para los estudiantes

¿Qué problema tendría una red con muchos computadores si todos comparten un único canal?

Idea principal

La topología de Bus es sencilla, pero depende demasiado de una conexión principal compartida.

DIAPOSITIVA 6 – PROBLEMA DE LA TOPOLOGÍA BUS
Qué decir

Ahora imaginen una empresa con 100 computadores.

Todos necesitan enviar archivos, consultar servidores y utilizar Internet.

Si todos comparten un único canal principal, ese canal puede convertirse en un problema.

Mientras más tráfico exista, más posibilidades hay de que aparezca congestión.

Además, existe un problema aún más importante.

Si falla el cable principal, muchos o todos los dispositivos pueden quedar sin comunicación.

Por eso, aunque esta topología es sencilla, no es una buena opción para muchas redes modernas grandes.

Idea principal

Compartir un único canal puede producir congestión y crear un punto importante de falla.

DIAPOSITIVA 7 – TOPOLOGÍA DE ANILLO
Qué decir

En una topología de Anillo los dispositivos están conectados formando un círculo.

Cada dispositivo está conectado con los dispositivos que tiene a sus lados.

Podemos imaginarlo como personas sentadas alrededor de una mesa pasando un mensaje de una persona a otra.

La información sigue un recorrido organizado por la red.

Sin embargo, en un anillo simple existe un problema.

Si falla una conexión o un nodo importante, el recorrido de la información puede interrumpirse.

Ejemplo

Imaginen una fila de personas formando un círculo.

Si una persona debe pasar un mensaje y deja de participar, el mensaje puede no llegar correctamente a los demás.

Idea principal

La topología de Anillo organiza los dispositivos en un circuito donde la información sigue un recorrido determinado.

DIAPOSITIVA 8 – TOPOLOGÍA DE ESTRELLA
Qué decir

Esta es una de las topologías más conocidas.

En una topología de Estrella todos los dispositivos se conectan a un punto central.

Generalmente, ese punto central es un switch.

Cada computador tiene su propia conexión hacia ese equipo central.

Esto tiene una ventaja importante.

Si se daña el cable de un computador, los demás pueden continuar funcionando.

La falla queda aislada en ese dispositivo o conexión.

Sin embargo, existe una dependencia importante.

Si falla el switch central, muchos o todos los dispositivos pueden perder la comunicación.

Pregunta para los estudiantes

Si se rompe el cable de un solo computador, ¿los demás deberían dejar de funcionar?

Idea principal

La topología de Estrella permite aislar muchas fallas individuales, pero depende del dispositivo central.

DIAPOSITIVA 9 – TOPOLOGÍA DE ÁRBOL
Qué decir

La topología de Árbol utiliza una estructura jerárquica.

Podemos imaginarla literalmente como un árbol.

Tenemos una parte principal y, a partir de ella, aparecen diferentes ramas.

Esta estructura es útil cuando una red comienza a crecer.

Por ejemplo, imaginen una universidad con varios edificios.

No sería práctico conectar todos los computadores directamente a un único dispositivo.

En cambio, cada edificio puede tener su propia parte de la red y después conectarse a una estructura principal.

Esto permite organizar mejor redes grandes.

Ejemplo

Una empresa puede organizar su red por:

Edificios.
Pisos.
Departamentos.
Áreas de trabajo.
Idea principal

La topología de Árbol permite organizar redes grandes utilizando una estructura jerárquica.

DIAPOSITIVA 10 – ESTRELLA VS. ÁRBOL
Qué decir

Una topología debe elegirse según las necesidades.

Si tenemos una sala con 10 computadores, una estructura en Estrella puede funcionar perfectamente.

Pero ahora imaginen una organización con 300 computadores distribuidos en varios pisos.

Conectar todos directamente a un único switch podría ser poco práctico.

En ese caso podemos utilizar una estructura jerárquica.

Cada piso puede tener sus propios dispositivos de conexión y estos se conectan a una infraestructura principal.

Por eso, a medida que una red crece, también puede cambiar la forma en que debemos organizarla.

Pregunta para los estudiantes

¿Utilizarían exactamente la misma estructura para conectar 10 computadores y 1.000 computadores? ¿Por qué?

Idea principal

Las necesidades de una red cambian cuando aumenta su tamaño.

DIAPOSITIVA 11 – TOPOLOGÍA DE MALLA Y TOTALMENTE CONEXA
Qué decir

Ahora vamos a pensar en una red que necesita resistir mejor las fallas.

La idea es crear diferentes caminos para llegar de un punto a otro.

Podemos imaginarlo nuevamente como una ciudad.

Si una carretera está cerrada, podemos utilizar otra.

Eso es una de las ideas principales de una topología de Malla.

Existen múltiples conexiones y rutas alternativas.

En una red totalmente conexa, cada nodo tendría conexión directa con todos los demás.

Esto proporciona una gran cantidad de alternativas.

Sin embargo, también genera un problema.

Mientras más dispositivos existan, necesitaremos muchas más conexiones.

Por lo tanto, el costo y la complejidad aumentan considerablemente.

Idea principal

La topología de Malla mejora la disponibilidad mediante múltiples caminos, pero aumenta el costo y la complejidad.

DIAPOSITIVA 12 – TOPOLOGÍA MIXTA
Qué decir

En una red real no siempre encontramos una única topología.

Muchas organizaciones combinan diferentes estructuras.

Por ejemplo, dentro de una oficina podemos utilizar una topología de Estrella.

Después, varias oficinas pueden organizarse jerárquicamente utilizando una estructura similar a un Árbol.

Y algunos sistemas importantes pueden tener conexiones adicionales para aumentar la disponibilidad.

Cuando combinamos diferentes topologías hablamos de una topología Mixta o Híbrida.

Esta es una situación común en redes grandes y reales.

Idea principal

Una red puede combinar diferentes topologías según las necesidades de cada parte de la organización.

DIAPOSITIVA 13 – MATRIZ COMPARATIVA
Qué decir

No quiero que memoricen cada elemento de esta comparación.

Lo importante es entender los criterios que utilizamos para analizar una topología.

Debemos preguntarnos:

¿Qué tan bien soporta las fallas?

¿Cuánto cuesta implementarla?

¿Qué tan compleja es?

¿Qué tan fácil es ampliarla?

¿Para qué tipo de situación es adecuada?

No existe una topología que sea perfecta para todos los casos.

Una topología puede ser económica, pero vulnerable.

Otra puede ser muy confiable, pero demasiado costosa.

Por eso debemos analizar las necesidades antes de tomar una decisión.

Idea principal

La mejor topología depende de las necesidades específicas de cada red.

DIAPOSITIVA 14 – ¿CÓMO ELEGIMOS UNA TOPOLOGÍA?
Qué decir

Supongamos que una empresa nos pregunta cuál topología debe utilizar.

No podemos responder simplemente que una es mejor que todas las demás.

Primero debemos analizar la situación.

Por ejemplo:

¿Cuántos dispositivos existen?
¿Cuál es el presupuesto?
¿Qué tan grande es el lugar?
¿Cuánto tráfico tendrá la red?
¿La red necesita crecer en el futuro?
¿Qué tan importante es continuar funcionando cuando ocurre una falla?

Después de diseñar una red también necesitamos conocer su estructura.

Para eso utilizamos mapas o diagramas de red.

Podemos compararlo con un plano de un edificio.

Si no conocemos la estructura, será mucho más difícil encontrar un problema.

Idea principal

Elegir una topología requiere analizar las necesidades técnicas, económicas y futuras de una red.

DIAPOSITIVA 15 – ACTIVIDAD INDIVIDUAL
Instrucciones para explicar la actividad
Qué decir

Ahora vamos a realizar una actividad individual.

Tienen aproximadamente entre 5 y 10 minutos.

Lean cuidadosamente la situación planteada.

Su objetivo no es solamente escribir el nombre de una topología.

Deben analizar el caso y justificar su decisión.

Van a realizar los siguientes pasos:

Paso 1 – Elegir una topología

Indiquen cuál topología consideran más adecuada para la situación.

Paso 2 – Justificar

Escriban dos razones técnicas que expliquen su elección.

Por ejemplo, pueden hablar de:

Qué ocurre cuando falla una conexión.
Qué tan fácil es detectar un problema.
Cómo se comportan los demás dispositivos.
Qué tan fácil sería ampliar la red.
Paso 3 – Analizar la topología Bus

Expliquen brevemente por qué una topología de Bus no sería una buena decisión en este caso.

Paso 4 – Analizar una falla

Respondan:

Si falla el cable de uno de los equipos, ¿qué dispositivos continuarían funcionando?

Tiempo recomendado

7 minutos.