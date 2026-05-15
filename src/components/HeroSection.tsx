import { useScrollReveal } from "../hooks/useScrollReveal";
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";
import heroGems from "../assets/illustrations/hero-gems.png";

export const HeroSection = () => {
  const { ref: heroRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      className="relative pt-28 lg:pt-36 pb-16 lg:pb-28 overflow-hidden bg-white"
      ref={heroRef as any}
      id="hero"
    >
      {/* Background decorative elements - Subtle */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-google-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-google-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text Content */}
          <div
            className={`flex-1 flex flex-col gap-6 text-center lg:text-left ${
              isVisible ? "animate-fade-in-up" : "reveal-hidden"
            }`}
          >
            {/* Tag */}
            <div className="flex justify-center lg:justify-start">
              <span className="section-tag bg-google-blue-light text-google-blue">
                Progetto Gromit
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-gray-900">
              L'AI{" "}
              <span className="text-google-blue">Plug-and-Play</span>{" "}
              al Servizio del Tuo{" "}
              <span className="text-google-green">Business</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Benvenuto in <strong>Gromit.me</strong>, il portale dove l'innovazione di{" "}
              <strong>CSD Station</strong> incontra l'eccellenza operativa. Qui nascono i{" "}
              <strong>Gromit Assistant</strong>, assistenti AI avanzati progettati per i professionisti più esigenti.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-2">
              <a href="#gems" className="btn btn-primary btn-lg group" id="hero-cta-primary">
                Scopri i Gems
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#pricing" className="btn btn-outline btn-lg" id="hero-cta-secondary">
                Piani e Prezzi
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mt-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-google-green" />
                Zero Trust & Privacy
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-google-blue" />
                Google Workspace B2B
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-google-yellow" />
                Garantito a Vita
              </span>
            </div>
          </div>

          {/* Right — Mascot Illustration (No Shadows) */}
          <div
            className={`flex-1 flex justify-center lg:justify-end ${
              isVisible ? "animate-fade-in delay-200" : "reveal-hidden"
            }`}
          >
            <div className="relative w-full max-w-[620px] h-[640px] flex items-center justify-center overflow-visible -translate-x-12 lg:-translate-x-20">
              {/* MASCOT — Centered visually on the container's 50% line */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div style={{ transform: 'translateX(82px) translateY(20px)' }}>
                  <img 
                    src={heroGems} 
                    alt="Gromit AI Gems" 
                    className="h-auto animate-float"
                    style={{ width: '450px', transform: 'scale(1.6)' }}
                  />
                </div>
              </div>
              
              {/* OCTAGONAL TAG LAYOUT — Centered on 50% / 50% */}
              {/* Radius is tightened to prevent tags from being too far right/left */}
              
              {/* 1. TOP - Risparmio Tangibile */}
              <div 
                className={`absolute left-1/2 top-[8%] -translate-x-1/2 whitespace-nowrap bg-white/95 backdrop-blur-sm shadow-md rounded-xl px-5 py-2.5 text-[10px] sm:text-xs font-bold text-google-red border border-google-red/10 z-20 transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: '0.4s' }}
              >
                💰 Risparmio Tangibile
              </div>

              {/* 2. TOP-RIGHT - AI Gems */}
              <div 
                className={`absolute left-[calc(50%+160px)] top-[22%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-white/95 backdrop-blur-sm shadow-md rounded-xl px-5 py-2.5 text-[10px] sm:text-xs font-bold text-google-blue border border-google-blue/10 z-20 transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: '0.6s' }}
              >
                🤖 AI Gems
              </div>

              {/* 3. MID-RIGHT - Aggiornamenti Costanti */}
              <div 
                className={`absolute left-[calc(50%+220px)] top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-white/95 backdrop-blur-sm shadow-md rounded-xl px-5 py-2.5 text-[10px] sm:text-xs font-bold text-google-yellow border border-google-yellow/10 z-20 transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: '0.8s' }}
              >
                🔄 Aggiornamenti Costanti
              </div>

              {/* 4. BOTTOM-RIGHT - Proprietà dei Dati */}
              <div 
                className={`absolute left-[calc(50%+160px)] top-[78%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-white/95 backdrop-blur-sm shadow-md rounded-xl px-5 py-2.5 text-[10px] sm:text-xs font-bold text-google-red border border-google-red/10 z-20 transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: '1s' }}
              >
                🛡️ Proprietà dei Dati
              </div>

              {/* 5. BOTTOM - Il Tuo Alleato Potente */}
              <div 
                className={`absolute left-1/2 bottom-[8%] -translate-x-1/2 whitespace-nowrap bg-white/95 backdrop-blur-sm shadow-md rounded-xl px-5 py-2.5 text-[10px] sm:text-xs font-bold text-google-blue border border-google-blue/10 z-20 transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: '1.2s' }}
              >
                🦾 Il Tuo Alleato Potente
              </div>

              {/* 6. BOTTOM-LEFT - Plug & Play */}
              <div 
                className={`absolute left-[calc(50%-160px)] top-[78%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-white/95 backdrop-blur-sm shadow-md rounded-xl px-5 py-2.5 text-[10px] sm:text-xs font-bold text-google-green border border-google-green/10 z-20 transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: '1.4s' }}
              >
                ⚡ Plug & Play
              </div>

              {/* 7. MID-LEFT - Guide Normative */}
              <div 
                className={`absolute left-[calc(50%-220px)] top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-white/95 backdrop-blur-sm shadow-md rounded-xl px-5 py-2.5 text-[10px] sm:text-xs font-bold text-google-green border border-google-green/10 z-20 transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: '1.6s' }}
              >
                ⚖️ Guide Normative
              </div>

              {/* 8. TOP-LEFT - Google Workspace Native */}
              <div 
                className={`absolute left-[calc(50%-160px)] top-[22%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-white/95 backdrop-blur-sm shadow-md rounded-xl px-5 py-2.5 text-[10px] sm:text-xs font-bold text-google-blue border border-google-blue/10 z-20 transition-all ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: '1.8s' }}
              >
                ☁️ Google Workspace Native
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

