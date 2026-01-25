import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import servicesVideo from '../assets/services-bg.mp4';
import dialWheel from '../assets/DialWheel.png';
import handsLine from '../assets/hands_line.png';

const ServicesWheel = () => {
  const [activeCategory, setActiveCategory] = useState('Design');
  const wheelRef = useRef(null);

  const categories = ['AI', 'Design', 'Tech', 'Automation'];

  // Content for the "Design" category as requested
  const designServices = [
    {
      title: "UI/UX Design",
      description: "We design intuitive, elegant interfaces backed by smart user flows, making your product easier to use, faster to navigate, and more enjoyable for your users."
    },
    {
      title: "Graphic Design",
      description: "We create visually striking graphics that communicate clearly, elevate your brand, and make every asset, from social posts to ads, instantly stand out."
    },
    {
      title: "Game Design",
      description: "We craft engaging game worlds, polished art, and seamless interactions, bringing your gameplay ideas to life with clarity, style, and player-focused design."
    }
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Rotate wheel based on index? 
    // AI=0, Design=90, Tech=180, Automation=270
    const index = categories.indexOf(category);
    if(wheelRef.current) {
        wheelRef.current.style.transform = `rotate(${index * 90}deg)`;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 scale-110" // Zoom out/scale effect
        >
          <source src={servicesVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-web-purple/20" />
      </div>

      {/* Main Wheel/Graphic (Decorative/Abstract now) */}
      <div className="absolute -left-[20%] top-1/2 -translate-y-1/2 w-[80vh] h-[80vh] opacity-20 pointer-events-none transition-transform duration-1000 ease-in-out" ref={wheelRef}>
         <img src={dialWheel} alt="" className="w-full h-full object-contain spin-slow" />
      </div>

      {/* Hands Line / Ruler Graphic */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 opacity-50 pointer-events-none">
          <img src={handsLine} alt="" className="w-full h-auto object-cover" />
      </div>

      <div className="container mx-auto px-6 relative z-20 h-full flex items-center">
        <div className="w-full h-full flex flex-col md:flex-row">
            
            {/* Left/Bottom Content Area */}
            <div className="flex-1 flex flex-col justify-center md:pr-20">
                <h2 className="text-6xl md:text-8xl font-bold mb-12 text-white/10 tracking-widest absolute top-24 left-6 pointer-events-none">Services</h2>
                
                {activeCategory === 'Design' ? (
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        {designServices.map((service, index) => (
                            <motion.div 
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative"
                            > 
                                {/* Vertical Separator */}
                                {/* <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-white/10 group-hover:bg-web-purple transition-colors" /> */}
                                
                                <h3 className="text-3xl font-bold mb-4 leading-tight group-hover:text-web-purple transition-colors duration-300">
                                    {service.title.split(' ').map((word, i) => (
                                        <span key={i} className="block">{word}</span>
                                    ))}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-full mt-4 md:static md:mt-0 md:opacity-100">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                     </div>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-2xl text-gray-500 italic">Content for {activeCategory} coming soon...</p>
                    </div>
                )}
            </div>

            {/* Right Side Navigation */}
            <div className="md:w-48 flex flex-col justify-center items-end pr-10 space-y-12">
                {categories.map((cat) => (
                    <button 
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={`text-2xl md:text-4xl font-bold transition-all duration-500 ${
                            activeCategory === cat 
                            ? 'text-white scale-110 translate-x-0' 
                            : 'text-gray-600 hover:text-gray-400 translate-x-4'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWheel;
