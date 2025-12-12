import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView?: 'home' | 'checkout' | 'terms' | 'privacy';
  onViewChange?: (view: 'home' | 'checkout' | 'terms' | 'privacy') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView = 'home', onViewChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setMobileMenuOpen(false);
    
    if (id === 'checkout') {
      onViewChange?.('checkout');
      return;
    }

    if (currentView !== 'home') {
      onViewChange?.('home');
      // Wait for view to update before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const goHome = () => {
    if (currentView !== 'home') {
      onViewChange?.('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'על הערכה', id: 'features' },
    { label: 'איך זה עובד', id: 'how-it-works' },
    { label: 'ביקורות', id: 'reviews' },
    { label: 'שאלות נפוצות', id: 'faq' },
    { label: 'רכישה', id: 'checkout' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentView !== 'home' ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg border-b border-gray-800' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={goHome} 
          className="cursor-pointer"
        >
          <h1 className="text-3xl font-black tracking-widest text-gradient-gold">SHINI</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`transition-colors text-sm font-medium tracking-wide ${
                item.id === 'checkout' 
                  ? 'text-[#C5A059] font-bold border border-[#C5A059] px-4 py-1 rounded-full hover:bg-[#C5A059] hover:text-black' 
                  : 'text-gray-300 hover:text-[#C5A059]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#C5A059]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-neutral-900 border-b border-gray-800 p-6 flex flex-col gap-4 shadow-2xl animate-fade-in-down">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-left text-lg text-white hover:text-[#C5A059] py-2 border-b border-gray-800 last:border-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};