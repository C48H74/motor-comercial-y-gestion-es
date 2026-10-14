---
title: Costos, previsión y calidad
summary: Fórmulas del valor ganado (PV/EV/AC, SV, CV, SPI, CPI, EAC, ETC, VAC, TCPI), PERT y desviación estándar, 4 perspectivas de previsión, 7 pasos de control y costo de la calidad.
---

# 7. Costos, previsión y calidad

## 7.1 Valor ganado — las tres magnitudes

| Sigla | Nombre | Qué es, en una frase |
|---|---|---|
| **PV** | Valor planificado | cuánto trabajo **estaba programado** para estar hecho a la fecha |
| **EV** | Valor ganado | cuánto trabajo se **completó de hecho** |
| **AC** | Costo real | cuánto **costó** el trabajo completado |

**Lectura simple:** PV = cuánto trabajo planifiqué hacer · EV = cuánto trabajo se hizo · AC = cuánto costó lo que se hizo.

## 7.2 Las fórmulas

```
Variación de cronograma    SV  = EV − PV        > 0 adelantado    | < 0 atrasado     | = 0 a tiempo
Desempeño de cronograma    SPI = EV / PV        > 1 adelantado    | < 1 atrasado     | = 1 a tiempo
Variación de costo         CV  = EV − AC        > 0 bajo presupuesto | < 0 sobre presupuesto
Desempeño de costo         CPI = EV / AC        > 1 bajo presupuesto | < 1 sobre presupuesto
```

**Lectura en el gráfico** (costo en el eje Y, tiempo en el eje X):
- **Curva EV por debajo** de la **curva PV** → **atrasado** (se ganó menos trabajo del planificado)
- **Curva EV por debajo** de la **curva AC** → **sobre presupuesto** (se ganó menos de lo que se gastó)

**Cuidado con un error de signo frecuente:** material de calidad dudosa invierte SV y CV. La convención correcta es la de la tabla: **EV − PV** y **EV − AC**.

## 7.3 Previsión — 4 perspectivas y las siglas

| Perspectiva | Responde |
|---|---|
| **Plan** (línea base) | ¿qué nos propusimos entregar? |
| **Real** | ¿qué pasó de verdad? |
| **Pronóstico** | ¿hacia dónde vamos? |
| **EAC** | ¿cuál será el resultado total? |

```
ETC  = Estimación para completar   → cuánto costará terminar el trabajo restante
EAC  = Estimación al completar     → costo total previsto del proyecto
VAC  = Variación al completar      → lo que queda (o falta) al final: presupuesto − EAC
TCPI = Índice de desempeño para completar → eficiencia necesaria para terminar dentro del presupuesto
```

**Flujo de 7 pasos:** recoger los datos reales → comparar con el plan → analizar las desviaciones → identificar problemas, riesgos e impactos → actualizar el pronóstico → calcular el EAC → **tomar medidas**.
Sin el último paso, lo demás es solo informe.

**Las 7 medidas de previsión que el informe debe contener:** posición actual · ETC · EAC · fecha prevista de término · riesgos restantes · cambios aprobados · **rango de confianza**.

## 7.4 Qué hace confiable un pronóstico (y qué lo ciega)

**5 obstáculos:**
1. datos desactualizados
2. optimismo excesivo
3. supuestos no resueltos
4. falta de datos reales
5. dependencias desconocidas

**Qué lo hace confiable:** datos actuales y completos · trabajo realista que refleje la realidad · riesgos conocidos, visibles e incluidos · cambios registrados formalmente · supuestos documentados y probados · **rango de confianza transparente, nunca un número único**.

## 7.5 Estimación — PERT y técnicas

```
PERT:               E  = (O + 4M + P) / 6
Desv. estándar:     σ  = (P − O) / 6
Varianza:           σ²
```
`O` = optimista · `M` = más probable · `P` = pesimista.

