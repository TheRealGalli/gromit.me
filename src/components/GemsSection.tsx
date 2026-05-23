import { useScrollReveal } from "../hooks/useScrollReveal";
import { BookOpen, Scale, Cpu, Lock, Cloud, Check } from "lucide-react";
import { GemsCatalog } from "./GemsCatalog";
import { useState, useEffect } from "react";

const tiers = [
// ... (keep tiers same)
  {
    name: "Servizi Google",
    price: "49",
    color: "green",
    tagBg: "bg-google-green-light",
    tagText: "text-google-green",
    borderColor: "border-google-green/20",
    icon: <Cpu className="w-6 h-6" />,
    description:
      "Assistenti che sfruttano la nostra expertise in prompt engineering e ricerca web avanzata per ottimizzare l'uso di Google Workspace.",
    features: [
      "Prompt engineering avanzato",
      "Ricerca web integrata",
      "Ottimizzazione Google Workspace",
      "Risposte rapide e precise",
      "Aggiornamenti costanti",
    ],
  },
  {
    name: "Specializzati Settorialmente",
    price: "79",
    color: "blue",
    tagBg: "bg-google-blue-light",
    tagText: "text-google-blue",
    borderColor: "border-google-blue/20",
    icon: <BookOpen className="w-6 h-6" />,
    popular: true,
    description:
      "Ogni Configurazione di Prompt Gromit Assistant include una Knowledge Base settoriale dedicata gestita tramite Google Drive, con fonti autorevoli come l'Agenzia delle Entrate.",
    features: [
      "Tutto di Servizi Google",
      "Knowledge Base settoriale su Google Drive",
      "Guide Agenzia delle Entrate",
      "Database costantemente aggiornato",
      "Fonti verificate e integrali",
      "Espansione continua delle fonti",
    ],
  },
  {
    name: "Legge Italiana ed Europea",
    price: "149",
    color: "red",
    tagBg: "bg-google-red-light",
    tagText: "text-google-red",
    borderColor: "border-google-red/20",
    icon: <Scale className="w-6 h-6" />,
    description:
      "Knowledge base con Codice Penale, Codice Civile, GDPR, AI Act e le principali normative italiane ed europee.",
    features: [
      "Tutto di Specializzati",
      "Codice Penale integrale",
      "Codice Civile integrale",
      "GDPR completo",
      "AI Act completo",
      "Normative italiane ed europee",
      "Aggiornamenti legislativi costanti",
    ],
  },
];

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

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <div key={tier.name} className="relative pt-2">
              {tier.popular && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                  <span className="bg-google-blue text-white text-xs font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    Più Popolare
                  </span>
                </div>
              )}
              
              <div
                className={`pricing-card tier-${tier.color} bg-white border ${tier.borderColor} flex flex-col h-full ${
                  tier.popular ? "ring-2 ring-google-blue/20 shadow-pricing" : "shadow-card"
                } ${shouldReveal ? `animate-fade-in-up delay-${(index + 2) * 100}` : "reveal-hidden"}`}
                id={`gem-card-${tier.color}`}
              >
                <div className={`w-14 h-14 rounded-2xl ${tier.tagBg} flex items-center justify-center ${tier.tagText} mb-4`}>
                  {tier.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">Gromit assistant:</h3>
                <p className={`text-sm font-semibold ${tier.tagText} mb-3`}>{tier.name}</p>
                
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-gray-900">€{tier.price}</span>
                  <span className="text-gray-500 text-sm">una tantum</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">{tier.description}</p>

                <div className="flex flex-col gap-2.5 mt-auto">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 ${tier.tagText} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#pricing"
                  className={`btn w-full mt-8 ${
                    tier.popular
                      ? "btn-primary"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                  id={`gem-cta-${tier.color}`}
                >
                  Scopri di più
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
