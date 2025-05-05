import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import Logo from '../ui/Logo';
import { useCartStore } from '../../stores/cartStore';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { items } = useCartStore();
  
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => document.getElementById('search-input')?.focus(), 100);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Would implement search functionality here
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo className="h-10 w-auto" />
          <span className="ml-2 font-serif text-xl font-bold text-brown-700">Baked & Shacked</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-brown-700 transition-colors">Home</Link>
          <Link to="/products" className="font-medium hover:text-brown-700 transition-colors">All Products</Link>
          <Link to="/products/breads" className="font-medium hover:text-brown-700 transition-colors">Breads</Link>
          <Link to="/products/cakes" className="font-medium hover:text-brown-700 transition-colors">Cakes</Link>
          <Link to="/products/pastries" className="font-medium hover:text-brown-700 transition-colors">Pastries</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleSearch}
            className="p-2 rounded-full hover:bg-cream-100 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-brown-700" />
          </button>
          
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-cream-100 transition-colors">
            <ShoppingBag className="h-5 w-5 text-brown-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          
          <button 
            className="md:hidden p-2 rounded-full hover:bg-cream-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="py-2 hover:bg-cream-100 rounded px-3 transition-colors">Home</Link>
            <Link to="/products" className="py-2 hover:bg-cream-100 rounded px-3 transition-colors">All Products</Link>
            <Link to="/products/breads" className="py-2 hover:bg-cream-100 rounded px-3 transition-colors">Breads</Link>
            <Link to="/products/cakes" className="py-2 hover:bg-cream-100 rounded px-3 transition-colors">Cakes</Link>
            <Link to="/products/pastries" className="py-2 hover:bg-cream-100 rounded px-3 transition-colors">Pastries</Link>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-fade-in">
          <form onSubmit={handleSearchSubmit} className="container-custom">
            <div className="relative">
              <input
                id="search-input"
                type="text"
                placeholder="Search for breads, cakes, and more..."
                className="input pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-brown-700"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;