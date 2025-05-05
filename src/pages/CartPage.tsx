import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import { useCartStore } from '../stores/cartStore';
import { getPopularProducts } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const CartPage: React.FC = () => {
  const { items, subtotal, clearCart } = useCartStore();
  const popularProducts = getPopularProducts().slice(0, 4);
  
  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
    }
  };
  
  useEffect(() => {
    document.title = 'Your Cart | Baked & Shacked';
  }, []);
  
  return (
    <div className="py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <div className="inline-flex justify-center items-center p-4 bg-cream-100 rounded-full mb-4">
              <ShoppingBag size={32} className="text-brown-700" />
            </div>
            <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some delicious items to your cart</p>
            <Link to="/products" className="btn btn-primary">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center border-b border-cream-200 pb-4 mb-4">
                  <h2 className="text-xl font-bold">Shopping Cart ({items.length} items)</h2>
                  <button 
                    onClick={handleClearCart}
                    className="text-sm text-red-500 hover:text-red-700 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
                
                <div>
                  {items.map(item => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-cream-200 pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${subtotal().toFixed(2)}</span>
                  </div>
                </div>
                
                <Link 
                  to="/checkout" 
                  className="btn btn-primary w-full text-center"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {/* Popular products section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Popular Items</h2>
          <ProductGrid products={popularProducts} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;