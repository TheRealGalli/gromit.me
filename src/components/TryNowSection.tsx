import { useScrollReveal } from "../hooks/useScrollReveal";
import { MessageSquare, ArrowRight, ShieldCheck, Zap, Laptop } from "lucide-react";

export const TryNowSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });

  const points = [
    {
      title: "Google Workspace: La Base per la Tua Crescita Digitale",
      content: "Per sbloccare il pieno potenziale della tua attività e dei nostri Gems, Google Workspace è più di una suite di strumenti: è l'ambiente sicuro e collaborativo dove la tua azienda prospera. Con email professionali, archiviazione cloud e funzionalità di sicurezza avanzate, garantisce conformità e scalabilità, preparandoti al futuro.",
      icon: <Laptop className="w-5 h-5 text-google-blue" />,
    },
    {
      title: "Un Gem Intelligente, Guidato da Principi Chiari",
      content: "Gromit Assistant segue il nostro esclusivo framework di prompt engineering. All'inizio di ogni conversazione, ti presenterà i 'Principi Fondamentali (Safety First)', che includono collegamenti diretti ai nostri Termini di Servizio e Privacy Policy, garantendo trasparenza e aggiornamento costante. Dopo questo primo messaggio, la chat procederà in modo fluido e senza interruzioni.",
      icon: <ShieldCheck className="w-5 h-5 text-google-green" />,
    },
    {
      title: "Scopri i Gems Personalizzati: La Tua Prova Gratuita",
      content: "Curioso di vedere come un Gem su misura può rivoluzionare i tuoi processi? Gromit Assistant può fornirti il link diretto per prenotare una prova gratuita e scoprire le soluzioni di CSD Station Italia, ottimizzate per la tua attività e integrate perfettamente con Google Workspace.",
      icon: <Zap className="w-5 h-5 text-google-yellow" />,
    },
  ];

  return (
    <section id="try-now" className="section bg-white" ref={sectionRef as any}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`section-header ${isVisible ? "animate-fade-in-up" : "reveal-hidden"}`}>
          <span className="section-tag bg-google-blue-light text-google-blue">Prova Ora</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Prova ora il tuo primo Gem: <span className="text-google-green">Gromit Assistant</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Scopri come il nostro assistente AI gratuito può illustrarti i vantaggi di Google Workspace e l'innovazione dei Gems di CSD Station Italia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          {/* Left Column: Interactive Buttons */}
          <div className={`lg:col-span-5 flex flex-col gap-6 ${isVisible ? "animate-fade-in-left" : "reveal-hidden"}`}>
            {/* Assistant 1: Google Workspace */}
            <div className="w-full p-6 rounded-[32px] bg-gradient-to-br from-google-blue/5 to-google-blue/10 border border-google-blue/10 flex flex-col items-center text-center gap-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <MessageSquare className="w-8 h-8 text-google-blue" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  <span className="text-google-blue">Gromit Assistant:</span> <br />
                  Google Workspace
                </h3>
                <p className="text-[13px] text-gray-500 max-w-xs mx-auto">
                  Scopri i vantaggi della suite Google professionale.
                </p>
              </div>

              <a 
                href="https://gemini.google.com/gem/1HD6li8yHYZpS5r1xS4lQAGbEXeAIkm-2?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary w-full py-4 text-base flex items-center justify-center gap-3 shadow-google hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Parla con l'Assistente
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Assistant 2: Servizio Clienti */}
            <div className="w-full p-6 rounded-[32px] bg-gradient-to-br from-google-green/5 to-google-green/10 border border-google-green/10 flex flex-col items-center text-center gap-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <MessageSquare className="w-8 h-8 text-google-green" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  <span className="text-google-green">Gromit Assistant:</span> <br />
                  Servizio Clienti
                </h3>
                <p className="text-[13px] text-gray-500 max-w-xs mx-auto">
                  Supporto dedicato e risposte rapide alle tue domande.
                </p>
              </div>

              <a 
                href="https://gemini.google.com/gem/1nMVYkxJFXqCHDee6fIryYG-AmeEd0FW2?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary bg-google-green hover:bg-google-green/90 w-full py-4 text-base flex items-center justify-center gap-3 shadow-google hover:scale-[1.02] active:scale-[0.98] transition-all border-none"
              >
                Parla con l'Assistente
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Points */}
          <div className={`lg:col-span-7 flex flex-col gap-8 ${isVisible ? "animate-fade-in-right" : "reveal-hidden"}`}>
            {points.map((point, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-3xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-gray-100">
                  {point.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold text-gray-900">{point.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {point.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
