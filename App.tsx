import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MechanismExplainer } from './components/MechanismExplainer';
import { HowItWorks } from './components/HowItWorks';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Checkout } from './components/Checkout';
import { Footer } from './components/Footer';
import { Terms } from './components/Terms';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { FloatingWidgets } from './components/FloatingWidgets';

function App() {
  const [view, setView] = useState<'home' | 'checkout' | 'terms' | 'privacy'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#C5A059] selection:text-black">
      <Header currentView={view} onViewChange={setView} />
      <main>
        {view === 'home' && (
          <>
            <Hero onNavigateCheckout={() => setView('checkout')} />
            <Features />
            <MechanismExplainer />
            <HowItWorks />
            <Reviews />
            <FAQ />
          </>
        )}
        {view === 'checkout' && <Checkout />}
        {view === 'terms' && <Terms onBack={() => setView('home')} />}
        {view === 'privacy' && <PrivacyPolicy onBack={() => setView('home')} />}
      </main>
      <Footer currentView={view} onViewChange={setView} />
      <FloatingWidgets />
    </div>
  );
}

export default App;