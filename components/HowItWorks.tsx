import React from 'react';
import { Power, Moon, Ear } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "ענידה נוחה",
      description: "מניחים את הרצועות מאחורי האוזניים. המכשיר מתמקם בנוחות ובטבעיות.",
      icon: <Ear size={32} className="text-[#C5A059]" />
    },
    {
      id: 2,
      title: "הפעלה בלחיצה",
      description: "לחיצה אחת להפעלה. המכשיר נכנס למצב המתנה חכמה ונדלק רק בשינה.",
      icon: <Power size={32} className="text-[#C5A059]" />
    },
    {
      id: 3,
      title: "שינה רציפה",
      description: "זיהוי וטיפול אוטומטי בנחירות מבטיח לכם לילה שקט ושינה עמוקה.",
      icon: <Moon size={32} className="text-[#C5A059]" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-neutral-950 relative border-y border-neutral-900/50">
      
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Compact Header */}
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
             פשוט וקל לשימוש
           </h2>
           <p className="text-gray-400 text-lg font-light">
             שלושה צעדים פשוטים לשינה מושלמת
           </p>
        </div>

        {/* Clean Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
           {steps.map((step, index) => (
             <div 
                key={step.id}
                className="group relative bg-neutral-900/30 border border-white/5 rounded-3xl p-8 hover:bg-neutral-900/50 hover:border-[#C5A059]/20 transition-all duration-300"
             >
                <div className="flex flex-col items-center text-center h-full">
                    
                    {/* Icon Circle */}
                    <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:border-[#C5A059]/40 transition-all duration-300">
                        {step.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C5A059] transition-colors">
                        {step.title}
                    </h3>
                    
                    <p className="text-gray-400 text-base leading-relaxed font-light">
                        {step.description}
                    </p>

                    {/* Step Indicator */}
                    <div className="mt-auto pt-6 opacity-20 font-mono text-sm tracking-widest text-[#C5A059]">
                        0{step.id}
                    </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};