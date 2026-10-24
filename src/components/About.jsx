import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 42, suffix: "+", label: "Project Concepts" },
  { value: 15, suffix: "+", label: "Industry Domains" },
  { value: 100, suffix: "%", label: "Real-World Focus" },
  { value: 24, suffix: "/7", label: "WhatsApp Support" },
];

const values = [
  { icon: "🎨", text: "Creative Thinking" },
  { icon: "⚙️", text: "Practical Impact" },
  { icon: "🌱", text: "Continuous Innovation" },
  { icon: "🤝", text: "Community Growth" },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function CountUp({ target, suffix, triggered }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const end = target;
    const duration = 1600;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target]);
  return <>{count}{suffix}</>;
}

function StatCard({ stat, index, triggered }) {
  return (
    <div
      className="glass-strong rounded-2xl p-6 text-center border border-white/[0.06] hover:border-indigo-500/30
                 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{background: 'radial-gradient(circle at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 70%)'}} />
      <div className="font-display font-bold text-4xl text-gradient mb-1 tabular-nums">
        <CountUp target={stat.value} suffix={stat.suffix} triggered={triggered} />
      </div>
      <div className="text-sm text-slate-400">{stat.label}</div>
    </div>
  );
}

export default function About() {
  const [leftRef, leftVisible] = useReveal();
  const [rightRef, rightVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal();

  return (
    <section id="about" className="py-24 relative">
      {/* Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.06]"
             style={{background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)'}} />
      </div>

      {/* Section beam */}
      <div className="absolute top-0 left-0 right-0 h-px section-beam opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div ref={leftRef} className={`reveal-left ${leftVisible ? 'visible' : ''}`}>
            <div className="flex mb-6">
              <span className="section-tag">About Us</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
              We Exist to{' '}
              <span className="text-gradient">Inspire</span>{' '}
              Innovation
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Dreams Tech Labs exists to inspire innovation through meaningful project ideas that solve real-world challenges. We are a platform for curious minds who want to build things that actually matter.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our mission is to close the gap between ambition and execution — by providing a structured, professional library of project concepts paired with genuine human guidance. Every great innovator starts with one well-chosen idea, and we are here to help you find yours.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-3">
              {values.map((v, i) => (
                <div
                  key={v.text}
                  className={`flex items-center gap-3 glass rounded-xl px-4 py-3 border border-white/[0.06]
                    hover:border-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5
                    reveal ${leftVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                >
                  <span className="text-lg">{v.icon}</span>
                  <span className="text-sm font-medium text-slate-300">{v.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className={`space-y-6 reveal-right ${rightVisible ? 'visible' : ''}`}>

            {/* Stats grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} triggered={statsVisible} />
              ))}
            </div>

            {/* Mission card */}
            <div className="glass-strong rounded-2xl p-7 border border-indigo-500/20 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{background: 'radial-gradient(circle at 0% 100%, rgba(99,102,241,0.06) 0%, transparent 60%)'}} />

              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-display font-bold text-white text-lg mb-3">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed italic text-sm">
                "Dream Beyond Ideas. Build Innovation."
              </p>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                We are committed to making meaningful project exploration accessible to every innovator — regardless of their background, institution, or experience level.
              </p>

              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 status-dot" />
                  <span className="text-xs text-slate-400">Actively Serving Innovators</span>
                </div>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400 font-mono">dreamstechlabs.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
