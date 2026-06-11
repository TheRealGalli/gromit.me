import { MessageCircle, Mail, MapPin, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50" id="footer">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-google-blue flex items-center justify-center text-white font-bold text-sm">
                  G
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">
                  Gromit<span className="text-google-blue">.me</span>
                </span>
              </div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                by CSD Station — CyberSpaceDokingStation Italia
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Assistenti AI plug-and-play per i professionisti più esigenti.
              Gemini Gems garantiti a vita con aggiornamenti costanti.
            </p>
            <div className="flex flex-col gap-1.5 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Su tutto il territorio nazionale : ITA
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                carlo@csd-station.it
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Link Rapidi
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "I Gems", href: "#gems" },
                { label: "Le Fonti", href: "#sources" },
                { label: "Efficienza", href: "#time-savings" },
                { label: "Investimento", href: "#pricing" },
                { label: "Prova ora", href: "#try-now" },
                { label: "Supporto", href: "#support" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-google-blue transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal & Connect */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                Legale
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href="https://docs.google.com/document/d/1IQ7ryoRiZxOWY47uNMu0FgmYkcMLbtwuV0z5nAUccM0/edit?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-google-blue transition-colors text-sm inline-flex items-center gap-1"
                >
                  Termini di Servizio <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://docs.google.com/document/d/1xlljgPtca5BsdU9FXqBFI3l3A6ypcAle8HYjfcEu88w/edit?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-google-blue transition-colors text-sm inline-flex items-center gap-1"
                >
                  Privacy Policy <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                Connettiamoci
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/393518628203"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Business"
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] flex items-center justify-center transition-all"
                  id="footer-whatsapp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/TheRealGalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 flex items-center justify-center transition-all"
                  id="footer-github"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} Carlo Galli (P.IVA). Tutti i diritti riservati.
          </p>
          <p className="text-xs text-gray-400">
            Gromit.me è un progetto di CSD Station
          </p>
        </div>
      </div>
    </footer>
  );
};
