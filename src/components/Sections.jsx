import { EMAIL, WA_DISPLAY, WA_GENERAL, WA_OWN_IDEA } from '../lib/whatsapp';
import { WhatsAppIcon } from './Icons';

export function OwnIdea() {
  return (
    <section className="own-idea" id="own-idea" aria-labelledby="own-idea-title">
      <div className="wrap">
        <div className="own-idea-card glass">
        <div>
          <h2 className="h2" id="own-idea-title">Have your own idea or a base paper?</h2>
          <p>
            Not every project is on this list. Send us your idea, an IEEE paper you need to implement,
            or a topic you have been given. We will tell you if we can build it and how long it takes.
          </p>
        </div>
        <a className="btn" href={WA_OWN_IDEA} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          Send your idea
        </a>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: 'Pick a project',
    text: 'Search the list by technology or area, and note the project code. Not sure? Ask us to suggest one for your branch.',
  },
  {
    title: 'Message us on WhatsApp',
    text: 'Send the code with your course, branch and deadline. Tell us which language you want the explanation in.',
  },
  {
    title: 'Get the details',
    text: 'We share the scope, the stack and what is included, and answer your questions before you decide.',
  },
  {
    title: 'Build and understand it',
    text: 'We walk you through the code and the flow so you can explain every part of it with confidence.',
  },
];

export function Process() {
  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <h2 className="h2" id="process-title">How it works</h2>
        <p className="lede">Everything happens on WhatsApp. No forms, no sign-up.</p>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title} className="glass">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="about" id="contact" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about-grid">
        <div className="about-text">
          <h2 className="h2" id="about-title">About DreamsTech Labs</h2>
          <p>
            We help engineering students choose, build and understand their projects, well enough to
            present them with confidence.
          </p>
          <p>
            You talk to the people who build the projects, not a call centre. Write to us in Telugu,
            English, Tamil or Hindi.
          </p>
        </div>

        <div className="contact-card glass">
          <dl className="contact-list">
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer">{WA_DISPLAY}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>Telugu, English, Tamil, Hindi</dd>
            </div>
          </dl>
          <a className="btn btn-wa" href={WA_GENERAL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} DreamsTech Labs, dreamstechlabs.in</span>
        <nav aria-label="Footer">
          <a href="#projects">Projects</a>
          <a href="#process">How it works</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a className="wa-fab" href={WA_GENERAL} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon />
      Chat
    </a>
  );
}
