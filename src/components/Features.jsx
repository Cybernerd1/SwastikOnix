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
    <section id="features" className="w-full bg-black flex justify-center items-center relative overflow-hidden" style={{ padding: '120px 0' }}>
      {/* Central Animated Lines - Aligned with "Start Project" Button (Center) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[6px] hidden lg:block z-20">
          {/* Line 1 - Center */}
          <div className="absolute top-0 left-0 w-[6px] h-[140%] bg-white overflow-hidden">
            <motion.div 
              initial={{ top: "-100%" }}
              animate={{ top: "100%" }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute left-0 w-full h-[50%] bg-gradient-to-b from-transparent via-white to-transparent opacity-100 shadow-[0_0_15px_white]"
            />
          </div>
          {/* Line 2 - Left offset */}
          <div className="absolute top-[-20%] -left-[12px] w-[3px] h-[120%] bg-white/20 overflow-hidden">
            <motion.div 
              initial={{ top: "-100%" }}
              animate={{ top: "100%" }}
              transition={{ repeat: Infinity, duration: 6, delay: 1, ease: "linear" }}
              className="absolute left-0 w-full h-[40%] bg-gradient-to-b from-transparent via-white to-transparent opacity-60"
            />
          </div>
          {/* Line 3 - Right offset */}
          <div className="absolute top-[-10%] left-[12px] w-[1px] h-[130%] bg-white/10 overflow-hidden">
            <motion.div 
              initial={{ top: "-100%" }}
              animate={{ top: "100%" }}
              transition={{ repeat: Infinity, duration: 5, delay: 0.5, ease: "linear" }}
              className="absolute left-0 w-full h-[40%] bg-gradient-to-b from-transparent via-white to-transparent opacity-60"
            />
          </div>
      </div>

      <div className="w-full max-w-[1240px] flex mx-auto px-6 xl:px-0 relative z-10">
        
        {/* Left Column: Title - Pushed slightly left to make room for center lines */}
        <div className="w-[45%] flex-shrink-0 relative pt-12 pr-16 flex justify-end text-right">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white font-bold tracking-tighter sticky top-32 leading-[1.1] relative z-30"
            style={{ fontSize: '84px', maxWidth: '420px' }}
          >
            What sets <br /> us apart?
          </motion.h2>
        </div>

        {/* Right Column: List - Pushed right */}
        <div className="w-[55%] flex flex-col pl-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative py-12 px-0 group cursor-default overflow-hidden"
            >
              {/* Glowing Horizontal Border */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />

              <div className="relative z-10 flex gap-12 items-start pl-8">
                {/* Number */}
                <span className="text-[100px] font-bold font-mono leading-[0.8] text-white group-hover:text-white/40 transition-colors duration-300 w-[140px] flex-shrink-0">
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
          {/* Bottom Glowing Border */}
          <div className="w-full h-[1px] bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
        </div>

      </div>

      {/* Double Horizontal Lines at Bottom - Acting as Section Divider */}
      <div className="absolute bottom-0 left-0 w-full bg-black z-50">
          <div className="w-full h-[1px] bg-white" />
          <div className="h-25 w-full bg-black" /> {/* Spacing between lines filled with black */}
          <div className="w-full h-[1px] bg-white" />
      </div>
    </section>
  );
};

export default Features;    
