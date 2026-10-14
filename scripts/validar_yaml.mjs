// Valida el frontmatter con el parser YAML real (paquete "yaml"). Uso:
//   npm install yaml        (una vez, en la carpeta de este script)
//   node validar_yaml.mjs [ruta-de-la-skill]
// Sin argumento, la skill se busca igual que en validar_skill.mjs.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
let YAML;
try {
  YAML = require('yaml');
} catch {
  console.log("Paquete 'yaml' no encontrado. Ejecuta 'npm install yaml' en la carpeta de este script.");
  process.exit(2);
}

const SKILL_NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const candidatos = [process.argv[2], scriptDir, path.join(scriptDir, 'skill'), path.resolve('skill'), path.resolve('.')].filter(Boolean);
const root = path.resolve(candidatos.find((c) => fs.existsSync(path.join(path.resolve(c), 'SKILL.md'))) ?? candidatos[0]);
console.log('raíz: ' + root);

function parseFrontmatter(texto) {
  const m = texto.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!m) return null;
  return { data: YAML.parse(m[1]), body: texto.slice(m[0].length) };
}

let errores = 0;
let avisos = 0;
const checar = (etiqueta, texto, exigirNombreDescripcion) => {
  let fm;
  try { fm = parseFrontmatter(texto); }
  catch (e) { console.log('  ERROR ' + etiqueta + ': YAML inválido -> ' + String(e.message).split('\n')[0]); errores++; return; }
  if (!fm) { console.log('  ERROR ' + etiqueta + ': sin frontmatter'); errores++; return; }
  if (typeof fm.data !== 'object' || fm.data === null) { console.log('  ERROR ' + etiqueta + ': el frontmatter no es un objeto'); errores++; return; }
  const problemas = [];
  if (exigirNombreDescripcion) {
    if (typeof fm.data.name !== 'string') problemas.push('name no es texto');
    else if (!SKILL_NAME.test(fm.data.name)) problemas.push('name no cumple el patrón');
    if (typeof fm.data.description !== 'string' || fm.data.description.trim() === '') problemas.push('description vacía o ausente');
    if (fm.data.whenToUse !== undefined && typeof fm.data.whenToUse !== 'string') problemas.push('whenToUse no es texto');
  }
  if (problemas.length) { console.log('  ERROR ' + etiqueta + ': ' + problemas.join('; ')); errores++; }
  else console.log('  OK    ' + etiqueta.padEnd(42) + ' claves: ' + Object.keys(fm.data).join(', '));
};

console.log('\n=== SKILL.md ===');
checar('SKILL.md', fs.readFileSync(path.join(root, 'SKILL.md'), 'utf8'), true);

console.log('\n=== references/ y templates/ ===');
for (const sub of ['references', 'templates']) {
  const dir = path.join(root, sub);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.md')).sort())
    checar(sub + '/' + f, fs.readFileSync(path.join(dir, f), 'utf8'), false);
}

console.log('\n=== caracteres invisibles en el frontmatter de SKILL.md ===');
const bruto = fs.readFileSync(path.join(root, 'SKILL.md'), 'utf8');
const fmBruto = bruto.match(/^---\r?\n([\s\S]*?)\r?\n---/);
// Solo caracteres invisibles reales. Los acentos (á, ñ, ç...) son normales en español y portugués.
const INVISIBLES = /[ ­​-‏‪-‮⁠﻿]/g;
const hallados = fmBruto ? [...fmBruto[1].matchAll(INVISIBLES)].map((m) => 'U+' + m[0].charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')) : [];
if (hallados.length) { console.log('  AVISO caracteres invisibles: ' + [...new Set(hallados)].join(', ')); avisos++; }
else console.log('  OK    ningún carácter invisible en el frontmatter');

console.log(`\nRESULTADO: ${errores === 0 ? 'frontmatter compatible con el parser YAML' : errores + ' error(es)'}; avisos: ${avisos}`);
process.exit(errores === 0 ? 0 : 1);
