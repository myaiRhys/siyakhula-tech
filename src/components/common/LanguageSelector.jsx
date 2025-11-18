import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HiGlobe, HiCheck } from 'react-icons/hi';

/**
 * LanguageSelector Component
 * Dropdown to switch between languages
 * Supports: English, Afrikaans, isiZulu, isiXhosa, Chichewa
 */
const LanguageSelector = ({ scrolled = false }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
    { code: 'zu', name: 'isiZulu', flag: '🇿🇦' },
    { code: 'xh', name: 'isiXhosa', flag: '🇿🇦' },
    { code: 'ny', name: 'Chichewa', flag: '🇲🇼' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
          scrolled
            ? 'text-gray-700 hover:bg-primary-50'
            : 'text-white hover:bg-white/10'
        }`}
        aria-label="Select language"
      >
        <HiGlobe className="text-xl" />
        <span className="hidden md:inline font-medium">{currentLanguage.name}</span>
        <span className="md:hidden text-lg">{currentLanguage.flag}</span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                </div>
                {i18n.language === lang.code && (
                  <HiCheck className="text-primary-600 text-xl" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
