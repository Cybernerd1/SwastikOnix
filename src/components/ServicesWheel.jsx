import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import servicesVideo from '../assets/services-bg.mp4';
import dialWheel from '../assets/DialWheel.png';
import handsLine from '../assets/hands_line.png';

const ServicesWheel = () => {
  const [activeCategory, setActiveCategory] = useState('Web');
  const wheelRef = useRef(null);

  const categories = ['Web', 'App', 'Web3', 'ML', 'AI', 'Design', 'Automation'];

  // Content provided by user
  const servicesData = {
    Web: [
      {
        title: "Web Development",
        description: "We build high-performance, responsive websites and web applications using modern frameworks like React and Next.js, ensuring a seamless user experience across all devices."
      },
      {
        title: "E-commerce Solutions",
        description: "Custom online stores built for conversion, with secure payment integrations and intuitive product management systems."
      }
    ],
    App: [
      {
        title: "Mobile App Development",
        description: "We develop native and cross-platform mobile applications that are fast, secure, and user-friendly, helping you reach your audience on iOS and Android."
      },
      {
        title: "App UI/UX Design",
        description: "Crafting engaging mobile experiences with a focus on usability, performance, and platform-specific design patterns."
      }
    ],
    Web3: [
      {
        title: "Blockchain Development",
        description: "We specialize in blockchain technology, developing decentralized applications (DApps), smart contracts, and Web3 integrations."
      },
      {
        title: "Smart Contract Audits",
        description: "Ensuring the security and reliability of your blockchain protocols through rigorous testing and code analysis."
      }
    ],
    ML: [
      {
        title: "Machine Learning Models",
        description: "We leverage advanced machine learning algorithms to provide predictive analytics, natural language processing, and computer vision solutions."
      },
      {
        title: "Data Science & Analytics",
        description: "Turning raw data into actionable insights through statistical modeling and deep data exploration."
      }
    ],
    AI: [
      {
        title: "AI Development",
        description: "We build practical AI systems that automate tasks, enhance decision-making, and bring intelligence to your product without the unnecessary hype."
      },
      {
        title: "Generative AI Solutions",
        description: "Implementing cutting-edge LLMs and generative models to create unique content and interactive experiences."
      }
    ],
    Design: [
      {
        title: "UI/UX Design",
        description: "We design intuitive, elegant interfaces backed by smart user flows, making your product easier to use and faster to navigate."
      },
      {
        title: "Brand Identity",
        description: "Creating cohesive visual identities that resonate with your audience and strengthen your market presence."
      }
    ],
    Automation: [
      {
        title: "Workflow Automation",
        description: "We streamline repetitive tasks and build automated workflows that save time, reduce errors, and keep your operations running smoothly."
      },
      {
        title: "Process Optimization",
        description: "We analyze your systems and automate the bottlenecks, boosting efficiency and cutting manual work."
      }
    ]
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    const index = categories.indexOf(activeCategory);
    // Rotate based on number of categories to align
    if(wheelRef.current) {
        const rotation = index * -(360 / categories.length); 
        wheelRef.current.style.transform = `translateY(-50%) rotate(${rotation}deg)`;
    }
  }, [activeCategory, categories]);

  return (
    <section id="services" className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
      {/* 1. Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-50 scale-110" 
        >
          <source src={servicesVideo} type="video/mp4" />
        </video>
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Wheel Image - Rotates on Click, NOT Scroll */}
      <div 
        ref={wheelRef} 
        className="absolute -left-[200px] md:-left-[100px] top-1/2 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] z-10 pointer-events-none"
        style={{ transformOrigin: "center", transform: "translateY(-50%)" }}
      >
         <img src={dialWheel} alt="" className="w-full h-full object-contain opacity-40" />
      </div>

      {/* 2. Hands Line (Ruler) */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-20 pointer-events-none mix-blend-overlay opacity-80">
          <img src={handsLine} alt="" className="w-full h-auto object-cover" />
      </div>

      {/* Content Container - Aligned with the Line */}
      <div className="container mx-auto px-6 relative z-30 h-full flex items-center">
         <div className="w-full md:pl-[35%] flex flex-col">
            
            {/* Categories Navigation */}
            <div className="flex gap-10 mb-16 border-b border-white/10 pb-4 w-full overflow-x-auto no-scrollbar">
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={`text-2xl font-bold tracking-wider transition-colors duration-300 flex-shrink-0 ${
                            activeCategory === cat ? 'text-web-purple' : 'text-gray-500 hover:text-white'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* 3. Dynamic Content Display */}
            <div className="min-h-[300px]">
                <AnimatePresence mode="wait">
                    {servicesData[activeCategory] ? (
                        <motion.div 
                            key={activeCategory}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-10"
                        >
                           {servicesData[activeCategory].map((item, idx) => (
                               <div key={idx}>
                                   <div className="flex items-baseline gap-4 mb-2">
                                       <div className="w-12 h-[1px] bg-web-purple hidden md:block" /> {/** Decorative line connector */}
                                       <h3 className="text-4xl font-bold text-white leading-tight">
                                           {item.title.split('\n').map((l,i) => <span key={i} className="block">{l}</span>)}
                                       </h3>
                                   </div>
                                   <p className="text-gray-300 max-w-xl text-lg pl-0 md:pl-16">
                                       {item.description}
                                   </p>
                               </div>
                           ))}
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="empty"
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            className="text-gray-500 italic text-xl"
                        >
                            Content for {activeCategory} coming soon.
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

         </div>
      </div>
    </section>
  );
};

export default ServicesWheel;
