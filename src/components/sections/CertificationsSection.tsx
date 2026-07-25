import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { 
  Cloud, 
  Cpu, 
  Smartphone, 
  Terminal, 
  Laptop 
} from 'lucide-react';

const certifications = [
  {
    title: "Apple Developer",
    issuer: "Apple",
    icon: Smartphone,
    color: "from-gray-400 to-gray-200 shadow-gray-500/10",
    glow: "rgba(255, 255, 255, 0.08)",
    badge: "Official Registry"
  },
  {
    title: "Google Cloud",
    issuer: "Google",
    icon: Cloud,
    color: "from-[#4285F4] to-[#34A853] shadow-blue-500/10",
    glow: "rgba(66, 133, 244, 0.12)",
    badge: "Cloud Architect"
  },
  {
    title: "Google AI",
    issuer: "Google",
    icon: Cpu,
    color: "from-[#EA4335] to-[#FBBC05] shadow-red-500/10",
    glow: "rgba(234, 67, 53, 0.12)",
    badge: "AI Practitioner"
  },
  {
    title: "Google Developers",
    issuer: "Google",
    icon: Terminal,
    color: "from-[#0F9D58] to-[#4285F4] shadow-green-500/10",
    glow: "rgba(15, 157, 88, 0.12)",
    badge: "Certified Developer"
  },
  {
    title: "Microsoft Learn",
    issuer: "Microsoft",
    icon: Laptop,
    color: "from-[#F25022] to-[#7FBA00] shadow-orange-500/10",
    glow: "rgba(242, 80, 34, 0.12)",
    badge: "Full Stack Mastery"
  },
  {
    title: "NVIDIA Developer",
    issuer: "NVIDIA",
    icon: Cpu,
    color: "from-[#76B900] to-[#1A1A1A] shadow-green-500/10",
    glow: "rgba(118, 185, 0, 0.15)",
    badge: "Platform Member"
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="bg-[#0C0C0C] py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0.1} y={30}>
            <span className="text-xs uppercase tracking-widest font-mono text-[#B501A7] bg-[#B501A7]/10 px-4 py-2 rounded-full font-semibold">
              Ecosistema y Conocimientos
            </span>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,8vw,100px)] leading-none mt-6">
              Certificaciones
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} y={30}>
            <p className="text-[#D7E2EA] font-light opacity-80 mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Acreditaciones oficiales y ecosistemas tecnológicos validados que respaldan mi experiencia como Software Engineer e AI Solutions Architect.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <FadeIn 
                key={cert.title} 
                delay={0.1 + (index % 4) * 0.1} 
                y={40}
                className="group relative bg-[#0F0F0F] rounded-[24px] border border-white/5 hover:border-white/20 p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-[190px] overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${cert.glow} 0%, transparent 70%)`
                  }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-white/10 text-[#D7E2EA] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#D7E2EA]/40 group-hover:text-[#D7E2EA]/60 transition-colors">
                      {cert.badge}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 mt-4">
                  <h3 className="text-[#D7E2EA] group-hover:text-white font-semibold text-lg transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-[#D7E2EA]/50 group-hover:text-[#D7E2EA]/80 transition-colors mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
