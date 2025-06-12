import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavItem {
  name: string;
  id: string;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  };

  const { t } = useTranslation();
  
  const navItems: NavItem[] = [
    { name: t('header.features'), id: 'features' },
    { name: t('header.demo'), id: 'demo' },
    { name: t('header.testimonials'), id: 'testimonials' },
    { name: t('header.security'), id: 'security' }
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
            <span className="text-xl font-bold text-white">DEG Shield AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item: NavItem) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <LanguageSwitcher />
            <button className="text-gray-300 hover:text-white transition-colors duration-200 px-4 py-2 rounded-full hover:bg-gray-800/30">
              {t('header.signIn', 'Sign In')}
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full font-medium hover:from-blue-600 hover:to-cyan-500 transition-all duration-200">
              {t('header.getDemo', 'Get Demo')}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              className="md:hidden text-white p-2 rounded-full hover:bg-gray-800/30 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 rounded-b-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-xl hover:bg-gray-800/30"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 pb-2 space-y-2 border-t border-gray-700/50 mt-2">
                <button className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-xl hover:bg-gray-800/30">
                  {t('header.signIn', 'Sign In')}
                </button>
                <button className="block w-full text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-3 py-2 rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all duration-200">
                  {t('header.getDemo', 'Get Demo')}
                </button>
                <div className="flex justify-center pt-2">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;