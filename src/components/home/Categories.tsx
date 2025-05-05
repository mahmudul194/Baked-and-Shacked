import React from 'react';
import { Link } from 'react-router-dom';

const Categories: React.FC = () => {
  const categories = [
    {
      id: 'breads',
      name: 'Artisan Breads',
      description: 'Crusty, flavorful breads made with traditional methods',
      imageUrl: 'https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg'
    },
    {
      id: 'cakes',
      name: 'Delicious Cakes',
      description: 'Celebration cakes for any special occasion',
      imageUrl: 'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg'
    },
    {
      id: 'pastries',
      name: 'Flaky Pastries',
      description: 'Sweet and savory pastries to brighten your day',
      imageUrl: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg'
    }
  ];
  
  return (
    <section className="py-12 bg-cream-100">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="group"
            >
              <div className="rounded-lg overflow-hidden h-64 relative shadow-md">
                <img 
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-white/80">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;