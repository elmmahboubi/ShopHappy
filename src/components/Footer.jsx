import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#313a4b] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.svg" 
                alt="ShopHappy" 
                className="w-40 brightness-0 invert"
              />
            </Link>
            <p className="mb-4">
              Your trusted destination for quality electronics and second-hand items. Making online shopping simple since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#0046be] transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#0046be] transition-colors duration-300">Home</Link>
              </li>
              <li>
                <a href="#products" className="hover:text-[#0046be] transition-colors duration-300">Shop</a>
              </li>
              <li>
                <a href="#featured" className="hover:text-[#0046be] transition-colors duration-300">Featured Products</a>
              </li>
              <li>
                <Link to="/return-policy" className="hover:text-[#0046be] transition-colors duration-300">Return Policy</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#0046be] transition-colors duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#0046be] transition-colors duration-300">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#0046be] mr-2 mt-0.5" />
                <span>123 Happy Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#0046be] mr-2" />
                <span>(251) 261-5451</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#0046be] mr-2" />
                <a href="mailto:info@shophappy.com" className="hover:text-[#0046be] transition-colors duration-300">
                  info@shophappy.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium text-white mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0046be] flex-1"
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#0046be] hover:bg-[#003494] text-white rounded-r-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center space-x-8">
              <img 
                src="https://corporate.visa.com/content/dam/VCOM/corporate/about-visa/images/visa-brandmark-blue-1960x622.png" 
                alt="Visa" 
                className="h-3 brightness-0 invert"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/2052px-American_Express_logo_%282018%29.svg.png" 
                alt="American Express" 
                className="h-8"
              />
              <img 
                src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png" 
                alt="Mastercard" 
                className="h-8"
              />
              <img 
                src="https://www.discover.com/company/images/newsroom/media-downloads/discover.png" 
                alt="Discover" 
                className="h-8"
              />
              <img 
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" 
                alt="PayPal" 
                className="h-8"
              />
            </div>
            <p className="text-center">&copy; 2025 ShopHappy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;