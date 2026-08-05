"use client";
import { motion } from "framer-motion";

const cases = [
  {
    client: "Aethel",
    services: "Naming, Exact-Match Domain, Brand Identity",
    desc: "They had a category-defining product but a weak, unprotectable name. We engineered the name 'Aethel', acquired the exact-match .com domain from a private broker, and built a brutalist typography system that locked in their market authority.",
    image: "https://pub-6ab373e4f8a14951b823eed3c5dc87b5.r2.dev/Gemini_Generated_Image_8o5loz8o5loz8o5l.png"
  },
  {
    client: "Vesper",
    services: "Identity System, Digital Real Estate",
    desc: "Vesper came to us with a fragmented identity. We discarded the bloat, secured a highly sought-after 6-letter domain, and delivered a stark, monochromatic visual system. Their new digital real estate instantly positioned them as the luxury standard in their niche.",
    image: "https://pub-6ab373e4f8a14951b823eed3c5dc87b5.r2.dev/Gemini_Generated_Image_yct64kyct64kyct6.png"
  },
  {
    client: "Monolith",
    services: "Rebrand, Typography Architecture",
    desc: "A complete overhaul of their visual DNA. We designed a custom, heavy-weight typeface and established a brutalist grid system that stripped away all unnecessary decoration. The result is a corporate identity that cannot be copied or ignored.",
    image: "https://pub-6ab373e4f8a14951b823eed3c5dc87b5.r2.dev/Gemini_Generated_Image_a2h3y4a2h3y4a2h3.png"
  },
  {
    client: "NXT",
    services: "Naming, Domain Acquisition",
    desc: "When raising their Series B, their original name was facing a trademark dispute. Within 14 days, we negotiated the acquisition of a premium 3-letter domain, developed a razor-sharp new name, and deployed a transition strategy that secured their IP forever.",
    image: "https://pub-6ab373e4f8a14951b823eed3c5dc87b5.r2.dev/Gemini_Generated_Image_v7k4v3v7k4v3v7k4.png"
  }
];

export function Works() {
  return (
    <section className="relative z-10 w-full py-16 md:py-40 border-t border-white/10 overflow-hidden bg-[#050505]">
      <div className="max-w-[100vw] px-4 sm:px-6 md:px-12 mx-auto mb-10 md:mb-24 flex justify-between items-end">
        <h3 className="font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase">
          Selected <br/> Archives
        </h3>
        <p className="text-lime text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] uppercase hidden md:block mb-4">
          [ Scroll to Explore ]
        </p>
      </div>

      <div className="w-full">
        {/* Native Horizontal Scroll Container */}
        <div 
          className="flex gap-4 md:gap-16 w-full overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 md:px-12 pb-8 md:pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {cases.map((item, i) => (
            <div 
              key={i} 
              className="w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] shrink-0 snap-center sm:snap-start flex flex-col group cursor-pointer"
            >
              {/* Premium Image Container */}
              <div className="w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-zinc-900 mb-6 md:mb-8 relative border border-white/5">
                <img 
                  src={item.image} 
                  alt={item.client} 
                  draggable="false"
                  className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-[1000ms] pointer-events-none"></div>
              </div>
              
              {/* Description Section */}
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex flex-col">
                  <h4 className="font-display font-bold text-xl md:text-3xl tracking-tighter uppercase mb-1 transition-colors duration-500 group-hover:text-white">
                    {item.client}
                  </h4>
                  <p className="text-lime font-sans font-bold text-[9px] md:text-[10px] tracking-widest uppercase">
                    {item.services}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-sm text-white/60 md:text-white/50 leading-relaxed transition-colors duration-500 group-hover:text-white/80">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Empty spacing element so the last item can scroll to the center/edge nicely */}
          <div className="w-[5vw] md:w-[10vw] shrink-0 pointer-events-none"></div>
        </div>
      </div>
      
      {/* Mobile scroll indicator */}
      <div className="mt-4 md:mt-8 text-center md:hidden">
        <p className="text-lime text-[9px] font-sans font-bold tracking-[0.2em] uppercase opacity-70">
          [ Swipe to Explore ]
        </p>
      </div>
    </section>
  );
}
