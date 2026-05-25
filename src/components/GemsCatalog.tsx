import { useState } from "react";
import { Folder, ChevronRight, Search, Clock, User } from "lucide-react";

interface Gem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  docLink?: string;
}

const GEMS_DATA: Gem[] = [
  // Assistenti per il supporto alle Google Workspace Apps (€49)
  { 
    id: "1", 
    category: "Settore Immobiliare", 
    price: 49, 
    name: "Gromit Assistant: Google Workspace Admin", 
    description: "Supporta amministratori Google Workspace in configurazione, gestione e conformità.",
    docLink: "https://docs.google.com/document/d/10thnzmatrOnJgBzFGpY3VgfbiszU6qxTQRn0oPErsjw/edit?usp=drive_link"
  },
  { 
    id: "2", 
    category: "Settore Immobiliare", 
    price: 49, 
    name: "Gromit Assistant: Campagne Google Ads", 
    description: "Crea strategie Google Ads e SEO per lead immobiliari mirati.",
    docLink: "https://docs.google.com/document/d/15pU43Fgv7e0OGzLuM14FW133PCuwM6UXYYhuhcC7-Ik/edit?usp=drive_link"
  },
  { 
    id: "3", 
    category: "Settore Immobiliare", 
    price: 49, 
    name: "Gromit Assistant: Google Workspace Gemini", 
    description: "Guida all'uso di Gemini in Google Workspace, automazioni no-code.",
    docLink: "https://docs.google.com/document/d/10tDcpR5OdWSAwKDIoYKL70XbNIZXK21RBgNHOSoU6A4/edit?usp=drive_link"
  },
  { 
    id: "4", 
    category: "Settore Immobiliare", 
    price: 49, 
    name: "Gromit Assistant: Google Workspace Studio", 
    description: "Guida alla creazione di automazioni no-code con Google Workspace Studio.",
    docLink: "https://docs.google.com/document/d/1-q8EsZjn9b1rjDzk5IMA5nR6JQG448IV-lZt1oT440E/edit?usp=drive_link"
  },

  // Assistenti per la generazione di Immagini (€49)
  { 
    id: "5", 
    category: "Settore Immobiliare", 
    price: 49, 
    name: "Gromit Assistant: Allestimento Immagini Immobiliari", 
    description: "Allestisce e valorizza immagini immobiliari per presentazioni efficaci.",
    docLink: "https://docs.google.com/document/d/169Sq_8-B1cTRrefjpjbhV8IEsznJHo9kl6JUM877AzU/edit?usp=drive_link"
  },
  { 
    id: "6", 
    category: "Settore Immobiliare", 
    price: 49, 
    name: "Gromit Assistant: Pulizia Immagini Immobiliari", 
    description: "Ottimizza e pulisce immagini immobiliari per presentazioni professionali.",
    docLink: "https://docs.google.com/document/d/1NOjAn2NoX_gMbWvM7s57yEGVhhO_ibrIYN1hS7L3HY0/edit?usp=drive_link"
  },

  // Assistenti per l’Agenzia Immobiliare con Knowledge (€79)
  { 
    id: "7", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Copywriter", 
    description: "Crea testi annunci immobiliari persuasivi per portali e social.",
    docLink: "https://docs.google.com/document/d/14jDXitQ__HEsmI8i8EJg7KhcKnt9AzfGQnvllQh-kZM/edit?usp=drive_link"
  },
  { 
    id: "8", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Acquisizione Immobiliare", 
    description: "Guida completa all'acquisizione immobili, documenti e workflow.",
    docLink: "https://docs.google.com/document/d/1694xzqSHaI6zzvUEVftobgdfPjjk5ma2bQMxehRs--k/edit?usp=drive_link"
  },
  { 
    id: "9", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Follow-up Post Visita Immobiliare", 
    description: "Genera follow-up personalizzati post-visita, analizza feedback.",
    docLink: "https://docs.google.com/document/d/11FUF5k_-9z-v0WWqTM3SSxGwbEe8kGBqTuWy44j_V4o/edit?usp=drive_link"
  },
  { 
    id: "10", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Qualificazione Lead Immobiliare", 
    description: "Qualifica lead, crea questionari personalizzati e gestisce follow-up.",
    docLink: "https://docs.google.com/document/d/19DtJpMfdXalZ3uQtciwpYiB33NkrPxkwNtd15ab9KDM/edit?usp=drive_link"
  },
  { 
    id: "11", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Acquisizione Telefonica", 
    description: "Genera script, gestisce task per acquisizione telefonica efficace.",
    docLink: "https://docs.google.com/document/d/164GXMaLQWv5MDDOSHB93oiKID9cVwqgbK_uCja6BsRc/edit?usp=drive_link"
  },
  { 
    id: "12", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Info Mutui e Bonus", 
    description: "Ricerca mutui, bonus edilizi e agevolazioni fiscali aggiornate.",
    docLink: "https://docs.google.com/document/d/1-8fSYep-8zyik9Rk306s7SN2JmAQZTAJLbTf1RF5Cpk/edit?usp=drive_link"
  },
  { 
    id: "13", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Tributi Locali", 
    description: "Calcola e stima imposte immobiliari (IMU, TARI, Registro).",
    docLink: "https://docs.google.com/document/d/1Drln4nk39XVT595od_abYp9RTgUnaRZDmsAK4HKnaBI/edit?usp=drive_link"
  },
  { 
    id: "14", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Punti di Interesse", 
    description: "Identifica e valorizza POI intorno a immobili, arricchendo descrizioni.",
    docLink: "https://docs.google.com/document/d/1joIxAQdjmqTPVEIX2R5TT0rdrDNG_XfBBNEb6zCrkqQ/edit?usp=drive_link"
  },
  { 
    id: "15", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Professionisti Locali", 
    description: "Ricerca e qualifica professionisti locali per ogni esigenza immobiliare.",
    docLink: "https://docs.google.com/document/d/1dLgPju5lWqI8hVSnhRtoVIaY0CaiuUtP3AxFwBh6JLM/edit?usp=drive_link"
  },
  { 
    id: "16", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Ristrutturazioni", 
    description: "Stima costi, obblighi e interventi per ristrutturazioni e bonus energetici.",
    docLink: "https://docs.google.com/document/d/1vlb6XcG4S85Hwa5Yy2tD4fq3zCY3fjQW6kgwQ_8JJ1Q/edit?usp=drive_link"
  },
  { 
    id: "17", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Outlook Immobiliare", 
    description: "Analizza e prevede tendenze mercato, tempi di vendita, valutazioni.",
    docLink: "https://docs.google.com/document/d/18ijwyzcmeiZt3ww6VqeaCtkZOJ9-MTZcjSKMz_Njq-A/edit?usp=drive_link"
  },
  { 
    id: "18", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Mediazione Emotiva Localizzata", 
    description: "Gestisce dinamiche emotive in trattative immobiliari, offre piani d'azione.",
    docLink: "https://docs.google.com/document/d/1c_8mfXFDFsM1rO-TisGp1NddrSpEyRSwK-o2YKg4ljs/edit?usp=drive_link"
  },
  { 
    id: "19", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Conformità Impianti", 
    description: "Analizza conformità impianti edilizi, Direttiva Case Green e normative.",
    docLink: "https://docs.google.com/document/d/14ubcySMrFMZKMKssHa1jVjKhXmywFQ9Y4dOkDiSB69Y/edit?usp=drive_link"
  },
  { 
    id: "20", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: AML", 
    description: "Assiste in adempimenti antiriciclaggio, follow-up e gestione documentale AML.",
    docLink: "https://docs.google.com/document/d/16-hZUTaisfbUisnlASBBzgjNSP1ztbLVKyYsKJiBvBM/edit?usp=drive_link"
  },
  { 
    id: "21", 
    category: "Settore Immobiliare", 
    price: 79, 
    name: "Gromit Assistant: Filtro Pre-Rogito", 
    description: "Prepara pratiche rogito, verifica documenti e accertamenti necessari.",
    docLink: "https://docs.google.com/document/d/11f_8wtKMuY2Gv42PB1bHr3izWDAfcTEsKqRMey13ENY/edit?usp=drive_link"
  },

  // 149€ tier
  // 149€ tier - Specialized Legal & Administrative Assistants
  { 
    id: "22", 
    category: "Settore Immobiliare", 
    price: 149, 
    name: "Gromit Assistant: Privacy e Intelligenza Artificiale", 
    description: "Analisi normativa e supporto operativo su Privacy e AI in ambito professionale.",
    docLink: "https://docs.google.com/document/d/1_GKFhSKMen8yhDhk6JVXU_vzS62U-2-0h4A2w40uXGU/edit?usp=drive_link"
  },
  { 
    id: "23", 
    category: "Settore Immobiliare", 
    price: 149, 
    name: "Gromit Assistant: Fiscale e Successioni", 
    description: "Assistente esperto in normativa fiscale, successioni e gestione patrimoniale.",
    docLink: "https://docs.google.com/document/d/1easMVAndTO9bTsI6L5_qZJw3Xrl8cf9m0Ubm0aaOI6A/edit?usp=drive_link"
  },
  { 
    id: "24", 
    category: "Settore Immobiliare", 
    price: 149, 
    name: "Gromit Assistant: Edilizia e Urbanistica", 
    description: "Guida tecnica e normativa su edilizia, urbanistica e pratiche amministrative.",
    docLink: "https://docs.google.com/document/d/1ciUerNLGwKwG3LHPKwOpkaKeQEF1xq-7iEEAV7DiHhU/edit?usp=drive_link"
  },
  { 
    id: "25", 
    category: "Settore Immobiliare", 
    price: 149, 
    name: "Gromit Assistant: Contrattualistica, Compliance e Privacy", 
    description: "Supporto legale per contrattualistica, compliance aziendale e protezione dati.",
    docLink: "https://docs.google.com/document/d/1jTLuTyHi54XaBNDb4GGMe4R0X9uEgBzX303-9v1oTjs/edit?usp=drive_link"
  },
  { 
    id: "26", 
    category: "Settore Immobiliare", 
    price: 149, 
    name: "Gromit Assistant: Condominio e Mediazione", 
    description: "Esperto in gestione condominiale, risoluzione controversie e mediazione civile.",
    docLink: "https://docs.google.com/document/d/1TGSKTRm6yhrINxKUEFWw5owa0ejpc7JKtuVYAV8eLE4/edit?usp=drive_link"
  },
];

