import { useScrollReveal } from "../hooks/useScrollReveal";
import { Clock, TrendingUp, Zap, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import efficiencyImg from "../assets/illustrations/IMG_6085.jpg";

const AnimatedCounter = ({ target, suffix = "", isVisible }: { target: number; suffix?: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);
  return <span className="stat-number">{count}{suffix}</span>;
};

const stats = [
  { icon: <Clock className="w-6 h-6" />, value: 10, suffix: " min", label: "risparmiati per interazione", color: "text-google-blue", bg: "bg-google-blue-light" },
  { icon: <TrendingUp className="w-6 h-6" />, value: 200, suffix: "+", label: "minuti risparmiati a settimana", color: "text-google-green", bg: "bg-google-green-light" },
  { icon: <Zap className="w-6 h-6" />, value: 20, suffix: "", label: "interazioni minime/settimana", color: "text-google-yellow", bg: "bg-google-yellow-light" },
  { icon: <RefreshCw className="w-6 h-6" />, value: 100, suffix: "%", label: "aggiornamenti continui", color: "text-google-red", bg: "bg-google-red-light" },
];

export const TimeSavingsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="time-savings" className="section bg-gray-50" ref={sectionRef as any}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`section-header ${isVisible ? "animate-fade-in-up" : "reveal-hidden"}`}>
          <span className="section-tag bg-google-yellow-light text-google-yellow">Efficienza</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Risparmia Tempo, Moltiplica l'<span className="text-google-yellow">Efficienza</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ogni interazione con i nostri Gems ti fa risparmiare almeno 10 minuti
            rispetto a una chat classica di Gemini.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`card flex flex-col items-center text-center gap-3 ${
                isVisible ? `animate-fade-in-up delay-${(index + 1) * 100}` : "reveal-hidden"
              }`}
              id={`stat-card-${index}`}
            >
              <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
                {stat.icon}
              </div>
              <div className={`text-3xl lg:text-4xl font-extrabold ${stat.color}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isVisible ? "animate-fade-in-up delay-500" : "reveal-hidden"}`}>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-gray-900">
              Un investimento che si <span className="gradient-text">rivaluta</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I nostri assistenti si adattano alla tua impresa, apprendendo dalle tue esigenze
              e diventando sempre più precisi. CSD Station gestisce e comunica costantemente
              aggiornamenti sia al prompt che alle fonti di intelligenza.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Il tuo Gem <strong>non perde valore nel tempo</strong>, ma anzi si rivaluta.
              Hai sempre lo strumento più performante a disposizione, permettendoti
              di concentrarti su ciò che conta: i tuoi clienti e la crescita del business.
            </p>
          </div>

          {/* Visual Mascot/Icon - Softly blended with background */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-[480px] overflow-hidden rounded-[32px]">
              <img 
                src={efficiencyImg} 
                alt="Gromit Efficiency" 
                className="w-full h-auto relative z-0 pointer-events-none select-none"
              />
              {/* Soft blending layer using the background color #F8F9FA to dilute the edges */}
              <div className="absolute inset-0 shadow-[inset_0_0_80px_30px_#F8F9FA] pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
