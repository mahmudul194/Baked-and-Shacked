import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/products/ProductGrid';
import CategoryFilter from '../components/products/CategoryFilter';
import { getProductsByCategory } from '../data/products';
import { Product } from '../types/product';

const ProductsPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  const activeCategory = category || 'all';
  
  useEffect(() => {
    document.title = `${category ? capitalizeFirstLetter(category) : 'All Products'} | Baked & Shacked`;
    
    // Simulate fetching products
    setLoading(true);
    
    setTimeout(() => {
      const fetchedProducts = getProductsByCategory(activeCategory);
      setProducts(fetchedProducts);
      setLoading(false);
    }, 500);
  }, [category, activeCategory]);
  
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  return (
    <div className="py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-6">
          {category ? capitalizeFirstLetter(category) : 'All Products'}
        </h1>
        
        <CategoryFilter activeCategory={activeCategory} />
        
        {loading ? (
          <div className="py-12 text-center">
            <p className="text-gray-500">Loading products...</p>
          </div>
        ) : (
          <ProductGrid 
            products={products} 
            emptyMessage={`No ${category || 'products'} found.`} 
          />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;