import React, { useState } from 'react';
import { MessageCircle, Accessibility, ZoomIn, Sun, Underline, X } from 'lucide-react';

export const FloatingWidgets: React.FC = () => {
  const [a11yOpen, setA11yOpen] = useState(false);

  const toggleClass = (className: string) => {
    document.documentElement.classList.toggle(className);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/XXXXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group flex items-center gap-2"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
          דברו איתנו
        </span>
      </a>

      {/* Accessibility Menu */}
      <div className="relative">
        {a11yOpen && (
          <div className="absolute bottom-14 right-0 bg-white text-black p-4 rounded-xl shadow-2xl w-48 mb-2 border border-gray-200 animate-fade-in-up">
             <div className="flex justify-between items-center mb-3 border-b pb-2">
                <span className="font-bold text-sm">כלי נגישות</span>
                <button onClick={() => setA11yOpen(false)}><X size={16} /></button>
             </div>
             <ul className="space-y-2">
                <li>
                  <button onClick={() => toggleClass('a11y-large-text')} className="w-full text-right flex items-center gap-2 hover:bg-gray-100 p-2 rounded text-sm transition">
                    <ZoomIn size={16} /> הגדלת טקסט
                  </button>
                </li>
                <li>
                  <button onClick={() => toggleClass('a11y-contrast')} className="w-full text-right flex items-center gap-2 hover:bg-gray-100 p-2 rounded text-sm transition">
                    <Sun size={16} /> ניגודיות גבוהה
                  </button>
                </li>
                <li>
                  <button onClick={() => toggleClass('a11y-links')} className="w-full text-right flex items-center gap-2 hover:bg-gray-100 p-2 rounded text-sm transition">
                    <Underline size={16} /> הדגשת קישורים
                  </button>
                </li>
             </ul>
          </div>
        )}

        <button 
          onClick={() => setA11yOpen(!a11yOpen)}
          className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors border border-gray-600"
          aria-label="Accessibility Menu"
        >
          <Accessibility size={20} />
        </button>
      </div>

    </div>
  );
};