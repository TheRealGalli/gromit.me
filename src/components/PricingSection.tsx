import { useScrollReveal } from "../hooks/useScrollReveal";
import { Check, Shield, RefreshCw, ExternalLink, Zap } from "lucide-react";

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

        {/* Pricing summary */}
        <div className={`bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm ${isVisible ? "animate-fade-in-up delay-200" : "reveal-hidden"}`} id="pricing-summary">
          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col gap-5">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  La tua suite completa di assistenti AI
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Offriamo un minimo di <strong className="text-gray-900">10 Gems</strong> per utente,
                  per assicurarti una suite completa di strumenti intelligenti. Ogni Gem è collegato
                  e garantito a vita al singolo account Google Workspace.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "Assistenti Tecnici per Servizi Google — da €49",
                    "Assistenti Tecnici Specializzati — da €79",
                    "Assistente Legge Italiana ed Europea — €149",
                    "Minimo 10 Gems per utente",
                    "Licenza perpetua per il tuo account",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-google-green flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 text-center shadow-card">
                <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-3">A partire da</p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl lg:text-6xl font-extrabold text-gray-900">€49</span>
                  <span className="text-gray-500 text-lg">/gem</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">Pagamento una tantum · Licenza a vita</p>
                <a href="#gems" className="btn btn-primary btn-lg w-full animate-pulse-glow" id="pricing-cta">
                  Esplora i Gems
                </a>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="https://docs.google.com/document/d/1IQ7ryoRiZxOWY47uNMu0FgmYkcMLbtwuV0z5nAUccM0/edit?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-google-blue transition-colors justify-center"
                  >
                    <ExternalLink className="w-3 h-3" /> Termini di Servizio
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1xlljgPtca5BsdU9FXqBFI3l3A6ypcAle8HYjfcEu88w/edit?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-google-blue transition-colors justify-center"
                  >
                    <ExternalLink className="w-3 h-3" /> Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
