import React from 'react';
import { motion } from 'framer-motion';
import projectVideo from '../assets/heroanimation.mp4'; // Reusing for demo

const ProjectCard = ({ title, category, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group w-[400px] h-[300px] bg-white/5 border border-white/10 rounded-xl overflow-hidden cursor-pointer flex-shrink-0"
    >
      {/* Video Background on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <video 
          src={projectVideo} 
          muted 
          loop 
          playsInline 
          autoPlay 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
          <span className="text-sm font-mono text-web-blue mb-2 block">{category}</span>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        
        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
           <span className="text-sm underline underline-offset-4 decoration-web-purple">View Project</span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    { title: "FinTech Dashboard", category: "Web App" },
    { title: "AI Image Generator", category: "Machine Learning" },
    { title: "E-Commerce Platform", category: "Full Stack" },
    { title: "Crypto Exchange", category: "Web3" },
    { title: "Smart Home App", category: "IoT" }
  ];

  return (
    <section className="py-24 overflow-x-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
        <p className="text-gray-400">Pioneering digital landscapes with precision.</p>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="flex gap-6 overflow-x-auto pb-8 px-6 no-scrollbar snap-x snap-mandatory">
        {projects.map((p, i) => (
          <ProjectCard key={i} index={i} {...p} />
        ))}
        {/* Spacer for right padding */}
        <div className="w-6 flex-shrink-0" />
      </div>
    </section>
  );
};

export default Projects;
