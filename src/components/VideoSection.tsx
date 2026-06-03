import { useScrollReveal } from "../hooks/useScrollReveal";

export const VideoSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="videos" className="section bg-white" ref={sectionRef as any}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`section-header ${isVisible ? "animate-fade-in-up" : "reveal-hidden"}`}>
          <span className="section-tag bg-google-red-light text-google-red">
            Approfondimenti
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            I Nostri <span className="text-google-red">Video</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guarda i nostri assistenti in azione e scopri come possono trasformare e ottimizzare il tuo flusso di lavoro quotidiano.
          </p>
        </div>

        {/* Video Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 ${isVisible ? "animate-fade-in-up delay-100" : "reveal-hidden"}`}>
          {/* Video 1 */}
          <div className="rounded-3xl overflow-hidden shadow-card hover:shadow-lg transition-shadow border border-gray-100 aspect-video w-full bg-gray-50 flex items-center justify-center relative group">
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-google-red/20 rounded-3xl transition-colors pointer-events-none z-10"></div>
            <iframe
              className="w-full h-full relative z-0 rounded-3xl"
              src="https://www.youtube.com/embed/1wn0XEEog3s?si=Ih0EXfXqdJL6Os3T"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="rounded-3xl overflow-hidden shadow-card hover:shadow-lg transition-shadow border border-gray-100 aspect-video w-full bg-gray-50 flex items-center justify-center relative group">
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-google-red/20 rounded-3xl transition-colors pointer-events-none z-10"></div>
            <iframe
              className="w-full h-full relative z-0 rounded-3xl"
              src="https://www.youtube.com/embed/6m8kwDkOC1U?si=mohAuCd7Trg1rzy-"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 3 */}
          <div className="rounded-3xl overflow-hidden shadow-card hover:shadow-lg transition-shadow border border-gray-100 aspect-video w-full bg-gray-50 flex items-center justify-center relative group">
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-google-red/20 rounded-3xl transition-colors pointer-events-none z-10"></div>
            <iframe
              className="w-full h-full relative z-0 rounded-3xl"
              src="https://www.youtube.com/embed/NMaK-tx8BN0?si=Cpu3FDCbUbKLmRmp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 4 */}
          <div className="rounded-3xl overflow-hidden shadow-card hover:shadow-lg transition-shadow border border-gray-100 aspect-video w-full bg-gray-50 flex items-center justify-center relative group">
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-google-red/20 rounded-3xl transition-colors pointer-events-none z-10"></div>
            <iframe
              className="w-full h-full relative z-0 rounded-3xl"
              src="https://www.youtube.com/embed/bnQkaw04Kzs?si=Mbm8CJNsh84fjAoL"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
