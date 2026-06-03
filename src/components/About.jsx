const stats = [
  { value: "42+", label: "Project Concepts" },
  { value: "15+", label: "Industry Domains" },
  { value: "100%", label: "Real-World Focus" },
  { value: "24/7", label: "WhatsApp Support" },
];

const values = [
  { icon: "🎨", text: "Creative Thinking" },
  { icon: "⚙️", text: "Practical Impact" },
  { icon: "🌱", text: "Continuous Innovation" },
  { icon: "🤝", text: "Community Growth" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.05]"
             style={{background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left */}
          <div>
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
              Our mission is to close the gap between ambition and execution — by providing a structured, professional library of project concepts paired with genuine human guidance. We believe every great innovator starts with one well-chosen idea, and we are here to help you find yours.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-3">
              {values.map(v => (
                <div key={v.text} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                  <span className="text-lg">{v.icon}</span>
                  <span className="text-sm font-medium text-slate-300">{v.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(stat => (
                <div key={stat.label} className="glass-strong rounded-2xl p-6 text-center border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="font-display font-bold text-4xl text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mission card */}
            <div className="glass-strong rounded-2xl p-7 border border-indigo-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
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
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                  <span className="text-xs text-slate-400">Actively Serving Innovators</span>
                </div>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400">dreamstechlabs.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
