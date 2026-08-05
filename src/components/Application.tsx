"use client";
import { useState } from "react";

export function Application() {
  const [selected, setSelected] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    details: "",
    rebrandChallenge: "",
    domainTarget: "",
    assetsNeeded: ""
  });

  const objectives = [
    "Complete Rebrand",
    "Acquire a Premium Domain",
    "Visual Identity"
  ];

  const toggle = (item: string) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const WEBHOOK_URL: string = "https://script.google.com/macros/s/AKfycbw3zZHt60j1kidHrRH_I_kDH-iSpAK5lgTKAKuxB1W0jgEWQCadtyc3TLSkenisosx_/exec";
    
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          contact: formData.contact,
          objectives: selected.join(", "),
          details: `
Overall: ${formData.details}
${selected.includes("Complete Rebrand") ? `Rebrand Challenge: ${formData.rebrandChallenge}` : ""}
${selected.includes("Acquire a Premium Domain") ? `Domain Target: ${formData.domainTarget}` : ""}
${selected.includes("Visual Identity") ? `Assets Needed: ${formData.assetsNeeded}` : ""}
          `.trim()
        })
      });
    } catch (error) {
      console.error("Submission failed:", error);
    }
    
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="relative z-10 w-full pt-16 md:pt-48 flex flex-col items-center border-t border-white/10 mt-8 md:mt-12 bg-[#050505]">
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 mb-16 md:mb-48">
        <div className="text-center mb-16 md:mb-32">
          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl tracking-tighter leading-[0.9] uppercase">
            Secure Your <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #ffffff' }}>Unfair Advantage.</span>
          </h2>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-10 md:py-16 animate-[fadeIn_0.5s_ease-out] text-center max-w-2xl mx-auto px-4">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-lime rounded-full flex items-center justify-center mb-6 md:mb-8">
              <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter text-white mb-4 md:mb-6">
              Application Received
            </h3>
            <p className="text-white/60 font-sans text-base md:text-lg mb-8 md:mb-12">
              Our team will review your situation shortly. To expedite the process and speak directly with your dedicated manager, please connect on Telegram.
            </p>
            <a href="https://t.me/f2ndbrands" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-lime text-black py-5 md:py-8 font-display font-black text-xl md:text-3xl uppercase tracking-tighter hover:bg-white transition-colors duration-500 relative overflow-hidden group cursor-pointer">
              <span className="relative z-10">Proceed to Telegram</span>
              <div className="absolute inset-0 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500 ease-out"></div>
            </a>
          </div>
        ) : (
          <form className="flex flex-col gap-10 md:gap-16 max-w-3xl mx-auto" onSubmit={handleSubmit}>
            
            {/* Text Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-zinc-700 py-3 md:py-4 text-white font-sans text-base md:text-xl outline-none focus:border-lime transition-colors duration-300 rounded-none"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-3 md:top-4 text-white/40 font-sans uppercase tracking-widest text-[10px] md:text-xs pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-lime peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-white/80"
                >
                  Founder / Lead Name
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="text" 
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-zinc-700 py-3 md:py-4 text-white font-sans text-base md:text-xl outline-none focus:border-lime transition-colors duration-300 rounded-none"
                />
                <label 
                  htmlFor="company" 
                  className="absolute left-0 top-3 md:top-4 text-white/40 font-sans uppercase tracking-widest text-[10px] md:text-xs pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-lime peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-white/80"
                >
                  Current Company URL
                </label>
              </div>
            </div>

            <div className="relative group -mt-2 md:-mt-4">
              <input 
                type="text" 
                id="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full bg-transparent border-b border-zinc-700 py-3 md:py-4 text-white font-sans text-base md:text-xl outline-none focus:border-lime transition-colors duration-300 rounded-none"
              />
              <label 
                htmlFor="contact" 
                className="absolute left-0 top-3 md:top-4 text-white/40 font-sans uppercase tracking-widest text-[10px] md:text-xs pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-lime peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-white/80"
              >
                Contact Info (Telegram / WhatsApp / Email)
              </label>
            </div>

            {/* Custom Checkboxes */}
            <div className="flex flex-col gap-6 md:gap-8 pt-2 md:pt-4">
              <span className="text-white/40 font-sans uppercase tracking-widest text-[10px] md:text-xs">Primary Objective</span>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 flex-wrap">
                {objectives.map((item) => (
                  <div key={item} onClick={() => toggle(item)} className="flex items-center gap-4 cursor-pointer group p-2 -m-2 sm:p-0 sm:m-0">
                    <div className={`w-5 h-5 shrink-0 flex items-center justify-center border transition-colors duration-300 ${selected.includes(item) ? 'border-lime' : 'border-zinc-700 group-hover:border-zinc-400'}`}>
                      <div className={`w-2.5 h-2.5 bg-lime transition-transform duration-300 ${selected.includes(item) ? 'scale-100' : 'scale-0'}`} />
                    </div>
                    <span className={`font-sans text-sm md:text-base transition-colors duration-300 ${selected.includes(item) ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dynamic Fields Based on Selection */}
            <div className="flex flex-col gap-8 md:gap-12 w-full transition-all duration-500">
              {selected.includes("Complete Rebrand") && (
                <div className="relative group animate-[fadeIn_0.5s_ease-out]">
                  <input type="text" id="rebrandChallenge" value={formData.rebrandChallenge} onChange={handleChange} placeholder=" " className="peer w-full bg-transparent border-b border-zinc-700 py-3 md:py-4 text-white font-sans text-base md:text-xl outline-none focus:border-lime transition-colors duration-300 rounded-none"/>
                  <label htmlFor="rebrandChallenge" className="absolute left-0 top-3 md:top-4 text-white/40 font-sans uppercase tracking-widest text-[10px] md:text-xs pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-lime peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-white/80">
                    Biggest weakness of current brand?
                  </label>
                </div>
              )}
              
              {selected.includes("Acquire a Premium Domain") && (
                <div className="relative group animate-[fadeIn_0.5s_ease-out]">
                  <input type="text" id="domainTarget" value={formData.domainTarget} onChange={handleChange} placeholder=" " className="peer w-full bg-transparent border-b border-zinc-700 py-3 md:py-4 text-white font-sans text-base md:text-xl outline-none focus:border-lime transition-colors duration-300 rounded-none"/>
                  <label htmlFor="domainTarget" className="absolute left-0 top-3 md:top-4 text-white/40 font-sans uppercase tracking-widest text-[10px] md:text-xs pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-lime peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-white/80">
                    Target domain or keywords?
                  </label>
                </div>
              )}

              {selected.includes("Visual Identity") && (
                <div className="relative group animate-[fadeIn_0.5s_ease-out]">
                  <input type="text" id="assetsNeeded" value={formData.assetsNeeded} onChange={handleChange} placeholder=" " className="peer w-full bg-transparent border-b border-zinc-700 py-3 md:py-4 text-white font-sans text-base md:text-xl outline-none focus:border-lime transition-colors duration-300 rounded-none"/>
                  <label htmlFor="assetsNeeded" className="absolute left-0 top-3 md:top-4 text-white/40 font-sans uppercase tracking-widest text-[10px] md:text-xs pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-lime peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-white/80">
                    List specific assets needed
                  </label>
                </div>
              )}
            </div>

            {/* Details Textarea */}
            <div className="relative group mt-2 md:mt-4">
              <textarea 
                id="details"
                rows={1}
                value={formData.details}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border-b border-zinc-700 py-3 md:py-4 text-white font-sans text-base md:text-xl outline-none focus:border-lime transition-colors duration-300 placeholder-transparent resize-none overflow-hidden min-h-[50px] md:min-h-[60px]"
                placeholder="Briefly describe your situation"
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = `${target.scrollHeight}px`;
                }}
              ></textarea>
              <label 
                htmlFor="details" 
                className="absolute left-0 top-3 md:top-4 text-white/40 font-sans uppercase tracking-widest text-[10px] md:text-xs pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-lime peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-white/80"
              >
                Briefly describe your overall situation
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`block w-full text-center py-5 md:py-8 mt-2 md:mt-4 font-display font-black text-xl md:text-4xl uppercase tracking-tighter transition-colors duration-500 relative overflow-hidden group cursor-pointer ${isSubmitting ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'bg-white text-black hover:bg-lime'}`}
            >
              <span className="relative z-10">{isSubmitting ? "Submitting..." : "Submit Application"}</span>
              {!isSubmitting && <div className="absolute inset-0 bg-lime transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500 ease-out"></div>}
            </button>
          </form>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 pt-10 md:pt-16 flex flex-col overflow-hidden mt-auto">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-4 sm:px-6 mb-8 sm:mb-24">
          <p className="text-[10px] sm:text-xs tracking-widest uppercase font-sans font-bold text-white/30">© 2024 F2ND</p>
          <div className="flex gap-8">
            <a href="https://t.me/f2ndbrands" target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-xs tracking-widest uppercase font-sans font-bold text-lime hover:text-white transition-colors duration-300">Telegram</a>
          </div>
        </div>
        
        {/* Giant Logo */}
        <div className="w-full flex justify-center items-end leading-none overflow-hidden translate-y-[15%]">
          <h1 className="font-display font-black text-[25vw] tracking-tighter text-white uppercase m-0 p-0 opacity-10 select-none">
            F2ND
          </h1>
        </div>
      </footer>
    </section>
  );
}
