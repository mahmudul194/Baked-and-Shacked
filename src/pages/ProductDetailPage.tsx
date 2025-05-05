import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Minus, Plus, ArrowLeft } from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import { Product } from '../types/product';
import { useCartStore } from '../stores/cartStore';
import ProductGrid from '../components/products/ProductGrid';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCartStore();
  
  useEffect(() => {
    setLoading(true);
    
    if (id) {
      const numericId = parseInt(id, 10);
      const fetchedProduct = getProductById(numericId);
      
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        document.title = `${fetchedProduct.name} | Baked & Shacked`;
        
        // Get related products from the same category
        const related = getProductsByCategory(fetchedProduct.category)
          .filter(p => p.id !== numericId)
          .slice(0, 4);
        
        setRelatedProducts(related);
      }
    }
    
    setLoading(false);
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };
  
  if (loading) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-500">Loading product...</p>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container-custom py-12 text-center">
        <p className="text-gray-500 mb-4">Product not found</p>
        <Link to="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }
  
  return (
    <div className="py-8">
      <div className="container-custom">
        <Link to="/products" className="inline-flex items-center text-brown-700 hover:text-brown-900 mb-6 transition-colors">
          <ArrowLeft size={16} className="mr-1" /> Back to Products
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-80 md:h-auto">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="mb-4">
                <span className="inline-block bg-cream-200 text-brown-700 text-xs px-2 py-1 rounded-full">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Ingredients:</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {product.ingredients?.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              {product.allergens && product.allergens.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Allergens:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.allergens.map((allergen, index) => (
                      <span 
                        key={index}
                        className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-2xl font-bold text-brown-700">
                ৳{product.price.toFixed(2)}
                </div>
                
                <div className="flex items-center border border-cream-300 rounded-md">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-cream-100 transition-colors"
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} className={quantity <= 1 ? 'text-gray-400' : 'text-gray-600'} />
                  </button>
                  
                  <span className="px-4 py-2">{quantity}</span>
                  
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-cream-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="btn btn-primary w-full flex items-center justify-center"
              >
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;