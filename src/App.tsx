import React, { useState } from 'react';
import { Suspense, useEffect } from 'react';
import { optimizeTouchEvents } from './utils/performanceOptimizations';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';

// Import components directly for better mobile compatibility
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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        }
        
        /* Optimize mobile animations */
        * {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
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