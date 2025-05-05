import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Testimonials from '../components/home/Testimonials';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Baked & Shacked | Fresh Baked Goods';
  }, []);
  
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <div className="py-12 bg-brown-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Baking Philosophy</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              At Baked & Shacked, we believe in using only the finest ingredients and traditional methods to create 
              our artisan breads, cakes, and pastries. Every item is made with care, attention to detail, and a lot of love.
            </p>
            <p>
              We're committed to creating memorable, delicious baked goods that bring joy to your table.
            </p>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default HomePage;