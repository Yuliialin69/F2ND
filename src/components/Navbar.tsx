"use client";
import Link from 'next/link';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-6 py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
      <Link href="/" className="flex items-center pointer-events-auto" aria-label="F2ND Home">
        <Logo className="h-10 sm:h-12 w-auto" />
      </Link>
      
      <a href="mailto:brand@f2nd.com" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-3 bg-transparent border-none text-white text-sm font-bold tracking-wide uppercase overflow-hidden cursor-pointer pointer-events-auto">
        <span className="relative z-10">Inquire</span>
        <span className="w-2.5 h-2.5 rounded-full bg-lime transition-transform duration-300 group-hover:scale-[3]"></span>
      </a>
    </header>
  );
}

