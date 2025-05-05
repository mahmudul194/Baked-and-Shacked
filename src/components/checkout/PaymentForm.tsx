import React from 'react';

interface PaymentFormProps {
  paymentMethod: 'credit_card' | 'cash';
  onChange: (method: 'credit_card' | 'cash') => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ paymentMethod, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="credit_card"
            checked={paymentMethod === 'credit_card'}
            onChange={() => onChange('credit_card')}
            className="mr-2"
          />
          Credit Card
        </label>
        
        {paymentMethod === 'credit_card' && (
          <div className="ml-6 mt-2 space-y-4 animate-fade-in">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Card Number*
              </label>
              <input
                type="text"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="input"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date*
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  placeholder="MM/YY"
                  className="input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                  CVV*
                </label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="123"
                  className="input"
                  required
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="cash"
            checked={paymentMethod === 'cash'}
            onChange={() => onChange('cash')}
            className="mr-2"
          />
          Cash on Delivery
        </label>
      </div>
    </div>
  );
};

export default PaymentForm;