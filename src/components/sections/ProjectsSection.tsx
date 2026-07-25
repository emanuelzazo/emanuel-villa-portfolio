import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { LiveProjectButton } from '../ui/Buttons';
import epicsWeb from '../../assets/images/projects/epics-web.webp';
import tocarPronto from '../../assets/images/projects/tocar-pronto.webp';
import havana2099 from '../../assets/images/projects/havana-2099.webp';
import vanguard from '../../assets/images/projects/vanguard.webp';
import epicsAiDemo from '../../assets/images/projects/epics-ai-demo.webp';
import fbPublisher from '../../assets/images/projects/fb-publisher.webp';

const projects = [
  {
    num: "01",
    client: "Cliente Real",
    name: "EPICS AI — Sitio Corporativo",
    stack: "Next.js 15 · React 19 · Tailwind v4",
    image: epicsWeb,
    href: "https://epics-ai-web.vercel.app/"
  },
  {
    num: "02",
    client: "Cliente Real",
    name: "Tocar Pronto — Método de Piano",
    stack: "React 19 · Three.js · Framer Motion",
    image: tocarPronto,
    href: "https://tocar-pronto.vercel.app/"
  },
  {
    num: "03",
    client: "Cliente Real",
    name: "Havana 2099",
    stack: "React 19 · Tailwind v4 · Framer Motion",
    image: havana2099,
    href: "https://havana-2099.vercel.app/"
  },
  {
    num: "04",
    client: "Cliente Real",
    name: "VANGUARD — Maison of Luxury Footwear",
    stack: "React 18 · Vite · Tailwind v3",
    image: vanguard,
    href: "https://vanguard-maison.vercel.app/"
  },
  {
    num: "05",
    client: "Cliente Real",
    name: "EPICS AI — Landing IA",
    stack: "React 18 · Three.js · Remotion",
    image: epicsAiDemo,
    href: "https://epics-ai-demo.vercel.app/"
  },
  {
    num: "06",
    client: "Cliente Real",
    name: "FB Publisher",
    stack: "React 18 · Vite · Framer Motion",
    image: fbPublisher,
    href: "https://fb-publisher-demo.vercel.app/"
  }
];

export function ProjectsSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
        Proyectos
      </h2>

      <div ref={containerRef} className="relative mt-10" style={{ height: `${projects.length * 85 + 20}vh` }}>
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - 1 - index) * 0.03;
          return (
            <ProjectCard
              key={index}
              index={index}
              project={project}
              progress={scrollYProgress}
              range={[index * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({ index, project, progress, range, targetScale }: any) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-start justify-center sticky w-full max-w-6xl mx-auto" style={{ top: `calc(6rem + ${index * 28}px)` }}>
      <motion.div
        style={{ scale, transformOrigin: 'top center' }}
        className="w-full bg-[#0C0C0C] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col gap-6"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="text-[#D7E2EA] font-black leading-none text-[clamp(3rem,8vw,120px)]">{project.num}</span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-xs sm:text-sm">{project.client} · {project.stack}</span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.25rem,2.6vw,2.75rem)] leading-tight">{project.name}</h3>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>

        <div className="w-full flex-1 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-[#D7E2EA]/20 h-[clamp(280px,40vw,520px)]">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover object-top" />
        </div>
      </motion.div>
    </div>
  );
}
