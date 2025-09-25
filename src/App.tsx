import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Strategy from './components/Strategy';
import Governance from './components/Governance';
import Gallery from './components/Gallery';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  // Update document title based on language
  React.useEffect(() => {
    document.title = language === 'en' 
      ? 'Bridgelink Mineral Consultants Ltd - Mining Excellence in Zambia & DRC'
      : 'Bridgelink Mineral Consultants Ltd - Excellence Minière en Zambie et RDC';
  }, [language]);

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Services language={language} />
        <Projects language={language} />
        <Statistics language={language} />
        <Gallery language={language} />
        <Strategy language={language} />
        <Governance language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;