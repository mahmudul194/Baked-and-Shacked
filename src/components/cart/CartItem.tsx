import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../stores/cartStore';
import { useCartStore } from '../../stores/cartStore';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();
  const { product, quantity } = item;
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(product.id, newQuantity);
    }
  };
  
  const handleRemove = () => {
    removeItem(product.id);
  };
  
  return (
    <div className="flex items-center py-4 border-b border-cream-200">
      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">৳{product.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center border border-cream-300 rounded-md">
          <button 
            onClick={() => handleQuantityChange(quantity - 1)}
            className="p-1 hover:bg-cream-100 transition-colors"
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
          >
            <Minus size={16} className={quantity <= 1 ? 'text-gray-400' : 'text-gray-600'} />
          </button>
          
          <span className="px-3 py-1">{quantity}</span>
          
          <button 
            onClick={() => handleQuantityChange(quantity + 1)}
            className="p-1 hover:bg-cream-100 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={16} className="text-gray-600" />
          </button>
        </div>
        
        <span className="mx-4 font-medium">${(product.price * quantity).toFixed(2)}</span>
        
        <button 
          onClick={handleRemove}
          className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;