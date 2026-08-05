export function Principles() {
  const principles = [
    {
      id: "01",
      title: "Data-Driven Creativity",
      desc: "Intuition is good. Evidence is better. Every creative decision we make is backed by market analysis, consumer psychology, and behavioral data. We don't guess; we engineer.",
    },
    {
      id: "02",
      title: "Radical Transparency",
      desc: "No black boxes. No agency speak. You see exactly what we are building, why we are building it, and how it performs. We partner with founders, we don't just sell to them.",
    },
    {
      id: "03",
      title: "Relentless Execution",
      desc: "Speed without compromising quality. We deploy agile sprints to take your brand from concept to market dominance in record time. We execute with military precision.",
    },
    {
      id: "04",
      title: "Future-Proof Architecture",
      desc: "A brilliant logo cannot save a house built on sand. We build resilient brand foundations, secure premium digital real estate, and design systems meant to scale.",
    }
  ];

  return (
    <section className="relative z-10 w-full px-6 py-32 md:py-48 bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Mission Statement */}
        <div className="mb-32 md:mb-48 max-w-5xl">
          <h3 className="text-lime font-sans font-bold tracking-widest uppercase mb-8 text-sm sm:text-base">Our Mission</h3>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl leading-[1.1] tracking-tight uppercase text-white mb-10">
            We don't just create brands. <br className="hidden md:block" />
            <span className="text-white/40">We forge weapons for market leaders.</span>
          </h2>
          <p className="font-sans text-xl md:text-3xl text-white/70 max-w-3xl leading-relaxed">
            Our objective is singular: to engineer brand architectures that dominate categories and secure exclusive digital assets before your competitors even wake up.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="border-t border-white/10 pt-16 md:pt-24">
          <h3 className="text-lime font-sans font-bold tracking-widest uppercase mb-16 text-sm sm:text-base">Principles of Work</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
            {principles.map((p) => (
              <div key={p.id} className="group relative">
                <div className="flex items-baseline gap-6 mb-6">
                  <span className="font-display font-black text-4xl md:text-6xl text-white/10 group-hover:text-lime transition-colors duration-500">
                    {p.id}
                  </span>
                  <h4 className="font-display font-bold text-2xl md:text-4xl text-white uppercase tracking-tight">
                    {p.title}
                  </h4>
                </div>
                <p className="font-sans text-lg md:text-xl text-white/60 leading-relaxed pl-14 md:pl-24">
                  {p.desc}
                </p>
                {/* Decorative Line */}
                <div className="absolute -bottom-8 left-14 md:left-24 right-0 h-[1px] bg-white/5 group-hover:bg-lime/30 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
