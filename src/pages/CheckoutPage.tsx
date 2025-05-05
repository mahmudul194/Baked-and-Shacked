import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, CreditCard, Check } from 'lucide-react';
import { useCartStore } from '../stores/cartStore';
import { useOrderStore } from '../stores/orderStore';
import AddressForm from '../components/checkout/AddressForm';
import PaymentForm from '../components/checkout/PaymentForm';
import { Address } from '../types/order';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCartStore();
  const { placeOrder } = useOrderStore();
  
  const [activeStep, setActiveStep] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState<Address>({
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'cash'>('credit_card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    document.title = 'Checkout | Baked & Shacked';
    
    // Redirect to cart if cart is empty
    if (items.length === 0) {
      navigate('/cart');
    }
  }, [items, navigate]);
  
  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handlePreviousStep = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // In a real app, this would communicate with a payment processor
      // For demo purposes, we'll just simulate a successful order placement
      const newOrder = placeOrder({
        items: [...items],
        totalAmount: subtotal(),
        customerName,
        customerEmail,
        customerPhone,
        address,
        paymentMethod,
      });
      
      clearCart();
      navigate(`/order-confirmation/${newOrder.id}`);
    } catch (error) {
      console.error('Error placing order:', error);
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="py-8">
      <div className="container-custom max-w-5xl">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        {/* Checkout Steps */}
        <div className="flex justify-between items-center mb-6 border-b border-cream-200 pb-4">
          <button 
            className={`flex flex-1 flex-col md:flex-row items-center justify-center p-3 ${
              activeStep === 1 ? 'text-brown-700 font-medium' : 'text-gray-400'
            }`}
            onClick={() => setActiveStep(1)}
            disabled={isSubmitting}
          >
            <Store className="h-5 w-5 mb-1 md:mb-0 md:mr-2" />
            <span>Shipping</span>
          </button>
          
          <button 
            className={`flex flex-1 flex-col md:flex-row items-center justify-center p-3 ${
              activeStep === 2 ? 'text-brown-700 font-medium' : 'text-gray-400'
            }`}
            onClick={() => activeStep > 1 && setActiveStep(2)}
            disabled={activeStep < 2 || isSubmitting}
          >
            <CreditCard className="h-5 w-5 mb-1 md:mb-0 md:mr-2" />
            <span>Payment</span>
          </button>
          
          <button 
            className={`flex flex-1 flex-col md:flex-row items-center justify-center p-3 ${
              activeStep === 3 ? 'text-brown-700 font-medium' : 'text-gray-400'
            }`}
            onClick={() => activeStep > 2 && setActiveStep(3)}
            disabled={activeStep < 3 || isSubmitting}
          >
            <Check className="h-5 w-5 mb-1 md:mb-0 md:mr-2" />
            <span>Review</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeStep === 1 && (
                <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
                  <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="input"
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          className="input"
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="input"
                          required
                          placeholder="phone number"
                        />
                      </div>
                    </div>
                    
                    <div className="border-t border-cream-200 pt-4 mt-4">
                      <h3 className="font-medium mb-4">Delivery Address</h3>
                      <AddressForm address={address} onChange={setAddress} />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={!customerName || !customerEmail || !customerPhone || !address.street || !address.city || !address.state || !address.zipCode}
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              )}
              
              {activeStep === 2 && (
                <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
                  <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                  
                  <div className="mb-6">
                    <PaymentForm paymentMethod={paymentMethod} onChange={setPaymentMethod} />
                  </div>
                  
                  <div className="flex justify-between">
                    <button 
                      type="button" 
                      onClick={handlePreviousStep}
                      className="btn bg-gray-100 text-gray-800 hover:bg-gray-200"
                      disabled={isSubmitting}
                    >
                      Back
                    </button>
                    
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      Review Order
                    </button>
                  </div>
                </form>
              )}
              
              {activeStep === 3 && (
                <form onSubmit={handleCheckout}>
                  <h2 className="text-xl font-bold mb-4">Review Your Order</h2>
                  
                  <div className="space-y-6 mb-6">
                    <div>
                      <h3 className="font-medium mb-2">Contact Information</h3>
                      <div className="bg-cream-100 p-3 rounded">
                        <p><span className="font-medium">Name:</span> {customerName}</p>
                        <p><span className="font-medium">Email:</span> {customerEmail}</p>
                        <p><span className="font-medium">Phone:</span> {customerPhone}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Delivery Address</h3>
                      <div className="bg-cream-100 p-3 rounded">
                        <p>{address.street}</p>
                        <p>{address.city}, {address.state} {address.zipCode}</p>
                        {address.additionalInfo && <p>{address.additionalInfo}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Payment Method</h3>
                      <div className="bg-cream-100 p-3 rounded">
                        <p>{paymentMethod === 'credit_card' ? 'Credit Card' : 'Cash on Delivery'}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Order Items</h3>
                      <div className="bg-cream-100 p-3 rounded space-y-2">
                        {items.map(item => (
                          <div key={item.product.id} className="flex justify-between">
                            <span>
                              {item.quantity} x {item.product.name}
                            </span>
                            <span className="font-medium">
                            ৳{(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button 
                      type="button" 
                      onClick={handlePreviousStep}
                      className="btn bg-gray-100 text-gray-800 hover:bg-gray-200"
                      disabled={isSubmitting}
                    >
                      Back
                    </button>
                    
                    <button 
                      type="submit" 
                      className="btn btn-primary flex items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Place Order'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="mb-4">
                <p className="text-gray-600 mb-2">{items.length} items in cart</p>
                <div className="max-h-40 overflow-y-auto mb-4">
                  {items.map(item => (
                    <div key={item.product.id} className="flex justify-between text-sm mb-2">
                      <span>{item.quantity} x {item.product.name}</span>
                      <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
              
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;