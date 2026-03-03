const fs = require('fs');
const path = require('path');

const packageJsonPath = require.resolve('country-flag-icons/package.json');
const packageRoot = path.dirname(packageJsonPath);
const flagsDir = path.join(packageRoot, '3x2');

const sampleFlags = fs
  .readdirSync(flagsDir)
  .filter((file) => file.endsWith('.svg'))
  .slice(0, 5);

console.log('Dependency installiert: country-flag-icons');
console.log('Bilder-Verzeichnis:', flagsDir);
console.log('Beispiel-Bilddateien:', sampleFlags.join(', '));
