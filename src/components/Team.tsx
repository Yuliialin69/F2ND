"use client";
import { motion, Variants } from "framer-motion";

const team = [
  {
    name: "Nick",
    role: "Founder & Chief Brand Architect",
    bio: "Lost a multi-million dollar exit to a trademark dispute. Now, he engineers bulletproof brand architectures designed for market dominance.",
    image: "https://pub-df33d1e0b23e4425b53771460160973b.r2.dev/Mentors/3.png"
  },
  {
    name: "Michael",
    role: "Design Director",
    bio: "An absolute purist. Believes aesthetics without a strategic anchor is just decoration. Crafts brutal, highly functional visual systems.",
    image: "https://pub-df33d1e0b23e4425b53771460160973b.r2.dev/Mentors/1.png"
  },
  {
    name: "Mira",
    role: "Head of Digital Real Estate",
    bio: "The shadow broker of the digital world. She secures the exact-match, premium domains that competitors thought were impossible to buy.",
    image: "https://pub-df33d1e0b23e4425b53771460160973b.r2.dev/Mentors/5.png"
  },
  {
    name: "Julia",
    role: "Head of Digital Experience",
    bio: "Translates static identities into living ecosystems. Blurs the line between brand identity and flawless, high-end digital products.",
    image: "https://pub-df33d1e0b23e4425b53771460160973b.r2.dev/Mentors/4.png"
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15
    }
  }
};

export function Team() {
  return (
    <section className="relative z-10 w-full px-4 sm:px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase">
            The Minds Behind F2ND
          </h3>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-8"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={item} className="flex flex-col group cursor-pointer">
              {/* Portrait Placeholder */}
              <div className="w-full aspect-[3/4] bg-zinc-900 mb-6 overflow-hidden relative border border-white/5">
                {/* Simulated Image Content */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <h4 className="font-display font-bold text-xl md:text-2xl tracking-tighter uppercase mb-1">
                {member.name}
              </h4>
              <p className="text-lime text-[10px] md:text-xs font-sans font-bold tracking-widest uppercase mb-4 h-8">
                {member.role}
              </p>
              <p className="font-sans text-sm text-white/60 leading-relaxed max-w-[90%]">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
