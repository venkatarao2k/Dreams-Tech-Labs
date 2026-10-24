import { useMemo, useState } from 'react';
import { domains, levels, projects, projectCount } from '../data/projects';
import { WA_OWN_IDEA, waForProject } from '../lib/whatsapp';
import { CloseIcon, PlusIcon, SearchIcon, WhatsAppIcon } from './Icons';

const domainLabel = Object.fromEntries(domains.map((d) => [d.id, d.label]));

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function terms(query) {
  return query.toLowerCase().split(/\s+/).filter(Boolean);
}

function haystack(p) {
  return [p.code, p.title, p.summary, domainLabel[p.domain], levels[p.level], ...p.stack, ...p.features]
    .join(' ')
    .toLowerCase();
}

// Wraps matched words in <mark> so results look highlighter-marked.
function Hl({ text, words }) {
  if (!words.length) return text;
  const re = new RegExp(`(${words.map(escapeRe).join('|')})`, 'gi');
  return text.split(re).map((part, i) =>
    i % 2 === 1 ? <mark key={i}>{part}</mark> : part
  );
}

function Row({ project, open, onToggle, words }) {
  const bodyId = `${project.code}-details`;

  return (
    <li className={`row${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="row-head"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={onToggle}
      >
        <span className="row-code">
          <Hl text={project.code} words={words} />
          <span className="row-meta-mobile">
            {'  '}
            {levels[project.level]}, {domainLabel[project.domain]}
          </span>
        </span>
        <span className="row-title">
          <Hl text={project.title} words={words} />
        </span>
        <span className="row-summary">
          <Hl text={project.summary} words={words} />
        </span>
        {words.length > 0 && (
          <span className="row-stack">
            <Hl text={project.stack.join(', ')} words={words} />
          </span>
        )}
        <span className="row-domain">{domainLabel[project.domain]}</span>
        <span className="row-level">{levels[project.level]}</span>
        <PlusIcon className="row-icon" />
      </button>

      {open && (
        <div className="row-body" id={bodyId}>
          <div>
            <h3>What it does</h3>
            <ul className="features">
              {project.features.map((f) => (
                <li key={f}>
                  <Hl text={f} words={words} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Built with</h3>
            <ul className="stack">
              {project.stack.map((s) => (
                <li key={s}>
                  <Hl text={s} words={words} />
                </li>
              ))}
            </ul>
            <p className="stack-note">Need a different language or framework? Ask us.</p>
            <a
              className="btn btn-wa btn-sm"
              href={waForProject(project)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Ask about {project.code}
            </a>
          </div>
        </div>
      )}
    </li>
  );
}

export default function Catalog({ domain, setDomain, level, setLevel }) {
  const [query, setQuery] = useState('');
  const [openCode, setOpenCode] = useState(null);
  const words = useMemo(() => terms(query), [query]);

  const results = useMemo(
    () =>
      projects.filter((p) => {
        if (domain !== 'all' && p.domain !== domain) return false;
        if (level !== 'all' && p.level !== level) return false;
        if (!words.length) return true;
        const hay = haystack(p);
        return words.every((w) => hay.includes(w));
      }),
    [domain, level, words]
  );

  const filtered = query || domain !== 'all' || level !== 'all';
  const reset = () => {
    setQuery('');
    setDomain('all');
    setLevel('all');
  };

  return (
    <section className="catalog" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="catalog-head">
          <h2 className="h2" id="projects-title">All projects</h2>
          <p className="lede">Open any project to see what it does and what it is built with.</p>
        </div>

        <div className="toolbar glass">
          <div className="search">
            <label htmlFor="project-search" className="sr-only">Search projects</label>
            <SearchIcon />
            <input
              id="project-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, technology or code, e.g. Python, YOLO, DTL-049"
              autoComplete="off"
            />
            {query && (
              <button type="button" className="clear" onClick={() => setQuery('')} aria-label="Clear search">
                <CloseIcon width="18" height="18" />
              </button>
            )}
          </div>

          <div className="filters">
            <div className="chips" role="group" aria-label="Filter by area">
              <button type="button" className="chip" aria-pressed={domain === 'all'} onClick={() => setDomain('all')}>
                All areas
              </button>
              {domains.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className="chip"
                  aria-pressed={domain === d.id}
                  onClick={() => setDomain(d.id)}
                >
                  {d.short}
                </button>
              ))}
            </div>

            <div className="levels" role="group" aria-label="Filter by level">
              {[['all', 'Any level'], ['btech', 'B.Tech'], ['mtech', 'M.Tech']].map(([id, label]) => (
                <button key={id} type="button" aria-pressed={level === id} onClick={() => setLevel(id)}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="list-panel glass">
        <div className="result-line" aria-live="polite">
          <span>
            {filtered
              ? `${results.length} of ${projectCount} projects`
              : `${projectCount} projects`}
          </span>
          {filtered && (
            <button type="button" onClick={reset}>
              Show all
            </button>
          )}
        </div>

        {results.length > 0 ? (
          <ul className="rows">
            {results.map((p) => (
              <Row
                key={p.code}
                project={p}
                words={words}
                open={openCode === p.code}
                onToggle={() => setOpenCode(openCode === p.code ? null : p.code)}
              />
            ))}
          </ul>
        ) : (
          <div className="empty">
            <p>
              <strong>No project matches “{query || 'these filters'}”.</strong> Try a broader word, or send
              us your idea and we will tell you whether we can build it.
            </p>
            <div className="hero-actions">
              <a className="btn btn-wa btn-sm" href={WA_OWN_IDEA} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Send your idea
              </a>
              <button type="button" className="btn btn-line btn-sm" onClick={reset}>
                Show all projects
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
