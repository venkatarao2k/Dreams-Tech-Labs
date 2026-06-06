import { featuredProjects } from '../data/projects';

const WA_LINK = "https://wa.me/917095537106?text=%F0%9F%91%8B%20Hi%20Dreams%20Tech%20Labs!%0A%0AI%20am%20looking%20for%20a%20project.%20Here%20are%20my%20details%3A%0A%0A1%EF%B8%8F%E2%83%A3%20Project%20Type%3A%20%5BFinal%20Year%20%2F%20Resume%20%2F%20Learning%5D%0A2%EF%B8%8F%E2%83%A3%20Language%20I%20prefer%3A%20%5BTelugu%20%2F%20English%20%2F%20Tamil%20%2F%20Hindi%5D%0A3%EF%B8%8F%E2%83%A3%20My%20project%20idea%20or%20requirement%3A%0A%0APlease%20suggest%20the%20best%20project%20for%20me!%20%F0%9F%99%8F";

function FeaturedCard({ project }) {
  return (
    <div className="group relative glass rounded-2xl p-6 card-hover gradient-border flex flex-col gap-4">
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${project.color} bg-opacity-20`}
             style={{background: 'rgba(99,102,241,0.1)'}}>
          {project.icon}
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full" 
              style={{background: 'rgba(99,102,241,0.1)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.2)'}}>
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-gradient transition-all duration-300">
          {project.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
          {project.description}
        </p>
      </div>

      {/* CTA */}
      <a 
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-semibold text-brand-blue group-hover:text-white transition-colors duration-300 mt-1"
      >
        View Details
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 60%)'}} />
    </div>
  );
}

export default function FeaturedProjects() {
  const scrollToAll = () => {
    document.getElementById('all-projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="section-tag">Featured Projects</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Handpicked Innovation
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated selection of our most impactful project concepts — built to inspire, designed to solve.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map(project => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <button 
            onClick={scrollToAll}
            className="btn-ghost px-8 py-3.5 text-base"
          >
            View All 42 Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
