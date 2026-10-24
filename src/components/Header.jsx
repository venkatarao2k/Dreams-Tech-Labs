import { useEffect, useState } from 'react';
import { WA_GENERAL } from '../lib/whatsapp';
import { WhatsAppIcon } from './Icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap">
        <div className="header-bar glass">
        <a href="#top" className="wordmark" aria-label="DreamsTech Labs, back to top">
          <b>DreamsTech</b>
          <span>Labs</span>
        </a>

        <nav className="site-nav" aria-label="Main">
          <a href="#projects">Projects</a>
          <a href="#own-idea">Your own idea</a>
          <a href="#process">How it works</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="btn btn-wa btn-sm" href={WA_GENERAL} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          Chat on WhatsApp
        </a>
        </div>
      </div>
    </header>
  );
}
