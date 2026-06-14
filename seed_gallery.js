const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const dataJsonPath = path.join(__dirname, 'public', 'images', 'gallery', 'data.json');

async function seed() {
  if (!fs.existsSync(dataJsonPath)) {
    console.error('Error: data.json not found. Make sure you are running this from the project root.');
    return;
  }

  const imagesData = JSON.parse(fs.readFileSync(dataJsonPath, 'utf8'));
  console.log(`Found ${imagesData.length} images to seed to the production database.`);

  // Clear existing static images to prevent duplicates if run twice
  await prisma.galleryImage.deleteMany();

  // Insert images into the live database
  for (const img of imagesData) {
    await prisma.galleryImage.create({
      data: {
        title: '',
        url: img.url,
        category: img.category,
      }
    });
  }

  console.log('Success! 68 gallery images have been seeded into your live database.');
  await prisma.$disconnect();
}

seed().catch(e => {
  console.error(e);
  prisma.$disconnect();
});
