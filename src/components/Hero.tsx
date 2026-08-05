"use client";
import { motion, Variants } from 'framer-motion';

export function Hero() {
  const headline = "WE BUILD BRANDS THAT CANNOT BE IGNORED.";
  const words = headline.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { y: "110%", opacity: 0, rotate: 2 },
    show: { 
      y: "0%", 
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full text-center flex flex-col items-center">
        <motion.h1 
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tighter leading-[0.85] uppercase flex flex-wrap justify-center gap-x-3 md:gap-x-8 gap-y-1 md:gap-y-2 overflow-hidden mb-8 md:mb-12"
        >
          {words.map((word, i) => (
            <motion.span 
              key={i} 
              variants={item} 
              className={`inline-block ${word === 'IGNORED.' ? 'text-lime' : 'text-white'}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-white/70 text-base md:text-2xl font-sans max-w-2xl mb-10 md:mb-16 font-medium tracking-tight"
        >
          Starting with digital assets that cannot be copied.
        </motion.p>
        
        <motion.a 
          href="https://t.me/f2ndbrands"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="group relative px-8 py-4 md:px-10 md:py-5 rounded-full border-2 border-lime text-lime font-sans font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-lime hover:text-black transition-all duration-300 overflow-hidden inline-block"
        >
          <span className="relative z-10">Initiate Audit</span>
          <div className="absolute inset-0 h-full w-full bg-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
        </motion.a>
      </div>
    </section>
  );
}
