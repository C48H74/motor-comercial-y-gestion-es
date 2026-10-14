// Valida la estructura de la skill. Uso:
//   node validar_skill.mjs [ruta-de-la-skill]
// Sin argumento: usa la carpeta donde está este script (si contiene ./SKILL.md) o ./skill.
// Reglas: SKILL.md tiene frontmatter YAML; name cumple ^[a-z0-9]+(?:-[a-z0-9]+)*$; description no está vacía;
// las references/templates citadas existen; cada archivo de references/templates tiene frontmatter.
// Parser simple del frontmatter (clave: valor). Para validar con el parser YAML real, usa validar_yaml.mjs.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SKILL_NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const candidatos = [process.argv[2], scriptDir, path.join(scriptDir, 'skill'), path.resolve('skill'), path.resolve('.')].filter(Boolean);
const root = path.resolve(candidatos.find((c) => fs.existsSync(path.join(path.resolve(c), 'SKILL.md'))) ?? candidatos[0]);

let errores = 0;
let avisos = 0;
const ok = (m) => console.log('  OK    ' + m);
const error = (m) => { errores++; console.log('  ERROR ' + m); };
const aviso = (m) => { avisos++; console.log('  AVISO ' + m); };

function frontmatter(texto) {
  const m = texto.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return null;
  const datos = {};
  let claveActual = null;
  for (const linea of m[1].split(/\r?\n/)) {
    const kv = linea.match(/^([A-Za-z][A-Za-z0-9_-]*):\s?(.*)$/);
    if (kv) { claveActual = kv[1]; datos[claveActual] = kv[2].trim(); }
    else if (claveActual && linea.trim()) datos[claveActual] += ' ' + linea.trim();
  }
  return { datos, cuerpo: texto.slice(m[0].length) };
}

console.log('=== 1. Estructura ===');
console.log('  raíz: ' + root);
if (!fs.existsSync(path.join(root, 'SKILL.md'))) { error('SKILL.md no encontrado en ' + root); process.exit(1); }
ok('SKILL.md presente');
for (const sub of ['references', 'templates']) {
  if (fs.existsSync(path.join(root, sub))) ok(sub + '/ presente');
  else error(sub + '/ ausente');
}

console.log('\n=== 2. Frontmatter de SKILL.md ===');
const textoSkill = fs.readFileSync(path.join(root, 'SKILL.md'), 'utf8');
const fm = frontmatter(textoSkill);
if (!fm) error('SKILL.md sin frontmatter YAML: el cargador ignora la skill');
else {
  const { datos, cuerpo } = fm;
  if (!datos.name) error('campo "name" ausente');
  else if (!SKILL_NAME.test(datos.name)) error(`name "${datos.name}" no cumple ${SKILL_NAME}`);
  else ok(`name válido: "${datos.name}"`);
  if (datos.name && path.basename(root) !== 'skill' && datos.name !== path.basename(root))
    aviso(`name ("${datos.name}") difiere del nombre de la carpeta ("${path.basename(root)}")`);
  if (!datos.description) error('campo "description" ausente o vacío');
  else if (datos.description.length < 40) aviso(`description corta (${datos.description.length} caracteres): puede no enrutar bien`);
  else ok(`description: ${datos.description.length} caracteres`);
  if (datos.whenToUse) ok(`whenToUse presente: ${datos.whenToUse.length} caracteres`);
  else aviso('whenToUse ausente (opcional)');
  console.log(`  cuerpo: ${cuerpo.trim().split(/\r?\n/).length} líneas, ${cuerpo.length} caracteres`);
  if (/^## (Limites conhecidos|Límites conocidos|Known limits)/m.test(cuerpo)) ok('sección "Límites conocidos" presente');
  else aviso('sección "Límites conocidos" ausente: la skill debería declarar lo que no se verificó');
}

console.log('\n=== 3. Archivos de references y templates ===');
const listar = (sub) => fs.existsSync(path.join(root, sub))
  ? fs.readdirSync(path.join(root, sub)).filter((f) => f.endsWith('.md')).sort() : [];
const archivos = [...listar('references').map((f) => 'references/' + f), ...listar('templates').map((f) => 'templates/' + f)];
for (const rel of archivos) {
  const f2 = frontmatter(fs.readFileSync(path.join(root, rel), 'utf8'));
  if (!f2) error(`${rel}: sin frontmatter`);
  else if (!f2.datos.title) error(`${rel}: frontmatter sin "title"`);
  else ok(`${rel}`);
}

console.log('\n=== 4. Referencias cruzadas (SKILL.md y demás archivos) ===');
const destinos = new Set();
const origenes = [['SKILL.md', textoSkill], ...archivos.map((rel) => [rel, fs.readFileSync(path.join(root, rel), 'utf8')])];
for (const [origen, texto] of origenes) {
  for (const m of texto.matchAll(/(?:references|templates)\/[a-z0-9-]+\.md/g)) {
    destinos.add(m[0]);
    if (!fs.existsSync(path.join(root, m[0]))) error(`${origen} apunta a ${m[0]}, que no existe`);
  }
}
ok(`${destinos.size} destinos internos distintos verificados`);
for (const rel of archivos) if (!destinos.has(rel)) aviso(`archivo no citado en ningún lugar: ${rel}`);

console.log('\n=== 5. Marcadores de honestidad ===');
let nCompletar = 0;
let nNoVerificado = 0;
for (const rel of archivos) {
  const txt = fs.readFileSync(path.join(root, rel), 'utf8');
  nCompletar += (txt.match(/\[a completar\]/g) || []).length;
  nNoVerificado += (txt.match(/no verificad/g) || []).length;
}
console.log(`  info  ${nCompletar} marcadores [a completar]; ${nNoVerificado} marcas "no verificado"`);

console.log('\n=== RESUMEN ===');
console.log(`  errores: ${errores}   avisos: ${avisos}`);
console.log(errores === 0 ? '  RESULTADO: estructura VÁLIDA' : '  RESULTADO: corregir los errores anteriores');
process.exit(errores === 0 ? 0 : 1);
