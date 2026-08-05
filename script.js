// script.js

// 1. Initialize Smooth Scroll (Lenis)
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  smoothWheel: true
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Integrate GSAP with Lenis
gsap.registerPlugin(ScrollTrigger);

// 2. Hero Animations
const heroWords = document.querySelectorAll('.hero-word');
gsap.to(heroWords, {
  y: "0%",
  opacity: 1,
  rotation: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  delay: 0.2
});

gsap.to('.hero-subtitle', {
  y: 0,
  opacity: 1,
  duration: 0.8,
  delay: 1,
  ease: "power2.out"
});

gsap.to('.hero-btn', {
  scale: 1,
  opacity: 1,
  duration: 0.5,
  delay: 1.2,
  ease: "back.out(1.7)"
});

// 3. Scroll Animations for Sections
gsap.utils.toArray('.section-fade-up').forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
});

gsap.utils.toArray('.team-member').forEach((member, i) => {
  gsap.to(member, {
    scrollTrigger: {
      trigger: '.team-grid',
      start: "top 80%"
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    delay: i * 0.2,
    ease: "spring(1, 60, 15)"
  });
});

// 4. Capabilities List Logic
const capabilitiesData = [
  { title: "Brand Strategy & Positioning", desc: "We architect the foundations of your brand, establishing core messaging and market positioning that separates you from the noise.", highlight: false },
  { title: "Naming & Digital Real Estate", desc: "Your domain is your ultimate digital monopoly. We discreetly source, negotiate, and secure ultra-premium digital assets and exact-match domains that make your brand untouchable.", highlight: true },
  { title: "Visual Identity Systems", desc: "We design brutal, beautiful, and uncompromising visual systems that command attention and communicate absolute authority.", highlight: false },
  { title: "Digital Experience & UX", desc: "We build high-performance digital environments that guide users through a seamless, immersive journey, converting attention into action.", highlight: false },
  { title: "High-End Web Engineering", desc: "Beyond aesthetics, we engineer highly performant, scalable, and secure web applications using cutting-edge architectures.", highlight: false },
  { title: "Performance Marketing & SEO", desc: "We engineer data-driven growth loops, commanding search visibility and maximizing ROI through algorithmic precision and strategic media buying.", highlight: false },
  { title: "Content & Storytelling", desc: "We don't just write copy. We forge narratives that establish thought leadership and build cult-like loyalty around your brand.", highlight: false }
];

const capList = document.querySelector('.capabilities-list');
if(capList) {
  capabilitiesData.forEach((item, index) => {
    const html = `
      <div class="cap-item group relative border-b border-white/10 py-10 cursor-pointer overflow-hidden transition-colors duration-500">
        <div class="cap-bg absolute inset-0 bg-gradient-to-r from-lime/10 to-transparent transition-opacity duration-500 ease-out opacity-0"></div>
        
        <div class="relative z-10 flex flex-col md:flex-row md:items-baseline px-4 transition-transform duration-500 group-hover:translate-x-4">
          <div class="flex items-center gap-6 md:gap-12 w-full">
            <span class="text-white/20 font-sans text-sm md:text-base font-bold tracking-widest w-8">0${index + 1}</span>
            <h4 class="cap-title font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight uppercase transition-colors duration-300 ${item.highlight ? 'text-neutral-300' : 'text-white'}">
              ${item.title}
            </h4>
          </div>
        </div>

        <div class="cap-desc-wrap overflow-hidden" style="height: 0; opacity: 0; transition: height 0.4s ease-out, opacity 0.4s ease-out;">
          <p class="font-sans text-base md:text-xl text-white/70 max-w-3xl pt-6 pl-4 md:pl-[5.5rem]">
            ${item.desc}
          </p>
        </div>
      </div>
    `;
    capList.insertAdjacentHTML('beforeend', html);
  });

  const capItems = document.querySelectorAll('.cap-item');
  capItems.forEach(item => {
    const bg = item.querySelector('.cap-bg');
    const title = item.querySelector('.cap-title');
    const descWrap = item.querySelector('.cap-desc-wrap');
    
    // Store original color class
    const isHighlight = title.classList.contains('text-neutral-300');
    
    item.addEventListener('mouseenter', () => {
      bg.classList.remove('opacity-0');
      bg.classList.add('opacity-100');
      title.classList.remove('text-white', 'text-neutral-300');
      title.classList.add('text-lime');
      
      descWrap.style.height = descWrap.scrollHeight + 'px';
      descWrap.style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', () => {
      bg.classList.remove('opacity-100');
      bg.classList.add('opacity-0');
      title.classList.remove('text-lime');
      if (isHighlight) {
        title.classList.add('text-neutral-300');
      } else {
        title.classList.add('text-white');
      }
      
      descWrap.style.height = '0';
      descWrap.style.opacity = '0';
    });
  });
}

// 5. Application Form Logic
const selectedObjectives = new Set();
const objBoxes = document.querySelectorAll('.obj-box');
const dynamicFields = document.getElementById('dynamic-fields');

function updateDynamicFields() {
  dynamicFields.innerHTML = '';
  
  if(selectedObjectives.has('Complete Rebrand')) {
    dynamicFields.insertAdjacentHTML('beforeend', `
      <div class="relative group animate-fadeIn">
        <input type="text" id="rebrandChallenge" placeholder=" " class="peer w-full bg-transparent border-b border-zinc-700 py-3 md:py-4 text-white font-sans text-base md:text-xl outline-none focus:border-lime transition-colors duration-300 rounded-none"/>
        <label for="rebrandChallenge" class="absolute left-0 top-3 md:top-4 text-white/40 font-sans uppercase tracking-widest text-[10px] md:text-xs pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-lime peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-white/80">Biggest weakness of current brand?</label>
      </div>
    `);
  }
  
  if(selectedObjectives.has('Acquire a Premium Domain')) {
    dynamicFields.insertAdjacentHTML('beforeend', `
      <div class="relative group animate-fadeIn">
        <input type="text" id="domainTarget" placeholder=" " class="peer w-full bg-transparent border-b border-zinc-700 py-3 md:py-4 text-white font-sans text-base md:text-xl outline-none focus:border-lime transition-colors duration-300 rounded-none"/>
        <label for="domainTarget" class="absolute left-0 top-3 md:top-4 text-white/40 font-sans uppercase tracking-widest text-[10px] md:text-xs pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-lime peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-white/80">Target domain or keywords?</label>
      </div>
    `);
  }

  if(selectedObjectives.has('Visual Identity')) {
    dynamicFields.insertAdjacentHTML('beforeend', `
      <div class="relative group animate-fadeIn">
        <input type="text" id="assetsNeeded" placeholder=" " class="peer w-full bg-transparent border-b border-zinc-700 py-3 md:py-4 text-white font-sans text-base md:text-xl outline-none focus:border-lime transition-colors duration-300 rounded-none"/>
        <label for="assetsNeeded" class="absolute left-0 top-3 md:top-4 text-white/40 font-sans uppercase tracking-widest text-[10px] md:text-xs pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-lime peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-white/80">List specific assets needed</label>
      </div>
    `);
  }
}

objBoxes.forEach(box => {
  box.addEventListener('click', () => {
    const val = box.getAttribute('data-val');
    const check = box.querySelector('.obj-check');
    const inner = box.querySelector('.obj-inner');
    const text = box.querySelector('.obj-text');

    if (selectedObjectives.has(val)) {
      selectedObjectives.delete(val);
      check.classList.remove('border-lime');
      check.classList.add('border-zinc-700', 'group-hover:border-zinc-400');
      inner.classList.remove('scale-100');
      inner.classList.add('scale-0');
      text.classList.remove('text-white');
      text.classList.add('text-white/60', 'group-hover:text-white/90');
    } else {
      selectedObjectives.add(val);
      check.classList.add('border-lime');
      check.classList.remove('border-zinc-700', 'group-hover:border-zinc-400');
      inner.classList.add('scale-100');
      inner.classList.remove('scale-0');
      text.classList.add('text-white');
      text.classList.remove('text-white/60', 'group-hover:text-white/90');
    }
    
    updateDynamicFields();
  });
});

// Auto-resize textarea
const detailsArea = document.getElementById('details');
if(detailsArea) {
  detailsArea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });
}

