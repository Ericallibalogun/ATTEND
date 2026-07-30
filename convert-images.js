const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

async function convertImages() {
  try {
    const files = fs.readdirSync(publicDir);
    
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const inputPath = path.join(publicDir, file);
        const parsedPath = path.parse(file);
        const outputPath = path.join(publicDir, `${parsedPath.name}.webp`);
        
        console.log(`Converting ${file} to ${parsedPath.name}.webp...`);
        
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        // Delete original file to save space
        fs.unlinkSync(inputPath);
        console.log(`Deleted original file: ${file}`);
      }
    }
    
    console.log('Successfully converted all images to .webp');
  } catch (error) {
    console.error('Error converting images:', error);
  }
}

convertImages();
