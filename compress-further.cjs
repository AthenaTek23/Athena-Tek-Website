const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function compressFurther() {
  // Compress android-ted more aggressively with resize
  const androidInput = path.join(__dirname, 'src/assets/products/android-ted.webp');
  const androidOutput = path.join(__dirname, 'src/assets/products/android-ted-opt.webp');

  if (fs.existsSync(androidInput)) {
    const inputStats = fs.statSync(androidInput);

    await sharp(androidInput)
      .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(androidOutput);

    const outputStats = fs.statSync(androidOutput);
    console.log(`android-ted: ${(inputStats.size/1024).toFixed(0)}KB → ${(outputStats.size/1024).toFixed(0)}KB`);

    // Replace original
    fs.unlinkSync(androidInput);
    fs.renameSync(androidOutput, androidInput);
  }

  // Also compress BannerImg if large
  const bannerInput = path.join(__dirname, 'src/assets/BannerImg.webp');
  const bannerOutput = path.join(__dirname, 'src/assets/BannerImg-opt.webp');

  if (fs.existsSync(bannerInput)) {
    const inputStats = fs.statSync(bannerInput);

    await sharp(bannerInput)
      .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(bannerOutput);

    const outputStats = fs.statSync(bannerOutput);
    console.log(`BannerImg: ${(inputStats.size/1024).toFixed(0)}KB → ${(outputStats.size/1024).toFixed(0)}KB`);

    fs.unlinkSync(bannerInput);
    fs.renameSync(bannerOutput, bannerInput);
  }

  console.log('Done!');
}

compressFurther().catch(console.error);
