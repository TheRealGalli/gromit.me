import { useScrollReveal } from "../hooks/useScrollReveal";
import { Landmark, ScrollText, Globe, ExternalLink, MessageSquarePlus } from "lucide-react";

const sources = [
  {
    logo: "/assets/ade_informa.png",
    name: "AdE Informa",
    description: "Corsi e leggi integrali, normative fiscali e chiarimenti ufficiali delle Guide AdE.",
    color: "bg-google-blue-light",
    textColor: "text-google-blue",
    borderColor: "border-google-blue/20",
    padding: "p-3",
  },
  {
    logo: "/assets/normattiva.png",
    name: "Normattiva",
    description: "Le ultime disposizioni legislative italiane, sempre aggiornate.",
    color: "bg-google-green-light",
    textColor: "text-google-green",
    borderColor: "border-google-green/20",
    whiteBg: true,
    padding: "p-0",
  },
  {
    logo: "/assets/eurlex.png",
    name: "Eur-Lex",
    description: "Il portale del diritto dell'Unione Europea, visione completa e aggiornata.",
    color: "bg-google-yellow-light",
    textColor: "text-google-yellow",
    borderColor: "border-google-yellow/20",
    padding: "p-4",
    translate: "translate-y-[6px] translate-x-[2px]",
  },
];

export const SourcesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="sources" className="section" ref={sectionRef as any}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`section-header ${isVisible ? "animate-fade-in-up" : "reveal-hidden"}`}>
          <span className="section-tag bg-google-green-light text-google-green">Le Nostre Fonti</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Connessi con la <span className="text-google-green">Legge</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La solidità dei nostri Gems si basa sulla qualità e sull'affidabilità delle loro fonti.
            Un'informazione accurata è la base di ogni decisione di successo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {sources.map((source, index) => (
            <div
              key={source.name}
              className={`bg-white border ${source.borderColor} rounded-[32px] p-6 lg:p-10 shadow-sm flex flex-col items-center text-center gap-6 transition-all hover:shadow-md ${
                isVisible ? `animate-fade-in-up delay-${(index + 1) * 100}` : "reveal-hidden"
              }`}
              id={`source-card-${index}`}
            >
              <div className="w-24 h-24 bg-white flex items-center justify-center shadow-sm overflow-hidden border border-gray-100">
                <img 
                  src={source.logo} 
                  alt={source.name} 
                  className={`w-full h-full object-contain ${source.padding || "p-2"} ${source.translate || ""}`}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(source.name)}&background=f3f4f6&color=4b5563&bold=true&size=128`;
                    (e.currentTarget as HTMLImageElement).onerror = null; // Prevent infinite loop
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className={`text-xl font-bold ${source.textColor}`}>{source.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-2">{source.description}</p>
              </div>
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${source.textColor} mt-auto`}>
                <ExternalLink className="w-3.5 h-3.5" />
                Fonte pubblica e consultabile
              </span>
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isVisible ? "animate-fade-in-up delay-400" : "reveal-hidden"}`}>
          <div className="card flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-google-blue-light flex items-center justify-center text-google-blue">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Fonti Trasparenti</h3>
                <p className="text-sm text-gray-500">Consultabili su Gromit.me</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sul portale <strong>Gromit.me</strong> puoi visionare quali guide e normative
              sono integrate in ciascun assistente. Trasparenza totale sulle fonti.
            </p>
          </div>

          <div className="card flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-google-green-light flex items-center justify-center text-google-green">
                <MessageSquarePlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Community-Driven</h3>
                <p className="text-sm text-gray-500">Le fonti crescono con te</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Form dedicati per <strong>segnalare nuove leggi, corsi o fonti</strong>. La knowledge base
              cresce grazie al contributo della community di clienti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
