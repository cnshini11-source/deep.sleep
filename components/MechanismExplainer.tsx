import React from 'react';
import { Activity, Wind, Zap, ShieldCheck } from 'lucide-react';

export const MechanismExplainer: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      
      {/* Background Image Layer (Subtle) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/oWgNIg2.png" 
          alt="Medical simulation of airway" 
          className="w-full h-full object-cover opacity-15 grayscale mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#C5A059] rounded-full blur-[120px] opacity-5 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
                <ShieldCheck size={14} className="text-[#C5A059]" />
                <span className="text-[#C5A059] text-xs font-bold tracking-widest uppercase">SMART EMS™ TECHNOLOGY</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
             המדע שמאחורי <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#C5A059] to-[#8A6D3B]">השקט שלכם</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            תהליך ביו-טכנולוגי תלת-שלבי המבטיח נתיב אוויר פתוח ללא התערבות המשתמש.
            </p>
        </div>

        {/* The Structure */}
        <div className="max-w-7xl mx-auto relative">
            
            {/* The Connecting Spine Line - Desktop (Horizontal) */}
            <div className="hidden md:block absolute top-[40px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent z-0"></div>
            
            {/* The Connecting Spine Line - Mobile (Vertical) */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C5A059]/50 to-transparent z-0"></div>

            <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
                
                {/* Step 1: Detection (Red Accent) */}
                <div className="flex flex-col items-center text-center group">
                    <div className="relative mb-8 md:mb-12">
                        <div className="absolute inset-0 bg-red-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
                        <div className="w-20 h-20 rounded-full bg-black border border-neutral-800 flex items-center justify-center relative z-10 group-hover:border-red-500 transition-colors duration-300 shadow-2xl">
                            <Activity size={32} className="text-gray-400 group-hover:text-red-500 transition-colors" />
                        </div>
                        {/* Dot on line for mobile */}
                        <div className="md:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C5A059] shadow-[0_0_10px_#C5A059]"></div>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl w-full hover:border-red-500/30 transition-colors duration-300 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-3">זיהוי ביומטרי</h3>
                        <p className="text-gray-300 leading-relaxed text-base font-medium">
                            חיישנים מדויקים סורקים את דפוסי הנשימה 100 פעמים בשנייה ומזהים את תדר הקול הייחודי של תחילת הנחירה.
                        </p>
                    </div>
                </div>

                {/* Step 2: Treatment (Gold Accent) */}
                <div className="flex flex-col items-center text-center group">
                    <div className="relative mb-8 md:mb-12">
                         <div className="absolute inset-0 bg-[#C5A059] blur-2xl opacity-10 animate-pulse rounded-full"></div>
                        <div className="w-24 h-24 -mt-2 rounded-full bg-gradient-to-br from-neutral-900 to-black border border-[#C5A059]/50 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(197,160,89,0.15)]">
                            <Zap size={40} className="text-[#C5A059]" />
                        </div>
                        {/* Dot on line for mobile */}
                        <div className="md:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C5A059] shadow-[0_0_10px_#C5A059]"></div>
                    </div>

                    <div className="bg-gradient-to-b from-[#C5A059]/10 to-transparent border border-[#C5A059]/20 p-8 rounded-2xl w-full relative overflow-hidden flex-1 flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.5)] transform md:-translate-y-4 transition-transform">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-50"></div>
                        <h3 className="text-2xl font-bold text-white mb-3">גירוי אקטיבי</h3>
                        <p className="text-gray-200 leading-relaxed text-base font-medium">
                            המכשיר שולח פולס מיקרו-חשמלי עדין (בלתי מורגש). הפולס מכווץ את שריר הגרון הרפוי ופותח את נתיב האוויר באופן מיידי.
                        </p>
                    </div>
                </div>

                {/* Step 3: Result (Blue Accent) */}
                <div className="flex flex-col items-center text-center group">
                    <div className="relative mb-8 md:mb-12">
                        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full"></div>
                        <div className="w-20 h-20 rounded-full bg-black border border-neutral-800 flex items-center justify-center relative z-10 group-hover:border-blue-400 transition-colors duration-300">
                            <Wind size={32} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                        </div>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl w-full hover:border-blue-400/30 transition-colors duration-300 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-3">שינה עמוקה</h3>
                        <p className="text-gray-300 leading-relaxed text-base font-medium">
                            זרימת האוויר חוזרת לסדרה. הגוף נרגע, רמת החמצן בדם עולה, והשינה הופכת לרציפה, עמוקה ונטולת הפרעות.
                        </p>
                    </div>
                </div>

            </div>

        </div>
      </div>
    </section>
  );
};