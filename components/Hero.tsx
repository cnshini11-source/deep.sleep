import React from 'react';
import { Button } from './Button';

interface HeroProps {
  onNavigateCheckout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateCheckout }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background radial gradient for premium feel */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-40"></div>
      
      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-center md:text-right order-2 md:order-1 space-y-8 animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-[#C5A059] font-bold tracking-widest text-sm uppercase">ערכת פרימיום לשינה מושלמת</h2>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Shini <br />
              <span className="text-gradient-gold">Deep Sleep Pro</span>
            </h1>
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
            ערכת שינה קומפקטית שעוזרת להפחית נחירות ולישון עמוק מהלילה הראשון.
            החזירו את השקט לחדר השינה.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button onClick={onNavigateCheckout}>
              רכשו עכשיו
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            מלאי מוגבל - נותרו יחידות אחרונות
          </p>
        </div>

        {/* Hero Image */}
        <div className="order-1 md:order-2 relative animate-float group cursor-pointer" onClick={onNavigateCheckout}>
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(197,160,89,0.15)] border border-neutral-800 transition-transform duration-500 group-hover:scale-[1.02]">
             {/* Placeholder for the user's specific image */}
            <img 
              src="https://images.unsplash.com/photo-1629363079979-456cb3c6838c?auto=format&fit=crop&q=80&w=1000" 
              alt="Shini Deep Sleep Pro Kit Box" 
              className="w-full h-auto object-cover transform"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            
            {/* Click hint */}
            <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur text-[#C5A059] px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              לחצו לרכישה &larr;
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#C5A059] rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#C5A059] rounded-full filter blur-[100px] opacity-10"></div>
        </div>
      </div>
    </section>
  );
};