import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Checkout } from './components/Checkout';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';

function App() {
  const [view, setView] = useState<'home' | 'checkout'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#C5A059] selection:text-black">
      <Header currentView={view} onViewChange={setView} />
      <main>
        {view === 'home' ? (
          <>
            <Hero onNavigateCheckout={() => setView('checkout')} />
            <Features />
            <HowItWorks />
            <Reviews />
            <FAQ />
          </>
        ) : (
          <Checkout />
        )}
      </main>
      <Footer currentView={view} onViewChange={setView} />
      <FloatingWidgets />
    </div>
  );
}

export default App;