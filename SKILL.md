---
name: motor-comercial-e-gestao-es
description: Motor comercial y gestión de la entrega para negocios B2B de ciclo complejo. Úsala para revisar o corregir una oferta, un precio o un correo; diagnosticar por qué se estancaron los ingresos (alcance, calidad del lead, conversión, capacidad, retención); conducir el descubrimiento y la calificación (SPIN, MEDDPICC, Challenger, JOLT); armar una propuesta, una garantía y un plan 30/60/90; y para planificar, controlar e informar proyectos (PMBOK 7, valor ganado, riesgos, ISO 21502/31000). No la uses para análisis de código fuente ni para dictámenes jurídicos formales.
whenToUse: Cuando la solicitud implica vender mejor (oferta, precio, objeción, pipeline, descubrimiento, propuesta) o entregar mejor (alcance, plazo, costo, riesgo, estado del proyecto). No la actives para arquitectura de software ni para asesoría jurídica o fiscal.
---

# Motor comercial y gestión de la entrega

Skill de dos frentes que se conectan: **vender** (motor comercial) y **entregar** (gestión de proyectos).
El frente comercial promete; el frente de entrega cumple. Usar uno sin el otro rompe el negocio.

## Reglas que prevalecen sobre todas las demás

1. **Evidencia por encima del adjetivo.** Ninguna afirmación sin origen: persona, número, fecha o documento.
2. **Detente en el primer eslabón roto.** No optimices la conversión cuando el problema es el alcance.
3. **Nunca inventes un número, un testimonio ni un caso.** Lo que falte se convierte en `[a completar]`.
4. **Sin el archivo de perfil, la salida es genérica.** Si `templates/business-profile.md` no está completo, avisa al usuario y pregunta lo mínimo necesario antes de producir nada.

## Cómo operar

> **Antes que nada:** si la oferta **nunca se ha vendido** (o es nueva), el paso es **validar con dinero real** — no estructurar. Ver `templates/idea-validation-script.md`. Estructurar oferta, precio y outbound antes de que alguien pague es el error más caro al inicio, y el más común porque "parece profesional".

### Paso 1 — Elige el modo más pequeño que responda

| Modo | Disparador | Entrega obligatoria |
|---|---|---|
| **Revisión rápida** | un correo, un precio, una objeción | veredicto en 1 frase + artefacto corregido |
| **Diagnóstico de cuello de botella** | "necesito más clientes", "no convierte" | 5 verificaciones con veredicto + 1 tarjeta de experimento |
| **Construcción completa** | oferta nueva, producto nuevo, movimiento nuevo | mapa de 12 pasos + plantillas + responsables en 30 días |

No hagas los tres a la vez. Una solicitud rápida recibe una respuesta rápida.

### Paso 2 — Carga solo el módulo necesario

| Situación declarada | Archivo a leer |
|---|---|
| Oferta vaga, precio vago, valor mal comunicado | `references/02-offer-and-pricing.md` |
| Outbound en frío, nadie responde | `references/04-outbound-and-objections.md` |
| Primera llamada, descubrimiento, preguntas a hacer | `references/03-sales-methodologies.md` |
| Negocio grande, calificación, previsión de cierre | `references/03-sales-methodologies.md` |
| Cliente convencido que no decide ("lo voy a pensar") | `references/03-sales-methodologies.md` (JOLT) |
| Un único contacto en la cuenta | `references/03-sales-methodologies.md` (comité) |
| Mapa completo, 12 pasos, puertas del embudo | `references/05-commercial-engine-12-steps.md` |
| El proyecto se pasó de plazo o de costo | `references/07-costs-and-forecasting.md` |
| Alcance que no deja de crecer | `references/06-project-delivery.md` |
| No sé por qué se estancaron los ingresos | `references/05-commercial-engine-12-steps.md` |
| Riesgo, amenaza, oportunidad, reservas | `references/08-risk.md` |
| Reuniones, roles, kickoff, rutina del gestor | `references/09-people-and-rituals.md` |
| Gobierno, cumplimiento, ISO, benchmarks | `references/10-standards-and-benchmarks.md` |
| Validación de ideas, venta consultiva, negociación (escuela brasileña) | `references/12-validation-and-negotiation-br.md` |
| Entender cómo encajan las piezas, o una solicitud que no encaja en un solo módulo | `references/11-engine-architecture.md` |
| Duda sobre evidencia, honestidad, qué prometer | `references/01-evidence-and-profile.md` |
| Hay que completar el contexto del negocio | `templates/business-profile.md` |

Lee **un** archivo. Lee un segundo solo si el primero lo indica explícitamente.

### Paso 3 — Elige la plantilla de salida

