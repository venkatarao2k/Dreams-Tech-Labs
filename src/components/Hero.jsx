import { useEffect, useState } from 'react';

const WA_INQUIRY = "https://wa.me/917095537106?text=Hi+Dreams+Tech+Labs!+I+have+an+inquiry+about+your+projects.+Can+you+help+me%3F";
const WA_PROJECT = "https://wa.me/917095537106?text=Hi+Dreams+Tech+Labs!%0A%0AI+am+looking+for+a+project.+Here+are+my+details%3A%0A%0AProject+Type%3A+%5BFinal+Year+%2F+Resume+%2F+Learning%5D%0ALanguage+I+prefer%3A+%5BTelugu+%2F+English+%2F+Tamil+%2F+Hindi%5D%0AMy+project+idea+or+requirement%3A%0A%0APlease+suggest+the+best+project+for+me!";

const WORDS = ['Innovation', 'Solutions', 'Impact', 'Future'];

function TypewriterWord() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[index];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((index + 1) % WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="text-gradient relative">
      {displayed}
      <span className="inline-block w-0.5 h-[0.85em] bg-indigo-400 ml-1 align-middle animate-pulse" />
    </span>
  );
}

function GridLine({ vertical, style }) {
  return (
    <div
      className={`absolute ${vertical ? 'w-px h-full' : 'h-px w-full'} bg-gradient-to-${vertical ? 'b' : 'r'} from-transparent via-white/[0.05] to-transparent grid-bg`}
      style={style}
    />
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(7)].map((_, i) => (
          <GridLine key={`v${i}`} vertical style={{ left: `${(i + 1) * 14.28}%` }} />
        ))}
        {[...Array(9)].map((_, i) => (
          <GridLine key={`h${i}`} style={{ top: `${(i + 1) * 11.11}%` }} />
        ))}

        {/* Beam sweep across hero */}
        <div className="absolute top-1/3 left-0 right-0 h-px overflow-hidden">
          <div className="beam-sweep h-full w-48 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
        </div>
      </div>

      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-1 absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full opacity-[0.18]"
             style={{background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)'}} />
        <div className="orb-2 absolute bottom-[15%] right-[15%] w-[400px] h-[400px] rounded-full opacity-[0.12]"
             style={{background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.05]"
             style={{background: 'radial-gradient(circle, #6366f1 0%, transparent 65%)'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Tag */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
             style={{ transitionDelay: '100ms' }}>
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue status-dot inline-block"></span>
            Innovation Platform · India
          </div>
        </div>

        {/* Headline */}
        <h1 className={`font-display font-bold leading-[1.08] tracking-tight mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '200ms' }}>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-white">
            Transforming Ideas Into
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] mt-2">
            Real&#8209;World&nbsp;<TypewriterWord />
          </span>
        </h1>

        {/* Subheading */}
        <p className={`text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
           style={{ transitionDelay: '350ms' }}>
          Explore innovative project concepts, practical solutions, and future-ready ideas
          designed to inspire learning, creativity, and real-world impact.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
             style={{ transitionDelay: '450ms' }}>
          <button onClick={scrollToProjects} className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="relative z-10">Explore Projects</span>
          </button>

          <a href={WA_PROJECT} target="_blank" rel="noopener noreferrer"
             className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
             style={{background: 'linear-gradient(135deg, #16a34a, #15803d)', boxShadow: '0 4px 24px rgba(22,163,74,0.3)'}}>
            <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="relative z-10">Get a Project</span>
          </a>

          <a href={WA_INQUIRY} target="_blank" rel="noopener noreferrer"
             className="btn-ghost text-base px-8 py-3.5 w-full sm:w-auto">
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="relative z-10">Quick Inquiry</span>
          </a>
        </div>

        {/* Trust badges */}
        <div className={`flex flex-wrap items-center justify-center gap-3 mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
             style={{ transitionDelay: '550ms' }}>
          {[
            { icon: "✦", text: "42+ Innovative Projects" },
            { icon: "✦", text: "15+ Industry Domains" },
            { icon: "✦", text: "Real-World Solutions" },
          ].map(b => (
            <div key={b.text} className="flex items-center gap-2.5 glass px-4 py-2.5 rounded-full hover:border-indigo-500/30 transition-colors duration-300">
              <span className="text-indigo-400 text-xs">{b.icon}</span>
              <span className="text-sm font-medium text-slate-300">{b.text}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className={`flex justify-center transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
             style={{ transitionDelay: '700ms' }}>
          <button onClick={scrollToProjects} className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors group">
            <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1 group-hover:border-indigo-500/50 transition-colors">
              <div className="w-1 h-2 rounded-full bg-slate-600 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
