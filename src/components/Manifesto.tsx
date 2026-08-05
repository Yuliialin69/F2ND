export function Manifesto() {
  return (
    <section className="relative z-10 w-full px-6 py-24 md:py-48 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative items-start">
        {/* Left Column - Sticky */}
        <div className="relative h-full">
          <div className="md:sticky md:top-40">
            <h2 
              className="font-display font-black italic text-6xl sm:text-7xl lg:text-[8rem] leading-[0.85] tracking-tighter uppercase"
              style={{
                WebkitTextStroke: '2px #a3e635',
                color: 'transparent'
              }}
            >
              DON'T MAKE OUR MISTAKE.
            </h2>
          </div>
        </div>

        {/* Right Column - Scrollable Text */}
        <div className="flex flex-col justify-start md:pb-32">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-medium text-white/90 leading-relaxed md:leading-[1.4] tracking-tight">
            We’ve seen visionaries build category-defining products, only to lose their market share because of weak naming, unprotected IP, and compromised digital real estate. A brilliant logo cannot save a house built on sand.
            <br /><br />
            We are F2ND. We engineer brand architectures, <span className="text-lime font-bold">secure exclusive digital assets</span>, and design visual systems that dominate.
          </p>
        </div>
      </div>
    </section>
  );
}
