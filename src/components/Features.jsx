import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: "Full-stack expertise",
      description: "Tech, AI, design, and automation under one roof, no need to manage multiple vendors."
    },
    {
      title: "Startup-first approach",
      description: "We understand early-stage chaos and build products that are fast, stable, and ready to scale."
    },
    {
      title: "Speed meets quality",
      description: "We deliver MVP-ready solutions quickly without compromising on performance."
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="features" className="w-full bg-black flex justify-center items-center" style={{ padding: '120px 0' }}>
      <div className="w-full max-w-[1200px] flex gap-[64px] mx-auto px-6 xl:px-0">
        
        {/* Left Column: 40% */}
        <div className="w-[40%] flex-shrink-0 relative pt-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white font-bold tracking-tighter sticky top-32 leading-[1.15]"
            style={{ fontSize: '84px', maxWidth: '420px' }}
          >
            What sets <br /> us apart?
          </motion.h2>

          {/* Decorative Animated Lines */}
          <div className="absolute -right-8 top-0 h-full w-[2px] hidden lg:block">
              {/* Line 1 */}
              <div className="absolute top-0 right-0 w-[2px] h-[140%] bg-white/20 overflow-hidden">
                <motion.div 
                  initial={{ top: "-100%" }}
                  animate={{ top: "100%" }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                  className="absolute left-0 w-full h-[40%] bg-gradient-to-b from-transparent via-white to-transparent opacity-80"
                />
              </div>
              {/* Line 2 */}
              <div className="absolute top-[-20%] right-[12px] w-[2px] h-[120%] bg-white/20 overflow-hidden">
                <motion.div 
                  initial={{ top: "-100%" }}
                  animate={{ top: "100%" }}
                  transition={{ repeat: Infinity, duration: 8, delay: 2, ease: "linear" }}
                  className="absolute left-0 w-full h-[40%] bg-gradient-to-b from-transparent via-white to-transparent opacity-80"
                />
              </div>
              {/* Line 3 */}
              <div className="absolute top-[-10%] right-[24px] w-[2px] h-[130%] bg-white/20 overflow-hidden">
                <motion.div 
                  initial={{ top: "-100%" }}
                  animate={{ top: "100%" }}
                  transition={{ repeat: Infinity, duration: 7, delay: 1, ease: "linear" }}
                  className="absolute left-0 w-full h-[40%] bg-gradient-to-b from-transparent via-white to-transparent opacity-80"
                />
              </div>
          </div>
        </div>

        {/* Right Column: 60% */}
        <div className="w-[60%] flex flex-col">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative py-12 px-0 border-t border-white/20 group cursor-default overflow-hidden"
            >
              <div className="relative z-10 flex gap-12 items-start">
                {/* Number */}
                <span className="text-[100px] font-bold font-mono leading-[0.8] text-white/20 group-hover:text-white/40 transition-colors duration-300 w-[140px] flex-shrink-0">
                  0{i + 1}
                </span>
                
                {/* Text Content */}
                <div className="pt-2">
                  <h3 className="text-[40px] font-bold mb-4 text-white group-hover:text-web-purple transition-colors leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-[20px] leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300 max-w-[500px]">
                    {f.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border for last item */}
          <div className="w-full h-[1px] bg-white/20" />
        </div>

      </div>
    </section>
  );
};

export default Features;    
