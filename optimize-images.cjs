const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToOptimize = [
  {
    input: 'src/assets/products/android-ted.png',
    output: 'src/assets/products/android-ted.webp',
    quality: 80
  },
  {
    input: 'src/assets/products/ares-v.png',
    output: 'src/assets/products/ares-v.webp',
    quality: 80
  },
  {
    input: 'src/assets/products/wifi-halow.png',
    output: 'src/assets/products/wifi-halow.webp',
    quality: 80
  },
  {
    input: 'src/assets/products/zeus-5g.png',
    output: 'src/assets/products/zeus-5g.webp',
    quality: 80
  },
  {
    input: 'src/assets/BannerImg.png',
    output: 'src/assets/BannerImg.webp',
    quality: 85
  }
];

async function optimizeImages() {
  for (const img of imagesToOptimize) {
    try {
      const inputPath = path.join(__dirname, img.input);
      const outputPath = path.join(__dirname, img.output);

      if (!fs.existsSync(inputPath)) {
        console.log(`Skipping ${img.input} - file not found`);
        continue;
      }

      const inputStats = fs.statSync(inputPath);
      const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);

      await sharp(inputPath)
        .webp({ quality: img.quality })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
      const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✓ ${img.input}`);
      console.log(`  ${inputSizeMB}MB → ${outputSizeMB}MB (${reduction}% smaller)`);
    } catch (err) {
      console.error(`Error processing ${img.input}:`, err.message);
    }
  }
  console.log('\nDone! Now update imports in your components.');
}

optimizeImages();
