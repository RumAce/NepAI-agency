import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="orangeGradient" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#FB923C" /> {/* Orange-400 */}
        <stop offset="100%" stopColor="#C2410C" /> {/* Orange-700 */}
      </linearGradient>
      <linearGradient id="blueGradient" x1="100" y1="0" x2="0" y2="100">
        <stop offset="0%" stopColor="#60A5FA" /> {/* Blue-400 */}
        <stop offset="100%" stopColor="#1E3A8A" /> {/* Blue-900 */}
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Left Hemisphere (Orange - Tech/Circuit Side) */}
    <path 
      d="M48 15C32 15 12 28 12 55C12 78 32 92 48 92V15Z" 
      fill="url(#orangeGradient)" 
    />
    
    {/* Internal Circuit Lines (Left) */}
    <g stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8">
      <path d="M25 40 H 35" />
      <path d="M20 55 H 32" />
      <path d="M28 70 H 40" />
      <path d="M35 40 V 28" />
      <circle cx="35" cy="40" r="2.5" fill="white" stroke="none" />
      <circle cx="32" cy="55" r="2.5" fill="white" stroke="none" />
      <circle cx="28" cy="70" r="2.5" fill="white" stroke="none" />
    </g>

    {/* Right Hemisphere (Blue - Creative/Organic Side) */}
    <path 
      d="M52 15C68 15 88 28 88 55C88 78 68 92 52 92V15Z" 
      fill="url(#blueGradient)" 
    />
    
    {/* Internal Organic Folds (Right) */}
    <g stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6">
      <path d="M62 30 C 68 25, 75 35, 70 45" fill="none" />
      <path d="M78 50 C 82 55, 75 65, 65 60" fill="none" />
      <path d="M60 70 C 65 75, 75 75, 78 70" fill="none" />
    </g>

    {/* Center Split Divider */}
    <path d="M50 12V95" stroke="white" strokeWidth="2" strokeOpacity="0.2" strokeLinecap="round" />

    {/* Sparkles / Accents from the image */}
    <path d="M85 20 L 87 15 L 89 20 L 94 22 L 89 24 L 87 29 L 85 24 L 80 22 Z" fill="#FBBF24" />
    <circle cx="15" cy="25" r="3" fill="#60A5FA" fillOpacity="0.8" />
  </svg>
);

export default Logo;