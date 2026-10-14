---
title: Riesgo
summary: Matriz probabilidad × impacto, las 5 estrategias para amenazas y oportunidades, reserva de contingencia vs. de gestión, y los errores de medición que contaminan el análisis.
---

# 8. Riesgo

## 8.1 Matriz probabilidad × impacto

**Puntaje = Probabilidad (1–5) × Impacto (1–5) → de 1 a 25**

**Probabilidad:** 1 Rara (<5%) · 2 Improbable (5–20%) · 3 Posible (21–50%) · 4 Probable (51–80%) · 5 Casi segura (>80%)
**Impacto:** 1 Insignificante · 2 Menor · 3 Moderado · 4 Mayor · 5 Catastrófico

| Banda | Puntaje | Acción |
|---|---|---|
| 🟩 **Bajo** | 1–4 | monitorear dentro de la tolerancia; sin acción dedicada |
| 🟨 **Medio** | 5–9 | planificar y monitorear según la tolerancia |
| 🟧 **Alto** | 10–19 | asignar responsable y planificar una respuesta prioritaria |
| 🟥 **Extremo** | 20–25 | exigir acción inmediata, incluida la reevaluación del alcance |

**Cómo usarla:** identificar (impacto y probabilidad) → ubicar en el mapa de calor → priorizar (considerando riesgo, urgencia y límites de gobierno) → actuar y revisar.
**Alcances distintos:** la matriz evalúa **riesgos**; las **oportunidades** necesitan sus propios criterios de impacto-beneficio, evaluados por separado.
**Base de evaluación:** **inherente** (sin controles aplicados) × **residual** (después de la mitigación).

## 8.2 Las 5 estrategias — amenazas

| Estrategia | Cuándo | Ejemplo |
|---|---|---|
| **Aceptar** | probabilidad e impacto bajos | registrar y **monitorear** — aceptar no es ignorar |
| **Evitar** | probabilidad e impacto altos | extender el plazo cuando el proveedor siempre se retrasa; reducir un alcance poco realista |
| **Transferir** | impacto alto, probabilidad baja | seguro; un tercero que asume la prueba |
| **Mitigar** | probabilidad **o** impacto altos | reducir la probabilidad (proceso, pruebas) o el impacto (plan B, reserva) |
| **Escalar** | fuera de tu autoridad | lo lleva a la dirección, que pasa a ser responsable |

## 8.3 Las 5 estrategias — oportunidades

| Estrategia | Cuándo |
|---|---|
| **Aceptar** (observar) | probabilidad e impacto bajos — no vale la pena gastar recursos |
| **Explotar** | probabilidad e impacto altos — hacerla segura (p. ej., descuento por compra de volumen) |
| **Compartir** | impacto alto, probabilidad baja — con un tercero que ayuda a que ocurra |
| **Potenciar** | agregar recursos para aumentar la probabilidad o el impacto |
| **Escalar** | fuera de tu función |

**Punto de atención:** un riesgo **positivo** es una oportunidad y merece tratamiento activo. La mayoría de los equipos solo mira las amenazas y pierde la ganancia disponible.

## 8.4 Reservas — la distinción que evita discusiones

| Tipo | Cubre | Quién la controla |
|---|---|---|
| **Contingencia** | riesgos **conocidos-desconocidos**: previstos, con respuesta planificada | el gestor del proyecto |
| **Gestión** | riesgos **desconocidos-desconocidos**: fuera del alcance previsto | la dirección |

**Ejemplos:** contingencia → 15 días extra de cronograma si falla la prueba de viabilidad · gestión → un cambio político o social que afecte el envío de mercancías.

**Análisis de reserva:** verifica si la reserva restante sigue siendo suficiente para el riesgo restante. Si vas por el 25% del proyecto y ya se consumió el 80% de la reserva, **eso es un problema** — y puede exigir una nueva línea base con aprobación de la dirección.

## 8.5 Hacer que la gestión de riesgos funcione

- **Ritmo de revisión:** incluye el riesgo en la **agenda semanal**. Esto hace al equipo proactivo en lugar de reactivo; un riesgo guardado en un cajón solo aparece cuando se convierte en problema.
- **Registro con responsable:** cada riesgo tiene un responsable nombrado, una respuesta planificada y una fecha de revisión (`templates/risk-register.md`).
- **Documentar la respuesta:** un riesgo sin respuesta escrita es un riesgo aceptado por omisión.
- **Preguntar por la oportunidad:** "¿qué podría salir **mejor** de lo previsto, y cómo aumentamos la probabilidad?"

## 8.6 Errores de medición (contaminan el análisis de riesgo y desempeño)

| Error | Qué es | Cómo aparece |
|---|---|---|
| **Sesgo de confirmación** | buscar solo datos que confirman tu visión | un informe que ignora la desviación negativa |
| **Correlación ≠ causalidad** | dos variables se mueven juntas, pero una no causa la otra | "los sobrecostos siempre causan retrasos" — no es una regla |
| **Metas irreales** | una meta imposible desmotiva en lugar de motivar | equipo desmotivado, datos manipulados |
| **Efecto Hawthorne** | medir cambia el comportamiento | el equipo optimiza la métrica, no el resultado |
| **Métrica equivocada** | medir lo que no importa | mucho esfuerzo, mejores decisiones ninguna |
| **Métrica de vanidad** | se ve bien en un informe, inútil para decidir | números que impresionan a la dirección y no cambian nada |

**Contramedida práctica:** antes de elegir una métrica, pregunta *"¿qué decisión cambia esta métrica?"*. Si ninguna, no la recojas.

## 8.7 Lista de verificación de revisión de riesgos

- [ ] ¿Los riesgos están registrados con causa, efecto y responsable?
- [ ] ¿Probabilidad e impacto usan la **misma escala** para todos?
- [ ] ¿Se evaluaron los riesgos **residuales** después de las respuestas?
- [ ] ¿Hay al menos una **oportunidad** tratada activamente?
- [ ] ¿La reserva de contingencia sigue cubriendo el riesgo restante?
- [ ] ¿Las respuestas son realistas, costo-eficientes y acordadas con las partes?
- [ ] ¿El riesgo está en la agenda semanal y en la revisión mensual?
- [ ] ¿Los riesgos fuera de mi autoridad se escalaron por escrito?
