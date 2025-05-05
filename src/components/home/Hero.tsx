import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-brown-700 text-white py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1435901/pexels-photo-1435901.jpeg" 
          alt="Fresh baked bread" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Freshly Baked Happiness
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Artisan breads, cakes, and pastries baked with love and the finest ingredients. 
            Order online for delivery straight to your door.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn btn-accent">
              Shop Now
            </Link>
            <Link to="/products/featured" className="btn bg-white text-brown-800 hover:bg-cream-100">
              See Featured
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;