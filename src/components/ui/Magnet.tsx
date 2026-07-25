import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const [isActive, setIsActive] = useState(false);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;
      
      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const absDistanceX = Math.abs(distanceX);
      const absDistanceY = Math.abs(distanceY);
      
      if (absDistanceX < (width / 2 + padding) && absDistanceY < (height / 2 + padding)) {
        setIsActive(true);
        setTransform(`translate3d(${distanceX / strength}px, ${distanceY / strength}px, 0px)`);
      } else {
        setIsActive(false);
        setTransform('translate3d(0px, 0px, 0px)');
      }
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, [padding, strength]);

  return (
    <div 
      ref={magnetRef}
      className={className}
      style={{ 
        transform, 
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}
