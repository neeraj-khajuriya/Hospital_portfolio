import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Departments', id: 'departments' },
    { name: 'Doctors', id: 'doctors' },
    { name: 'Facilities', id: 'facilities' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            data-testid="hospital-logo"
          >
            <div className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H+</span>
            </div>
            <span className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
              MediCare Plus
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-700 hover:text-teal-700 font-medium transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid={`nav-link-${link.id}`}
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              href="tel:+1234567890"
              className="flex items-center space-x-2 bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              data-testid="emergency-button"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Emergency
              </span>
            </motion.a>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollToSection('appointment')}
              className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="book-appointment-button"
            >
              Book Appointment
            </motion.button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-teal-700"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200 shadow-lg"
            data-testid="mobile-menu"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-slate-700 hover:text-teal-700 font-medium py-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link.name}
                </button>
              ))}
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center space-x-2 bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition-colors duration-200 w-full"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Emergency
                </span>
              </a>
              <button
                onClick={() => scrollToSection('appointment')}
                className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition-colors duration-200 w-full font-semibold"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;