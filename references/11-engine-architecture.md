---
title: Arquitectura del motor comercial
summary: Cómo se ensambla el motor — los tres modos, el árbol de decisión por situación, el diagnóstico antes de concluir y los contratos de salida. Incluye la decisión de alcance de la skill.
---

# 11. Arquitectura del motor comercial

> Este es el "plano" que une todos los demás archivos. Léelo cuando necesites entender **cómo se conectan las piezas**, o cuando la solicitud no encaje claramente en un único módulo.

## 11.1 La arquitectura en 4 etapas

```
1. ELEGIR EL MODO              2. CARGAR SOLO LO NECESARIO
   revisión · diagnóstico ·       árbol de decisión por situación
   construcción completa          apunta a 1 módulo
              ↓                              ↓
3. DIAGNOSTICAR ANTES DE       4. CONTRATO DE SALIDA
   CONCLUIR                        veredicto · diagnóstico · plan
   alcance → calidad del lead
   → conversión → capacidad → retención
   "detente en el primer eslabón roto"
```

## 11.2 Árbol de decisión por situación

| Situación declarada | Módulo a cargar |
|---|---|
| Oferta o precio vago | oferta y precio (`references/02-*`) |
| Outbound en frío, sin respuestas | outbound + secuencia de 5 toques (`references/04-*`) |
| Primera llamada | descubrimiento SPIN + guion de llamada (`references/03-*`) |
| Negocio grande | ficha MEDDPICC (`references/03-*`) |
| Negocio estancado | JOLT + biblioteca de objeciones (`references/03-*`, `references/04-*`) |
| Un único contacto | multithreading + mapa del comité (`references/03-*`) |
| "Necesito más clientes" | diagnóstico de los 5 eslabones (`references/05-*`) |
| Oferta o jugada nueva | mapa de 12 pasos (`references/05-*`) |

## 11.3 Diagnosticar antes de concluir

**Orden obligatorio, sin saltos:**

```
Alcance → Calidad del lead → Conversión → Capacidad → Retención
```

**"Detente en el primer eslabón roto."** Optimizar la conversión cuando el problema es el alcance es un desperdicio de esfuerzo y credibilidad. Cada eslabón limita a los que siguen — no hay atajo.

## 11.4 Contratos de salida

| Modo | Salida obligatoria | Dónde está la plantilla |
|---|---|---|
| **Revisión rápida** | veredicto en una frase + artefacto corregido | — (la salida es el propio artefacto) |
| **Diagnóstico de cuello de botella** | diagnóstico por eslabón + **1** tarjeta de experimento | `templates/experiment-card.md` |
| **Construcción completa** | plan + plantillas + responsables y fechas en 30 días | `templates/plan-30-60-90.md` |

## 11.5 Activos del motor (inventario de referencia)

El motor original se diseñó con este inventario. Úsalo como objetivo de completitud:

| Activo | Cantidad de referencia | Estado en esta skill |
|---|---|---|
| Referencias | 17 | **12** archivos de referencia (consolidados) |
| Plantillas | 9 | **13** plantillas |
| Scripts operativos | 3 | **3** scripts completos (validación, venta consultiva, negociación) |
| Biblioteca de objeciones | 15 objeciones | estructura + 7 objeciones catalogadas (`references/04-*`) |
| Listas de verificación | 2 | lista de antipatrones + listas por módulo |
| Ejemplos anotados | 2 | 1 ejemplo calibrado (§11.6) |

> **Vacío declarado:** la biblioteca completa de 15 objeciones y los 2 ejemplos anotados del diseño original **no fueron reproducidos**, porque las fuentes disponibles no los contenían. Quedan registrados como próximo paso.

## 11.6 Ejemplo calibrado — revisión rápida

**Solicitud:** *"mi cliente dice que R$ 12.000 al año es caro. ¿Qué respondo?"*

**Modo:** revisión rápida. **Módulos:** objeciones + valor (MEDDPICC M) + JOLT T.

> **Veredicto:** esto no es una objeción de precio — es **valor no cuantificado**. Nunca pusiste un número en la balanza.
>
> **Qué hacer, en este orden:**
> 1. No defiendas el precio. Un número absoluto sin comparación siempre parece caro.
> 2. Vuelve al dolor y cuantifícalo: *"¿cuántas horas por semana gasta tu equipo emitiendo facturas a mano?"* → horas × costo/hora × 52 = **su número**.
> 3. Trae una prueba de un cliente del mismo tamaño — **con autorización**.
> 4. Si aun así duda, es **riesgo**, no precio: ofrece una salida, no un descuento (JOLT, T).
> 5. Revisa los niveles: quizá ofreciste el nivel completo a quien necesita el esencial.
>
> **Evidencia necesaria:** su número de dolor + un caso autorizado. **Sin ambos, no respondas.**
>
> **Trampa:** "te consigo un descuento" — destruye el ancla y no resuelve la causa.

## 11.7 Decisión de alcance de la skill

Esta skill cubre **dos frentes** con un solo enrutador. La decisión fue deliberada:

- **Frente comercial:** se activa con pedidos sobre vender, fijar precios, prospectar, negociar.
- **Frente de entrega:** se activa cuando el tema es cronograma, costo, alcance, riesgo, estado.
- **El enrutador:** el `SKILL.md` decide por la situación declarada, no por el historial.

**Por qué unir los dos:** el motor comercial promete y la entrega de proyectos cumple. Separados, el primero vende lo que el segundo no puede sostener — que es exactamente lo que producen el efecto bola de nieve y la falta de traspaso (ver `references/06-project-delivery.md` y `templates/plan-30-60-90.md`).

**Alternativa considerada y descartada:** dos skills separadas con lectura cruzada. Descartada porque el punto de fallo más común está precisamente en la **frontera** entre vender y entregar.