**Ejemplo resuelto:** O = 11, M = 15, P = 19
```
E = (11 + 4×15 + 19) / 6 = (11 + 60 + 19) / 6 = 90 / 6 = 15 días
σ = (19 − 11) / 6 = 1,33
Varianza = σ² = (8/6)² ≈ 1,78   (con σ redondeado a 1,33: 1,77)
→ "15 días ± 1,33"
```

**Otras técnicas:** análoga (trabajos pasados similares) · paramétrica (costo por unidad × cantidad) · de tres puntos · relativa (planning poker, Fibonacci, tallas de camiseta) · de flujo (tiempo de ciclo y rendimiento).

**Precisión × exactitud:** la exactitud es dar en el blanco; la precisión es agrupar los disparos. Puedes ser preciso y estar equivocado — cuatro dardos agrupados fuera del blanco. Una estimación "exacta" con alta incertidumbre es solo una falsa sensación de control.

**Regla:** presenta siempre un rango, nunca un número único. Un número único es una promesa que no hiciste.

## 7.6 Ciclo de control de desempeño (ilustrativo)

Una secuencia práctica de control usada en muchos proyectos. **No es la estructura del PMBOK 7**, que organiza el trabajo en dominios de desempeño (§6.2). En la 6.ª edición, los pasos de planificación, ejecución y monitoreo correspondían a grupos de procesos. La última columna indica a qué dominio de la 7.ª edición corresponde cada paso.

| # | Paso | Qué ocurre | Dominio PMBOK 7 |
|---|---|---|---|
| 1 | **Planificación** | define alcance, cronograma, costos, recursos; establece la línea base | Planificación |
| 2 | **Ejecución** | realiza el trabajo, produce entregables y comunicaciones | Trabajo del proyecto · Entrega |
| 3 | **Monitoreo** | sigue el avance y el desempeño, identifica problemas, actualiza registros | Medición |
| 4 | **Análisis de variaciones** | línea base vs. real; causa raíz; evalúa impactos | Medición |
| 5 | **Acciones correctivas** | desarrolla opciones, implementa, actualiza el plan, comunica | Trabajo del proyecto · Incertidumbre |
| 6 | **Pronóstico** | estima EAC y ETC, predice la finalización, actualiza riesgos y recursos | Medición · Incertidumbre |
| 7 | **Éxito del proyecto** | objetivos logrados, estándares de calidad, satisfacción de las partes, lecciones | Entrega · Medición |

## 7.7 Calidad — costo de la calidad

| Categoría | Ejemplos | Cuándo ocurre |
|---|---|---|
| **Prevención** | capacitación, plan de calidad, especificaciones robustas | antes |
| **Evaluación** | inspección, auditoría, pruebas, controles dimensionales | durante |
| **Fallo interno** | desperdicio, chatarra, retrabajo, análisis de fallos | antes de llegar al cliente |
| **Fallo externo** | devoluciones, retiradas, reclamos de garantía, daño reputacional | después de llegar al cliente |

**La curva del costo del cambio:** un defecto detectado tarde cuesta mucho más (ya se construyó encima). **Consecuencia práctica:** incorporar la calidad en el proceso e **involucrar a calidad temprano**, en la fase de diseño — no en la inspección final.

**Cómo optimizar:** inspeccionar y revisar **mientras** se hace el trabajo, y probar al inicio del ciclo para evitar retrabajos, retrasos y sobrecostos.

## 7.8 Lista de verificación de salud de costo y cronograma

- [ ] ¿Existe una línea base aprobada (alcance, cronograma, costo)?
- [ ] ¿PV, EV y AC están actualizados **a la misma fecha de corte**?
- [ ] ¿Se calcularon e interpretaron SPI y CPI?
- [ ] ¿ETC, EAC y VAC están en la versión más reciente?
- [ ] ¿El pronóstico tiene un **rango de confianza**, no un número único?
- [ ] ¿Las reservas (contingencia y de gestión) siguen siendo suficientes para el riesgo restante?
- [ ] ¿Los cambios aprobados se reflejan en las líneas base?
- [ ] ¿Hay una acción definida para cada desviación fuera del límite?
