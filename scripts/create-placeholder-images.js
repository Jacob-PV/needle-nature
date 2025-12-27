/**
 * Creates placeholder SVG images for development
 * Run with: node scripts/create-placeholder-images.js
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Create directories if they don't exist
const dirs = [
  path.join(imagesDir, 'articles'),
  path.join(imagesDir, 'authors'),
  path.join(imagesDir, 'categories'),
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// SVG template function
function createSVG(width, height, text, bgColor = '#14453d') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${bgColor}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="sans-serif" font-size="24" fill="#fcf9f4">
    ${text}
  </text>
</svg>`;
}

// Article images (1200x630)
const articles = [
  'back-pain-acupuncture',
  'migraine-acupuncture',
  'anxiety-acupuncture',
  'sleep-acupuncture',
  'headache-acupressure',
  'nausea-acupressure',
  'meridians-tcm',
  'qi-energy',
  'immune-acupuncture',
  'digestive-acupuncture',
  'arthritis-acupuncture',
  'neck-pain-acupuncture',
  'womens-health-acupuncture',
];

articles.forEach(name => {
  const svg = createSVG(1200, 630, name.replace(/-/g, ' ').toUpperCase());
  const filepath = path.join(imagesDir, 'articles', `${name}.jpg`);
  // For now, just create a .svg file - in production, replace with actual images
  const svgPath = filepath.replace('.jpg', '.svg');
  fs.writeFileSync(svgPath, svg);
  console.log(`Created: ${svgPath}`);
});

// Author images (400x400)
const authors = [
  { name: 'dr-sarah-chen', label: 'Dr. Sarah Chen' },
  { name: 'michael-rodriguez', label: 'Michael Rodriguez' },
];

authors.forEach(author => {
  const svg = createSVG(400, 400, author.label, '#7a9e94');
  const svgPath = path.join(imagesDir, 'authors', `${author.name}.jpg`).replace('.jpg', '.svg');
  fs.writeFileSync(svgPath, svg);
  console.log(`Created: ${svgPath}`);
});

// Category images (1200x630)
const categories = [
  'pain-relief',
  'mental-health',
  'acupressure',
  'tcm',
  'wellness',
];

categories.forEach(name => {
  const svg = createSVG(1200, 630, name.replace(/-/g, ' ').toUpperCase(), '#0d9488');
  const svgPath = path.join(imagesDir, 'categories', `${name}.jpg`).replace('.jpg', '.svg');
  fs.writeFileSync(svgPath, svg);
  console.log(`Created: ${svgPath}`);
});

// Site assets
const logoSVG = createSVG(200, 60, 'Needle & Nature', '#14453d');
fs.writeFileSync(path.join(imagesDir, 'logo.svg'), logoSVG);
console.log(`Created: ${path.join(imagesDir, 'logo.svg')}`);

const ogSVG = createSVG(1200, 630, 'Needle & Nature', '#14453d');
fs.writeFileSync(path.join(imagesDir, 'og-default.svg'), ogSVG);
console.log(`Created: ${path.join(imagesDir, 'og-default.svg')}`);

console.log('\n✓ All placeholder images created!');
console.log('\nNote: These are SVG placeholders. Replace with actual images for production.');
console.log('You can use free stock photos from Unsplash or Pexels.');
