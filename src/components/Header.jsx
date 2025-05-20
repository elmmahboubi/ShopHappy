import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Promotional Bar */}
      <div className="bg-[#ffef02] text-[#313a4b] py-2">
        <div className="container mx-auto px-4 text-center font-medium">
          Free Shipping for US&Canada Customers
        </div>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logo.svg" 
                alt="ShopHappy" 
                className="w-40"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 font-heading">
              <Link to="/" className="text-[#313a4b] hover:text-[#0046be] font-medium">Home</Link>
              <a href="#products" className="text-[#313a4b] hover:text-[#0046be] font-medium">Products</a>
              <a href="#featured" className="text-[#313a4b] hover:text-[#0046be] font-medium">Featured</a>
              <Link to="/track" className="text-[#313a4b] hover:text-[#0046be] font-medium">Track Order</Link>
              <Link to="/contact" className="text-[#313a4b] hover:text-[#0046be] font-medium">Contact Us</Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-[#313a4b] hover:text-[#0046be] transition-colors duration-300"
              >
                <Search className="h-5 w-5" />
              </button>
              <Link to="/cart" className="relative text-[#313a4b] hover:text-[#0046be] transition-colors duration-300">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-[#0046be] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center space-x-4">
              <Link to="/cart" className="relative text-[#313a4b] hover:text-[#0046be] transition-colors duration-300">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-[#0046be] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
              <button 
                className="text-[#313a4b]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="absolute left-0 right-0 top-full bg-white shadow-lg p-4 border-t">
              <form onSubmit={handleSearch} className="container mx-auto max-w-3xl">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products..."
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0046be] focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bg-[#0046be] hover:bg-[#003494] text-white px-4 py-2 rounded-lg transition-colors duration-300 font-heading"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 font-heading">
                <Link to="/" className="text-[#313a4b] hover:text-[#0046be] font-medium">Home</Link>
                <a href="#products" className="text-[#313a4b] hover:text-[#0046be] font-medium">Products</a>
                <a href="#featured" className="text-[#313a4b] hover:text-[#0046be] font-medium">Featured</a>
                <Link to="/track" className="text-[#313a4b] hover:text-[#0046be] font-medium">Track Order</Link>
                <Link to="/contact" className="text-[#313a4b] hover:text-[#0046be] font-medium">Contact Us</Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;