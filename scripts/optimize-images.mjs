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
/*
  Compose the 4:5 crop around the subject instead of the frame.

  A luminance-weighted centroid of the source (it is a low-key shot, so the lit
  face is the only bright region) puts the face at x=0.524, y=0.324. Cropping
  the full frame height therefore left the face at 32% from the top, which
  reads as top-heavy rather than centred. Cropping to 820px of height instead
  places it at ~40% — the conventional portrait eyeline — and centring the crop
  on the measured x keeps it horizontally true.
*/
const FACE_X = 0.5237;
const FACE_Y = 0.3235;
const FACE_FROM_TOP = 0.42; // where the face should sit in the final frame

const faceX = Math.round(meta.width * FACE_X);
const faceY = Math.round(meta.height * FACE_Y);

const cropH = 820;
const cropW = Math.round((cropH * 4) / 5);
const left = Math.min(Math.max(faceX - Math.round(cropW / 2), 0), meta.width - cropW);
const top = Math.min(Math.max(faceY - Math.round(cropH * FACE_FROM_TOP), 0), meta.height - cropH);

console.log(
  `crop          : ${cropW}x${cropH} at (${left},${top}) — face at ` +
    `${(((faceX - left) / cropW) * 100).toFixed(1)}% x, ${(((faceY - top) / cropH) * 100).toFixed(1)}% y`,
);

for (const width of [560, 1120]) {
  const suffix = width === 560 ? '' : '@2x';
  const file = path.join(OUT, `portrait${suffix}.webp`);
  const info = await sharp(SOURCE)
    .extract({ left, top, width: cropW, height: cropH })
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
  .extract({ left, top, width: cropW, height: cropH })
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
