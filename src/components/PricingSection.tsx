import { useScrollReveal } from "../hooks/useScrollReveal";
import { Shield, RefreshCw, Zap } from "lucide-react";

export const PricingSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 });

  const guarantees = [
    { icon: <Zap className="w-5 h-5" />, title: "Licenza a Vita", desc: "La tua configurazione resta aggiornata per tutta la vita utile del prodotto." },
    { icon: <RefreshCw className="w-5 h-5" />, title: "Aggiornamenti Costanti", desc: "Prompt e knowledge base sempre al passo con le ultime evoluzioni." },
    { icon: <Shield className="w-5 h-5" />, title: "1 Gem = 1 Account", desc: "Ogni configurazione è legata a un singolo account Workspace. Mantenimento Gem Best Effort." },
  ];

  return (
    <section id="pricing" className="section" ref={sectionRef as any}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`section-header ${isVisible ? "animate-fade-in-up" : "reveal-hidden"}`}>
          <span className="section-tag bg-google-red-light text-google-red">Investimento</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Licenza d'Uso <span className="text-google-red">Perpetua</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Risparmia tempo con le <strong>Configurazioni di Prompt Gromit Assistant</strong>! Un investimento una tantum che si rivaluta nel tempo. Acquisisci una licenza d'uso perpetua che include aggiornamenti continui per la vita del prodotto, senza costi aggiuntivi.
          </p>
        </div>

        {/* Guarantee badges */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ${isVisible ? "animate-fade-in-up delay-100" : "reveal-hidden"}`}>
          {guarantees.map((g) => (
            <div key={g.title} className="card flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-google-red-light flex items-center justify-center text-google-red flex-shrink-0">
                {g.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{g.title}</h4>
                <p className="text-sm text-gray-600">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};
