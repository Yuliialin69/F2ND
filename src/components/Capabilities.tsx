"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const capabilities = [
  {
    title: "Brand Strategy & Positioning",
    desc: "We architect the foundations of your brand, establishing core messaging and market positioning that separates you from the noise."
  },
  {
    title: "Naming & Digital Real Estate",
    desc: "Your domain is your ultimate digital monopoly. We discreetly source, negotiate, and secure ultra-premium digital assets and exact-match domains that make your brand untouchable.",
    highlight: true
  },
  {
    title: "Visual Identity Systems",
    desc: "We design brutal, beautiful, and uncompromising visual systems that command attention and communicate absolute authority."
  },
  {
    title: "Digital Experience & UX",
    desc: "We build high-performance digital environments that guide users through a seamless, immersive journey, converting attention into action."
  },
  {
    title: "High-End Web Engineering",
    desc: "Beyond aesthetics, we engineer highly performant, scalable, and secure web applications using cutting-edge architectures."
  },
  {
    title: "Performance Marketing & SEO",
    desc: "We engineer data-driven growth loops, commanding search visibility and maximizing ROI through algorithmic precision and strategic media buying."
  },
  {
    title: "Content & Storytelling",
    desc: "We don't just write copy. We forge narratives that establish thought leadership and build cult-like loyalty around your brand."
  }
];

export function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative z-10 w-full px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lime text-xs md:text-sm font-sans font-bold tracking-[0.25em] uppercase mb-16 pl-4">
          Core Capabilities
        </h3>
        
        <div className="flex flex-col border-t border-white/10">
          {capabilities.map((item, index) => (
            <div 
              key={index}
              className="group relative border-b border-white/10 py-10 cursor-pointer overflow-hidden transition-colors duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Subtle Lime Glow */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-lime/10 to-transparent transition-opacity duration-500 ease-out ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`} 
              />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-baseline px-4 transition-transform duration-500 group-hover:translate-x-4">
                <div className="flex items-center gap-6 md:gap-12 w-full">
                  <span className="text-white/20 font-sans text-sm md:text-base font-bold tracking-widest w-8">
                    0{index + 1}
                  </span>
                  <h4 
                    className={`font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight uppercase transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-lime' : item.highlight ? 'text-neutral-300' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative z-10 overflow-hidden"
                  >
                    <p className="font-sans text-base md:text-xl text-white/70 max-w-3xl pt-6 pl-4 md:pl-[5.5rem]">
                      {item.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
