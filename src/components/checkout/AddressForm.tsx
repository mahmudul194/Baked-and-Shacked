import React from 'react';
import { Address } from '../../types/order';

interface AddressFormProps {
  address: Address;
  onChange: (address: Address) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ address, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({
      ...address,
      [name]: value
    });
  };
  
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
          Street Address*
        </label>
        <input
          type="text"
          id="street"
          name="street"
          value={address.street}
          onChange={handleChange}
          className="input"
          required
          placeholder="123 Main St"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City*
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={address.city}
            onChange={handleChange}
            className="input"
            required
            placeholder="New York"
          />
        </div>
        
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            State*
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={address.state}
            onChange={handleChange}
            className="input"
            required
            placeholder="NY"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
          ZIP Code*
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={address.zipCode}
          onChange={handleChange}
          className="input"
          required
          placeholder="10001"
        />
      </div>
      
      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Information (optional)
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={address.additionalInfo || ''}
          onChange={handleChange}
          className="input min-h-[80px]"
          placeholder="Apartment number, gate code, delivery instructions, etc."
        />
      </div>
    </div>
  );
};

export default AddressForm;