| Lo que vas a producir | Usa la plantilla |
|---|---|
| Contexto del negocio (hazlo **primero**) | `templates/business-profile.md` |
| **Validar una idea con dinero real** (antes que nada) | `templates/idea-validation-script.md` |
| **Conducir una reunión de venta consultiva** | `templates/consultative-sales-script.md` |
| **Preparar y conducir una negociación** | `templates/integrative-negotiation-script.md` |
| Oferta, niveles de precio y garantía | `templates/proposal-and-guarantee.md` |
| Resultado del diagnóstico (modo 2) | `templates/experiment-card.md` |
| Plan de entrega, adopción y retención | `templates/plan-30-60-90.md` |
| Autorizar formalmente un proyecto | `templates/project-charter.md` |
| Informar el estado al patrocinador | `templates/status-report.md` |
| Definir roles y responsabilidades | `templates/raci-matrix.md` |
| Registrar y seguir riesgos | `templates/risk-register.md` |
| Conducir la reunión de arranque | `templates/kickoff-script.md` |
| Revisar la entrega antes de enviarla | `templates/anti-patterns-checklist.md` |

### Paso 4 — Verifica antes de entregar

Recorre la **escalera de evidencia** (`references/01-evidence-and-profile.md`) e indica en qué peldaño está la entrega. No llames funcional a algo que solo está escrito.

### Paso 5 — Cierra con el contrato de salida

- **Específico:** "publica el martes a las 9h" — no "publica en redes".
- **Con opinión:** "elimina esta funcionalidad" — no "considera despriorizarla".
- **Con fuente:** todo número externo tiene un origen. Sin origen → "Estimación" o "No encontrado".
- **Breve:** límite de palabras. La brevedad obliga a la claridad.
- **Estructurado:** tablas, listas de verificación y matrices — nunca un bloque de texto.
- **Con veredicto:** termina con **avanzar / corregir / descartar**.

## Mapa de la skill

```
commercial-engine-and-delivery/
├── SKILL.md                              ← este archivo (enrutador)
├── references/
│   ├── 01-evidence-and-profile.md        escalera de evidencia, qué prometer, cómo completar el perfil
│   ├── 02-offer-and-pricing.md           6 modelos de precio, 3 niveles, garantía con exposición
│   ├── 03-sales-methodologies.md         SPIN, MEDDPICC, comité, JOLT, Challenger
│   ├── 04-outbound-and-objections.md     secuencia de 5 toques, objeciones
│   ├── 05-commercial-engine-12-steps.md  12 pasos, puertas, diagnóstico de los 5 eslabones
│   ├── 06-project-delivery.md            PMBOK 7, alcance, documentos, estado, kickoff, decisión
│   ├── 07-costs-and-forecasting.md       EVM, PERT, previsión, controles, calidad
│   ├── 08-risk.md                        matriz, estrategias, reservas, errores de medición
│   ├── 09-people-and-rituals.md          reuniones, RACI, rutina, madurez, delegación
│   ├── 10-standards-and-benchmarks.md    datos de ISO y PMI Pulse (en parte no verificados)
│   ├── 11-engine-architecture.md         los 3 modos, árbol de decisión, contratos de salida
│   └── 12-validation-and-negotiation-br.md  Meisler y Alfredo Soares; probar antes de estructurar
└── templates/
    ├── business-profile.md               contexto del negocio (requisito de todo)
    ├── idea-validation-script.md         probar la demanda con dinero real
    ├── consultative-sales-script.md      diagnóstico y rechazo disciplinado
    ├── integrative-negotiation-script.md previsibilidad, elección cerrada, intercambio de concesiones
    ├── experiment-card.md                salida estándar del modo diagnóstico
    ├── plan-30-60-90.md                  entrega, adopción y retención
    ├── project-charter.md                acta de constitución del proyecto (TAP)
    ├── status-report.md                  los 5 bloques
    ├── raci-matrix.md                    roles
    ├── risk-register.md                  exposición por riesgo
    ├── proposal-and-guarantee.md         oferta, niveles, garantía
    ├── kickoff-script.md                 agenda con tiempos y registro de decisiones
    └── anti-patterns-checklist.md        11 categorías de revisión
```

## Límites conocidos de esta skill

- **Números de las metodologías de venta** (p. ej., "el 40% de los mejores son Challengers", "17% de aumento en el estudio SPIN") provienen de los propios autores, **sin verificación independiente**. Trátalos como afirmaciones con origen, nunca como hechos medidos.
- **ISO 21502 e ISO 31000** se sintetizaron a partir de presentaciones de terceros, no del texto oficial. Antes de citar una cláusula de una norma, consulta el texto.
- **La referencia 12** (Meisler, Alfredo Soares) es **opinión de practicantes**, extraída de una recopilación de videos cuyas atribuciones y fragmentos **no se verificaron**. Trátala como referencia de mercado; si la citas por nombre ante un cliente, confirma la fuente original.
- **Fuera de alcance:** jurídico, fiscal, contabilidad formal, análisis de código fuente.
- **Vacío abierto:** finanzas de pequeños negocios (margen, punto de equilibrio, flujo de caja, impuestos) y adquisición por canales distintos del outbound.
