import React, { useEffect, useRef, useState } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // Speed factor relative to scroll. Negative for background depth.
  className?: string;
}

export const Parallax: React.FC<ParallaxProps> = ({ 
  children, 
  speed = -0.1, 
  className = ""
}) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Calculate only if reasonably close to viewport to save performance
      if (rect.bottom + 100 > 0 && rect.top - 100 < viewHeight) {
        const viewCenter = viewHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        
        // Calculate distance from center of viewport
        const distance = elementCenter - viewCenter;
        
        // Apply speed
        setOffset(distance * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calc

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      <div 
        style={{ 
          transform: `translate3d(0, ${offset}px, 0)`, 
          transition: 'transform 0.1s linear',
          willChange: 'transform'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Parallax;