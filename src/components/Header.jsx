import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-black border-b border-white/5"
    >
      <div className="text-3xl font-bold tracking-tighter text-white">
        SwastikOnix
      </div>
      <nav className="hidden md:flex space-x-8 text-base font-medium text-white/90">
        <a href="#features" className="hover:text-web-purple transition-colors">Why Us</a>
        <a href="#services" className="hover:text-web-purple transition-colors">Services</a>
        <a href="#projects" className="hover:text-web-purple transition-colors">Projects</a>
        <a href="#contact" className="hover:text-web-purple transition-colors">Contact</a>
      </nav>
      <a href="#contact" className="hidden md:block px-6 py-2.5 border border-white/20 rounded-full text-base font-medium hover:bg-white hover:text-black transition-all duration-300 text-white">
        Contact
      </a>
    </motion.header>
  );
};

export default Header;
