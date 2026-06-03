const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Explore Projects",
    description: "Browse through our curated library of 42 innovative project concepts spanning AI, healthcare, education, sustainability, and more. Every project is presented with full context and real-world relevance.",
  },
  {
    number: "02",
    icon: "🎯",
    title: "Choose Your Interest",
    description: "Find the concepts that align with your goals, skills, or curiosity. Use our search and category tools to narrow down ideas that genuinely excite you and match what you want to build.",
  },
  {
    number: "03",
    icon: "💬",
    title: "Connect on WhatsApp",
    description: "Reach out to our team directly on WhatsApp. No complicated forms, no waiting. Just a quick, direct conversation with people who understand your needs and can answer every question you have.",
  },
  {
    number: "04",
    icon: "🚀",
    title: "Get Guidance & Details",
    description: "Receive comprehensive project details, understand the concept deeply, and get the support you need to move forward with confidence. Your innovation journey starts the moment you connect.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="section-tag">Process</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            How It Works
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From discovery to execution — a simple, guided journey to finding and pursuing the right project idea.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-[12.5%] right-[12.5%] h-px">
            <div className="h-full bg-gradient-to-r from-blue-500/0 via-indigo-500/50 to-violet-500/0" />
            {/* Dots */}
            {steps.map((_, i) => (
              <div key={i} 
                   className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500"
                   style={{left: `${(i / (steps.length - 1)) * 100}%`, transform: 'translate(-50%, -50%)'}} />
            ))}
          </div>

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col items-center text-center pt-4">
                {/* Circle */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-8 z-10 relative"
                     style={{background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,102,241,0.2))', border: '1px solid rgba(99,102,241,0.4)'}}>
                  {step.icon}
                </div>
                
                <div className="glass rounded-2xl p-6 border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="font-mono text-indigo-400 text-xs font-bold tracking-widest mb-2">{step.number}</div>
                  <h3 className="font-display font-bold text-white text-base mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-4 relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-indigo-500/30 to-transparent" />
          
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-6 relative">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl shrink-0 z-10"
                   style={{background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,102,241,0.2))', border: '1px solid rgba(99,102,241,0.4)'}}>
                {step.icon}
              </div>
              <div className="glass rounded-2xl p-5 flex-1 border border-white/[0.06]">
                <div className="font-mono text-indigo-400 text-xs font-bold tracking-widest mb-1">{step.number}</div>
                <h3 className="font-display font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
