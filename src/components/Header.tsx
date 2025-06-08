import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setIsProductDropdownOpen(false);
  };

  const productItems = [
    { name: 'AI Agent Demo', id: 'demo' },
    { name: 'Features', id: 'features' },
    { name: 'Security', id: 'security' },
    { name: 'Pricing', id: 'pricing' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">CyberGuard AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                Product
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  isProductDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl py-2">
                  {productItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {['About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors duration-200 px-4 py-2 rounded-full hover:bg-gray-800/30">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 shadow-lg">
              Get Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-full hover:bg-gray-800/30 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 rounded-b-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {productItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-xl hover:bg-gray-800/30"
                >
                  {item.name}
                </button>
              ))}
              {['About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-xl hover:bg-gray-800/30"
                >
                  {item}
                </button>
              ))}
              <div className="pt-4 pb-2 space-y-2">
                <button className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-xl hover:bg-gray-800/30">
                  Sign In
                </button>
                <button className="block w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-3 py-2 rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-200">
                  Get Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;