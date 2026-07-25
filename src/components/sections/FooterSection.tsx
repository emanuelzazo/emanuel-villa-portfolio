import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { ContactButton } from '../ui/Buttons';

export function FooterSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] pt-20 sm:pt-24 md:pt-32 pb-10 flex flex-col items-center justify-center relative z-20">
      <FadeIn delay={0.1} y={30} className="flex flex-col items-center max-w-4xl px-5 text-center">
        <h2 className="hero-heading font-black uppercase tracking-tight leading-none text-[clamp(2.5rem,6vw,80px)] mb-6">
          ¿Listo para construir algo grande?
        </h2>
        <p className="text-[#D7E2EA] font-light leading-relaxed text-[clamp(1rem,1.5vw,1.25rem)] mb-12 max-w-2xl">
          Si necesitas una aplicación web, un sistema empresarial, una plataforma SaaS o una solución impulsada por Inteligencia Artificial, trabajemos juntos para convertir tu idea en un producto de alto nivel.
        </p>
        <ContactButton />
      </FadeIn>
      
      <FadeIn delay={0.3} y={20} className="w-full mt-24 px-5">
        <div className="border-t border-[rgba(215,226,234,0.1)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
          <p className="text-[#D7E2EA] opacity-60 text-sm">
            © {new Date().getFullYear()} Emanuel. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://wa.me/5356699599" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] opacity-60 hover:opacity-100 transition-opacity uppercase text-sm font-medium tracking-wider">
              WhatsApp
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
