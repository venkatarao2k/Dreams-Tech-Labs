import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import { About, Footer, OwnIdea, Process, WhatsAppFab } from './components/Sections';

export default function App() {
  const [domain, setDomain] = useState('all');
  const [level, setLevel] = useState('all');

  const pickDomain = (id, lvl = 'all') => {
    setDomain(id);
    setLevel(lvl);
    document.getElementById('projects')?.scrollIntoView();
  };

  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      <a href="#projects" className="sr-only">Skip to projects</a>
      <Header />
      <main>
        <Hero onPickDomain={pickDomain} />
        <Catalog domain={domain} setDomain={setDomain} level={level} setLevel={setLevel} />
        <OwnIdea />
        <Process />
        <About />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
