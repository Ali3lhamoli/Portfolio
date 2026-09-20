/**
 * Asset pipeline. Run with: npm run images
 *
 * Sources live in assets/photos/ — outside public/, so Vite never serves the
 * originals — and everything under public/img/ is generated from them.
 *
 * Outputs:
 *   img/hero.webp                     square hero portrait
 *   img/about-bw.webp   + @2x         About portrait, greyscale (base layer)
 *   img/about-color.webp + @2x        About portrait, colour (revealed layer)
 *   og.jpg                            1200x630 social card
 *   apple-touch-icon.png              180x180
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const PHOTOS = path.resolve('assets/photos');
const PUBLIC = path.resolve('public');
const OUT = path.join(PUBLIC, 'img');

const HERO_SRC = path.join(PHOTOS, 'hero.png');
const ABOUT_SRC = path.join(PHOTOS, 'about.jpg');

const INK = '#f3efe4';
const ACCENT = '#2dd4bf';
const BG = '#0e0e0e';

await mkdir(OUT, { recursive: true });

const kb = (bytes) => `${(bytes / 1024).toFixed(0)}KB`;

/* ------------------------------------------------------------ hero portrait */
/*
  The hero source is only 400x400, which is the ceiling on how large the frame
  can go before it softens: at 384 CSS px it is effectively 1:1 on a standard
  display, but a 2x display would need 768px. No @2x is emitted because
  upscaling adds bytes without adding detail — a larger export of this photo
  is the only real fix.
*/
const heroMeta = await sharp(HERO_SRC).metadata();
const hero = await sharp(HERO_SRC).webp({ quality: 88, effort: 6 }).toFile(path.join(OUT, 'hero.webp'));
console.log(`hero source           ${heroMeta.width}x${heroMeta.height}`);
console.log(`hero.webp             ${hero.width}x${hero.height}  ${kb(hero.size)}`);

/* ----------------------------------------------------------- about portrait */
/*
  The About frame is 4:5. The source is 3:4 (3024x4032) — taller than 4:5 —
  so the crop takes the full width and trims height only; there is no
  horizontal freedom. Offsetting 150px from the top removes a band of sky
  while keeping his feet inside the frame.
*/
const aboutMeta = await sharp(ABOUT_SRC).metadata();
const aboutW = aboutMeta.width;
const aboutH = Math.round((aboutW * 5) / 4);
const aboutTop = Math.min(150, aboutMeta.height - aboutH);

console.log(
  `about source          ${aboutMeta.width}x${aboutMeta.height} -> crop ${aboutW}x${aboutH} at y=${aboutTop}`,
);

const aboutCrop = () =>
  sharp(ABOUT_SRC).extract({ left: 0, top: aboutTop, width: aboutW, height: aboutH });

/*
  The About portrait now takes a full half of the layout, rendering up to
  ~600 CSS px instead of the 288px it had when it sat in a narrow rail. 640px
  no longer covers it, so this goes to 1100: sharp at 1100 on a standard
  display and at 550 CSS px on a 2x one.

  Still one size per layer rather than a srcSet pair — a 1x/2x set at this
  scale ran to roughly 700KB across the two layers, which is not a reasonable
  price for a decorative hover.
*/
const ABOUT_W = 1100;

const colour = await aboutCrop()
  .resize({ width: ABOUT_W })
  .webp({ quality: 74, effort: 6 })
  .toFile(path.join(OUT, 'about-color.webp'));
console.log(`about-color.webp      ${colour.width}x${colour.height}  ${kb(colour.size)}`);

const grey = await aboutCrop()
  .resize({ width: ABOUT_W })
  .greyscale()
  .webp({ quality: 76, effort: 6 })
  .toFile(path.join(OUT, 'about-bw.webp'));
console.log(`about-bw.webp         ${grey.width}x${grey.height}  ${kb(grey.size)}`);

/* --------------------------------------------------------------- social card */
const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${BG}"/>
  <text x="80" y="300" font-family="Arial, Helvetica, sans-serif" font-size="74" font-weight="700" fill="${INK}">Ali Al-Hamoli</text>
  <text x="80" y="366" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="500" fill="${ACCENT}">Full-Stack Software Engineer</text>
  <text x="80" y="428" font-family="Consolas, monospace" font-size="22" letter-spacing="3" fill="#8c8c88">CAIRO, EGYPT</text>
  <rect x="80" y="470" width="120" height="4" fill="${ACCENT}"/>
</svg>`;

const cardPortrait = await sharp(HERO_SRC)
  .resize({ width: 430, height: 630, fit: 'cover', position: 'top' })
  .toBuffer();

const og = await sharp(Buffer.from(card))
  .composite([{ input: cardPortrait, left: 770, top: 0, blend: 'over' }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(path.join(PUBLIC, 'og.jpg'));
console.log(`og.jpg                1200x630  ${kb(og.size)}`);

/* ------------------------------------------------------------- touch icon */
const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="40" fill="${BG}"/>
  <text x="90" y="118" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="700" fill="${INK}">A</text>
  <text x="128" y="118" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="700" fill="${ACCENT}">A</text>
</svg>`;

const iconOut = await sharp(Buffer.from(icon))
  .png({ compressionLevel: 9 })
  .toFile(path.join(PUBLIC, 'apple-touch-icon.png'));
console.log(`apple-touch-icon.png  180x180   ${kb(iconOut.size)}`);

console.log('\ndone.');
