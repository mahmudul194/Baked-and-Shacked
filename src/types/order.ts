import { CartItem } from '../stores/cartStore';

export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  additionalInfo?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: Address;
  paymentMethod: 'credit_card' | 'cash';
  status: OrderStatus;
  createdAt: string;
}