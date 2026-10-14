---
title: Tarjeta de experimento
summary: Salida estándar del modo "diagnóstico de cuello de botella". Una variable, una métrica, un plazo y una regla de parada obligatoria.
uso: Siempre que el diagnóstico señale un eslabón roto. Una tarjeta a la vez.
---

# Tarjeta de experimento

> **Regla:** una tarjeta = **una** variable. Si cambias dos cosas, no sabrás cuál funcionó. La **regla de parada es obligatoria** — sin ella, el experimento se convierte en un hábito.

---

```
ESLABÓN DEL DIAGNÓSTICO:  [1 alcance | 2 calidad | 3 conversión | 4 capacidad | 5 retención]

HIPÓTESIS:
  Si cambio [CAMBIO ÚNICO Y CONCRETO],
  entonces [MÉTRICA] pasa de [VALOR ACTUAL] a [VALOR META],
  porque [RAZÓN BASADA EN EVIDENCIA].

UNA VARIABLE:
  Lo único que cambia:
  Lo que se mantiene igual (para no contaminar):

MEDICIÓN:
  Qué se cuenta:              [métrica exacta]
  Quién la cuenta:            [nombre]
  Dónde se registra:          [sistema/hoja de cálculo]
  Frecuencia de lectura:      [diaria | semanal]

PLAZO:
  Inicio:                     [fecha]
  Fin:                        [fecha]
  Punto de control:           [fecha intermedia]

REGLA DE PARADA (obligatoria):
  Me detengo y no insisto si: [criterio objetivo]

COSTO:
  Tiempo:                     [horas]
  Dinero:                     [monto o R$ 0]

EVIDENCIA NECESARIA (se degrada sin ella):
  ☐ número de cliente   ☐ prueba autorizada   ☐ datos propios verificables

RESULTADO (completar al final):
  Fecha:                      [fecha]
  Valor medido:               [valor]
  Lectura:                    ☐ funcionó  ☐ no funcionó  ☐ no concluyente
  Decisión:                   ☐ mantener  ☐ revertir  ☐ escalar  ☐ nueva prueba
```

---

## Cómo escribir una buena hipótesis

| Mala | Buena |
|---|---|
| "Voy a mejorar el correo" | "si cambio el asunto por el número que ellos mencionaron, la tasa de respuesta pasa de 4% a 8%" |
| "Voy a prospectar más" | "si envío 30 contactos por semana al segmento X, obtendré 6 respuestas en 3 semanas" |
| "Voy a mejorar el precio" | "si presento los 3 niveles con el recomendado marcado, la tasa de cierre pasa de 15% a 25%" |

## Errores que invalidan el experimento
- cambiar dos variables a la vez
- no definir el valor **actual** antes de empezar (sin línea base, no hay lectura)
- un plazo tan largo que el contexto cambia en el medio
- sin regla de parada — la prueba se convierte en una rutina permanente sin conclusión
- leer el resultado con sesgo de confirmación (ver solo lo que confirma la hipótesis)
