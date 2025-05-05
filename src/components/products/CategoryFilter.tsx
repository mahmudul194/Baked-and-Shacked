import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryFilterProps {
  activeCategory: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory }) => {
  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'breads', label: 'Breads' },
    { id: 'cakes', label: 'Cakes' },
    { id: 'pastries', label: 'Pastries' }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map(category => (
        <Link
          key={category.id}
          to={category.id === 'all' ? '/products' : `/products/${category.id}`}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === category.id
              ? 'bg-brown-700 text-white'
              : 'bg-cream-200 text-brown-800 hover:bg-cream-300'
          }`}
        >
          {category.label}
        </Link>
      ))}
    </div>
  );
};

export default CategoryFilter;