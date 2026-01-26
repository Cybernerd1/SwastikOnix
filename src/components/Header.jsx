import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-2xl font-bold tracking-tighter">
        SwastikOnix
      </div>
      <nav className="hidden md:flex space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-web-purple transition-colors">All Services</a>
        <a href="#" className="hover:text-web-purple transition-colors">Projects</a>
        <a href="#" className="hover:text-web-purple transition-colors">About</a>
      </nav>
      <button className="hidden md:block px-5 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300">
        Contact
      </button>
    </motion.header>
  );
};

export default Header;
