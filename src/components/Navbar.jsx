import { useState, useEffect } from 'react';

const WA_INQUIRY = "https://wa.me/917095537106?text=Hi+Dreams+Tech+Labs!+I+have+an+inquiry+about+your+projects.+Can+you+help+me%3F";

const NAV_LINKS = ['Home', 'Projects', 'About', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Active section detection
      const sections = ['home', 'projects', 'about', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'glass-strong shadow-2xl shadow-black/40 border-b border-white/[0.07]'
        : 'bg-transparent'
    }`}>
      {/* Top accent line */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                 style={{background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 4px 16px rgba(99,102,241,0.35)'}}>
              <span className="text-white font-bold text-sm font-display">DT</span>
            </div>
            <div>
              <span className="font-display font-bold text-white text-lg leading-none block tracking-tight">DreamsTech</span>
              <span className="text-[10px] text-blue-400 tracking-[0.2em] uppercase leading-none font-mono">Labs</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.toLowerCase();
              return (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    isActive
                      ? 'text-white bg-white/[0.07]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WA_INQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5"
            >
              <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="relative z-10">Quick Inquiry</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg glass text-slate-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass-strong border-t border-white/[0.08] px-4 py-4 space-y-1">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`block w-full text-left px-4 py-3 rounded-xl transition-colors text-sm font-medium ${
                activeSection === link.toLowerCase()
                  ? 'text-white bg-indigo-500/15 border border-indigo-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {link}
            </button>
          ))}
          <a
            href={WA_INQUIRY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center mt-3 text-sm"
          >
            <span className="relative z-10">Quick Inquiry</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
