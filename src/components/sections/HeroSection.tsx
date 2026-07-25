import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { ContactButton } from '../ui/Buttons';
import customAvatar from '../../assets/images/avatar_black_bg_1783582791769.png';

export function HeroSection() {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full z-20">
        <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Sobre Mí</a>
        <a href="#services" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Servicios</a>
        <a href="#projects" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Proyectos</a>
        <a href="#contact" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Contacto</a>
      </FadeIn>
      
      <div className="flex-1 flex flex-col justify-between">
        <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 relative z-20 flex flex-col items-center">
          <FadeIn delay={0.15} y={40} className="w-full">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[12.5vw]">
              Emanuel Villa
            </h1>
          </FadeIn>
          <FadeIn delay={0.25} y={20}>
            <h2 className="text-[#D7E2EA] font-medium uppercase text-center tracking-widest text-xs sm:text-sm md:text-lg lg:text-xl mt-3 md:mt-4 opacity-80">
              Software Engineer · AI Solutions Architect
            </h2>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[180px] sm:max-w-[240px] md:max-w-[300px]">
              Construyo software, automatizaciones y soluciones de Inteligencia Artificial que impulsan el crecimiento.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 w-[310px] sm:w-[400px] md:w-[490px] lg:w-[570px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
        <div className="pointer-events-auto">
          <img 
            src={customAvatar} 
            alt="Emanuel 3D Portrait" 
            className="w-full h-auto object-cover"
          />
        </div>
      </FadeIn>
    </section>
  );
}
