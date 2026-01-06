const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const monitorDirs = [
  'public/monitors/Network/Images',
  'public/monitors/TED/Images',
  'public/monitors/Applications/Images'
];

async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);
  const dir = path.dirname(inputPath);
  const outputPath = path.join(dir, baseName + '.webp');

  if (ext === '.webp') return; // Already optimized

  try {
    const inputStats = fs.statSync(inputPath);

    await sharp(inputPath)
      .resize(1200, 800, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(0);

    console.log(`✓ ${path.basename(inputPath)}: ${(inputStats.size/1024).toFixed(0)}KB → ${(outputStats.size/1024).toFixed(0)}KB (${reduction}% smaller)`);

    // Delete original
    fs.unlinkSync(inputPath);
  } catch (err) {
    console.error(`✗ ${path.basename(inputPath)}: ${err.message}`);
  }
}

async function processDirectory(dir) {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    console.log(`Directory not found: ${dir}`);
    return;
  }

  console.log(`\nProcessing: ${dir}`);
  const files = fs.readdirSync(fullPath);

  for (const file of files) {
    const filePath = path.join(fullPath, file);
    const ext = path.extname(file).toLowerCase();

    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      await optimizeImage(filePath);
    }
  }
}

async function main() {
  console.log('Optimizing monitor images...\n');

  for (const dir of monitorDirs) {
    await processDirectory(dir);
  }

  console.log('\n✓ Done! Remember to update config files to use .webp extensions.');
}

main().catch(console.error);
