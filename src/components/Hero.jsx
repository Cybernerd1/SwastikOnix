import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroVideo from '../assets/heroanimation.mp4';

const RotatingWords = () => {
  const words = ["Innovation", "Design", "Future", "Web3"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.2em] overflow-hidden inline-flex items-center ml-3 relative top-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="bg-clip-text text-transparent bg-gradient-to-r from-web-purple to-web-blue block leading-none"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight"
        >
          We Build <br className="md:hidden" />
          <RotatingWords />
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto mb-12"
        >
          Elevating brands with cutting-edge digital experiences.
        </motion.p>

        {/* CTA Button with Vertical Lines */}
        <div className="relative group cursor-pointer inline-block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }} // Scale scale transform instead of width/padding layout changes
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-4 transition-colors duration-500 hover:bg-white/10 hover:border-web-purple/50"
          >
             <span className="text-lg font-medium tracking-wide">Start Project</span>
             
             {/* Animated Lines under button - Visual flair */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-web-purple transition-all duration-300 group-hover:w-3/4 opacity-50" />
          </motion.div>
          
          {/* Vertical Lines Hanging Down */}
           <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <motion.div 
                className="w-[1px] h-16 bg-gradient-to-b from-web-purple to-transparent"
                initial={{ height: 0 }}
                whileHover={{ height: 60 }}
                animate={{ height: [0, 60, 40] }}
                transition={{ repeat: Infinity, duration: 2 }}
             />
              <motion.div 
                className="w-[1px] h-10 bg-gradient-to-b from-blue-500 to-transparent delay-100"
                 animate={{ height: [0, 40, 20] }}
                 transition={{ repeat: Infinity, duration: 1.5 }}
             />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