// Form Submission
const form = document.getElementById('app-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const submitHover = document.getElementById('submit-hover');
    
    // UI state to submitting
    submitBtn.classList.remove('bg-white', 'text-black', 'hover:bg-lime');
    submitBtn.classList.add('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed');
    submitBtn.disabled = true;
    submitText.innerText = "Submitting...";
    if(submitHover) submitHover.style.display = 'none';
    
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const contact = document.getElementById('contact').value;
    const details = document.getElementById('details').value;
    
    const rebrand = document.getElementById('rebrandChallenge');
    const domainTarget = document.getElementById('domainTarget');
    const assets = document.getElementById('assetsNeeded');
    
    let combinedDetails = `Overall: ${details}\n`;
    if(rebrand) combinedDetails += `Rebrand Challenge: ${rebrand.value}\n`;
    if(domainTarget) combinedDetails += `Domain Target: ${domainTarget.value}\n`;
    if(assets) combinedDetails += `Assets Needed: ${assets.value}\n`;
    
    const payload = {
      name: name,
      company: company,
      contact: contact,
      objectives: Array.from(selectedObjectives).join(", "),
      details: combinedDetails.trim()
    };

    const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbw3zZHt60j1kidHrRH_I_kDH-iSpAK5lgTKAKuxB1W0jgEWQCadtyc3TLSkenisosx_/exec";

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.error(err);
    }
    
    setTimeout(() => {
      form.classList.add('hidden');
      const successMsg = document.getElementById('success-message');
      successMsg.classList.remove('hidden');
      successMsg.classList.add('flex');
      
      const emailBtn = document.getElementById('email-btn');
      const subject = encodeURIComponent(`F2ND Application: ${company || name}`);
      const body = encodeURIComponent(`Hello F2ND team,\n\nI just submitted my application for ${company || name}. Looking forward to discussing our brand architecture.`);
      emailBtn.href = `mailto:brand@f2nd.com?subject=${subject}&body=${body}`;
    }, 800);
  });
}
