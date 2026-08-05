"use client";
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-8 flex justify-between items-center mix-blend-difference text-white">
      <Link href="/" className="font-display font-black text-4xl tracking-tighter uppercase flex items-center">
        F<span className="text-lime relative">
          2
          {/* Subtle stylized cutout approximation for the '2' */}
          <span className="absolute top-[30%] left-[30%] w-2 h-2 bg-background rounded-full mix-blend-difference" />
        </span>ND
      </Link>
      
      <a href="https://t.me/f2ndbrands" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-3 bg-transparent border-none text-white text-sm font-bold tracking-wide uppercase overflow-hidden cursor-pointer">
        <span className="relative z-10">Inquire</span>
        <span className="w-2.5 h-2.5 rounded-full bg-lime transition-transform duration-300 group-hover:scale-[3]"></span>
      </a>
    </header>
  );
}

