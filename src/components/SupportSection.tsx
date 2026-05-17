import { useScrollReveal } from "../hooks/useScrollReveal";
import { MessageSquare, ArrowRight, LifeBuoy, Lightbulb, FileText } from "lucide-react";

export const SupportSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="support" className="section bg-gray-50/50" ref={sectionRef as any}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`section-header ${isVisible ? "animate-fade-in-up" : "reveal-hidden"}`}>
          <span className="section-tag bg-google-red-light text-google-red">Supporto</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Siamo al tuo <span className="text-google-red">fianco</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hai bisogno di aiuto o vuoi suggerire un miglioramento? Scegli il canale più adatto alle tue esigenze.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Left Column: Stacked Cards */}
          <div className={`lg:col-span-6 flex flex-col gap-6 ${isVisible ? "animate-fade-in-left" : "reveal-hidden"}`}>
            {/* Top Card: Suggestions */}
            <div className="flex-1 p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-google-yellow/10 flex items-center justify-center text-google-yellow">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-google-yellow transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consiglia un Aggiornamento</h3>
              <p className="text-gray-600 text-sm mb-6">
                Aiutaci a migliorare Gromit. Suggerisci nuovi prompt, font o fonti normative per rendere gli assistenti ancora più potenti.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSctRIb6ykWzBH_g0E5UGkZncz2hlGPfEEhg2PR5lUBsJstdqA/viewform?usp=dialog" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-google-yellow font-bold hover:gap-3 transition-all"
              >
                Invia suggerimento
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Bottom Card: Help Desk */}
            <div className="flex-1 p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-google-green/10 flex items-center justify-center text-google-green">
                  <FileText className="w-8 h-8" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-google-green transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ticket di Assistenza</h3>
              <p className="text-gray-600 text-sm mb-6">
                Hai riscontrato un problema tecnico o hai una domanda specifica? Apri un ticket e il nostro team ti risponderà al più presto.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSd--6St2cFuo9OIsM4-G1WzqZ_hGjDqkfWoExrBkwFmgjtswQ/viewform?usp=dialog" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-google-green font-bold hover:gap-3 transition-all"
              >
                Apri un ticket
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Assistant Card */}
          <div className={`lg:col-span-6 flex flex-col ${isVisible ? "animate-fade-in-right" : "reveal-hidden"}`}>
            <div className="h-full p-10 rounded-[40px] bg-gradient-to-br from-google-red/5 to-google-yellow/5 border border-google-red/10 flex flex-col items-center text-center gap-8 shadow-sm">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md animate-bounce-subtle">
                <LifeBuoy className="w-12 h-12 text-google-red" />
              </div>
              
              <div className="space-y-4 flex-1">
                <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                  Parla con <br />
                  <span className="text-google-red">Gromit Assistant:</span> <br />
                  Servizio Clienti
                </h3>
                <p className="text-base text-gray-600 max-w-sm mx-auto">
                  Il nostro assistente AI specializzato nel supporto clienti è pronto ad aiutarti h24 con risposte immediate.
                </p>
              </div>

              <a 
                href="https://gemini.google.com/gem/1nMVYkxJFXqCHDee6fIryYG-AmeEd0FW2?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-google-red hover:bg-google-red-dark text-white w-full py-5 text-lg flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all rounded-2xl"
              >
                Parla con il Supporto
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
