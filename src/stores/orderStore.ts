import { create } from 'zustand';
import { OrderStatus, Order } from '../types/order';
import { toast } from 'react-toastify';

interface OrderStore {
  orders: Order[];
  currentOrder: Order | null;
  placeOrder: (order: Omit<Order, 'id' | 'status' | 'createdAt'>) => Order;
  getOrderById: (id: string) => Order | undefined;
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  orders: [],
  currentOrder: null,
  
  placeOrder: (orderData) => {
    const newOrder: Order = {
      id: `ORD-${Date.now()}`,
      ...orderData,
      status: OrderStatus.CONFIRMED,
      createdAt: new Date().toISOString()
    };
    
    set((state) => ({
      orders: [...state.orders, newOrder],
      currentOrder: newOrder
    }));
    
    toast.success('Order placed successfully!');
    return newOrder;
  },
  
  getOrderById: (id) => {
    return get().orders.find(order => order.id === id);
  }
}));