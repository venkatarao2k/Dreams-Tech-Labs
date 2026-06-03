const WA_LINK = "https://wa.me/919652020454?text=Hi%20Dreams%20Tech%20Labs%2C%20I%20am%20interested%20in%20your%20project%20solutions.%20Please%20share%20more%20details.";

const TrustBadge = ({ icon, text }) => (
  <div className="flex items-center gap-2.5 glass px-4 py-2.5 rounded-full">
    <span className="text-brand-blue text-base">{icon}</span>
    <span className="text-sm font-medium text-slate-300">{text}</span>
  </div>
);

const GridLine = ({ vertical, style }) => (
  <div
    className={`absolute ${vertical ? 'w-px h-full' : 'h-px w-full'} bg-gradient-to-${vertical ? 'b' : 'r'} from-transparent via-white/[0.06] to-transparent`}
    style={style}
  />
);

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <GridLine key={`v${i}`} vertical style={{ left: `${(i + 1) * 16.66}%` }} />
        ))}
        {[...Array(8)].map((_, i) => (
          <GridLine key={`h${i}`} style={{ top: `${(i + 1) * 12.5}%` }} />
        ))}
      </div>

      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
             style={{background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)'}} />
        <div className="orb-2 absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
             style={{background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
             style={{background: 'radial-gradient(circle, #6366f1 0%, transparent 65%)'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Tag */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse-slow inline-block"></span>
            Innovation Platform
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold leading-[1.08] tracking-tight mb-6 animate-slide-up">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Transforming Ideas Into
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient mt-1">
            Real-World Innovation
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in animate-delay-200">
          Explore innovative project concepts, practical solutions, and future-ready ideas designed to inspire learning, creativity, and real-world impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animate-delay-300">
          <button 
            onClick={scrollToProjects}
            className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Explore Projects
          </button>
          <a 
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-base px-8 py-3.5 w-full sm:w-auto"
          >
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in animate-delay-400">
          <TrustBadge icon="✓" text="30+ Innovative Projects" />
          <TrustBadge icon="✓" text="Real-World Solutions" />
          <TrustBadge icon="✓" text="Practical Learning" />
          <TrustBadge icon="✓" text="Future Ready Concepts" />
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-float">
          <div className="flex flex-col items-center gap-2 text-slate-600">
            <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
