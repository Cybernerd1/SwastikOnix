import React from 'react';
import { motion } from 'framer-motion';
import upperPartBg from '../assets/upperpart.png';

const WhoWeAre = () => {
  return (
    <section className="relative w-full py-32 bg-black overflow-hidden flex items-center justify-center">
      {/* Background Image: 'upperpart.png' */}
      {/* User said "addd this in background" and "under wheel". Assuming full width background or texture. */}
      
      <div className="absolute inset-0 z-0">
          <img 
            src={upperPartBg} 
            alt="" 
            className="w-full h-full object-cover opacity-40 mix-blend-screen" 
          />
          {/* subtle gradient to fade edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            
            {/* Left Content: Text */}
            <div className="md:w-1/2 space-y-8 text-left">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
                >
                    Who we are
                </motion.h2>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed"
                >
                    <p className="font-semibold text-white">
                        Web3Solutions isn't just another tech agency, we're builders who turn complex ideas into scalable, meaningful products.
                    </p>
                    <p>
                        For 4+ years, we've helped startups and growing companies craft software that's reliable, intuitive, and actually solves problems.
                    </p>
                    <p>
                        From SaaS dashboards to AI automations,<br/>
                        we create tools that matter, not trends.
                    </p>
                </motion.div>

                 <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 px-8 py-3 border border-white/30 rounded-full text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all uppercase text-sm"
                >
                    know more
                </motion.button>
            </div>

            {/* Right Side: Visuals or "the future" text? */}
            {/* User said: "the future" */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
                <motion.h3 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-[80px] md:text-[120px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-br from-white/10 to-white/5 select-none"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }} // Maybe vertical layout for "the future"? Or just big text?
                    // Let's stick to standard horizontal big text for safety unless specified.
                    // Actually standard big text looks better.
                >
                    <span className="block text-right opacity-30">the</span>
                    <span className="block text-right bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-800 opacity-80">future</span>
                </motion.h3>
            </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
