import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'The sourdough bread is absolutely incredible. It\'s perfectly crusty on the outside and soft on the inside. I\'ve tried many bakeries and this is by far the best!',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      text: 'I ordered a birthday cake and it exceeded all expectations. Not only was it beautiful, but it tasted amazing. The delivery was prompt and the tracking feature was so helpful.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      text: 'Their croissants are like being transported to Paris! Flaky, buttery perfection. I love that I can track my delivery and know exactly when my pastries will arrive.',
      rating: 4,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    }
  ];
  
  return (
    <section className="py-12">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">What Our Customers Say</h2>
        <p className="text-center text-gray-600 mb-8">Read testimonials from our happy customers</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 border border-cream-200">
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <blockquote className="mb-4 text-gray-700">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3" 
                />
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;