# Guía del Docente — Análisis Exterior
## 8.º Grado — Grupo 1

---

## Objetivo de la Clase

Al finalizar esta clase, los estudiantes deben ser capaces de:

- Explicar qué es un análisis exterior y en qué se diferencia del análisis interior.
- Identificar los 4 métodos de recopilación de información externa.
- Conocer las 6 pruebas técnicas que se realizan tras la recopilación.
- Comprender la importancia de documentar los hallazgos en un informe.

---

## Conceptos Principales

1. **Análisis exterior**: Evaluación de seguridad realizada desde fuera de la organización, intentando acceder remotamente a los servidores sin tener acceso previo.
2. **Ingeniería social**: Técnicas de manipulación para obtener información o acceso engañando a las personas (no a los sistemas).
3. **Métodos de recopilación**: Inteligencia competitiva, revisión de privacidad, análisis de solicitud y sugerencia dirigida (phishing).
4. **Pruebas técnicas**: Sondeo de red, identificación de servicios, búsqueda de vulnerabilidades, testeo de aplicaciones, relaciones de confianza, verificación inalámbrica.
5. **Documentación e informes**: El producto final del análisis que detalla vulnerabilidades, riesgos y recomendaciones.

---

## Explicación para el Docente

### Diferencia con el Análisis Interior

En la clase anterior se vio el análisis interior, donde el analista recibe una cuenta de usuario normal y evalúa desde adentro. El análisis exterior es lo contrario: el analista no tiene ningún acceso previo. Todo debe obtenerse desde cero, simulando lo que haría un atacante real.

### Los 4 Métodos de Recopilación

- **Inteligencia competitiva**: Se recopila información pública (sitio web, redes sociales, noticias, comunicados). No requiere ningún acceso especial.
- **Revisión de privacidad**: Se evalúa si la organización controla adecuadamente los datos de sus empleados y clientes. Si un empleado puede llevarse una base de datos en una USB, hay un problema grave.
- **Análisis de solicitud**: Es pura ingeniería social. El atacante llama, envía un correo o un chat haciéndose pasar por alguien de autoridad para obtener información o acceso.
- **Sugerencia dirigida (phishing)**: El atacante envía un correo o enlace falso para que un empleado ingrese sus credenciales o instale software malicioso sin saberlo.

### Las 6 Pruebas Técnicas

Tras recopilar información, se realizan pruebas más técnicas:

1. **Sondeo de red**: Descubrir dominios, IPs, servidores, mapas de red.
2. **Identificación de servicios**: Encontrar qué servicios están activos y traspasar el firewall.
3. **Búsqueda de vulnerabilidades**: Usar herramientas automáticas para detectar fallas de seguridad.
4. **Testeo de aplicaciones**: Buscar fallas en aplicaciones web accesibles externamente (caja negra).
5. **Relaciones de confianza**: Verificar que solo los permisos correctos estén activos.
6. **Verificación inalámbrica**: Evaluar la seguridad del Wi-Fi (estándar 802.11).

### Documentación

El informe final es el producto más valioso del análisis. Sin documentación, el análisis no tiene impacto real. Debe incluir: vulnerabilidades probadas, detectadas, nivel de riesgo, servicios vulnerables y herramientas utilizadas.

---

## Cómo Explicarlo

### Secuencia sugerida:

1. **Conectar con la clase anterior**: Recuerde el análisis interior (desde adentro con cuenta normal) y pregunte cómo se evaluaría desde afuera.
2. **Analogía del edificio**: Un ladrón que observa un edificio desde la calle antes de intentar entrar. Primero estudia, después actúa.
3. **Métodos uno por uno**: Explique cada método de recopilación con ejemplos cotidianos antes de pasar al siguiente.
4. **Tabla resumen de métodos**: Use la diapositiva de tabla para consolidar.
5. **Las 6 pruebas**: Presente como un panorama general. No es necesario profundizar técnicamente en cada una, pero sí que entiendan la secuencia lógica.
6. **Documentación**: Enfatice que sin informe, el análisis no sirve.

