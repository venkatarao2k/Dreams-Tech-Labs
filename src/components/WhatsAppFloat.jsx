import { useState, useEffect } from 'react';

const WA_INQUIRY = "https://wa.me/917095537106?text=👋%20Hi%20Dreams%20Tech%20Labs!%20I%20have%20an%20inquiry%20about%20your%20projects.%20Can%20you%20help%20me%3F";
const WA_PROJECT = "https://wa.me/917095537106?text=👋%20Hi%20Dreams%20Tech%20Labs!%0A%0AI%20am%20looking%20for%20a%20project.%20Here%20are%20my%20details%3A%0A%0A1%EF%B8%8F%E2%83%A3%20Project%20Type%3A%20%5BFinal%20Year%20%2F%20Resume%20%2F%20Learning%5D%0A2%EF%B8%8F%E2%83%A3%20Language%20I%20prefer%3A%20%5BTelugu%20%2F%20English%20%2F%20Tamil%20%2F%20Hindi%5D%0A3%EF%B8%8F%E2%83%A3%20My%20project%20idea%20or%20requirement%3A%0A%0APlease%20suggest%20the%20best%20project%20for%20me!%20%F0%9F%99%8F";

export default function WhatsAppFloat() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const dismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPopup(false);
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Popup */}
      {showPopup && (
        <div className="glass-strong rounded-2xl p-4 w-[240px] shadow-2xl border border-green-500/20 animate-slide-up relative">
          <button
            onClick={dismiss}
            className="absolute top-2 right-3 text-slate-500 hover:text-white transition-colors text-sm"
          >✕</button>

          <p className="text-sm text-slate-200 leading-snug mb-3 pr-4">
            👋 Hi! Looking for a project? We speak Telugu, English, Tamil & Hindi!
          </p>

          <div className="flex flex-col gap-2">
            <a
              href={WA_PROJECT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowPopup(false)}
              className="text-xs font-semibold text-center py-2 px-3 rounded-lg text-white transition-all"
              style={{background: 'linear-gradient(135deg, #16a34a, #15803d)'}}
            >
              🎯 Get a Project
            </a>
            <a
              href={WA_INQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowPopup(false)}
              className="text-xs font-semibold text-center py-2 px-3 rounded-lg text-white transition-all glass border border-white/10"
            >
              💬 Quick Inquiry
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={WA_INQUIRY}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowPopup(false)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 hover:scale-110"
        style={{background: 'linear-gradient(135deg, #16a34a, #15803d)', boxShadow: '0 4px 32px rgba(22,163,74,0.4)'}}
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full whatsapp-ring"
             style={{background: 'rgba(22,163,74,0.4)'}} />
        <div className="absolute inset-0 rounded-full whatsapp-ring"
             style={{background: 'rgba(22,163,74,0.25)', animationDelay: '0.5s'}} />
        <svg className="w-7 h-7 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
