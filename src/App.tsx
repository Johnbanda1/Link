import React, { useState } from 'react';
import { Suspense } from 'react';
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
  }, [language]);

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