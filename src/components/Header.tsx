import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "I Gems", href: "#gems" },
    { label: "Fonti", href: "#sources" },
    { label: "Efficienza", href: "#time-savings" },
    { label: "Investimento", href: "#pricing" },
    { label: "Prova ora", href: "#try-now" },
    { label: "Supporto", href: "#support" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-b border-gray-100"
          : "bg-transparent"
      }`}
      id="header"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group" id="header-logo">
            <div className="w-9 h-9 rounded-xl bg-google-blue flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:shadow-md transition-shadow">
              G
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-tight leading-none">
                Gromit<span className="text-google-blue">.me</span>
              </span>
              <span className="text-[10px] font-medium text-gray-500 tracking-wider uppercase leading-none">
                by CSD Station
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" id="desktop-nav">
            {menuItems.map((item) => (
              <a
                key={item.href}
                className={`px-4 py-2 rounded-full transition-all text-sm font-medium ${
                  item.label === "Prova ora"
                    ? "text-google-green hover:bg-google-green/5"
                    : item.label === "Supporto"
                    ? "text-google-red hover:bg-google-red/5"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#gems" className="btn btn-primary group" id="header-cta">
              Scopri i Gems
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in">
          <nav className="flex flex-col p-4 gap-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between text-base font-medium rounded-xl px-4 py-3 transition-all ${
                  item.label === "Prova ora"
                    ? "text-google-green hover:bg-google-green/5"
                    : item.label === "Supporto"
                    ? "text-google-red hover:bg-google-red/5"
                    : "text-gray-800 hover:text-google-blue hover:bg-gray-50"
                }`}
              >
                {item.label}
                <ArrowRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <a
                href="#gems"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                Scopri i Gems
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
