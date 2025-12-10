import React, { useState } from 'react';
import { Accessibility, ZoomIn, Sun, Underline, X } from 'lucide-react';

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
        className="bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300 group flex items-center"
        aria-label="Chat on WhatsApp"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" className="text-white relative top-[1px]">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.272-.57-.421M12 0C5.373 0 0 5.373 0 12c0 2.125.55 4.125 1.5 5.85L.5 23.5l5.8-1c1.65.9 3.55 1.5 5.7 1.5 6.627 0 12-5.373 12-12S18.627 0 12 0m0 22c-1.838 0-3.565-.494-5.05-1.35l-.365-.21-3.75.65.65-3.65-.225-.375C2.45 15.5 2 13.8 2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10"/>
        </svg>
        <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:pr-2 pr-0 overflow-hidden transition-all duration-500 whitespace-nowrap font-bold">
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