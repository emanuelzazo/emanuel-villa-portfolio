import React from 'react';
import { FadeIn } from '../ui/FadeIn';

const services = [
  {
    num: "01",
    name: "Desarrollo Web",
    description: "Aplicaciones modernas utilizando React, Next.js, TypeScript, Node.js, Python y las mejores prácticas de desarrollo."
  },
  {
    num: "02",
    name: "Software Empresarial",
    description: "CRM, ERP, sistemas internos, paneles administrativos, inventarios, plataformas SaaS y soluciones completamente personalizadas."
  },
  {
    num: "03",
    name: "Inteligencia Artificial",
    description: "Desarrollo de agentes inteligentes, chatbots, asistentes virtuales, procesamiento documental, RAG, automatizaciones y soluciones basadas en LLMs."
  },
  {
    num: "04",
    name: "Automatización",
    description: "Automatización de procesos mediante IA, APIs, n8n, Make, flujos inteligentes e integración entre plataformas."
  },
  {
    num: "05",
    name: "Cloud & Backend",
    description: "Arquitecturas escalables, APIs REST, bases de datos, Docker, despliegues cloud y sistemas de alta disponibilidad."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,10vw,140px)] leading-none mb-16 sm:mb-20 md:mb-28">
        Lo que hago
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} y={30} className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] ${idx === 0 ? 'border-t' : ''}`}>
            <span className="text-[#0C0C0C] font-black leading-none text-[clamp(3rem,10vw,140px)] md:w-1/3 shrink-0">
              {service.num}
            </span>
            <div className="flex flex-col gap-2 sm:gap-4 md:w-2/3">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                {service.name}
              </h3>
              <p className="text-[#0C0C0C] opacity-60 font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
