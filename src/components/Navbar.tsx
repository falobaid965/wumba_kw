import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { NAV_LINKS, UI_STRINGS } from '../constants';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => setLanguage(language === 'EN' ? 'AR' : 'EN');

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'glass-nav border-b border-gray-100 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black uppercase tracking-tighter hover:opacity-70 transition">
          WUMBA<span className="text-brand-orange">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-[13px] font-bold uppercase tracking-widest text-gray-500">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-black transition">
              {link.label[language]}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <button
            onClick={toggleLanguage}
            className="text-xs font-bold px-3 py-1 border border-gray-200 rounded-full hover:bg-gray-100 transition uppercase"
          >
            {language === 'EN' ? 'العربية' : 'ENGLISH'}
          </button>
          <a
            href="https://wa.me/965XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-gray-800 transition shadow-lg hidden sm:block"
          >
            {UI_STRINGS.orderNow[language]}
          </a>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[90] flex flex-col justify-center items-center space-y-8 text-3xl font-black uppercase tracking-tighter text-center"
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                {link.label[language]}
              </a>
            ))}
            <a
              href="https://wa.me/965XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange text-xl pt-10 flex items-center gap-2"
            >
              <MessageCircle size={24} />
              {UI_STRINGS.whatsappOrder[language]}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
