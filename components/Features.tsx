import React from 'react';
import { Moon, Glasses, Wind } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    icon: <Moon />,
    title: 'מכשיר נגד נחירות',
    description: 'פותח את דרכי האוויר ומפחית נחירות באופן מיידי.',
    image: "https://i.imgur.com/oWgNIg2.png"
  },
  {
    icon: <Wind />,
    title: 'מכשיר לפתיחת הנשימה',
    description: 'מרחיב בעדינות את הנחיריים כדי לאפשר זרימת אוויר חלקה ומוגברת, מונע גודש ומקל על הנשימה באופן מיידי.',
    image: "https://i.imgur.com/94bI0Ho.jpg"
  },
  {
    icon: <Glasses />,
    title: 'כיסוי עיניים 3D פרימיום',
    description: 'עיצוב תלת-ממדי ארגונומי שלא לוחץ על העפעפיים, מאפשר מצמוץ חופשי וחוסם אור ב-100% לשינה עמוקה ואיכותית.',
    image: "https://i.imgur.com/LNt9yZ9.jpeg"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      
      {/* Deep Shadow Base */}
      <div className="absolute inset-0 bg-neutral-950"></div>
      
      {/* Light Blue (Azure) Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-sky-600 opacity-[0.08] blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500 opacity-[0.06] blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
      
      {/* Shadow Overlay for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
      
      {/* Subtle Texture Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.04] pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">מה יש בערכה?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 font-light text-lg">שלושת מוצרי הפרימיום לחווית שינה מושלמת</p>
        </div>

        {/* Grid - 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:border-[#C5A059]/50 hover:shadow-[0_0_40px_rgba(197,160,89,0.15)] bg-neutral-900/50 backdrop-blur-sm"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-neutral-900">
                {feature.image && (
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-90 transition-all duration-700 ease-out"
                  />
                )}
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent/10 opacity-95 group-hover:opacity-85 transition-opacity duration-500"></div>

              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  
                  {/* Floating Icon Top Right */}
                  <div className="absolute top-6 right-6">
                    <div className="w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all duration-300">
                       {/* Icon element with dynamic colors */}
                       {React.cloneElement(feature.icon as React.ReactElement, { 
                         className: "w-7 h-7 text-white group-hover:text-black transition-colors duration-300" 
                       })}
                    </div>
                  </div>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C5A059] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed font-light opacity-90 group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};