---

## Ejemplos Recomendados

- **Inteligencia competitiva**: "Si buscan el nombre de una empresa en Google, ¿cuánta información pueden encontrar sin hackear nada?"
- **Análisis de solicitud**: "Alguien llama diciendo 'Soy del área de sistemas, necesito su contraseña'. ¿Lo darían?"
- **Phishing**: "¿Alguna vez les llegó un correo sospechoso de su banco pidiéndoles hacer clic en un enlace?"
- **Documentación**: "Es como el informe de un médico después de un examen: si no lo escribe, ¿cómo sabe qué tratar?"

---

## Preguntas Orales para la Clase

- ¿Creen que una empresa puede controlar toda la información que sus empleados publican en redes sociales?
- ¿Por qué el phishing sigue siendo el ataque más exitoso si todos saben que existe?
- Si un empleado entrega su contraseña voluntariamente (engañado), ¿la culpa es del empleado o de la empresa que no lo capacitó?
- ¿Qué información del colegio creen que sería valiosa para un atacante?

---

## Errores y Confusiones Comunes

| Error frecuente | Aclaración |
|----------------|-----------|
| Confundir análisis interior con exterior | Interior = desde adentro con cuenta. Exterior = desde fuera sin acceso previo. |
| Pensar que el phishing es un "hackeo técnico" | El phishing es ingeniería social: engaña a la persona, no al sistema. |
| Creer que las 6 pruebas se hacen sin recopilar información primero | La recopilación (4 métodos) es el primer paso. Las pruebas técnicas vienen después. |
| Pensar que el informe es opcional | Sin informe, el análisis no tiene valor para la organización. |

---

## Actividad Individual — Explicación para el Docente

### Descripción

Se presenta un escenario de phishing donde 3 empleados de una empresa ficticia ("TechSolutions") hacen clic en un enlace falso y entregan sus credenciales.

### Lo que el estudiante debe hacer:

1. Identificar el método de recopilación usado (sugerencia dirigida / phishing).
2. Indicar qué prueba aplicar para prevenir esto en el futuro.
3. Escribir una recomendación para la empresa.

### Respuestas esperadas:

- **Método**: Análisis de sugerencia dirigida (phishing).
- **Prueba**: Testeo de aplicaciones de internet (verificar que los empleados no accedan a sitios falsos) o revisión de relaciones de confianza.
- **Recomendación**: Capacitar a los empleados para no hacer clic en enlaces sospechosos, verificar siempre el remitente, implementar autenticación de dos factores.

### Forma rápida de verificar:

Si el estudiante identificó correctamente el phishing y dio una recomendación coherente, la actividad está bien realizada. No es necesario que las respuestas sean textualmente iguales.

### Tiempo: 5-8 minutos.

---

## Recomendaciones Docentes

- Conecte siempre con la clase anterior (análisis interior) para que los estudiantes vean la progresión lógica.
- Enfatice el factor humano: la tecnología puede ser muy segura, pero si una persona entrega su contraseña, toda la seguridad se pierde.
- No profundice demasiado en los aspectos técnicos de las 6 pruebas. Lo importante es que entiendan el concepto general y la secuencia.
- Si queda tiempo, pregunte: "¿Qué información del colegio podría obtenerse con un análisis exterior?"

---

## Ampliación (si el grupo avanza rápido)

- Explique brevemente qué es un "fingerprint" en seguridad informática: identificar el sistema operativo y su versión a partir de las respuestas del servidor.
- Comente que existen herramientas como Shodan que permiten buscar dispositivos conectados a internet, mostrando que la superficie de ataque es más grande de lo que parece.
- Mencione que las empresas grandes realizan análisis de este tipo periódicamente (auditorías de seguridad) y contratan equipos especializados llamados "Red Team".
