import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';
import { ContactButton } from '../ui/Buttons';

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen px-5 sm:px-8 md:px-10 py-20 flex flex-col justify-center items-center overflow-hidden">
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon 3D" className="w-full h-auto object-contain" />
      </FadeIn>
      
      <FadeIn delay={0.25} duration={0.9} x={-80} y={0} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D Object" className="w-full h-auto object-contain" />
      </FadeIn>
      
      <FadeIn delay={0.15} duration={0.9} x={80} y={0} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego 3D" className="w-full h-auto object-contain" />
      </FadeIn>
      
      <FadeIn delay={0.3} duration={0.9} x={80} y={0} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="Group 3D" className="w-full h-auto object-contain" />
      </FadeIn>

      <FadeIn delay={0} y={40} className="flex flex-col items-center">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] z-10 relative">
          Sobre mí
        </h2>
      </FadeIn>

      <div className="flex flex-col items-center mt-10 sm:mt-14 md:mt-16 z-10 relative max-w-[700px]">
        <AnimatedText 
          text="Soy un Software Engineer especializado en desarrollo Full Stack e Inteligencia Artificial. Diseño y desarrollo aplicaciones web, plataformas empresariales y agentes de IA capaces de automatizar tareas complejas. Construyo productos digitales pensados para crecer, automatizar procesos y generar resultados medibles."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(1rem,2vw,1.35rem)]"
        />
        
        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
