import { useState, useMemo } from 'react';
import { allProjects, categories } from '../data/projects';

const WA_INQUIRY = "https://wa.me/917095537106?text=Hi+Dreams+Tech+Labs!+I+have+an+inquiry+about+your+projects.+Can+you+help+me%3F";
const WA_PROJECT = "https://wa.me/917095537106?text=Hi+Dreams+Tech+Labs!%0A%0AI+am+looking+for+a+project.+Here+are+my+details%3A%0A%0AProject+Type%3A+%5BFinal+Year+%2F+Resume+%2F+Learning%5D%0ALanguage+I+prefer%3A+%5BTelugu+%2F+English+%2F+Tamil+%2F+Hindi%5D%0AMy+project+idea+or+requirement%3A%0A%0APlease+suggest+the+best+project+for+me!";

function ProjectCard({ project, index }) {
  return (
    <div 
      className="group glass rounded-xl p-5 card-hover flex flex-col gap-3 border border-white/[0.06] hover:border-indigo-500/30"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
             style={{background: 'rgba(99,102,241,0.12)'}}>
          {project.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-white text-sm leading-tight group-hover:text-gradient transition-all duration-300 mb-1">
            {project.name}
          </h3>
          <span className="text-[10px] font-semibold tracking-wide uppercase text-indigo-400">
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
        className="flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-white transition-colors duration-200 mt-1"
      >
        View Details
        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}

export default function AllProjects() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    return allProjects.filter(p => {
      const matchesSearch = search === '' || 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const uniqueCategories = ['All', ...new Set(allProjects.map(p => p.category))];

  return (
    <section id="all-projects" className="py-24 relative">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-indigo-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
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
        <div className="max-w-lg mx-auto mb-8">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search projects by name or category..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl glass-strong text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-sm transition-all duration-200"
            />
            {search && (
              <button 
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {uniqueCategories.slice(0, 12).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'glass text-slate-400 hover:text-white hover:border-indigo-500/30'
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
          </span>
          {(search || activeCategory !== 'All') && (
            <button 
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="text-xs text-slate-500 hover:text-white transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-slate-400 text-lg">No projects found for "{search}"</p>
            <button onClick={() => { setSearch(''); setActiveCategory('All'); }} className="mt-4 text-indigo-400 hover:text-white text-sm transition-colors">
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
