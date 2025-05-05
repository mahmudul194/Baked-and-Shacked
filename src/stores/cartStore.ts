import { create } from 'zustand';
import { toast } from 'react-toastify';
import { Product } from '../types/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  subtotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (product: Product, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return {
          items: state.items.map(item => 
            item.product.id === product.id 
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        };
      } else {
        return {
          items: [...state.items, { product, quantity }]
        };
      }
    });
    
    toast.success(`Added ${product.name} to cart!`);
  },
  
  removeItem: (productId: number) => {
    set((state) => ({
      items: state.items.filter(item => item.product.id !== productId)
    }));
    
    toast.info('Item removed from cart');
  },
  
  updateQuantity: (productId: number, quantity: number) => {
    if (quantity < 1) return;
    
    set((state) => ({
      items: state.items.map(item => 
        item.product.id === productId 
          ? { ...item, quantity }
          : item
      )
    }));
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  subtotal: () => {
    return get().items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }
}));