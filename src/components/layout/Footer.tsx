import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brown-800 text-cream-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-8 w-auto text-cream-100" />
              <span className="ml-2 font-serif text-xl font-bold text-cream-100">Baked & Shacked</span>
            </div>
            <p className="mb-4">Delicious baked goods made with love and the finest ingredients, delivered straight to your door.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cream-100">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-gold-400 transition-colors">Shop</Link></li>
              <li><Link to="/products/breads" className="hover:text-gold-400 transition-colors">Breads</Link></li>
              <li><Link to="/products/cakes" className="hover:text-gold-400 transition-colors">Cakes</Link></li>
              <li><Link to="/products/pastries" className="hover:text-gold-400 transition-colors">Pastries</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cream-100">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>01872549981</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>mahmudulhaquerifat@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <span> Road-9, Taltola<br />Dhour,turag dhaka-1230</span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cream-100">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>7:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brown-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Baked & Shacked. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link to="/privacy-policy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;