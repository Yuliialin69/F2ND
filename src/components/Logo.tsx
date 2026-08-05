import React from 'react';

export function Logo({ className = "h-10 w-auto text-white" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 350 120" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="spotlight-mask">
          <rect width="100%" height="100%" fill="white" />
          {/* Spotlight cutout */}
          <path d="M 85 40 L 138 48 A 8 8 0 1 0 138 64 L 85 70 Z" fill="black" />
        </mask>
      </defs>
      
      <text 
        x="0" 
        y="100" 
        fontFamily="Arial Black, Impact, system-ui, sans-serif" 
        fontSize="130" 
        fontWeight="900" 
        letterSpacing="-5" 
      >
        <tspan fill="currentColor">F</tspan>
        <tspan fill="#65a30d" mask="url(#spotlight-mask)">2</tspan>
        <tspan fill="currentColor">ND</tspan>
      </text>
    </svg>
  );
}
