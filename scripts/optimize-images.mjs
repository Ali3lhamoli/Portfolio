/**
 * One-off asset pipeline.
 *
 * The repo shipped ~4.8MB of unoptimized PNGs (a 1.7MB hero background and a
 * 1.5MB favicon). This script derives web-sized WebP portraits, a social
 * share card and an apple-touch-icon from the source photo.
 *
 * Run with: npm run images
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const PUBLIC = path.resolve('public');
const SOURCE = path.join(PUBLIC, 'aliblack.png');
const OUT = path.join(PUBLIC, 'img');

const INK = '#f3efe4';
const ACCENT = '#2dd4bf';
const BG = '#0e0e0e';

await mkdir(OUT, { recursive: true });

const meta = await sharp(SOURCE).metadata();
console.log(`source: ${meta.width}x${meta.height} (${(meta.size / 1024 / 1024).toFixed(2)}MB)`);

/* ---------------------------------------------------------------- portrait */
// The face sits slightly right of centre in the source frame, so the 4:5
// portrait crop is anchored there rather than dead centre.
const cropH = meta.height;
const cropW = Math.round((cropH * 4) / 5);
const left = Math.min(
  Math.max(Math.round(meta.width * 0.54 - cropW / 2), 0),
  meta.width - cropW,
);

for (const width of [560, 1120]) {
  const suffix = width === 560 ? '' : '@2x';
  const file = path.join(OUT, `portrait${suffix}.webp`);
  const info = await sharp(SOURCE)
    .extract({ left, top: 0, width: cropW, height: cropH })
    .resize({ width, fit: 'cover' })
    .webp({ quality: 82, effort: 6 })
    .toFile(file);
  console.log(`portrait${suffix}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`);
}

/* ----------------------------------------------------------- social card */
const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${BG}"/>
  <text x="80" y="300" font-family="Arial, Helvetica, sans-serif" font-size="74" font-weight="700" fill="${INK}">Ali Al-Hamoli</text>
  <text x="80" y="366" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="500" fill="${ACCENT}">Full-Stack Software Engineer</text>
  <text x="80" y="428" font-family="Consolas, monospace" font-size="22" letter-spacing="3" fill="#8c8c88">CAIRO, EGYPT</text>
  <rect x="80" y="470" width="120" height="4" fill="${ACCENT}"/>
</svg>`;

const portraitForCard = await sharp(SOURCE)
  .extract({ left, top: 0, width: cropW, height: cropH })
  .resize({ width: 430, height: 630, fit: 'cover' })
  .toBuffer();

const ogInfo = await sharp(Buffer.from(card))
  .composite([{ input: portraitForCard, left: 770, top: 0, blend: 'over' }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(path.join(PUBLIC, 'og.jpg'));
console.log(`og.jpg                1200x630  ${(ogInfo.size / 1024).toFixed(0)}KB`);

/* -------------------------------------------------------- touch icon */
const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="40" fill="${BG}"/>
  <text x="90" y="118" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="700" fill="${INK}">A</text>
  <text x="128" y="118" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="700" fill="${ACCENT}">A</text>
</svg>`;

const iconInfo = await sharp(Buffer.from(icon))
  .png({ compressionLevel: 9 })
  .toFile(path.join(PUBLIC, 'apple-touch-icon.png'));
console.log(`apple-touch-icon.png  180x180   ${(iconInfo.size / 1024).toFixed(0)}KB`);

console.log('\ndone.');
