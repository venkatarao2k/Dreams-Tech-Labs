const features = [
  {
    icon: "💡",
    title: "Innovative Project Concepts",
    description: "Every project in our library is thoughtfully designed to address real-world gaps with creative, technology-forward approaches. We focus on originality, impact, and relevance across industries."
  },
  {
    icon: "🌍",
    title: "Real-World Problem Solving",
    description: "Our project ideas are grounded in genuine challenges faced by communities, organizations, and individuals. Each concept maps directly to a problem worth solving — not just an academic exercise."
  },
  {
    icon: "🤝",
    title: "Personalized Guidance",
    description: "We believe the right project can define a career trajectory. Our team helps you understand each concept deeply, align it with your interests, and approach it with the confidence it deserves."
  },
  {
    icon: "🔬",
    title: "Practical Learning Experience",
    description: "Projects are designed to teach through doing. Every concept encourages hands-on exploration, critical thinking, and the application of skills in contexts that mirror real professional environments."
  },
  {
    icon: "🚀",
    title: "Future-Oriented Thinking",
    description: "We curate ideas at the intersection of emerging technology and social need — from AI and IoT to sustainability and digital health — preparing innovators for the industries of tomorrow."
  },
  {
    icon: "🏆",
    title: "Professional Presentation",
    description: "We provide project contexts with clarity, depth, and professional framing — ensuring that you can present your work with confidence to mentors, evaluators, and future employers alike."
  },
];

function FeatureCard({ feature, index }) {
  return (
    <div 
      className="group glass rounded-2xl p-7 card-hover border border-white/[0.06] hover:border-indigo-500/30 relative overflow-hidden"
    >
      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-5"
           style={{background: 'rgba(99,102,241,0.1)'}}>
        {feature.icon}
      </div>
      <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-gradient transition-all duration-300">
        {feature.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {feature.description}
      </p>

      {/* Number */}
      <div className="absolute top-5 right-6 font-display font-bold text-5xl text-white/[0.04] pointer-events-none select-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Bottom line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04]"
             style={{background: 'radial-gradient(ellipse, #6366f1 0%, transparent 70%)'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="section-tag">Why Choose Us</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Built for Innovators,<br />
            <span className="text-gradient">Not Just Students</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We are more than a project repository. We are a platform that accelerates how people learn, build, and launch ideas that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
