---
title: Evidencia y perfil de negocio
summary: La disciplina que sostiene todas las demás. Escalera de evidencia de 4 peldaños, tratamiento de números, ciclo de confianza y evidencia, y cómo completar el perfil del negocio.
---

# 1. Evidencia y perfil de negocio

> Toda entrega debe respetar esta referencia. Si hay conflicto entre este archivo y cualquier otro, **este prevalece**.

## 1.1 La escalera de evidencia — no declares "listo" antes del último peldaño

| Peldaño | Significa | Ejemplo de entrega |
|---|---|---|
| 1. **Existe** | hay un artefacto | "se escribió el correo" |
| 2. **Sustancial** | tiene contenido real, no marcadores | "tiene oferta, precio y siguiente paso" |
| 3. **Conectado** | está vinculado a lo que dijo el cliente | "usa las palabras y el número que él dio" |
| 4. **Funcional** | se probó o se usó en la práctica | "el cliente respondió / el número se verificó" |

**Regla práctica:** al entregar, indica el peldaño. Nunca presentes los peldaños 1–3 como si fueran el 4.
Un plan bien escrito (3) no es un plan que funciona (4).

## 1.2 Cómo tratar los números

| Origen del número | Qué hacer |
|---|---|
| Documento propio del cliente | citar la fuente y la fecha |
| Informe público (p. ej., PMI Pulse) | citar informe, año y página |
| Estimación propia | escribir **"Estimación"** junto al número |
| No encontrado | escribir **"No encontrado"** — nunca redondear a un número plausible |
| Métrica, testimonio o caso del propio usuario | dejar `[a completar]` — **nunca inventar** |

**Regla de contradicción:** si un número nuevo contradice uno guardado en el perfil, **actualiza el perfil** y avisa al usuario. Un perfil desactualizado contamina todas las entregas siguientes.

**Números que circulan sin fuente** (no los repitas): "el 35% de los proyectos fracasa por alcance inadecuado", "la planificación detallada tiene 2,5 veces más éxito", "las organizaciones maduras en costos son un 45% más eficientes". Si no hay un informe identificable, **no uses el número**.

## 1.3 El ciclo de confianza y evidencia

```
1. Cuantificar el dolor  →  2. Prometer solo lo que controlas
        ↑                              ↓
6. Ganar el siguiente "sí"      3. Mostrar evidencia
        ↑                              ↓
5. Medir y revisar     ←   4. Entregar rápido (TTFV, 30/60/90)
```

La confianza se acumula: cada paso reduce el riesgo que percibe el comprador. Es un bucle, no una etapa.

### Retiradas de confianza — nunca las hagas
❌ urgencia inventada · ❌ escasez falsa · ❌ caso de estudio sin permiso del cliente · ❌ simulación presentada como resultado de un cliente

### Depósitos de confianza
✅ próximo paso agendado · ✅ alcance por escrito · ✅ sección honesta de "no es para ti" · ✅ solo plazos reales · ✅ decir en voz alta lo que **no** haces

## 1.4 Prometer solo lo que controlas

| Controlas | **No** controlas |
|---|---|
| el proceso, el método, el plazo de entrega | el resultado del cliente |
| lo que entregas y cuándo | la adopción por parte de su equipo |
| rehacer dentro del alcance escrito | el crecimiento de facturación del cliente |
| devolver la diferencia según una métrica acordada | que su mercado mejore |

**Prueba antes de prometer:** *"¿esto depende de algo que no controlo?"* Si la respuesta es sí, reescribe la promesa como proceso, no como resultado. Para las garantías, usa la matemática de exposición (`references/02-offer-and-pricing.md`).

## 1.5 El archivo de perfil — requisito de todo

**Dónde:** `templates/business-profile.md`, completado una sola vez.
**Por qué:** sin él, toda salida degenera en consejo genérico. Esta es la conclusión central de las mejores colecciones de skills de negocio: un archivo de contexto que leen todas las skills y que no es propiedad de ninguna.

**Mínimo aceptable antes de producir cualquier cosa:**

| Campo | Por qué es indispensable |
|---|---|
| lo que vendes, en una frase | define la oferta |
| cliente ideal (segmento, tamaño, rol) | define el objetivo y el mensaje |
| dolor principal, en las palabras del cliente | define la narrativa y la implicación |
| alternativa actual del cliente (incluido "no hacer nada") | define el anclaje de precio |
| prueba disponible (número de clientes, casos autorizados) | define lo que puedes afirmar |
| precios y niveles actuales | define el análisis de precios |
| tu capacidad de entrega | evita vender lo que no puedes cumplir |

**Si el perfil no está completo:** no inventes el contexto. Haz al usuario **solo** las preguntas de esta tabla, una vez, y registra las respuestas en el perfil antes de seguir.

## 1.6 Cómo se usa el perfil (y cómo no)

- Las entregas **leen** el perfil y **nunca** lo sobrescriben por su cuenta.
- Cambiar de cliente o de proyecto = cambiar el archivo. La metodología permanece.
- Un campo en blanco en el perfil **no** se convierte en suposición: se convierte en pregunta o en `[a completar]`.
