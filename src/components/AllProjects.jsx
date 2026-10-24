import { useState, useMemo, useRef, useEffect } from 'react';
import { allProjects, categories } from '../data/projects';

const WA_PROJECT = "https://wa.me/917095537106?text=Hi+Dreams+Tech+Labs!%0A%0AI+am+looking+for+a+project.+Here+are+my+details%3A%0A%0AProject+Type%3A+%5BFinal+Year+%2F+Resume+%2F+Learning%5D%0ALanguage+I+prefer%3A+%5BTelugu+%2F+English+%2F+Tamil+%2F+Hindi%5D%0AMy+project+idea+or+requirement%3A%0A%0APlease+suggest+the+best+project+for+me!";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function ProjectCard({ project, index, batchVisible }) {
  return (
    <div
      className={`group glass rounded-xl p-5 flex flex-col gap-3 border border-white/[0.06]
        hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1.5
        hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_0_1px_rgba(99,102,241,0.08)]
        stagger-item ${batchVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 12) * 45}ms` }}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0
          transition-transform duration-300 group-hover:scale-110"
             style={{background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)'}}>
          {project.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-white text-sm leading-tight
            group-hover:text-gradient transition-all duration-300 mb-1">
            {project.name}
          </h3>
          <span className="text-[10px] font-semibold tracking-wide uppercase text-indigo-400 font-mono">
            {project.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 flex-1">
        {project.description}
      </p>

      {/* CTA */}
      <a
        href={WA_PROJECT}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-white transition-colors duration-200 mt-1 group/link"
      >
        View Details
        <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>

      {/* Bottom shimmer */}
      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
}

export default function AllProjects() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [headerRef, headerVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  const filtered = useMemo(() => {
    return allProjects.filter(p => {
      const q = search.toLowerCase();
      const matchesSearch = search === '' ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <section id="all-projects" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 reveal ${headerVisible ? 'visible' : ''}`}>
          <div className="flex justify-center mb-4">
            <span className="section-tag">All Projects</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            42 Project Concepts
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore the complete library of innovative, practical, and future-ready project ideas.
          </p>
        </div>

        {/* Search */}
        <div className={`max-w-lg mx-auto mb-8 reveal ${headerVisible ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          <div className="relative group">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search projects by name, category, or keyword..."
              className="w-full pl-12 pr-10 py-3.5 rounded-xl glass-strong text-white placeholder-slate-500
                focus:outline-none focus:ring-2 focus:ring-indigo-500/40 text-sm transition-all duration-200
                border border-white/[0.08] focus:border-indigo-500/40"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors w-5 h-5 flex items-center justify-center rounded-full hover:bg-white/10"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap gap-2 justify-center mb-10 reveal ${headerVisible ? 'visible' : ''}`} style={{ transitionDelay: '250ms' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                  : 'glass text-slate-400 hover:text-white border border-white/[0.08] hover:border-indigo-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-slate-500">
            Showing <span className="text-indigo-400 font-semibold">{filtered.length}</span> projects
            {activeCategory !== 'All' && <span className="text-slate-600"> in <span className="text-slate-400">{activeCategory}</span></span>}
          </span>
          {(search || activeCategory !== 'All') && (
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="text-xs text-slate-500 hover:text-indigo-400 transition-colors flex items-center gap-1"
            >
              <span>✕</span> Clear filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} batchVisible={gridVisible} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-slate-400 text-lg mb-2">No projects found for "{search}"</p>
            <p className="text-slate-600 text-sm mb-5">Try a different keyword or category</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="btn-ghost text-sm px-6 py-2.5"
            >
              <span className="relative z-10">Clear search</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
