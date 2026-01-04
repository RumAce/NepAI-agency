import React from 'react';

export const Mascot: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Headphone Band */}
    <path d="M15 50 C15 20 30 5 50 5 C70 5 85 20 85 50" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
    
    {/* Brain Shape */}
    <path d="M20 50 C20 30 30 20 50 20 C70 20 80 30 80 50 C80 75 70 85 50 85 C30 85 20 75 20 50Z" fill="#3B82F6" />
    
    {/* Brain Details */}
    <path d="M50 20 V 50" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M30 35 C35 30 45 30 45 40" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M70 35 C65 30 55 30 55 40" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>

    {/* Headphone Earcups */}
    <rect x="8" y="42" width="10" height="24" rx="4" fill="#334155" />
    <rect x="82" y="42" width="10" height="24" rx="4" fill="#334155" />
    
    {/* Earcup Logo */}
    <circle cx="87" cy="54" r="2.5" fill="#F97316" />
    {/* Chart bars on headphone */}
    <rect x="85" y="48" width="1" height="4" fill="#F97316" />
    <rect x="87" y="46" width="1" height="6" fill="#F97316" />
    <rect x="89" y="44" width="1" height="8" fill="#F97316" />

    {/* Sunglasses */}
    <defs>
        <linearGradient id="lensGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <filter id="shadow">
            <feDropShadow dx="1" dy="2" stdDeviation="1" floodOpacity="0.3" />
        </filter>
    </defs>
    <g filter="url(#shadow)">
        <path d="M22 50 H 48 L 45 62 C 45 62 38 68 28 62 L 25 60 Z" fill="url(#lensGrad)" stroke="#0F172A" strokeWidth="2"/>
        <path d="M52 50 H 78 L 75 60 C 75 60 65 68 55 62 L 52 62 Z" fill="url(#lensGrad)" stroke="#0F172A" strokeWidth="2"/>
        <path d="M48 50 H 52" stroke="#0F172A" strokeWidth="2.5"/>
        
        {/* Lens Glare */}
        <path d="M28 52 L 35 52 L 32 58 Z" fill="white" fillOpacity="0.3" />
        <path d="M58 52 L 65 52 L 62 58 Z" fill="white" fillOpacity="0.3" />
    </g>

    {/* Megaphone */}
    <g transform="rotate(-15, 30, 80)">
       <path d="M35 75 L 15 68 V 92 L 35 85 Z" fill="#2563EB" stroke="#1E3A8A" strokeWidth="1"/>
       <ellipse cx="35" cy="80" rx="3" ry="5" fill="#1E40AF" />
       {/* Sound bars inside megaphone */}
       <rect x="20" y="75" width="3" height="10" fill="#F97316" transform="rotate(90 21.5 80)" />
       <rect x="25" y="72" width="3" height="16" fill="#F97316" transform="rotate(90 26.5 80)" />
    </g>
    
    {/* Smile peaking out */}
    <path d="M55 75 Q 65 80 75 72" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

  </svg>
);

export default Mascot;