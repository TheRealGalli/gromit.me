import { useScrollReveal } from "../hooks/useScrollReveal";
import { Lock, Cloud } from "lucide-react";
import { GemsCatalog } from "./GemsCatalog";
import { useState, useEffect } from "react";

export const GemsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldReveal = isVisible || isMobile;

  return (
    <section id="gems" className="section bg-gray-50" ref={sectionRef as any}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`section-header ${shouldReveal ? "animate-fade-in-up" : "reveal-hidden"}`}>
          <span className="section-tag bg-google-blue-light text-google-blue">
            Il Cuore del Progetto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            I Tuoi <span className="text-google-blue">Google Gemini Gems</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Assistenti virtuali altamente specializzati, creati per supportarti in ogni fase del tuo lavoro.
            La loro potenza risiede in un'architettura unica.
          </p>
        </div>

        {/* Interactive Gems Catalog */}
        <div className={`transition-all duration-1000 delay-50 ${shouldReveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <GemsCatalog />
        </div>

        {/* Integration Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 ${shouldReveal ? "animate-fade-in-up delay-100" : "reveal-hidden"}`}>
          {/* Google Workspace Card */}
          <div className="card flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-google-blue-light flex items-center justify-center text-google-blue">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Google Workspace B2B</h3>
                <p className="text-sm text-gray-500">Integrazione profonda</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              I <strong>Gromit Assistant</strong> si integrano fluidamente nel tuo ambiente Google Workspace come Google Gems. Grazie ai <strong>Connettori Google Workspace</strong> di Gemini,
              interagiscono con Gmail, Drive, Docs, Sheets, Calendar e altro. <strong>L'operatività del Gem su Google Workspace è fornita in modalità "Best Effort"</strong>, subordinata all'infrastruttura di Google. Serve un account <strong>Google Workspace</strong> aziendale.
            </p>
          </div>

          {/* Zero Trust Card */}
          <div className="card flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-google-green-light flex items-center justify-center text-google-green">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Zero Trust & Piena Autonomia</h3>
                <p className="text-sm text-gray-500">Tu hai il pieno controllo</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              CSD Station gestisce intelligenza e aggiornamenti delle <strong>Configurazioni di Prompt</strong>, ma l'utilizzo avviene <strong>interamente nel tuo ambiente</strong>.
              Garantiamo totale privacy: noi non accediamo alle tue conversazioni o dati, sei tu il titolare del trattamento. La <strong>licenza d'uso della configurazione e i suoi aggiornamenti</strong> sono garantiti per la vita del prodotto nel tuo account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
