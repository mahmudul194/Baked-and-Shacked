import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useOrderStore } from '../stores/orderStore';
import { Order } from '../types/order';

const OrderConfirmationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getOrderById } = useOrderStore();
  const [order, setOrder] = useState<Order | null>(null);
  
  useEffect(() => {
    document.title = 'Order Confirmation | Baked & Shacked';
    
    if (id) {
      const foundOrder = getOrderById(id);
      
      if (foundOrder) {
        setOrder(foundOrder);
      } else {
        // Redirect if order not found
        navigate('/');
      }
    }
  }, [id, getOrderById, navigate]);
  
  if (!order) {
    return (
      <div className="container-custom py-12 text-center">
        <p className="text-gray-500">Loading order information...</p>
      </div>
    );
  }
  
  return (
    <div className="py-8">
      <div className="container-custom max-w-3xl">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="text-center mb-8">
            <div className="inline-flex justify-center items-center p-4 bg-green-100 rounded-full mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Thank You For Your Order!</h1>
            <p className="text-gray-600">Your order has been placed successfully.</p>
          </div>
          
          <div className="border border-cream-200 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Order Number:</span>
              <span className="font-medium">{order.id}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Order Date:</span>
              <span>{new Date(order.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Total Amount:</span>
              <span className="font-bold">৳{order.totalAmount.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Order Details</h2>
            <div className="space-y-3 mb-4">
              {order.items.map(item => (
                <div key={item.product.id} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img 
                      src={item.product.imageUrl} 
                      alt={item.product.name} 
                      className="w-12 h-12 object-cover rounded mr-3"
                    />
                    <div>
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-medium">৳{(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-cream-200 pt-3 flex justify-between font-bold">
              <span>Total</span>
              <span>৳{order.totalAmount.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Delivery Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-1">Shipping Address</h3>
                <p>{order.address.street}</p>
                <p>{order.address.city}, {order.address.state} {order.address.zipCode}</p>
                {order.address.additionalInfo && <p>{order.address.additionalInfo}</p>}
              </div>
              
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-1">Contact Information</h3>
                <p>{order.customerName}</p>
                <p>{order.customerEmail}</p>
                <p>{order.customerPhone}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              You will receive an email confirmation at {order.customerEmail} with the details of your order.
            </p>
            
            <Link to="/" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;