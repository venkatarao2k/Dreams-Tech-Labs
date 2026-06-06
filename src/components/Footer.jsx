const WA_INQUIRY = "https://wa.me/917095537106?text=Hi+Dreams+Tech+Labs!+I+have+an+inquiry+about+your+projects.+Can+you+help+me%3F";
const WA_PROJECT = "https://wa.me/917095537106?text=Hi+Dreams+Tech+Labs!%0A%0AI+am+looking+for+a+project.+Here+are+my+details%3A%0A%0AProject+Type%3A+%5BFinal+Year+%2F+Resume+%2F+Learning%5D%0ALanguage+I+prefer%3A+%5BTelugu+%2F+English+%2F+Tamil+%2F+Hindi%5D%0AMy+project+idea+or+requirement%3A%0A%0APlease+suggest+the+best+project+for+me!";

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/[0.06]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => scrollTo('home')}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                   style={{background: 'linear-gradient(135deg, #3b82f6, #6366f1)'}}>
                <span className="text-white font-bold text-sm font-display">DT</span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg leading-none block">Dreams Tech Labs</span>
                <span className="text-xs text-blue-400 tracking-widest uppercase leading-none font-mono">Innovation Platform</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              Inspiring innovation through meaningful project ideas that solve real-world challenges.
            </p>
            <p className="font-display font-semibold text-gradient text-sm italic">
              "Dream Beyond Ideas. Build Innovation."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 transition-transform inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide uppercase">Connect</h4>
            <div className="space-y-4">
              <a 
                href={WA_PROJECT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                     style={{background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)'}}>
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="text-sm group-hover:text-green-400">+91 70955 37106</span>
              </a>

              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                     style={{background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)'}}>
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">hello@dreamstechlabs.in</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                     style={{background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)'}}>
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <span className="text-sm">dreamstechlabs.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Dreams Tech Labs. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs font-mono">
            dreamstechlabs.in
          </p>
        </div>
      </div>
    </footer>
  );
}
