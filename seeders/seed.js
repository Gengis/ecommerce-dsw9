const sequelize = require('../config/database'); 
const { Product } = require('../models');

const seedProducts = [
  {
    name: 'Smartphone Pro MAX',
    description: 'Teléfono inteligente de última generación con cámara de alta resolución y batería de larga duración.',
    price: 899.99,
    image_Url: '/images/smartphone.jpg',
    stock: 20
  },
  {
    name: 'Laptop UltraBook 15"',
    description: 'Potente laptop para desarrollo y diseño gráfico. Procesador ultrarrápido y 16GB de RAM.',
    price: 1299.50,
    image_Url: '/images/laptop.jpg',
    stock: 10
  },
  {
    name: 'Auriculares Inalámbricos',
    description: 'Auriculares over-ear con cancelación de ruido activa y sonido envolvente.',
    price: 149.99,
    image_Url: '/images/auriculares.jpg',
    stock: 35
  },
  {
    name: 'Smartwatch Fit 2.0',
    description: 'Reloj inteligente resistente al agua para monitoreo de salud, sueño y actividad física.',
    price: 199.00,
    image_Url: '/images/smartwatch.jpg',
    stock: 15
  },
  {
    name: 'Cámara Mirrorless 4K',
    description: 'Cámara profesional compacta con lentes intercambiables, ideal para fotografía y video en 4K.',
    price: 750.00,
    image_Url: '/images/camera.jpg',
    stock: 8
  }
];

async function runSeed() {
  try {
    // 1. Verificamos que la conexión a Aiven funcione
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida. Iniciando la inserción...');

    // 2. Insertamos todos los productos de golpe
    await Product.bulkCreate(seedProducts);

    console.log('¡Éxito! El catálogo de 5 productos ha sido guardado en la base de datos de Aiven.');
    process.exit(0); // Cerramos el proceso limpiamente
  } catch (error) {
    console.error('Ocurrió un error al ejecutar el seeder:', error);
    process.exit(1);
  }
}

runSeed();