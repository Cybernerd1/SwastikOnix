import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="py-32 relative bg-black/95">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Title */}
          <div className="lg:w-1/3 flex-shrink-0">
             <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter sticky top-32"
             >
               What sets <br /> us apart?
             </motion.h2>
          </div>

          {/* Right Column: List */}
          <div className="lg:w-2/3 flex flex-col">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative py-12 px-8 border-t border-white/10 group cursor-default overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div 
                      key="hover-bg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-r from-web-purple/40 to-web-blue/40 z-0"
                    />
                  )}
                </AnimatePresence>

                {/* Content */}
                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-baseline">
                   <span className={`text-4xl font-bold font-mono transition-colors duration-300 ${hoveredIndex === i ? 'text-white' : 'text-gray-600'}`}>
                     0{i + 1}
                   </span>
                   <div>
                     <h3 className="text-3xl font-bold mb-4">{f.title}</h3>
                     <p className={`text-lg transition-colors duration-300 ${hoveredIndex === i ? 'text-gray-200' : 'text-gray-400'}`}>
                       {f.description}
                     </p>
                   </div>
                </div>
              </motion.div>
            ))}
            {/* Bottom border for last item */}
            <div className="w-full h-[1px] bg-white/10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
