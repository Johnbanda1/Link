import React, { useState } from 'react';
import { Suspense } from 'react';
import { optimizeTouchEvents } from './utils/performanceOptimizations';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';
import {
  LazyAbout,
  LazyServices,
  LazyProjects,
  LazyStrategy,
  LazyGovernance,
  LazyGallery,
  LazyStatistics,
  LazyContact,
  LazyFooter
} from './components/LazyComponents';

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
        <Suspense fallback={<LoadingSpinner />}>
          <LazyAbout language={language} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <LazyServices language={language} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <LazyProjects language={language} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <LazyStatistics language={language} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <LazyGallery language={language} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <LazyStrategy language={language} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <LazyGovernance language={language} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <LazyContact language={language} />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyFooter language={language} />
      </Suspense>
    </div>
  );
}

export default App;