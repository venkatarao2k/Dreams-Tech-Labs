import { useRef, useEffect, useState } from 'react';
import { featuredProjects } from '../data/projects';

const WA_PROJECT = "https://wa.me/917095537106?text=Hi+Dreams+Tech+Labs!%0A%0AI+am+looking+for+a+project.+Here+are+my+details%3A%0A%0AProject+Type%3A+%5BFinal+Year+%2F+Resume+%2F+Learning%5D%0ALanguage+I+prefer%3A+%5BTelugu+%2F+English+%2F+Tamil+%2F+Hindi%5D%0AMy+project+idea+or+requirement%3A%0A%0APlease+suggest+the+best+project+for+me!";

// Single observer on a parent — fixes the per-card trigger issue
function useGridReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      // No negative rootMargin — fires as soon as ANY part enters viewport
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

// Category color map for accent lines
const CATEGORY_COLORS = {
  'Healthcare':           'from-red-400 to-rose-500',
  'Career & Professional':'from-teal-400 to-cyan-500',
  'Artificial Intelligence': 'from-blue-400 to-violet-500',
  'Personal Finance':     'from-yellow-400 to-amber-500',
  'Retail & Commerce':    'from-orange-400 to-red-500',
  'Safety & Social Impact':'from-pink-500 to-purple-600',
};

function getCategoryColor(category) {
  return CATEGORY_COLORS[category] || 'from-indigo-400 to-violet-500';
}

function FeaturedCard({ project, index, gridVisible }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = ((y - rect.height / 2) / rect.height) * -8;
    const rotY = ((x - rect.width / 2) / rect.width) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px) scale(1.01)`;
  };

  const accentColor = getCategoryColor(project.category);

  return (
    <div
      style={{
        opacity: gridVisible ? 1 : 0,
        transform: gridVisible ? 'translateY(0px)' : 'translateY(28px)',
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 90}ms,
                     transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 90}ms`,
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)';
          e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.12)';
        }}
        onMouseLeave={e => {
          // Reset tilt
          if (cardRef.current) cardRef.current.style.transform = '';
          // Reset border + shadow
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
          e.currentTarget.style.boxShadow = '';
        }}
        className="group relative glass rounded-2xl p-6 flex flex-col gap-4 h-full cursor-pointer
          border border-white/[0.07] overflow-hidden"
        style={{
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          willChange: 'transform',
        }}
      >
        {/* Animated top accent line — unique color per category */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accentColor}
          scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

        {/* Shimmer sweep on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent
            -translate-x-full group-hover:translate-x-[500%] transition-transform duration-1000 ease-in-out" />
        </div>

        {/* Icon + category badge */}
        <div className="flex items-start justify-between">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl
              transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)'}}
          >
            {project.icon}
          </div>
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full font-mono tracking-wide
              transition-all duration-300 group-hover:border-indigo-400/40"
            style={{background: 'rgba(99,102,241,0.1)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.2)'}}
          >
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-display font-bold text-white text-lg mb-2
            group-hover:text-gradient transition-all duration-300 leading-snug">
            {project.name}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-4 group-hover:text-slate-300 transition-colors duration-300">
            {project.description}
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between mt-1 pt-4 border-t border-white/[0.06]">
          <a
            href={WA_PROJECT}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-brand-blue
              group-hover:text-white transition-colors duration-300"
          >
            View Details
            <svg
              className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          {/* Subtle index number */}
          <span className="text-xs font-mono text-white/[0.06] group-hover:text-white/[0.12] transition-colors">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Radial glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 65%)'}}
        />
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [headerRef, headerVisible] = useReveal();
  const [gridRef, gridVisible] = useGridReveal();

  const scrollToAll = () => {
    document.getElementById('all-projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <span className="section-tag">Featured Projects</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4 leading-tight">
            Handpicked Innovation
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated selection of our most impactful project concepts — built to inspire, designed to solve.
          </p>
        </div>

        {/* Grid — single observer here, not per card */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {featuredProjects.map((project, i) => (
            <FeaturedCard
              key={project.id}
              project={project}
              index={i}
              gridVisible={gridVisible}
            />
          ))}
        </div>

        {/* View All */}
        <div
          style={{
            opacity: gridVisible ? 1 : 0,
            transition: 'opacity 0.6s ease 600ms',
          }}
          className="text-center"
        >
          <button onClick={scrollToAll} className="btn-ghost px-8 py-3.5 text-base group">
            <span className="relative z-10">View All 48 Projects</span>
            <svg
              className="w-5 h-5 relative z-10 group-hover:translate-y-0.5 transition-transform duration-200"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}