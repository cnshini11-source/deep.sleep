import React from 'react';
import { Button } from './Button';

interface HeroProps {
  onNavigateCheckout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateCheckout }) => {
  const PRODUCT_IMAGE_URL = "https://i.imgur.com/R4A8pSJ.png"; 

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      
      {/* Background Image - Optimized for LCP */}
      <div 
        className="absolute inset-0 w-full h-full cursor-pointer group animate-fade-in gpu-layer" 
        onClick={onNavigateCheckout}
      >
        <img 
          src={PRODUCT_IMAGE_URL}
          // Critical for speed: Eager load + High Priority
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1629363079979-456cb3c6838c?auto=format&fit=crop&q=80&w=2000"; 
          }}
          alt="Shini Deep Sleep Pro Product" 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 will-change-transform"
        />
        
        {/* Simplified Gradients for performance */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/85 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 pointer-events-none">
        <div className="max-w-2xl md:mr-0 mr-auto text-center md:text-right pointer-events-auto">
          
          <div className="space-y-6">
            <div className="animate-slide-up delay-100 inline-block border border-[#C5A059]/50 bg-black/60 px-4 py-1 rounded-full mb-4">
              <span className="text-[#C5A059] font-bold tracking-widest text-xs uppercase">
                הפתרון המלא לשינה שקטה
              </span>
            </div>

            <h1 className="animate-slide-in-right delay-200 text-5xl md:text-8xl font-black leading-tight text-white drop-shadow-lg">
              SHINI
              <span className="block text-3xl md:text-5xl mt-2 font-light tracking-[0.2em] text-gray-200">
                DEEP SLEEP PRO
              </span>
            </h1>

            <p className="animate-slide-up delay-300 text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-lg">
              ערכת השינה האולטימטיבית. <br/>
              <span className="font-bold text-white">מכשיר חכם נגד נחירות</span> + כיסוי עיניים ומגבירי זרימת אוויר בקופסה אחת יוקרתית.
            </p>

            <div className="animate-slide-up delay-300 flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-6">
              <Button onClick={onNavigateCheckout} className="text-xl px-12 py-4 border border-[#C5A059]/50 shadow-[0_0_25px_rgba(197,160,89,0.3)]">
                רכשו עכשיו
              </Button>
            </div>

            <div className="animate-fade-in delay-300 flex items-center justify-center md:justify-start gap-8 text-sm text-gray-400 pt-8 border-t border-gray-800/50 mt-8 w-fit mx-auto md:mx-0">
               <div className="flex flex-col items-center md:items-start">
                  <span className="font-bold text-[#C5A059] text-xl">משלוח מהיר</span>
                  <span>עד פתח הדלת</span>
               </div>
               <div className="w-px h-8 bg-gray-700"></div>
               <div className="flex flex-col items-center md:items-start">
                  <span className="font-bold text-[#C5A059] text-xl">תוצאה מהיום הראשון</span>
                  <span>שינה עמוקה ושקטה</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};