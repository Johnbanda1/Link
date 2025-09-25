import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Search, Download, Globe } from 'lucide-react';
import { debounce } from '../utils/performanceOptimizations';

interface HeaderProps {
  language: 'en' | 'fr';
  onLanguageChange: (lang: 'en' | 'fr') => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 50);
    }, 10);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  const navigation = {
    en: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Strategy', href: '#strategy' },
      { name: 'Governance', href: '#governance' },
      { name: 'Contact', href: '#contact' },
    ],
    fr: [
      { name: 'Accueil', href: '#home' },
      { name: 'À Propos', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Projets', href: '#projects' },
      { name: 'Galerie', href: '#gallery' },
      { name: 'Stratégie', href: '#strategy' },
      { name: 'Gouvernance', href: '#governance' },
      { name: 'Contact', href: '#contact' },
    ]
  };

  const scrollToSection = (href: string) => {
    // Close mobile menu first
    setIsMenuOpen(false);
    
    // Small delay to allow menu to close
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-2 z-50"
            onClick={() => scrollToSection('#home')}
            style={{ cursor: 'pointer' }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Bridgelink</h1>
              <p className="text-xs text-gray-600">Mineral Consultants</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation[language].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search...' : 'Rechercher...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'en' ? 'Profile' : 'Profil'}</span>
            </motion.button>

            <button
              onClick={() => onLanguageChange(language === 'en' ? 'fr' : 'en')}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-50 relative"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 mobile-menu-container"
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BM</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Bridgelink</h1>
                <p className="text-xs text-gray-600">Mineral Consultants</p>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Navigation */}
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="space-y-2 px-6">
              {navigation[language].map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center w-full text-left px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200 font-medium"
                >
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Footer */}
          <div className="border-t border-gray-200 p-6 space-y-4">
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'fr' : 'en')}
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 w-full bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'en' ? 'Profile' : 'Profil'}</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;