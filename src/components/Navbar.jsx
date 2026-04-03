import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;
  
  const AnnouncementBar = () => {
  return (
    <div className="w-full bg-[#1d4ed8] py-2 text-white flex justify-center items-center gap-2 text-sm font-medium">
      <span role="img" aria-label="bell">🔔</span>
      <span className="tracking-wide uppercase">The website is for sale Contact me on whatsapp</span>
      <span role="img" aria-label="bell">🔔</span>
    </div>
  );
};

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50 top-0 left-0 transition-all duration-300">
      <AnnouncementBar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <HeartPulse className="h-8 w-8 text-primary-600" />
            <span className="text-2xl font-bold text-gray-900 tracking-tight">SmileCare</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-primary-600' : 'text-gray-600 hover:text-primary-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/appointment" className="btn-primary flex items-center gap-2">
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 shadow-lg">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="w-full btn-primary flex justify-center text-center"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
