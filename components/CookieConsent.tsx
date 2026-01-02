import React, { useState, useEffect } from 'react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('shini_cookie_consent');
    if (!consent) {
      // Small delay for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('shini_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-neutral-900/95 backdrop-blur-xl border-t border-[#C5A059]/30 p-4 shadow-[0_-4px_30px_rgba(0,0,0,0.5)] animate-fade-in">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl">
        <p className="text-gray-300 text-sm text-center md:text-right font-light tracking-wide leading-relaxed">
          האתר משתמש בקובצי Cookie לשיפור חוויית המשתמש. המשך גלישה מהווה הסכמה.
        </p>
        <button
          onClick={handleAccept}
          className="bg-[#C5A059] text-black font-bold px-8 py-2.5 rounded-full text-sm hover:bg-[#b08d4b] transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(197,160,89,0.2)] whitespace-nowrap active:scale-95"
        >
          מאשר
        </button>
      </div>
    </div>
  );
};