export const GemsCatalog = () => {
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleFolderClick = (folderName: string) => {
    setCurrentFolder(folderName);
    setSearchTerm("");
  };

  const handleBack = () => {
    setCurrentFolder(null);
    setSearchTerm("");
  };

  const handleShare = (gem: Gem) => {
    if (gem.docLink) {
      navigator.clipboard.writeText(gem.docLink);
      setCopiedId(gem.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const filteredGems = GEMS_DATA.filter((gem) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = gem.name.toLowerCase().includes(searchLower) ||
      gem.description.toLowerCase().includes(searchLower);
    
    if (currentFolder) {
       return matchesSearch && gem.category === currentFolder;
    }
    return matchesSearch;
  });

  const isAvailable = (gem: Gem) => gem.id === "5" || gem.id === "6";
  const availableGems = filteredGems.filter(isAvailable);
  const comingSoonGems = filteredGems.filter((gem) => !isAvailable(gem));

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-16">
      {/* Hub-like Header */}
      <div className="bg-gray-50/50 border-b border-gray-100 p-4 lg:p-6 flex items-center justify-between">
        <div className="hidden lg:flex items-center gap-2 overflow-hidden">
          <span 
            className={`text-lg font-bold transition-colors ${currentFolder ? "cursor-pointer text-gray-400 hover:text-google-blue" : "text-gray-900"}`}
            onClick={currentFolder ? handleBack : undefined}
          >
            Il mio Hub
          </span>
          <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
          <span className={`text-lg font-bold truncate ${currentFolder ? "text-google-blue" : "text-gray-400"}`}>
            {currentFolder || "Catalogo Gems"}
          </span>
        </div>

        <div className="flex flex-1 lg:flex-none items-center bg-white border border-gray-200 rounded-full px-4 py-2 gap-2 group focus-within:ring-2 focus-within:ring-google-blue/20 transition-all shadow-sm">
          <Search className="w-4 h-4 text-gray-400 group-focus-within:text-google-blue" />
          <input 
            type="text" 
            placeholder="Cerca nei Gems..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-sm focus:outline-none w-32 lg:w-64" 
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="h-[440px] overflow-hidden flex flex-col relative">
        {!currentFolder ? (
          /* FOLDER LIST VIEW */
          <div key="folders" className="overflow-y-auto flex-1 animate-fade-in flex flex-col">
            <div className="grid grid-cols-12 px-6 py-3 border-b border-gray-50 text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-gray-50/30">
              <div className="col-span-12 lg:col-span-7 flex items-center gap-1 cursor-pointer hover:text-gray-600">
                Nome <ChevronRight className="w-3 h-3 rotate-90" />
              </div>
              <div className="hidden lg:grid lg:col-span-2">Proprietario</div>
              <div className="hidden lg:block lg:col-span-3">Ultima modifica</div>
            </div>

            <div className="px-6 py-4 flex-1">
              {/* Category: Immobiliare */}
              <div 
                onClick={() => handleFolderClick("Settore Immobiliare")}
                className="grid grid-cols-12 px-4 py-3 hover:bg-gray-50 cursor-pointer group transition-colors rounded-xl items-center border-b border-gray-50"
              >
                <div className="col-span-12 lg:col-span-7 flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-google-red">
                    <Folder className="w-7 h-7 fill-current" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-google-blue transition-colors">Settore Immobiliare</span>
                </div>
                <div className="hidden lg:flex lg:col-span-2 items-center gap-2 text-xs text-gray-500">
                  <div className="w-6 h-6 rounded-full bg-google-red text-white flex items-center justify-center text-[10px] font-bold shadow-sm">C</div>
                  <span>me</span>
                </div>
                <div className="hidden lg:block lg:col-span-3 text-xs text-gray-400">10 apr 2026</div>
              </div>
              
              {/* Future Interest Sectors */}
              {["Settore Beni di Pregio", "Settore Pubblica Amministrazione", "Settore Educational", "Settore E-commerce"].map((f) => (
                 <div key={f} className="grid grid-cols-12 px-4 py-3 opacity-50 grayscale cursor-not-allowed items-center border-b border-gray-50">
                    <div className="col-span-12 lg:col-span-7 flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center text-gray-300">
                        <Folder className="w-7 h-7 fill-current" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-400">{f}</span>
                        <span className="text-[10px] text-google-blue font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100">Coming Soon</span>
                      </div>
                    </div>
                    <div className="hidden lg:flex lg:col-span-2 items-center gap-2 text-xs text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-gray-200 text-white flex items-center justify-center text-[10px] font-bold">C</div>
                      <span>me</span>
                    </div>
                    <div className="hidden lg:block lg:col-span-3 text-xs text-gray-300 italic">Prossimamente</div>
                 </div>
              ))}
            </div>
          </div>
        ) : (
          /* FILE LIST VIEW */
          <div key="files" className="bg-white flex-1 flex flex-col overflow-hidden animate-fade-in">
            <div className="px-6 pt-6 pb-2 border-b border-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Gromit Assistants</span>
                  <span className="text-sm font-bold text-gray-900">{currentFolder}</span>
                </div>
                {searchTerm && (
                  <span className="text-[10px] bg-google-blue/10 text-google-blue px-2 py-1 rounded-md font-bold">
                    {filteredGems.length} risultati
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 pt-2 pb-6 custom-scrollbar-light">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredGems.length > 0 ? (
                <>
                  {/* SECTION: DISPONIBILI */}
                  {availableGems.length > 0 && (
                    <>
                      <div className="col-span-full mb-1 mt-1 flex items-center gap-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-google-green bg-google-green-light px-2.5 py-1 rounded-md">
                          Disponibili
                        </span>
                        <div className="h-[1px] flex-1 bg-gray-100"></div>
                      </div>
                      
                      {availableGems.map((gem) => (
                        <div 
                          key={gem.id}
                          onClick={() => gem.docLink && window.open(gem.docLink, '_blank')}
                          className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-start gap-4 p-5 bg-gradient-to-br from-google-blue-light/20 via-white to-google-green-light/20 hover:from-google-blue-light/35 hover:via-white hover:to-google-green-light/35 transition-all rounded-2xl border border-google-blue/15 hover:border-google-blue/40 shadow-sm hover:shadow-card-hover group cursor-pointer"
                        >
                          {/* Google Logo */}
                          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0 border border-gray-100 p-2.5 transition-transform group-hover:scale-105">
                            <svg viewBox="0 0 24 24" className="w-full h-full">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.14-.42-.23-.88-.23-1.38z" />
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                            </svg>
                          </div>

                          <div className="flex flex-col gap-1.5 flex-1 min-w-0 w-full">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="text-sm font-extrabold text-gray-900 group-hover:text-google-blue transition-colors">
                                {gem.name.startsWith("Gromit Assistant") ? (
                                  <>
                                    <span className="bg-gradient-to-r from-google-blue via-google-red to-google-green bg-clip-text text-transparent font-black">Gromit Assistant</span>
                                    {gem.name.substring("Gromit Assistant".length)}
                                  </>
                                ) : gem.name}
                              </h4>
                            </div>
                            <p className="text-[11px] text-gray-600 font-medium leading-normal">
                              {gem.description}
                            </p>
                            
                            <div className="flex items-center justify-between mt-2 w-full pt-1.5 border-t border-gray-100/50">
                              <div className="flex items-center gap-3.5" onClick={(e) => e.stopPropagation()}>
                                {gem.docLink ? (
                                  <a 
                                    href={gem.docLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] font-extrabold text-gray-400 hover:text-google-blue uppercase tracking-wider transition-colors"
                                  >
                                    Dettagli
                                  </a>
                                ) : (
                                  <button className="text-[10px] font-extrabold text-gray-400 hover:text-google-blue uppercase tracking-wider transition-colors opacity-30 cursor-not-allowed">Dettagli</button>
                                )}
                                <span className="text-gray-300 text-[10px]">|</span>
                                <button 
                                  onClick={() => handleShare(gem)}
                                  className={`text-[10px] font-extrabold uppercase tracking-wider transition-all ${copiedId === gem.id ? "text-google-green" : "text-gray-400 hover:text-google-blue"}`}
                                >
                                  {copiedId === gem.id ? "Link Copiato!" : "Condividi"}
                                </button>
                              </div>
                              <span className="text-[8px] font-black uppercase tracking-widest bg-google-green/10 text-google-green px-2 py-0.5 rounded-md border border-google-green/10">
                                Disponibile
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {/* SECTION: PROSSIMAMENTE */}
                  {comingSoonGems.length > 0 && (
                    <>
                      <div className="col-span-full mb-1 mt-4 flex items-center gap-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-google-red bg-google-red-light px-2.5 py-1 rounded-md">
                          Prossimamente
                        </span>
                        <div className="h-[1px] flex-1 bg-gray-100"></div>
                      </div>

                      {comingSoonGems.map((gem) => (
                        <div 
                          key={gem.id}
                          className="flex items-start gap-3 p-3 bg-gray-50 hover:bg-white transition-all rounded-xl border border-transparent hover:border-google-blue/20 group hover:shadow-sm"
                        >
                          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-google-blue font-black text-lg shadow-sm flex-shrink-0 transition-transform mt-0.5 border border-gray-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-google-blue/5 via-transparent to-google-red/5 opacity-50"></div>
                            <span className="relative z-10">G</span>
                          </div>
                          
                          <div className="flex flex-col gap-1 flex-1 min-w-0 w-full">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="text-[13px] font-bold text-gray-900 truncate group-hover:text-google-blue transition-colors">
                                {gem.name}
                              </h4>
                            </div>
                            <p className="text-[10px] text-gray-500 line-clamp-2 font-medium leading-tight">
                              {gem.description}
                            </p>
                            
                            <div className="flex items-center justify-between mt-1.5 w-full">
                              <div className="flex items-center gap-2">
                                {gem.docLink ? (
                                  <a 
                                    href={gem.docLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[9px] font-bold text-gray-400 hover:text-google-blue uppercase tracking-tighter transition-colors"
                                  >
                                    Dettagli
                                  </a>
                                ) : (
                                  <button className="text-[9px] font-bold text-gray-400 hover:text-google-blue uppercase tracking-tighter transition-colors opacity-30 cursor-not-allowed">Dettagli</button>
                                )}
                                <span className="text-gray-300">|</span>
                                <button 
                                  onClick={() => handleShare(gem)}
                                  className={`text-[9px] font-bold uppercase tracking-tighter transition-all ${copiedId === gem.id ? "text-google-green" : "text-gray-400 hover:text-google-blue"}`}
                                >
                                  {copiedId === gem.id ? "Link Copiato!" : "Condividi"}
                                </button>
                              </div>
                              <span className="text-[8px] font-bold uppercase tracking-widest bg-google-red/10 text-google-red px-2 py-0.5 rounded">
                                Prossimamente
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </>
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center h-full text-gray-400 py-12">
                   <Search className="w-12 h-12 mb-4 opacity-20" />
                   <p className="text-sm font-medium text-center">Nessun assistente trovato per la ricerca.<br />Prova a cambiare termini o torna al catalogo.</p>
                </div>
              )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Drive-like Footer */}
      <div className="bg-gray-50/80 p-4 border-t border-gray-100 flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
        <p className="font-medium">1 cartella, {currentFolder ? filteredGems.length : GEMS_DATA.length} assistenti Gromit</p>
        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center gap-1"><Clock className="w-3.5 h-3.5 opacity-60" /> Ultimo accesso: oggi</span>
          <span className="flex items-center gap-1 font-semibold text-google-blue"><User className="w-3.5 h-3.5" /> Hub condiviso</span>
        </div>
      </div>
    </div>
  );
};
