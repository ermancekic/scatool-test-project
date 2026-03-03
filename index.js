const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');

const sampleImages = fs
  .readdirSync(imagesDir)
  .filter((file) => /\.(png|jpg|jpeg|gif|bmp|tiff)$/i.test(file))
  .slice(0, 5);

console.log('Keine externe Bild-Dependency installiert.');
console.log('Lokales Bilder-Verzeichnis:', imagesDir);
console.log('Beispiel-Bilddateien:', sampleImages.join(', '));
