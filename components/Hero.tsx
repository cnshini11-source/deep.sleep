import React from 'react';
import { Button } from './Button';

interface HeroProps {
  onNavigateCheckout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateCheckout }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059] rounded-full blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A059] rounded-full blur-[120px] opacity-5 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-center md:text-right order-2 md:order-1 space-y-8 animate-fade-in-up">
          <div>
            <span className="text-[#C5A059] font-bold tracking-wider text-sm uppercase mb-2 block">
              הפתרון המהפכני לשינה שקטה
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4 text-white">
              Shini <br />
              <span className="text-gradient-gold">Deep Sleep Pro</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              ערכת שינה קומפקטית שעוזרת להפחית נחירות ולישון עמוק מהלילה הראשון.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button onClick={onNavigateCheckout} className="text-xl px-10 py-4 shadow-[0_0_30px_rgba(197,160,89,0.3)]">
              רכשו עכשיו
            </Button>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-8 text-sm text-gray-500 pt-4">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C5A059] rounded-full"></div>
                משלוח מהיר
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C5A059] rounded-full"></div>
                אחריות לשנה
             </div>
          </div>
        </div>

        {/* Hero Image / Product Simulation */}
        <div 
           className="order-1 md:order-2 relative group cursor-pointer"
           onClick={onNavigateCheckout}
        >
           <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           
           <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-active:scale-95 group-hover:border-[#C5A059]/50">
              {/* Using a high quality packaging box stock image */}
              <img 
                src="https://images.unsplash.com/photo-1629363079979-456cb3c6838c?auto=format&fit=crop&q=80&w=1000" 
                alt="Shini Deep Sleep Pro Kit" 
                className="w-full h-auto object-cover"
              />
              
              {/* Digital Overlay for Branding "Professional Integration" */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                <h3 className="text-[#C5A059] text-4xl font-black tracking-[0.2em] drop-shadow-lg opacity-90 mix-blend-overlay">SHINI</h3>
                <p className="text-white/80 text-sm tracking-widest uppercase mt-2 drop-shadow-md">Deep Sleep Pro</p>
              </div>

              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm border border-[#C5A059] px-4 py-2 rounded-full flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-xs font-bold text-white">מלאי מוגבל</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};