import React from 'react';
import { Instagram, Facebook, Mail, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  currentView?: 'home' | 'checkout' | 'terms' | 'privacy' | 'refunds' | 'accessibility';
  onViewChange?: (view: 'home' | 'checkout' | 'terms' | 'privacy' | 'refunds' | 'accessibility') => void;
}

export const Footer: React.FC<FooterProps> = ({ currentView, onViewChange }) => {
  // CANONICAL BRAND LOGO
  const LOGO_URL = "https://i.imgur.com/jXZLAcX.jpeg";

  const handleNavigation = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (currentView !== 'home') {
      onViewChange?.('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (view: 'terms' | 'privacy' | 'refunds' | 'accessibility', e: React.MouseEvent) => {
    e.preventDefault();
    onViewChange?.(view);
  };

  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8 text-center md:text-right">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <img 
              src={LOGO_URL} 
              alt="Shini Logo" 
              loading="lazy"
              width="600"
              height="200"
              className="h-20 w-auto mb-6 mx-auto md:mx-0 object-contain"
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              אנחנו ב-Shini מאמינים ששינה טובה היא הבסיס לחיים טובים. הערכה שלנו פותחה כדי לתת לכם ולבני הזוג שלכם שקט נפשי (ושינה שקטה).
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#features" onClick={(e) => handleNavigation('features', e)} className="hover:text-[#C5A059] transition-colors">על הערכה</a></li>
              <li><a href="#how-it-works" onClick={(e) => handleNavigation('how-it-works', e)} className="hover:text-[#C5A059] transition-colors">איך זה עובד</a></li>
              <li><a href="#reviews" onClick={(e) => handleNavigation('reviews', e)} className="hover:text-[#C5A059] transition-colors">ביקורות</a></li>
              <li><a href="#faq" onClick={(e) => handleNavigation('faq', e)} className="hover:text-[#C5A059] transition-colors">שאלות נפוצות</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4">משפטיות</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" onClick={(e) => handleLinkClick('terms', e)} className="hover:text-[#C5A059] transition-colors">תנאי שימוש</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick('privacy', e)} className="hover:text-[#C5A059] transition-colors">מדיניות פרטיות</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick('refunds', e)} className="hover:text-[#C5A059] transition-colors">מדיניות החזרים</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick('accessibility', e)} className="hover:text-[#C5A059] transition-colors">הצהרת נגישות</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4">צרו קשר</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} /> support@shini-sleep.co.il
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} /> 053-8227778
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MessageCircle size={16} /> זמינים בווצאפ
              </li>
            </ul>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
               <a href="https://www.instagram.com/shin_sleep.pro?igsh=cGhpMGJ0ZGJ1Z2s4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#C5A059]"><Instagram size={20} /></a>
               <a href="#" className="text-gray-500 hover:text-[#C5A059]"><Facebook size={20} /></a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col items-center justify-center gap-4 text-xs text-gray-600">
          <div className="flex flex-col items-center gap-1">
             <p className="text-lg font-medium text-gray-400 tracking-wide">
               שיני הפתרון המושלם לנחירות ושינה מושלמת
             </p>
             <p className="text-[10px] text-gray-600 font-light">
               הדרכה לשימוש נכון במכשיר והמלצות לשינה בריאה ונעימה
             </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full justify-between items-center mt-2">
              <p>© 2024 Shini Deep Sleep Pro. כל הזכויות שמורות.</p>
              <p>נבנה בסטנדרט הגבוה ביותר.</p>
          </div>
          {/* Hidden SEO Text */}
          <div className="sr-only">
             פיתרון לנחירות שינה טובה מפסיקים לנחור שיני המכשיר המתקדם ביותר לנחירות
          </div>
        </div>
      </div>
    </footer>
  );
};