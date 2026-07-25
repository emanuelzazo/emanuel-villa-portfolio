import React, { useEffect, useState, useRef } from 'react';
import epicsWeb from '../../assets/images/projects/epics-web.webp';
import tocarPronto from '../../assets/images/projects/tocar-pronto.webp';
import havana2099 from '../../assets/images/projects/havana-2099.webp';
import vanguard from '../../assets/images/projects/vanguard.webp';
import epicsAiDemo from '../../assets/images/projects/epics-ai-demo.webp';
import fbPublisher from '../../assets/images/projects/fb-publisher.webp';

const shots = [epicsWeb, tocarPronto, havana2099, vanguard, epicsAiDemo, fbPublisher];

const row1Images = [...shots, ...shots, ...shots];
const row2Images = [...shots.slice(3), ...shots.slice(0, 3), ...shots.slice(3), ...shots.slice(0, 3), ...shots.slice(3), ...shots.slice(0, 3)];

export function MarqueeSection() {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const calcOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calcOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3">
      <div
        className="flex gap-3 w-max"
        style={{ transform: `translate3d(${offset - 200}px, 0, 0)`, willChange: 'transform' }}
      >
        {row1Images.map((src, i) => (
          <img key={`r1-${i}`} src={src} loading="lazy" alt="Captura de proyecto real" className="w-[420px] h-[270px] rounded-2xl object-cover object-top shrink-0" />
        ))}
      </div>
      <div
        className="flex gap-3 w-max"
        style={{ transform: `translate3d(${-(offset - 200)}px, 0, 0)`, willChange: 'transform' }}
      >
        {row2Images.map((src, i) => (
          <img key={`r2-${i}`} src={src} loading="lazy" alt="Captura de proyecto real" className="w-[420px] h-[270px] rounded-2xl object-cover object-top shrink-0" />
        ))}
      </div>
    </section>
  );
}
