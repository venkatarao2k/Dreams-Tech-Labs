import { domains, projects, projectCount } from '../data/projects';
import { WA_GENERAL } from '../lib/whatsapp';
import { WhatsAppIcon } from './Icons';

const countFor = (id) => projects.filter((p) => p.domain === id).length;
const mtechCount = projects.filter((p) => p.level === 'mtech').length;

export default function Hero({ onPickDomain }) {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <h1 className="display">Final-year projects you can run, understand and defend in your viva.</h1>
          <p className="lede">
            {projectCount} projects for B.Tech, MCA and M.Tech students, from web apps to machine
            learning and IoT. Pick one and ask us about it on WhatsApp. We explain in Telugu, English,
            Tamil or Hindi.
          </p>
          <div className="hero-actions">
            <a className="btn btn-wa" href={WA_GENERAL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Help me choose
            </a>
            <a className="btn btn-line" href="#projects">
              Browse all {projectCount}
            </a>
          </div>
        </div>

        <nav className="areas" aria-label="Browse by area">
          <h2>Browse by area</h2>
          <ul>
            {domains.map((d) => (
              <li key={d.id}>
                <button type="button" onClick={() => onPickDomain(d.id)}>
                  <span>{d.label}</span>
                  <span className="count">{countFor(d.id)}</span>
                </button>
              </li>
            ))}
            <li>
              <button type="button" onClick={() => onPickDomain('all', 'mtech')}>
                <span>M.Tech level only</span>
                <span className="count">{mtechCount}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
