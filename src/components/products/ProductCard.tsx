import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types/product';
import { useCartStore } from '../../stores/cartStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();
  const [isAnimating, setIsAnimating] = React.useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  return (
    <div className={`card overflow-hidden ${isAnimating ? 'add-to-cart-animation' : ''}`}>
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {product.featured && (
            <span className="absolute top-2 left-2 bg-gold-500 text-white text-xs px-2 py-1 rounded">
              Featured
            </span>
          )}
          {product.popular && (
            <span className="absolute top-2 right-2 bg-brown-700 text-white text-xs px-2 py-1 rounded">
              Popular
            </span>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-lg">{product.name}</h3>
            <span className="font-bold text-brown-700">৳{product.price.toFixed(2)}</span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
          
          <div className="flex justify-between items-center">
            <span className="text-xs px-2 py-1 bg-cream-200 rounded-full text-brown-700">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
            
            <button 
              onClick={handleAddToCart}
              className="btn-primary flex items-center p-2 rounded-full"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag size={16} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;