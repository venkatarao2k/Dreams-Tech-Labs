const WA_LINK = "https://wa.me/917095537106?text=Hi%20Dreams%20Tech%20Labs%2C%20I%20am%20interested%20in%20your%20project%20solutions.%20Please%20share%20more%20details.";
const WA_NUMBER = "+91 7095537106";

const contactCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    color: "text-green-400",
    bg: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.25)",
    label: "WhatsApp",
    value: WA_NUMBER,
    action: WA_LINK,
    actionText: "Chat Now →",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "text-blue-400",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.25)",
    label: "Email",
    value: "hello@dreamstechlabs.in",
    action: "mailto:hello@dreamstechlabs.in",
    actionText: "Send Email →",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    color: "text-violet-400",
    bg: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.25)",
    label: "Website",
    value: "dreamstechlabs.in",
    action: "https://dreamstechlabs.in",
    actionText: "Visit →",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full opacity-[0.05]"
             style={{background: 'radial-gradient(ellipse, #3b82f6 0%, transparent 70%)'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="section-tag">Contact</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Let's Talk Innovation
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Need help choosing the right project? Let's connect. Our team is ready to guide you to the perfect idea.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactCards.map(card => (
            <div key={card.label} className="glass rounded-2xl p-7 border border-white/[0.06] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                   style={{background: card.bg, border: `1px solid ${card.border}`}}>
                <span className={card.color}>{card.icon}</span>
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">{card.label}</div>
              <div className="text-white font-medium mb-4 text-sm">{card.value}</div>
              <a 
                href={card.action}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold ${card.color} hover:opacity-80 transition-opacity`}
              >
                {card.actionText}
              </a>
            </div>
          ))}
        </div>

        {/* Big CTA */}
        <div className="glass-strong rounded-3xl p-8 md:p-12 border border-indigo-500/20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          
          <div className="text-5xl mb-5">💬</div>
          <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-3">
            Ready to Start Your Innovation Journey?
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Reach out on WhatsApp now and our team will help you find the project concept that matches your vision, goals, and potential.
          </p>
          <a 
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-10 py-4 inline-flex"
            style={{background: 'linear-gradient(135deg, #16a34a, #15803d)', boxShadow: '0 4px 24px rgba(22,163,74,0.3)'}}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
