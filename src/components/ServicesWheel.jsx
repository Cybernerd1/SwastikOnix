import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import servicesVideo from '../assets/services-bg.mp4';
import dialWheel from '../assets/DialWheel.png';
import handsLine from '../assets/hands_line.png';

const ServicesWheel = () => {
  const [activeCategory, setActiveCategory] = useState('Web & App Development');
  const wheelRef = useRef(null);

  const categories = [
    'Web & App Development', 
    'UI / UX Design', 
    'Skill Training', 
    'Machine Learning Engineer', 
    'AI Engineer', 
    'Data Scientist', 
    'Data Analyst', 
    'Data Engineer'
  ];

  // Content provided by user
  const servicesData = {
    'Web & App Development': [
      {
        title: "Web & App Solutions",
        description: "We deliver full-cycle development services, building responsive websites and high-performance mobile apps tailored to your business needs."
      },
      {
        title: "Full Stack Engineering",
        description: "Expertising in modern stacks like MERN, Next.js, and Flutter to create scalable, secure, and robust digital ecosystems."
      }
    ],
    'UI / UX Design': [
      {
        title: "User-Centric Interfaces",
        description: "Designing intuitive and aesthetically pleasing interfaces that prioritize user experience and drive engagement."
      },
      {
        title: "Prototyping & Wireframing",
        description: "Visualizing complex flows with detailed prototypes to ensure seamless functionality before development begins."
      }
    ],
    'Skill Training': [
      {
        title: "Industry-Ready Programs",
        description: "Comprehensive training modules designed by experts to master in-demand tech skills and stay ahead of the curve."
      },
      {
        title: "Hands-on Workshops",
        description: "Practical, project-based learning experiences that bridge the gap between theoretical knowledge and real-world application."
      }
    ],
    'Machine Learning Engineer': [
      {
        title: "Predictive Analytics",
        description: "Building sophisticated models to forecast trends, allowing you to make data-driven decisions with confidence."
      },
      {
        title: "Model Deployment",
        description: "Seamlessly integrating and deploying machine learning models into production environments for real-time impact."
      }
    ],
    'AI Engineer': [
      {
        title: "AI Integration",
        description: "Enhancing your existing systems with intelligent features like chatbots, basic automation, and smart recommendations."
      },
      {
        title: "Custom AI Solutions",
        description: "Developing tailored artificial intelligence systems to solve unique business challenges and optimize operations."
      }
    ],
    'Data Scientist': [
      {
        title: "Advanced Data Modeling",
        description: "Uncovering deep insights and hidden patterns within your data to drive strategic business growth."
      },
      {
        title: "Statistical Analysis",
        description: "Applying rigorous statistical methods to validate hypotheses and solve complex analytical problems."
      }
    ],
    'Data Analyst': [
      {
        title: "Data Visualization",
        description: "Transforming raw data into clear, interactive dashboards using tools like PowerBI and Tableau for easy monitoring."
      },
      {
        title: "Business Intelligence",
        description: "Generating actionable reports that track key performance indicators and operational efficiency."
      }
    ],
    'Data Engineer': [
      {
        title: "ETL Pipelines",
        description: "Constructing robust pipelines to extract, transform, and load data from various sources into centralized warehouses."
      },
      {
        title: "Big Data Infrastructure",
        description: "Architecting scalable data systems capable of processing and storing massive volumes of information securely."
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
      {/* 1. Background Video - Vibrant & Glowy */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-80 scale-110 saturate-150 contrast-110" 
        >
          <source src={servicesVideo} type="video/mp4" />
        </video>
        {/* Removed Dark Overlay for maximum vibrancy */}
        {/* Subtle radial gradient for text readability without killing the glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Wheel Image - Rotates on Click, NOT Scroll */}
      <div 
        ref={wheelRef} 
        className="absolute -left-[200px] md:-left-[100px] top-1/2 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] z-10 pointer-events-none"
        style={{ transformOrigin: "center", transform: "translateY(-50%)" }}
      >
         {/* Added glowing drop shadow to the wheel */}
         <img src={dialWheel} alt="" className="w-full h-full object-contain opacity-60 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
      </div>

      {/* 2. Hands Line (Ruler) */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-20 pointer-events-none mix-blend-overlay opacity-100">
          <img src={handsLine} alt="" className="w-full h-auto object-cover drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
      </div>

      {/* Content Container - Aligned with the Line */}
      <div className="container mx-auto px-6 relative z-30 h-full flex items-center">
         <div className="w-full md:pl-[35%] flex flex-col">
            
            {/* Categories Navigation */}
            <div className="flex gap-10 mb-16 border-b border-white/20 pb-4 w-full overflow-x-auto no-scrollbar relative">
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={`text-2xl font-bold tracking-wider transition-all duration-300 flex-shrink-0 relative group ${
                            activeCategory === cat ? 'text-white scale-110' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        {cat}
                        {activeCategory === cat && (
                            <motion.div 
                                layoutId="activeGlow"
                                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-web-purple rounded-full blur-[4px] shadow-[0_0_20px_#7000ff]"
                            />
                        )}
                        {/* Hover Dot */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/50 rounded-full blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

            {/* Contact Email */}
            

         </div>
      </div>
    </section>
  );
};

export default ServicesWheel;
