---
title: Registro de riesgos
summary: Cada riesgo con responsable, probabilidad, impacto, exposición calculada y respuesta planificada. Incluye un campo para oportunidades.
uso: Se abre en la planificación y se revisa semanalmente. Un riesgo sin responsable no se gestiona.
---

# Registro de riesgos

**Proyecto:** `[a completar]` · **Versión:** `[a completar]` · **Última revisión:** `[fecha]`

**Escala de probabilidad:** 1 Rara (<5%) · 2 Improbable (5–20%) · 3 Posible (21–50%) · 4 Probable (51–80%) · 5 Casi segura (>80%)
**Escala de impacto:** 1 Insignificante · 2 Menor · 3 Moderado · 4 Mayor · 5 Catastrófico
**Exposición = Probabilidad × Impacto** (1–25) → 🟩 1–4 · 🟨 5–9 · 🟧 10–19 · 🟥 20–25

---

## Amenazas (riesgos negativos)

| ID | Riesgo (causa → evento → efecto) | P | I | Exp. | Banda | Estrategia | Respuesta planificada | Responsable | Revisión |
|---|---|---|---|---|---|---|---|---|---|
| R-01 | `[causa]` → `[evento]` → `[efecto]` | `[1-5]` | `[1-5]` | `[cálculo]` | 🟩🟨🟧🟥 | mitigar | `[acción]` | `[nombre]` | `[fecha]` |
| R-02 | `[a completar]` | | | | | transferir | `[acción]` | `[nombre]` | `[fecha]` |
| R-03 | `[a completar]` | | | | | evitar | `[acción]` | `[nombre]` | `[fecha]` |
| R-04 | `[a completar]` | | | | | aceptar + monitorear | `[acción]` | `[nombre]` | `[fecha]` |
| R-05 | `[a completar]` | | | | | escalar | `[acción]` | `[nombre]` | `[fecha]` |

**Estrategias:** mitigar (reducir P o I) · transferir (tercero/seguro) · evitar (eliminar la causa) · aceptar + monitorear (registrar y seguir) · escalar (fuera de tu autoridad).

> **Aceptar no es ignorar.** Un riesgo aceptado va a una lista de vigilancia con fecha de revisión.

---

## Oportunidades (riesgos positivos)

| ID | Oportunidad | P | I | Exp. | Estrategia | Acción para capturarla | Responsable |
|---|---|---|---|---|---|---|---|
| O-01 | `[a completar]` | `[1-5]` | `[1-5]` | `[cálculo]` | explotar | `[acción]` | `[nombre]` |
| O-02 | `[a completar]` | | | | potenciar | `[acción]` | `[nombre]` |
| O-03 | `[a completar]` | | | | compartir | `[acción]` | `[nombre]` |

**Estrategias:** explotar (hacerla segura) · potenciar (aumentar P o I) · compartir (con un tercero) · aceptar (observar) · escalar.

> **Cada revisión de riesgos debe producir al menos una oportunidad en tratamiento.** Los equipos que solo miran amenazas pierden la ganancia disponible.

---

## Riesgos materializados (se convirtieron en problemas)

| ID | Riesgo | Fecha de materialización | Impacto real | Acción tomada | Estado |
|---|---|---|---|---|---|
| `[R-xx]` | `[a completar]` | `[fecha]` | `[a completar]` | `[a completar]` | ☐ en curso ☐ resuelto |

---

## Reservas

| Tipo | Valor asignado | Consumido | Restante | ¿Suficiente para el riesgo actual? |
|---|---|---|---|---|
| Contingencia (riesgos conocidos) | `[a completar]` | `[a completar]` | `[a completar]` | ☐ sí ☐ no |
| Gestión (desconocidos) | `[a completar]` | `[a completar]` | `[a completar]` | controlada por la dirección |

**Alerta:** si vas por el 25% del proyecto y ya se consumió el 80% de la reserva, **eso es un problema** — y puede exigir una nueva línea base con aprobación de la dirección.

---

## Respuestas planificadas — detalle de las prioritarias

### Riesgo R-01 — `[título]`
- **Causa raíz:** `[a completar]`
- **Disparador** (cómo saber que se está materializando): `[a completar]`
- **Respuesta:** `[a completar]`
- **Reserva necesaria:** `[a completar]`
- **Plan de contingencia** (si la respuesta falla): `[a completar]`
- **Exposición residual** después de la respuesta: `[a completar]`

---

## Ritual de revisión

| Cuándo | Qué se revisa |
|---|---|
| **Semanal** (punto fijo de la agenda) | riesgos activos · disparadores activados · amenazas y oportunidades nuevas · reservas |
| **Mensual** | exposición total · respuestas que no funcionaron · riesgos a cerrar o escalar |
| **En cada hito** | riesgos del próximo período · riesgos que dejaron de existir |

**Regla de oro:** un riesgo guardado en un cajón solo aparece cuando se convierte en problema. Incluir el riesgo en la agenda semanal es lo que vuelve proactivo al equipo en lugar de reactivo.

---

## Lista de calidad del registro

- [ ] ¿El riesgo describe **causa → evento → efecto**, no solo un temor vago?
- [ ] ¿Tiene un **responsable nombrado** (una persona, no un departamento)?
- [ ] ¿Probabilidad e impacto usan la **misma escala** para todos?
- [ ] ¿Se evaluó la **exposición residual** después de la respuesta?
- [ ] ¿Existe un **disparador** objetivo para los riesgos altos?
- [ ] ¿Hay al menos **una oportunidad** en tratamiento?
- [ ] ¿La reserva restante cubre el riesgo restante?
- [ ] ¿Los riesgos fuera de mi autoridad fueron **escalados por escrito**?
