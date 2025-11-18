import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../common/LanguageSelector';

/**
 * Navbar Component
 * Responsive navigation with mobile menu, scroll effects, and smooth animations
 */
const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-bold ${
                scrolled ? 'text-primary-600' : 'text-white'
              }`}
            >
              Siyakhula<span className="gradient-text">Tech</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative group ${
                  scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                } ${location.pathname === link.path ? 'text-primary-500' : ''}`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                    scrolled ? 'bg-primary-600' : 'bg-white'
                  } transition-all group-hover:w-full`}
                ></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className={`btn ${
                scrolled ? 'btn-primary' : 'btn-outline'
              }`}
            >
              {t('nav.getStarted')}
            </Link>
            <LanguageSelector scrolled={scrolled} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-4 bg-white rounded-lg mt-4 shadow-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-6 py-2 font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-6 pt-2 space-y-3">
                  <Link to="/contact" className="btn btn-primary w-full text-center block">
                    {t('nav.getStarted')}
                  </Link>
                  <div className="flex justify-center">
                    <LanguageSelector scrolled={true} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
