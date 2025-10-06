import React, { useState } from 'react';
import { useEffect } from 'react';
import { optimizeTouchEvents } from './utils/performanceOptimizations';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Statistics from './components/Statistics';
import Gallery from './components/Gallery';
import Strategy from './components/Strategy';
import Governance from './components/Governance';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  // Update document title based on language
  React.useEffect(() => {
    document.title = language === 'en' 
      ? 'Bridgelink Mineral Consultants Ltd - Mining Excellence in Zambia & DRC'
      : 'Bridgelink Mineral Consultants Ltd - Excellence Minière en Zambie et RDC';
    
    // Optimize touch events for mobile
    optimizeTouchEvents();
  }, [language]);

  // Ensure all sections are properly spaced for mobile navigation
  React.useEffect(() => {
    // Add padding-top to account for fixed header on mobile
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 1024px) {
        section[id] {
          scroll-margin-top: 80px;
        }
        
        /* Improve mobile scrolling */
        body {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-y: none;
        }
        
        /* Optimize mobile performance */
        * {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          will-change: auto;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
  
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