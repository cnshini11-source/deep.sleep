import React from 'react';
import { Power, Moon, Ear } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "ענידה נוחה",
      description: "מניחים את הרצועות מאחורי האוזניים. המכשיר מתמקם בנוחות ובטבעיות.",
      icon: <Ear className="w-8 h-8 text-white group-hover:text-[#C5A059] transition-colors duration-300" />
    },
    {
      id: 2,
      title: "הפעלה בלחיצה",
      description: "לחיצה אחת להפעלה. המכשיר נכנס למצב המתנה חכמה ונדלק רק בשינה.",
      icon: <Power className="w-8 h-8 text-white group-hover:text-[#C5A059] transition-colors duration-300" />
    },
    {
      id: 3,
      title: "שינה רציפה",
      description: "זיהוי וטיפול אוטומטי בנחירות מבטיח לכם לילה שקט ושינה עמוקה.",
      icon: <Moon className="w-8 h-8 text-white group-hover:text-[#C5A059] transition-colors duration-300" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle Background Grain/Gradient */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-24">
           <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
             פשוט וקל <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#E6C88B]">לשימוש</span>
           </h2>
           <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
             טכנולוגיה מתקדמת שנגישה לכולם. שלושה צעדים פשוטים לשינה מושלמת.
           </p>
        </div>

        {/* Desktop Timeline Layout */}
        <div className="hidden md:flex justify-between items-start max-w-6xl mx-auto relative">
            {/* Connecting Line */}
            <div className="absolute top-[60px] left-0 right-0 h-[2px] bg-neutral-900 z-0"></div>
            <div className="absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent z-0"></div>

            {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center text-center w-1/3 px-4 group relative z-10">
                    
                    {/* Step Number Top */}
                    <span className="mb-4 text-5xl font-black text-neutral-800 group-hover:text-neutral-700 transition-colors duration-500 font-mono">
                      0{step.id}
                    </span>

                    {/* Icon Container */}
                    <div className="w-32 h-32 rounded-full bg-black border border-neutral-800 group-hover:border-[#C5A059] transition-all duration-500 flex items-center justify-center mb-8 shadow-2xl relative">
                        {/* Inner Glow */}
                        <div className="absolute inset-2 rounded-full bg-neutral-900/50 group-hover:bg-[#C5A059]/5 transition-colors duration-500"></div>
                        {step.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C5A059] transition-colors">
                        {step.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed font-light max-w-xs mx-auto">
                        {step.description}
                    </p>
                </div>
            ))}
        </div>

        {/* Mobile Vertical Layout */}
        <div className="md:hidden space-y-8 relative max-w-sm mx-auto">
             {/* Vertical Line */}
             <div className="absolute top-8 bottom-8 right-[2.25rem] w-[1px] bg-gradient-to-b from-[#C5A059]/10 via-[#C5A059]/40 to-[#C5A059]/10"></div>

             {steps.map((step) => (
                 <div key={step.id} className="relative flex items-center gap-6 group">
                     {/* Icon */}
                     <div className="w-20 h-20 flex-shrink-0 rounded-2xl bg-[#0A0A0A] border border-neutral-800 group-hover:border-[#C5A059]/50 transition-colors duration-300 flex items-center justify-center relative z-10 shadow-xl">
                        {step.icon}
                        
                        {/* Floating Number */}
                        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#C5A059] text-black font-bold flex items-center justify-center text-sm shadow-lg border-2 border-black">
                            {step.id}
                        </div>
                     </div>

                     <div className="flex-1 bg-neutral-900/30 p-4 rounded-xl border border-white/5">
                         <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                         <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                     </div>
                 </div>
             ))}
        </div>

      </div>
    </section>
  );
};